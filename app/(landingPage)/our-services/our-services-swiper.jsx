"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";

function OurServicesSwiper({ imagesList, services }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="mt-10 block lg:hidden overflow-x-hidden">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        spaceBetween={16}
        slidesPerView={1.1}
        breakpoints={{
          480: { slidesPerView: 1.3, spaceBetween: 18 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2.3, spaceBetween: 24 },
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="!px-1 !py-2"
      >
        {services?.map((service, index) => (
          <SwiperSlide key={service?.no ?? index} className="!h-auto">
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02]">
              {/* Image */}
              <div className="relative flex items-center justify-center bg-white/[0.03] p-6">
                <span className="absolute left-4 top-4 inline-flex h-9 min-w-9 items-center justify-center rounded-full bg-[#2352EA] px-2 text-sm font-semibold text-white shadow-lg">
                  {service?.no}
                </span>
                <Image
                  src={imagesList[index]}
                  alt={`BatZone ${service?.title}`}
                  width={378}
                  height={478}
                  className="h-44 w-auto rounded-lg select-none object-contain transition-transform duration-500 group-hover:scale-105 sm:h-52"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col gap-2 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {service?.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#7F7F86]">
                  {service?.description}
                </p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination */}
      <ul className="mt-6 flex items-center justify-center gap-2">
        {Array.from({ length: services?.length ?? 0 }).map((_, index) => (
          <li
            key={index}
            className="h-1.5 rounded-full transition-all duration-500 ease-in-out"
            style={{
              backgroundColor: currentIndex === index ? "#2352EA" : "#3A3A3A",
              width: currentIndex === index ? "28px" : "14px",
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default OurServicesSwiper;
