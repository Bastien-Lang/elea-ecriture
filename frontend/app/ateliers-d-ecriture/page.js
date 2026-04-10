"use client";
import Title from "../components/Title";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WritingWorkshopPage() {
    return (
        <main className="min-h-screen bg-beige pt-24 md:pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <Link href="/#ateliers" className="text-dark/50 hover:text-primary transition-colors text-[12px] uppercase tracking-[0.2em] mb-12 inline-block font-medium">← Retour aux ateliers</Link>
                </motion.div>
                
                <section className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div 
                        className="flex-1"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Title>Ateliers d'écriture</Title>
                        <p className="text-primary font-serif italic text-xl mt-4 mb-8">"Mettre des mots sur l'imaginaire."</p>
                        <div className="space-y-6 text-dark/80 font-light leading-relaxed text-lg">
                            <p>Mes ateliers d'écriture sont conçus comme des laboratoires de création. Que vous soyez débutant ou plume affirmée, l'objectif est de lever les blocages et d'explorer de nouveaux territoires narratifs.</p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-center gap-3"><span className="text-primary text-2xl">✦</span> <strong>Exploration :</strong> Exercices de style et jeux littéraires.</li>
                                <li className="flex items-center gap-3"><span className="text-primary text-2xl">✦</span> <strong>Structure :</strong> Accompagnement sur la construction de récits.</li>
                                <li className="flex items-center gap-3"><span className="text-primary text-2xl">✦</span> <strong>Partage :</strong> Un cadre bienveillant pour lire et être lu.</li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="flex-1 flex justify-center"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-lg aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                            <img src="/images/atelier.jpg" alt="Atelier écriture" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}