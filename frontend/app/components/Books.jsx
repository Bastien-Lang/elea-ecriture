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
        // L'URL sera à adapter quand ton backend sera en ligne
        // Exemple : http://127.0.0.1:8000/api/publications/latest
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
                console.error(err);
                setError(true);
                setLoading(false);
            });
    }, []);

    return (
        <section className="relative min-h-[85vh] bg-beige flex items-center justify-center py-20 px-6">
            <div className="max-w-[1280px] w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24 text-dark">
                
                {/* Zone de la Card avec gestion des états */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    {loading && (
                        <div className="w-[350px] h-[450px] bg-gray-200 animate-pulse rounded-[40px] flex items-center justify-center text-gray-400">
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
                            description={lastPublication.short_description} 
                        />
                    )}
                </div>

                <div className="w-full lg:max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Title>Mes parutions</Title>

                    <div className="my-6 space-y-2 text-[1rem] lg:text-[1.125rem] leading-relaxed text-justify lg:text-left max-w-lg">
                        <p>
                            Après des études universitaires littéraires, je me suis orientée dans l’accompagnement des personnes sur les chemins de la conscience et du développement personnel.
                        </p>
                        <p>
                            Le domaine artistique a jalonné mon parcours : photo, peinture à l’huile, mandalas. Il enrichit ma créativité et s’allie naturellement à l’écriture.
                        </p>
                        <p>
                            Auteure de formes littéraires variées – récit, poésie –, j’ai choisi l’auto-édition pour garder une liberté de création. J’illustre moi-même mes livres.
                        </p>
                        <p>
                            J’anime des ateliers d’écriture pour transmettre le plaisir d’écrire et accompagner chacun dans la découverte de sa créativité. 
                        </p>
                    </div>
                    <Cta href="/parutions">Voir toutes les parutions</Cta>
                </div>

            </div>
        </section>
    );
}