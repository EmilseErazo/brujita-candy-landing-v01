'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
    title: string;
    price: string;
    description: string;
    image: string;
    tag: string;
    delay?: number;
    onClick?: () => void;
}

export default function ProductCard({ title, price, description, image, tag, delay = 0, onClick }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            onClick={onClick}
            className={`group relative bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-christmas-red/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)] ${onClick ? 'cursor-pointer' : ''}`}
        >
            {/* Image Container */}
            <div className="relative h-64 w-full overflow-hidden bg-slate-800/50">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-60" />
                {/* Placeholder for actual image - using a colored div for now if image fails or is placeholder */}
                <div className={`w-full h-full ${image.startsWith('/') || image.startsWith('http') ? '' : 'bg-gradient-to-br from-slate-800 to-slate-700'} flex items-center justify-center`}>
                    {image.startsWith('/') || image.startsWith('http') ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                    ) : (
                        <span className="text-4xl">🍬</span>
                    )}
                </div>

                <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/10 backdrop-blur-md text-white border border-white/10">
                        {tag}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-christmas-red transition-colors">{title}</h3>
                    <div className="flex items-center gap-1 text-yellow-400">
                        <Star size={14} fill="currentColor" />
                        <span className="text-sm font-medium">5.0</span>
                    </div>
                </div>

                <p className="text-slate-400 text-sm mb-6 line-clamp-2">
                    {description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{price}</span>
                    <button className="w-10 h-10 rounded-full bg-christmas-red flex items-center justify-center text-white hover:bg-white hover:text-christmas-red transition-all transform hover:scale-110 hover:rotate-12">
                        <ShoppingBag size={18} />
                    </button>
                </div>
            </div>
        </motion.div>
    );
}
