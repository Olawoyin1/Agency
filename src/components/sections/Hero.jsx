import React, { useEffect, useRef, useState } from 'react';
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

const cards = [
    { img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop", title: "Creative solutions", rotate: -4 },
    { img: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=900&auto=format&fit=crop", title: "Campaign concepts", rotate: 7 },
    { img: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=900&auto=format&fit=crop", title: "Digital craftsman", rotate: -8 },
    { img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=900&auto=format&fit=crop", title: "Brand architecture", rotate: 5 },
    { img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=900&auto=format&fit=crop", title: "System design", rotate: -6 },
    { img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=900&auto=format&fit=crop", title: "Web engineering", rotate: 9 },
];

// Slot positions for the 5 positions: far-left, left, center, right, far-right
const SLOTS = {
    '-3': { x: -1200, y: 160, rotate: 0, scale: 0.50, opacity: 0 },
    '-2': { x: -800, y: 80, rotate: 0, scale: 0.68, opacity: 0.40 },
    '-1': { x: -390, y: 28, rotate: 0, scale: 0.84, opacity: 1 },
    '0': { x: 0, y: 0, rotate: 0, scale: 1.00, opacity: 1 },
    '1': { x: 390, y: 28, rotate: 0, scale: 0.84, opacity: 1 },
    '2': { x: 800, y: 80, rotate: 0, scale: 0.68, opacity: 0.40 },
    '3': { x: 1200, y: 160, rotate: 0, scale: 0.50, opacity: 0 },
};

function lerp(a, b, t) { return a + (b - a) * t; }

export default function Hero() {
    const offsetRef = useRef(0);
    const [offset, setOffset] = useState(0);
    const rafRef = useRef(null);

    useEffect(() => {
        const tick = () => {
            offsetRef.current = (offsetRef.current + 0.004) % cards.length;
            setOffset(offsetRef.current);
            rafRef.current = requestAnimationFrame(tick);
        };
        rafRef.current = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(rafRef.current);
    }, []);

    const cardStyle = (index) => {
        const n = cards.length;
        let diff = ((index - offset) % n + n) % n;
        if (diff > n / 2) diff -= n;
        const abs = Math.abs(diff);
        if (abs > 3.1) return { position: 'absolute', opacity: 0, pointerEvents: 'none' };

        const lo = Math.floor(diff), hi = lo + 1, t = diff - lo;
        const a = SLOTS[Math.max(-3, Math.min(3, lo)).toString()];
        const b = SLOTS[Math.max(-3, Math.min(3, hi)).toString()];
        if (!a || !b) return { position: 'absolute', opacity: 0, pointerEvents: 'none' };

        return {
            position: 'absolute',
            width: '360px',
            transform: `translateX(${lerp(a.x, b.x, t)}px) translateY(${lerp(a.y, b.y, t)}px) rotate(${lerp(a.rotate, b.rotate, t)}deg) scale(${lerp(a.scale, b.scale, t)})`,
            zIndex: Math.round(50 - abs * 12),
            opacity: lerp(a.opacity, b.opacity, t),
            willChange: 'transform, opacity',
            pointerEvents: abs > 2.1 ? 'none' : 'auto',
        };
    };

    return (
        <section className="relative pt-48 pb-0 md:pt-64 max-w-full w-full min-h-[100vh] flex flex-col items-center bg-[#FAF9F6] overflow-hidden">

            {/* ── Background Ambience ─────────────────────────────── */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.035]"
                style={{ backgroundImage: 'radial-gradient(#1A1A1A 1.5px, transparent 1.5px)', backgroundSize: '38px 38px' }} />

            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <motion.div animate={{ x: [0, 80, 0], y: [0, -50, 0] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-[10%] left-[10%] w-[600px] h-[600px] bg-[#EAE8E3] rounded-full blur-[120px] opacity-50 mix-blend-multiply" />
                <motion.div animate={{ x: [0, -60, 0], y: [0, 60, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-[30%] right-[5%] w-[700px] h-[700px] bg-[#D1D1C7] rounded-full blur-[140px] opacity-35 mix-blend-multiply" />
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <motion.svg className="absolute top-[32%] left-0 w-full h-[200px] opacity-[0.08]"
                    viewBox="0 0 1000 200" preserveAspectRatio="none"
                    initial={{ strokeDasharray: 2000, strokeDashoffset: 2000 }}
                    animate={{ strokeDashoffset: 0 }} transition={{ duration: 5, ease: "easeOut" }}>
                    <path d="M0,100 C250,0 750,200 1000,100" fill="none" stroke="#1A1A1A" strokeWidth="1" />
                </motion.svg>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-36 top-24 w-[400px] h-[400px] border border-[#EAE8E3] rounded-full opacity-50" />
                <motion.div animate={{ rotate: -360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                    className="absolute -left-24 bottom-16 w-72 h-72 border border-[#EAE8E3] rounded-full opacity-40" />
                <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[22%] left-[24%] opacity-25">
                    <Plus className="w-5 h-5 text-[#1A1A1A]" />
                </motion.div>
                <motion.div animate={{ y: [0, 18, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                    className="absolute bottom-[28%] right-[28%] opacity-25">
                    <Plus className="w-5 h-5 text-[#1A1A1A]" />
                </motion.div>
            </div>

            {/* ── Hero Text ───────────────────────────────────────── */}
            <div className="w-full relative z-10 px-6">
                <motion.div initial="hidden" animate="visible" variants={staggerContainer}
                    className="max-w-[1400px] mx-auto text-center flex flex-col items-center">

                    <motion.div variants={fadeUp}
                        className="mb-8 px-5 py-2.5 rounded-full border border-black/5 bg-white/70 backdrop-blur-md text-[11px] font-bold tracking-[0.2em] text-[#7A7A7A] uppercase inline-flex items-center gap-3 shadow-md shadow-black/5">
                        <span className="w-2 h-2 rounded-full bg-[#1A1A1A]" /> Digital Agency
                    </motion.div>

                    <motion.h1 variants={fadeUp}
                        className="text-6xl md:text-[130px] font-bold leading-[0.85] tracking-tighter mb-8 text-[#1A1A1A]">
                        Digital perfection.
                    </motion.h1>

                    <motion.p variants={fadeUp}
                        className="text-lg md:text-2xl text-[#7A7A7A] mb-14 leading-relaxed font-light max-w-3xl text-balance">
                        We design and build minimalist digital experiences that function beautifully and drive elegant growth for visionary brands.
                    </motion.p>

                    <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-[#1A1A1A] text-white font-bold tracking-[0.1em] text-[14px] uppercase rounded-full hover:bg-black transition-colors flex items-center justify-center gap-3 shadow-xl shadow-black/10">
                            Discuss a Project <ArrowUpRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                            className="px-12 py-5 bg-white/50 backdrop-blur-md text-[#1A1A1A] border border-[#EAE8E3] font-bold tracking-[0.1em] text-[14px] uppercase rounded-full hover:border-[#1A1A1A] hover:bg-white transition-all flex items-center justify-center gap-3 shadow-sm">
                            <Play className="w-4 h-4" /> View Showreel
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* ── Fan Carousel ────────────────────────────────────── */}
            <div className="relative mt-20 md:mt-28 w-full h-[420px] md:h-[500px] flex items-start justify-center flex-shrink-0 z-20">
                {cards.map((card, i) => (
                    <div key={i} style={cardStyle(i)}>
                        {/* Polaroid */}
                        <div className="bg-white rounded-2xl overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.14)] select-none">
                            <div style={{ aspectRatio: '4/3', overflow: 'hidden' }}>
                                <img src={card.img} alt={card.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy" draggable={false} />
                            </div>
                            <div className="bg-white px-6 py-5">
                                <p className="text-center font-bold text-xl text-[#080808] tracking-tight">{card.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Edge fade masks */}
                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#FAF9F6] to-transparent z-30 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#FAF9F6] to-transparent z-30 pointer-events-none" />
            </div>
        </section>
    );
}
