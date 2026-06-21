'use client'
import { useEffect, useState } from 'react';

export default function Page() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

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

    const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        try {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!);
            formData.append('subject', 'New Newsletter Subscriber - Princocoa Studios');
            formData.append('from_name', 'Princocoa Studios Newsletter');
            formData.append('form_type', 'newsletter');

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus('success');
                setMessage('✅ You\'ve been subscribed!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage('❌ Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('❌ Please try again.');
        }
    };

    return (
        <>
            <section className="social-connect" id="social-section">
                <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Connect With Us</div>
                <div className="social-connect-inner">
                    <div className="social-left fade-up">
                        <h2 className="section-title" style={{ color: 'var(--white)' }}>Follow The<br /><em>Journey</em></h2>
                        <p>Stay connected across Instagram, LinkedIn, and YouTube for behind-the-scenes content, client
                            transformations, tips on building your brand, and visibility insights.</p>
                        <div className="social-platforms">
                            <a href="https://instagram.com/princocoastudios" target="_blank" rel="noopener" className="social-btn">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                                </svg>
                                Instagram
                            </a>
                            <a href="https://linkedin.com/company/princocoastudios" target="_blank" rel="noopener" className="social-btn">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                LinkedIn
                            </a>
                            <a href="https://youtube.com/@princocoastudios" target="_blank" rel="noopener" className="social-btn">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                                    <polygon points="9.75,15.02 15.5,12 9.75,8.98" fill="currentColor" stroke="none" />
                                </svg>
                                YouTube
                            </a>
                        </div>
                    </div>
                    <div className="social-right">
                        <div className="social-preview">
                            <div className="sp-fill">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                </svg>
                                <p>IG Post</p>
                            </div>
                        </div>
                        <div className="social-preview">
                            <div className="sp-fill">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                </svg>
                                <p>IG Post</p>
                            </div>
                        </div>
                        <div className="social-preview">
                            <div className="sp-fill">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                <p>LinkedIn</p>
                            </div>
                        </div>
                        <div className="social-preview">
                            <div className="sp-fill">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <circle cx="12" cy="12" r="5" />
                                </svg>
                                <p>IG Post</p>
                            </div>
                        </div>
                        <div className="social-preview">
                            <div className="sp-fill">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                                </svg>
                                <p>YouTube</p>
                            </div>
                        </div>
                        <div className="social-preview">
                            <div className="sp-fill">
                                <svg fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                <p>LinkedIn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THANK YOU MODAL */}
            <div className="modal-overlay" id="thankyou-modal">
                <div className="modal-box">
                    <button className="modal-close" onClick={() => document.getElementById('thankyou-modal')?.classList.remove('open')}>
                        ×
                    </button>
                    <div style={{ fontSize: '40px', marginBottom: '16px' }}>✓</div>
                    <h3>Payment Confirmed</h3>
                    <p>Thank you for your payment. A confirmation has been sent to your email. Our team will be in touch within
                        48 hours to schedule your next steps.</p>
                    <a href="#consultation"
                        onClick={() => {
                            document.getElementById('thankyou-modal')?.classList.remove('open');
                        }}
                        className="btn-primary" style={{ display: 'inline-flex', fontSize: '13px', padding: '13px 28px' }}>
                        Book Your Consultation →
                    </a>
                </div>
            </div>

            {/* FOOTER */}
            <footer>
                <div className="footer-top" style={{ gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr' }}>
                    <div>
                        <div className="footer-brand-name">Princocoa Studios<span> &#215; </span>PAI Consulting</div>
                        <div className="footer-tagline">A complete Brand &amp; Visibility Ecosystem for founders, coaches,
                            creatives, consultants, speakers, faith leaders, and professionals ready to be known for the right
                            reasons.</div>
                        <div className="footer-newsletter">
                            <p>Join Our Newsletter</p>
                            <form onSubmit={handleNewsletterSubmit} className="fn-row">
                                <input
                                    type="email"
                                    id="footer-email"
                                    placeholder="Your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <button type="submit" disabled={status === 'loading'}>
                                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </form>
                            {message && (
                                <p style={{
                                    marginTop: '8px',
                                    fontSize: '13px',
                                    color: status === 'success' ? '#4CAF50' : '#e55a5a'
                                }}>
                                    {message}
                                </p>
                            )}
                        </div>
                    </div>
                    <div className="footer-col">
                        <h5>Services</h5>
                        <ul>
                            <li><a href="#service1" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Personal Brand Consultation</a></li>
                            <li><a href="#service2" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Content Production</a></li>
                            <li><a href="#service3" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Platform Management</a></li>
                            <li><a href="#service-podcast" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Podcast Production</a></li>
                            <li><a href="#service-youtube" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>YouTube Production</a></li>
                            <li><a href="#growth" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Visibility Services</a></li>
                            <li><a href="#pricing" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Pricing</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h5>Pages</h5>
                        <ul>
                            <li><a href="#about" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>About Us</a></li>
                            <li><a href="#portfolio" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Portfolio</a></li>
                            <li><a href="#testimonials" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Testimonials</a></li>
                            <li><a href="#wwwith" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Who We Work With</a></li>
                            <li><a href="#contact" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h5>Connect</h5>
                        <ul>
                            <li><a href="#consultation" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Book a Consultation</a></li>
                            <li><a href="#lead-audit" onClick={(e) => { e.preventDefault(); /* Handle navigation */ }}>Free Page Audit</a></li>
                            <li><a href="mailto:princocoastudios@gmail.com">Email Us</a></li>
                            <li><a href="https://instagram.com/princocoastudios" target="_blank">Instagram</a></li>
                            <li><a href="https://linkedin.com/company/princocoastudios" target="_blank">LinkedIn</a></li>
                            <li><a href="https://youtube.com/@princocoastudios" target="_blank">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-copy">&#169; 2026 Princocoa Studios &#215; PAI Consulting. All rights reserved.</div>
                    <div className="footer-partners">
                        <span className="footer-partner-tag">Princocoa Studios</span>
                        <span style={{ color: 'rgba(255,255,255,0.15)' }}>&#215;</span>
                        <span className="footer-partner-tag">PAI Consulting</span>
                    </div>
                </div>
            </footer>
        </>
    )
}