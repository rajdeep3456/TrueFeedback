const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function run() {
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
  
  const prompt = "Say hi";
  try {
    const result = await model.generateContentStream(prompt);
    for await (const chunk of result.stream) {
        console.log(chunk.text());
    }
  } catch (e) {
    console.error(e);
  }
}
run();
