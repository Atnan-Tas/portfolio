import React from "react";
import Header from "./components/Header"; // Réutilisez le composant d'en-tête existant
import Footer from "./components/Footer"; // Réutilisez le composant de pied de page existant

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-[#101010]">
      <Header />
      <div className="container mt-24 mx-auto px-12 py-4">
        <section className="text-white">
          <h1 className="text-3xl font-bold">Contactez-moi</h1>
          {/* Ajoutez votre formulaire de contact ou vos informations ici */}
        </section>
      </div>
      <Footer />
    </main>
  );
}
