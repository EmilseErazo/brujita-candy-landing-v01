'use client';

import { useState } from 'react';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Sparkles, ZoomIn } from 'lucide-react';
import Image from 'next/image';
import Lightbox from './Lightbox';

const products = [
    {
        id: 1,
        title: "El Primer Encanto",
        price: "Consultar",
        description: "Brujita Promo: Ambientación y decoración mágica para tu festejo. Haz click para ver más.",
        image: "/images/creation-merlina.jpg",
        tag: "Brujita Promo",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "Paneles de 1.5 metros de ancho",
            "Mesas (1-2 mesas)",
            "Posa Torta y accesorios",
            "Alfombra para dar calidez al espacio",
            "Iluminación profesional para realzar la decoración"
        ],
        gallery: [
            "/images/creation-merlina.jpg",
            "/images/creation-sea.jpg",
            "/images/creation-rugby.jpg"
        ]
    },
    {
        id: 2,
        title: "Hechizo Clásico",
        price: "Consultar",
        description: "Brujita Deco: Ideal para crear un espacio pequeño pero soñado, lleno de detalles.",
        image: "/images/creation-clasico-1.jpg",
        tag: "Brujita Deco",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "2 Paneles (2.5 metros de ancho)",
            "Mesas (4 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Alfombra para dar calidez al espacio",
            "Iluminación profesional para realzar la decoración"
        ],
        gallery: [
            "/images/creation-clasico-1.jpg",
            "/images/creation-clasico-2.jpg",
            "/images/creation-clasico-3.jpg"
        ]
    },
    {
        id: 3,
        title: "Hechizo Brillante",
        price: "Consultar",
        description: "Brujita Deco 2: Es hora de que tu celebración no solo encante, sino que deslumbre.",
        image: "/images/creation-brillante-1.jpg",
        tag: "Brujita Deco 2",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "2-3 Paneles (4 metros de ancho)",
            "Mesas (6-7 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Alfombra para dar calidez al espacio",
            "Iluminación profesional para realzar la decoración",
            "Sillón Número Led"
        ],
        gallery: [
            "/images/creation-brillante-1.jpg",
            "/images/creation-brillante-2.jpg",
            "/images/creation-brillante-3.jpg"
        ]
    },
    {
        id: 4,
        title: "Hechizo Supremo",
        price: "Consultar",
        description: "Brujita Deco 3: No es solo una decoración, es la transformación completa de un espacio en un mundo de fantasía.",
        image: "/images/creation-supremo-1.jpg",
        tag: "Brujita Deco 3",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "Paneles (+6 metros de ancho)",
            "Mesas (+9 mesas)",
            "Posa Torta y accesorios",
            "Nombre personalizado",
            "Arco orgánico de globos",
            "Alfombra para dar calidez al espacio",
            "Iluminación profesional para realzar la decoración",
            "Sillón Número Led"
        ],
        gallery: [
            "/images/creation-supremo-1.jpg",
            "/images/creation-supremo-2.jpg",
            "/images/creation-supremo-3.jpg"
        ]
    },
    {
        id: 5,
        title: "Pócima Esencial",
        price: "Consultar",
        description: "Brujita 1: El hechizo todo en uno. Decoración soñada + Surtido delicioso de dulces personalizados.",
        image: "/images/creation-esencial-1.jpg",
        tag: "Brujita 1",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "Paneles (2.5 metros de ancho)",
            "Mesas (3-4 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Iluminación para realzar la deco",
            "10 Bolsitas golosineras",
            "10 Chocolatines",
            "10 Potes de Azúcar",
            "10 Turrones",
            "10 Alfajores",
            "10 Hamlet"
        ],
        gallery: [
            "/images/creation-esencial-1.jpg",
            "/images/creation-esencial-2.jpg",
            "/images/creation-esencial-3.jpg",
            "/images/creation-esencial-4.jpg"
        ]
    },
    {
        id: 6,
        title: "Pócima Superior",
        price: "Consultar",
        description: "Brujita 2: Ampliamos la escenografía y multiplicamos la dulzura. Más impacto y más abundancia.",
        image: "/images/creation-superior-1.jpg",
        tag: "Brujita 2",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "Paneles (4 metros de ancho)",
            "Mesas (6-7 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Nombre y Número",
            "Iluminación para realzar la deco",
            "15 Bolsitas golosineras",
            "15 Chocolatines",
            "15 Potes de Azúcar",
            "15 Turrones",
            "10 Rollitos de gomitas",
            "10 Cajitas con 1 Bombón",
            "10 Alfajores",
            "10 Hamlet"
        ],
        gallery: [
            "/images/creation-superior-1.jpg",
            "/images/creation-superior-2.jpg",
            "/images/creation-superior-3.jpg",
            "/images/creation-superior-4.jpg"
        ]
    },
    {
        id: 7,
        title: "Pócima Maestra",
        price: "Consultar",
        description: "Brujita 3: La máxima expresión de nuestro arte. Decoración espectacular + Explosión de golosinas personalizadas.",
        image: "/images/creation-maestra-main.jpg",
        tag: "Brujita 3",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "Paneles (+6 metros de ancho)",
            "Mesas (+9 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Nombre y Número",
            "Iluminación para realzar la deco",
            "20 Bolsitas golosineras",
            "20 Chocolatines",
            "20 Turrones",
            "20 Potes de Azúcar",
            "20 Rollitos de gomitas",
            "16 Cajitas con 1 Bombón",
            "15 Titas",
            "10 Hamlet"
        ],
        gallery: [
            "/images/creation-maestra-main.jpg",
            "/images/creation-maestra-1.jpg",
            "/images/creation-maestra-2.jpg",
            "/images/creation-maestra-3.jpg",
            "/images/creation-maestra-4.jpg"
        ]
    },
    {
        id: 8,
        title: "El Caldero Mágico",
        price: "Consultar",
        description: "Brujita Bar: Un centro de diversión interactivo. Barra libre de snacks y golosinas para que chicos y grandes se sirvan a gusto.",
        image: "/images/creation-caldero-1.jpg",
        tag: "Brujita Bar",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "1 Panel Personalizado y 1 Panel Bar",
            "Mesas Bar",
            "Arco orgánico de globos",
            "Número",
            "Iluminación para realzar la deco",
            "Barra libre de Snack y Golosinas",
            "Chicles (redondos, frutales)",
            "Malvaviscos",
            "Pastillas Yapas",
            "Palitos de la selva",
            "Chupetines",
            "Bolsitas para que los invitados se sirvan"
        ],
        gallery: [
            "/images/creation-caldero-1.jpg",
            "/images/creation-caldero-2.jpg",
            "/images/creation-caldero-3.jpg",
            "/images/creation-caldero-4.jpg"
        ]
    },
    {
        id: 9,
        title: "Encanto Nocturno",
        price: "Consultar",
        description: "Pack ideal para reuniones íntimas. Un punto focal elegante y sofisticado para celebrar con estilo.",
        image: "/images/creation-nocturno-1.jpg",
        tag: "Pack Nocturno",
        isSpecial: true,
        features: [
            "Paneles (1.50 metros de ancho)",
            "Mesas (2-3 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Alfombra para dar calidez al espacio",
            "Iluminación profesional para realzar la decoración"
        ],
        gallery: [
            "/images/creation-nocturno-1.jpg",
            "/images/creation-nocturno-2.jpg"
        ]
    },
    {
        id: 10,
        title: "Gala Estelar",
        price: "Consultar",
        description: "El equilibrio perfecto entre elegancia y celebración. Una atmósfera festiva y refinada con un fondo más amplio.",
        image: "/images/creation-gala-1.jpg",
        tag: "Pack Estelar",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "2 Paneles (3 metros de ancho)",
            "Mesas (3-4 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Alfombra para dar calidez al espacio",
            "Iluminación profesional para realzar la decoración"
        ],
        gallery: [
            "/images/creation-gala-1.jpg",
            "/images/creation-gala-2.jpg",
            "/images/creation-gala-3.jpg"
        ]
    },
    {
        id: 11,
        title: "Celebración Glamour",
        price: "Consultar",
        description: "Deco moderna con Shimmer Wall. Ideal para 18, 30, 40 años. Brillo y sofisticación garantizados.",
        image: "/images/creation-glamour-1.jpg",
        tag: "Pack Glamour",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "3-4 Paneles (4-5 metros de ancho)",
            "Mesas (7 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Alfombra para dar calidez al espacio",
            "Iluminación profesional para realzar la decoración",
            "Shimmer Wall (Pared de lentejuelas)"
        ],
        gallery: [
            "/images/creation-glamour-1.jpg",
            "/images/creation-glamour-2.jpg"
        ]
    },
    {
        id: 12,
        title: "Gala Diamante",
        price: "Consultar",
        description: "¿Buscás una celebración que alcance el máximo nivel de brillo y sofisticación? Nuestra 'Gala Diamante' es nuestro servicio más exclusivo, diseñado para quienes solo se conforman con la perfección.",
        image: "/images/gala-diamante.jpg",
        tag: "Pack Diamante",
        isSpecial: true,
        features: [
            "Ambientación y decoración del sector del candy",
            "4 Paneles (6 metros de ancho)",
            "Mesas (9 mesas)",
            "Posa Torta y accesorios",
            "Arco orgánico de globos",
            "Alfombra para dar calidez al espacio",
            "Iluminación profesional para realzar la decoración",
            "Shimmer Wall (Pared de Brillos)"
        ],
        gallery: [
            "/images/gala-diamante.jpg"
        ]
    }
];

export default function ProductGrid() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [lightboxImage, setLightboxImage] = useState<string | null>(null);

    const handleProductClick = (product: any) => {
        if (product.isSpecial) {
            setSelectedProduct(product);
        }
    };

    return (
        <section id="products" className="py-24 relative">
            <div className="container mx-auto px-4">
                {/* Hechizos Section */}
                <div id="hechizos" className="mb-24 scroll-mt-24">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-4"
                        >
                            Nuestros <span className="text-christmas-red">Hechizos</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 max-w-2xl mx-auto text-xl italic"
                        >
                            Pura Magia y decoración
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.filter(p => [1, 2, 3, 4].includes(p.id)).map((product, index) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                                tag={product.tag}
                                delay={index * 0.1}
                                onClick={() => handleProductClick(product)}
                                onZoom={() => setLightboxImage(product.image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Pocimas Section */}
                <div id="pocimas" className="mb-24 scroll-mt-24">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-4"
                        >
                            Nuestras <span className="text-christmas-red">Pocimas Magicas</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 max-w-2xl mx-auto text-xl italic"
                        >
                            Decoracion + Dulzura total <br /> ¡La solucion completa!
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.filter(p => [5, 6, 7, 8].includes(p.id)).map((product, index) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                                tag={product.tag}
                                delay={index * 0.1}
                                onClick={() => handleProductClick(product)}
                                onZoom={() => setLightboxImage(product.image)}
                            />
                        ))}
                    </div>
                </div>

                {/* Noches Magicas Section */}
                <div id="noches-magicas" className="scroll-mt-24">
                    <div className="text-center mb-16">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-5xl font-bold text-white mb-4"
                        >
                            <span className="text-christmas-red">Noches Magicas</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 max-w-2xl mx-auto text-xl italic"
                        >
                            Estilo y elegancia para tus <br /> celebraciones
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {products.filter(p => [9, 10, 11, 12].includes(p.id)).map((product, index) => (
                            <ProductCard
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image}
                                tag={product.tag}
                                delay={index * 0.1}
                                onClick={() => handleProductClick(product)}
                                onZoom={() => setLightboxImage(product.image)}
                            />
                        ))}
                    </div>
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
                                        <a
                                            href={`https://wa.me/5493874094328?text=${encodeURIComponent(
                                                `Hola! Me interesa ${selectedProduct.title}.\n\nDescripción: ${selectedProduct.description}\n\nIncluye:\n- ${selectedProduct.features?.join('\n- ') || ''}`
                                            )}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block w-full py-4 bg-christmas-red hover:bg-red-600 text-white font-bold text-center rounded-xl transition-all hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                                        >
                                            Consultar Presupuesto
                                        </a>
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
