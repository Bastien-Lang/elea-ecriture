"use client";

import { useState, useEffect } from "react";
import Title from "../components/Title"; 
import Link from "next/link";

export default function PublicationsPage() {
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/publications`)
            .then((res) => res.json())
            .then((data) => {
                setPublications(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur parutions:", err);
                setLoading(false);
            });
    }, []);

    // Fonction pour formater la date
    const formatDate = (dateString) => {
        return new Intl.DateTimeFormat('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(dateString));
    };

    if (loading) return <div className="py-40 text-center bg-beige min-h-screen">Chargement des parutions...</div>;

    return (
        <main className="min-h-screen bg-beige pt-32 pb-20 px-6">
            <div className="max-w-[1100px] mx-auto">
                
                <Link href="/" className="text-dark/50 hover:text-dark transition-colors text-sm uppercase tracking-widest mb-10 inline-block">
                    ← Retour à l'accueil
                </Link>

                <div className="mb-16">
                    <Title>Mes Parutions</Title>
                    <p className="mt-4 text-dark/70 font-light max-w-2xl">
                        Découvrez mes derniers ouvrages, romans et collaborations éditoriales. 
                        Chaque projet est une nouvelle aventure littéraire.
                    </p>
                </div>

                <div className="space-y-24">
                    {publications.map((pub) => (
                        <article key={pub.id} className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                            
                            {/* Couverture du livre */}
                            <div className="w-full md:w-1/3 group">
                                <div className="relative aspect-[2/3] overflow-hidden rounded-lg shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                                    <img
                                        src={pub.image_url}
                                        alt={pub.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Détails du livre */}
                            <div className="w-full md:w-2/3">
                                <span className="text-sm text-primary font-medium tracking-widest uppercase">
                                    Paru le {formatDate(pub.published_at)}
                                </span>
                                
                                <h2 className="text-4xl md:text-5xl font-serif italic text-dark mt-4 mb-6 leading-tight">
                                    {pub.title}
                                </h2>
                                
                                <div className="prose prose-dark text-dark/80 font-light leading-relaxed text-lg">
                                    {pub.description.split('\n').map((paragraph, i) => (
                                        <p key={i} className="mb-4">{paragraph}</p>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {publications.length === 0 && (
                    <div className="text-center py-20 border border-dashed border-dark/20 rounded-3xl">
                        <p className="italic text-dark/50 text-lg">Aucune parution n'est disponible pour le moment.</p>
                    </div>
                )}
            </div>
        </main>
    );
}