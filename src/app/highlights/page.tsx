import Image from 'next/image'
import React from 'react'

const HighlightPage = () => {
    let highlight_data = [
        {
            title : 'High-Fidelity Audio',
            image : '/images/highlight-icon1.png'
        },
        {
            title : 'Customizable Sound Profiles',
            image : '/images/highlight-icon2.png'
        },
        {
            title : 'Built-In Voice Assistant',
            image : '/images/highlight-icon3.png'
        },
        {
            title : 'Foldable & Portable Design',
            image : '/images/highlight-icon4.png'
        },
    ]
    return (
        <div className='flex w-full justify-center items-center md:py-20 sm:py-14 xs:py-10 2xs:py-5 py-3 h-auto'>
            <div className='xl:w-[90%] w-full h-auto flex justify-center items-center flex-col md:gap-10 sm:gap-6 gap-3'>
                <h2 className='text-primary xl:text-8xl lg:text-[84px] md:text-[64px] sm:text-[56px] xs:text-[38px] 2xs:text-3xl max-2xs:leading-5 3xs:text-2xl text-xl uppercase text-center letter-spacing font-mono'>What Our Customers Say</h2>
                <div className='w-full grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 mx-auto h-auto md:py-7 sm:py-5 py-3 justify-evenly items-center'>
                  {
                    highlight_data.map(({image , title}, index) => (
                          <div key={index}
                        className="flex relative justify-center items-center rounded-full bg-white h-[265px] mx-auto xl:w-[265px] w-[265px] lg:w-[210px]"
                    >
                        <svg
                            className="absolute inset-0 w-full h-full"
                            preserveAspectRatio="none"
                        >
                            <rect
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                                rx="20%"
                                ry="20%"
                                fill="none"
                                stroke="#000"
                                strokeWidth="2"
                                strokeDasharray="15 15"
                            />
                        </svg>
                        <div className="relative w-full h-full flex justify-center items-center z-10 ">
                            <div className=' flex justify-center items-center flex-col absolute gap-3 p-5 rounded-2xl'>
                                <Image src={image} alt='icon' width={60} height={60} className='' />
                                <h3 className='xs:text-[26px] 2xs:text-xl text-lg  font-bold font-sans text-primary text-center'>{title}</h3>
                            </div>
                        </div>
                    </div>
                    ))
                  }
                </div>
            </div>
        </div>
    )
}

export default HighlightPage
