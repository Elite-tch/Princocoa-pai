'use client'
import { useEffect } from 'react';

import { motion } from "framer-motion"

export default function TopScrol() {
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    e.target.classList.add('visible');
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.fade-up').forEach((el, i) => {
            (el as HTMLElement).style.transitionDelay = (i % 4) * 0.07 + 's';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);


    const text = ["Create Content for Next 30 Days in 1 Day"
    ]
    const repeatedText = Array(10).fill(text.join(" • ")).join(" ")

    return (
        <div className="bg-[#004aad] text-white h-12 items-center flex justify-center fixed top-0 z-50 w-full overflow-hidden">
            <motion.div
                animate={{ x: [0, -2000] }}
                transition={{
                    duration: 30,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "linear",
                }}
                className="flex whitespace-nowrap "
            >
                <span className="  flex gap-12 text-sm tracking-widest ">
                    {repeatedText}
                </span>
            </motion.div>
        </div>
    )
}