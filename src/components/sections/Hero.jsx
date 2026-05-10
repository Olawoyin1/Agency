import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Plus } from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Hero() {
    return (
        <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 px-6 md:px-12 max-w-full w-full min-h-[95vh] flex items-center bg-[#FAF9F6] overflow-hidden">

            {/* --- IMMERSIVE BACKGROUND ELEMENTS --- */}

            {/* 1. Dotted Technical Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1A1A1A 2px, transparent 2px)', backgroundSize: '40px 40px' }} />

            {/* 2. Massive Floating Gradient Blurs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 80, 0], y: [0, -50, 0] }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] left-[15%] w-[500px] h-[500px] bg-[#EAE8E3] rounded-full blur-[100px] opacity-60 mix-blend-multiply"
                />
                <motion.div
                    animate={{ x: [0, -60, 0], y: [0, 60, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-[#D1D1C7] rounded-full blur-[120px] opacity-40 mix-blend-multiply"
                />
            </div>

            {/* 3. Floating Geometric Lines / Shapes */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Floating SVG Sine Wave */}
                <motion.svg
                    className="absolute top-[30%] left-0 w-full h-[200px] opacity-10"
                    viewBox="0 0 1000 200"
                    preserveAspectRatio="none"
                    initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 4, ease: "easeOut" }}
                >
                    <motion.path
                        d="M0,100 C250,0 750,200 1000,100"
                        fill="none"
                        stroke="#1A1A1A"
                        strokeWidth="1"
                    />
                </motion.svg>

                {/* Floating Architectural Rings */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-32 top-32 w-96 h-96 border border-[#EAE8E3] rounded-full opacity-40"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-20 bottom-20 w-64 h-64 border border-[#EAE8E3] rounded-full opacity-40"
                />

                {/* Micro Floating Crosses */}
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[20%] left-[25%] opacity-20">
                    <Plus className="w-5 h-5 text-[#1A1A1A]" />
                </motion.div>
                <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[30%] right-[30%] opacity-20">
                    <Plus className="w-5 h-5 text-[#1A1A1A]" />
                </motion.div>
            </div>


            {/* --- MAIN CONTENT --- */}

            <div className="w-full relative z-10">
                <motion.div
                    initial="hidden" animate="visible" variants={staggerContainer}
                    className="max-w-[1400px] mx-auto text-center flex flex-col items-center"
                >
                    <motion.div variants={fadeUp} className="mb-8 px-5 py-2.5 rounded-full border border-black/5 bg-white/70 backdrop-blur-md text-[11px] font-bold tracking-[0.2em] text-[#7A7A7A] uppercase inline-flex items-center gap-3 shadow-md shadow-black/5">
                        <span className="w-2 h-2 rounded-full bg-[#1A1A1A]" /> Digital Agency
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="text-6xl md:text-[130px] font-bold leading-[0.85] tracking-tighter mb-8 text-[#1A1A1A]">
                        Digital perfection.
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-lg md:text-2xl text-[#7A7A7A] mb-14 leading-relaxed font-light max-w-3xl text-balance">
                        We design and build minimalist digital experiences that function beautifully and drive elegant growth for visionary brands.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-[#1A1A1A] text-white font-bold tracking-[0.1em] text-[14px] uppercase rounded-full hover:bg-black transition-colors flex items-center justify-center gap-3 shadow-xl shadow-black/10"
                        >
                            Discuss a Project <ArrowUpRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-white/50 backdrop-blur-md text-[#1A1A1A] border border-[#EAE8E3] font-bold tracking-[0.1em] text-[14px] uppercase rounded-full hover:border-[#1A1A1A] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-sm"
                        >
                            <Play className="w-4 h-4" /> View Showreel
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
