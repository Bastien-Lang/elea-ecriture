"use client";

import { useState, useEffect } from "react";
import Title from "./Title";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
    const [themes, setThemes] = useState([]);
    const [activeTheme, setActiveTheme] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // États pour la Lightbox
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

    // On prépare les images pour la lightbox au format attendu par la lib
    const slides = activeTheme?.items.map((item) => ({
        src: item.image_url,
        title: item.title,
    })) || [];

    if (loading) return <div className="py-20 text-center">Chargement...</div>;

    return (
        <section className="py-20 bg-beige px-6" id="galerie">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-12">
                    <Title>Galerie & Créations</Title>
                </div>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {themes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => {
                                setActiveTheme(theme);
                                setIndex(-1); // On reset l'index quand on change de thème
                            }}
                            className={`px-6 py-2 rounded-full border border-dark transition-all cursor-pointer capitalize ${
                                activeTheme?.id === theme.id 
                                ? "bg-dark text-beige" 
                                : "text-dark hover:bg-dark hover:text-beige"
                            }`}
                        >
                            {theme.name}
                        </button>
                    ))}
                </div>

                {/* Grille d'images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeTheme?.items.map((item, idx) => (
                        <div 
                            key={item.id} 
                            onClick={() => setIndex(idx)} // Ouvre la lightbox à cet index
                            className="group relative aspect-square overflow-hidden rounded-[30px] shadow-sm bg-white cursor-zoom-in"
                        >
                            <img
                                src={item.image_url}
                                alt={item.title || "Image de galerie"}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-dark/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-beige text-sm font-light">Agrandir</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* La Lightbox */}
                <Lightbox
                    index={index}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={slides}
                />

                {activeTheme?.items.length === 0 && (
                    <p className="text-center italic text-gray-500 mt-10">
                        Ce thème ne contient pas encore d'images.
                    </p>
                )}
            </div>
        </section>
    );
}