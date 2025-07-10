import React from "react";

const FeaturesPage = () => {
  return (
    <div className="flex w-full justify-center  md:py-20 sm:py-14 xs:py-10 2xs:py-5 py-3 min-h-screen">
      <div className="lg:w-[90%] w-full h-auto flex justify-center items-center flex-col md:gap-10 sm:gap-6 gap-3">
        <h2 className="text-primary xl:text-8xl lg:text-[84px] md:text-[64px] sm:text-[56px] xs:text-[38px] 2xs:text-3xl max-2xs:leading-5 3xs:text-2xl text-xl uppercase text-center letter-spacing font-mono">
          The Ultimate Listening Experience
        </h2>

        <div className="w-full h-full flex justify-center min-[900px]:py-10 py-3 items-center">
         
          <div className="w-full h-auto relative grid grid-cols-2 gap-[110px] mx-auto  text-primary-foreground min-[1224px]:text-2xl text-xl font-sans justify-between items-center">
            <div className="flex justify-start flex-col gap-[110px] items-start">
              <div className="xl:w-[280px] lg:w-[240px] w-[200px] px-3 h-[110px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                Crystal-Clear Sound Quality
              </div>
              <hr className="min-[900px]:w-[25%] w-[30%] border border-primary/80 absolute top-50 min-[900px]:top-42 xl:left-60 left-45 rotate-45" />
              <div className="xl:w-[280px] lg:w-[240px] w-[200px] px-3 h-[110px] bg-primary flex justify-center items-center text-center rounded-[20px]">
               Active Noise Cancellation (ANC)
              </div>
               <hr className="min-[900px]:w-[15%] w-[20%] border border-primary/80 absolute top-70 xl:left-72 min-[900px]:left-60 left-56" />
              <div className="xl:w-[280px] lg:w-[240px] w-[200px] px-3 h-[110px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                All-Day Comfort
              </div>
              <hr className="min-[900px]:w-[25%] w-[30%] border border-primary/80 absolute bottom-50 min-[900px]:bottom-40 xl:left-60 left-45 -rotate-45" />
            </div>

            <div className="flex justify-end flex-col gap-[110px] items-end">
              <div className="xl:w-[280px] lg:w-[240px] w-[200px] px-3 h-[110px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                Seamless Connectivity
              </div>
               <hr className="min-[900px]:w-[25%] w-[30%] border border-primary/80 absolute top-50 min-[900px]:top-40 xl:right-60 right-45 -rotate-45" />
              <div className="xl:w-[280px] lg:w-[240px] w-[200px] px-3 h-[110px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                Long Battery Life
              </div>
              <hr className="min-[900px]:w-[15%] w-[20%] border border-primary/80 absolute top-70 xl:right-72 min-[900px]:right-60 right-52" />
              <div className="xl:w-[280px] lg:w-[240px] w-[200px] px-3 h-[110px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                Ergonomic Comfort Redefined
              </div>
               <hr className="min-[900px]:w-[25%] w-[30%] border border-primary/80 absolute bottom-50 min-[900px]:bottom-40 xl:right-60 right-45 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
