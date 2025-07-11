import React from 'react'
import { Button } from './ui/button'

const Footer = () => {
    return (
        <div id='contact' className='w-full h-auto flex justify-center items-center'>
            <div className="w-[95%] flex justify-center items-center flex-col gap-3">
                <div className='w-full flex-col h-auto bg-primary text-primary-foreground gap-6 p-6 flex rounded-[40px] justify-center items-center'>
                    <div className='flex flex-col text-center'>
                        <h2 className='gradient-title xl:text-9xl lg:text-8xl lg:leading-16 md:text-[80px] md:leading-13 sm:text-[64px] sm:leading-11 xs:text-[50px] xs:leading-8 text-4xl leading-6 max-[400px]:text-3xl max-[400px]:leading-4 max-[350px]:text-2xl max-[350px]:leading-3 font-mono uppercase xl:leading-[78px] letter-spacing'>Ready to Upgrade  </h2>
                        <h2 className='gradient-title xl:text-9xl lg:text-8xl lg:leading-16 md:text-[80px] md:leading-13 sm:text-[64px] sm:leading-11 xs:text-[50px] xs:leading-8 text-4xl leading-6 max-[400px]:text-3xl max-[400px]:leading-4 max-[350px]:text-2xl max-[350px]:leading-3 font-mono uppercase xl:leading-[78px] letter-spacing'>Your Sound? </h2>
                    </div>
                    <p className='font-sans lg:text-xl md:text-lg sm:text-base text-sm text-center'>Explore our collection and find the perfect pair of headphones for your needs. Click below to shop now.</p>
                    <div className='py-2'>
                        <Button className='bg-primary-foreground text-primary font-medium hover:bg-primary-foreground/80 text-xl font-sans sm:py-5 sm:px-9 py-4 px-7 md:py-6 md:px-11'>Buy Now</Button>
                    </div>
                </div>
                <div className="copyright w-full  flex justify-center items-center">
                    <p className='font-sans lg:text-xl md:text-lg sm:text-base text-sm text-center text-primary'>Thank you for choosing [Your Headphone Brand Name]. Redefine your sound experience today.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
