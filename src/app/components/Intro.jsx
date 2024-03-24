"use client";
import React, { useRef, useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import Link from 'next/link';


const Intro = () => {
    // Fonction pour gérer le téléchargement
    const downloadCV = async () => {
        const response = await fetch('/files/CV_Atnan_Tas.pdf');
        const blob = await response.blob(); // Convertit la réponse en Blob
        const downloadUrl = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.setAttribute('download', 'CV_Atnan_Tas.pdf'); // Nom du fichier à télécharger
        document.body.appendChild(link);
        link.click();
        link.parentNode.removeChild(link); // Nettoyez en supprimant le lien temporaire
    };

       
    return (
        <section>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                
                <div className="col-span-7   place-self-center text-center sm:text-left">
                    <h1 className="text-white mb-4 text-3xl sm:text-2xl lg:text-5xl font-extrabold block">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-500  to-yellow-500">Bonjour, je suis </span>
                            <br /> <br />
                            <TypeAnimation className='text-5xl md:text-6xl lg:text-7xl'
                                sequence={[
                                    'Atnan', 800,
                                    'Étudiant', 800,
                                    'Designer', 800,
                                    'Developpeur', 800
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                    </h1>
                    <p className='text-[#adb7be] text-base sm:text-lg lg:text-xl mb-6'>
                        Bienvenu sur mon portfolio, découvrez tout mes travaux ici !
                    </p>
                    <div className=''>
                        <Link href='/contact'>
                        <button className='px-6 py-3 rounded-full w-80 sm:mr-4 md:mr-4 lg:mr-4 sm:w-fit bg-gradient-to-br from-purple-500 via-purple-500 to-yellow-500 hover:bg-slate-200 text-white'>
                            Contactez-moi
                        </button>
                        </Link>
                        <button onClick={downloadCV} className='px-1 py-1 rounded-full w-80 sm:w-fit bg-gradient-to-br from-purple-500 via-purple-500 to-yellow-500 hover:bg-slate-800 text-white mt-3'>
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

export default Intro;
