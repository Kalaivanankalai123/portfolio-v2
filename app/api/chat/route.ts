import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { promises as fs } from 'fs';
import path from 'path';

export const maxDuration = 30;

let cachedResume = '';

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (!cachedResume) {
    try {
      const resumePath = path.join(process.cwd(), 'content', 'data', 'resume-context.txt');
      cachedResume = await fs.readFile(resumePath, 'utf8');
    } catch (error) {
      console.error("Could not read resume context file:", error);
      cachedResume = "Kalaivanan K is a Robotics Software Engineer based in Bengaluru.";
    }
  }

  const systemPrompt = `You are a professional AI assistant integrated into the personal engineering portfolio website of Kalaivanan K.
  Your primary job is to answer questions from recruiters, hiring managers, and visitors about Kalaivanan's professional background, technical skills, and projects.
  
  RULES:
  - Be concise, polite, and professional.
  - Base your answers STRICTLY on the context provided below.
  - If a user asks a question that cannot be answered using the context, politely state that you do not have that information.
  - Do not hallucinate or make up skills/experience.
  
  CONTEXT ABOUT KALAIVANAN K:
  ${cachedResume}
  `;

  try {
    // 1. Create a strict 10-second timeout controller
    const abortController = new AbortController();
    const timeoutId = setTimeout(() => abortController.abort(), 10000);

    const result = await streamText({
      model: google('gemini-3.8-flash'),
      system: systemPrompt,
      messages,
      // 2. Disable default exponential backoff retries to prevent 5-minute hangs
      maxRetries: 0,
      abortSignal: abortController.signal,
    });

    // Clear the timeout if the connection succeeds
    clearTimeout(timeoutId);

    const textStream = result.textStream;
    const encoder = new TextEncoder();
    
    const customStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of textStream) {
            controller.enqueue(encoder.encode(chunk));
          }
          controller.close();
        } catch (e: any) {
          if (e?.code !== 'ERR_INVALID_STATE') {
            console.error("Stream interrupted:", e);
          }
        }
      },
      cancel() {
        console.log("Client disconnected. Cancelling stream.");
      }
    });

    return new Response(customStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      }
    });
    
  } catch (apiError: any) {
    console.error("Gemini API Error:", apiError);
    return new Response(
      JSON.stringify({ error: "Google's AI servers are currently overloaded. Please try again in a moment." }), 
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}