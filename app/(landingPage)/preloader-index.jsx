import PreloaderGsap from "./preloader/preloader-gsap";
import PreloaderContent from "./preloader/preloader-content";

function PreloaderIndex() {
  return (
    <PreloaderGsap>
      <PreloaderContent />
    </PreloaderGsap>
  );
}

export default PreloaderIndex;
