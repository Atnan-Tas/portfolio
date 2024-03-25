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
        <Image className="rounded-xl" alt="à propos" src="/images/affiche_WC.png" width={350} height={350} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">Pourquoi avoir fait ces affiches ?</h2>
        <p className="text-justify lg:text-lg">
        Dans le cadre de notre formation en design, nous avons exploré l&apos;œuvre emblématique d&apos;Adolphe Mouron Cassandre, 
        reconnu pour son style avant-gardiste et son impact significatif sur l&apos;affichage publicitaire et graphique du 20e siècle.
         Inspirés par la maîtrise de Cassandre dans l&apos;utilisation de formes audacieuses, de compositions équilibrées et d&apos;une 
         typographie innovante, nous avons été invités à créer nos propres affiches, en nous appropriant les principes de son 
         art. Ce projet avait pour but de non seulement honorer l&apos;héritage de Cassandre mais aussi de repousser les limites 
         de notre créativité en intégrant ses techniques à notre vision contemporaine. Cet exercice nous a permis de comprendre 
         en profondeur l&apos;importance de l&apos;histoire du design dans la pratique actuelle et de voir comment les styles 
         historiques peuvent être réinterprétés pour rester pertinents dans le monde moderne.
        </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">L&apos;exposition Universelle - Riyad 2030</h2>
        <p className="text-justify lg:text-lg">
        Pour mon affiche sur l&apos;Exposition Universelle de Riyad en 2030, j&apos;ai choisi de m&apos;inspirer du style de Cassandre, 
        célèbre pour ses compositions publicitaires captivantes. J&apos;ai voulu mettre en avant les monuments emblématiques 
        de Riyad, en leur donnant une allure tropicale qui contraste avec l&apos;aridité habituellement associée à la région. 
        Cette approche vise à évoquer une vision futuriste et accueillante de la ville. En guise de clin d&apos;œil subtil à 
        la culture locale, j&apos;ai inclus une signature très discrète du Al-Nassr Football Club, intégrant ainsi un élément 
        contemporain qui reflète l&apos;esprit communautaire et la passion sportive de la ville.
        </p>
        </div>
        <Image className="rounded-xl" alt="à propos" src="/images/affiche_riyad.png" width={350} height={350} />
      </div>
      <Footer /> 
      </div>
    </section>

  )
}

export default Cassandre