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
                    <h2 className="text-5xl md:text-[80px] font-bold tracking-tighter mb-10 text-[#1A1A1A] leading-[0.9]">Process.</h2>
                    <p className="text-xl text-[#7A7A7A] font-light mb-20 text-balance leading-relaxed">A refined methodology focused on ruthless simplicity and high-impact engineering that scales.</p>

                    <div className="grid grid-cols-2 gap-y-16 gap-x-8 bg-white p-10 rounded-[30px] border border-[#EAE8E3]">
                        {[
                            { num: "50+", label: "Launches" },
                            { num: "$10M", label: "Value Gen" },
                            { num: "99%", label: "Success" },
                            { num: "24/7", label: "Support" }
                        ].map((stat, idx) => (
                            <div key={idx} className="flex flex-col">
                                <div className="text-4xl md:text-5xl font-bold tracking-tighter text-[#1A1A1A] mb-3">{stat.num}</div>
                                <div className="text-[11px] text-[#7A7A7A] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
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
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            key={i}
                            className="flex gap-10 group"
                        >
                            <div className="text-[13px] font-bold text-[#7A7A7A] tracking-[0.2em] pt-2">{process.step}</div>
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
