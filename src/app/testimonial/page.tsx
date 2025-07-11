'use client'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const TestimonialPage = () => {
 useEffect(()=> {
    Aos.init({
        duration: 1000,
        once : true,
    })
 })
    const testimonial_data = [
        {
            name: 'Alex J.',
            description: '"The sound quality is phenomenal, and the noise cancellation is a game-changer. I can’t imagine using anything else!"',
        },
        {
            name: 'Alex J.',
            description: '"The sound quality is phenomenal, and the noise cancellation is a game-changer. I can’t imagine using anything else!"',
        },
        {
            name: 'Alex J.',
            description: '"The sound quality is phenomenal, and the noise cancellation is a game-changer. I can’t imagine using anything else!"',
        },
    ]
    return (
        <div className='flex w-full justify-center items-center md:py-20 sm:py-14 xs:py-10 2xs:py-5 py-3 h-auto'>
            <div className='lg:w-[90%] w-full h-auto flex justify-center items-center flex-col md:gap-10 sm:gap-6 gap-3'>
                <h2 className='text-primary xl:text-8xl lg:text-[84px] md:text-[64px] sm:text-[56px] xs:text-[38px] 2xs:text-3xl max-2xs:leading-5 3xs:text-2xl text-xl uppercase text-center letter-spacing font-mono'>What Our Customers Say</h2>
                <div className='w-full flex flex-wrap md:gap-6 sm:gap-4 gap-2 h-auto md:py-7 sm:py-5 py-3 justify-evenly items-center'>
                    {
                        testimonial_data.map(({ description, name } , index) => (
                            <Card key={index} data-aos="fade-up" className='shadow-none  border-none rounded-none p-0 flex justify-end items-end max-3xs:w-full w-[390px] sm:h-[250px] xs:h-[200px] 2xs:h-[180px] h-[190px] relative'>
                                <Image src='/images/testimonial-icon.png' alt='icon' width={64} height={64} className='absolute top-0 right-0' />
                                <CardContent className='xs:p-4 p-2 w-full h-auto bg-muted-foreground/20 rounded-2xl flex justify-center items-center flex-col gap-3'>
                                    <p className='md:text-xl xl:mt-6 sm:text-lg 2xs:text-base 3xs:text-sm text-xs font-sans text-primary text-center'>
                                        {`${description}`}
                                    </p>
                                    <h5 className=' md:text-4xl sm:text-3xl text-2xl font-mono text-primary capitalize'>
                                        {name}
                                    </h5>
                                </CardContent>
                            </Card>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TestimonialPage
