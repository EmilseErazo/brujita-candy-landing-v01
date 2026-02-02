'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Starfall from '@/components/Starfall';
import GardenSection from '@/components/GardenSection';
import BackToSchoolSection from '@/components/BackToSchoolSection';
import TesorosEncantadosSection from '@/components/TesorosEncantadosSection';
import CartSidebar from '@/components/CartSidebar';
import CartFloatingButton from '@/components/CartFloatingButton';
import { CartProvider } from '@/context/CartContext';
import { MessageCircle, Instagram, Facebook } from 'lucide-react';

export default function Home() {
    return (
        <CartProvider>
            <main className="min-h-screen bg-slate-950 text-white selection:bg-reyes-purple selection:text-white relative">
                <Starfall />
                <Navbar />
                <CartSidebar />
                <CartFloatingButton />

                <Hero />

                <ProductGrid />

                <BackToSchoolSection />

                <TesorosEncantadosSection />

                <GardenSection />

                <AboutSection />

                {/* Contact Section */}
                <section id="contact" className="py-24 relative">
                    <div className="container mx-auto px-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
                            ¿Listo para el <span className="text-reyes-gold">Hechizo de Reyes?</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto mb-10">
                            Contáctanos directamente por WhatsApp para personalizar tu pedido mágico.
                            Estamos listos para encantar tu evento.
                        </p>
                        <a
                            href="https://wa.me/5493874094328?text=Hola!%20Me%20gustar%C3%ADa%20hacer%20un%20pedido%20m%C3%A1gico%20%F0%9F%8D%AC"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-reyes-purple hover:bg-reyes-blue text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(107,33,168,0.4)] transform hover:-translate-y-1 mb-12"
                        >
                            <MessageCircle size={24} />
                            Chat en WhatsApp
                        </a>

                        <div className="flex flex-col items-center gap-4">
                            <p className="text-slate-400 text-sm">También encuéntranos en:</p>
                            <div className="flex gap-6">
                                <a href="https://www.instagram.com/brujitacandybar/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-magic-purple transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-magic-purple/20 transition-colors">
                                        <Instagram size={20} />
                                    </div>
                                    <span className="font-medium">@brujitacandybar</span>
                                </a>
                                <a href="https://www.facebook.com/BrujitacotillonCandyBar" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white hover:text-magic-purple transition-colors group">
                                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-magic-purple/20 transition-colors">
                                        <Facebook size={20} />
                                    </div>
                                    <span className="font-medium">Brujita Candy Bar</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
                <WhatsAppButton />
            </main>
        </CartProvider>
    );
}
