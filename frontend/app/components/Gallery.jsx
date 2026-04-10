"use client";

import { useState, useEffect } from "react";
import Title from "./Title";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
    const [themes, setThemes] = useState([]);
    const [activeTheme, setActiveTheme] = useState(null);
    const [loading, setLoading] = useState(true);
    const [visibleCount, setVisibleCount] = useState(6);
    const [index, setIndex] = useState(-1);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`)
            .then((res) => res.json())
            .then((data) => {
                setThemes(data);
                if (data.length > 0) setActiveTheme(data[0]);
                setLoading(false);
            })
            .catch((err) => console.error("Erreur Galerie:", err));
    }, []);

    const handleThemeChange = (theme) => {
        setActiveTheme(theme);
        setVisibleCount(6);
    };

    const visibleItems = activeTheme?.items?.slice(0, visibleCount) || [];
    const slides = activeTheme?.items.map((item) => ({
        src: item.image_url,
        title: item.title,
        description: item.type,
    })) || [];

    if (loading) return <div className="py-20 text-center italic opacity-50">Chargement de la galerie...</div>;

    return (
        <section className="py-20 bg-beige px-6 overflow-hidden" id="galerie">
            <div className="max-w-[1280px] mx-auto">
                <motion.div 
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Title>Galerie & Créations</Title>
                </motion.div>

                {/* Filtres : Stagger sur les boutons */}
                <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
                    viewport={{ once: true }}
                >
                    {themes.map((theme) => (
                        <motion.button
                            key={theme.id}
                            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                            onClick={() => handleThemeChange(theme)}
                            className={`capitalize px-6 py-2 rounded-full transition-all duration-300 text-sm tracking-widest ${
                                activeTheme?.id === theme.id ? "bg-primary text-beige shadow-md" : "bg-white/50 text-dark hover:bg-white"
                            }`}
                        >
                            {theme.name}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Grille : On utilise AnimatePresence pour le changement de thème */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {visibleItems.map((item, idx) => (
                            <motion.div 
                                key={item.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                onClick={() => setIndex(idx)}
                                className="group relative aspect-[4/5] overflow-hidden rounded-[30px] shadow-sm bg-white cursor-zoom-in"
                            >
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                                    <p className="text-beige font-serif italic text-xl">{item.title || "Sans titre"}</p>
                                    <span className="text-beige/70 text-[10px] uppercase tracking-[0.2em] mt-2">Agrandir</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {activeTheme?.items.length > visibleCount && (
                    <motion.div className="mt-16 text-center" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                        <button 
                            onClick={() => setVisibleCount(prev => prev + 6)}
                            className="text-primary border-b border-primary/30 pb-1 hover:border-primary transition-all uppercase text-xs tracking-widest font-bold"
                        >
                            Voir plus de créations
                        </button>
                    </motion.div>
                )}

                <Lightbox index={index} open={index >= 0} close={() => setIndex(-1)} slides={slides} plugins={[Captions]} />
            </div>
        </section>
    );
}