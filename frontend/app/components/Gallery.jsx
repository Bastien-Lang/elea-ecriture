"use client";

import { useState, useEffect } from "react";
import Title from "./Title";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// Optionnel : Ajoute le plugin Captions pour voir le titre DANS la lightbox aussi
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

export default function Gallery() {
    const [themes, setThemes] = useState([]);
    const [activeTheme, setActiveTheme] = useState(null);
    const [loading, setLoading] = useState(true);
    
    // Pagination
    const IMAGES_PER_PAGE = 6;
    const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);

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

    // Reset de la pagination quand on change de thème
    const handleThemeChange = (theme) => {
        setActiveTheme(theme);
        setVisibleCount(IMAGES_PER_PAGE);
        setIndex(-1);
    };

    // Images actuellement visibles
    const visibleItems = activeTheme?.items?.slice(0, visibleCount) || [];

    // Préparation des slides pour la lightbox (toutes les images du thème, pas seulement les visibles)
    const slides = activeTheme?.items.map((item) => ({
        src: item.image_url,
        title: item.title,
        description: item.type, // Petit bonus : affiche le type (peinture/photo)
    })) || [];

    if (loading) return <div className="py-20 text-center">Chargement...</div>;

    return (
        <section className="py-20 bg-beige px-6" id="galerie">
            <div className="max-w-[1280px] mx-auto">
                <div className="text-center mb-6">
                    <Title>Galerie & Créations</Title>
                </div>

                {/* Filtres */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {themes.map((theme) => (
                        <button
                            key={theme.id}
                            onClick={() => handleThemeChange(theme)}
                            className={`capitalize py-2 ${
                                activeTheme?.id === theme.id 
                                ? "btn-main" 
                                : "btn-secondary"
                            }`}
                        >
                            {theme.name}
                        </button>
                    ))}
                </div>

                {/* Grille d'images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visibleItems.map((item, idx) => (
                        <div 
                            key={item.id} 
                            onClick={() => setIndex(idx)}
                            className="group relative aspect-[4/5] overflow-hidden rounded-[20px] shadow-md bg-white cursor-zoom-in"
                        >
                            <img
                                src={item.image_url}
                                alt={item.title || "Image de galerie"}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            
                            {/* Overlay avec Titre + Action */}
                            <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                                <h3 className="text-beige text-xl font-serif italic mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    {item.title || "Sans titre"}
                                </h3>
                                <div className="w-10 h-[1px] bg-beige/50 mb-4"></div>
                                <span className="text-beige/80 text-xs uppercase tracking-widest font-light">
                                    Agrandir
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bouton Charger Plus */}
                {activeTheme?.items.length > visibleCount && (
                    <div className="mt-16 text-center">
                        <button 
                            onClick={() => setVisibleCount(prev => prev + IMAGES_PER_PAGE)}
                            className="btn-secondary py-2 text-sm transition-colors tracking-widest uppercase"
                        >
                            Voir plus de créations
                        </button>
                    </div>
                )}

                {/* La Lightbox avec plugin Captions */}
                <Lightbox
                    index={index}
                    open={index >= 0}
                    close={() => setIndex(-1)}
                    slides={slides}
                    plugins={[Captions]}
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