import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function Work() {
    const projects = [
        { title: "Financial Dashboard", client: "PayFlow", category: "UX/UI Design", color: "bg-[#EAE8E3]" },
        { title: "E-Commerce System", client: "Aura Home", category: "Engineering", color: "bg-[#F3F3F1]" },
        { title: "AI Analytics Platform", client: "DataMind", category: "Product Strategy", color: "bg-[#D1D1C7]" },
        { title: "Web3 Protocol Base", client: "BlockX", category: "Full Stack", color: "bg-[#B5B5A6]" },
        { title: "Healthcare Interface", client: "MediConnect", category: "Design System", color: "bg-[#FAF9F6]" },
        { title: "Global Logistics", client: "ShipFast", category: "Web App", color: "bg-[#EAE8E3]" }
    ];

    return (
        <div
            className="relative bg-white pt-48 pb-60 -mt-20 z-20"
            style={{ clipPath: "ellipse(120% 100% at 50% 0%)" }}
        >
            <section id="portfolio" className="px-6 md:px-12 w-full max-w-[1400px] mx-auto">
                <div className="mb-24 lg:mb-32 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                    <div>
                        <h2 className="text-5xl md:text-[80px] font-bold tracking-tighter text-[#1A1A1A] mb-8 leading-[0.9]">Portfolio.</h2>
                        <p className="text-xl text-[#7A7A7A] font-light max-w-xl">A curated collection of our finest implementations for global brands and scaling startups.</p>
                    </div>
                    <button className="btn-secondary">
                        <span className="btn-slide-wrapper">
                            <span className="btn-slide-text">View Archive</span>
                            <span className="btn-slide-text-hover">See All</span>
                        </span>
                        <ArrowUpRight className="w-5 h-5" />
                    </button>
                </div>

                <div className="grid md:grid-cols-2 gap-x-12 gap-y-24">
                    {projects.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="group cursor-pointer"
                        >
                            <div className={`aspect-[4/3] rounded-3xl overflow-hidden mb-8 relative border border-[#EAE8E3]`} style={{ backgroundColor: item.color }}>
                                <div className="absolute inset-x-12 bottom-0 top-16 bg-white rounded-t-3xl shadow-2xl shadow-black/5 transition-transform duration-700 ease-out group-hover:translate-y-4 flex flex-col overflow-hidden border border-[#EAE8E3]">
                                    <div className="h-10 border-b border-[#EAE8E3] flex items-center px-6 gap-2 bg-[#FAF9F6]">
                                        <span className="w-3 h-3 rounded-full bg-[#EAE8E3]" />
                                        <span className="w-3 h-3 rounded-full bg-[#EAE8E3]" />
                                        <span className="w-3 h-3 rounded-full bg-[#EAE8E3]" />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-3 px-2">
                                <div className="text-[11px] font-bold tracking-[0.2em] text-[#7A7A7A] uppercase">
                                    {item.client} &mdash; {item.category}
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-[#1A1A1A] group-hover:text-[#7A7A7A] transition-colors">{item.title}</h3>
                                    <ArrowUpRight className="w-6 h-6 text-[#1A1A1A] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
