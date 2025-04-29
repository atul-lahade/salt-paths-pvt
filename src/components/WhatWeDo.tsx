import globeImg from "../assets/img/globe.jpg";

export default function WhatWeDo() {
  return (
    <section className="overflow-hidden pt-12 dark:bg-dark bg-cover bg-center">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center mb-8">
          <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800">
          What We Do!
          </h1>
        </div>
        <div className="flex flex-wrap items-center bg-black text-white">
          <div className="px-4 lg:w-6/12">
            <div className="relative mb-12 lg:mb-0">
              <div className="mx-auto max-w-[430px]">
                <img src={globeImg} alt="about image" className="w-full" />
              </div>
            </div>
          </div>
          <div className="w-full px-8 lg:w-1/2 2xl:w-5/12">
            <div className="mt-10 lg:mt-0">
              <h2 className="mb-11 text-3xl font-bold leading-tight text-dark sm:text-4xl sm:leading-tight md:text-5xl lg:text-4xl lg:leading-tight xl:text-5xl">
                Empowering Trade with Trust & Excellence
              </h2>

              <div className="mb-8 flex">
                <span className="w-full max-w-[45px] pr-4 text-2xl font-bold text-[#bac0e2]">
                  01
                </span>
                <div className="w-full">
                  <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-amber-200">
                    Premium Sourcing
                  </h3>
                  <p className="dark:text-dark-6 mb-9 text-base">
                    We handpick every product to ensure exceptional quality,
                    authenticity, and craftsmanship. You get only the finest —
                    curated with precision for global markets.
                  </p>
                </div>
              </div>

              <div className="flex">
                <span className="w-full max-w-[45px] pr-4 text-2xl font-bold text-[#bac0e2]">
                  02
                </span>
                <div className="w-full">
                  <h3 className="mb-4 text-xl font-bold sm:text-2xl lg:text-xl xl:text-2xl text-amber-200">
                    Seamless Global Delivery
                  </h3>
                  <p className="dark:text-dark-6 mb-9 text-base text-body-color">
                    From customs to doorstep, our logistics are streamlined for
                    speed and reliability. Partner with us to experience
                    hassle-free international trade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
