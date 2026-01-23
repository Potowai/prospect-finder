"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const BoulangerieHeader = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Check if we are on the specific home landing page
    const isHome = pathname === "/arno-boulangerie";

    // Header is "transparent" only if we are on Home AND not scrolled.
    // Otherwise (sub-pages or scrolled), it looks "solid" (dark text, visible bg).
    const isTransparent = isHome && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "La Maison", href: "/arno-boulangerie#hero" },
        { name: "Savoir-Faire", href: "/arno-boulangerie#about" }, // Absolute paths for sub-page navigation
        { name: "Nos Produits", href: "/arno-boulangerie#products" },
        { name: "Contact", href: "/arno-boulangerie#contact" },
    ];

    return (
        <>
            <motion.header
                className={`z-50 transition-all duration-500 font-sans ${!isTransparent
                    ? "fixed top-0 left-0 right-0 bg-[#FDFBF7]/95 backdrop-blur-md py-4 shadow-sm border-b border-[var(--color-boulangerie-text)]/10"
                    : "absolute top-0 left-0 right-0 bg-transparent py-6"
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container px-4 mx-auto flex items-center justify-between">
                    {/* Brand */}
                    <Link href="/arno-boulangerie" className="relative z-50 flex items-center gap-2 group">
                        <img src="/arno_logo.png" alt="ArnO Boulangerie" className="h-12 w-auto object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium tracking-wide hover:text-[var(--color-boulangerie-primary)] transition-colors ${!isTransparent ? "text-[var(--color-boulangerie-text)]" : "text-[#FDFBF7]/90 drop-shadow-sm"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}

                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`md:hidden z-50 p-2 transition-colors ${!isTransparent ? "text-[var(--color-boulangerie-text)]" : "text-[#FDFBF7]"}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} color="#FDFBF7" /> : <Menu size={24} />}
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
                        transition={{ type: "tween", duration: 0.4, ease: "circOut" }}
                        className="fixed inset-0 bg-[var(--color-boulangerie-text)] z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-3xl font-serif text-[#FDFBF7] hover:text-[var(--color-boulangerie-primary)] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
