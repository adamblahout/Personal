import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "../context/active-section-context";
import { useEffect } from "react";
import type { SectionName } from "./types";

export function useSectionInView(SectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(SectionName);
    }
  }, [inView, setActiveSection, SectionName, timeOfLastClick]);
  return { ref };
}
