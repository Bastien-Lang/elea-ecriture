"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const liStyle = "text-dark hover:text-primary transition-colors relative group py-2 text-[13px] uppercase tracking-[0.15em] font-medium";

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(prev => !prev);
    const closeMenu = () => setIsOpen(false);

    const menuVariants = {
        closed: { opacity: 0, y: -10 },
        open: { 
            opacity: 1, 
            y: 0,
            transition: { staggerChildren: 0.08, delayChildren: 0.1 }
        }
    };

    const linkVariants = {
        closed: { opacity: 0, y: 10 },
        open: { opacity: 1, y: 0 }
    };

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
                        {["Accueil", "Bio", "Ateliers", "Parutions", "Galerie", "News", "Contact"].map((item) => (
                            <li key={item} className={liStyle}>
                                <Link href={`/#${item.toLowerCase()}`}>{item}</Link>
                                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                            </li>
                        ))}
                    </ul>

                    {/* Burger Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
                        aria-label="Menu"
                    >
                        <motion.span 
                            animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                            className="w-7 h-[1.5px] bg-dark block origin-center"
                        />
                        <motion.span 
                            animate={isOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
                            className="w-7 h-[1.5px] bg-dark block"
                        />
                        <motion.span 
                            animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                            className="w-7 h-[1.5px] bg-dark block origin-center"
                        />
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-[#FDF8E6] z-[60] flex items-center justify-center lg:hidden"
                    >
                        <motion.ul 
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            className="flex flex-col items-center gap-6 text-center"
                        >
                            {["Accueil", "Bio", "Ateliers", "Parutions", "Galerie", "News", "Contact"].map((item) => (
                                <motion.li 
                                    key={item} 
                                    variants={linkVariants}
                                    className="text-xl font-serif italic text-dark hover:text-primary transition-colors"
                                >
                                    <Link href={`/#${item.toLowerCase()}`} onClick={closeMenu}>
                                        {item}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}