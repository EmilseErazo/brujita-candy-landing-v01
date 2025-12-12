'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from './ProductCard';
import { useCart } from '@/context/CartContext';
import { X, Check, Sparkles, ShoppingCart, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import Lightbox from './Lightbox';

const gardenProducts = [
    {
        id: 'garden-1',
        title: "El Primer Encanto Escolar",
        price: 7300,
        originalPrice: 8760,
        discountPercentage: 20,
        description: "¿Buscás lo esencial para que sus primeros días sean pura ternura? Este set es la dosis justa de magia textil para acompañar sus meriendas con sus personajes favoritos. Simple, suave y lleno de amor.",
        image: "/images/set-jardin-messi.jpg",
        tag: "Set Escolar",
        features: [
            "Individual de tela",
            "Servilleta",
            "Toalla p/colgar"
        ],
        gallery: [
            "/images/set-jardin-messi.jpg",
            "/images/set-jardin-fortnite.jpg",
            "/images/set-jardin-fnaf.jpg"
        ]
    },
    {
        id: 'garden-4',
        title: "Hechizo Clasico escolar",
        price: 9800,
        priceCash: 9800,
        priceCard: 11760,
        originalPrice: 11760,
        discountPercentage: 20,
        description: "¿Listo para compartir momentos deliciosos en el jardín? Nuestro 'Hechizo clasico escolar' suma lo indispensable para que disfrutar de la leche sea una aventura diaria.",
        image: "/images/hechizo-clasico-capybara.jpg",
        tag: "Set Completo",
        features: [
            "Individual de tela",
            "Servilleta",
            "Toalla p/colgar",
            "Cucharita",
            "Taza"
        ],
        gallery: [
            "/images/hechizo-clasico-capybara.jpg",
            "/images/hechizo-clasico-princess.jpg",
            "/images/hechizo-clasico-captain.jpg"
        ]
    },
    {
        id: 'garden-7',
        title: "Pocimas de recreo",
        price: 15550,
        priceCash: 15550,
        priceCard: 18660,
        originalPrice: 18660,
        discountPercentage: 20,
        description: "¡La fórmula mágica para la hora más feliz del jardín! Este set asegura que el momento de la merienda sea completo y súper cómodo, con toda lo necesaria para que disfruten desde el jugo hasta las galletitas favoritas junto a sus personajes amados.",
        image: "/images/pocimas-recreo-frozen.jpg",
        tag: "Set Completo",
        features: [
            "Individual de tela",
            "Servilleta",
            "Toalla p/colgar",
            "Cucharita",
            "Taza",
            "Plato (diam. 20 cm)"
        ],
        gallery: [
            "/images/pocimas-recreo-frozen.jpg",
            "/images/pocimas-recreo-blippi.jpg",
            "/images/pocimas-recreo-bluey.jpg"
        ]
    },
    {
        id: 'garden-8',
        title: "Pack Magico",
        price: 8400,
        priceCash: 8400,
        priceCard: 10080,
        originalPrice: 10080,
        discountPercentage: 20,
        description: "¿Ya tenés la mantelería y solo necesitás renovar la taza? Un pequeño encanto para renovar tu kit de merienda con diseños que divierten.",
        image: "/images/pack-magico-dino-1.jpg",
        tag: "Kit Renovación",
        features: [
            "Taza",
            "Cucharita",
            "Plato (diam. 20 cm)"
        ],
        gallery: [
            "/images/pack-magico-dino-1.jpg",
            "/images/pack-magico-dino-2.jpg",
            "/images/pack-magico-mix.jpg"
        ]
    },
    {
        id: 'garden-9',
        title: "Hechizo de aventuras",
        price: 26790,
        priceCash: 26790,
        priceCard: 32150,
        originalPrice: 32150,
        discountPercentage: 20,
        description: "Para días llenos de energía y juegos. Este pack asegura que no les falte nada: desde la merienda hasta la hidratación, todo personalizado para que nunca pierdan sus tesoros.",
        image: "/images/hechizo-aventuras-toystory.jpg",
        tag: "Set Premium",
        features: [
            "Individual",
            "Servilleta",
            "Toalla p/colgar",
            "Cucharita",
            "Taza",
            "Plato (diam. 20 cm)",
            "Botella 500 ml."
        ],
        gallery: [
            "/images/hechizo-aventuras-toystory.jpg",
            "/images/hechizo-aventuras-peppa.jpg",
            "/images/hechizo-aventuras-unicorn.jpg"
        ]
    },
    {
        id: 'garden-10',
        title: "Pocima escolar",
        price: 37690,
        priceCash: 37690,
        priceCard: 45230,
        originalPrice: 45230,
        discountPercentage: 20,
        description: "¡Todo listo para cargar la magia a la espalda! Un combo práctico que une lo mejor de la merienda con nuestra mochila de jardín, perfecta para llevar sus sueños a todas partes.",
        image: "/images/pocima-escolar-avengers.jpg",
        tag: "Pack Mochila",
        features: [
            "Individual",
            "Servilleta",
            "Toalla p/colgar",
            "Cucharita",
            "Taza",
            "Mochila"
        ],
        gallery: [
            "/images/pocima-escolar-avengers.jpg",
            "/images/pocima-escolar-spiderman.jpg",
            "/images/pocima-escolar-dino.jpg"
        ]
    },
    {
        id: 'garden-11',
        title: "Pocima maestra: Pack full",
        price: 54390,
        priceCash: 54390,
        priceCard: 65270,
        originalPrice: 65270,
        discountPercentage: 20,
        description: "La solución definitiva para una vuelta a clases legendaria. Es nuestra propuesta más completa. No tenés que preocuparte por nada; nosotros armamos el kit total para que tu pequeño/a brille en el jardín.",
        image: "/images/pocima-maestra-bluey.jpg",
        tag: "Pack Definitivo",
        features: [
            "Individual",
            "Servilleta",
            "Toalla p/colgar",
            "Mochila",
            "Cucharita",
            "Taza",
            "Plato (diam. 20 cm)",
            "Botella 500 ml"
        ],
        gallery: [
            "/images/pocima-maestra-bluey.jpg",
            "/images/pocima-maestra-dino.jpg",
            "/images/pocima-maestra-mario.jpg",
            "/images/pocima-maestra-unicorn.jpg"
        ]
    },
    {
        id: 'garden-12',
        title: "Mochilas magicas",
        price: 30000,
        priceCash: 30000,
        priceCard: 36000,
        originalPrice: 36000,
        discountPercentage: 20,
        description: "Comodidad y estilo para sus primeros pasos. Mochilas con gran capacidad, tiras acolchadas y el diseño del personaje que más aman.",
        image: "/images/mochilas-magicas-group.jpg",
        tag: "Mochila",
        features: [
            "Mochila Jardín",
            "Medidas: 35cm alto x 25cm ancho x 10cm profundidad",
            "Tiras acolchadas",
            "Gran capacidad"
        ],
        gallery: [
            "/images/mochilas-magicas-group.jpg",
            "/images/mochilas-magicas-plim-plim.jpg",
            "/images/mochilas-magicas-dino-back.jpg",
            "/images/mochilas-magicas-thomas-side.jpg"
        ]
    }
];

export default function GardenSection() {
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
        <section id="garden" className="py-24 relative bg-slate-900/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-4"
                    >
                        Sets de Jardín <span className="text-christmas-green">Mágicos</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-400 max-w-2xl mx-auto"
                    >
                        Equipá a tus pequeños con la magia de Brujita Candy Bar. Sets completos y personalizados.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {gardenProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            priceCash={product.priceCash}
                            priceCard={product.priceCard}
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
                                                <span>Efectivo/Transferencia:</span>
                                                <span className="font-bold text-xl">${formatPrice(selectedProduct.priceCash || selectedProduct.price)}</span>
                                            </div>
                                            <div className="flex justify-between items-center text-slate-400">
                                                <span>Tarjeta:</span>
                                                <span className="font-bold">${formatPrice(selectedProduct.priceCard || (selectedProduct.price * 1.2))}</span>
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
