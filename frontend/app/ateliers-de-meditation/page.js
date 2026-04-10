"use client";
import Title from "../components/Title";
import Link from "next/link";
import { motion } from "framer-motion";

export default function MeditationPage() {
    return (
        <main className="min-h-screen bg-beige pt-24 md:pt-32 pb-20 px-6">
            <div className="max-w-[1400px] mx-auto">
                <Link href="/#ateliers" className="text-dark/50 hover:text-primary transition-colors text-[12px] uppercase tracking-[0.2em] mb-12 inline-block font-medium">← Retour aux ateliers</Link>
                
                <section className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
                    <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Title>Méditation & Présence</Title>
                        <p className="text-primary font-serif italic text-xl mt-4 mb-8">"Le silence comme source d'inspiration."</p>
                        <div className="space-y-6 text-dark/80 font-light leading-relaxed text-lg text-right lg:text-left">
                            <p>La méditation n'est pas une absence de pensée, mais une qualité de présence. J'intègre la pleine conscience dans mon processus créatif pour vous accompagner dans cette quête d'apaisement.</p>
                            <div className="bg-white/40 backdrop-blur-sm p-8 rounded-3xl border border-primary/10 shadow-sm inline-block w-full">
                                <h3 className="font-serif text-xl mb-4 text-dark italic">Ce que nous explorons :</h3>
                                <p className="text-base text-primary/80">Respiration guidée • Ancrage sensoriel • Visualisation créative • Méditation marchée.</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex-1 flex justify-center"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="relative w-full max-w-lg aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                            <img src="/images/meditation.jpg" alt="Méditation" className="object-cover w-full h-full" />
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}