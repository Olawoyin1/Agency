import React, { useState, useEffect } from 'react';

export default function LocationTag({ city = "Lagos", country = "Nigeria", timezone = "WAT" }) {
    const [isHovered, setIsHovered] = useState(false);
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(
                new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })
            );
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative flex items-center gap-3 rounded-full border border-[#EAE8E3] bg-[#F3F3F1] px-4 py-2.5 hover:border-[#1A1A1A]/20 hover:bg-white transition-all duration-500"
        >
            {/* Live pulse */}
            <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>

            {/* Text swap */}
            <div className="relative flex items-center overflow-hidden h-5 w-[120px]">
                <span
                    className="absolute text-sm font-bold text-[#1A1A1A] whitespace-nowrap transition-all duration-500"
                    style={{ transform: isHovered ? "translateY(-100%)" : "translateY(0)", opacity: isHovered ? 0 : 1 }}
                >
                    {city}, {country}
                </span>
                <span
                    className="absolute text-sm font-bold text-[#1A1A1A] whitespace-nowrap transition-all duration-500"
                    style={{ transform: isHovered ? "translateY(0)" : "translateY(100%)", opacity: isHovered ? 1 : 0 }}
                >
                    {currentTime} {timezone}
                </span>
            </div>

            {/* Arrow */}
            <svg
                className="h-3 w-3 text-[#7A7A7A] flex-shrink-0 transition-all duration-300"
                style={{ transform: isHovered ? "translateX(2px) rotate(-45deg)" : "translateX(0)", opacity: isHovered ? 1 : 0.5 }}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </button>
    );
}
