"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=2000&auto=format&fit=crop",
        alt: "Étalage de pains",
        className: "md:col-span-2 md:row-span-2"
    },
    {
        src: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2000&auto=format&fit=crop",
        alt: "Mains du boulanger",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=2000&auto=format&fit=crop",
        alt: "Viennoiseries",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2000&auto=format&fit=crop", // Burger bun or sandwich
        alt: "Déjeuner",
        className: "md:col-span-1 md:row-span-1"
    },
    {
        src: "https://images.unsplash.com/photo-1623341214825-9f4f963727da?q=80&w=2000&auto=format&fit=crop", // Brioche
        alt: "Brioche dorée",
        className: "md:col-span-1 md:row-span-1"
    }
];

export const BoulangerieGallery = () => {
    return (
        <section className="py-24 bg-[var(--color-boulangerie-neutral)]">
            <div className="container px-4 mx-auto">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-serif font-bold text-[var(--color-boulangerie-secondary)]"
                    >
                        Moments de Vie
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[800px] md:h-[600px]">
                    {galleryImages.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className={`relative overflow-hidden rounded-xl group ${img.className}`}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
