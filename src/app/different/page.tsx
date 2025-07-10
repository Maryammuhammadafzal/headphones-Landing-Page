import Image from 'next/image'
import React from 'react'

const DiferentPage = () => {
    return (
        <div className='flex w-full justify-center items-center md:py-20 sm:py-14 xs:py-10 2xs:py-5 py-3 h-auto' >
            <div className='xl:w-[90%] w-full h-auto flex justify-center items-center flex-col md:gap-10 sm:gap-6 gap-3'>
                <h2 className='text-primary xl:text-8xl lg:text-[84px] md:text-[64px] sm:text-[56px] xs:text-[38px] 2xs:text-3xl max-2xs:leading-5 3xs:text-2xl text-xl uppercase text-center letter-spacing font-mono'>What Our Customers Say</h2>
                <div className='w-full grid grid-rows-2 gap-4 mx-auto h-auto md:py-7 sm:py-5 py-3 justify-evenly items-center'>
                    <div className='w-full grid grid-cols-3 gap-4 mx-auto h-auto justify-evenly items-center'>

                        <div className='w-full grid-cols-2 flex justify-center items-center'>
                            <Image src='/images/work-image.png' alt='icon' width={400} height={400} className='w-full rounded-[40px] h-full object-cover' />
                            <Image src='/images/work-icon.png' alt='icon' width={64} height={64} className='' />
                            <div className='w-full h-full flex justify-end items-start flex-col absolute rounded-2xl'>
                                <h3 className='xs:text-4xl 2xs:text-3xl text-2xl  font-bold font-sans text-primary text-center'>built-in microphones</h3>
                            </div>
                        </div>

                    </div>
                    <div className='w-full grid grid-cols-1 gap-4 mx-auto h-auto justify-evenly items-center'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DiferentPage
