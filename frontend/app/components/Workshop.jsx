"use client";

import Title from "./Title";
import Link from "next/link";
import Vector from "./Vector";
import { motion } from "framer-motion";

export default function Workshop() {
    const workshopItems = [
        { 
            href: "/ateliers-d-ecriture", 
            src: "/images/atelier.jpg", 
            label: "Ateliers d'écriture" 
        },
        { 
            href: "/ateliers-de-meditation", 
            src: "/images/meditation.jpg", 
            label: "Ateliers de méditation" 
        }
    ];

    return (
        <section id="ateliers" className="relative min-h-screen bg-white flex items-center justify-center py-20 px-6 overflow-hidden">
            <Vector position="top" />
            
            <div className="max-w-[1280px] lg:py-40 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
                
                {/* Colonne Texte : Exactement comme News */}
                <motion.div 
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start order-2 lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Title>Ateliers</Title>
                    <div className="space-y-4 mt-6 text-dark/80 text-[1rem] lg:text-[1.125rem] text-left leading-relaxed max-w-lg">
                        <p>
                            Après des études universitaires littéraires, je me suis orientée dans l’accompagnement des personnes sur les chemins de la conscience et du développement personnel.
                        </p>
                        <p>
                            Le domaine artistique a jalonné mon parcours : photo, peinture à l’huile, mandalas. Il enrichit ma créativité et s’allie naturellement à l’écriture.
                        </p>
                        <p>
                            Auteure de formes littéraires variées – récit, poésie –, j’ai choisi l’auto-édition pour garder une liberté de création. J’illustre moi-même mes livres.
                        </p>
                        <p>
                            J’anime des ateliers d’écriture pour transmettre le plaisir d’écrire et accompagner chacun dans la découverte de sa créativité. 
                        </p>
                    </div>
                </motion.div>

                {/* Colonne Images : Boucle identique à News, format différent */}
                <motion.div 
                    className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center lg:items-end gap-8 order-1 lg:order-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.3, delayChildren: 0.3 }}
                    viewport={{ once: true }}
                >
                    {workshopItems.map((item, idx) => (
                        <Link key={idx} href={item.href} className="group w-full max-w-full md:max-w-[320px]">
                            <motion.div 
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                                whileHover={{ y: -8 }}
                                className="flex flex-col items-center gap-4"
                            >
                                {/* Ratio 4/3 mobile et 3/4 desktop comme demandé */}
                                <div className="w-full aspect-[4/3] md:aspect-[3/4] rounded-[30px] overflow-hidden shadow-lg border border-beige">
                                    <img 
                                        src={item.src} 
                                        alt={item.label} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                    />
                                </div>
                                <p className="text-dark font-serif italic text-lg group-hover:text-primary transition-colors">
                                    {item.label}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
            
            <Vector />
        </section>
    );
}