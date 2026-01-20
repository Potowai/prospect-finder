"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export const RestaurantInfo = () => {
    return (
        <footer className="bg-neutral-950 text-white font-sans border-t border-neutral-800">
            {/* Top Section with Map Placeholder and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Map Placeholder */}
                <div className="bg-neutral-900 relative h-[400px] lg:h-auto min-h-[400px]">
                    {/* In a real app, integrate Google Maps or Mapbox here */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <span className="text-4xl font-serif text-neutral-500">Carte / Localisation</span>
                    </div>
                    {/* Decorative grid pattern */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    <div className="absolute bottom-8 left-8 bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-xl max-w-xs border border-neutral-200 dark:border-neutral-800">
                        <h4 className="text-xl font-serif font-bold text-neutral-900 dark:text-white mb-2">Venir nous voir</h4>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                            12 Avenue des Champs-Élysées<br />
                            75008 Paris, France
                        </p>
                    </div>
                </div>

                {/* Info Content */}
                <div className="p-12 lg:p-24 space-y-12">
                    <div>
                        <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-4">Contact</h3>
                        <h2 className="text-4xl font-serif font-bold mb-8">Informations & Réservations</h2>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <MapPin className="w-6 h-6 text-gold-500 mt-1" />
                                <div>
                                    <p className="font-bold text-lg">Adresse</p>
                                    <p className="text-neutral-400">12 Avenue des Champs-Élysées, 75008 Paris</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Phone className="w-6 h-6 text-gold-500 mt-1" />
                                <div>
                                    <p className="font-bold text-lg">Téléphone</p>
                                    <p className="text-neutral-400">+33 1 23 45 67 89</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <Mail className="w-6 h-6 text-gold-500 mt-1" />
                                <div>
                                    <p className="font-bold text-lg">Email</p>
                                    <p className="text-neutral-400">contact@legourmet.fr</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-gold-500 font-bold tracking-widest uppercase text-sm mb-6">Heures d'ouverture</h3>
                        <div className="grid grid-cols-2 gap-8 text-neutral-400">
                            <div>
                                <p className="text-white font-bold mb-2">Déjeuner</p>
                                <ul className="space-y-1">
                                    <li>Lundi - Vendredi</li>
                                    <li>12:00 - 14:30</li>
                                </ul>
                            </div>
                            <div>
                                <p className="text-white font-bold mb-2">Dîner</p>
                                <ul className="space-y-1">
                                    <li>Chaque soir</li>
                                    <li>19:00 - 23:00</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-neutral-500 text-sm">© 2024 Le Gourmet. Tous droits réservés.</p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-neutral-400 hover:text-gold-500 transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
