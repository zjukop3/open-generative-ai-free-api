import fetch from 'node-fetch';

const BASE_URL = process.env.OPEN_GENERATIVE_AI_BASE_URL || 'http://localhost:3000';

/**
 * Convert OpenAI chat completion request to Open Generative AI native format.
 * This is a skeleton that you must adapt to the main project's actual API.
 */
export async function chatHandler(req, res) {
  try {
    const { model, messages, stream, ...rest } = req.body;

    // Example: map to a potential internal endpoint of Open Generative AI
    const nativePayload = {
      model: model,
      prompt: messages ? messages.map(m => m.content).join('\n') : '',
      // ... map other parameters
    };

    // Call the actual model service (placeholder URL)
    const response = await fetch(`${BASE_URL}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nativePayload),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return res.status(response.status).json({ error: { message: errorText } });
    }

    const data = await response.json();

    // Translate response to OpenAI format
    const openaiResponse = {
      id: 'chatcmpl-' + Date.now(),
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model: model,
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content: data.output || data.text || 'No response', // adjust field name
          },
          finish_reason: 'stop',
        },
      ],
      usage: {
        prompt_tokens: 0,
        completion_tokens: 0,
        total_tokens: 0,
      },
    };

    res.json(openaiResponse);
  } catch (error) {
    console.error('Chat handler error:', error);
    res.status(500).json({ error: { message: 'Internal server error' } });
  }
}

/**
 * Return a list of available models in OpenAI format.
 */
export async function modelsHandler(req, res) {
  // In a real implementation, fetch model list from the main project
  const models = [
    { id: 'gpt-4o', object: 'model', created: 1686935002, owned_by: 'open-generative-ai' },
    { id: 'midjourney', object: 'model', created: 1686935002, owned_by: 'open-generative-ai' },
    { id: 'sora', object: 'model', created: 1686935002, owned_by: 'open-generative-ai' },
    // ... add all 600+ models here dynamically
  ];

  res.json({
    object: 'list',
    data: models,
  });
}
