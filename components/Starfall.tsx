'use client';

import { useEffect, useRef } from 'react';

interface Star {
    x: number;
    y: number;
    size: number;
    speed: number;
    opacity: number;
    twinkleSpeed: number;
}

export default function Starfall() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let stars: Star[] = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createStars = () => {
            const count = Math.floor((window.innerWidth * window.innerHeight) / 15000); // Less dense than snow
            stars = [];
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 8 + 4, // Larger than snow
                    speed: Math.random() * 0.5 + 0.1, // Slower fall
                    opacity: Math.random(),
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                });
            }
        };

        const drawStar = (x: number, y: number, size: number, opacity: number) => {
            ctx.save();
            ctx.fillStyle = `rgba(255, 215, 0, ${opacity})`; // Gold color
            ctx.translate(x, y);
            ctx.beginPath();
            ctx.moveTo(0, 0 - size / 2);
            for (let i = 0; i < 5; i++) {
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, 0 - (size / 2) * 0.5);
                ctx.rotate(Math.PI / 5);
                ctx.lineTo(0, 0 - size / 2);
            }
            ctx.fill();
            ctx.restore();
        };

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach((star) => {
                drawStar(star.x, star.y, star.size, star.opacity);
            });
        };

        const updateStars = () => {
            stars.forEach((star) => {
                star.y += star.speed;
                // Twinkle effect
                star.opacity += star.twinkleSpeed;
                if (star.opacity > 1 || star.opacity < 0.2) {
                    star.twinkleSpeed = -star.twinkleSpeed;
                }

                if (star.y > canvas.height) {
                    star.y = -star.size;
                    star.x = Math.random() * canvas.width;
                }
            });
        };

        const animate = () => {
            drawStars();
            updateStars();
            animationFrameId = requestAnimationFrame(animate);
        };

        resizeCanvas();
        createStars();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createStars();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
        />
    );
}
