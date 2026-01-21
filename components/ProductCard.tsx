'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { formatPrice } from '@/lib/utils';
import { ShoppingCart, Sparkles, ZoomIn } from 'lucide-react';

interface ProductCardProps {
    title: string;
    price?: number | string;
    priceCash?: number;
    priceCard?: number;
    description: string;
    image: string;
    tag: string;
    delay?: number;
    isSpecial?: boolean;
    onAddToCart?: () => void;
    onClick?: () => void;
    onZoom?: () => void;
    originalPrice?: number;
    discountPercentage?: number;
}

export default function ProductCard({
    title,
    price,
    priceCash,
    priceCard,
    description,
    image,
    tag,
    delay = 0,
    isSpecial = false,
    onAddToCart,
    onClick,
    onZoom,
    originalPrice,
    discountPercentage
}: ProductCardProps) {
    const displayPriceCash = priceCash || (typeof price === 'number' ? price : 0);
    const displayPriceCard = priceCard || (typeof price === 'number' ? price * 1.2 : 0);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className={`group relative bg-slate-900 rounded-3xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${isSpecial ? 'border-christmas-gold/50 hover:border-christmas-gold hover:shadow-christmas-gold/20' : 'border-white/10 hover:border-christmas-green/50 hover:shadow-christmas-green/20'
                }`}
            onClick={onClick}
        >
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md border ${isSpecial
                        ? 'bg-christmas-gold/20 text-christmas-gold border-christmas-gold/20'
                        : 'bg-christmas-red/20 text-christmas-red border-christmas-red/20'
                        }`}>
                        {tag}
                    </span>
                </div>
                {onZoom && (
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onZoom();
                        }}
                        className="absolute top-4 right-4 p-2 bg-black/40 backdrop-blur-sm rounded-full text-white/80 hover:text-white hover:bg-black/60 transition-colors opacity-0 group-hover:opacity-100"
                    >
                        <ZoomIn size={18} />
                    </button>
                )}
            </div>

            <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isSpecial ? 'text-christmas-gold' : 'text-white'}`}>
                    {title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-3">
                    {description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        {originalPrice ? (
                            <div className="flex flex-col">
                                <span className="text-lg text-slate-400 line-through font-semibold mb-1">
                                    ${formatPrice(originalPrice)}
                                </span>
                                <div className="flex flex-wrap items-baseline gap-2">
                                    <span className="text-3xl font-bold text-christmas-red">
                                        ${formatPrice(typeof price === 'number' ? price : 0)}
                                    </span>
                                    <span className="text-sm font-normal text-christmas-red">con Transferencia o efectivo</span>
                                </div>
                                <span className="text-xs mt-1 block leading-tight">
                                    <span className="text-christmas-red font-bold">20% de descuento</span>
                                    <span className="text-slate-500"> pagando con transferencia o efectivo</span>
                                </span>
                            </div>
                        ) : (
                            typeof price === 'number' || priceCash ? (
                                <>
                                    <span className="text-lg font-bold text-white">
                                        ${formatPrice(displayPriceCash)} <span className="text-xs font-normal text-slate-400">(Efvo/Transf)</span>
                                    </span>
                                    <span className="text-sm text-slate-400">
                                        ${formatPrice(displayPriceCard)} <span className="text-xs">(Tarjeta)</span>
                                    </span>
                                </>
                            ) : (
                                <span className="text-xl font-bold text-white">{price}</span>
                            )
                        )}
                    </div>
                    {onAddToCart ? (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onAddToCart();
                            }}
                            className="p-3 bg-christmas-green hover:bg-green-600 text-white rounded-xl transition-colors hover:shadow-[0_0_15px_rgba(22,163,74,0.4)]"
                            aria-label="Agregar al carrito"
                        >
                            <ShoppingCart size={20} />
                        </button>
                    ) : (
                        <div className={`p-2 rounded-full border transition-colors ${isSpecial
                            ? 'border-christmas-gold/30 text-christmas-gold group-hover:bg-christmas-gold/10'
                            : 'border-christmas-green/30 text-christmas-green group-hover:bg-christmas-green/10'
                            }`}>
                            <Sparkles size={20} />
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}
