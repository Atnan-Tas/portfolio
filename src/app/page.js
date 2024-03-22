import Image from "next/image";
import Intro from "./components/Intro";
import Header from "./components/Header";
import Apropos from "./components/Apropos";
import Footer from "./components/Footer";
import Projet from "./travaux/Projets";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0e081f]">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Intro />
        <Apropos />
        <Projet />
      </div>
      <Footer />
    </main>
  );
}
