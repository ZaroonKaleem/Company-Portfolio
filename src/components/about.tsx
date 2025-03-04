import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-lg uppercase md:text-[18px]">
          Welcome to Sterniz
        </p>

        <AnimatedTitle containerClass="mt-5 !text-black text-center">
          {
            "Cre<b>a</b>te a digital t<b>w</b>in <br /> of your existing <br /> security System"
            // "Disc<b>o</b>ver the world&apos;s l<b>a</b>rgest <br /> shared adventure"
          }
        </AnimatedTitle>

        <div className="about-subtext">
          <p>Increase your security</p>
          <p>In Today's ever-evolving landscape of threats, ensuring the safety of your assets is paramount. </p>
             {/* Our dedicated security solutions are designed to enhance your protection at every level.</p> */}
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/img/about.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
       <br /> 
    </div>
  );
};
