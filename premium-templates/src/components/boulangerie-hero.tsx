import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

interface BoulangerieHeroProps {
    name?: string;
    tagline?: string;
    subTagline?: string;
}

export const BoulangerieHero = ({
    name = "La Boulangerie",
    tagline = "L'Art du Pain Vivant",
    subTagline = "Farines bio, levain naturel et patience."
}: BoulangerieHeroProps) => {

    return (
        <section className="relative h-screen w-full overflow-hidden bg-[var(--color-boulangerie-neutral)]">
            {/* Overlay "Grain" & Darkening for text readability */}
            <div className="absolute inset-0 z-10 bg-black/40 mix-blend-multiply pointer-events-none" />
            <div className="absolute inset-0 z-10 bg-noise pointer-events-none opacity-50" />

            {/* Video Background */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=1920"
            >
                <source
                    src="https://videos.pexels.com/video-files/3196236/3196236-hd_1920_1080_25fps.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>

            {/* Hero Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 text-[#FDFBF7]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="space-y-6 max-w-4xl"
                >
                    <span className="font-bold tracking-[0.2em] uppercase text-sm md:text-base chips chips-bold">
                        Depuis 1985
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold drop-shadow-lg tracking-tight">
                        {name}
                    </h1>

                    <p className="text-xl md:text-2xl font-light leading-relaxed opacity-90 drop-shadow-md">
                        {tagline}
                        <br /><span className="text-sm md:text-lg opacity-80">{subTagline}</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <ArrowDown className="w-8 h-8 text-white animate-bounce" />
                </motion.div>
            </div>
        </section>
    );
};
