import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'

const TestimonialPage = () => {
    
    return (
        <div className='flex w-full justify-center items-center py-20 h-auto'>
            <div className='w-[90%] h-auto flex justify-center items-center flex-col gap-10'>
                <h2 className='text-primary text-8xl uppercase letter-spacing font-mono'>What Our Customers Say</h2>
                <div className='w-full flex flex-wrap h-auto py-7 justify-center items-center'>
                    <Card className='shadow-none border-none rounded-none p-0 flex justify-center items-end w-[390px] h-[250px] relative'>
                        <Image src='/images/testimonial-icon.png' alt='icon' width={64} height={64} className='absolute top-0 right-0' />
                    <CardContent className='p-4 w-full h-auto bg-muted-foreground/20 rounded-2xl flex justify-center items-center flex-col gap-3'>
                        <p className='text-xl font-sans text-primary text-center'>
                            "The sound quality is phenomenal, and the noise cancellation is a game-changer. I can’t imagine using anything else!"
                        </p>
                        <h5 className='text-4xl font-mono text-primary capitalize'>
                            Alex J.
                        </h5>
                    </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default TestimonialPage
