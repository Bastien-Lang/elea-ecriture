"use client";

import { useState, useEffect } from "react";
import Title from "./Title";
import Cta from "./Cta";
import Card from "./Card";
import { motion } from "framer-motion";

export default function Books() {
    const [lastPublication, setLastPublication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/publications/latest`)
            .then((res) => {
                if (!res.ok) throw new Error("Erreur lors du chargement");
                return res.json();
            })
            .then((data) => {
                setLastPublication(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur Fetch:", err);
                setError(true);
                setLoading(false);
            });
    }, []);

    // Variantes pour orchestrer l'apparition des textes et du CTA
    const textColumnVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 30 }, // Arrive de la droite
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <section id="parutions" className="relative min-h-[85vh] bg-beige flex items-center justify-center py-20 px-6 overflow-hidden">
            <div className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24 text-dark">
                
                {/* Colonne GAUCHE : La Card - Slide depuis la gauche */}
                <motion.div 
                    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    {loading && (
                        <div className="w-full max-w-md h-[500px] bg-gray-200 animate-pulse rounded-[40px] flex items-center justify-center text-gray-400">
                            Chargement...
                        </div>
                    )}

                    {error && (
                        <div className="text-red-800 italic">
                            Impossible de charger la dernière parution.
                        </div>
                    )}

                    {!loading && !error && lastPublication && (
                        // On suppose que Card gère ses propres styles internes, 
                        // le container motion gère son entrée dans la scène.
                        <Card
                            imgSrc={lastPublication.image_url} 
                            title={lastPublication.title} 
                            description={lastPublication.description} 
                        />
                    )}
                </motion.div>

                {/* Colonne DROITE : Texte de présentation - Container motion */}
                <motion.div 
                    className="w-full lg:max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left"
                    variants={textColumnVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <motion.div variants={itemVariants}>
                        <Title>Parutions</Title>
                    </motion.div>

                    <div className="my-6 space-y-4 text-[1rem] lg:text-[1.125rem] leading-relaxed text-left lg:text-left">
                        <motion.p variants={itemVariants}>
Engagée très tôt dans l’écriture comme voie d’expression et de transformation, je pose les mots comme on creuse un passage entre l’ombre et la lumière, pour alchimiser les blessures et révéler la beauté du monde. 
Passionnée par l’humain, j’explore le mystère de l’altérité et la puissance transformatrice de la rencontre, la quête de l’identité, les liens entre les âmes mais aussi les traumatismes, les abus de pouvoir, pour avancer sur le chemin de la connaissance de soi. 
J’aime mêler parfois le réel à la fiction pour aborder certaines thématiques sous des angles différents, créer des résonances au niveau de l’inconscient à travers des images symboliques tout en étant concrète et authentique. 
Si ma source d’inspiration est principalement autobiographique, j’apporte une tonalité universelle à mes expériences personnelles pour ouvrir d’autres horizons, et que mon témoignage éclaire d’autres cœurs. J’écris pour semer des graines de lumière autour de moi.                     
                        </motion.p>
                    </div>

                    {/* Le CTA est aussi un enfant du container motion, il sera staggéré */}
                    <motion.div variants={itemVariants}>
                        <Cta href="/parutions">Voir toutes les parutions</Cta>
                    </motion.div>
                </motion.div>

            </div>
        </section>
    );
}