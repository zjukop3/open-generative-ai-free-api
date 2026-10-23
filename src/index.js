import express from 'express';
import dotenv from 'dotenv';
import { chatHandler, modelsHandler } from './openai-compat.js';

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 4000;

// OpenAI compatible endpoints
app.post('/v1/chat/completions', chatHandler);
app.get('/v1/models', modelsHandler);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Open Generative AI Free API bridge running on http://localhost:${PORT}`);
});
