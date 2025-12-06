'use client';

import { useCart } from '@/context/CartContext';
import { ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CartFloatingButton() {
    const { toggleCart, cartCount } = useCart();

    return (
        <AnimatePresence>
            {cartCount > 0 && (
                <motion.button
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleCart}
                    className="fixed bottom-24 right-6 z-40 w-16 h-16 bg-christmas-red rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)] flex items-center justify-center text-white border-2 border-white/20"
                >
                    <ShoppingBag size={28} />
                    <span className="absolute -top-2 -right-2 w-7 h-7 bg-white text-christmas-red rounded-full flex items-center justify-center font-bold text-sm border-2 border-slate-900">
                        {cartCount}
                    </span>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
