import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import LocationTag from '../ui/LocationTag';

const navLinks = ['Services', 'Portfolio', 'Process', 'FAQ'];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* ── Top bar: Location left | Logo center | CTA right ── */}
            <motion.header
                initial={{ y: -80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-[100] bg-white/75 backdrop-blur-2xl border-b border-[#EAE8E3]/80"
            >
                {/* Main row */}
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between gap-6">
                    {/* Left: Agency logo */}
                    <a href="/" className="text-2xl font-bold tracking-tighter text-[#1A1A1A] select-none">
                        Agency<span className="text-[#7A7A7A]">.</span>
                    </a>





                    {/* Right: Nav links + CTA */}
                    <div className="hidden md:flex items-center gap-10">
                        <nav className="flex items-center gap-8 text-[11px] font-bold tracking-[0.22em] text-[#7A7A7A] uppercase">
                            {navLinks.map(link => (
                                <a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    className="relative py-1 hover:text-[#1A1A1A] transition-colors duration-200"
                                >
                                    {link}
                                </a>
                            ))}
                        </nav>

                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            className="btn-primary"
                        >
                            <span className="btn-slide-wrapper">
                                <span className="btn-slide-text">Start Project</span>
                                <span className="btn-slide-text-hover">Let's Talk</span>
                            </span>
                            <ArrowRight className="w-3.5 h-3.5" />
                        </motion.a>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden ml-auto text-[#1A1A1A] p-2"
                        onClick={() => setMobileMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </motion.header>

            {/* ── Mobile fullscreen menu ── */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -24 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -24 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="fixed inset-0 z-50 bg-[#FAF9F6] flex flex-col pt-28 px-8"
                    >
                        <nav className="flex flex-col gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link}
                                    href={`#${link.toLowerCase()}`}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.08 }}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-4xl font-bold tracking-tight text-[#1A1A1A] hover:text-[#7A7A7A] transition-colors"
                                >
                                    {link}
                                </motion.a>
                            ))}
                        </nav>

                        <div className="mt-16 flex flex-col gap-5">
                            <a
                                href="#contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="btn-primary py-5"
                            >
                                Start a Project
                            </a>
                            <div className="flex justify-center">
                                <LocationTag />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
