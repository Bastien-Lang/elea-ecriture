"use client";

import { useState, useEffect } from "react";
import Title from "./Title";
import Cta from "./Cta";
import Card from "./Card";

export default function Books() {
    const [lastPublication, setLastPublication] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/publications/latest`)
            .then((res) => {
                if (!res.ok) throw new Error("Erreur lors du chargement");
                return res.json();
            })
            .then((data) => {
                setLastPublication(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Erreur Fetch:", err);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <section id="publications" className="relative min-h-[85vh] bg-beige flex items-center justify-center py-20 px-6">
            <div className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24 text-dark">
                
                {/* Colonne GAUCHE : La Card */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    {loading && (
                        <div className="w-full max-w-md h-[500px] bg-gray-200 animate-pulse rounded-[40px] flex items-center justify-center text-gray-400">
                            Chargement...
                        </div>
                    )}

                    {error && (
                        <div className="text-red-800 italic">
                            Impossible de charger la dernière parution.
                        </div>
                    )}

                    {!loading && !error && lastPublication && (
                        <Card
                            imgSrc={lastPublication.image_url} 
                            title={lastPublication.title} 
                            description={lastPublication.description} 
                        />
                    )}
                </div>

                {/* Colonne DROITE : Texte de présentation */}
                <div className="w-full lg:max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Title>Parutions</Title>

                    <div className="my-6 space-y-4 text-[1rem] lg:text-[1.125rem] leading-relaxed text-justify lg:text-left">
                        <p>
                            Après des études universitaires littéraires, je me suis orientée dans l’accompagnement des personnes sur les chemins de la conscience et du développement personnel.
                        </p>
                        <p>
                            Auteure de formes littéraires variées – récit, poésie –, j’ai choisi l’auto-édition pour garder une liberté de création. J’illustre moi-même mes livres.
                        </p>
                    </div>
                    <Cta href="/parutions">Voir toutes les parutions</Cta>
                </div>

            </div>
        </section>
    );
}