import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const WorkPage = () => {
    return (
        <div className='flex w-full justify-center items-center md:py-20 sm:py-14 xs:py-10 2xs:py-5 py-3 h-auto'>
            <div className='w-full h-auto flex justify-center items-center flex-col md:gap-10 sm:gap-6 gap-3'>
                <h2 className='text-primary xl:text-8xl lg:text-[84px] md:text-[64px] sm:text-[56px] xs:text-[48px] text-3xl uppercase text-center letter-spacing font-mono'>How It works</h2>
                <div className='w-full sm:px-3 p-0 flex flex-wrap md:gap-6 gap-4 h-auto md:py-7 sm:py-5 py-3 min-[1288px]:justify-evenly justify-between items-center'>
                    <div className='xl:w-[32%] min-[920px]:w-[45%] w-full md:p-0 py-3 h-auto flex flex-col gap-5'>
                        <h3 className='md:text-5xl xs:text-[40px] text-3xl font-bold font-sans text-primary'>Advanced Audio Technology</h3>
                        <p className='font-sans lg:text-xl md:text-lg sm:text-base text-sm text-primary'>Our headphones are equipped with cutting-edge drivers and adaptive sound technology to ensure precise audio reproduction. The built-in microphones monitor and adjust to external noise levels for seamless noise cancellation.</p>
                        <div className='py-2'>
                            <Button className='bg-muted-foreground/20 text-primary font-medium hover:bg-primary-foreground/80 text-xl font-sans sm:py-5 sm:px-9 py-4 px-7 md:py-6 md:px-11'>Buy Now</Button>
                        </div>
                    </div>
                    <div className='xl:w-[32%] xs:w-auto w-full  h-auto relative xl:top-0 min-[922px]:top-50  flex flex-col gap-5'>
                        <div className='xs:w-[410px] w-full xs:h-[500px] h-[400px] flex justify-center items-center'>
                            <Image src='/images/work-image.png' alt='icon' width={400} height={400} className='w-full rounded-[40px] h-full object-cover' />
                            <div className='bg-[#F5F5F5]/50 flex justify-center items-center flex-col absolute 2xs:h-[270px] 2xs:w-[250px] w-[200px] rounded-2xl'>
                                <Image src='/images/work-icon.png' alt='icon' width={64} height={64} className='' />
                                <h3 className='xs:text-4xl 2xs:text-3xl text-2xl  font-bold font-sans text-primary text-center'>built-in microphones</h3>
                            </div>
                        </div>

                    </div>
                    <div className='xl:w-[32%] min-[920px]:w-[45%]  w-full md:p-0 py-3  h-auto flex flex-col gap-5'>
                        <h3 className='md:text-5xl sm:text-4xl text-3xl font-bold font-sans text-primary'>Simple Setup</h3>
                        <ul className='flex flex-col gap-5'>
                            <li className='flex'>
                                <p className='font-sans lg:text-xl md:text-lg sm:text-base text-sm text-primary'> <span className='font-bold'>1. Pairing: </span>  Turn on your headphones and enable Bluetooth on your device. Select [Headphone Model Name] from the list to connect.</p>
                            </li>
                            
                            <li className='flex'>
                                <p className='font-sans lg:text-xl md:text-lg sm:text-base text-sm text-primary'> <span className='font-bold'>1. Listening Modes: </span>  Switch between modes such as ANC, transparency, or standard listening with a single touch.</p>
                            </li>

                            <li className='flex'>
                                <p className='font-sans lg:text-xl md:text-lg sm:text-base text-sm text-primary'> <span className='font-bold'>1. Customization: </span>  Use our companion app to fine-tune your sound settings and access firmware updates.</p>
                            </li>
                        </ul>
                        
                    </div>

                </div>
            </div>
        </div>
    )
}

export default WorkPage
