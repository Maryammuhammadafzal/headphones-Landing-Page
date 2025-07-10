'use client'
import Header from '@/components/Header'
import Image from 'next/image'
import { off } from 'process'
import React, { useEffect, useState } from 'react'

const HeroPage = () => {
  let [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const scale = Math.min(2, 1 + offset / 1000);
const isMobile = typeof window !== "undefined" && window.innerWidth < 1024;
const adjustedScale = isMobile ? scale + 0.1 : scale;
  return (
    <div className='w-full relative min-h-screen flex items-center p-6 flex-col'>
      <div className="w-full flex flex-col gap-6 justify-center items-center h-auto">
        <div className=" w-full flex flex-col p-6 h-[600px] bg-primary rounded-[40px] overflow-hidden">
          <div className='w-full h-[60px] flex justify-center  items-center rounded-[40px]'>
            <Header />
          </div>
          <div className=" flex flex-col w-full h-full justify-between items-start p-4 ">

            <div className='flex flex-col w-full justify-start items-center'>
              <h2 className='gradient-title xl:text-[231px] lg:text-[200px] lg:leading-[130px] md:text-[140px] md:leading-[110px] sm:text-[110px] sm:leading-[90px] xs:text-[84px] xs:leading-[70px] text-[64px] leading-[50px] min-[350px]:text-[64px] min-[350px]:leading-[64px] min-[280px]:text-[48px] min-[280px]:leading-[48px] font-mono uppercase xl:leading-[150px] letter-spacing'>HEADPHONES</h2>
              <p className='xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-xl text-primary-foreground text-center font-sans'>Experience Sound Like Never Before</p>
              <div
                style={{
                  transform: `${offset > 0 ? `translateY(1300px) scale(${adjustedScale})` : 'translateY(0px)'
                    }`,
                  transition: 'transform 0.5s linear'
                }}
                className='headphone absolute mx-auto xs:top-0 top-20 sm:w-[620px] z-50 w-full 2xs:h-[400px] 3xs:h-[350px] h-auto xs:h-[480px]  sm:h-[540px]'>

                <Image
                  data-aos="fade-down"
                  src='/images/headphones-image.png'
                  alt="Customer"
                  width={300}
                  height={300}

                  className={`w-full h-full`}
                />
              </div>
            </div>

            <div className='w-full h-auto flex justify-start items-center'>
              <div className='sm:w-[250px] sm:h-[120px] w-[200px] h-[90px]'>

                <Image src='/images/hero-card1.png' alt='icon' width={250} height={120} className='w-full h-full object-cover' />
              </div>
            </div>

          </div>
        </div>
        <div data-aos="fade-up" className="grid md:grid-cols-5 grid-cols-1 gap-4 w-full">
          {[1, 2].map((_, i) => (
            <div
              key={i}
              className={`relative w-full md:h-[320px] sm:h-[400px] xs:h-[350px] h-[300px] rounded-[40px] overflow-hidden ${i === 0 ? 'md:col-span-3' : 'md:col-span-2 bg-black'}`}
            >
              <Image
                src={i === 0 ? '/images/hero-card-image1.png' : '/images/hero-card2.png'}
                alt="Customer Feedback"
                layout="fill"
                className={`${i === 0 ? 'object-cover' : 'object-contain'}`}
              />
              <div className={`absolute inset-0  flex-col justify-start items-end p-4 ${i === 0 ? 'flex' : 'hidden'}`}>
                <Image
                  src="/images/star-icon.png"
                  alt="icon"
                  width={50}
                  height={50}
                  className={`${i === 0 ? 'block' : 'hidden'} m-5 max-sm:w-[34px] max-sm:h-[35px]`}
                />
                <div className="text-primary-foreground mt-4 w-full h-full flex flex-col justify-end py-5 p-8">
                  <h3 className="lg:text-4xl capitalize md:text-4xl font-sans xs:text-3xl text-2xl font-bold">
                    {i === 0 ? 'our headphones deliver precision sound, unmatched comfort, and cutting-edge technology.' : 'Innovative Design'}
                  </h3>
                  <p className={`xl:text-xl md:text-lg sm:text-base text-sm mt-2 font-sans max-w-lg ${i === 0 ? 'hidden' : 'block'}`}>
                    {i === 0 ? '' : 'Combining aesthetics and functionality, our headphones are a perfect blend of style and performance.'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HeroPage
