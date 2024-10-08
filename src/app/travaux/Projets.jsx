"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./Card";
import ProjectTag from "./Tag";
import { motion, useInView } from "framer-motion";


const projectsData = [
  {
    id: 1,
    title: "Site Web Portfolio React Next.js",
    description: "Bienvenue dans mon portfolio, votre prochaine source d'inspiration.",
    image: "/images/portfolio.png",
    tag: ["Tout", "Sites"],
    gitUrl: "https://portfolio.atnantas.fr",
    previewUrl: "/",
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
    gitUrl: "/",
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
    description: "Charte graphique pour les 600 ans de l'université de Franche-Comté.",
    image: "/images/UFC.png",
    tag: ["Tout", "Visuels"],
    gitUrl: "/",
    previewUrl: "/universitefc",
  },
  {
    id: 7,
    title: "Conservatoire Henri Dutilleux - La Maîtrise",
    description: "Vidéo réalisée durant le stage au conservatoire, présentant la maîtrise, un enseignemant de l'établissement.",
    image: "/images/Miniature_Capsule_Maitrise_2.png",
    tag: ["Tout", "Vidéo"],
    gitUrl: "https://youtu.be/FnUM2CHSIps?si=Yw4v2pCWiG_F_9H8",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Conservatoire Henri Dutilleux - La Journée Portes Ouvertes",
    description: "Vidéo réalisée durant le stage au conservatoire, pour mettre en avant la journée portes ouvertes.",
    image: "/images/PO.jpg",
    tag: ["Tout", "Vidéo"],
    gitUrl: "https://youtu.be/m_2kUOeTzU4?si=nLj2FagR2yBDIz9-",
    previewUrl: "/",
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
    <main className="flex min-h-screen flex-col bg-[#0e081f]">
    <section  id="projects">
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
        <ProjectTag
          onClick={handleTagChange}
          name="Vidéo"
          isSelected={tag === "Vidéo"}
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
    </section>
    </main>
  );
};

export default Projets;