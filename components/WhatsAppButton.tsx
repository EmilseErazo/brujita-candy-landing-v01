'use client';

import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
    const phoneNumber = "5493874094328"; // Updated number
    const message = "Hola! Me gustaría hacer un pedido mágico 🍬";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-shadow flex items-center justify-center"
        >
            <MessageCircle size={32} fill="white" className="text-[#25D366]" />
            <span className="absolute right-full mr-4 bg-white text-slate-900 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                ¡Pide aquí!
            </span>
        </motion.a>
    );
}
