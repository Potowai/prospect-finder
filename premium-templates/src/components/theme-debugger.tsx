"use client";

import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";

const fonts = {
    serif: [
        { name: "Playfair Display", value: "var(--font-playfair), ui-serif, Georgia, serif" },
        { name: "Cinzel", value: "'Cinzel', serif" },
        { name: "Cormorant", value: "'Cormorant Garamond', serif" },
        { name: "Merriweather", value: "'Merriweather', serif" },
        { name: "Lora", value: "'Lora', serif" },
        { name: "Crimson Text", value: "'Crimson Text', serif" },
        { name: "DM Serif Display", value: "'DM Serif Display', serif" },
    ],
    sans: [
        { name: "Lato", value: "var(--font-lato), ui-sans-serif, system-ui, sans-serif" },
        { name: "Inter", value: "'Inter', sans-serif" },
        { name: "Montserrat", value: "'Montserrat', sans-serif" },
        { name: "Roboto", value: "'Roboto', sans-serif" },
        { name: "Poppins", value: "'Poppins', sans-serif" },
        { name: "Raleway", value: "'Raleway', sans-serif" },
        { name: "Oswald", value: "'Oswald', sans-serif" },
    ],
};

const colors = [
    { name: "Gold", value: "45 93% 47%" }, // HSL for #E7B008
    { name: "Emerald", value: "158 64% 52%" },
    { name: "Rose", value: "343 100% 68%" },
    { name: "Blue", value: "221 83% 53%" },
    { name: "Orange", value: "24 95% 53%" },
];

export const ThemeDebugger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSerif, setCurrentSerif] = useState(fonts.serif[0].value);
    const [currentSans, setCurrentSans] = useState(fonts.sans[0].value);
    const [currentColor, setCurrentColor] = useState(colors[0].value);

    // Load fonts dynamically
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:wght@400;600&family=Inter:wght@400;600&family=Merriweather:wght@400;700&family=Montserrat:wght@400;600&family=Roboto:wght@400;700&family=Lora:wght@400;700&family=Crimson+Text:wght@400;600&family=DM+Serif+Display:wght@400&family=Poppins:wght@400;600&family=Raleway:wght@400;600&family=Oswald:wght@400;600&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        return () => {
            document.head.removeChild(link);
        };
    }, []);

    // Apply styles
    useEffect(() => {
        const root = document.documentElement;
        root.style.setProperty("--font-serif", currentSerif);
        root.style.setProperty("--font-sans", currentSans);
        root.style.setProperty("--color-gold-500", currentColor);

        // Also simpler variants for hover states if they use opacity
        // Note: Tailwind 4 css variables usually work with HSL values directly for alpha composition
        // If the variable is used like `hsl(var(--color-gold-500))`, then we need to pass just numbers.
        // If it's used as `var(--color-gold-500)`, we need a color value.
        // Based on my globals.css edit, it was: --color-gold-500: hsl(45 93% 47%);
        // So I should pass the full HSL string or just the values depending on usage.
        // Let's check globals.css again mentally... 
        // It was defined as: --color-gold-500: hsl(45 93% 47%);
        // So I should overwrite it with the full HSL string.

        root.style.setProperty("--color-gold-500", `hsl(${currentColor})`);

    }, [currentSerif, currentSans, currentColor]);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 z-50 p-3 bg-white text-black rounded-full shadow-lg hover:bg-neutral-200 transition-colors"
            >
                <Settings size={24} />
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 p-6 bg-neutral-900 border border-neutral-800 text-white rounded-xl shadow-2xl w-80 font-sans">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold">Theme Debugger</h3>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-neutral-400 hover:text-white"
                >
                    Close
                </button>
            </div>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-400">Heading Font (Serif)</label>
                    <select
                        value={currentSerif}
                        onChange={(e) => setCurrentSerif(e.target.value)}
                        className="w-full p-2 bg-neutral-800 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-gold-500"
                    >
                        {fonts.serif.map((f) => (
                            <option key={f.name} value={f.value}>
                                {f.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-400">Body Font (Sans)</label>
                    <select
                        value={currentSans}
                        onChange={(e) => setCurrentSans(e.target.value)}
                        className="w-full p-2 bg-neutral-800 border border-neutral-700 rounded text-sm text-white focus:outline-none focus:border-gold-500"
                    >
                        {fonts.sans.map((f) => (
                            <option key={f.name} value={f.value}>
                                {f.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-semibold mb-2 text-neutral-400">Accent Color</label>
                    <div className="grid grid-cols-5 gap-2">
                        {colors.map((c) => (
                            <button
                                key={c.name}
                                onClick={() => setCurrentColor(c.value)}
                                className={`w-10 h-10 rounded-full border-2 transition-all ${currentColor === c.value
                                    ? "border-white scale-110"
                                    : "border-transparent opacity-80 hover:opacity-100"
                                    }`}
                                style={{ backgroundColor: `hsl(${c.value})` }}
                                title={c.name}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
