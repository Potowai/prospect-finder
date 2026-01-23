"use client";

import { BoulangerieHeader } from "@/components/boulangerie-header";
import { BoulangerieFooter } from "@/components/boulangerie-footer";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HistoirePage() {
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
                            Notre Histoire
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-boulangerie-secondary)]">
                            Depuis 1985
                        </h1>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2626&auto=format&fit=crop"
                                alt="Le premier fournil"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                            className="space-y-6 text-lg text-[var(--color-boulangerie-text)] leading-relaxed font-light"
                        >
                            <p>
                                Tout a commencé avec une idée simple : le pain ne devrait pas être une marchandise, mais une expérience.
                            </p>
                            <p>
                                <strong>ArnO Boulangerie</strong> est née de la passion d'Arnaud pour la fermentation lente et les farines anciennes. Lassé du pain industriel sans âme, il a décidé de revenir aux sources.
                            </p>
                            <p>
                                Aujourd'hui, notre fournil à Nantes perpétue cette tradition. Chaque baguette, chaque Miche, raconte l'histoire de notre terroir et du temps que nous prenons pour bien faire les choses.
                            </p>
                        </motion.div>
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
