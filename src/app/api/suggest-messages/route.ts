import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

const openai = new OpenAI({
  apiKey: process.env.GROQ_API_KEY || '',
  baseURL: 'https://api.groq.com/openai/v1',
});

export async function POST(req: Request) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { message: 'GROQ_API_KEY is not configured' },
        { status: 500 }
      );
    }

    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform. Avoid personal or sensitive topics. CRITICAL INSTRUCTION: Do NOT include any introductory or concluding text (e.g. do not say 'Here are your questions:'). Your entire output must consist ONLY of the 3 questions separated by '||'. Keep each question very short (maximum 10 words each). Example output: 'What is your favorite hobby?||If you could travel anywhere, where?||What makes you happy?'.";

    const response = await openai.chat.completions.create({
      model: 'llama-3.1-8b-instant', // A very fast, free model on Groq
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });

    const stream = OpenAIStream(response as any);
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error('An unexpected error occurred:', error);
    return NextResponse.json(
      { message: 'Error suggesting messages' },
      { status: 500 }
    );
  }
}
