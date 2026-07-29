import LedWallGsap from "./ledwall/ledwall-gsap";
import LedWallMarkup from "./ledwall/ledwall-markup";

export default function LedWallIndex() {
    return (
        <LedWallGsap>
            <LedWallMarkup />
        </LedWallGsap>
    );
}
