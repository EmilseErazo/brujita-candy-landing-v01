'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function SantaClaus() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(true);
            setTimeout(() => setIsVisible(false), 10000); // Hide after animation
        }, 20000); // Run every 20 seconds

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
                        y: [0, -20, 0, 20, 0]
                    }}
                    transition={{
                        x: { duration: 8, ease: "linear" },
                        y: { duration: 8, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute top-10 w-48 h-48 filter drop-shadow-lg"
                >
                    <Image
                        src="/images/santa-character.png"
                        alt="Santa Claus"
                        fill
                        className="object-contain"
                    />
                </motion.div>
            )}
        </div>
    );
}
