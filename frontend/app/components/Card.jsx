"use client";

import { useState } from "react";

export default function Card({ imgSrc, title, description }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    // Seuil de caractères avant de couper
    const LIMIT = 160;
    const isLongText = description?.length > LIMIT;

    // Texte à afficher
    const displayText = isExpanded 
        ? description 
        : description?.slice(0, LIMIT) + (isLongText ? "..." : "");

    return (
        <div className="flex flex-col w-full max-w-lg justify-between items-start gap-6">
            <p className="text-[1rem] lg:text-[1.125rem] text-dark mb-2">Dernière parution</p>
            
            <div className="w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-sm">
                <img 
                    src={imgSrc} 
                    alt={title} 
                    className="w-full h-full object-cover" 
                />
            </div>

            <div className="mt-6 flex flex-col w-full">
                <h3 className="font-serif font-bold italic text-2xl lg:text-3xl text-dark leading-tight">
                    {title}
                </h3>
                
                <div className="mt-4 text-dark text-[1rem] font-light lg:text-[1.125rem] leading-relaxed font-sans transition-all duration-300">
                    {displayText || "Aucune description disponible"}
                </div>

                {isLongText && (
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="self-end mt-2 text-dark text-sm underline hover:opacity-70 transition-opacity cursor-pointer"
                    >
                        {isExpanded ? "voir moins" : "voir plus..."}
                    </button>
                )}
            </div>
        </div>
    );
}