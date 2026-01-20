"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const RestaurantAbout = () => {
    return (
        <section className="py-24 bg-white dark:bg-neutral-950 font-serif">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 text-center lg:text-left space-y-8"
                    >
                        <div className="space-y-4">
                            <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm">
                                Notre Histoire
                            </h3>
                            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white leading-tight">
                                Une Tradition D'Excellence Depuis 1988
                            </h2>
                        </div>

                        <p className="text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            Fondé par le Chef Antoine Mercier, Le Gourmet a commencé comme un humble bistro avec une vision simple : célébrer les ingrédients locaux à travers une cuisine française intemporelle.
                        </p>

                        <p className="text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                            Aujourd'hui, nous continuons cette tradition dans notre établissement rénové, où chaque plat raconte une histoire de passion, de terroir et de créativité. Notre cave à vin, soigneusement sélectionnée, accompagne parfaitement ce voyage culinaire.
                        </p>

                        <div className="pt-4">
                            <span className="font-dancing text-4xl text-gold-600 dark:text-gold-400">
                                Antoine Mercier
                            </span>
                            <p className="text-sm text-neutral-500 mt-2 font-sans tracking-wide uppercase">Chef Exécutif</p>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-lg mx-auto overflow-hidden rounded-lg shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1974&auto=format&fit=crop"
                                alt="Le Chef en cuisine"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                            <div className="absolute bottom-8 left-8 right-8 text-white">
                                <p className="text-xl italic font-serif">
                                    "La cuisine est l'art de transformer l'instant en souvenir inoubliable."
                                </p>
                            </div>
                        </div>

                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500/10 rounded-full -z-10 blur-2xl"></div>
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-gold-500/10 rounded-full -z-10 blur-2xl"></div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
