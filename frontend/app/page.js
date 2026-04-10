import Books from "./components/Books";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import WhoAmI from "./components/WhoAmI";
import Workshop from "./components/Workshop";
import Contact from "./components/Contact";
import News from "./components/News";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoAmI/>
      <Workshop/>
      <Books/>
      <Gallery/>
      <News/>
      <Contact/>
    </main>
  );
}