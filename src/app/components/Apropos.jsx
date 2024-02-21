/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { supabase } from '../../../supabase';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Suite Adobe</li>
        <li>Wordpress</li>
        <li>Vue.JS</li>
        <li>HTML / CSS</li>
        <li>React</li>
        <li>Figma</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BUT Métier Multimédia Internet à Montbéliard</li>
        <li>Baccalauréat STI2D au Lycée Jean-jacques Henner à Altkirch</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 pr-4">
        <li>Stage de 10 semaines en communication digitale et design graphique
            au Concervatoire Henri-Dutilleux à Belfort
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-xl" alt="à propos" src="/images/img_apropos.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">À propos de moi</h2>
        <p className="text-base lg:text-lg">
            Je suis un étudiant passionné par la création sous toutes ces formes,
            du design au développement. 
            J'ai de l'expérience avec de nombreux framework, tels que
            Vue.js, React, HTML/CSS, et même Wordpress.
            J'ai également des compétences en design graphique avec Figma, la suite Adobe. 
            J'apprends vite et je cherche toujours à élargir mes
            mes compétences. J'ai l'esprit d'équipe et
            Je suis enthousiaste à l'idée de travailler avec d'autres personnes pour créer 
            des applications ou des visuels à couper le souffle !
        </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Compétences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Parcours{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Expérience professionnel{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;