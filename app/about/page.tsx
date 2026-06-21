'use client'
import { useEffect } from 'react';

export default function Page() {
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
        <div className="page active">
            <div className="page-hero">
                <div className="section-eyebrow">Our Story</div>
                <h1>We Help You Build<br />The Brand You <em>Deserve</em></h1>
                <p>Princocoa Studios × PAI Consulting is a brand strategy, content production, and visibility ecosystem
                    helping individuals and organisations communicate their value, build their presence, and grow their
                    influence.</p>
            </div>

            <section className="about-story">
                <div className="section-eyebrow">Who We Are</div>
                <div className="story-grid">
                    <div className="story-text fade-up">
                        <p>We started from a simple belief: <strong>too many brilliant people are invisible.</strong> Not
                            because they lack expertise, talent, or purpose—but because no one taught them how to
                            communicate their value to the world.</p>
                        <p>Princocoa Studios × PAI Consulting was built to change that. We are a partnership between two
                            complementary organisations—<strong>PAI Consulting</strong>, which specialises in personal brand
                            strategy and positioning, and <strong>Princocoa Studios</strong>, which brings that strategy to
                            life through premium content production, photography, videography, and platform management.</p>
                        <p>Together, we work with founders, coaches, creatives, consultants, speakers, faith leaders, and
                            professionals across industries—helping them clarify their message, build their brand, create
                            powerful content, and grow a digital presence that actually reflects who they are.</p>
                    </div>
                    <div className="story-photo fade-up">
                        <svg>
                            <use href="#ico-edit" />
                        </svg>
                        <p>Behind-the-scenes — strategy session &amp; brand consultation</p>
                    </div>
                </div>
            </section>

            <div className="mission-section">
                <div className="section-eyebrow">Our Mission</div>
                <p className="mission-statement">To help every individual, brand, and organisation become <em>visible,
                    memorable, and impactful</em>—by giving them the strategy, the story, and the content they need to
                    be seen, trusted, and chosen.</p>
                <a href="/consultation" className="btn-primary" style={{ display: 'inline-flex' }}>
                    Start Your Journey →
                </a>
            </div>

            <section className="approach-section">
                <div className="section-eyebrow">How We Work</div>
                <h2 className="section-title">Our <em>Approach</em></h2>
                <p className="section-lead">Every engagement follows a clear, strategic progression designed to build lasting
                    visibility and influence.</p>
                <div className="approach-steps">
                    <div className="approach-step fade-up">
                        <div className="ap-node">
                            <div className="ap-icon">01</div>
                        </div>
                        <h4>Brand</h4>
                        <p>We begin with deep discovery—understanding who you are, who you serve, and how you want to be
                            known. We build the strategic framework, visual identity, and messaging foundation that
                            everything else rests upon.</p>
                    </div>
                    <div className="approach-step fade-up">
                        <div className="ap-node">
                            <div className="ap-icon">02</div>
                        </div>
                        <h4>Content</h4>
                        <p>With your brand defined, we transform your expertise into premium visual content—videos,
                            portraits, lifestyle imagery, and brand stories—that communicates your value powerfully and
                            consistently.</p>
                    </div>
                    <div className="approach-step fade-up">
                        <div className="ap-node">
                            <div className="ap-icon">03</div>
                        </div>
                        <h4>Visibility</h4>
                        <p>We manage your digital platforms, keep your presence consistent and active, and connect you with
                            media, speaking, newsletter, and publication opportunities that expand your reach.</p>
                    </div>
                    <div className="approach-step fade-up">
                        <div className="ap-node">
                            <div className="ap-icon">04</div>
                        </div>
                        <h4>Growth</h4>
                        <p>Over time, the combination of a strong brand, consistent content, and strategic visibility
                            compounds—attracting opportunities, building trust, and establishing you as the recognised
                            authority in your field.</p>
                    </div>
                </div>
            </section>

            <section className="why-us">
                <div className="section-eyebrow">Why Clients Choose Us</div>
                <h2 className="section-title">Strategy. Story.<br /><em>Results.</em></h2>
                <div className="why-grid">
                    <div className="why-card fade-up">
                        <div className="why-num">01</div>
                        <h4>Strategy-First Thinking</h4>
                        <p>We never produce content without strategy. Every piece of work—from a brand guideline to a social
                            reel—is rooted in a clear understanding of who you are, who you are speaking to, and what you
                            want to achieve.</p>
                    </div>
                    <div className="why-card fade-up">
                        <div className="why-num">02</div>
                        <h4>Personal Branding Expertise</h4>
                        <p>PAI Consulting brings deep specialisation in personal brand development, positioning, and
                            visibility strategy—helping you articulate your unique value with clarity, confidence, and
                            consistency.</p>
                    </div>
                    <div className="why-card fade-up">
                        <div className="why-num">03</div>
                        <h4>Content Production Excellence</h4>
                        <p>Princocoa Studios produces premium-quality content—photography, videography, lifestyle
                            imagery—that genuinely reflects the calibre of the person behind the brand.</p>
                    </div>
                    <div className="why-card fade-up">
                        <div className="why-num">04</div>
                        <h4>Long-Term Growth Support</h4>
                        <p>We are not a one-and-done service. Our platform management, newsletter, and growth services are
                            designed to support you consistently over time—because visibility is built through sustained
                            presence, not single moments.</p>
                    </div>
                    <div className="why-card fade-up">
                        <div className="why-num">05</div>
                        <h4>Creative Storytelling</h4>
                        <p>We believe every person has a story worth telling. Our creative process is built around
                            uncovering that story—the journey, the expertise, the human behind the brand—and telling it in a
                            way that connects and converts.</p>
                    </div>
                    <div className="why-card fade-up" style={{ background: 'var(--navy)' }}>
                        <div className="why-num" style={{
                            fontFamily: 'var(--serif)',
                            fontSize: '52px',
                            fontWeight: '300',
                            color: 'var(--ink-10)',
                            lineHeight: '1',
                            marginBottom: '14px'
                        }}>
                            ✓
                        </div>
                        <h4 style={{ color: 'var(--white)' }}>Ready To Work Together?</h4>
                        <p style={{ color: 'rgba(255,255,255,0.55)' }}>Book a consultation and let us build something extraordinary
                            together.</p>
                        <a href="/consultation" className="btn-outline-white" style={{
                            marginTop: '20px',
                            display: 'inline-flex'
                        }}>
                            Book A Consultation →
                        </a>
                    </div>
                </div>
            </section>

            <section className="founder-section">
                <div className="section-eyebrow">The People Behind The Work</div>
                <div className="founder-grid">
                    <div className="founder-photo fade-up">
                        <svg style={{ color: 'rgba(255,255,255,0.4)' }}>
                            <use href="#ico-person" />
                        </svg>
                        <p>Founder photograph — professional portrait in a premium environment</p>
                        <div className="founder-photo-badge">
                            <strong>Founder, Princocoa Studios × PAI Consulting</strong>
                            <span>Brand Strategist &amp; Creative Director</span>
                        </div>
                    </div>
                    <div className="founder-bio fade-up">
                        <div className="section-eyebrow">Meet The Founder</div>
                        <h2>The Vision<br />Behind <em>The Work</em></h2>
                        <p>This space is reserved for the founder's personal biography, journey, and story. Add your name,
                            background, professional journey, and the personal experiences that led to building Princocoa
                            Studios × PAI Consulting.</p>
                        <p>Share what drives you, why this work matters to you personally, and the specific expertise and
                            perspective you bring to every client engagement. Your story is part of the brand.</p>
                        <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>
                            — Founder biography placeholder. Update with your personal story, background, and achievements.
                        </p>
                        <ul className="founder-achievements">
                            <li>Achievement or milestone — replace with your own</li>
                            <li>Speaking engagement, award, or recognition</li>
                            <li>Years of experience in branding / strategy / production</li>
                            <li>Notable clients, projects, or publications</li>
                            <li>Community impact or leadership role</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>


    )

}