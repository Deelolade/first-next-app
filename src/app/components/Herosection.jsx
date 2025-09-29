"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import imageOne from "../../../public/images/Herosection-one.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

const Herosection = () => {
 const heroText = useRef();
 const heroImage = useRef();

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: heroText.current,
    start: "top center",
    end: "bottom center",
    scrub: true,
    markers: true,
    pin: true,
    pinSpacing: true,
  },
});

useGSAP(() => {
  let ctx = gsap.context(() => {
    // Keep hero-text centered & fixed
    gsap.set(".hero-text", {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    });

    // Animate image-one
    tl.from(".image-one", {
      scale: 1,
      ease: "none",
      duration: 1,
    }).to(".image-one", {
      scale: 1.8,
      ease: "none",
      duration: 1,
    })
     .to(heroText.current.querySelectorAll( 'h1, h3, p'), {
      color: "#ffffff", // change to white (or any color you want)
      duration: 1,
      ease: "none",
  }, '<');

});
  return () => ctx.revert(); // cleanup
})
  return (
    <>
      <main>
        <section className="min-h-screen flex justify-center items-center ">
          <div className="max-w-6xl gap-0 h-[316px] hero-text z-40 bg-red-200" ref={heroText}>
            <h1 className="text-[150px] font-semibold text-black leading-[120px]">
              Work. Life.
            </h1>
            <div className="relative">
              <h3 className=" absolute right-[-8rem] text-7xl font-normal text-right text-black">
                Redefined
              </h3>
            </div>
            <div className="mt-20">
              <p className="text-black font-semibold text-lg text-center">
                Workspaces your team looks forward to. <br />
                Lifestyle venues that capture the essence of the future.
              </p>
            </div>
          </div>
        </section>
        <section className="min-h-screen h-[200vh] flex justify-center items-start ">
          <div className="max-w-fit">
            <Image
              src={imageOne}
                alt="image-one"
                ref={heroImage}
              className="image-one max-w-[100vw] w-screen h-[440px] object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default Herosection;
