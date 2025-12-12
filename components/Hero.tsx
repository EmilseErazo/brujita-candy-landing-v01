'use client';

import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/home-banner-merlina.jpg"
                    alt="Brujita Candy Merlina Theme"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-slate-950/70" /> {/* Overlay for readability */}
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                >
                    <Sparkles size={16} className="text-christmas-gold" />
                    <span className="text-sm text-slate-300 tracking-wide">Dulces artesanales con un toque de Magia Navideña</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight"
                >
                    Sabor que <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-christmas-red via-red-500 to-christmas-gold animate-shimmer bg-[length:200%_auto]">
                        Hechiza tu Navidad
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10"
                >
                    Descubre nuestra colección de gomitas encantadas, chocolates místicos y pociones dulces.
                    Cada bocado es una experiencia mágica.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                    <a href="#products" className="group relative px-8 py-4 bg-christmas-red rounded-full text-white font-bold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(239,68,68,0.4)]">
                        <span className="relative z-10 flex items-center gap-2">
                            Ver Catálogo Navideño <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-christmas-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>

                    <a href="#about" className="px-8 py-4 rounded-full text-white font-medium border border-white/10 hover:bg-white/5 transition-all hover:border-magic-lime/50">
                        Conocer la Historia
                    </a>
                </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{ y: [-20, 20, -20], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-[10%] w-16 h-16 bg-gradient-to-br from-magic-lime to-green-500 rounded-full opacity-20 blur-sm"
                />
                <motion.div
                    animate={{ y: [20, -20, 20], rotate: [0, -15, 15, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/3 right-[15%] w-24 h-24 bg-gradient-to-br from-magic-orange to-red-500 rounded-full opacity-20 blur-sm"
                />
            </div>
        </section>
    );
}
