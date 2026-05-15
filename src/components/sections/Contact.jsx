import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFigma } from 'react-icons/fa';

export default function Contact() {
    return (
        <section id="contact" className="bg-[#FAF9F6] p-4 md:p-8">
            <div className="relative w-full bg-[#1A1A1A] rounded-[40px] flex flex-col justify-end z-20 px-8 md:px-20 pt-32 pb-32 shadow-2xl">
                <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-20">

                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="w-4 h-4 bg-green-500 rounded-full mb-8 animate-pulse shadow-[0_0_20px_rgba(34,197,94,0.5)]" />
                            <h2 className="text-6xl md:text-[130px] font-bold tracking-tighter leading-[0.85] text-white mb-10 text-balance">
                                Let's<br />Build.
                            </h2>
                            <p className="text-xl text-[#7A7A7A] font-light mb-16 max-w-sm leading-relaxed">
                                Turn your immense vision into a fully realized, scalable digital experience.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 text-white mt-auto">
                            <a href="mailto:hello@agency.com" className="hover:text-[#7A7A7A] transition-colors w-fit text-3xl font-bold tracking-tight">hello@agency.com</a>
                            <div className="flex gap-6 mt-4">
                                {[FaTwitter, FaLinkedin, FaInstagram, FaFigma].map((Icon, i) => (
                                    <a key={i} href="#" className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1A1A1A] transition-all">
                                        <Icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:pl-10 flex flex-col justify-end">
                        <form className="flex flex-col gap-6 bg-white/5 p-10 md:p-14 rounded-[32px] backdrop-blur-md border border-white/10" onSubmit={(e) => e.preventDefault()}>
                            <h3 className="text-2xl font-bold tracking-tight text-white mb-6">Drop us an inquiry</h3>
                            <div className="border-b border-white/20 pb-4">
                                <input type="text" className="w-full bg-transparent text-white text-xl font-light focus:outline-none placeholder:text-white/40" placeholder="What's your name?" />
                            </div>
                            <div className="border-b border-white/20 pb-4">
                                <input type="email" className="w-full bg-transparent text-white text-xl font-light focus:outline-none placeholder:text-white/40" placeholder="Your email address?" />
                            </div>
                            <div className="border-b border-white/20 pb-4">
                                <textarea rows="2" className="w-full bg-transparent text-white text-xl font-light focus:outline-none placeholder:text-white/40 resize-none" placeholder="Tell us about your project constraint..."></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary-white self-start mt-8"
                            >
                                <span className="btn-slide-wrapper">
                                    <span className="btn-slide-text">Send Request</span>
                                    <span className="btn-slide-text-hover">Let's Go</span>
                                </span>
                                <ArrowUpRight className="w-5 h-5" />
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
