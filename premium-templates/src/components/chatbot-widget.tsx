"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<{ role: string; content: string }[]>([
        { role: "assistant", content: "Bonjour ! Je suis l'assistant d'ArnO Boulangerie. Comment puis-je vous aider ?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ messages: [...messages, userMessage] }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                console.error("Chat API Error Details:", errorData);
                throw new Error(errorData.details || errorData.error || "Failed to fetch");
            }

            const data = await response.json();
            const aiMessage = data.choices[0].message;
            setMessages((prev) => [...prev, aiMessage]);
        } catch (error: any) {
            console.error("Chat Error:", error);
            setMessages((prev) => [...prev, { role: "assistant", content: `Erreur: ${error.message || "Problème technique."}` }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl w-[350px] md:w-[400px] h-[500px] mb-4 overflow-hidden border border-[#E07A5F]/20 flex flex-col font-sans"
                    >
                        {/* Header */}
                        <div className="bg-[var(--color-boulangerie-primary)] p-4 flex justify-between items-center text-white">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                                    <MessageCircle size={18} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm">Assistant ArnO</h3>
                                    <p className="text-xs opacity-80">Toujours là pour vous</p>
                                </div>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#FDFBF7]">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === "user"
                                            ? "bg-[var(--color-boulangerie-primary)] text-white rounded-br-none"
                                            : "bg-white border border-gray-200 text-[#2C2C2C] rounded-bl-none shadow-sm"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-bl-none shadow-sm">
                                        <Loader2 className="animate-spin text-[var(--color-boulangerie-primary)]" size={18} />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="p-3 bg-white border-t border-gray-100 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Posez votre question..."
                                className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-boulangerie-primary)]/20 transition-all text-black"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-[var(--color-boulangerie-primary)] text-white p-2.5 rounded-full hover:bg-[var(--color-boulangerie-primary)]/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[var(--color-boulangerie-primary)] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
                {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
            </motion.button>
        </div>
    );
};
