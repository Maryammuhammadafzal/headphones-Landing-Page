import React from "react";

const FeaturesPage = () => {
  return (
    <div className="flex w-full justify-center  md:py-20 sm:py-14 xs:py-10 2xs:py-5 py-3 sm:min-h-screen">
      <div className="lg:w-[90%] w-full h-auto flex justify-center items-center flex-col md:gap-10 sm:gap-6 gap-3">
        <h2 className="text-primary xl:text-8xl lg:text-[84px] md:text-[64px] sm:text-[56px] xs:text-[38px] 2xs:text-3xl max-2xs:leading-5 3xs:text-2xl text-xl uppercase text-center letter-spacing font-mono">
          The Ultimate Listening Experience
        </h2>

        <div className="w-full h-auto flex justify-center min-[900px]:py-10 md:py-3 xs:py-18 py-10 items-center">
         
          <div className="w-full h-auto relative grid grid-cols-2 gap-6  mx-auto text-primary-foreground min-[1224px]:text-2xl md:text-xl sm:text-lg xs:text-base 2xs:text-xs text-[10px] font-sans justify-between items-center">
            <div className="flex justify-start flex-col md:gap-[110px] sm:gap-[70px] xs:gap-[50px] 2xs:gap-[30px] gap-[14px] items-start">
              <div className="xl:w-[280px] lg:w-[240px] md:w-[200px] sm:w-[160px] xs:w-[130px] 2xs:w-[100px] w-[85px] xs:px-3 px-1 sm:h-[110px] xs:h-[90px] h-[70px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                Crystal-Clear Sound Quality
              </div>
              <hr className="min-[900px]:w-[25%] md:w-[30%] xs:w-[40%] w-[30%] border border-primary/80 absolute sm:top-50 xs:top-40 top-26 min-[900px]:top-42 xl:left-60 md:left-45 sm:left-30 left-20 rotate-45" />
              <div className="xl:w-[280px] lg:w-[240px] md:w-[200px] sm:w-[160px] xs:w-[130px] 2xs:w-[100px] w-[85px] xs:px-3 px-1 sm:h-[110px] xs:h-[90px] h-[70px] bg-primary flex justify-center items-center text-center rounded-[20px]">
               Active Noise Cancellation (ANC)
              </div>
               <hr className="min-[900px]:w-[15%] md:w-[20%] xs:w-[30%] w-[20%] border border-primary/80 absolute md:top-70 sm:top-60 xs:top-50 top-36 xl:left-72 min-[900px]:left-60 md:left-56 sm:left-40 xs:left-30 left-20" />
              <div className="xl:w-[280px] lg:w-[240px] md:w-[200px] sm:w-[160px] xs:w-[130px] 2xs:w-[100px] w-[85px] xs:px-3 px-1 sm:h-[110px] xs:h-[90px] h-[70px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                All-Day Comfort
              </div>
              <hr className="min-[900px]:w-[25%] xs:w-[30%] w-[20%] border border-primary/80 absolute md:bottom-50 sm:bottom-40 xs:bottom-30 bottom-20 min-[900px]:bottom-40 xl:left-60 md:left-45 sm:left-30 left-20 -rotate-45" />
            </div>

            <div className="flex justify-end flex-col md:gap-[110px] sm:gap-[70px] xs:gap-[50px] 2xs:gap-[30px] gap-[14px] items-end">
              <div className="xl:w-[280px] lg:w-[240px] md:w-[200px] sm:w-[160px] xs:w-[130px] 2xs:w-[100px] w-[85px] xs:px-3 px-1 sm:h-[110px] xs:h-[90px] h-[70px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                Seamless Connectivity
              </div>
               <hr className="min-[900px]:w-[25%] md:w-[30%] xs:w-[40%] w-[30%] border border-primary/80 absolute sm:top-50 xs:top-40 top-26 min-[900px]:top-40 xl:right-60 md:right-45 sm:right-30 right-20 -rotate-45" />
              <div className="xl:w-[280px] lg:w-[240px] md:w-[200px] sm:w-[160px] xs:w-[130px] 2xs:w-[100px] w-[85px] xs:px-3 px-1 sm:h-[110px] xs:h-[90px] h-[70px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                Long Battery Life
              </div>
              <hr className="min-[900px]:w-[15%] md:w-[20%] xs:w-[30%] w-[20%] border border-primary/80 absolute md:top-70 sm:top-60 xs:top-48 top-36 xl:right-72 min-[900px]:right-60 md:right-52 sm:right-42 xs:right-30 right-20" />
              <div className="xl:w-[280px] lg:w-[240px] md:w-[200px] sm:w-[160px] xs:w-[130px] 2xs:w-[100px] w-[85px] xs:px-3 px-1 sm:h-[110px] xs:h-[90px] h-[70px] bg-primary flex justify-center items-center text-center rounded-[20px]">
                Ergonomic Comfort Redefined
              </div>
               <hr className="min-[900px]:w-[25%] xs:w-[30%] w-[20%] border border-primary/80 absolute md:bottom-50 sm:bottom-40 xs:bottom-30 bottom-20 min-[900px]:bottom-40 xl:right-60 md:right-45 sm:right-30 right-20 rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
