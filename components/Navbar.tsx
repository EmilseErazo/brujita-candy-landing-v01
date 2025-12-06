'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isPocionesOpen, setIsPocionesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const pocionesLinks = [
        { name: 'Nuestros Hechizos', href: '#hechizos' },
        { name: 'Nuestras Pócimas Mágicas', href: '#pocimas' },
        { name: 'Noches Mágicas', href: '#noches-magicas' },
        { name: 'Set de Jardín Mágicos', href: '#garden' },
    ];

    const navLinks = [
        { name: 'Inicio', href: '#home' },
        { name: 'Pociones', href: '#products', hasDropdown: true },
        { name: 'Magia', href: '#about' },
        { name: 'Contacto', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-12 h-12">
                        <Image
                            src="/images/logo-icon.png"
                            alt="Brujita Candy Logo"
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-christmas-red blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10" />
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200 font-sans">
                        Brujita Candy
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.hasDropdown ? (
                                <div
                                    className="relative"
                                    onMouseEnter={() => setIsPocionesOpen(true)}
                                    onMouseLeave={() => setIsPocionesOpen(false)}
                                >
                                    <button
                                        className="flex items-center gap-1 text-white/80 hover:text-christmas-gold transition-colors text-sm font-medium tracking-wide hover:text-glow"
                                    >
                                        {link.name}
                                        <ChevronDown size={14} className={`transition-transform duration-300 ${isPocionesOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isPocionesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                                            >
                                                <div className="bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl p-2 flex flex-col gap-1">
                                                    {pocionesLinks.map((subLink) => (
                                                        <Link
                                                            key={subLink.name}
                                                            href={subLink.href}
                                                            className="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                                            onClick={() => setIsPocionesOpen(false)}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link
                                    href={link.href}
                                    className="text-white/80 hover:text-christmas-gold transition-colors text-sm font-medium tracking-wide hover:text-glow"
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                    <a
                        href="https://wa.me/5493874094328?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20m%C3%A1gico%20%F0%9F%8D%AC"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-christmas-red hover:bg-red-600 text-white px-6 py-2 rounded-full font-medium transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transform hover:-translate-y-0.5"
                    >
                        Pedir Ahora
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-950/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    {link.hasDropdown ? (
                                        <div className="flex flex-col">
                                            <button
                                                onClick={() => setIsPocionesOpen(!isPocionesOpen)}
                                                className="flex items-center justify-between w-full text-white/80 hover:text-christmas-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-colors"
                                            >
                                                {link.name}
                                                <ChevronDown size={16} className={`transition-transform duration-300 ${isPocionesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isPocionesOpen && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        className="overflow-hidden bg-white/5 rounded-lg mt-1"
                                                    >
                                                        {pocionesLinks.map((subLink) => (
                                                            <Link
                                                                key={subLink.name}
                                                                href={subLink.href}
                                                                onClick={() => setIsMobileMenuOpen(false)}
                                                                className="block px-8 py-3 text-sm text-slate-400 hover:text-white hover:bg-white/5 transition-colors border-l-2 border-transparent hover:border-christmas-gold"
                                                            >
                                                                {subLink.name}
                                                            </Link>
                                                        ))}
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="block text-white/80 hover:text-christmas-gold py-3 px-4 rounded-lg hover:bg-white/5 transition-colors text-center"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
