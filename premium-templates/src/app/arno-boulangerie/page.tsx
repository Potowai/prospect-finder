"use client";

import { BoulangerieHero } from "@/components/boulangerie-hero";
import { BoulangerieAbout } from "@/components/boulangerie-about";
import { BoulangerieBento } from "@/components/boulangerie-bento"; // New Bento Component
import { BoulangerieGallery } from "@/components/boulangerie-gallery";
import { BoulangerieContact } from "@/components/boulangerie-contact";
import { BoulangerieFooter } from "@/components/boulangerie-footer"; // New Footer Component
import { BoulangerieHeader } from "@/components/boulangerie-header";
import { InfoBanner } from "@/components/info-banner"; // New InfoBanner
import { BoulangerieThemeDebugger } from "@/components/boulangerie-theme-debugger";
import { ChatbotWidget } from "@/components/chatbot-widget";

export default function ArnoBoulangeriePage() {
    return (
        <main className="bg-[#FDFBF7] min-h-screen selection:bg-[var(--color-terracotta)] selection:text-white">
            <InfoBanner />

            <div className="relative">
                <BoulangerieHeader />
                <div id="hero">
                    <BoulangerieHero
                        name="ArnO Boulangerie"
                        tagline="L'Art du Pain Vivant"
                        subTagline="Levain naturel, farines bio et patience à Nantes."
                    />
                </div>
            </div>

            <ChatbotWidget />

            <div id="about" className="relative z-10">
                <BoulangerieAbout />
            </div>

            <div id="products" className="relative z-10">
                <BoulangerieBento />
            </div>

            <div className="relative z-10">
                <BoulangerieGallery />
            </div>

            <div id="contact" className="relative z-10">
                <BoulangerieContact
                    address="16 Rue de Verdun, 44000 Nantes"
                    phone="02 40 74 83 65"
                    email="contact@arno-boulangerie.fr"
                />
            </div>

            <div id="footer" className="relative z-10">
                <BoulangerieFooter
                    name="ArnO Boulangerie"
                    address="16 Rue de Verdun, 44000 Nantes"
                    phone="02 40 74 83 65"
                />
            </div>

            {/* <BoulangerieThemeDebugger /> */}
        </main>
    );
}
