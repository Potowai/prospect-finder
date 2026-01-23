"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ITEMS = [
    {
        id: 1,
        title: "Nos Pains",
        subtitle: "Levain Naturel & Bio",
        image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop",
        className: "md:col-span-2 md:row-span-2",
    },
    {
        id: 2,
        title: "Viennoiseries",
        subtitle: "Pur Beurre AOP",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=1926&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    },
    {
        id: 3,
        title: "Pâtisseries",
        subtitle: "Finesse & Gourmandise",
        image: "https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?q=80&w=2017&auto=format&fit=crop",
        className: "md:col-span-1 md:row-span-1",
    },
];

export const BoulangerieBento = () => {
    return (
        <section className="py-24 px-4 bg-noise bg-[var(--color-boulangerie-neutral)] text-[var(--color-boulangerie-text)] overflow-hidden">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 flex items-end justify-between"
                >
                    <div>
                        <span className="text-[var(--color-boulangerie-primary)] font-bold tracking-[0.2em] uppercase text-sm">
                            Nos Créations
                        </span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2">L'Atelier des Saveurs</h2>
                    </div>
                    <div className="hidden md:block">
                        <Link
                            href="/arno-boulangerie/carte"
                            className="flex items-center gap-2 text-[var(--color-boulangerie-text)] font-medium hover:text-[var(--color-boulangerie-primary)] transition-colors"
                        >
                            Voir toute la carte <ArrowRight size={20} />
                        </Link>
                    </div>
                </motion.div>

                {/* Mobile: Horizontal Scroll Snap | Desktop: Bento Grid */}
                <div className="flex md:grid md:grid-cols-3 md:grid-rows-2 gap-4 md:gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide md:min-h-[600px]">
                    {ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative group rounded-3xl overflow-hidden min-w-[85vw] md:min-w-0 h-[400px] md:h-full snap-center border border-black/5 ${item.className}`}
                        >
                            <div className="absolute inset-0 bg-gray-200 animate-pulse" /> {/* Skeleton placeholder could live here */}

                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />

                            <div className="absolute bottom-0 left-0 p-8 w-full">
                                <span className="inline-block px-3 py-1 rounded-full bg-[var(--color-boulangerie-primary)]/20 text-[var(--color-boulangerie-primary)] text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm border border-[var(--color-boulangerie-primary)]/30">
                                    {item.subtitle}
                                </span>
                                <h3 className="text-3xl font-serif font-bold text-[var(--color-boulangerie-neutral)] mb-2">{item.title}</h3>

                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-6 text-center md:hidden">
                    <Link
                        href="/arno-boulangerie/carte"
                        className="flex items-center justify-center w-full gap-2 text-[var(--color-boulangerie-text)] font-medium"
                    >
                        Voir toute la carte <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};
