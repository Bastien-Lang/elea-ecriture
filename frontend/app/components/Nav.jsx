"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("accueil");

    const sections = ["Accueil", "Bio", "Ateliers", "Parutions", "Galerie", "News", "Contact"];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        
        const observerOptions = {
            root: null,
            rootMargin: '-25% 0px -25% 0px', // Fenêtre de détection plus large (50% du centre)
            threshold: 0.1 // Il faut que 10% de la section soit visible dans cette fenêtre
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                // On vérifie si la section entre dans la zone
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        // Petite astuce : on attend un tout petit peu que le DOM soit stable
        const timeoutId = setTimeout(() => {
            sections.forEach((item) => {
                const el = document.getElementById(item.toLowerCase());
                if (el) observer.observe(el);
            });
        }, 500);

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            observer.disconnect();
            clearTimeout(timeoutId);
        };
    }, []);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed top-0 inset-x-0 z-[70] transition-all duration-500 border-b border-dark/5
                ${scrolled 
                    ? "bg-[#FDF8E6]/90 backdrop-blur-md py-2 shadow-sm" 
                    : "bg-[#FDF8E6]/95 py-4" 
                }`}
            >
                <nav className="max-w-[1400px] mx-auto px-8 flex justify-between items-center">
                    
                    <Link href="/#accueil" onClick={closeMenu} className="relative">
                        <motion.img 
                            src="/logo.svg" 
                            alt="Logo" 
                            className="transition-all duration-300"
                            style={{ maxWidth: scrolled ? "55px" : "70px" }}
                            whileHover={{ scale: 1.03 }}
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-10">
                        {sections.map((item) => {
                            const id = item.toLowerCase();
                            const isActive = activeSection === id;
                            
                            return (
                                <li key={item} className="text-dark hover:text-primary transition-colors relative group py-2 text-[13px] uppercase tracking-[0.15em] font-medium">
                                    <Link href={`/#${id}`}>{item}</Link>
                                    {/* Barre de soulignement active ou hover */}
                                    <span 
                                        className={`absolute bottom-0 left-0 h-[1px] bg-primary transition-all duration-300 
                                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                                    ></span>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Burger Button (Inchangé) */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
                        aria-label="Menu"
                    >
                        <motion.span animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }} className="w-7 h-[1.5px] bg-dark block origin-center"/>
                        <motion.span animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }} className="w-7 h-[1.5px] bg-dark block"/>
                        <motion.span animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }} className="w-7 h-[1.5px] bg-dark block origin-center"/>
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Overlay (Mise à jour pour le lien actif aussi) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#FDF8E6] z-[60] flex items-center justify-center lg:hidden"
                    >
                        <ul className="flex flex-col items-center gap-6 text-center">
                            {sections.map((item) => {
                                const id = item.toLowerCase();
                                const isActive = activeSection === id;
                                return (
                                    <motion.li 
                                        key={item} 
                                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                        className={`text-xl font-serif italic transition-colors ${isActive ? "text-primary" : "text-dark"}`}
                                    >
                                        <Link href={`/#${id}`} onClick={closeMenu}>
                                            {item}
                                        </Link>
                                    </motion.li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}