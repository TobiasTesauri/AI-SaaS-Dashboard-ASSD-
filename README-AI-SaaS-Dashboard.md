# 🧠 AI SaaS Dashboard

A modern, responsive analytics dashboard for SaaS platforms — powered by real-time AI insights, interactive visualizations, and full offline support.

> 💡 Built with React, TailwindCSS, D3.js, OpenAI, and Firebase.  
> 🔧 Backend: Node.js + Express | AI via GPT-4 | Deployed on Render & Vercel

---

## 🚀 Features

- 📊 **Live Metrics** — Real-time graphs with D3.js
- 🤖 **AI Assistant** — Ask business-related questions, get intelligent answers via GPT-4
- 💾 **Offline Mode** — Data persists locally with automatic sync (via Firebase)
- 🌑 **Dark Mode** — Clean, responsive UI built with Tailwind
- ☁️ **Full-stack Ready** — Node.js backend + Render deploy + Vercel frontend

---

## 📦 Stack

| Frontend            | Backend         | AI & Data       | DevOps & Infra     |
|---------------------|-----------------|-----------------|--------------------|
| React + TailwindCSS | Node.js + Express | OpenAI (GPT-4)   | Render (API)       |
| Redux (optional)    | REST API + gRPC ready | Firebase (Offline Sync) | Vercel (Frontend)  |
| D3.js (Charts)      | Rate Limiting + Circuit Breaker | AsyncStorage (RN) | Docker-ready       |

---

## 🧪 Getting Started

### Local Dev

```bash
# Backend
cd server
npm install
export OPENAI_API_KEY=sk-...
node index.js

# Frontend
cd client
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

---

## 🌍 Deploy

### 🔁 Backend (Render)

1. Push the repo to GitHub
2. Go to [Render](https://render.com), "New Web Service"
3. Connect your repo and select `server` folder
4. Add `OPENAI_API_KEY` as env variable
5. Done!

### 🌐 Frontend (Vercel)

1. Go to [Vercel](https://vercel.com), "New Project"
2. Select the `client` directory
3. Deploy — it just works

---

## 🧑‍🎨 Credits

Made with ❤️ by **Tobias Tesauri**

---

### 📣 Want to contribute?

Pull requests and ideas are welcome! This project is perfect for developers looking to explore full-stack AI-powered dashboards.