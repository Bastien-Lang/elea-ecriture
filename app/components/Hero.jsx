import Vector from "./Vector";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* 1. L'image de fond (Background) */}
        <div 
            className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center"
            aria-hidden="true"
        />
        
        {/* 2. Le filtre de flou et d'assombrissement */}
        <div className="absolute inset-0 backdrop-blur-[5px]" />

        {/* 3. Le contenu (par-dessus grâce au flux naturel et au relative) */}
        <div className="relative z-10 text-center px-6">
            <span className="font-signature text-6xl lg:text-9xl text-light block mb-4">
                Emanuelle Lang
            </span>
            <p className="font-sans text-xl mb-8 text-light/90 lg:text-3xl lg:tracking-wide">
                Ateliers d’écriture, oeuvres originales...
            </p>
        </div>
      
        <Vector/>

    </section>
  );
}