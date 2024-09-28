"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const Nouveau = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOutsideClick = (e) => {
        // Si on clique en dehors du contenu de la modale, on ferme la modale
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    };

    return (
        <>
            <section className="mt-[80px] flex flex-col lg:flex-row items-center bg-[#0e081f] p-4 lg:p-8 rounded-xl max-w-6xl mx-auto">
                <div className="lg:mr-6">
                    <Image 
                        className="rounded-xl drop-shadow-[0_8px_12px_rgba(255,255,255,0.7)] cursor-pointer" 
                        alt="Neymar Affiche" 
                        src="/images/Neyyyyyyyyyy.png" 
                        width={1000} 
                        height={1000} 
                        onClick={openModal} // Ouvre la modale quand on clique sur l'image
                    />
                </div>
                <div className="lg:ml-8 mt-4 lg:mt-0 text-white">
                    <h2 className='mb-4 text-3xl sm:text-2xl lg:text-5xl font-extrabold'>
                        Projet Récent
                    </h2>
                    <p className="text-lg sm:text-base lg:text-l">
                        Cette affiche est dédiée à Neymar Jr, un joueur que j&apos;admire profondément. Neymar n&apos;est pas seulement un footballeur exceptionnel, mais il a également joué pour mon club de cœur, le FC Barcelone. C&apos;est durant son passage au Barça que j&apos;ai été marqué par son talent, sa créativité et sa passion pour le jeu. Cette affiche représente non seulement mon admiration pour lui, mais aussi l&apos;attachement émotionnel que j&apos;ai pour cette période iconique du club. Ce projet me tient particulièrement à cœur car il reflète mon amour pour le football et pour Neymar, un joueur qui a laissé une empreinte indélébile dans ma vie de fan.
                    </p>
                </div>
            </section>

            {/* Modale */}
            {isModalOpen && (
                <div 
                    id="modal-overlay"
                    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
                    onClick={handleOutsideClick} // Ferme la modale si on clique en dehors
                >
                    <div className="relative bg-white rounded-lg p-4">
                        <Image 
                            className="rounded-lg"
                            alt="Neymar Affiche Agrandie" 
                            src="/images/Neyyyyyyyyyy.png" 
                            width={500} 
                            height={500} 
                        />
                        <button 
                            className="absolute top-2 right-2 text-black text-lg" 
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Nouveau;
