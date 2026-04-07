"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Style des liens avec un petit soulignement élégant au survol
    const liStyle = "text-dark hover:text-primary transition-all duration-300 relative group py-2";

    // Détecter le scroll pour changer l'apparence de la nav
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            {/* Bouton burger - Amélioré avec condition de couleur selon le scroll */}
            <button
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-[60] lg:hidden bg-dark p-3 rounded-full shadow-lg"
            >
                <div className="relative flex flex-col justify-between w-6 h-4">
                    <span className={`bg-beige h-[2px] w-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                    <span className={`bg-beige h-[2px] w-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`bg-beige h-[2px] w-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                </div>
            </button>

            {/* Header Sticky */}
            <header
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 
                ${scrolled ? "bg-beige/80 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-6"}
                ${isOpen ? "h-screen bg-beige opacity-100" : "h-auto"} 
                lg:h-auto lg:opacity-100`}
            >
                <nav className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row justify-between items-center w-full h-full">
                    
                    {/* Logo */}
                    <div className="flex items-center justify-between w-full lg:w-auto">
                        <a href="#accueil" onClick={closeMenu}>
                            <img src="/logo.svg" alt="Logo" className={`transition-all duration-300 ${scrolled ? "max-w-[60px]" : "max-w-[80px]"}`} />
                        </a>
                    </div>

                    {/* Menu Links */}
                    <ul className={`
                        flex flex-col lg:flex-row items-center gap-8 lg:gap-10 font-sans text-dark uppercase tracking-widest text-sm
                        transition-all duration-500
                        ${isOpen ? "mt-20 opacity-100" : "hidden lg:flex opacity-100"}
                    `}>
                        <li className={liStyle}><a href="#accueil" onClick={closeMenu}>Accueil</a></li>
                        <li className={liStyle}><a href="#bio" onClick={closeMenu}>Qui suis-je</a></li>
                        <li className={liStyle}><a href="#publications" onClick={closeMenu}>Parutions</a></li>
                        <li className={liStyle}><a href="#galerie" onClick={closeMenu}>Galerie</a></li>
                        <li className={liStyle}><a href="#contact" onClick={closeMenu}>Contact</a></li>
                        <li className={liStyle}><Link href="/parutions" onClick={closeMenu}>Parutions</Link></li>
                        
                        {/* Barre de soulignement animée en desktop */}
                        <span className="hidden lg:block absolute bottom-0 left-0 w-0 h-[1px] bg-dark transition-all duration-300 group-hover:w-full"></span>
                    </ul>
                </nav>
            </header>
        </>
    );
}