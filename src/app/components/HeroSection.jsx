"use client";
import React, { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import Image from 'next/image';



const HeroSection = () => {
    const [gradientPosition, setGradientPosition] = useState(0);

    useEffect(() => {
      const updateGradient = () => {
        setGradientPosition((prevPosition) => (prevPosition + 1) % 100); // Exemple simple d'animation
      };
  
      const intervalId = setInterval(updateGradient, 40); // Met à jour la position du gradient toutes les 40 ms
  
      return () => clearInterval(intervalId); // Nettoyer l'intervalle lors du démontage du composant
    }, []);
       
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className="col-span-7   place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-3xl sm:text-2xl lg:text-5xl font-extrabold block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-500  to-yellow-500">Bonjour, je suis </span>
                            <br /> <br />
                            <TypeAnimation className='text-xl'
                                sequence={[
                                    'Atnan', 1000,
                                    'Étudiant', 1000,
                                    'Designer', 1000,
                                    'Developpeur', 1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '85px', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                    </h1>
                    <p className='text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6'>
                        Bienvenu sur mon portfolio, ici vous retrouverez tout mes travaux
                    </p>
                    <div>
                        <button className='px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-purple-500 via-purple-500 to-yellow-500 hover:bg-slate-200 text-white'>
                            Contactez-moi
                        </button>
                        <button className='px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-purple-500 via-purple-500 to-yellow-500 hover:bg-slate-800 text-white mt-3'>
                            <span className='block bg-[#101010] hover:bg-slate-800 rounded-full px-5 py-2'>Voir mon CV</span>
                        </button>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                    
                {/* <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">

                <Image
              src="/images/logo_atnan_white.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={250}
              height={250}
            />
                </div> */}

                </div>
            </div>
        </section>
        
    );
}

export default HeroSection;
