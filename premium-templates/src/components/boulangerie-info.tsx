"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

export const BoulangerieInfo = () => {
    return (
        <footer className="bg-[var(--color-boulangerie-secondary)] text-white/80 py-16 font-sans">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* Brand & Address */}
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif font-bold text-white mb-4">La Boulangerie</h3>
                        <div className="flex items-start gap-4">
                            <MapPin className="text-[var(--color-boulangerie-primary)] mt-1" />
                            <p>
                                42 Rue du Four,<br />
                                75006 Paris, France
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Phone className="text-[var(--color-boulangerie-primary)]" />
                            <p>+33 1 43 26 58 99</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Mail className="text-[var(--color-boulangerie-primary)]" />
                            <p>bonjour@lartisan-boulanger.fr</p>
                        </div>
                    </div>

                    {/* Hours */}
                    <div>
                        <h4 className="text-xl font-serif font-bold text-white mb-6 flex items-center gap-2">
                            <Clock className="text-[var(--color-boulangerie-primary)]" size={20} /> Horaires
                        </h4>
                        <ul className="space-y-4">
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Lundi - Vendredi</span>
                                <span className="text-white">07:00 - 20:00</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Samedi</span>
                                <span className="text-white">07:30 - 19:30</span>
                            </li>
                            <li className="flex justify-between border-b border-white/10 pb-2">
                                <span>Dimanche</span>
                                <span className="text-[var(--color-boulangerie-primary)] font-bold">Fermé</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Social */}
                    <div className="space-y-6">
                        <h4 className="text-xl font-serif font-bold text-white mb-6">Restez connectés</h4>
                        <p className="text-sm">
                            Suivez nos créations éphémères et nos offres spéciales sur les réseaux sociaux.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-boulangerie-primary)] hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-boulangerie-primary)] hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                </div>

                <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/40">
                    © 2024 La Boulangerie. Fait avec amour et farine.
                </div>
            </div>
        </footer>
    );
};
