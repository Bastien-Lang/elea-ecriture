"use client";

import { useState } from "react";

export default function Nav() {
    const liStyle = "text-dark hover:text-primary transition-colors";
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            {/* bouton burger (mobile uniquement) */}
            <button
                onClick={toggleMenu}
                className="fixed top-6 right-6 z-50 group lg:hidden"
            >
                <div className="relative flex items-center justify-center rounded-full w-[50px] h-[50px]
                transition-all hover:scale-110 active:scale-95 hover:ring-8 duration-200">

                    <div className="flex flex-col justify-between w-[20px] h-[20px] relative">

                        <span className={`bg-light h-[3px] w-7 transition-all duration-300 rounded-full
                        ${isOpen ? "translate-x-10 opacity-0" : ""}`} />

                        <span className={`bg-light h-[3px] w-7 transition-all duration-300 delay-75 rounded-full
                        ${isOpen ? "translate-x-10 opacity-0" : ""}`} />

                        <span className={`bg-light h-[3px] w-7 transition-all duration-300 delay-150 rounded-full
                        ${isOpen ? "translate-x-10 opacity-0" : ""}`} />

                        <div className={`absolute flex items-center justify-center w-full h-full
                        transition-all duration-500
                        ${isOpen ? "opacity-100 rotate-0" : "opacity-0 rotate-90"}`}>

                            <span className="absolute bg-dark h-[3px] w-5 rotate-45 rounded-full" />
                            <span className="absolute bg-dark h-[3px] w-5 -rotate-45 rounded-full" />

                        </div>
                    </div>
                </div>
            </button>

            {/* header */}
            <header
                className={`fixed lg:absolute top-0 left-0 w-full h-full lg:h-auto bg-beige lg:bg-light z-40
                flex items-center justify-center
                transition-all duration-500 ease-in-out
                
                ${isOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-10 pointer-events-none"}
                
                lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto`}
            >
                <nav className="py-6 px-6 flex flex-col lg:flex-row lg:min-h-[80px] justify-between items-center w-full min-h-[50vh] max-w-[1400px]">

                    <img src="/logo.svg" alt="Logo" className="max-w-[80px]" />

                    <ul className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10 font-sans text-dark">
                        <li className={liStyle}><a href="#">Accueil</a></li>
                        <li className={liStyle}><a href="#">Qui suis-je</a></li>
                        <li className={liStyle}><a href="#">Ateliers</a></li>
                        <li className={liStyle}><a href="#">Parutions</a></li>
                        <li className={liStyle}><a href="#">Actualités</a></li>
                        <li className={liStyle}><a href="#">Contact</a></li>
                    </ul>

                </nav>
            </header>
        </>
    );
}
