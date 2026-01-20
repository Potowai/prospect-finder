"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BoulangerieHeader = () => {
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
        { name: "La Maison", href: "#hero" },
        { name: "Savoir-Faire", href: "#about" },
        { name: "Nos Produits", href: "#products" },
        { name: "Contact", href: "#footer" },
    ];

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${isScrolled
                        ? "bg-stone-900/95 backdrop-blur-md py-3 shadow-lg"
                        : "bg-transparent py-6"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container px-4 mx-auto flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-2 group">
                        <div className="relative w-10 h-10 overflow-hidden">
                            <Image
                                src="/la-boulangerie-logo.png"
                                alt="La Boulangerie Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className={`font-serif font-bold text-lg tracking-widest uppercase transition-colors ${isScrolled ? "text-white" : "text-white drop-shadow-md"
                            }`}>
                            La Boulangerie
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-xs font-bold uppercase tracking-widest hover:text-[var(--color-boulangerie-primary)] transition-colors ${isScrolled ? "text-white/80" : "text-white/90 font-medium drop-shadow-sm"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-[var(--color-boulangerie-primary)] text-stone-900 px-5 py-2 text-xs font-bold uppercase rounded-sm hover:bg-white hover:text-stone-900 transition-colors">
                            Commander
                        </button>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white z-50 p-2"
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
                        className="fixed inset-0 bg-stone-900 z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl font-serif text-white hover:text-[var(--color-boulangerie-primary)] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="bg-[var(--color-boulangerie-primary)] text-stone-900 px-8 py-3 text-sm font-bold uppercase rounded-sm mt-8">
                            Commander en ligne
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
