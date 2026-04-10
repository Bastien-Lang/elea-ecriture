"use client";
import Title from "../components/Title";
import Link from "next/link";
import { motion } from "framer-motion";

export default function SalonsPage() {
    return (
        <main className="min-h-screen bg-beige pt-24 md:pt-32 pb-20 px-6">
            <div className="max-w-[1400px] mx-auto">
                <Link href="/" className="text-dark/50 hover:text-primary transition-colors text-[12px] uppercase tracking-[0.2em] mb-12 inline-block font-medium">← Retour à l'accueil</Link>
                
                <motion.header 
                    className="mb-20 text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Title>Salons & Événements</Title>
                    <p className="mt-4 text-primary font-serif italic text-2xl">La rencontre, au cœur du livre.</p>
                </motion.header>

                <section className="flex flex-col lg:flex-row gap-16 items-start">
                    <motion.div 
                        className="w-full lg:w-1/2"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h3 className="text-3xl font-serif text-dark mb-6 italic">Dédicaces et Rencontres</h3>
                        <p className="text-dark/70 text-lg leading-relaxed font-light mb-6">Le salon du livre est l'espace privilégié du dialogue. J'y participe régulièrement pour échanger avec mes lecteurs et partager mon univers.</p>
                        <p className="text-dark/70 text-lg leading-relaxed font-light">Organisateurs, je suis disponible pour des sessions de signatures, des jurys littéraires ou des inaugurations.</p>
                    </motion.div>

                    <div className="w-full lg:w-1/2 flex gap-4 h-[500px]">
                        <motion.div 
                            className="flex-1 rounded-3xl overflow-hidden shadow-xl"
                            whileHover={{ flex: 1.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src="/images/salons.jpg" className="object-cover h-full w-full" alt="Salon" />
                        </motion.div>
                        <motion.div 
                            className="flex-1 rounded-3xl overflow-hidden shadow-xl"
                            whileHover={{ flex: 1.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img src="/images/intervention.jpg" className="object-cover h-full w-full" alt="Dédicace" />
                        </motion.div>
                    </div>
                </section>

                <motion.div 
                    className="mt-32 p-16 bg-light border border-primary/10 rounded-[60px] text-center shadow-sm"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                >
                    <h4 className="font-serif text-3xl text-dark mb-4 italic">Vous organisez un événement littéraire ?</h4>
                    <p className="text-dark/60 text-lg mb-8 max-w-xl mx-auto">Je serais ravie d'étudier votre proposition d'invitation pour la saison prochaine.</p>
                    <Link href="/#contact" className="text-primary font-bold uppercase tracking-[0.3em] text-sm border-b-2 border-primary pb-2 hover:text-dark hover:border-dark transition-all">Me contacter</Link>
                </motion.div>
            </div>
        </main>
    );
}