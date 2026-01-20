"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export const BoulangerieHero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')"
                }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="space-y-6"
                >


                    <span className="text-[var(--color-boulangerie-primary)] font-bold tracking-[0.2em] uppercase text-sm md:text-base">
                        Depuis 1985
                    </span>
                    <div className="relative w-64 h-64 mx-auto mb-6">
                        <Image
                            src="/toppng.com-boulangerie-leveneur-logo-vector-400x400.png"
                            alt="La Boulangerie Logo"
                            fill
                        />
                    </div>
                    {/* <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white drop-shadow-lg">
                        La Boulangerie
                    </h1> */}
                    <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
                        Levain naturel, farines bio et passion authentique.
                        <br />Redécouvrez le goût de la tradition.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <ArrowDown className="w-8 h-8 text-white animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};
