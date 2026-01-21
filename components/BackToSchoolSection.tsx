'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { useCart } from '@/context/CartContext';
import { X, Check, Sparkles, ShoppingCart, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import Lightbox from './Lightbox';

const backToSchoolProducts = [
    {
        id: 'school-1',
        title: "95 Rótulos Escolares",
        price: 6500,
        priceCash: 6500,
        priceCard: 7800,
        originalPrice: 7800,
        discountPercentage: 20,
        description: "¿Buscás que sus útiles no se pierdan y luzcan increíbles? Nuestro pack de rótulos es la solución ideal para que cada cuaderno, lápiz y regla tenga su toque personalizado.",
        image: "/images/rotulos-cat.jpg",
        tag: "Primaria",
        features: [
            "Calidad Premium: Impresión láser de alta definición",
            "10 Etiquetas Grandes (Cuadernos, libros)",
            "15 Etiquetas Medianas (Reglas, plasticolas)",
            "70 Etiquetas Chicas (Lápices, fibras)"
        ],
        gallery: [
            "/images/rotulos-cat.jpg",
            "/images/rotulos-gamer.jpg",
            "/images/rotulos-river.jpg",
            "/images/rotulos-boca.jpg"
        ]
    },
    {
        id: 'school-2',
        title: "Separadores Mágicos N°3",
        price: 7000,
        priceCash: 7000,
        priceCard: 8400,
        originalPrice: 8400,
        discountPercentage: 17,
        description: "¿Buscás que sus carpetas sean únicas y estén siempre ordenadas? Nuestros separadores personalizados son la mezcla perfecta entre funcionalidad y sus personajes favoritos.",
        image: "/images/separadores-skate.jpg",
        tag: "Organización",
        features: [
            "Calidad Premium: Impresión láser de alta definición",
            "6 Separadores N°3 ($24 \\times 20$ cm)",
            "Personalización Total: Diseños exclusivos",
            "Espacios Clave: Materia, Grado y Docente"
        ],
        gallery: [
            "/images/separadores-skate.jpg",
            "/images/separadores-horse.jpg",
            "/images/separadores-gyt.jpg",
            "/images/separadores-animal.jpg"
        ]
    },
    {
        id: 'school-3',
        title: "Combo Mágico: Kit Completo",
        price: 13500,
        priceCash: 13500,
        priceCard: 16200,
        originalPrice: 16200,
        discountPercentage: 17,
        description: "¿Buscás la solución definitiva para el regreso a clases? Este combo une nuestros productos estrella para que no falte nada: desde la identificación de cada lápiz hasta la organización de sus materias.",
        image: "/images/combo-unicorn.jpg",
        tag: "Kit Completo",
        features: [
            "6 Separadores N°3: Personalizados",
            "✅ 95 Rótulos Escolares: Pack completo",
            "✅ REGALO ESPECIAL: 4 Horarios Escolares",
            "Calidad Premium: Impresión láser HD"
        ],
        gallery: [
            "/images/combo-unicorn.jpg",
            "/images/combo-mix.jpg",
            "/images/combo-horse-schedule.jpg",
            "/images/combo-cat.jpg"
        ]
    },
    {
        id: 'school-4',
        title: "Hechizo Textil",
        price: 6500,
        priceCash: 6500,
        priceCard: 8125,
        originalPrice: 8125,
        discountPercentage: 20,
        description: "¡Identificá sus prendas de forma permanente y olvidate de las pérdidas! Nuestras etiquetas termotransferibles son la solución mágica para uniformes, camperas y delantales.",
        image: "/images/textil-shirt.jpg",
        tag: "Etiquetas Ropa",
        features: [
            "Pack Personalizado: 1 Plancha (30x19cm)",
            "Aplicación Mágica: Se pegan con plancha (15s)",
            "Resistencia Total: Lavarropas y secarropas",
            "Suavidad: No pica ni molesta"
        ],
        gallery: [
            "/images/textil-shirt.jpg",
            "/images/textil-sheet.jpg",
            "/images/textil-close.jpg",
            "/images/textil-sheet-2.jpg"
        ]
    },
    {
        id: 'school-5',
        title: "Hechizo de Cristal",
        price: 8600,
        priceCash: 8600,
        priceCard: 10750,
        originalPrice: 10750,
        discountPercentage: 20,
        description: "¿Cansada de que las etiquetas se salgan? Nuestro nuevo material DTF UV: etiquetas con relieve y brillo que se adhieren como un 'tatuaje' a superficies rígidas. Son indestructibles.",
        image: "/images/dtf-uv-mix.jpg",
        tag: "DTF UV",
        features: [
            "Pack Personalizado: 1 Plancha (30x19cm)",
            "Súper Poderes: Resistentes agua/microondas",
            "Durabilidad: No se rayan ni pierden color",
            "Ideal: Vasos, tuppers, vidrio y plástico"
        ],
        gallery: [
            "/images/dtf-uv-mix.jpg",
            "/images/dtf-uv-close.jpg"
        ]
    }
];

export default function BackToSchoolSection() {
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
        <section id="back-to-school" className="py-24 relative bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Vuelta al Cole <span className="text-christmas-gold">2026</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        Preparate para un año lleno de magia y aprendizaje con nuestros sets escolares.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {backToSchoolProducts.map((product, index) => (
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
