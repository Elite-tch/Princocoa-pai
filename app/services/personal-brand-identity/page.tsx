'use client'
import { useState, useEffect } from "react";
import Image from "next/image";
export default function PersonalBrandIdentityPage() {
    const [selectedTier, setSelectedTier] = useState<number>(2);
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
    return (
        <section style={{

            marginTop: '5%'
        }} className="service-1 " id="service1">
            <div className="section-eyebrow ">PAI Consulting — Personal Brand Identity Consultation</div>
            <div className="service-header">
                <div>
                    <h2 className="section-title">Turn Your Expertise<br />Into A <em>Recognisable Brand</em></h2>
                    <div className="fade-up">
                        <p style={{
                            fontSize: '17px',
                            color: 'var(--ink-60)',
                            lineHeight: '1.75',
                            maxWidth: '440px',
                            marginBottom: '20px'
                        }}>
                            Your brand is how the world sees you before you walk into the room. We help you take control of
                            that story.
                        </p>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px',
                            marginTop: '4px'
                        }}>
                            <span style={{
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                border: '1px solid var(--border)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>
                                Founders
                            </span>
                            <span style={{
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                border: '1px solid var(--border)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>
                                Coaches
                            </span>
                            <span style={{
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                border: '1px solid var(--border)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>
                                Consultants
                            </span>
                            <span style={{
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                border: '1px solid var(--border)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>
                                Speakers
                            </span>
                            <span style={{
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                border: '1px solid var(--border)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>
                                Creatives
                            </span>
                            <span style={{
                                fontSize: '12px',
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                border: '1px solid var(--border)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>
                                Faith Leaders
                            </span>
                        </div>
                    </div>
                </div>
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/SnXApPL3fQo"
                    title="YouTube video player"
                    style={{ border: 0, borderRadius: "12px" }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>

            {/* 5 SESSION CARDS */}
            <div className="s1-sessions">

                <div className="s1-card fade-up">
                    <div className="s1-card-num">01</div>
                    <div className="s1-card-body">
                        <div className="s1-card-tag">Session One</div>
                        <h4>Brand Discovery<br />&amp; Positioning</h4>
                        <p>Uncover your brand identity, define your position in the market, and build the strategic
                            foundation everything else stands on.</p>
                        <ul className="s1-card-list">
                            <li>Personal Brand Audit</li>
                            <li>Discovery Session</li>
                            <li>Personal Identity Framework</li>
                            <li>Brand Positioning Statement</li>
                            <li>Personal Brand Archetype</li>
                            <li>Audience Mapping</li>
                            <li>Core Values &amp; Mission Development</li>
                        </ul>
                    </div>
                </div>

                <div className="s1-card fade-up">
                    <div className="s1-card-num">02</div>
                    <div className="s1-card-body">
                        <div className="s1-card-tag">Session Two</div>
                        <h4>Personal Brand &amp;<br />Vision Strategy</h4>
                        <p>Build a clear, strategic roadmap for your brand—what you stand for, how you communicate it,
                            and how it grows over the next 12 months.</p>
                        <ul className="s1-card-list">
                            <li>Personal Brand Pillars</li>
                            <li>Personal Brand Strategy</li>
                            <li>Messaging Framework</li>
                            <li>Personal Story Development</li>
                            <li>12 Month Visibility Roadmap</li>
                        </ul>
                    </div>
                </div>

                <div className="s1-card fade-up">
                    <div className="s1-card-num">03</div>
                    <div className="s1-card-body">
                        <div className="s1-card-tag">Session Three</div>
                        <h4>Visual Brand<br />Identity</h4>
                        <p>Create a distinctive visual identity that communicates your positioning instantly—one that
                            looks as good as your work is.</p>
                        <ul className="s1-card-list">
                            <li>Personal Logo Design</li>
                            <li>Brand Colour Palette</li>
                            <li>Typography Selection</li>
                            <li>Visual Mood Board</li>
                            <li>Brand Style Guide</li>
                        </ul>
                    </div>
                </div>

                <div className="s1-card fade-up">
                    <div className="s1-card-num">04</div>
                    <div className="s1-card-body">
                        <div className="s1-card-tag">Session Four</div>
                        <h4>Image<br />Consulting</h4>
                        <p>Align your personal style with your brand positioning so your presence communicates
                            confidence and credibility before you say a word.</p>
                        <ul className="s1-card-list">
                            <li>Personal Style Assessment</li>
                            <li>Signature Look Development</li>
                            <li>Wardrobe Direction</li>
                            <li>On-Camera Presence Guidance</li>
                            <li>Personal Lookbook</li>
                        </ul>
                    </div>
                </div>

                <div className="s1-card s1-card-dark fade-up">
                    <div className="s1-card-num" style={{ color: 'rgba(255,255,255,0.2)' }}>05</div>
                    <div className="s1-card-body">
                        <div className="s1-card-tag" style={{ color: 'rgba(255,255,255,0.4)' }}>Session Five</div>
                        <h4 style={{ color: 'var(--white)' }}>Content<br />Eco-System</h4>
                        <p style={{ color: 'rgba(255,255,255,0.6)' }}>Build a content strategy that keeps you visible,
                            consistent, and positioned as the authority in your space—without burning out.</p>
                        <ul className="s1-card-list s1-list-dark">
                            <li>Content Ecosystem Planning</li>
                            <li>Content Calendar Framework</li>
                            <li>Content Pillars</li>
                            <li>Messaging Framework</li>
                            <li>Storytelling Framework</li>
                            <li>Content Strategy</li>
                        </ul>
                    </div>
                </div>
                <div className="s1-outcomes-right">
                    <div style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'rgba(255,255,255,0.35)',
                        marginBottom: '20px'
                    }}>
                        Full Programme Deliverables
                    </div>
                    <ul style={{ listStyle: 'none' }}>
                        <li style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '9px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>✓</span>
                            Personal Brand Identity Book
                        </li>
                        <li style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '9px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>✓</span>
                            Brand Guidelines Document
                        </li>
                        <li style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '9px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>✓</span>
                            Visual Identity Suite
                        </li>
                        <li style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '9px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>✓</span>
                            Messaging Framework
                        </li>
                        <li style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '9px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>✓</span>
                            Personal Style Guide
                        </li>
                        <li style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '9px 0',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>✓</span>
                            12 Month Visibility Roadmap
                        </li>
                        <li style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.7)',
                            padding: '9px 0',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '12px' }}>✓</span>
                            Content Strategy &amp; Ecosystem Plan
                        </li>
                    </ul>
                </div>
            </div>

            {/* OUTCOMES */}
            <div className="flex items-cente justify-center fade-up">
                <div className="s1-outcomes-left w-ful">
                    <div style={{
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase',
                        color: 'var(--subtle)',
                        marginBottom: '20px'
                    }}>
                        What You Walk Away With
                    </div>
                    <div className="s1-outcome-grid">
                        <div className="s1-outcome-item">
                            <div className="s1-outcome-word">Clarity</div>
                            <p>On who you are, who you serve, and what you stand for</p>
                        </div>
                        <div className="s1-outcome-item">
                            <div className="s1-outcome-word">Confidence</div>
                            <p>To show up consistently and communicate your value with conviction</p>
                        </div>
                        <div className="s1-outcome-item">
                            <div className="s1-outcome-word">Consistency</div>
                            <p>A visual and messaging system that works across every touchpoint</p>
                        </div>
                        <div className="s1-outcome-item">
                            <div className="s1-outcome-word">Visibility</div>
                            <p>A strategy and roadmap that puts you in front of the right people</p>
                        </div>
                        <div className="s1-outcome-item">
                            <div className="s1-outcome-word">Authority</div>
                            <p>A brand that positions you as the expert in your field</p>
                        </div>
                        <div className="s1-outcome-item">
                            <div className="s1-outcome-word">Opportunity</div>
                            <p>Speaking engagements, partnerships, media, and clients—seeking you out</p>
                        </div>
                    </div>
                </div>
                <div className="w-full bg-[#F8F8F8]">
                    <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782490539/Copy_of_KDS-53_2_kk1drw.jpg'
                        alt='visibility'
                        width={100}
                        height={500}
                        unoptimized
                        className=' full w-[100%]'
                    />
                </div>
            </div>

            {/* SESSION CHOOSER (single session) */}
            <div className="session-chooser fade-up" style={{ marginTop: '3px' }}>
                <h4>Not Ready For The Full Programme?</h4>
                <p>Start with a single session in the area you need most.</p>
                <div className="session-chips">
                    <div className="session-chip">Brand Discovery &amp; Positioning</div>
                    <div className="session-chip">Brand &amp; Vision Strategy</div>
                    <div className="session-chip">Visual Brand Identity</div>
                    <div className="session-chip">Image Consulting</div>
                    <div className="session-chip">Content Eco-System</div>
                </div>
            </div>

            {/* PRICING */}
            <div className="service-bottom" style={{ marginTop: '3px' }}>
                <div className="deliverables-box fade-up" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }}>
                    <div>
                        <h4>Book A Consultation</h4>
                        <p style={{
                            fontSize: '15px',
                            color: 'var(--ink-60)',
                            lineHeight: '1.7',
                            marginBottom: '28px'
                        }}>
                            Every programme begins with a conversation. Tell us where you are—we'll recommend the right starting point.
                        </p>
                        <a href="mailto:princocoastudios@gmail.com" className="btn-primary" style={{
                            marginBottom: '12px',
                            display: 'inline-flex'
                        }}>
                            Book A Consultation →
                        </a>
                        <div style={{ display: 'block', marginTop: '10px' }}>
                            <a href="#lead-audit" className="btn-secondary" style={{ fontSize: '12px', padding: '12px 24px' }}>
                                Get A Free Page Audit
                            </a>
                        </div>
                    </div>

                    <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782493704/Copy_of_untitled-02164_wmnihk.jpg'
                        alt='visibility'
                        width={100}
                        height={200}
                        unoptimized
                        style={{
                            marginTop: '20px'
                        }}
                        className='w-[100%] h-full  '
                    />



                    <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                        <div style={{
                            fontSize: '12px',
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            color: 'var(--subtle)',
                            marginBottom: '10px'
                        }}>
                            Also great for
                        </div>
                        <p style={{ fontSize: '14px', color: 'var(--ink-60)', lineHeight: '1.7' }}>
                            CEOs · Entrepreneurs · Coaches · Consultants · Speakers · Creatives · Faith Leaders · Professionals seeking authority
                        </p>
                    </div>
                </div>
                <div className="pricing-box fade-up">
                    <h4>Investment</h4>
                    <div className="pricing-sub">Personal Brand Identity Consultation</div>
                    <div className={`pricing-tier ${selectedTier === 0 ? 'selected' : ''}`} onClick={() => setSelectedTier(0)} style={{ cursor: 'pointer' }}>
                        <div className="pt-label">Single Session</div>
                        <div className="pt-price"><span>&#8358;</span>150,000</div>
                        <div className="pt-desc">Choose any one session based on your current needs.</div>
                    </div>
                    <div className={`pricing-tier ${selectedTier === 1 ? 'selected' : ''}`} onClick={() => setSelectedTier(1)} style={{ cursor: 'pointer' }}>
                        <div className="pt-label">4 Sessions</div>
                        <div className="pt-price"><span>&#8358;</span>450,000</div>
                        <div className="pt-desc">A focused brand development programme covering multiple areas of your personal brand.</div>
                    </div>
                    <div className={`pricing-tier featured ${selectedTier === 2 ? 'selected' : ''}`} onClick={() => setSelectedTier(2)} style={{ cursor: 'pointer' }}>
                        <div className="pricing-badge">Recommended</div>
                        <div className="pt-label">Full Programme — 5 Sessions</div>
                        <div className="pt-price"><span>&#8358;</span>650,000</div>
                        <div className="pt-desc">The complete personal brand transformation experience covering strategy, identity, image, visibility, and content.</div>
                    </div>
                    <a href="mailto:princocoastudios@gmail.com" className="pricing-cta">Start Your Programme</a>

                    <div className="pay-section">
                        {selectedTier === 0 && (
                            <button className="paystack-btn">
                                <span className="pb-label">Single Session</span>
                                <span className="pb-amount">&#8358;150,000</span>
                                <span className="pb-arrow">→</span>
                            </button>
                        )}
                        {selectedTier === 1 && (
                            <button className="paystack-btn">
                                <span className="pb-label">4 Sessions</span>
                                <span className="pb-amount">&#8358;450,000</span>
                                <span className="pb-arrow">→</span>
                            </button>
                        )}
                        {selectedTier === 2 && (
                            <button className="paystack-btn">
                                <span className="pb-label">Full Programme (5 Sessions)</span>
                                <span className="pb-amount">&#8358;650,000</span>
                                <span className="pb-arrow">→</span>
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}