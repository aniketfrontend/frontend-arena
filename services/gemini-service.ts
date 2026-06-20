import { Question } from "@/types/question";
import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
  throw new Error("Missing GEMINI_API_KEY");
}

const ai = new GoogleGenAI({
  apiKey,
});

export async function generateQuestions(topic: string): Promise<Question[]> {
  const prompt = `
Generate 5 frontend interview MCQs about ${topic}.

Rules:
- Return valid JSON only.
- No markdown.
- No explanations.
- Each question should have:

{
  "question": "",
  "options": [],
  "correctAnswer": ""
}

Return an array.
`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    },
  });

  const text = response.text;

  if (!text) {
    throw new Error("No response from Gemini");
  }

  try {
    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("Raw Gemini response:", text);

    throw new Error("Failed to parse Gemini response");
  }
}
