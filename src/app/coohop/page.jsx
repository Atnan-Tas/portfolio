import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

const Coohop = () => {
  return (
    <section>
      <Header />
      <h2 className="text-center text-4xl font-bold text-white mt-28 mb-8 md:mb-12">
          CooHop!
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-xl" alt="à propos" src="/images/coohop2.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Coohop! qu&apos;est-ce que c&apos;est ?</h2>
        <p className="text-justify lg:text-lg">
        Nous avons réalisé un projet collectif, qui à pour but de mettre en place un site et une application 
        qui permet aux sportifs de se retrouver pour d&apos;avantage de dualité. 
        Pour cela nous avons à l'aide d'autres camarades, effectué toute la communication de ce projet que ce soit le marketing, la stratégie de communication, l’identité visuelle, 
        la maquette, ainsi que la création de la Landing page et de l’application finale.
        Notre site permet aux sportifs adeptes de jeux collectif de trouver facilement des organisations 
        à but non lucratif qui ont besoin de leur aide. Ce site peut aider à connecter les personnes souhaitant 
        donner de leur temps et de leurs énergie dans des discipline collectif qu’ils apprécient, tout en utilisant 
        des infrastructure extérieurs.
        </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Comment fonctionne Coohop ?</h2>
        <p className="text-justify lg:text-lg">
        Coohop est une plateforme innovante qui redéfinit la manière dont les sportifs se rencontrent et organisent 
        des événements collectifs. Dès l'inscription, chaque utilisateur est invité à créer son profil personnel, 
        offrant ainsi une dimension unique à son expérience sur la plateforme. Les membres ont la possibilité de 
        lancer des événements sportifs, en définissant le type de sport, le lieu précis et l'heure, ce qui facilite 
        la rencontre entre passionnés du même sport dans leur localité. Ce qui rend Coohop particulièrement attrayant, 
        c'est sa capacité à afficher dynamiquement ces événements sur une carte interactive, permettant aux utilisateurs
         de visualiser en un coup d'œil les activités disponibles autour d'eux et de rejoindre celles qui correspondent 
         à leurs intérêts et disponibilités. Outre l'organisation et la participation aux événements, la plateforme 
         encourage une interaction riche et significative entre les membres grâce à un système de messagerie intégré, 
         qui permet des échanges fluides et directs, que ce soit pour discuter des détails d'un événement à venir ou 
         pour partager des conseils et des expériences. Cette approche holistique non seulement simplifie la logistique 
         inhérente à la pratique de sports collectifs mais contribue également à tisser des liens solides au sein de la 
         communauté sportive, encourageant ainsi un mode de vie actif et sociable.
        </p>
        </div>
        <Image className="rounded-xl" alt="à propos" src="/images/profil.png" width={500} height={500} />
        
      </div>
      <Footer /> 
    </section>

  )
}

export default Coohop