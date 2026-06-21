'use client'
import { useEffect, useRef, useState } from 'react';

export default function Page() {
    const trackRef = useRef<HTMLDivElement>(null);
    const [carouselPos, setCarouselPos] = useState(0);

    const moveCarousel = (dir: number) => {
        if (!trackRef.current) return;
        const track = trackRef.current;
        const slides = track.querySelectorAll('.carousel-slide');
        if (slides.length === 0) return;
        const slideW = (slides[0] as HTMLElement).offsetWidth + 24;
        const max = Math.max(0, slides.length - Math.floor(track.parentElement!.offsetWidth / slideW));
        const newPos = Math.max(0, Math.min(max, carouselPos + dir));
        setCarouselPos(newPos);
        track.style.transform = `translateX(-${newPos * slideW}px)`;
    };

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
    }, []); return (
        <div id="page-testimonials" className="page active ">
            <div className="page-hero">
                <div className="section-eyebrow">Client Voices</div>
                <h1>The Results<br /><em>Speak</em></h1>
                <p>What our clients say about working with Princocoa Studios × PAI Consulting—and the transformations they
                    experienced.</p>
            </div>

            <div className="testi-carousel" style={{ paddingTop: '80px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px', padding: '0' }}>
                    <div>
                        <div className="section-eyebrow" style={{ marginBottom: '8px' }}>Featured Testimonials</div>
                        <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '0' }}>What Clients<br />Are Saying</h2>
                    </div>
                    <div className="carousel-controls">
                        <button className="carousel-btn" onClick={() => moveCarousel(-1)}>←</button>
                        <button className="carousel-btn" onClick={() => moveCarousel(1)}>→</button>
                    </div>
                </div>
                <div className="carousel-track-wrap">
                    <div className="carousel-track" id="carousel-track" ref={trackRef}>
                        <div className="carousel-slide">
                            <div className="tquote">"Within three months of completing the Personal Brand Identity programme, I
                                received two speaking invitations, a podcast feature, and closed my biggest consulting
                                contract to date. The investment more than paid for itself."</div>
                            <div className="tname">Adaeze O.</div>
                            <div className="trole">CEO &amp; Executive Coach</div>
                        </div>
                        <div className="carousel-slide">
                            <div className="tquote">"The content shoot was unlike anything I expected. In one day we produced
                                more quality content than I had created in two years. My LinkedIn engagement tripled in 30
                                days after launch."</div>
                            <div className="tname">Femi K.</div>
                            <div className="trole">Founder &amp; Industry Speaker</div>
                        </div>
                        <div className="carousel-slide">
                            <div className="tquote">"I came in knowing my expertise but not how to communicate it. I left with a
                                complete brand system, a content library, and the confidence to show up as the leader I
                                already am."</div>
                            <div className="tname">Rita I.</div>
                            <div className="trole">Executive Director &amp; Faith Leader</div>
                        </div>
                        <div className="carousel-slide">
                            <div className="tquote">"Platform management has been a game-changer. My social media now looks
                                professional, consistent, and strategic—without me having to spend a single hour managing
                                it."</div>
                            <div className="tname">Chukwuemeka A.</div>
                            <div className="trole">Entrepreneur &amp; Business Coach</div>
                        </div>
                        <div className="carousel-slide">
                            <div className="tquote">"The brand discovery session alone was worth more than I expected. I finally
                                have clarity on who I am, who I serve, and how to communicate my value confidently in any
                                room."</div>
                            <div className="tname">Blessing N.</div>
                            <div className="trole">Consultant &amp; Speaker</div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="testi-page">
                <div className="section-eyebrow">All Testimonials</div>
                <h2 className="section-title">Trusted By<br /><em>Remarkable People</em></h2>
                <div className="testi-full-grid">
                    <div className="testi-full-card fade-up">
                        <div className="tfc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="tfc-quote">"Within three months of completing the programme, I received two speaking
                            invitations, a podcast feature, and closed my biggest consulting contract to date."</div>
                        <div className="tfc-author">
                            <div className="tfc-avatar">AO</div>
                            <div className="tfc-info">
                                <h5>Adaeze O.</h5>
                                <p>CEO &amp; Executive Coach</p><span className="tfc-service">Personal Brand Identity
                                    Consultation</span>
                            </div>
                        </div>
                    </div>
                    <div className="testi-full-card fade-up">
                        <div className="tfc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="tfc-quote">"In one day we produced more quality content than I had created in two years.
                            My LinkedIn engagement tripled in 30 days. The ROI is undeniable."</div>
                        <div className="tfc-author">
                            <div className="tfc-avatar">FK</div>
                            <div className="tfc-info">
                                <h5>Femi K.</h5>
                                <p>Founder &amp; Industry Speaker</p><span className="tfc-service">Content Production &amp;
                                    Brand Storytelling</span>
                            </div>
                        </div>
                    </div>
                    <div className="testi-full-card fade-up">
                        <div className="tfc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="tfc-quote">"I came in knowing my expertise but not how to communicate it. I left with a
                            complete brand system, a content library, and the confidence to show up as the person I already
                            am."</div>
                        <div className="tfc-author">
                            <div className="tfc-avatar">RI</div>
                            <div className="tfc-info">
                                <h5>Rita I.</h5>
                                <p>Executive Director &amp; Faith Leader</p><span className="tfc-service">Personal Brand
                                    Identity Consultation</span>
                            </div>
                        </div>
                    </div>
                    <div className="testi-full-card fade-up">
                        <div className="tfc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="tfc-quote">"Platform management has been a complete game-changer. My pages look
                            professional, consistent, and strategic—and I haven't had to touch them. That's powerful."</div>
                        <div className="tfc-author">
                            <div className="tfc-avatar">CA</div>
                            <div className="tfc-info">
                                <h5>Chukwuemeka A.</h5>
                                <p>Entrepreneur &amp; Business Coach</p><span className="tfc-service">Platform Management &amp;
                                    Community Growth</span>
                            </div>
                        </div>
                    </div>
                    <div className="testi-full-card fade-up">
                        <div className="tfc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="tfc-quote">"The image consulting module changed how I show up both online and in person.
                            I have received so many compliments on how polished and put-together my visual brand is now."
                        </div>
                        <div className="tfc-author">
                            <div className="tfc-avatar">TM</div>
                            <div className="tfc-info">
                                <h5>Temi M.</h5>
                                <p>Creative Director &amp; Consultant</p><span className="tfc-service">Personal Brand Identity
                                    Consultation</span>
                            </div>
                        </div>
                    </div>
                    <div className="testi-full-card fade-up">
                        <div className="tfc-stars"><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div>
                        <div className="tfc-quote">"The media placement service landed me a magazine feature I had been trying
                            to get for three years. Having a team that knows how to position you to the media makes all the
                            difference."</div>
                        <div className="tfc-author">
                            <div className="tfc-avatar">BN</div>
                            <div className="tfc-info">
                                <h5>Blessing N.</h5>
                                <p>Consultant &amp; Public Speaker</p><span className="tfc-service">Growth &amp; Visibility
                                    Services</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="video-testi" style={{ paddingBottom: '0' }}>
                <div className="section-eyebrow">Video Testimonials</div>
                <h2 className="section-title">Hear It In<br /><em>Their Own Words</em></h2>
                <p className="section-lead">Video testimonials coming soon. This section will feature real client video reviews
                    once uploaded.</p>
                <div className="vt-grid" style={{ marginTop: '40px' }}>
                    <div className="vt-card">
                        <div className="vt-thumb">
                            <div className="vt-play">
                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                            </div>
                            <p>Video testimonial placeholder</p>
                        </div>
                        <div className="vt-label">
                            <h5>Client Testimonial</h5><span>Personal Brand Consultation</span>
                        </div>
                    </div>
                    <div className="vt-card">
                        <div className="vt-thumb">
                            <div className="vt-play">
                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                            </div>
                            <p>Video testimonial placeholder</p>
                        </div>
                        <div className="vt-label">
                            <h5>Client Testimonial</h5><span>Content Production</span>
                        </div>
                    </div>
                    <div className="vt-card">
                        <div className="vt-thumb">
                            <div className="vt-play">
                                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <polygon points="5,3 19,12 5,21" />
                                </svg>
                            </div>
                            <p>Video testimonial placeholder</p>
                        </div>
                        <div className="vt-label">
                            <h5>Client Testimonial</h5><span>Platform Management</span>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ background: 'var(--bg)', padding: '60px 6vw', textAlign: 'center' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px,3vw,44px)', fontWeight: '300', marginBottom: '16px' }}>
                    Ready To Write Your Own <em style={{ fontStyle: 'italic', color: 'var(--navy)' }}>Success Story?</em>
                </h3>
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
                    <a href="/consultation" className="btn-primary">Book A Consultation →</a>
                    <a href="/#lead-audit" className="btn-secondary">Get A Free Page Audit</a>
                </div>
            </div>
        </div>

    )
}