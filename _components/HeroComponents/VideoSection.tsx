"use client"

import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";

// Register ScrollTrigger
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const textData: Record<string, { title: string; body: string }> = {
    complete: {
        title: "Passenger vehicles",
        body: "Revving up Nonwoven innovation from interior to exterior.",
    },
    front: {
        title: "Commercial vehicles",
        body: "Advancing Nonwoven engineering for heavy-duty vehicles.",
    },
    cabin: {
        title: "Passenger vehicles",
        body: "Revving up Nonwoven innovation from interior to exterior.",
    },
    trunk: {
        title: "Passenger vehicles",
        body: "Revving up Nonwoven innovation from interior to exterior.",
    },
    exterior: {
        title: "Passenger vehicles",
        body: "Revving up Nonwoven innovation from interior to exterior.",
    },
};


export const ScrollControlledVideo = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoDuration, setVideoDuration] = useState(1);
    const [currentPart, setCurrentPart] = useState("complete"); // complete, front, etc.
    const [prevIndex, setPrevIndex] = useState(0);

    const videoSources: Record<string, {
        videoSrc: string,
        imgSrc: string
    }> = {
        complete: {
            videoSrc: "/group-assets/commercial-complete.mp4",
            imgSrc: '/group-assets/complete-body.png'
        },
        front: {
            videoSrc: "/group-assets/commercial-front.mp4",
            imgSrc: '/group-assets/front.png'

        },
        cabin: {
            videoSrc: "/group-assets/commercial-cabin.mp4",
            imgSrc: '/group-assets/front.png'

        },
        trunk: {
            videoSrc: "/group-assets/commercial-trunk.mp4",
            imgSrc: '/group-assets/trunk.png'
        },
        exterior: {
            videoSrc: "/group-assets/commercial-exterior.mp4",
            imgSrc: '/group-assets/exterior.png'

        },
    };

    useEffect(() => {
        const video = videoRef.current;
        const section = sectionRef.current;
        if (!video || !section) return;

        const ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: section,
                start: "top top",
                end: () => `+=${ window.innerHeight * 4 }`,
                scrub: true,
                pin: true,
                onUpdate: (self) => {
                    if (video.readyState >= 2) {
                        const scrollProgress = self.progress;
                        video.currentTime = scrollProgress * video.duration;
                    }
                },
            });
        }, section);

        return () => ctx.revert();
    }, [videoDuration, currentPart]);

    const onLoadedMetadata = () => {
        if (videoRef.current?.duration) {
            setVideoDuration(videoRef.current.duration);
        }
    };

    useEffect(() => {
        setPrevIndex(currentIndex);
    }, [currentPart]);


    const { title, body } = textData[currentPart];
    const parts = Object.keys(videoSources);

    const currentIndex = parts.indexOf(currentPart);
    const prevPart = currentIndex > 0 ? parts[currentIndex - 1] : null;
    const nextPart = currentIndex < parts.length - 1 ? parts[currentIndex + 1] : null;
    const direction = currentIndex > prevIndex ? 1 : -1;

    return (
        <section ref={sectionRef} className="w-[100%] h-screen font-[Manrope]  bg-black text-white">
            <div className="h-full flex flex-col justify-center lg:flex-row ">
                {/* Left Section (Text Content) */}
                <div className="w-[90%] lg:w-[45%] flex flex-col pl-10 justify-center relative overflow-hidden">
                    <div className="relative flex flex-col justify-center h-full pl-10">
                        <div className="absolute left-0 top-[50%] translate-y-[-50%] h-[50%] w-[2px] bg-white/20">
                            <div
                                style={{ height: `${ (Object.keys(videoSources).indexOf(currentPart) + 1) * (100 / Object.keys(videoSources).length) }%` }}
                                className="w-full bg-white transition-all rounded-md duration-700"
                            />
                        </div>

                        <div className='h-[50%] flex flex-col justify-center gap-y-10'>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentPart}
                                    initial={{ y: direction > 0 ? 40 : -40, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    exit={{ y: direction > 0 ? -40 : 40, opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="h-[50%] flex flex-col justify-center gap-y-10"
                                >
                                    {prevPart && textData[prevPart] && (
                                        <div
                                            onClick={() => setCurrentPart(prevPart)}
                                            className=" lg:block hidden cursor-pointer"
                                        >
                                            <h2 className="text-xl font-medium text-white/40 mb-2">
                                                {textData[prevPart].title}
                                            </h2>
                                            <p className="text-sm text-white/30">
                                                {textData[prevPart].body}
                                            </p>
                                        </div>
                                    )}

                                    <div>
                                        <h2 className="text-xl font-medium text-white/90 mb-2">{title}</h2>
                                        <p className="text-sm text-white/50">{body}</p>
                                    </div>

                                    {nextPart && textData[nextPart] && (
                                        <div
                                            onClick={() => setCurrentPart(nextPart)}
                                            className=" lg:block hidden cursor-pointer"
                                        >
                                            <h2 className="text-xl font-medium text-white/40 mb-2">
                                                {textData[nextPart].title}
                                            </h2>
                                            <p className="text-sm text-white/30">
                                                {textData[nextPart].body}
                                            </p>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Right Section (Video) */}
                <div className="w-full lg:w-[55%] border-solid border-red-200 flex flex-col items-center justify-center p-4">
                    <div className="min-w-full min-h-[50vh] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentPart}
                                initial={{ y: 40, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -40, opacity: 0 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                            >
                                <video
                                    ref={videoRef}
                                    onLoadedMetadata={onLoadedMetadata}
                                    src={videoSources[currentPart].videoSrc}
                                    muted
                                    preload="auto"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2 ">
                        {Object.keys(videoSources).map((part) => (
                            <div key={part}
                                onClick={() => setCurrentPart(part)}
                                className={`flex flex-col cursor-pointer hover:scale-105 ${ currentPart === part ? "scale-105" : "scale-90 opacity-70" } justify-center  items-center`}>
                                <Image
                                    height={60}
                                    width={60}
                                    src={videoSources[part].imgSrc}
                                    alt="VideoParts"
                                />
                                <p
                                    className={`px-4 py-1 text-xs transition-all duration-200 ${ currentPart === part ? "text-white" : "text-white/50" }`} >
                                    {part.charAt(0).toUpperCase() + part.slice(1)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
