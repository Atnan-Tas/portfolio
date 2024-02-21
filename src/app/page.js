import Image from "next/image";
import Hero from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Apropos from "./components/Apropos";
import Stats from "./components/Stats";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#101010]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Hero />
        <Stats /> 
        <Apropos />
      </div>
    </main>
  );
}
