import Title from "./Title";

export default function WhoAmI() {
    return (
        <section className="relative min-h-[85vh] bg-beige flex items-center justify-center py-20 px-6">
            <div className="max-w-[1280px] w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24 text-dark">
                <div className="relative w-full max-w-[350px] lg:max-w-[450px] aspect-square rounded-[32px] lg:rounded-[64px] overflow-hidden scale-x-[-1] shadow-sm">
                    <img 
                        src="/images/emanuelle_lang.jpg" 
                        alt="Emanuelle Lang"
                        className="w-full h-full object-cover object-[25%_center] scale-110" 
                    />
                </div>

                <div className="w-full lg:max-w-[500px] flex flex-col items-center lg:items-start text-center lg:text-left">
                    <Title>Qui suis-je ?</Title>

                    <div className="mt-6 space-y-2 text-[1rem] lg:text-[1.125rem] leading-relaxed text-justify lg:text-left">
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
    );
}