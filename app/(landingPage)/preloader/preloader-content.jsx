import Image from "next/image";
import MaxWidth from "@/components/MaxWidth";

function PreloaderContent() {
  return (
    <div
      id="preloader-section-wrapper"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      {/* Background Decorative Rings */}
      <div
        id="preloader-section-bg"
        className="absolute inset-0 pointer-events-none overflow-hidden flex items-center justify-center"
      >
        <div className="w-[600px] h-[600px] rounded-full bg-blue-50/60 blur-3xl opacity-70" />
        <div className="w-[300px] h-[300px] rounded-full bg-indigo-50/80 blur-2xl opacity-60" />
      </div>

      <MaxWidth id="preloader-section-maxwidth" center={true}>
        <div
          id="preloader-section-content"
          className="relative flex flex-col items-center justify-center px-6 py-10 text-center mx-auto max-w-lg"
        >
          {/* Logo */}
          <div
            id="preloader-section-logo"
            className="mb-6 flex items-center justify-center p-3 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm"
          >
            <Image
              src="/logo.png"
              alt="Bat Zone Logo"
              width={180}
              height={48}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </div>

          {/* Heading */}
          <h2
            id="preloader-section-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-2"
          >
            Bat Zone
          </h2>
          <p
            id="preloader-section-subheading"
            className="text-sm sm:text-base font-medium text-slate-500 mb-8"
          >
            Gear Up. Play On. Win Together
          </p>

          {/* Counter Display Box */}
          <div
            id="preloader-section-counter-box"
            className="flex items-baseline justify-center gap-1 mb-6"
          >
            <span
              id="preloader-section-counter"
              className="text-5xl sm:text-6xl md:text-7xl font-black text-blue-600 tracking-tighter"
            >
              0%
            </span>
          </div>

          {/* Progress Loading Line Track */}
          <div
            id="preloader-section-line-track"
            className="w-full max-w-xs sm:max-w-md h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200/60 shadow-inner mb-4"
          >
            <div
              id="preloader-section-line-fill"
              className="h-full w-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 rounded-full transition-all duration-75 ease-out shadow-sm"
            />
          </div>

          {/* Status Indicator Text */}
          <p
            id="preloader-section-status"
            className="text-xs sm:text-sm font-semibold tracking-widest text-slate-400 uppercase"
          >
            INITIALIZING BAT ZONE...
          </p>
        </div>
      </MaxWidth>
    </div>
  );
}

export default PreloaderContent;
