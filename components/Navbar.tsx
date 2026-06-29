'use client'

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setIsServicesOpen(false);
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

    const closeMenu = () => {
        setIsOpen(false);
        setIsServicesOpen(false);
    };

    const closeServicesMenu = () => {
        setIsServicesOpen(false);
    };

    return (
        <nav id="main-nav" className="">
            <Link href="/" className="nav-logo">
                Princocoa<span> × </span>PAI
            </Link>

            <ul className={`nav-links ${isOpen ? 'open' : ''}`} id="nav-links">
                <li><Link href="/" className={pathname === '/' ? 'active-page' : ''} onClick={closeMenu}>Home</Link></li>
                <li><Link href="/about" className={pathname === '/about' ? 'active-page' : ''} onClick={closeMenu}>About</Link></li>
                <li
                    className={`nav-dropdown ${isServicesOpen ? 'open' : ''}`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={closeServicesMenu}
                    onFocusCapture={() => setIsServicesOpen(true)}
                    onBlurCapture={(e) => {
                        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
                            closeServicesMenu();
                        }
                    }}
                >
                    <span
                        role="button"
                        tabIndex={0}
                        className={`nav-services-toggle ${pathname.startsWith('/services') ? 'active-page' : ''}`}
                        onClick={(e) => {
                            // On mobile (no hover), toggle the dropdown on tap
                            if (window.matchMedia('(max-width: 900px)').matches) {
                                e.preventDefault();
                                setIsServicesOpen(!isServicesOpen);
                            }
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                if (window.matchMedia('(max-width: 900px)').matches) {
                                    e.preventDefault();
                                    setIsServicesOpen(!isServicesOpen);
                                }
                            }
                        }}
                    >
                        <Link href="/services" className={pathname.startsWith('/services') ? 'active-page' : ''} onClick={(e) => {
                            if (window.matchMedia('(max-width: 900px)').matches) {
                                e.preventDefault(); // prevent navigation; tap toggles dropdown instead
                                setIsServicesOpen(!isServicesOpen);
                            } else {
                                closeMenu();
                            }
                        }}>Services</Link>
                    </span>
                    <div className="nav-drop-menu">
                        <Link href="/services/personal-brand-identity" onClick={closeMenu}>Personal Brand Identity Consultation</Link>
                        <Link href="/services#service2" onClick={closeMenu}>Content Production &amp; Brand Storytelling</Link>
                        <Link href="/services#service3" onClick={closeMenu}>Platform Management &amp; Community Growth</Link>
                        <Link href="/services#service-podcast" onClick={closeMenu}>Podcast Production</Link>
                        <Link href="/services#service-youtube" onClick={closeMenu}>YouTube Channel Production</Link>
                        <Link href="/services#growth" onClick={closeMenu}>Growth &amp; Visibility Services</Link>
                    </div>
                </li>
                <li><Link href="/portfolio" className={pathname === '/portfolio' ? 'active-page' : ''} onClick={closeMenu}>Portfolio</Link></li>
                <li><Link href="/who-we-work-with" className={pathname === '/who-we-work-with' ? 'active-page' : ''} onClick={closeMenu}>Who We Work With</Link></li>
                <li><Link href="/testimonials" className={pathname === '/testimonials' ? 'active-page' : ''} onClick={closeMenu}>Testimonials</Link></li>
                <li><Link href="/consultation" className={pathname === '/consultation' ? 'active-page' : ''} onClick={closeMenu}>Contact</Link></li>
                <li><Link href="/consultation" className="nav-cta" onClick={closeMenu}>Book a Consultation</Link></li>
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
