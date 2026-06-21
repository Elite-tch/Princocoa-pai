'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (!target.closest('nav')) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav id="main-nav">
            <Link href="/" className="nav-logo">
                Princocoa<span> × </span>PAI
            </Link>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-links">
                <li><Link href="/" className={pathname === '/' ? 'active-page' : ''}>Home</Link></li>
                <li><Link href="/about" className={pathname === '/about' ? 'active-page' : ''}>About</Link></li>
                <li className="nav-dropdown">
                    <Link href="/services" className={pathname.startsWith('/services') ? 'active-page' : ''}>Services</Link>
                    <div className="nav-drop-menu">
                        <Link href="/services/personal-brand-identity">Personal Brand Identity Consultation</Link>
                        <Link href="/services/content-production">Content Production &amp; Brand Storytelling</Link>
                        <Link href="/services/platform-management">Platform Management &amp; Community Growth</Link>
                        <Link href="/services/podcast-production">Podcast Production</Link>
                        <Link href="/services/youtube-production">YouTube Channel Production</Link>
                        <Link href="/services/additional-visibility">Additional Visibility Services</Link>
                    </div>
                </li>
                <li><Link href="/portfolio" className={pathname === '/portfolio' ? 'active-page' : ''}>Portfolio</Link></li>
                <li><Link href="/who-we-work-with" className={pathname === '/who-we-work-with' ? 'active-page' : ''}>Who We Work With</Link></li>
                <li><Link href="/testimonials" className={pathname === '/testimonials' ? 'active-page' : ''}>Testimonials</Link></li>
                <li><Link href="/consultation" className={pathname === '/consultation' ? 'active-page' : ''}>Contact</Link></li>
                <li><Link href="/consultation" className="nav-cta">Book a Consultation</Link></li>
            </ul>

            <button
                className="nav-mobile-toggle"
                id="nav-toggle"
                aria-label="Toggle menu"
                onClick={toggleMenu}
            >
                <span style={{
                    transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
                    opacity: isOpen ? 1 : 1,
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}></span>
                <span style={{
                    opacity: isOpen ? 0 : 1,
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}></span>
                <span style={{
                    transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
                    opacity: isOpen ? 1 : 1,
                    transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}></span>
            </button>
        </nav>
    );
}