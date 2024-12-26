import { useEffect } from "react";
import { gsap } from "gsap";

export default function heroAnimation({ roseRef, h1Ref, pRef, shadowRef }) {
  useEffect(() => {
    if (h1Ref.current) {
      gsap.to(h1Ref.current, {
        y: -35,
        x: -600,
        zIndex: 1,
        opacity: 1,
        fontSize: 40,
        duration: 2.1,
        delay: 2,
      });
    }
    if (roseRef.current) {
      gsap.to(roseRef.current, {
        y: -125,
        x: -940,
        opacity: 1,
        width: 80,
        duration: 2,
        delay: 2,
      });
    }
    if (pRef.current) {
      gsap.to(pRef.current, {
        y: -470,
        x: -600,
        opacity: 1,
        fontSize: 10,
        duration: 2.2,
        delay: 2,
      });
    }
    if (shadowRef.current) {
      gsap.from(shadowRef.current, {
        scale: 1,
        opacity: 0,
        duration: 1.1,
        delay: 0.1,
      });
    }
  }, [roseRef, h1Ref, pRef]);
}
