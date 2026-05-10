import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQItem = ({ q, a }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-[#EAE8E3] py-8 faq-item cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex justify-between items-center text-[#1A1A1A]">
                <h4 className="text-2xl font-bold tracking-tight group-hover:text-[#7A7A7A] transition-colors">{q}</h4>
                <div className="w-10 h-10 rounded-full border border-[#EAE8E3] flex items-center justify-center group-hover:border-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-all duration-300">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
            </div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: "hidden" }}
                    >
                        <p className="pt-6 text-[#7A7A7A] text-lg font-light leading-relaxed max-w-3xl">{a}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
};

export default function FAQ() {
    return (
        <section id="faq" className="py-32 px-6 md:px-12 max-w-[1400px] mx-auto bg-[#FAF9F6] border-t border-[#EAE8E3]">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
                <div className="lg:w-1/3">
                    <h2 className="text-5xl md:text-[80px] font-bold tracking-tighter text-[#1A1A1A] mb-8 leading-[0.9]">FAQ.</h2>
                    <p className="text-2xl text-[#7A7A7A] font-light leading-relaxed">Answers to everything you need to know about partnering with our agency.</p>
                </div>
                <div className="lg:w-2/3 flex flex-col pt-4">
                    <FAQItem q="What is your typical project timeline?" a="Most end-to-end projects span between 6 to 12 weeks depending on the complexity of the architecture, design requirements, and integrations." />
                    <FAQItem q="Do you offer post-launch support?" a="Yes, we provide continuous scaling, conversion rate optimization, and SLA-based technical support for all our enterprise deployments." />
                    <FAQItem q="What technology stacks do you use?" a="We primarily engineer entirely custom solutions using React, Next.js, Node.js, and Python. We purposefully avoid bloated templates." />
                    <FAQItem q="How does your pricing structure work?" a="We operate exclusively on value-based pricing and fixed-project fees to ensure total transparency. Baseline engagements begin at $15,000." />
                </div>
            </div>
        </section>
    );
}
