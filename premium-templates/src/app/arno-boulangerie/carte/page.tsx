"use client";

import { BoulangerieHeader } from "@/components/boulangerie-header";
import { BoulangerieFooter } from "@/components/boulangerie-footer";
import { motion } from "framer-motion";
import Image from "next/image";

const MENU_ITEMS = [
    {
        category: "Les Pains",
        items: [
            { name: "La Tradition", price: "1.20€", desc: "Fermentation 24h, farine T65 Label Rouge." },
            { name: "Le Campagne", price: "2.50€", desc: "Mélange seigle et blé, levain naturel." },
            { name: "Le Complet", price: "2.80€", desc: "Riche en fibres, farine bio T150." },
            { name: "L'Épeautre", price: "3.50€", desc: "Faible en gluten, goût de noisette." }
        ]
    },
    {
        category: "Viennoiseries",
        items: [
            { name: "Croissant", price: "1.30€", desc: "Beurre AOP Charentes-Poitou." },
            { name: "Pain au Chocolat", price: "1.40€", desc: "Double barre chocolat Valrhona." },
            { name: "Chausson aux Pommes", price: "2.10€", desc: "Compote maison, pommes du verger." }
        ]
    },
    {
        category: "Pâtisseries",
        items: [
            { name: "Flan Parisien", price: "3.50€", desc: "Vanille Bourbon, crémeux à souhait." },
            { name: "Tarte Citron", price: "4.20€", desc: "Meringue italienne, zestes frais." },
            { name: "L'Éclair Café", price: "3.80€", desc: "Glaçage fondant, crème pâtissière robuste." }
        ]
    }
];

export default function CartePage() {
    return (
        <main className="bg-[#FDFBF7] min-h-screen selection:bg-[var(--color-boulangerie-primary)] selection:text-white">
            <div className="relative z-50">
                <BoulangerieHeader />
            </div>

            <section className="pt-32 pb-20 px-4">
                <div className="container mx-auto max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <span className="text-[var(--color-boulangerie-primary)] font-bold tracking-[0.2em] uppercase text-sm mb-4 block">
                            Nos Délices
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-boulangerie-secondary)]">
                            La Carte
                        </h1>
                    </motion.div>

                    <div className="space-y-16">
                        {MENU_ITEMS.map((section, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-serif font-bold text-[var(--color-boulangerie-primary)] mb-8 border-b border-[var(--color-boulangerie-secondary)]/20 pb-4">
                                    {section.category}
                                </h2>
                                <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="flex justify-between items-baseline group">
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-[var(--color-boulangerie-text)] group-hover:text-[var(--color-boulangerie-primary)] transition-colors">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm text-gray-500 italic mt-1">{item.desc}</p>
                                            </div>
                                            <span className="text-xl font-medium text-[var(--color-boulangerie-primary)] ml-4">
                                                {item.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <BoulangerieFooter
                name="ArnO Boulangerie"
                address="16 Rue de Verdun, 44000 Nantes"
                phone="02 40 74 83 65"
            />
        </main>
    );
}
