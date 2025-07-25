"use client"

import { motion } from 'framer-motion';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ScrollControlledVideo } from './HeroComponents/VideoSection';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function HeroWithScrollVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {

        const videoEle = videoRef.current;

        const observer = new IntersectionObserver(([entry]) => {
            if (videoEle) {
                if (entry.isIntersecting) {
                    videoEle.play();
                } else {
                    videoEle.pause();
                }
            }
        }, { threshold: 0.1 })
        if (videoEle) {
            observer.observe(videoEle)
        }

        return () => {
            if (videoEle) {
                observer.unobserve(videoEle)
            }
        }
    }, []);

    return (
        <>
            <section className=" snap-start font-[Manrope] z-1 relative pt-[30vh] relative bg-black text-slate-50 min-h-screen">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="flex flex-col justify-center items-center mb-5 text-center"
                >
                    <p className="text-sm text-white/80">Performance in motion</p>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center text-2xl md:text-4xl font-thin leading-tight">

                    <strong>
                        Soft Trims and NVH Solutions
                    </strong>
                    <br />
                    for seamless rides
                </motion.h1>
                <video
                    src="/group-assets/hero-bg.mp4"
                    playsInline
                    loop
                    ref={videoRef}
                    autoPlay
                    muted
                    title='Robots doing work'
                    className='absolute w-full h-full opacity-50 top-0 object-cover -z-1'
                ></video>
            </section>
            <section className=" snap-start font-[Manrope] pt-[30vh] relative bg-black text-slate-50 min-h-screen">
                <motion.h1
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="lg:sticky z-10 top-5 text-center text-2xl md:text-4xl font-normal leading-tight mb-10">
                    Evolving the drive with <strong>360-degree</strong><br /> nonwoven solutions
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className=" h-[30vh] flex flex-col justify-center items-center text-center"
                >
                    <p className="text-sm text-gray-600">Click anywhere for next slide (Prototype)</p>
                </motion.div>
                <ScrollControlledVideo />
            </section>
        </>

    );
}



