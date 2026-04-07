"use client";

import { useState } from "react";
import Title from "./Title";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });
    const [status, setStatus] = useState(null); // success | error | loading

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", phone: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };

    const inputClass = "w-full px-6 py-4 rounded-xl bg-light/90 text-dark focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-gray-450";
    const labelClass = "block text-light text-xl font-sans mb-2 ml-2";

    return (
        <section className="py-24 bg-beige px-6" id="contact">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-12">
                    <Title>Contactez-moi</Title>
                </div>

                {/* Le bloc bordeaux */}
                <div className="bg-primary/90 rounded-[50px] p-8 md:p-16 shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-8">
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Nom */}
                            <div>
                                <label className={labelClass}>Nom - Prénom</label>
                                <input 
                                    type="text"
                                    placeholder="Ex: Jean Dupont"
                                    className={inputClass}
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    required
                                />
                            </div>
                            {/* Téléphone */}
                            <div>
                                <label className={labelClass}>Numéro de téléphone</label>
                                <input 
                                    type="tel"
                                    placeholder="Ex: 06 00 00 00 00"
                                    className={inputClass}
                                    value={formData.phone}
                                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className={labelClass}>Adresse mail</label>
                            <input 
                                type="email"
                                placeholder="Ex: jean.dupont@mail.com"
                                className={inputClass}
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                required
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className={labelClass}>Message</label>
                            <textarea 
                                rows="6"
                                placeholder="Écrivez ici..."
                                className={`${inputClass} resize-none`}
                                value={formData.message}
                                onChange={(e) => setFormData({...formData, message: e.target.value})}
                                required
                            ></textarea>
                        </div>

                        {/* Bouton Envoi */}
                        <div className="text-center pt-4">
                            <button 
                                type="submit"
                                disabled={status === "loading"}
                                className="text-primary bg-light hover:border hover:border-solid hover:bg-primary hover:text-light hover:border-light px-12 py-4 rounded-full font-bold uppercase tracking-widest transition-all disabled:opacity-50"
                            >
                                {status === "loading" ? "Envoi en cours..." : "Envoyer le message"}
                            </button>
                            
                            {status === "success" && (
                                <p className="text-green-400 mt-4 animate-bounce">Votre message a été envoyé !</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-300 mt-4">Une erreur est survenue, réessayez.</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}