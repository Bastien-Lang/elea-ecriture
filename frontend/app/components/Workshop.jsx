import Title from "./Title";
import Vector from "./Vector";

export default function Workshop() {
    return (
        <section className="relative min-h-screen bg-white flex items-center justify-center py-20 px-6">
            <div className="max-w-[1280px] lg:py-40 w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-24">
                <Vector position="top" />
                <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start order-2 lg:order-1">
                    <Title>Ateliers</Title>

                    <div className="space-y-2 mt-6 text-dark text-[1rem] lg:text-[1.125rem] text-left leading-relaxed max-w-lg">
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

                <div className="w-full lg:w-1/2 flex flex-col lg:flex-row items-center justify-between lg:justify-end gap-4 md:gap-8 order-1 lg:order-2">
                    
                    <div className="flex flex-col items-center gap-4 w-full max-w-[180px] md:max-w-[240px]">
                        <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-sm">
                            <img 
                                src="/images/atelier.jpg" 
                                alt="Atelier d'écriture"
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <p className="text-dark font-medium text-center text-sm md:text-base">Ateliers d'écriture</p>
                    </div>

                    <div className="flex flex-col items-center gap-4 w-full max-w-[180px] md:max-w-[240px]">
                        <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden shadow-sm">
                            <img 
                                src="/images/meditation.jpg" 
                                alt="Ateliers de méditation"
                                className="w-full h-full object-cover" 
                            />
                        </div>
                        <p className="text-dark font-medium text-center text-sm md:text-base">Ateliers de méditation</p>
                    </div>

                </div>

            </div>
            <Vector />
        </section>
    );
}