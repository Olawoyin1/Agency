import React from 'react';
import { motion } from 'framer-motion';

export default function Manifesto() {
    return (
        <div
            className="relative bg-[#1A1A1A] pt-24 pb-24 md:pt-60 md:pb-60 -mt-20 z-20"
            style={{ clipPath: "ellipse(120% 100% at 50% 100%)" }}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center text-white">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1 }}
                    className="text-4xl md:text-6xl lg:text-[80px] font-light leading-tight tracking-tight text-[#7A7A7A] max-w-6xl mx-auto"
                >
                    <span className="text-white font-bold">We believe</span> that digital products shouldn't just exist—they should <span className="text-white font-bold">perform</span>. By removing bloated design, we build tools hyper-focused on <span className="text-white font-bold">conversion</span> and <span className="text-white font-bold">scale</span>.
                </motion.h2>
            </div>
        </div>
    );
}
