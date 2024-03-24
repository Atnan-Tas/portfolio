import Image from "next/image";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Apropos from "./components/Apropos";
import Footer from "./components/Footer";
import Projet from "./travaux/Projets";
import Competences from "./components/competences";
import Etoiles from "./components/etoiles";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#040015]">
      <Etoiles />

      <div className="relative z-30 container mt-24 mx-auto px-12 py-4">
      <Header />
        <Intro />
        <Competences />
        <Apropos />
        <Projet />
      </div>
      <Footer />
    </main>
  );
}
