import { BoulangerieHero } from "@/components/boulangerie-hero";
import { BoulangerieAbout } from "@/components/boulangerie-about";
import { BoulangerieProducts } from "@/components/boulangerie-products";
import { BoulangerieGallery } from "@/components/boulangerie-gallery";
import { BoulangerieInfo } from "@/components/boulangerie-info";

import { BoulangerieThemeDebugger } from "@/components/boulangerie-theme-debugger";
import { BoulangerieHeader } from "@/components/boulangerie-header";

export default function BoulangeriePage() {
    return (
        <main className="bg-[#fafaf5] min-h-screen">
            <BoulangerieHeader />
            <div id="hero"><BoulangerieHero /></div>
            <div id="about"><BoulangerieAbout /></div>
            <div id="products"><BoulangerieProducts /></div>
            <BoulangerieGallery />
            <div id="footer"><BoulangerieInfo /></div>
            <BoulangerieThemeDebugger />
        </main>
    );
}
