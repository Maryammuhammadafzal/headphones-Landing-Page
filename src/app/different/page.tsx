import Image from 'next/image'
import React from 'react'

const DifferentPage = () => {
    return (
        <div className='flex w-full justify-center items-center md:py-20 sm:py-14 xs:py-10 2xs:py-5 py-3 h-auto' >
            <div className='xl:w-[90%] w-full h-auto flex justify-center items-center flex-col md:gap-10 sm:gap-6 gap-3'>
                <h2 className='text-primary xl:text-8xl lg:text-[84px] md:text-[64px] sm:text-[56px] xs:text-[38px] 2xs:text-3xl max-2xs:leading-5 3xs:text-2xl text-xl uppercase text-center letter-spacing font-mono'>What Our Customers Say</h2>
                <div className='w-full flex flex-col gap-4 mx-auto h-auto md:py-7 sm:py-5 py-3 justify-evenly items-center'>
                    <div className='w-full grid grid-cols-3 gap-4 mx-auto h-auto justify-evenly items-center'>

                        <div className='w-full grid grid-cols-2 relative justify-center items-center'>
                            <Image src='/images/work-image.png' alt='icon' width={400} height={400} className='w-full rounded-[40px] h-full object-cover' />
                            <div className='w-full h-full flex top-0 left-0 justify-start items-end flex-col absolute rounded-2xl'>
                                <Image src='/images/work-icon.png' alt='icon' width={64} height={64} className='' />
                                <div className='flex flex-col gap-4 justify-end items-start p-4'>
                                    <h3 className='xs:text-4xl 2xs:text-3xl text-2xl  font-bold font-sans text-primary-foreground text-center'>built-in microphones</h3>
                                    <p className='font-sans lg:text-xl md:text-lg sm:text-base text-sm text-center'>Explore our collection and find the perfect pair of headphones for your needs. Click below to shop now.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full grid  relative grid-cols-1 justify-center items-center'>
                            <Image src='/images/work-image.png' alt='icon' width={400} height={400} className='w-full rounded-[40px] h-full object-cover' />
                            <div className='w-full h-full flex top-0 left-0 justify-start items-end flex-col absolute rounded-2xl'>
                                <Image src='/images/work-icon.png' alt='icon' width={64} height={64} className='' />
                                <div className='flex flex-col gap-4 justify-end items-start p-4'>
                                    <h3 className='xs:text-4xl 2xs:text-3xl text-2xl  font-bold font-sans text-primary-foreground text-center'>built-in microphones</h3>
                                    <p className='font-sans lg:text-xl md:text-lg sm:text-base text-sm text-center'>Explore our collection and find the perfect pair of headphones for your needs. Click below to shop now.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='w-full grid grid-cols-1 gap-4 mx-auto h-auto justify-evenly items-center'>
<div className='grid-cols-3 w-full grid'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DifferentPage
