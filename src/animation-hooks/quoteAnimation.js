import { useEffect } from "react";
import { gsap } from "gsap";

export default function quoteAnimation({ quoteRef }) {
  useEffect(() => {
    if (quoteRef.current) {
      gsap.to(quoteRef.current, {
        y: -35,
        x: -600,
        zIndex: 1,
        opacity: 1,
        fontSize: 40,
        duration: 2.1,
        delay: 2,
      });
    }
  }, [quoteRef]);
}
