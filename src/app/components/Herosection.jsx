"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import imageOne from "../../../public/images/Herosection-one.webp";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerPlugin(ScrollTrigger);
import { useGSAP } from "@gsap/react";

const Herosection = () => {
    const heroText = useRef();
    const heroImage = useRef();

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: heroImage.current,
                start: ' 100% 50%',
                end: ' 30% 60%',
                scrub: true,
                markers: true,
                pin: heroText.current,
                pinSpacing: false,
            }
        })
        let ctx = gsap.context(()=>{
            tl.to(heroImage.current,{
                scale:1,
                ease: 'none'
            })
            .to(heroText.current.querySelectorAll('p')[1],{
                color: 'white',
                duration: 3,
                ease: 'none'
            },0).to(heroText.current.querySelectorAll('p')[0],{
                color: 'white',
                duration: 1,
                ease: 'none'
            })
            .to(heroText.current.querySelectorAll('h3'),{
                color: 'white',
                // duration: 4,
                ease: 'none'
            }).to(heroText.current.querySelectorAll('h1'),{
                color: 'white',
                // duration: 4,
                ease: 'none'
            })
            
        })
        return ()=> ctx.revert();
    })

    return (
        <>
            <main>
                <section className="min-h-screen flex justify-center items-center ">
                    <div
                        className="max-w-6xl gap-0 h-[316px] mt-28 hero-text z-40 b g-red-200"
                        ref={heroText}
                    >
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
                                Workspaces your team looks forward to. 
                            </p>
                             <p className="text-black font-semibold text-lg text-center">
                                Lifestyle venues that capture the essence of the future.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="min-h-screen  flex justify-center items-start ">
                    <div className="max-w-fit">
                        <Image
                            src={imageOne}
                            alt="image-one"
                            ref={heroImage}
                            className="image-one max-w-[100vw] bg-blue-400 w-screen h-[440px] object-cover"
                        />
                    </div>
                </section>
                <section className="min-h-screen  flex justify-center items-start "></section>
            </main>
        </>
    );
};

export default Herosection;
