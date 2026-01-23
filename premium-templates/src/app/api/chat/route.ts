import { NextResponse } from 'next/server';

const AIML_API_KEY = process.env.AIML_API_KEY || "your-aiml-api-key"; // Should be in .env

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { messages } = body;

        if (!messages) {
            return NextResponse.json({ error: "No messages provided" }, { status: 400 });
        }

        // System Prompt with Bakery Context
        const systemMessage = {
            role: "developer",
            content: `You are the helpful assistant for ArnO Boulangerie in Nantes.
      Address: 16 Rue de Verdun, 44000 Nantes.
      Hours: Mon-Fri 07:00-20:00, Sat 07:30-19:30, Sun Closed.
      Specialties: Sourdough bread (Levain naturel), organic flours, pastries.
      Tone: Friendly, artisanal, French bakery style.
      IMPORTANT: You must ALWAYS answer in French, regardless of the language of the user's message.
      
      If asked about reviews, refer to the general high quality mentioned by customers (4.8/5 stars).`
        };

        const finalMessages = [systemMessage, ...messages];

        const response = await fetch("https://api.aimlapi.com/chat/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${AIML_API_KEY}`
            },
            body: JSON.stringify({
                model: "google/gemma-3n-e4b-it", // Reverting to Gemma 3 as requested
                messages: finalMessages,
                max_tokens: 500,
            }),
        });

        if (!response.ok) {
            const errorText = await response.text();
            return NextResponse.json({ error: "AIML API Error", details: errorText }, { status: response.status });
        }

        const data = await response.json();
        return NextResponse.json(data);

    } catch (error) {
        console.error("Chat API Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
