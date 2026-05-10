import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}
                className="fixed top-0 left-0 z-[100] w-full bg-white/70 backdrop-blur-2xl border-b border-[#EAE8E3] shadow-sm px-6 md:px-12 py-5 flex justify-between items-center transition-all"
            >
                <div className="flex items-center gap-2 group cursor-pointer text-[#1A1A1A]">
                    <span className="text-2xl font-bold tracking-tighter">Agency<span className="text-[#7A7A7A]">.</span></span>
                </div>

                <div className="hidden md:flex items-center gap-14 text-[12px] font-bold tracking-[0.2em] text-[#7A7A7A] uppercase mt-0.5">
                    {['Services', 'Portfolio', 'Process', 'FAQ'].map(link => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-[#1A1A1A] transition-colors relative group py-2">
                            {link}
                            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#1A1A1A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3.5 bg-[#1A1A1A] text-white text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-black transition-all flex items-center gap-2 shadow-xl shadow-black/10"
                    >
                        Start Project <ArrowRight className="w-3 h-3" />
                    </motion.button>
                </div>

                <button className="md:hidden text-[#1A1A1A] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-[#FAF9F6] pt-32 px-6 flex flex-col"
                    >
                        <div className="flex flex-col gap-6 text-3xl font-medium tracking-tight">
                            {['Services', 'Portfolio', 'Process', 'FAQ'].map((link, i) => (
                                <motion.a
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="hover:text-[#7A7A7A] transition-colors"
                                >
                                    {link}
                                </motion.a>
                            ))}
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="mt-8 px-8 py-5 bg-[#1A1A1A] text-white text-[15px] font-bold tracking-widest uppercase rounded-full"
                            >
                                Start a Project
                            </motion.button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
