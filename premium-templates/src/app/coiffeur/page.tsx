"use client";

import { Vortex } from "@/components/ui/vortex";
import { CompareSlider } from "@/components/ui/compare-slider";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scissors, Calendar, Clock } from "lucide-react";
import Link from "next/link";

export default function CoiffeurPage() {
    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 mix-blend-difference px-6 py-6 flex justify-between items-center backdrop-blur-sm">
                <div className="text-2xl font-bold tracking-tighter uppercase border-b-2 border-white pb-1">
                    Éclat
                </div>
                <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
                    <Link href="#" className="hover:text-gray-300 transition-colors">Collections</Link>
                    <Link href="#" className="hover:text-gray-300 transition-colors">Services</Link>
                    <Link href="#" className="hover:text-gray-300 transition-colors">Le Salon</Link>
                </div>
                <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest text-xs h-9 px-6 bg-transparent">
                    Book Now
                </Button>
            </nav>

            {/* Hero Section with Vortex */}
            <section className="relative h-screen w-full overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={0} // White/Grey particles
                    baseSpeed={0.2}
                    rangeSpeed={1}
                    baseRadius={1}
                    rangeRadius={2}
                    className="flex items-center justify-center flex-col px-4 md:px-10 h-full w-full"
                >
                    <div className="z-10 flex flex-col items-center gap-6 text-center max-w-4xl mx-auto mix-blend-difference">
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-[0.8]">
                            Sculpting <br /> Identity
                        </h1>
                        <p className="text-xl md:text-2xl font-light tracking-wide text-gray-300 max-w-2xl mt-4">
                            Where precision meets artistry. Experience the new era of hair design.
                        </p>
                        <div className="mt-8 flex gap-4">
                            <Button className="rounded-none bg-white text-black hover:bg-gray-200 uppercase tracking-widest px-8 py-6 text-sm">
                                View Collections
                            </Button>
                            <Button variant="outline" className="rounded-none border-white text-white hover:bg-white hover:text-black uppercase tracking-widest px-8 py-6 text-sm">
                                Our Philosophy
                            </Button>
                        </div>
                    </div>
                </Vortex>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce mix-blend-difference">
                    <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent"></div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-24 px-6 md:px-20 bg-zinc-950">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-8">
                            The Cut <br /> <span className="text-zinc-600">Defined</span>
                        </h2>
                        <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
                            We believe a haircut is not just a service—it is a transformation. Our editorial approach combines structural precision with fluid movement, creating styles that are effortlessly chic and unmistakably yours.
                        </p>
                        <ul className="space-y-4 text-zinc-300">
                            <li className="flex items-center gap-4">
                                <Scissors className="w-5 h-5 text-zinc-500" />
                                <span className="uppercase tracking-wide text-sm">Structural Precision</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Clock className="w-5 h-5 text-zinc-500" />
                                <span className="uppercase tracking-wide text-sm">Dedicated Consultation</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <Calendar className="w-5 h-5 text-zinc-500" />
                                <span className="uppercase tracking-wide text-sm">Personalized Maintenance</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative h-[600px] w-full">
                        {/* Compare Slider - using placeholders */}
                        <CompareSlider
                            beforeImage="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=1000&auto=format&fit=crop"
                            afterImage="https://images.unsplash.com/photo-1562025291-ba91819934ac?q=80&w=1000&auto=format&fit=crop"
                            beforeLabel="Before"
                            afterLabel="Editorial Cut"
                            className="h-full w-full rounded-none"
                        />
                        <div className="absolute -bottom-6 -right-6 text-9xl font-bold text-zinc-900 -z-10 select-none">
                            01
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Minimal List */}
            <section className="py-24 px-6 md:px-20 border-t border-zinc-900 bg-black">
                <div className="max-w-5xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-16 text-center">Menu</h2>

                    <div className="space-y-8">
                        {[
                            { name: "Signature Cut", price: "85€", desc: "Consultation, shampooing, structural cut, styling." },
                            { name: "Color Transformation", price: "From 120€", desc: "Full head color, gloss, treatment." },
                            { name: "Balayage Couture", price: "From 160€", desc: "Hand-painted highlights for natural dimensionality." },
                            { name: "Kérastase Ritual", price: "45€", desc: "Deep conditioning treatment tailored to hair type." }
                        ].map((item, i) => (
                            <div key={i} className="group relative border-b border-zinc-900 pb-8 hover:border-white transition-colors duration-500">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="text-2xl font-light uppercase tracking-wide group-hover:translate-x-4 transition-transform duration-300">{item.name}</h3>
                                    <span className="text-xl font-mono">{item.price}</span>
                                </div>
                                <p className="text-zinc-500 mt-2 text-sm max-w-md group-hover:translate-x-4 transition-transform duration-300 delay-75">{item.desc}</p>

                                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <ArrowRight className="w-6 h-6" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 bg-zinc-950 text-center border-t border-zinc-900">
                <p className="text-zinc-500 text-sm uppercase tracking-widest">© 2025 Éclat Hair Studio. Paris.</p>
            </footer>
        </div>
    );
}
