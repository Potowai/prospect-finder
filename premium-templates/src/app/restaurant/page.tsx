import { HeroParallax } from "@/components/ui/hero-parallax";
import { RestaurantMenu } from "@/components/restaurant-menu";
import { RestaurantAbout } from "@/components/restaurant-about";
import { RestaurantGallery } from "@/components/restaurant-gallery";
import { RestaurantInfo } from "@/components/restaurant-info";
import { ThemeDebugger } from "@/components/theme-debugger";

import { RestaurantHeader } from "@/components/restaurant-header";

export default function RestaurantPage() {
    return (
        <main className="bg-neutral-950">
            <RestaurantHeader />
            <div id="hero"><HeroParallax products={products} /></div>
            <div id="about"><RestaurantAbout /></div>
            <div id="menu"><RestaurantMenu /></div>
            <div id="gallery"><RestaurantGallery /></div>
            <div id="contact"><RestaurantInfo /></div>
            <ThemeDebugger />
        </main>
    );
}

export const products = [
    {
        title: "Le Fouquet's",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Gastronomie",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Vins d'Exception",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Ambiance",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Desserts",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Chef Spécial",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Entrées",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1625937286074-9ca519d5d9df?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Cocktails",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Plateaux",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1546241072-48010ad2862c?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Terrasse",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Intérieur",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Équipe",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Cuisine",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Détails",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1920&auto=format&fit=crop",
    },
    {
        title: "Réception",
        link: "#",
        thumbnail:
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1920&auto=format&fit=crop",
    },
];
