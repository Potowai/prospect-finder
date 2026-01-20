"use client";

import React, { useEffect, useState } from "react";
import { Settings } from "lucide-react";

const fonts = {
    serif: [
        { name: "Playfair Display", value: "var(--font-playfair), ui-serif, Georgia, serif" },
        { name: "Cinzel", value: "'Cinzel', serif" },
        { name: "Cormorant", value: "'Cormorant Garamond', serif" },
        { name: "Libre Baskerville", value: "'Libre Baskerville', serif" },
        { name: "Abril Fatface", value: "'Abril Fatface', serif" },
        { name: "Yeseva One", value: "'Yeseva One', serif" },
        { name: "Merriweather", value: "'Merriweather', serif" },
        { name: "Lora", value: "'Lora', serif" },
    ],
    sans: [
        { name: "Lato", value: "var(--font-lato), ui-sans-serif, system-ui, sans-serif" },
        { name: "Inter", value: "'Inter', sans-serif" },
        { name: "Montserrat", value: "'Montserrat', sans-serif" },
        { name: "Roboto", value: "'Roboto', sans-serif" },
        { name: "Work Sans", value: "'Work Sans', sans-serif" },
        { name: "Oswald", value: "'Oswald', sans-serif" },
        { name: "Open Sans", value: "'Open Sans', sans-serif" },
    ],
};

const colors = [
    { name: "Pain Doré", value: "45 93% 47%" }, // Amber
    { name: "Blé", value: "35 92% 55%" },
    { name: "Olive", value: "84 60% 45%" },
    { name: "Rust", value: "15 75% 55%" },
    { name: "Choco", value: "28 30% 50%" },
];

const secondaryColors = [
    { name: "Dark Roast", value: "28 73% 26%" }, // Dark Brown
    { name: "Charcoal", value: "220 15% 20%" },
    { name: "Forest", value: "150 40% 25%" },
    { name: "Navy", value: "220 50% 30%" },
    { name: "Wine", value: "340 40% 30%" },
];

export const BoulangerieThemeDebugger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentSerif, setCurrentSerif] = useState(fonts.serif[0].value);
    const [currentSans, setCurrentSans] = useState(fonts.sans[0].value);
    const [currentPrimary, setCurrentPrimary] = useState(colors[0].value);
    const [currentSecondary, setCurrentSecondary] = useState(secondaryColors[0].value);

    // Apply styles
    // Apply styles
    useEffect(() => {
        // Load fonts dynamically
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Cormorant+Garamond:wght@400;600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Abril+Fatface&family=Yeseva+One&family=Work+Sans:wght@300;400;600&family=Oswald:wght@300;400;600&family=Inter:wght@400;600&family=Merriweather:wght@400;700&family=Montserrat:wght@400;600&family=Roboto:wght@400;700&family=Lora:wght@400;700&family=Open+Sans:wght@400;600&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        const root = document.documentElement;
        root.style.setProperty("--font-dynamic-serif", currentSerif);
        root.style.setProperty("--font-dynamic-sans", currentSans);
        root.style.setProperty("--color-boulangerie-primary", `hsl(${currentPrimary})`);
        root.style.setProperty("--color-boulangerie-secondary", `hsl(${currentSecondary})`);

        return () => {
            document.head.removeChild(link);
        };
    }, [currentSerif, currentSans, currentPrimary, currentSecondary]);

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-4 right-4 z-50 p-3 bg-white text-black rounded-full shadow-lg hover:bg-neutral-200 transition-colors"
                title="Customize Theme"
            >
                <Settings size={24} />
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 p-6 bg-white/95 backdrop-blur border border-stone-200 text-stone-900 rounded-xl shadow-2xl w-80 font-sans">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold font-serif text-stone-800">Personnalisation</h3>
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-stone-400 hover:text-stone-900"
                >
                    Fermer
                </button>
            </div>

            <div className="space-y-6">
                {/* Fonts */}
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">Typographie (Titres)</label>
                    <select
                        value={currentSerif}
                        onChange={(e) => setCurrentSerif(e.target.value)}
                        className="w-full p-2 bg-stone-100 border border-stone-200 rounded text-sm focus:outline-none focus:border-amber-500"
                    >
                        {fonts.serif.map((f) => (
                            <option key={f.name} value={f.value}>{f.name}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">Typographie (Texte)</label>
                    <select
                        value={currentSans}
                        onChange={(e) => setCurrentSans(e.target.value)}
                        className="w-full p-2 bg-stone-100 border border-stone-200 rounded text-sm focus:outline-none focus:border-amber-500"
                    >
                        {fonts.sans.map((f) => (
                            <option key={f.name} value={f.value}>{f.name}</option>
                        ))}
                    </select>
                </div>

                {/* Colors */}
                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">Couleur Principale</label>
                    <div className="flex flex-wrap gap-2">
                        {colors.map((c) => (
                            <button
                                key={c.name}
                                onClick={() => setCurrentPrimary(c.value)}
                                className={`w-8 h-8 rounded-full border-2 transition-all ${currentPrimary === c.value
                                    ? "border-stone-900 scale-110"
                                    : "border-transparent opacity-70 hover:opacity-100"
                                    }`}
                                style={{ backgroundColor: `hsl(${c.value})` }}
                                title={c.name}
                            />
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block text-xs font-bold uppercase tracking-wider mb-2 text-stone-500">Couleur Secondaire</label>
                    <div className="flex flex-wrap gap-2">
                        {secondaryColors.map((c) => (
                            <button
                                key={c.name}
                                onClick={() => setCurrentSecondary(c.value)}
                                className={`w-8 h-8 rounded-full border-2 transition-all ${currentSecondary === c.value
                                    ? "border-stone-900 scale-110"
                                    : "border-transparent opacity-70 hover:opacity-100"
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
