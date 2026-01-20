"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
    {
        category: "Pains au Levain",
        description: "Fermentation lente, croûte croustillante et mie alvéolée.",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
        items: ["Tradition", "Campagne", "Seigle", "Épeautre"]
    },
    {
        category: "Viennoiseries",
        description: "Beurre AOP et feuilletage inversé pour une légèreté absolue.",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2000&auto=format&fit=crop",
        items: ["Croissant", "Pain au Chocolat", "Chausson aux Pommes", "Brioche"]
    },
    {
        category: "Pâtisseries",
        description: "Des classiques revisités avec finesse et gourmandise.",
        image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2000&auto=format&fit=crop",
        items: ["Tarte Citron", "Paris-Brest", "Éclairs", "Mille-feuille"]
    },
    {
        category: "Snacking",
        description: "Sandwichs frais préparés chaque matin avec nos pains.",
        image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=2000&auto=format&fit=crop",
        items: ["Sandwichs", "Quiches", "Salades", "Formules Midi"]
    }
];

export const BoulangerieProducts = () => {
    return (
        <section className="py-24 bg-white text-[var(--color-boulangerie-secondary)]">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <span className="block w-12 h-[1px] bg-[var(--color-boulangerie-primary)] mx-auto mb-6"></span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif tracking-widest uppercase text-[var(--color-boulangerie-secondary)]"
                    >
                        Nos Incontournables
                    </motion.h2>
                    <span className="block w-12 h-[1px] bg-[var(--color-boulangerie-primary)] mx-auto mt-6"></span>
                </div>

                <div className="flex flex-wrap justify-center gap-12 md:gap-24">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="text-center group cursor-pointer"
                        >
                            <div className="relative w-48 h-48 md:w-64 md:h-48 mx-auto mb-6 overflow-hidden">
                                <Image
                                    src={product.image}
                                    alt={product.category}
                                    fill
                                    className="object-contain hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <h3 className="text-sm font-bold uppercase tracking-widest mb-2 border-b border-transparent group-hover:border-[var(--color-boulangerie-primary)] inline-block transition-colors pb-1">
                                {product.category}
                            </h3>
                            {/* <p className="text-xs text-stone-500 max-w-[200px] mx-auto">{product.description}</p> */}
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <button className="bg-[var(--color-boulangerie-secondary)] text-white px-8 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[var(--color-boulangerie-primary)] transition-colors">
                        Découvrir Nos Produits
                    </button>
                </div>
            </div>
        </section>
    );
};
