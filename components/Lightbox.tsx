'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';

interface LightboxProps {
    image: string | null;
    onClose: () => void;
}

export default function Lightbox({ image, onClose }: LightboxProps) {
    // Lock body scroll when lightbox is open
    useEffect(() => {
        if (image) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [image]);

    return (
        <AnimatePresence>
            {image && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
                    onClick={onClose}
                >
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors z-10"
                    >
                        <X size={24} />
                    </button>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-5xl h-full max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={image}
                                alt="Zoomed Image"
                                fill
                                className="object-contain"
                                sizes="100vw"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
