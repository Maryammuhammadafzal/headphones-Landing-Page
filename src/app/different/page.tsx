import Image from "next/image";
import React from "react";

const DifferentPage = () => {
    return (
        <div className="flex w-full justify-center items-center md:py-20 sm:py-14 py-6 h-auto">
            <div className="xl:w-[90%] w-full flex flex-col items-center gap-10">
                <h2 className="text-primary uppercase text-center font-mono leading-tight tracking-wide xl:text-8xl lg:text-[84px] md:text-[64px] sm:text-[48px] text-3xl">
                    What Makes Us Different?
                </h2>

                <div className="w-full flex flex-col gap-6 lg:py-10 md:py-7 sm:py-5 py-3">

                    <div className="grid md:grid-cols-5 grid-cols-1 gap-4 w-full">
                        {[1, 2].map((_, i) => (
                            <div
                                key={i}
                                className={`relative w-full h-[450px] rounded-[40px] overflow-hidden ${i === 0 ? 'col-span-3' : 'col-span-2'}`}
                            >
                                <Image
                                    src={i === 0 ? '/images/different-image1.png' : '/images/different-image2.png'}
                                    alt="Customer Feedback"
                                    layout="fill"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 flex flex-col justify-start items-end p-4 bg-gradient-to-t from-black/60 via-transparent">
                                    <Image
                                        src="/images/star-icon.png"
                                        alt="icon"
                                        width={50}
                                        height={50}
                                        className={`${i === 0 ? 'block' : 'hidden'} m-5`}
                                    />
                                    <div className="text-primary-foreground mt-4 w-full h-full flex flex-col justify-end py-5 px-3">
                                        <h3 className="lg:text-5xl text-4xl font-sans sm:text-3xl font-bold">
                                            {i === 0 ? 'Uncompromising Quality' : 'Innovative Design'}
                                        </h3>
                                        <p className="xl:text-xl text-lg  mt-2 font-sans max-w-lg">
                                            {i === 0 ? 'Every detail of our headphones is crafted to perfection, from the materials used to the sound they produce.' : 'Combining aesthetics and functionality, our headphones are a perfect blend of style and performance.'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full">
                        <div className="relative w-full h-[400px] rounded-[40px] overflow-hidden">

                            <div className="absolute inset-0 flex flex-col justify-start items-center p-4 bg-gradient-to-t from-black/60 via-transparent">
                                <h2 className='gradient-title xl:text-[231px] lg:text-[200px] lg:leading-[130px] md:text-[140px] md:leading-[110px] sm:text-[110px] sm:leading-[90px] xs:text-[84px] xs:leading-[70px] text-[64px] leading-[50px] min-[350px]:text-[64px] min-[350px]:leading-[64px] min-[280px]:text-[48px] min-[280px]:leading-[48px] font-mono uppercase xl:leading-[150px] letter-spacing'>Technology</h2>
                                <div className="w-full h-full  flex md:flex-row flex-col md:justify-between justify-start md:items-center items-start lg:gap-4 md:gap-8">
                                    <h3 className="lg:text-5xl lg:max-w-md md:max-w-sm max-w-xs text-primary-foreground md:text-4xl font-sans sm:text-3xl text-2xl font-bold">
                                        Customer-Centric Approach
                                    </h3>

                                    <Image
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
                                    />

                                    <p className="xl:text-xl lg:text-lg  sm:text-base text-sm md:max-w-xs max-w-2xs lg:max-w-sm lg:px-3  mt-2 font-sans text-primary-foreground">
                                        Your satisfaction is our priority. We offer a 30-day return policy and a dedicated support team to assist you.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DifferentPage;
