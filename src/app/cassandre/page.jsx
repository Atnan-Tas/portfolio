import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Etoiles from '../components/etoiles'

const Cassandre = () => {
  return (
    <section>
      <Etoiles />
      <div className='relative z-30'>
      <Header />
      <h2 className="text-center text-4xl font-bold text-white mt-28 mb-8 md:mb-12">
          Carte Postale - Cassandre 
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-xl" alt="à propos" src="/images/UC.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Qu&apos;est-ce qu&apos;Unified Champions ?</h2>
        <p className="text-justify lg:text-lg">
        L’ équipe E-Sport officielle de l’Université de Franche-Comté est un projet imaginé par Pascal Chatonnay, 
        docteur en informatique, et Stéphane Laurent, professeur de droit, d’économie, de gestion et de marketing.
        A la suite de plusieurs projets réalisés dans leur vie professionnelle hors université, en voyant beaucoup 
        d’étudiants joueurs de jeux-vidéos et avec l’explosion mondiale du milieu de l’ E-Sport, ils ont alors lancé 
        l’idée de la création d’une équipe de E-Sport composée des étudiants de l’Université de Franche-Comté, 
        qui seraient intéressés pour faire de leur passe temps, quelque chose de plus grand qu’eux. 
        Le but premier serait de participer à la Grosse Ligue League of Legends avec notre propre équipe universitaire 
          et par la suite se développer à travers les compétitions sur différents jeux compétitifs.
        </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Quel est notre but durant ce projet ?</h2>
        <p className="text-justify lg:text-lg">
        Le but de notre groupe durant ce projet, était de designer multiples éléments graphiques pour l’équipe, et ses
        réseaux sociaux. Nous avons donc créé un logo, des bannières, des overlays pour les lives, des templates pour les
        réseaux sociaux, des maquettes de site internet, des maquettes d’application mobile, et des goodies pour les
        joueurs. Nous avons également fait toute la communication autour de l’équipe, mais le point le plus important,
        était de créer un site internet pour l’équipe, qui permettrait de centraliser toutes les informations sur l’équipe,
        mais également une boutique en ligne pour vendre les goodies que nous avons créé.
        </p>
        </div>
        <Image className="rounded-xl" alt="à propos" src="/images/Article_details.png" width={500} height={500} />
      </div>
      </div>
      <Footer /> 
    </section>

  )
}

export default Cassandre