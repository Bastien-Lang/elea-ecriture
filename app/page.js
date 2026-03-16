import Hero from "./components/Hero";
import WhoAmI from "./components/WhoAmI";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoAmI/>
    </main>
  );
}