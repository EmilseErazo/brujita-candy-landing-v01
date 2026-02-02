'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { useCart } from '@/context/CartContext';
import { X, Check, Sparkles, ShoppingCart, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import Lightbox from './Lightbox';

const tesorosProducts = [
    {
        id: 'tesoro-bolsitas',
        title: "Bolsitas Personalizadas",
        price: 37500,
        priceCash: 37500,
        priceCard: 45000,
        originalPrice: 45000,
        discountPercentage: 17,
        description: "Bolsitas perfectas para tu evento. Medidas: 14 cm ancho x 24 cm alto x 4,8 cm profundidad. Precio unitario: $2.700. El pack incluye 15 unidades.",
        image: "/images/bolsitas-1.jpg",
        tag: "Personalizado",
        features: [
            "Medidas: 14x24x4.8 cm",
            "Diseño totalmente personalizado",
            "Pack x 15 unidades",
            "Ideal para sorpresitas"
        ],
        gallery: [
            "/images/bolsitas-1.jpg",
            "/images/bolsitas-2.jpg",
            "/images/bolsitas-3.jpg"
        ]
    },
    {
        id: 'tesoro-totem',
        title: "Bolsitas Totem",
        price: 36000,
        priceCash: 36000,
        priceCard: 43200,
        originalPrice: 43200,
        discountPercentage: 17,
        description: "Bolsitas de tela con diseños personalizados. Medidas: 20 cm ancho x 24 cm alto. Precio unitario: $3.800. El pack incluye 10 unidades.",
        image: "/images/bolsitas-totem-1.jpg",
        tag: "Tela Personalizada",
        features: [
            "Medidas: 20x24 cm",
            "Realizadas en tela",
            "Diseños personalizados",
            "Pack x 10 unidades"
        ],
        gallery: [
            "/images/bolsitas-totem-1.jpg",
            "/images/bolsitas-totem-2.jpg"
        ]
    }
];

export default function TesorosEncantadosSection() {
    const { addToCart } = useCart();
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const handleProductClick = (product: any) => {
        setSelectedProduct(product);
        setSelectedImage(null);
    };

    const handleAddToCart = (product: any) => {
        addToCart(product);
        setSelectedProduct(null);
    };

    return (
        <section id="tesoros-encantados" className="py-24 relative bg-slate-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Tesoros <span className="text-christmas-gold">Encantados</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        Descubrí nuestra nueva colección de tesoros mágicos diseñados para sorprender.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tesorosProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            image={product.image}
                            tag={product.tag}
                            delay={index * 0.1}
                            onClick={() => handleProductClick(product)}
                            onAddToCart={() => handleAddToCart(product)}
                            onZoom={() => setLightboxImage(product.image)}
                            originalPrice={(product as any).originalPrice}
                            discountPercentage={(product as any).discountPercentage}
                        />
                    ))}
                </div>
            </div>

            {/* Product Details Modal */}
            <AnimatePresence>
                {selectedProduct && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProduct(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-slate-900 border border-white/10 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-2">
                                {/* Image Gallery Side */}
                                <div className="bg-slate-950/50 p-6 lg:p-8 flex flex-col gap-4">
                                    <div className="relative h-[300px] rounded-2xl overflow-hidden border border-white/10">
                                        <Image
                                            src={selectedImage || selectedProduct.image}
                                            alt={selectedProduct.title}
                                            fill
                                            className="object-cover cursor-zoom-in hover:scale-105 transition-transform duration-500"
                                            onClick={() => setLightboxImage(selectedImage || selectedProduct.image)}
                                        />
                                        <div className="absolute top-4 right-4 pointer-events-none">
                                            <div className="bg-black/40 backdrop-blur-sm p-2 rounded-full text-white/80">
                                                <ZoomIn size={20} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2">
                                        {selectedProduct.gallery?.map((img: string, idx: number) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedImage(img)}
                                                className={`relative h-20 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === img ? 'border-christmas-red' : 'border-transparent hover:border-white/20'}`}
                                            >
                                                <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Side */}
                                <div className="p-6 lg:p-8 space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                                            <Sparkles className="text-christmas-gold" />
                                            {selectedProduct.title}
                                        </h3>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-christmas-red/20 text-christmas-red border border-christmas-red/20">
                                            {selectedProduct.tag}
                                        </span>
                                    </div>

                                    <p className="text-slate-300 leading-relaxed">
                                        {selectedProduct.description}
                                    </p>

                                    {selectedProduct.features && (
                                        <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                            <h4 className="font-bold text-white mb-4">Incluye:</h4>
                                            <ul className="space-y-3">
                                                {selectedProduct.features.map((feature: string, idx: number) => (
                                                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                                                        <div className="mt-1 min-w-[16px]">
                                                            <Check size={16} className="text-christmas-green" />
                                                        </div>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    <div className="pt-4 border-t border-white/10">
                                        <div className="flex flex-col gap-2 mb-4">
                                            <div className="flex justify-between items-center text-white">
                                                <span>Precio:</span>
                                                <span className="font-bold text-xl">${formatPrice(selectedProduct.price)}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleAddToCart(selectedProduct)}
                                            className="block w-full py-4 bg-christmas-green hover:bg-green-600 text-white font-bold text-center rounded-xl transition-all hover:shadow-[0_0_20px_rgba(22,163,74,0.4)] flex items-center justify-center gap-2"
                                        >
                                            <ShoppingCart size={20} />
                                            Agregar al Carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Lightbox
                image={lightboxImage}
                onClose={() => setLightboxImage(null)}
            />
        </section>
    );
}
