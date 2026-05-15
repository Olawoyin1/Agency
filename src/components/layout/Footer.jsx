import React from 'react';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { FaTwitter, FaLinkedin, FaInstagram, FaFigma } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="w-full bg-[#1A1A1A] text-white pt-32 pb-12 px-6 md:px-12 rounded-t-[40px] mt-2 relative z-50">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24 border-b border-white/20 pb-20">
                    <div className="lg:col-span-1 flex flex-col justify-between">
                        <div>
                            <h3 className="text-4xl font-bold tracking-tight mb-8">Agency<span className="text-[#7A7A7A]">.</span></h3>
                            <p className="text-[#7A7A7A] text-lg font-light leading-relaxed pr-4">Engineering minimal, scalable digital products for visionary brands worldwide.</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-10">Navigation</h4>
                        <ul className="flex flex-col gap-5 text-xl font-light">
                            <li><a href="#services" className="hover:text-[#7A7A7A] transition-colors relative group w-fit">What We Do <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span></a></li>
                            <li><a href="#portfolio" className="hover:text-[#7A7A7A] transition-colors relative group w-fit">Portfolio <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span></a></li>
                            <li><a href="#process" className="hover:text-[#7A7A7A] transition-colors relative group w-fit">Process <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span></a></li>
                            <li><a href="#faq" className="hover:text-[#7A7A7A] transition-colors relative group w-fit">FAQ <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-white opacity-0 group-hover:opacity-100 transition-opacity"></span></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-10">Socials</h4>
                        <ul className="flex flex-col gap-5 text-xl font-light">
                            <li><a href="#" className="flex gap-2 items-center hover:text-[#7A7A7A] transition-colors group">Twitter <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" /></a></li>
                            <li><a href="#" className="flex gap-2 items-center hover:text-[#7A7A7A] transition-colors group">Instagram <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" /></a></li>
                            <li><a href="#" className="flex gap-2 items-center hover:text-[#7A7A7A] transition-colors group">LinkedIn <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" /></a></li>
                            <li><a href="#" className="flex gap-2 items-center hover:text-[#7A7A7A] transition-colors group">Dribbble <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -ml-1 group-hover:ml-0 transition-all" /></a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-white/50 mb-10">Inquiries</h4>
                        <p className="text-2xl font-light mb-6 hover:text-[#7A7A7A] transition-colors cursor-pointer w-fit">hello@agency.com</p>

                        <div className="flex items-center gap-2 text-[#7A7A7A] mb-10 font-bold tracking-[0.1em] uppercase text-[11px]">
                            <MapPin className="w-3.5 h-3.5" />
                            <span>Remote</span>
                        </div>

                        <div className="flex gap-4">
                            {[FaTwitter, FaLinkedin, FaInstagram, FaFigma].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-[#1A1A1A] transition-all">
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center text-[11px] text-[#7A7A7A] font-bold tracking-[0.2em] uppercase gap-6">
                    <div>© 2026 Agency Digital. All rights reserved.</div>
                    <div className="flex gap-12">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
