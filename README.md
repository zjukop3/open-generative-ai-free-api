# Open Generative AI Free API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-green)](https://nodejs.org)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

> 🧩 为 [Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) 生态提供的 **OpenAI 兼容免费 API 桥接服务**。
>
> 将主项目聚合的 600+ 强大模型（Flux, Midjourney, Kling, Sora, Veo 等）以统一的 OpenAI 格式接口对外暴露，让任何客户端快速接入，无需适配私有协议。

---

## 📖 中文说明

### 为什么有这个项目？

[Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) 是一个强大的自托管 AI 图像与视频生成工作室，集成了超过 600 个先进模型，并且完全开源、无内容限制。然而，它的原生调用接口并非 OpenAI 兼容格式，这使得大量依赖 OpenAI API 的生态工具（如聊天应用、自动化工作流）难以直接集成。

**本项目则为 Open Generative AI 提供了一个标准化的 OpenAI 兼容 API 层**，让社区可以像调用 OpenAI 一样免费使用所有模型，无需修改任何代码。

> ⚠️ 本项目是 [Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) 的**生态补充项目**，不替代主项目，也不包含任何模型本身。您需要先部署主项目实例，再通过本桥接层进行标准化访问。

### ✨ 特性

- 🔌 **完整的 OpenAI 兼容接口**：支持 `/v1/chat/completions`、`/v1/images/generations` 等关键端点
- 🧠 **600+ 模型即插即用**：映射主项目内所有可用模型，统一调用
- ⚡ **零依赖适配**：兼容任何 OpenAI SDK 或工具链（如 LangChain、AutoGPT）
- 🛡️ **本地自托管，无内容过滤**：与主项目一样，完全尊重用户创作自由
- 📦 **轻量级服务**：单文件部署，资源占用极低
- 🌍 **中英双语支持**：文档与社区友好

### 📋 快速上手

确保您已部署并启动 [Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) 实例（默认地址 `http://localhost:3000`）。

```bash
# 克隆本项目
git clone https://github.com/your-username/open-generative-ai-free-api.git
cd open-generative-ai-free-api

# 安装依赖
npm install

# 复制环境变量配置
cp .env.example .env
# 编辑 .env 设置 OPEN_GENERATIVE_AI_BASE_URL 指向您的实例

# 启动桥接服务
npm start
```

现在您可以向 `http://localhost:4000/v1/chat/completions` 发送请求：

```bash
curl http://localhost:4000/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer any-key" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello!"}]
  }'
```

返回格式与 OpenAI 完全一致。

### 🗺️ Roadmap

- [x] `/v1/chat/completions` 基础实现
- [x] 模型列表端点 `/v1/models`
- [ ] 支持流式传输（SSE）
- [ ] 图像生成端点 `/v1/images/generations`
- [ ] 多模态输入支持
- [ ] 完善错误处理与重试机制
- [ ] Docker 支持

### ⚖️ License

本项目采用 [MIT License](LICENSE)。

---

## 🇬🇧 English

### Why this project?

[Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) is a powerful self-hosted AI image & video generation studio with over 600 models, completely open-source and free from content filters. However, its native API is not OpenAI-compatible, making it difficult for the vast ecosystem of OpenAI-based tools to integrate directly.

**This repo provides a lightweight OpenAI-compatible API layer** that translates OpenAI-format requests into calls to the Open Generative AI backend, enabling any client to use all 600+ models seamlessly.

> ⚠️ **This is a complementary project**, not a replacement. It requires a running instance of [Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI).

### ✨ Features

- 🔌 **Full OpenAI API compatibility** – endpoints like `/v1/chat/completions`, `/v1/images/generations`, etc.
- 🧠 **600+ models unified** – all models from the main project accessible through one standard interface
- ⚡ **Plug-and-play** – works with any OpenAI SDK (Python, Node.js, LangChain, etc.)
- 🛡️ **Self-hosted, no content filters** – your instance, your rules
- 📦 **Lightweight** – minimal dependencies, low resource usage

### 🚀 Quick Start

1. Deploy [Open Generative AI](https://github.com/Anil-matcha/Open-Generative-AI) (default `http://localhost:3000`).
2. Clone this repo and install dependencies:
   ```bash
   git clone https://github.com/your-username/open-generative-ai-free-api.git
   cd open-generative-ai-free-api
   npm install
   cp .env.example .env   # edit base URL if needed
   npm start
   ```
3. Call the bridge:
   ```bash
   curl http://localhost:4000/v1/chat/completions \
     -H "Content-Type: application/json" \
     -H "Authorization: Bearer your-api-key" \
     -d '{"model": "gpt-4o", "messages": [{"role": "user", "content": "Hi"}]}'
   ```

### 🗺️ Roadmap

- [x] Basic `/v1/chat/completions`
- [x] `/v1/models` endpoint
- [ ] Streaming support (SSE)
- [ ] Image generation endpoint
- [ ] Multimodal input
- [ ] Robust error handling
- [ ] Docker support

### 📄 License

MIT – see [LICENSE](LICENSE).
