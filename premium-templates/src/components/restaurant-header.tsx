"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const RestaurantHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Accueil", href: "#hero" },
        { name: "Notre Histoire", href: "#about" },
        { name: "Le Menu", href: "#menu" },
        { name: "Galerie", href: "#gallery" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${isScrolled
                        ? "bg-neutral-950/90 backdrop-blur-md py-4 shadow-lg border-b border-neutral-800"
                        : "bg-transparent py-8"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container px-4 mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-2 group">
                        <div className={`p-2 rounded-full border border-gold-500/50 transition-colors ${isScrolled ? "bg-neutral-900" : "bg-black/20 backdrop-blur-sm"}`}>
                            <UtensilsCrossed className="text-gold-500 w-5 h-5" />
                        </div>
                        <span className="font-serif font-bold text-xl tracking-widest uppercase text-white">
                            Le Gourmet
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-xs font-bold uppercase tracking-widest hover:text-gold-500 transition-colors ${isScrolled ? "text-neutral-300" : "text-white/90 drop-shadow-md"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-gold-500 text-neutral-950 px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
                            Réserver
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.header>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 bg-neutral-950 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif text-white hover:text-gold-500 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-gold-500 text-neutral-950 px-8 py-3 text-sm font-bold uppercase tracking-wider mt-8">
                            Réserver une table
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
