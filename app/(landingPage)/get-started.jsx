import React from 'react'
import MaxWidth from '@/components/MaxWidth'
import Image from 'next/image'
import CreateAccountImg from '@/assets/landingPage/get-started/create-account.png'
import VerifyBusinessImg from '@/assets/landingPage/get-started/verify-business.png'
import IntegratePaymentImg from '@/assets/landingPage/get-started/integrate-payment.png'
import StartAcceptingImg from '@/assets/landingPage/get-started/start-accepting.png'
import GetStartedGsap from '../(landingPage)/get-started/getStartedGsap'
import GetStartedSwiper from '../(landingPage)/get-started/getStartedSwiper'

const STEPS = [
  { id: 'get-started-step-01', label: 'Step 01' },
  { id: 'get-started-step-02', label: 'Step 02' },
  { id: 'get-started-step-03', label: 'Step 03' },
  { id: 'get-started-step-04', label: 'Step 04' },
]

const CARDS = [
  { id: 'get-started-card-01', src: CreateAccountImg, alt: 'Create Your Account' },
  { id: 'get-started-card-02', src: VerifyBusinessImg, alt: 'Verify Your Business' },
  { id: 'get-started-card-03', src: IntegratePaymentImg, alt: 'Integrate Payment Options' },
  { id: 'get-started-card-04', src: StartAcceptingImg, alt: 'Start Accepting Payments Instantly' },
]

const GetStarted = () => {
  return (
    <>
      <MaxWidth fullRelative={true} className="w-full">

        {/* ══════ Desktop: GSAP pinned section (lg+) ══════ */}
        <div className="hidden lg:block">
          <GetStartedGsap>
            <div id="get-started-pin" className="relative min-h-screen flex flex-col justify-center py-10 px-10">

              {/* ── Section Tagline ── */}
              <p
                id="get-started-tagline"
                className="text-center text-xs sm:text-sm font-bold text-[var(--brand-pink)] tracking-widest uppercase mb-3"
              >
                GET STARTED IN FOUR SIMPLE STEPS
              </p>

              {/* ── Section Heading ── */}
              <h2
                id="get-started-heading"
                className="text-center text-5xl font-bold text-[var(--ink)] leading-tight"
              >
                Quick, easy, and<br />
                completely secure.
              </h2>

              {/* ── Sub-description ── */}
              <p
                id="get-started-description"
                className="text-center text-base text-gray-400 mt-4"
              >
                Start accepting payments and managing transactions in just a few steps.
              </p>

              {/* ── Step Tags ── */}
              <div
                id="get-started-steps"
                className="flex items-center justify-center gap-3 mt-8"
              >
                {STEPS.map((step, index) => (
                  <span
                    key={step.id}
                    id={step.id}
                    className="get-started-step-tag inline-block px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300"
                    style={{
                      backgroundColor: index === 0 ? 'var(--brand-pink)' : '#e5e7eb',
                      color: index === 0 ? '#fff' : '#9ca3af',
                      borderColor: index === 0 ? 'var(--brand-pink)' : '#e5e7eb',
                    }}
                  >
                    {step.label}
                  </span>
                ))}
              </div>

              {/* ── Cards Row (desktop only) ── */}
              <div
                id="get-started-cards"
                className="flex items-stretch justify-center gap-5 mt-12 w-full"
              >
                {CARDS.map((card, index) => (
                  <div
                    key={card.id}
                    id={card.id}
                    className="get-started-card flex-1 min-w-0 max-w-xs rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      className="w-full h-full object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            </div>
          </GetStartedGsap>
        </div>

        {/* ══════ Mobile / Tab: Swiper section (below lg) ══════ */}
        <div className="block lg:hidden py-10 sm:py-14 px-4 sm:px-6">
          {/* Shared heading */}
          <p className="text-center text-xs sm:text-sm font-bold text-[var(--brand-pink)] tracking-widest uppercase mb-3">
            GET STARTED IN FOUR SIMPLE STEPS
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-[var(--ink)] leading-tight">
            Quick, easy, and<br />
            completely secure.
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">
            Start accepting payments and managing transactions in just a few steps.
          </p>

          {/* Swiper with step tags + pagination */}
          <GetStartedSwiper cards={CARDS} />
        </div>
      </MaxWidth>
    </>
  )
}

export default GetStarted