"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Wheat } from "lucide-react";

export const BoulangerieAbout = () => {
    return (
        <section className="py-24 bg-[var(--color-boulangerie-neutral)] text-[var(--color-boulangerie-secondary)]">
            <div className="container px-4 mx-auto relative">
                <div className="flex flex-col lg:flex-row items-center">

                    {/* Image Background */}
                    <div className="w-full lg:w-3/4 relative h-[600px]">
                        <Image
                            src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=1000&auto=format&fit=crop"
                            alt="Baker kneading dough"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Dark Floating Content Box */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="bg-[var(--color-boulangerie-secondary)] text-white p-12 lg:absolute lg:right-4 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/3 shadow-2xl space-y-8"
                    >
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold leading-tight">
                            Des Pains Raisonnés
                        </h2>

                        <p className="text-white/80 font-light leading-relaxed">
                            Les pains de La Boulangerie sont le résultat d'un savoir-faire ancestral.
                            Sans additifs ni conservateurs, ils ne contiennent que des ingrédients issus
                            d'une agriculture française respectueuse de l'environnement et de la biodiversité.
                        </p>

                        <Link
                            href="/arno-boulangerie/histoire"
                            className="border border-white/30 px-6 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[var(--color-boulangerie-secondary)] transition-colors inline-block"
                        >
                            En savoir plus
                        </Link>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
