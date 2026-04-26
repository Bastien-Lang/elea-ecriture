"use client";

import Title from "./Title";
import Link from "next/link";
import Vector from "./Vector";
import { motion } from "framer-motion";

export default function News() {
    return (
        <section id="news" className="relative min-h-screen bg-white flex items-center justify-center py-20 px-6 overflow-hidden">
            <div className="max-w-[1280px] lg:py-40 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
                <Vector position="top" />
                {/* Colonne Texte : Slide depuis la gauche */}
                <motion.div 
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-start order-2 lg:order-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <Title>Actualités</Title>
                    <div className="space-y-4 mt-6 text-dark/80 text-[1rem] lg:text-[1.125rem] text-left leading-relaxed max-w-lg">
                        <p>Retrouvez-moi lors des prochains événements littéraires pour échanger sur mes ouvrages et les faire dédicacer.
                        J’interviens dans des salons du livre, des bibliothèques, des librairies : rencontres et partage autour de l’écriture et des thématiques présentes dans mes livres, dédicaces, conférences.
                        </p>
                    </div>
                </motion.div>

                {/* Colonne Images : Pop depuis la droite */}
                <motion.div 
                    className="w-full lg:w-1/2 flex flex-col items-center lg:items-end gap-8 order-1 lg:order-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.3, delayChildren: 0.3 }}
                    viewport={{ once: true }}
                >
                    {[
                        { href: "/salons", src: "/images/salons.jpg", label: "Salons du livre" },
                        { href: "/interventions", src: "/images/intervention.jpg", label: "Interventions" }
                    ].map((item, idx) => (
                        <Link key={idx} href={item.href} className="group w-full max-w-full md:max-w-[420px]">
                            <motion.div 
                                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                                whileHover={{ y: -8 }}
                                className="flex flex-col items-center gap-4"
                            >
                                <div className="w-full aspect-[4/3] rounded-[30px] overflow-hidden shadow-lg border border-beige">
                                    <img src={item.src} alt={item.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <p className="text-dark font-serif italic text-lg group-hover:text-primary transition-colors">{item.label}</p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
            <Vector />
        </section>
    );
}