"use client"

import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTranslate } from "react-icons/bs";
import Image from "next/image";

export default function Header() {
    const [language, setLanguage] = useState("ENG");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "ENG" ? "हिंदी" : "ENG"));
    };

    return (
        <header className="bg-[#f8fafe] font-[Manrope] px-6 md:px-10 py-4 w-full">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-left text-blue-700 font-bold text-xl leading-tight">
                    <Image
                        src={'/full-logo.png'}
                        height={100}
                        width={120}
                        alt="supreme group"
                    />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 text-sm">
                    <button className="bg-sky-400 hover:bg-sky-500 transition-colors text-black px-5 py-2 rounded-full font-medium shadow-sm">
                        Contact Us
                    </button>

                    <FaLinkedinIn className="lg:block hidden" color="black" />

                    <button
                        onClick={toggleLanguage}
                        className="items-center lg:flex hidden gap-1 text-black font-medium hover:opacity-75 transition-opacity"
                    >
                        <BsTranslate /> <span>{language}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
