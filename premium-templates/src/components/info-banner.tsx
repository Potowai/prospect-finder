"use client";

import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const InfoBanner = () => {
    // Mock logic for open/closed status
    const isOpen = true;

    return (
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="bg-[#4A3B32] text-[#FDFBF7] text-xs font-medium text-center py-2 overflow-hidden"
        >
            <div className="container mx-auto flex items-center justify-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isOpen ? "bg-green-500 animate-pulse" : "bg-red-500"}`} />
                <span>
                    {isOpen ? "Nous sommes ouverts ! Venez déguster nos pains chauds." : "La boulangerie ferme ses portes."}
                </span>
                <span className="opacity-60 hidden md:inline ml-4">
                    | 16 Rue de Verdun, 44000 Nantes
                </span>
            </div>
        </motion.div>
    );
};
