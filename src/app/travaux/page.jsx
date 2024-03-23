"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./Card";
import ProjectTag from "./Tag";
import { motion, useInView } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

const projectsData = [
  {
    id: 1,
    title: "Site Web Portfolio React Next.js",
    description: "Bienvenue dans mon portfolio, votre prochaine source d'inspiration.",
    image: "/images/portfolio.png",
    tag: ["Tout", "Sites"],
    gitUrl: "https://portfolio.atnantas.fr",
    previewUrl: " /",
  },
  {
    id: 2,
    title: "CooHop! Le site de rencontre sportive",
    description: "Faire du sport en groupe n'a jamais été aussi simple.",
    image: "/images/coohop.png",
    tag: ["Tout", "Sites"],
    gitUrl: "https://coohop.angelo-simoes.fr",
    previewUrl: "/coohop",
  },
  {
    id: 3,
    title: "Unified Champions - Club E-sport",
    description: "Rejoignez-nous et devenez un champion.",
    image: "/images/UC.png",
    tag: ["Tout", "Sites"],
    gitUrl: "https://unifiedchampions.jfleurent.fr/",
    previewUrl: "/UnifiedChampions",
  },
  {
    id: 4,
    title: "Créations personnelles",
    description: "Découvrez mes créations personnelles sur le thème du sport.",
    image: "/images/affiches.png",
    tag: ["Tout", "Visuels"],
    gitUrl: "/",
    previewUrl: "/CreationPerso",
  },
  {
    id: 5,
    title: "Carte Postale Cassandre",
    description: "Des cartes postales au style de Cassandre (Adolphe Mouron).",
    image: "/images/cassandre.png",
    tag: ["Tout", "Visuels"],
    gitUrl: "/",
    previewUrl: "/cassandre",
  },
  {
    id: 6,
    title: "Charte Graphique - 600 ans de l'Université Franche-Comté",
    description: "Project 5 description",
    image: "/images/UFC.png",
    tag: ["Tout", "Visuels"],
    gitUrl: "/",
    previewUrl: "/universitefc",
  },
];

const Projets = () => {
  const [tag, setTag] = useState("Tout");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <main className="flex min-h-screen flex-col bg-[#150515]">
    <section  id="projects">
      <Header /> 
      <h2 className="text-center text-4xl font-bold text-white mt-28 mb-8 md:mb-12">
        Mes Travaux
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tout"
          isSelected={tag === "Tout"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Sites"
          isSelected={tag === "Sites"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Visuels"
          isSelected={tag === "Visuels"}
        />
      </div> 

      <div className="container mt-2 mx-auto px-12 py-4">
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                tags={project.tag}
              />
            </motion.li>
          ))}
        </ul>
      </div>
      <Footer />
    </section>
    </main>
  );
};

export default Projets;