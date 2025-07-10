import Header from '@/components/Header'
import React from 'react'

const HeroPage = () => {
  return (
    <div className='w-full min-h-screen flex items-center p-6 flex-col'>
      <div className="w-full">
        <div className="relative w-full flex flex-col p-6 h-[600px] bg-primary rounded-[40px] overflow-hidden">
          <div className='w-full h-[60px] flex justify-center  items-center rounded-[40px]'>
            <Header />
          </div>
          <div className=" flex flex-col justify-start items-center p-4 ">

            <h2 className='gradient-title xl:text-[231px] lg:text-[200px] lg:leading-[130px] md:text-[140px] md:leading-[110px] sm:text-[110px] sm:leading-[90px] xs:text-[84px] xs:leading-[70px] text-[64px] leading-[50px] min-[350px]:text-[64px] min-[350px]:leading-[64px] min-[280px]:text-[48px] min-[280px]:leading-[48px] font-mono uppercase xl:leading-[150px] letter-spacing'>HEADPHONES</h2>
           <p className='xl:text-6xl lg:text-5xl md:text-4xl text-3xl text-primary-foreground font-sans'>Experience Sound Like Never Before</p>
            <div className="w-full h-full  flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start lg:gap-4 md:gap-8">
              <h3 className="lg:text-5xl lg:max-w-md md:max-w-sm max-w-xs text-primary-foreground md:text-4xl font-sans sm:text-3xl text-2xl font-bold">
                Customer-Centric Approach
              </h3>

              {/* <Image
                data-aos="fade-down"
                src='/images/boy-image.png'
                alt="Customer"
                layout="fill"
                className="object-cover"
              />
              <Image
                src='/images/boy-image1.png'
                alt="Customer"
                layout="fill"
                className="object-cover absolute top-20 bottom-0 left-0  -z-10"
              /> */}

              <p className="xl:text-xl lg:text-lg  sm:text-base text-sm md:max-w-xs max-w-2xs lg:max-w-sm lg:px-3  mt-2 font-sans text-primary-foreground">
                Your satisfaction is our priority. We offer a 30-day return policy and a dedicated support team to assist you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
