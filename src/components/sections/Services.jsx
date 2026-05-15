import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code, BarChart, Briefcase, Share2, Search, Smartphone, AppWindow } from 'lucide-react';

export default function Services() {
    const services = [
        { icon: AppWindow, title: "Web Development", desc: "High-performance scalable architecture built for extreme speed." },
        { icon: Smartphone, title: "Mobile Development", desc: "Native iOS and Android engineering for liquid experiences." },
        { icon: PenTool, title: "Product Design", desc: "Minimalist, user-centric interfaces optimizing digital clarity." },
        { icon: BarChart, title: "Conversion", desc: "Data-driven systemic optimization directly increasing your ROI." },
        { icon: Search, title: "SEO", desc: "Technical search mastery driving high organic visibility." },
        { icon: Share2, title: "Social Media", desc: "Curated community management driving massive social distribution." },
    ];

    return (
        <section id="services" className="py-16 md:py-40 px-6 md:px-12 w-full bg-[#FAF9F6] relative z-[30]">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between mb-10 lg:mb-32 md:gap-10">
                    <h2 className="text-5xl md:text-[100px] font-bold tracking-tighter text-[#1A1A1A] leading-[0.9]">What We Do.</h2>
                    <p className="text-base md:text-xl md:text-2xl text-[#7A7A7A] font-light max-w-lg leading-relaxed pt-4">
                        Meticulously crafted solutions across strategy, design, and engineering to elevate your brand above the ambient noise.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, duration: 0.8 }}
                            className="bg-white p-7 md:p-12 rounded-[40px] border border-[#EAE8E3] hover:border-[#1A1A1A] transition-all duration-500 group cursor-pointer shadow-sm hover:shadow-xl flex flex-col"
                        >
                            <div className="w-16 h-16 mb-8 rounded-full bg-[#FAF9F6] border border-[#EAE8E3] flex items-center justify-center group-hover:bg-[#1A1A1A] transition-colors duration-500">
                                <service.icon className="w-8 h-8 text-[#1A1A1A] group-hover:text-white transition-colors" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-3xl font-bold tracking-tight mb-1 md:mb-3 text-[#1A1A1A]">{service.title}</h3>
                            <p className="text-[#7A7A7A] text-lg font-light leading-relaxed mt-auto">{service.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
