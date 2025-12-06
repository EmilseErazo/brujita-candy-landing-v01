'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import { X, Trash2, Plus, Minus, ShoppingBag, MessageCircle, CreditCard, Banknote } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { formatPrice } from '@/lib/utils';

export default function CartSidebar() {
    const { cartItems, isCartOpen, toggleCart, removeFromCart, updateQuantity } = useCart();
    const [paymentMethod, setPaymentMethod] = useState<'cash' | 'card'>('cash');

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => {
            const price = paymentMethod === 'cash' ? item.priceCash : item.priceCard;
            return total + (price * item.quantity);
        }, 0);
    };

    const total = calculateTotal();

    const handleCheckout = () => {
        const methodText = paymentMethod === 'cash' ? 'Efectivo/Transferencia' : 'Tarjeta';
        const message = `Hola! Quiero realizar el siguiente pedido de Set de Jardín (${methodText}):\n\n` +
            cartItems.map(item => {
                const price = paymentMethod === 'cash' ? item.priceCash : item.priceCard;
                return `- ${item.title} x${item.quantity} ($${formatPrice(price)})`;
            }).join('\n') +
            `\n\nTotal: $${formatPrice(total)}\n\n¿Cómo podemos coordinar el pago y la entrega?`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/5493874094328?text=${encodedMessage}`, '_blank');
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-slate-900 border-l border-white/10 shadow-2xl z-50 flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-slate-900/50 backdrop-blur-md">
                            <div className="flex items-center gap-3">
                                <ShoppingBag className="text-christmas-red" />
                                <h2 className="text-xl font-bold text-white">Tu Carrito Mágico</h2>
                            </div>
                            <button
                                onClick={toggleCart}
                                className="p-2 hover:bg-white/10 rounded-full transition-colors text-slate-400 hover:text-white"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Cart Items */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 text-slate-500">
                                    <ShoppingBag size={64} className="opacity-20" />
                                    <p className="text-lg">Tu carrito está vacío</p>
                                    <button
                                        onClick={toggleCart}
                                        className="text-christmas-red hover:underline"
                                    >
                                        Ver productos
                                    </button>
                                </div>
                            ) : (
                                cartItems.map((item) => {
                                    const displayPrice = paymentMethod === 'cash' ? item.priceCash : item.priceCard;
                                    return (
                                        <motion.div
                                            key={item.id}
                                            layout
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.9 }}
                                            className="flex gap-4 bg-white/5 p-4 rounded-xl border border-white/5"
                                        >
                                            <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-slate-800">
                                                {item.image.startsWith('/') || item.image.startsWith('http') ? (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-2xl">🍬</div>
                                                )}
                                            </div>
                                            <div className="flex-1 flex flex-col justify-between">
                                                <div>
                                                    <h3 className="font-bold text-white line-clamp-1">{item.title}</h3>
                                                    <p className="text-christmas-gold font-bold">${formatPrice(displayPrice)}</p>
                                                </div>
                                                <div className="flex items-center justify-between mt-2">
                                                    <div className="flex items-center gap-3 bg-slate-950 rounded-lg p-1">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            className="p-1 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors"
                                                            disabled={item.quantity <= 1}
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            className="p-1 hover:bg-white/10 rounded-md text-slate-400 hover:text-white transition-colors"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="p-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 border-t border-white/10 bg-slate-900/50 backdrop-blur-md space-y-4">
                                {/* Payment Method Toggle */}
                                <div className="bg-slate-950 p-1 rounded-xl flex">
                                    <button
                                        onClick={() => setPaymentMethod('cash')}
                                        className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${paymentMethod === 'cash'
                                            ? 'bg-christmas-green text-white shadow-lg'
                                            : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        <Banknote size={16} />
                                        Efvo/Transf
                                    </button>
                                    <button
                                        onClick={() => setPaymentMethod('card')}
                                        className={`flex-1 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${paymentMethod === 'card'
                                            ? 'bg-christmas-green text-white shadow-lg'
                                            : 'text-slate-400 hover:text-white'
                                            }`}
                                    >
                                        <CreditCard size={16} />
                                        Tarjeta
                                    </button>
                                </div>

                                <div className="flex items-center justify-between text-lg font-bold">
                                    <span className="text-slate-300">Total</span>
                                    <span className="text-white text-2xl">${formatPrice(total)}</span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    className="w-full py-4 bg-christmas-green hover:bg-green-600 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(22,163,74,0.4)]"
                                >
                                    <MessageCircle size={20} />
                                    Pedir por WhatsApp
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
