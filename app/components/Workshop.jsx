export default function Workshop() {
    return(
        <section className="relative min-h-screen bg-beige flex items-center justify-center py-12">
            <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 text-dark">
                <div className="relative w-full max-w-[350px] lg:max-w-[450px] rounded-[32px] lg:rounded-[64px] overflow-hidden scale-x-[-1] shadow-sm">
                    <img 
                        src="/images/meditation.jpg" 
                        alt="Emanuelle Lang"
                        className="w-full h-full object-cover" 
                    />
                    <h6>Méditation guidée</h6>
                </div>
                <div className="relative w-full max-w-[350px] lg:max-w-[450px] rounded-[32px] lg:rounded-[64px] overflow-hidden scale-x-[-1] shadow-sm">
                    <img 
                        src="/images/atelier.jpg" 
                        alt="Emanuelle Lang"
                        className="w-full h-full object-cover" 
                    />
                    <h6>Atelier d'écriture</h6>
                </div>

                <div className="w-full lg:max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Title>Qui suis-je ?</Title>

                    <div className="mt-6 space-y-2 text-[1rem] leading-relaxed text-justify lg:text-left">
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
                </div>

            </div>
        </section>
    )
}