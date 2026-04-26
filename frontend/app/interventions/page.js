"use client";
import Title from "../components/Title";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InterventionsPage() {
    return (
        <main className="min-h-screen bg-beige pt-24 md:pt-32 pb-20 px-6">
            <div className="max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}>
                    <Link href="/#news" className="text-dark/50 hover:text-primary transition-colors text-[12px] uppercase tracking-[0.2em] mb-12 inline-block font-medium">
                        ← Retour aux actualités
                    </Link>
                </motion.div>
                
                <motion.header 
                    className="mb-20 text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Title>Interventions culturelles</Title>
                    <p className="mt-4 text-primary font-serif italic text-2xl">Transmettre, de l'école à la cité.</p>
                </motion.header>

                <section className="flex flex-col lg:flex-row gap-16 items-start">
                    <motion.div 
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-3xl font-serif text-dark mb-4 italic text-primary">En Milieu Scolaire</h3>
                                <p className="text-dark/70 text-lg leading-relaxed font-light mb-6">
                                    De l'école au lycée, j'anime des rencontres autour de mes ouvrages, expliquant le processus de création, de l'idée à l'objet livre.
                                </p>
                                <ul className="space-y-2 border-l-2 border-primary/20 pl-6 text-dark/80 italic">
                                    <li>• Ateliers d'écriture pédagogiques</li>
                                    <li>• Rencontres auteurs / élèves</li>
                                    <li>• Création de fanzines et journaux</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-3xl font-serif text-dark mb-4 italic text-primary">Médiathèques & Centres</h3>
                                <p className="text-dark/70 text-lg leading-relaxed font-light mb-6">
                                    Conférences thématiques ou tables rondes sur la littérature contemporaine et l'art thérapie par l'écriture.
                                </p>
                                <ul className="space-y-2 border-l-2 border-dark/20 pl-6 text-dark/80 italic">
                                    <li>• Rencontres dédicaces thématiques</li>
                                    <li>• Conférences sur le métier d'auteur</li>
                                    <li>• Animation de cercles de lecture</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <div className="w-full lg:w-1/2 flex gap-4 h-[500px] md:h-[600px]">
                        <div 
                            className="flex-1 rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img src="/images/salons.jpg" className="object-cover h-full w-full" alt="Atelier en classe" />
                        </div>
                        <div 
                            className="flex-1 rounded-3xl overflow-hidden shadow-xl"
                        >
                            <img src="/images/intervention.jpg" className="object-cover h-full w-full" alt="Rencontre en médiathèque" />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}