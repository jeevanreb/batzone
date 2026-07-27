import MetricsGsap from "./metrics/metrics-gsap";
import MetricsMarkup from "./metrics/metrics-markup";

export default function MetricsIndex() {
    return (
        <MetricsGsap>
            <MetricsMarkup />
        </MetricsGsap>
    );
}
