"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MenuItem {
    name: string;
    description: string;
    price: string;
}

interface MenuCategory {
    title: string;
    items: MenuItem[];
}

const menuData: MenuCategory[] = [
    {
        title: "Pour Commencer",
        items: [
            {
                name: "Foie Gras Poêlé",
                description: "Chutney de figues, pain brioché toasté",
                price: "24€",
            },
            {
                name: "Carpaccio de Saint-Jacques",
                description: "Agrumes, huile de truffe, fleur de sel",
                price: "22€",
            },
            {
                name: "Velouté de Homard",
                description: "Écume de cognac, croûtons à l'ail",
                price: "19€",
            },
        ],
    },
    {
        title: "Plats Signatures",
        items: [
            {
                name: "Filet de Bœuf Rossini",
                description: "Foie gras, truffe noire, gratin dauphinois",
                price: "42€",
            },
            {
                name: "Bar de Ligne Rôti",
                description: "Risotto aux asperges vertes, sauce vierge",
                price: "36€",
            },
            {
                name: "Ris de Veau Braisé",
                description: "Morilles à la crème, purée de pommes de terre",
                price: "38€",
            },
        ],
    },
    {
        title: "Douceurs",
        items: [
            {
                name: "Soufflé au Chocolat",
                description: "Cœur coulant, glace vanille bourbon",
                price: "16€",
            },
            {
                name: "Tarte Citron Revisitée",
                description: "Meringue italienne, zeste de yuzu",
                price: "14€",
            },
            {
                name: "Paris-Brest",
                description: "Crème pralinée, noisettes torréfiées",
                price: "15€",
            },
        ],
    },
];

export const RestaurantMenu = () => {
    return (
        <div className="w-full bg-neutral-950 py-20 px-4 md:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Notre Carte
                    </h2>
                    <div className="w-24 h-1 bg-neutral-700 mx-auto rounded-full" />
                    <p className="mt-4 text-neutral-400 text-lg">
                        Une expérience gastronomique inoubliable
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {menuData.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl md:text-3xl font-serif text-gold-500 mb-8 border-b border-neutral-800 pb-2 inline-block">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 gap-8">
                                {category.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="group relative flex justify-between items-baseline border-b border-neutral-800/50 pb-4 hover:border-gold-500/30 transition-colors">
                                        <div className="pr-8">
                                            <h4 className="text-xl font-serif font-medium text-gray-100 group-hover:text-gold-400 transition-colors">{item.name}</h4>
                                            <p className="text-neutral-400 mt-1 italic font-sans">{item.description}</p>
                                        </div>
                                        <span className="text-xl font-semibold text-gold-500 font-serif">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
