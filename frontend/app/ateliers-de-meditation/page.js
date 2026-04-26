"use client";
import Title from "../components/Title";
import Link from "next/link";
import Cta from "../components/Cta";
import { motion } from "framer-motion";

export default function MeditationPage() {
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
                        <Title>Méditation guidée et pleine conscience</Title>
                        
                        <div className="mt-12 space-y-12 text-dark/80 font-light leading-relaxed">
                            
                            {/* INTRODUCTION & PHILOSOPHIE */}
                            <section className="space-y-4">
                                <p className={pStyle}>La méditation est une spiritualité concrète que l’on peut mettre en pratique dans son quotidien, pour vivre plus en conscience et avoir une meilleure qualité de Présence à la Vie.</p>
                                <p className={pStyle}><strong className="text-primary font-serif font-bold italic">La méditation guidée</strong> est un voyage dans son espace intérieur, basé sur la visualisation. Elle permet de se détendre, d'explorer différents niveaux de réalité, de découvrir de nouveaux potentiels et de s'ouvrir à plus vaste pour élargir le champ de sa conscience.</p>
                                <p className={pStyle}><strong className="text-primary font-serif font-bold italic">La Pleine Conscience</strong> est une invitation à se recentrer et à s'ancrer davantage dans l'Instant Présent. Basée sur la respiration, la conscience du corps et son ressenti, elle permet un accueil de ce qui est, ici et maintenant, sans jugement, pour simplement « être avec » la réalité dans toutes ses facettes.</p>
                                <p className={pStyle}>La synergie de ces deux types de méditation renforce leurs spécificités. La pratique régulière amène à porter un nouveau regard sur soi et le monde, et à modifier progressivement ses réactions pour mieux vivre les événements tels qu'ils se présentent.</p>
                                <p className={pStyle}>Elle aide à mieux gérer les émotions, le stress, la douleur, à prendre du recul, lâcher prise...</p>
                                <p className={pStyle}>Les ateliers sont des temps pour soi. Ils invitent à se poser, respirer, revenir à soi, se ressourcer. Ils permettent de progresser à son rythme sur son chemin personnel ou spirituel. Pratiqués en groupe, dans un cadre bienveillant, ils favorisent l’écoute et les échanges.</p>
                            </section>

                            {/* SECTION: COMMENT SE PASSE UN ATELIER */}
                            <section className="bg-white/30 p-8 rounded-[30px] border border-dark/5">
                                <h3 className="text-2xl font-serif text-dark mb-8 italic">COMMENT SE PASSE UN ATELIER ?</h3>
                                
                                <div className="space-y-8">
                                    <div>
                                        <h4 className="text-primary font-bold font-serif mb-3 text-2xl tracking-widest">Un temps de méditation guidée</h4>
                                        <p className={pStyle}>Chaque séance comporte une méditation guidée d’environ 50 minutes. Accompagnés par la parole, il suffit de vous laisser guider. Des espaces de silence permettent d’approfondir son ressenti et d’intégrer son expérience.</p>
                                    </div>

                                    <div>
                                        <h4 className="text-primary font-bold font-serif mb-3 text-2xl tracking-widest">Un temps de partage</h4>
                                        <p className={pStyle}>Un temps de partage est ensuite proposé, chacun pouvant exprimer son vécu et s’enrichir de celui des autres.</p>
                                    </div>

                                    <div>
                                        <h4 className="text-primary font-bold font-serif mb-3 text-2xl tracking-widest">Le cadre</h4>
                                        <p className={pStyle}>Le respect de la confidentialité est demandé.</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION: THÈMES ABORDÉS */}
                            <section>
                                <h3 className="text-2xl font-serif text-dark mb-6 italic">LES THÈMES ABORDÉS</h3>
                                <ul className="list-none space-y-4 ml-4">
                                    <li className={`flex gap-3 ${pStyle}`}><span className="text-primary">✦</span> Approfondir la conscience de son corps, harmoniser ses énergies : respiration, systèmes corporels, chakras...</li>
                                    <li className={`flex gap-3 ${pStyle}`}><span className="text-primary">✦</span> Rencontrer ses sensations corporelles, ses émotions, ses pensées, agréables ou désagréables, et apprendre à les côtoyer, à « être avec » au lieu de les rejeter pour mieux apprivoiser le Réel.</li>
                                    <li className={`flex gap-3 ${pStyle}`}><span className="text-primary">✦</span> Aller à la rencontre de son Etre intérieur, se relier à sa dimension spirituelle : ouverture du cœur, guidance intérieure…</li>
                                    <li className={`flex gap-3 ${pStyle}`}><span className="text-primary">✦</span> Développer la bienveillance, renforcer l'estime de soi...</li>
                                </ul>
                            </section>

                            {/* SECTION: MON EXPERIENCE */}
                            <section>
                                <h3 className="text-2xl font-serif text-dark mb-6 italic">MON EXPÉRIENCE</h3>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <p className={`text-primary font-medium mb-2 ${pStyle}`}>Pourquoi je propose ces ateliers ?</p>
                                        <p className={pStyle}>J’anime des ateliers de méditation guidée et de pleine conscience pour partager mon expérience et avancer ensemble sur le chemin de la Présence à soi et au monde.</p>
                                    </div>
                                    <div>
                                        <p className={`text-primary font-medium mb-2 ${pStyle}`}>Quelle est mon expérience ?</p>
                                        <p className={pStyle}>J’ai découvert la méditation guidée dès l’âge de 21 ans. Je me suis nourrie de pratiques variées et j'anime mes propres ateliers depuis 2010.</p>
                                    </div>
                                </div>
                            </section>

                            {/* SECTION: EN PRATIQUE */}
                            <div className="pt-8 border-t border-dark/10 flex flex-wrap gap-8 items-center">
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">🕒</span>
                                    <p className={`font-medium text-dark ${pStyle}`}>Durée : 1h</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">💳</span>
                                    <p className={`font-medium text-dark ${pStyle}`}>Tarif : 10 Euros</p>
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
                            <img src="/images/meditation.jpg" alt="Atelier méditation" className="object-cover w-full h-full hover:scale-105 transition-transform duration-700" />
                        </div>
                    </motion.div>
                </section>
            </div>
        </main>
    );
}