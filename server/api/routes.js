const express = require('express');
const router = express.Router();
const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
}));

router.get('/metrics', (req, res) => {
  res.json([
    { name: "Users", value: 1200 },
    { name: "Revenue", value: 5600 },
    { name: "Conversions", value: 187 }
  ]);
});

router.post('/ask', async (req, res) => {
  const { prompt } = req.body;

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({ answer: completion.data.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI error:", error.message);
    res.status(500).json({ error: "OpenAI API error" });
  }
});

module.exports = router;