// gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai"; 

// 1. Initialize the Gemini client with your API key
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

let chat = null;

async function runChat(prompt) {
  const modelName = "gemini-2.5-flash"; // use a valid model name

  if (!prompt || prompt.trim() === "") {
    throw new Error("Prompt is required");
  }

  // 2. Create the model and chat session only once
  if (!chat) {
    const model = genAI.getGenerativeModel({ model: modelName });
    chat = await model.startChat();
  }

  // 3. Send the user's message
  console.log(`User: ${prompt}`);
  const result = await chat.sendMessage(prompt);
  const text = result.response.text();

  console.log(`Gemini: ${text}`);
  return text;
}

export default runChat;
