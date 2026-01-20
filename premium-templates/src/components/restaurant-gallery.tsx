"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        alt: "Salle principale",
        span: "col-span-1 md:col-span-2 row-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop",
        alt: "Détail table",
        span: "col-span-1 row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=2070&auto=format&fit=crop",
        alt: "Ambiance soirée",
        span: "col-span-1 row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1551632436-cbf8dd354ca8?q=80&w=2069&auto=format&fit=crop",
        alt: "Le Bar",
        span: "col-span-1 md:col-span-2 row-span-1"
    }
];

export const RestaurantGallery = () => {
    return (
        <section className="py-24 bg-neutral-50 dark:bg-neutral-900 font-serif">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gold-500 font-bold tracking-widest uppercase text-sm"
                    >
                        L'Atmosphère
                    </motion.h3>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
                    >
                        Un Lieu D'Exception
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto text-lg text-neutral-600 dark:text-neutral-400 font-sans"
                    >
                        Plongez dans une ambiance chaleureuse et raffinée, où le design contemporain rencontre le charme classique.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-lg group ${image.span}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

                            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                                <span className="text-white text-lg font-medium">{image.alt}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
