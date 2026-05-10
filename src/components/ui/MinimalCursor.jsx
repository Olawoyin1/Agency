import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function MinimalCursor() {
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePos = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        const handleMouseOver = (e) => {
            if (e.target.tagName && ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(e.target.tagName) || e.target.closest('button, a, input, select, textarea, .faq-item, .group')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePos);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePos);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-black pointer-events-none z-[9999] flex items-center justify-center hidden md:flex mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.2 }}
            />
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 rounded-full bg-white pointer-events-none z-[9999] hidden md:block mix-blend-difference"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    scale: isHovering ? 3 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.1 }}
            />
        </>
    );
}
