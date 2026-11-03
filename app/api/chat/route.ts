import { google } from '@ai-sdk/google';
import { streamText } from 'ai';
import { resumeData } from '@/content/data/resume';

// Enable Edge runtime to completely bypass Vercel's 30-second timeout
export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const systemPrompt = `You are a professional AI assistant integrated into the personal engineering portfolio website of Kalaivanan K.
Your primary job is to answer questions from recruiters, hiring managers, and visitors about Kalaivanan's professional background, technical skills, and projects.

Here is Kalaivanan's background information:
${resumeData}

RULES:
- Answer questions accurately based ONLY on the provided background information.
- Be concise, professional, and helpful.
- If you don't know the answer, politely state that the user can contact Kalaivanan directly via the contact form.
- Do not hallucinate or make up skills or projects that are not listed.`;

    const result = await streamText({
      // Ensure you are using the correct model string for your provider
      model: google('models/gemini-1.5-flash'), 
      system: systemPrompt,
      messages,
    });

    return result.toDataStreamResponse();
    
  } catch (error) {
    console.error('Chat API Error:', error);
    return new Response(
      JSON.stringify({ error: 'An error occurred while processing your request.' }), 
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}