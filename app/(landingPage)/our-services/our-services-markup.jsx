import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";
import OurServicesSwiper from "./our-services-swiper";

function OurServicesMarkup({ imagesList, services }) {
  return (
    <MaxWidth id="our-services" fullRelative={true} center={true} className="bg-black  lg:h-screen overflow-hidden">
      {/* Section heading */}
      <div id="our-services-head" className="mx-auto max-w-4xl text-center">
        <p id="our-services-badge" className="text-sm font-medium text-[#2352ea]">Our Services</p>
        <h2
          id="our-services-title"
          className="mt-3 bg-clip-text text-2xl font-semibold leading-tight text-transparent sm:text-3xl lg:text-[40px] lg:leading-[1.2]"
          style={{
            backgroundImage:
              "linear-gradient(100deg, #6E6E76 0%, #FFD700 45%, #FFD700 55%, #6E6E76 100%)",
          }}
        >
          Complete Sports Solutions Under One Roof
        </h2>
      </div>

      {/* Pinned card + scroll-highlighted timeline */}
      <div className="mx-auto max-w-5xl px-6 mt-12 hidden lg:grid grid-cols-1 gap-12 lg:mt-16 lg:grid-cols-[60%_40%] lg:items-center lg:gap-4">
        {/* Left: services timeline */}
        <div id="our-services-timeline" className="relative lg:overflow-y-clip pt-1">

          <div id="our-services-items" className="flex flex-col gap-y-14 lg:gap-y-20 relative">
            {services.map((service, index) => (
              <div
                key={service.no}
                className="relative flex gap-8 lg:gap-12 -mt-2.5"
                id={`our-services-item-head-${index}`}
              >
                <span className="relative z-50 inline-flex w-[30px] -ml-4 shrink-0 justify-center py-1 text-sm font-medium text-[#FFD700] bg-black h-max">
                  {service.no}
                </span>
                <div className="flex-1 md:opacity-50 opacity-100" id={`our-services-item-${index}`}>
                  <h3 className="text-xl font-medium text-[#2352ea] lg:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-[#f2f2f5]">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            <div
              id="our-services-line-fill"
              className="md:-z-5 pointer-events-none absolute left-0 top-0 h-[95%] md:h-0 w-px bg-[#FFD700]"
            />
            <div
              className="-z-10 pointer-events-none absolute left-0 top-0 h-[95%] w-px bg-[#262626]"
            />
          </div>
        </div>

        {/* Right: card (pinned on desktop) */}
        <div id="our-services-card" className="relative w-full max-w-[378px] mx-auto aspect-[378/478] overflow-hidden rounded-3xl transform-gpu shadow-2xl border border-white/10">
          {
            imagesList?.map((image, index) =>
              <Image
                key={index}
                src={image}
                alt={`BatZone ${index}`}
                id={`our-services-card-${index + 1}`}
                width={378}
                height={478}
                priority
                className={`w-full h-full object-cover select-none absolute inset-0 transform-gpu ${index === 0 ? 'z-50' : 'z-0 opacity-0'}`}
              />
            )
          }
        </div>
      </div>

      <OurServicesSwiper imagesList={imagesList} services={services} />
    </MaxWidth>
  );
}

export default OurServicesMarkup;
