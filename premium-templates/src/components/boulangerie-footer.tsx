"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from "lucide-react";

interface BoulangerieFooterProps {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
}

export const BoulangerieFooter = ({
    name = "ArnO Boulangerie",
    address = "16 Rue de Verdun, 44000 Nantes",
    phone = "02 40 74 83 65",
    email = ""
}: BoulangerieFooterProps) => {
    return (
        <footer className="bg-[var(--color-boulangerie-secondary)] text-[#FDFBF7] py-20 font-sans relative overflow-hidden">
            {/* Noise Texture */}
            <div className="absolute inset-0 z-0 bg-noise opacity-10 pointer-events-none" />

            <div className="container px-4 mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-[#FDFBF7]/10 pb-16">

                    {/* Brand */}
                    <div className="md:col-span-1 space-y-4">
                        <h3 className="text-3xl font-serif font-bold text-[#FDFBF7]">{name}</h3>
                        <p className="text-sm leading-relaxed max-w-xs">
                            L'expression d'un savoir-faire authentique au cœur de Nantes.
                            Pains au levain, viennoiseries pur beurre et pâtisseries fines.
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#FDFBF7] uppercase tracking-wider">Contact</h4>
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-[var(--color-boulangerie-primary)] shrink-0 mt-0.5" size={18} />
                                <p>{address}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-[var(--color-boulangerie-primary)] shrink-0" size={18} />
                                <p>{phone}</p>
                            </div>
                            {email && (
                                <div className="flex items-center gap-3">
                                    <Mail className="text-[var(--color-boulangerie-primary)] shrink-0" size={18} />
                                    <p>{email}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#FDFBF7] uppercase tracking-wider">Horaires</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                                <span>Lun - Ven</span>
                                <span className="text-white">07:00 - 20:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Samedi</span>
                                <span className="text-white">07:30 - 19:30</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Dimanche</span>
                                <span className="text-[var(--color-boulangerie-primary)]">Fermé</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-[#FDFBF7] uppercase tracking-wider">Suivez-nous</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--color-boulangerie-primary)] hover:border-transparent hover:text-white transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[var(--color-boulangerie-primary)] hover:border-transparent hover:text-white transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center flex flex-col md:flex-row items-center justify-between text-xs text-white/30">
                    <p>© 2024 {name}. Tous droits réservés.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                        <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
