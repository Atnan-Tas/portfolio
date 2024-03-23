"use client";
import cadrant1 from '../../../public/cadrant1.svg';
import cadrant2 from '../../../public/cadrant2.svg';
import cadrant3 from '../../../public/cadrant3.svg';
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
                            <h2 className='font-bold text-[45px]'>Mes Compétences</h2>
                            <p className='text-[#B8B8B8] text-[18px] tracking-[0.8px] leading-[1.5em] my-[14px] mb-[75px]'>Voici un jugement personnel sur mes compétences dans chacunes de ces catégories.<br></br> Ce sont des statistiques purement subjectives.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme w-[80%] mx-auto relative">
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={cadrant1} alt="Image" />
                                <h5 className='mt-2'>Design</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={cadrant2} alt="Image" />
                                <h5 className='mt-2'>Communication</h5>
                                </div>
                                <div className="w-[50%] mx-auto mb-[15px]">
                                <Image src={cadrant3} alt="Image" />
                                <h5 className='mt-2'>Développement Web</h5>
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