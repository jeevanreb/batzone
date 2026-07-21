"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import Image from "next/image";

const STEP_LABELS = ["Step 01", "Step 02", "Step 03", "Step 04"];

function GetStartedSwiper({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div id="get-started-swiper" className="mt-8 block lg:hidden">
      {/* Step tag for current slide */}
      <div className="flex items-center justify-center gap-2 mb-5">
        {STEP_LABELS.map((label, index) => (
          <span
            key={label}
            className="inline-block px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300"
            style={{
              backgroundColor: currentIndex === index ? "#E51A6E" : "#e5e7eb",
              color: currentIndex === index ? "#fff" : "#9ca3af",
              borderColor: currentIndex === index ? "#E51A6E" : "#e5e7eb",
            }}
          >
            {label}
          </span>
        ))}
      </div>

      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop
        spaceBetween={16}
        slidesPerView={1.15}
        breakpoints={{
          480: { slidesPerView: 1.3, spaceBetween: 18 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 2.3, spaceBetween: 24 },
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        className="!px-1 !py-2"
      >
        {cards?.map((card, index) => (
          <SwiperSlide key={card.id} className="!h-auto">
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl">
              <Image
                src={card.src}
                alt={card.alt}
                className="w-full h-full object-cover rounded-2xl select-none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom pagination — same style as our-services */}
      <ul className="mt-6 flex items-center justify-center gap-2">
        {cards?.map((_, index) => (
          <li
            key={index}
            className="h-1.5 rounded-full transition-all duration-500 ease-in-out"
            style={{
              backgroundColor: currentIndex === index ? "#E51A6E" : "#d1d5db",
              width: currentIndex === index ? "28px" : "14px",
            }}
          />
        ))}
      </ul>
    </div>
  );
}

export default GetStartedSwiper;
