import { NextResponse } from "next/server";
import { generateQuestions } from "@/services/gemini-service";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const topic = searchParams.get("topic");

    if (!topic) {
      return NextResponse.json({ error: "Topic is required" }, { status: 400 });
    }

    const questions = await generateQuestions(topic);

    return NextResponse.json(questions);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to generate questions" },
      { status: 500 }
    );
  }
}
