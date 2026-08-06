import React from 'react'
import Image from 'next/image'
import PhoneImg from '@/assets/landingPage/hero-section/MOBILE3.png'
import Auction from '@/assets/landingPage/hero-section/AUCTION.png'
import Bat from '@/assets/landingPage/hero-section/BAT.png'



const heroContentImg = () => {
  return (
<div id="hero-showcase" className="relative w-full -mt-5 flex justify-center items-end min-h-[min(60vh,420px)] sm:min-h-[500px] lg:min-h-[600px]">

      {/* ── Phone ── */}
      <div id="hero-phone" className="relative z-10 w-[min(60vw,270px)] sm:w-[270px] md:w-[400px] lg:w-[450px]">
        <Image
          src={PhoneImg}
          alt="BatZone Transfer Screen"
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ── Secure Transactions Card (Left Top) ── */}
      <div
id="hero-card-secure"
        className="absolute z-20 left-2 sm:left-[5%] md:left-[10%] lg:left-[12%] top-[70%] sm:top-[90%] md:top-[20%] lg:top-[15%] w-[min(34vw,170px)] sm:w-[170px] md:w-[200px] lg:w-[300px]"
      >
        <Image
          src={Auction}
          alt="Secure Transactions"
          className="w-full h-auto object-contain drop-shadow-lg"
        />
      </div>

      {/* ── API First Card (Left Bottom) ── */}
      {/* <div
              id="hero-card-api"
              className="absolute z-20 left-2 sm:left-[5%] md:left-[10%] lg:left-[12%] top-[34%] sm:top-[32%] lg:top-[30%] w-[140px] sm:w-[170px] md:w-[200px] lg:w-[260px]"
            >
              <Image
                src={ApiFirstImg}
                alt="API First"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div> */}

      {/* ── Payment Gateway Card (Left Bottom Corner) ── */}
      {/* <div
              id="hero-card-payment"
              className="absolute z-20 left-2 sm:left-[5%] md:left-[10%] lg:left-[12%] top-[65%] sm:top-[57%] lg:top-[45%] w-[150px] sm:w-[180px] md:w-[220px] lg:w-[260px]"
            >
              <Image
                src={PaymentGatewayImg}
                alt="Payment Gateway"
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div> */}

      {/* ── Fast Integration Card (Right Top) ── */}
      {/* <div
              id="hero-card-fast"
              className="absolute z-20 right-2 sm:right-[5%] md:right-[8%] lg:right-[9%] top-[18%] sm:top-[15%] lg:top-[9%] w-[150px] sm:w-[200px] md:w-[240px] lg:w-[350px] "
            >
              <Image
                src={FastIntegrationImg}
                alt="Fast Integration"
                className="w-full h-auto object-contain drop-shadow-lg"
              />
            </div> */}

      {/* ── Enterprise Ready Card (Right Bottom) ── */}
      <div
id="hero-card-enterprise"
        className="absolute z-20 right-2 sm:right-[5%] md:right-[8%] lg:right-[9%] top-[70%] sm:top-[90%] md:top-[60%] lg:top-[40%] w-[min(30vw,150px)] sm:w-[150px] md:w-[200px] lg:w-[300px] "
      >
        <Image
          src={Bat}
          alt="Enterprise Ready"
          className="w-full h-auto object-contain drop-shadow-xl"
        />
      </div>
    </div>
  )
}

export default heroContentImg