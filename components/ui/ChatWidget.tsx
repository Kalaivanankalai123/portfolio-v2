'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hello! I am Kalaivanan K's AI Assistant. Ask me anything about his projects, technical stack, or background." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const updatedMessages = [...messages, userMessage];
    let assistantMsg: Message = { role: 'assistant', content: '' };
    setMessages((prev) => [...prev, assistantMsg]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) throw new Error('Streaming connection aborted.');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const textChunk = decoder.decode(value);
          assistantMsg.content += textChunk;
          setMessages((prev) => [...prev.slice(0, -1), { ...assistantMsg }]);
        }
      }
    } catch (err) {
      console.error(err);
      assistantMsg.content = "Connection encountered an error. Please try again.";
      setMessages((prev) => [...prev.slice(0, -1), assistantMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500 dark:hover:border-cyan-500/50 px-5 py-3 rounded-full shadow-lg transition-all duration-200 flex items-center gap-2 font-mono text-xs"
        >
          <span className="w-2 h-2 bg-cyan-500 dark:bg-cyan-400 rounded-full"></span>
          Ask My AI
        </button>
      )}

      {isOpen && (
        <div className="w-[calc(100vw-3rem)] max-w-[360px] h-[480px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl flex flex-col justify-between overflow-hidden transition-colors duration-300">
          
          <div className="bg-white/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-zinc-800 px-4 py-3 flex items-center justify-between backdrop-blur-sm">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-cyan-500 dark:bg-cyan-400 rounded-full"></span>
              <span className="text-zinc-900 dark:text-zinc-100 text-xs font-semibold font-mono uppercase tracking-wider">AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors p-1 text-lg leading-none">
              ×
            </button>
          </div>

          <div className="flex-grow p-4 overflow-y-auto space-y-4 text-sm font-sans text-zinc-700 dark:text-zinc-300">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-lg px-4 py-2.5 leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100'
                    : 'bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-sm dark:shadow-none'
                }`}>
                  {msg.content || <span className="animate-pulse text-cyan-500 dark:text-cyan-400">▋</span>}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="border-t border-zinc-200 dark:border-zinc-800 p-3 bg-white dark:bg-zinc-900/50 flex gap-2 transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              disabled={isLoading}
              className="flex-grow bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 focus:border-cyan-500 rounded px-3 py-2 text-sm text-zinc-900 dark:text-zinc-100 outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 px-4 py-2 rounded text-xs font-semibold hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-colors disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}