import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Etoiles from '../components/etoiles'

const Affiches = () => {
  return (
    <section>
      <Etoiles />
      <div className='relative z-30'>
      <Header />
      <h2 className="text-center text-4xl font-bold text-white mt-28 mb-8 md:mb-12">
          Unified Champions Club
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image className="rounded-xl" alt="à propos" src="/images/affiches.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">En quoi consistent mes affiches ?</h2>
        <p className="text-justify lg:text-lg">
        Pour mes affiches personnelles, j&apos;ai entrepris ce projet par passion, souhaitant rendre hommage 
        à mes sportifs préférés qui ont façonné mon amour pour le sport, notamment le football et le basketball. 
        Ces œuvres sont le reflet de mon admiration et de ma gratitude envers ces athlètes exceptionnels, 
        ceux qui, par leur dévouement et leur talent, m&apos;ont inspiré et ont éveillé en moi une passion 
        profonde pour ces disciplines. Chaque affiche est une célébration de leur héritage, un moyen pour moi 
        d&apos;exprimer mon appréciation pour les moments inoubliables qu&apos;ils ont offerts à leurs fans et de 
        reconnaître l&apos;impact significatif qu&apos;ils ont eu sur ma vie.
        </p>
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Comment m&apos;y suis-je pris ?</h2>
        <p className="text-justify lg:text-lg">
        Animé par ma passion pour ces sportifs et mon désir d&apos;affiner mes compétences en design, 
        je me suis lancé dans ce projet personnel. Mon objectif était double : rendre hommage à ces athlètes 
        qui ont éveillé en moi un amour pour le sport et, dans le même temps, développer davantage mes 
        aptitudes en design graphique. Pour y parvenir, j&apos;ai exploré diverses sources d&apos;inspiration 
        et suivi de nombreux tutoriels, m&apos;efforçant d&apos;atteindre un niveau de réalisation qui me satisfasse pleinement.

        L&apos;utilisation des outils et techniques abordés en cours a été fondamentale dans ce processus. 
        Chaque étape du projet m&apos;a offert l&apos;opportunité de mettre en pratique et d&apos;approfondir 
        les connaissances acquises en classe. Ce projet, bien que personnel, s&apos;est révélé être une extension 
        précieuse de mon apprentissage, me permettant d&apos;explorer de nouvelles facettes du design et 
        d&apos;appliquer de manière concrète les concepts étudiés.
        </p>
        </div>
        <Image className="rounded-xl" alt="à propos" src="/images/lebron.png" width={350} height={350} />
      </div>
      <Footer /> 
      </div>
    </section>

  )
}

export default Affiches