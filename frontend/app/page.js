import Books from "./components/Books";
import Hero from "./components/Hero";
import WhoAmI from "./components/WhoAmI";
import Workshop from "./components/Workshop";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoAmI/>
      <Workshop/>
      <Books/>
    </main>
  );
}