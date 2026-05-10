import React from 'react';
import { motion } from 'framer-motion';

export default function Marquee() {
    const words = [
        "Strategy",
        "Web Development",
        "Mobile Development",
        "Product Design",
        "Growth",
        "Branding",
        "App Development"
    ];

    return (
        <div className="w-full overflow-hidden border-b border-[#EAE8E3] py-6 bg-white relative z-[40]">
            <motion.div
                animate={{ x: [0, -2000] }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="flex gap-12 whitespace-nowrap items-center text-[13px] font-bold tracking-[0.2em] uppercase text-[#7A7A7A]"
            >
                {[...Array(12)].map((_, i) => (
                    <React.Fragment key={i}>
                        {words.map((word, wIdx) => (
                            <React.Fragment key={`${i}-${wIdx}`}>
                                <span className="hover:text-[#1A1A1A] transition-colors cursor-default">{word}</span>
                                <span className="w-1.5 h-1.5 rounded-full bg-[#EAE8E3]" />
                            </React.Fragment>
                        ))}
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
}
