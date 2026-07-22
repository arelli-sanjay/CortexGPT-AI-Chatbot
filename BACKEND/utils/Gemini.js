import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getGeminiResponse = async (message) => {
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash"
    });

    const result = await model.generateContent(message);
    const response = await result.response;

    return response.text();
  } catch (err) {
    console.log(err);
    return "Error from Gemini";
  }
};

export default getGeminiResponse;