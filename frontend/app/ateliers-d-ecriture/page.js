"use client";
import Title from "../components/Title";
import Link from "next/link";
import { motion } from "framer-motion";
import Cta from "../components/Cta";

export default function WritingWorkshopPage() {
    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    const pStyle = "text-[1rem] lg:text-[1.125rem]";

    return (
        <main className="min-h-screen bg-beige pt-24 md:pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                    <Link href="/#ateliers" className="text-dark/50 hover:text-primary transition-colors text-[12px] uppercase tracking-[0.2em] mb-12 inline-block font-medium">← Retour aux ateliers</Link>
                </motion.div>
                
                <section className="flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
                    
                    {/* COLONNE TEXTE */}
                    <motion.div 
                        className="flex-[1.5]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Title>Ateliers d'écriture</Title>
                        
                        <div className="mt-12 space-y-12 text-dark/80 font-light leading-relaxed">
                            
                            {/* SECTION 1: POUR QUI POURQUOI */}
                            <section>
                                <h3 className="text-2xl font-serif text-dark mb-6 italic">POUR QUI, POURQUOI ?</h3>
                                <p className={`mb-4 ${pStyle}`}>Vous avez envie d'écrire et...</p>
                                <ul className="list-none space-y-2 mb-6 ml-4">
                                    <li className={`flex gap-3 ${pStyle}`}><span className="text-primary">✦</span> vous n'osez pas,</li>
                                    <li className={`flex gap-3 ${pStyle}`}><span className="text-primary">✦</span> vous ne prenez pas le temps,</li>
                                    <li className={`flex gap-3 ${pStyle}`}><span className="text-primary">✦</span> vous ne savez pas quoi écrire,</li>
                                    <li className={`flex gap-3 ${pStyle}`}><span className="text-primary">✦</span> vous pensez ne pas en être capable,</li>
                                </ul>
                                <p className={`font-medium text-dark mb-8 ${pStyle}`}>Venez rejoindre l’atelier !</p>
                                
                                <div className="space-y-4">
                                    <p className={pStyle}>Les ateliers s’adressent aux adultes qui veulent découvrir ou approfondir leur pratique de l’écriture. Ils sont accessibles aux familiers de l’écrit comme aux débutants.</p>
                                    <p className={pStyle}>Aucune expérience préalable n’est nécessaire, aucun niveau n’est requis.</p>
                                    <p className={pStyle}>Ils ont lieu en petit groupe, en présentiel ou par internet en Visio.</p>
                                    <p className={pStyle}>Chaque atelier est indépendant. Aucun engagement sur le long terme n’est exigé, la participation peut être ponctuelle. Pour autant, une participation régulière facilite l’écriture.</p>
                                    <p className={pStyle}>Les ateliers sont un espace d’expression, de découverte de soi et des autres autour des mots, où chacun chemine à son rythme, quel que soit son rapport à l’écriture.</p>
                                    <p className={pStyle}>Ils ont un but récréatif, il s’agit avant tout de se faire plaisir, d’explorer sa créativité, en étant dans la légèreté comme dans la profondeur, avec bienveillance.</p>
                                    <p className={pStyle}>Ils peuvent également contribuer au développement personnel : renforcer la confiance en soi, s’intégrer dans un groupe, exprimer ses ressentis et ses émotions, revisiter des moments de son histoire, s’ouvrir à l’imaginaire…</p>
                                </div>
                            </section>

                            {/* SECTION 2: COMMENT SE PASSE UN ATELIER */}
                            <section className="bg-white/30 p-8 rounded-[30px] border border-dark/5">
                                <h3 className="text-2xl font-serif text-dark mb-8 italic">COMMENT SE PASSE UN ATELIER ?</h3>
                                
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-primary font-bold font-serif mb-3 text-xl lg:text-2xl tracking-widest">Des consignes structurées et ouvertes</h4>
                                        <p className={pStyle}>Un atelier est basé sur des consignes, proposées par l’animatrice, qui servent de déclencheur pour écrire, et de fil conducteur. Vous êtes ainsi guidés dans le processus d’écriture.</p>
                                        <p className={`mt-3 ${pStyle}`}>Il y a en a 2 ou 3 différentes par séance. Elles s’appuient sur des supports variés : textes d’auteurs, citations, images (photos, reproduction de tableaux), actualité artistique…</p>
                                        <p className={`mt-3 ${pStyle}`}>Ces propositions d’écriture donnent un cadre qui facilite l’inspiration et permet de faire émerger la créativité. Elles peuvent être suivies à la lettre, mais aussi être contournées, détournées, on peut jouer avec, emprunter des voies transversales.</p>
                                    </div>

                                    <div>
                                        <h4 className="text-primary font-bold font-serif mb-3 text-xl lg:text-2xl tracking-widest">Un temps d’écriture</h4>
                                        <p className={pStyle}>Le temps d’écriture est variable, selon les consignes, il peut durer de 5 à 30 minutes.</p>
                                    </div>

                                    <div>
                                        <h4 className="text-primary font-bold font-serif mb-3 text-xl lg:text-2xl tracking-widest">Le partage (facultatif)</h4>
                                        <p className={pStyle}>Ensuite vient le temps du partage et de l’écoute bienveillante. Les participants sont invités à lire leur texte, ce qui permet de découvrir l’univers et la singularité de chacun, et de s’enrichir de la diversité des styles.</p>
                                        <p className={`mt-3 ${pStyle}`}>Il n’y a pas d’analyse, ni d’évaluation des textes. On laisse de côté les attentes de comment il « faudrait » écrire, les questions d’orthographe, pour être sans jugement ni critique.</p>
                                    </div>

                                    <div>
                                        <h4 className="text-primary font-bold font-serif mb-3 text-xl lg:text-2xl tracking-widest">Le cadre</h4>
                                        <p className={pStyle}>L’ambiance est conviviale, dans la bonne humeur, à la fois sérieuse et ludique. Le respect de la confidentialité est demandé.</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 3: MON EXPERIENCE */}
                            <section>
                                <h3 className="text-2xl font-serif text-dark mb-6 italic">MON EXPÉRIENCE</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <p className={`text-primary font-medium mb-2 ${pStyle}`}>Pourquoi je propose ces ateliers ?</p>
                                        <p className={pStyle}>J’anime des ateliers d’écriture pour transmettre le plaisir d’écrire et accompagner chacun dans la découverte de sa créativité.</p>
                                    </div>
                                    <div>
                                        <p className={`text-primary font-medium mb-2 ${pStyle}`}>Quelle est mon expérience ?</p>
                                        <p className={pStyle}>Je me suis engagée très tôt dans l’écriture comme voie d’expression personnelle. Formée à l’animation auprès de Cépages d’encre (Oupia, 34), j'anime mes propres ateliers depuis 2014.</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION 4: EN PRATIQUE */}
                            <div className="pt-8 border-t border-dark/10 flex flex-wrap gap-8 justify-center items-center">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">🕒</span>
                                    <p className={`font-medium text-dark ${pStyle}`}>Durée : 1h30</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">💳</span>
                                    <p className={`font-medium text-dark ${pStyle}`}>Tarif : 15 Euros</p>
                                </div>
                                <div className="lg:ml-auto">
                                    <Cta href="/#contact">S'inscrire</Cta>
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    {/* COLONNE IMAGE (STICKY) */}
                    <motion.div 
                        className="flex-1 lg:sticky lg:top-32"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <div className="relative w-full max-w-lg aspect-[3/4] rounded-[40px] overflow-hidden shadow-2xl">
                            <img src="/images/atelier.jpg" alt="Atelier écriture" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}