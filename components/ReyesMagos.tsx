'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ReyesMagos() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 15000); // Hide after animation
        }, 30000); // Run every 30 seconds

        // Initial run
        setTimeout(() => setIsVisible(true), 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed top-20 left-0 w-full h-full pointer-events-none z-40 overflow-hidden">
            {isVisible && (
                <motion.div
                    initial={{ x: '-100vw', y: 0 }}
                    animate={{
                        x: '100vw',
                        y: [0, -10, 0, 10, 0]
                    }}
                    transition={{
                        x: { duration: 12, ease: "linear" }, // Slower than Santa
                        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-20 w-80 h-64 filter drop-shadow-lg" // Larger size for 3 characters
                >
                    <Image
                        src="/images/reyes-magos-character.png"
                        alt="Reyes Magos"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            )}
        </div>
    );
}
