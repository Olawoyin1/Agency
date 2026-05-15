import React from 'react';
import { motion } from 'framer-motion';

export default function Process() {
    const steps = [
        { step: "01", title: "Strategic Discovery", desc: "Understanding context, business goals, and severe constraints before writing a single line of code." },
        { step: "02", title: "UX Architecture", desc: "Mapping the optimal structure, wireframes, and flows for friction-less scaling and conversion." },
        { step: "03", title: "Agile Execution", desc: "Pixel-perfect implementation using industry-leading frameworks like Next.js and Tailwind." },
        { step: "04", title: "Testing & Handover", desc: "Rigorous QA testing across environments, performance audits, and seamless client handover." }
    ];

    return (
        <section id="process" className="py-24 md:py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-[#FAF9F6]">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                <div className="lg:col-span-5">
                    <h2 className="text-5xl md:text-[80px] font-bold tracking-tighter mb-5 md:mb-10 text-[#1A1A1A] leading-[0.9]">Process.</h2>
                    <p className="text-base md:text-xl text-[#7A7A7A] font-light mb-10 md:mb-20 text-balance leading-relaxed">A refined methodology focused on ruthless simplicity and high-impact engineering that scales.</p>

                    <div className="flex flex-col gap-12 bg-white p-8 md:p-12 rounded-[40px] border border-[#EAE8E3] shadow-sm">
                        {[
                            { title: "Pure Logic", desc: "No templates. No bloat. Just lean, high-fidelity code engineered for growth." },
                            { title: "Strategic Velocity", desc: "Rapid iterations backed by deep architectural thinking and context." },
                            { title: "Visionary Depth", desc: "Building experiences that align with your long-term roadmap and scale." }
                        ].map((item, idx) => (
                            <div key={idx} className="flex flex-col gap-3">
                                <div className="text-xl font-bold tracking-tight text-[#1A1A1A]">{item.title}</div>
                                <div className="text-sm text-[#7A7A7A] font-light leading-relaxed">{item.desc}</div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="lg:col-span-7 flex flex-col gap-14 lg:pt-4">
                    {steps.map((process, i) => (
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            key={i}
                            className="flex gap-8 group"
                        >
                            <div className="pt-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#1A1A1A] group-hover:scale-[2.5] transition-transform duration-500" />
                            </div>
                            <div className="border-b border-[#EAE8E3] pb-14 flex-1">
                                <h3 className="text-3xl font-bold tracking-tight mb-4 text-[#1A1A1A] group-hover:text-[#7A7A7A] transition-colors">{process.title}</h3>
                                <p className="text-[#7A7A7A] text-lg font-light leading-relaxed max-w-xl">{process.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
