"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";

interface BoulangerieContactProps {
    address?: string;
    phone?: string;
    email?: string;
    hours?: {
        weekdays: string;
        saturday: string;
        sunday: string;
    };
}

export const BoulangerieContact = ({
    address = "16 Rue de Verdun, 44000 Nantes",
    phone = "02 40 74 83 65",
    email = "contact@arno-boulangerie.fr",
    hours = {
        weekdays: "07:00 - 20:00",
        saturday: "07:30 - 19:30",
        sunday: "Fermé"
    }
}: BoulangerieContactProps) => {
    return (
        <section className="py-24 bg-[var(--color-boulangerie-neutral)] relative overflow-hidden">
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row gap-12 lg:gap-24 items-start">

                    {/* Left: Info */}
                    <div className="w-full md:w-1/2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[var(--color-boulangerie-text)] mb-6">
                                Venez nous rendre visite
                            </h2>
                            <p className="text-[var(--color-boulangerie-text)]/70 text-lg leading-relaxed max-w-md font-sans">
                                Situé au cœur de Nantes, notre atelier vous accueille tous les jours pour partager notre passion du bon pain.
                            </p>
                        </motion.div>

                        <div className="grid gap-8">
                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <div className="p-3 bg-[#E8E6E1] rounded-full text-[var(--color-boulangerie-primary)]">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--color-boulangerie-text)] mb-1">Notre Adresse</h3>
                                    <p className="text-[var(--color-boulangerie-text)]/70 font-sans">{address}</p>
                                    <a href={`https://maps.google.com/?q=${address}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[var(--color-boulangerie-primary)] font-bold mt-2 hover:underline">
                                        Voir sur la carte <ArrowRight size={16} />
                                    </a>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                            >
                                <div className="p-3 bg-[#E8E6E1] rounded-full text-[var(--color-boulangerie-primary)]">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--color-boulangerie-text)] mb-1">Horaires d'ouverture</h3>
                                    <ul className="text-[var(--color-boulangerie-text)]/70 font-sans space-y-1">
                                        <li className="flex justify-between gap-8"><span>Lun - Ven</span> <span>{hours.weekdays}</span></li>
                                        <li className="flex justify-between gap-8"><span>Samedi</span> <span>{hours.saturday}</span></li>
                                        <li className="flex justify-between gap-8"><span>Dimanche</span> <span className="text-[var(--color-boulangerie-primary)]">{hours.sunday}</span></li>
                                    </ul>
                                </div>
                            </motion.div>

                            <motion.div
                                className="flex items-start gap-4"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <div className="p-3 bg-[#E8E6E1] rounded-full text-[var(--color-boulangerie-primary)]">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-serif text-xl font-bold text-[var(--color-boulangerie-text)] mb-1">Contact</h3>
                                    <p className="text-[var(--color-boulangerie-text)]/70 font-sans mb-1">{phone}</p>
                                    <p className="text-[var(--color-boulangerie-text)]/70 font-sans break-all">{email}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Map Placeholder / Image */}
                    <div className="w-full md:w-1/2 h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
                        {/* 
                           Ideally here we would put an actual Google Maps iframe. 
                           For the template, I'll use a grayscale map image or a styled placeholder.
                           Using a placeholder div with an iframe for now.
                        */}
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: "grayscale(0.5) contrast(1.2)" }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2710.2086968832876!2d-1.556244023774844!3d47.21245007115668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eec06161477d%3A0xeaa8374d8123019!2s16%20Rue%20de%20Verdun%2C%2044000%20Nantes!5e0!3m2!1sen!2sfr!4v1706018392842!5m2!1sen!2sfr"
                        >
                        </iframe>

                        {/* Overlay Decor */}
                        <div className="absolute inset-0 pointer-events-none border-[12px] border-[#FDFBF7]/50 rounded-2xl" />
                    </div>

                </div>
            </div>
        </section>
    );
};
