"use client";
import AI from '../../../public/AI.svg';
import AE from '../../../public/AE.svg';
import PP from '../../../public/PP.svg';
import PS from '../../../public/PS.svg';
import Figma from '../../../public/Figma.svg';
import WP from '../../../public/WP.svg';
import IDD from '../../../public/IDD.svg';
import Vue from '../../../public/Vue.svg';
import React from '../../../public/React.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';



const competences = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
      return (
        <section className="relative pb-12 mt-[120px]">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bg-[#080512] wow zoomIn rounded-3xl text-center py-14 px-12 mt-[-60px]">
                            <h2 className='font-bold  text-xl   sm:text-[30px]   md:text-[37px]  lg:text-[45px]'>Mes Compétences</h2>
                            <p className='text-[#B8B8B8] text-[18px] tracking-[0.8px] leading-[1.5em] my-[14px] mb-[75px]'>Voici les outils dans lequels j&apos;ai aquéris des compétences<br></br> suite a mes projets personnelles et scolaires.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme w-[80%] mx-auto relative">
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={AI} alt="Image" />
                                <h5 className='mt-2'>Adobe Illustrator</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={PP} alt="Image" />
                                <h5 className='mt-2'>Premier Pro</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={AE} alt="Image" />
                                <h5 className='mt-2'>After Effect Web</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={PS} alt="Image" />
                                <h5 className='mt-2'>Photoshop Web</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={WP} alt="Image" />
                                <h5 className='mt-2'>WordPress</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={Figma} alt="Image" />
                                <h5 className='mt-2'>Figma</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={React} alt="Image" />
                                <h5 className='mt-2'>React</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={Vue} alt="Image" />
                                <h5 className='mt-2'>Vue.js</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={IDD} alt="Image" />
                                <h5 className='mt-2'>Adobe InDesign</h5>
                                </div>
                                
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      )
    }

export default competences