"use client"; // Obligatoire pour Framer Motion

import Title from "./Title";
import { motion } from "framer-motion";

export default function WhoAmI() {
    // Variantes pour le container de texte (pour orchestrer l'apparition des enfants)
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Délai entre chaque paragraphe
                delayChildren: 0.3,   // Délai avant le début du premier paragraphe
            },
        },
    };

    // Variantes pour les éléments individuels (paragraphes)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        // On transforme la section en motion.section pour l'apparition globale
        <section 
            id="bio" 
            className="relative min-h-[85vh] bg-beige flex items-center justify-center py-20 px-6 overflow-hidden"
        >
            <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 text-dark">
                
                {/* Image : Slide depuis la gauche */}
                <motion.div 
                    className="relative w-full max-w-[350px] lg:max-w-[450px] aspect-square rounded-[32px] lg:rounded-[64px] overflow-hidden scale-x-[-1] shadow-sm"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <img 
                        src="/images/emanuelle_lang.jpg" 
                        alt="Portrait de Emanuelle Lang"
                        className="w-full h-full object-cover object-[25%_center] scale-110" 
                    />
                </motion.div>

                {/* Bloc Texte : Container motion pour le stagger */}
                <motion.div 
                    className="w-full lg:max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left"
                    variants={textContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div variants={itemVariants}>
                        <Title>Qui suis-je ?</Title>
                    </motion.div>

                    <div className="mt-6 space-y-4 text-[1rem] lg:text-[1.125rem] leading-relaxed text-left">
                        <motion.p variants={itemVariants}>
                            Après des études universitaires littéraires, je me suis orientée dans l’accompagnement des personnes sur les chemins de la conscience et du développement personnel.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Le domaine artistique a jalonné mon parcours : photo, peinture à l’huile, mandalas. Il enrichit ma créativité et s’allie naturellement à l’écriture.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Auteure de formes littéraires variées – récit d’autofiction, poésie –, j’ai choisi l’auto-édition pour garder une liberté de création. J’illustre moi-même mes livres.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            J’anime des ateliers d’écriture pour transmettre le plaisir d’écrire et accompagner chacun dans la découverte de sa créativité. 
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            J’anime également des ateliers de méditation guidée et de pleine conscience pour partager mon expérience et avancer ensemble sur le chemin de la Présence à soi et au monde. 
                        </motion.p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}