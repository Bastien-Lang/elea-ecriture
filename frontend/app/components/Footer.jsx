"use client";

import Link from "next/link";

export default function Footer() {
    const navLinks = [
        { name: "Accueil", href: "/#accueil" },
        { name: "Bio", href: "/#bio" },
        { name: "Ateliers", href: "/#ateliers" },
        { name: "Parutions", href: "/#parutions" },
        { name: "Galerie", href: "/#galerie" },
        { name: "Actualités", href: "/#news" },
        { name: "Contact", href: "/#contact" },
    ];

    return (
        <footer className="relative w-full min-h-[500px] lg:min-h-[400px] flex items-end overflow-hidden">
            {/* Image de fond avec overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="/images/footer.png" 
                    alt="Pied de page" 
                    className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/20 lg:bg-black/10"></div>
            </div>

            <div className="relative z-20 w-full max-w-[1400px] mx-auto px-6 pb-10 lg:px-8 lg:pb-16">
                
                {/* Logo : Centré sur mobile, à gauche sur desktop */}
                <div className="flex justify-center lg:justify-start mb-10 lg:mb-16">
                    <img src="/logo.svg" alt="Emanuelle Lang" className="w-24 lg:w-32" />
                </div>

                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-12 lg:gap-10">
                    
                    {/* Bloc Contact & Réseaux : Centré sur mobile */}
                    <div className="flex flex-col items-center lg:items-start gap-6 order-2 lg:order-1">
                        <div className="flex gap-6">
                            <Link href="https://www.facebook.com/emanuelle.lang.auteure/" target="_blank" className="hover:scale-110 transition-transform">
                                <img src="/Facebook.png" alt="Facebook" className="w-7 h-7 lg:w-8 lg:h-8" />
                            </Link>
                            <Link href="https://www.instagram.com/emanuelle.lang/" target="_blank" className="hover:scale-110 transition-transform">
                                <img src="/Instagram.png" alt="Instagram" className="w-7 h-7 lg:w-8 lg:h-8" />
                            </Link>
                        </div>

                        <div className="text-white text-center lg:text-left space-y-2 font-light tracking-wide">
                            <p className="text-base lg:text-lg">06.77.62.04.50</p>
                            <p className="text-base lg:text-lg">emanuelle.lang.auteure@gmail.com</p>
                        </div>
                    </div>

                    {/* Navigation : Liste en colonne sur mobile, flex-wrap sur desktop */}
                    <nav className="order-1 lg:order-2 w-full lg:w-auto">
                        <ul className="flex flex-col items-center lg:flex-row lg:flex-wrap justify-center gap-y-4 lg:gap-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link 
                                        href={link.href} 
                                        className="text-white text-lg lg:text-xl font-light hover:text-primary transition-colors py-1 block"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                </div>

                {/* Petit copyright optionnel en bas */}
                <div className="mt-12 pt-8 text-center lg:text-left">
                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
                        © {new Date().getFullYear()} Emanuelle Lang — Tous droits réservés
                    </p>
                </div>
            </div>
        </footer>
    );
}