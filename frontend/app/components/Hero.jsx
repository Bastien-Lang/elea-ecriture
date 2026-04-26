"use client";

import Vector from "./Vector";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dark">
        {/* 1. L'image de fond avec un léger zoom arrière au chargement */}
        <motion.div 
            className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
            aria-hidden="true"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
        />
        
        {/* 2. Le filtre de flou qui apparaît en fondu */}
        <motion.div 
            className="absolute inset-0 backdrop-blur-[5px]" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
        />

        {/* 3. Le contenu textuel */}
        <div className="relative z-10 text-center px-6">
            {/* Nom : Apparition fluide vers le haut */}
            <motion.h1
                className="font-signature text-6xl lg:text-9xl text-light block mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
                Emanuelle Lang
            </motion.h1>

            {/* Sous-titre : Apparition juste après le nom */}
            <motion.p 
                className="font-sans text-xl mb-8 text-light/90 lg:text-3xl lg:tracking-wide"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            >
                Ateliers d’écriture, oeuvres originales...
            </motion.p>
        </div>
      
        {/* Vector : Apparition discrète en dernier */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 1.8 }}
        >
            <Vector/>
        </motion.div>
    </section>
  );
}