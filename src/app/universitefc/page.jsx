import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Etoiles from '../components/etoiles'

const UFC = () => {
  return (
    <section>
      <Etoiles />
      <div className='relative z-30'>
      <Header />
      <h2 className="text-center text-4xl font-bold text-white mt-28 mb-8 md:mb-12">
          Charte Graphique - 600 ans de l&apos;Université Franche-Comté
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-xl" alt="à propos" src="/images/UFC.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">En quoi consiste mes travaux ?</h2>
        <p className="text-justify lg:text-lg">
        Mon projet consistait à évaluer et à enrichir la communication plurimédia de l&apos;Université de Franche-Comté, 
        qui célébrait ses 600 ans d&apos;histoire. Dans le cadre de cette Saé, j&apos;ai travaillé en trinôme pour analyser 
        les efforts de communication déployés durant les célébrations et proposer des améliorations stratégiques. 
        Notre analyse s&apos;est concentrée sur les diverses actions menées par l&apos;université, en mettant un accent particulier 
        sur celles ayant une portée internationale ou d&apos;envergure significative. Nous avons examiné comment ces initiatives 
        reflétaient l&apos;identité de l&apos;université, leur public cible, et les messages qu&apos;elles visaient à transmettre, tout 
        en évaluant les résultats obtenus. Nous avons également identifié les forces et les faiblesses des différentes
          campagnes de communication, en nous appuyant sur des données quantitatives et qualitatives, et avons formulé des
          recommandations pour optimiser les futures actions de communication de l&apos;université.
        </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">La refonte logo et la charte graphique</h2>
        <p className="text-justify lg:text-lg">
        Notre équipe a entrepris la refonte du logo et l&apos;élaboration d&apos;une charte graphique associée, 
        visant à moderniser et unifier l&apos;identité visuelle de notre client. Ce travail minutieux a abouti 
        à une série de directives détaillées sur l&apos;utilisation des couleurs, typographies et autres éléments 
        visuels, assurant une cohérence à travers tous les supports de communication. La charte graphique 
        complète est accessible pour consultation à travers mon site.
        </p>
        </div>
        <iframe
        style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
        width="600"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F75LKiSMBQz9uXSzJYKq75M%2FCharte_graphique_600_ans_UFC%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DKdlm7hVrW1ElKK09-1"
        allowFullScreen
        ></iframe>
      </div>
      <Footer /> 
      </div>
    </section>

  )
}

export default UFC