import Image from "next/image";

function Loading() {
  return (
    <div
      id="app-global-loading-page"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-50/95 backdrop-blur-md transition-colors duration-300"
    >
      <div className="flex flex-col items-center gap-6 p-8 rounded-3xl bg-white shadow-xl border border-slate-100 max-w-sm w-full mx-4 text-center">
        {/* Brand Logo */}
        <div id="app-loading-logo-container" className="relative flex items-center justify-center py-2">
          <Image
            src="/logo.png"
            alt="Bat Zone"
            width={160}
            height={44}
            priority
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Loading Spinner & Line */}
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="relative w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="absolute top-0 bottom-0 left-0 w-1/2 bg-blue-600 rounded-full animate-pulse" />
          </div>
          <p className="text-xs font-medium tracking-wider text-slate-500 uppercase">
            Loading Bat Zone...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loading;
