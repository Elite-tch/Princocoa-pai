'use client'
import { useEffect, useState } from 'react';

export default function Page() {
    const [filter, setFilter] = useState('all');
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
        <div id="page-portfolio" className="page active">
            <div className="page-hero">
                <div className="section-eyebrow">Our Work</div>
                <h1>Portfolio &amp;<br /><em>Case Studies</em></h1>
                <p>A showcase of personal branding projects, content production work, media placements, and visibility
                    transformations.</p>
            </div>

            <section className="portfolio-intro">
                <div className="section-eyebrow">Our Work</div>
                <h2 className="section-title">Brands We've<br /><em>Built &amp; Told</em></h2>
                <p className="section-lead">Each project below represents a real transformation—from unclear and invisible, to
                    confident, credible, and seen.</p>
                <div className="portfolio-filter">
                    <button className={`pf-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
                    <button className={`pf-btn ${filter === 'branding' ? 'active' : ''}`} onClick={() => setFilter('branding')}>Personal Branding</button>
                    <button className={`pf-btn ${filter === 'content' ? 'active' : ''}`} onClick={() => setFilter('content')}>Content Production</button>
                    <button className={`pf-btn ${filter === 'photography' ? 'active' : ''}`} onClick={() => setFilter('photography')}>Photography</button>
                    <button className={`pf-btn ${filter === 'media' ? 'active' : ''}`} onClick={() => setFilter('media')}>Media &amp; Visibility</button>
                    <button className={`pf-btn ${filter === 'podcast' ? 'active' : ''}`} onClick={() => setFilter('podcast')}>Podcast &amp; YouTube</button>
                    <button className={`pf-btn ${filter === 'transformation' ? 'active' : ''}`} onClick={() => setFilter('transformation')}>Transformations</button>
                </div>
                <div className="portfolio-grid" id="portfolio-grid">
                    <div className="portfolio-item" data-cat="branding" style={{ display: filter === 'all' || filter === 'branding' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#E8E8E8,#F0F0F0)' }}>
                            <svg style={{ color: 'rgba(11,31,58,0.2)' }}>
                                <use href="#ico-person" />
                            </svg>
                            <p>Brand identity project</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Complete Brand Identity</h5><span>Personal Branding · Brand Discovery</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="content" style={{ display: filter === 'all' || filter === 'content' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#2A2A2A,#1A1A1A)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-camera" />
                            </svg>
                            <p>Content day shoot</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>30-Day Content Library</h5><span>Content Production · Cinema</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="branding" style={{ display: filter === 'all' || filter === 'branding' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#F4F4F4,#E8E8E8)' }}>
                            <svg style={{ color: 'rgba(11,31,58,0.2)' }}>
                                <use href="#ico-star" />
                            </svg>
                            <p>Visibility transformation</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Visibility Transformation</h5><span>Brand Strategy · Content</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="media" style={{ display: filter === 'all' || filter === 'media' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#0f2035,#222222)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-mic" />
                            </svg>
                            <p>Media placement</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Magazine Feature</h5><span>Media Placement · Press</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="content" style={{ display: filter === 'all' || filter === 'content' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#1A1A1A,#252525)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-play" />
                            </svg>
                            <p>Thought leadership videos</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Thought Leadership Series</h5><span>Content Production · Video</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="media" style={{ display: filter === 'all' || filter === 'media' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#222222,#111111)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-image" />
                            </svg>
                            <p>Speaking engagement</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Speaking Engagement</h5><span>Stage Design · Presence</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="branding" style={{ display: filter === 'all' || filter === 'branding' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#F0F0F0,#F8F8F8)' }}>
                            <svg style={{ color: 'rgba(11,31,58,0.2)' }}>
                                <use href="#ico-edit" />
                            </svg>
                            <p>Brand guidelines</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Brand Guidelines &amp; Identity</h5><span>Visual Identity · Style Guide</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="content" style={{ display: filter === 'all' || filter === 'content' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#1A1A1A,#1E1E1E)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-image" />
                            </svg>
                            <p>Lifestyle photography</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Lifestyle Photography</h5><span>Content Production · Photography</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="media" style={{ display: filter === 'all' || filter === 'media' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#222222,#111111)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-play" />
                            </svg>
                            <p>Podcast appearance</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Podcast Guest Placement</h5><span>Media Placement · Audio</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="transformation" style={{ display: filter === 'all' || filter === 'transformation' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#000000,#a7dff5,#eaf7fc)' }}>
                            <svg style={{ color: 'rgba(11,31,58,0.3)' }}>
                                <use href="#ico-star" />
                            </svg>
                            <p>Before &amp; after brand transformation</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Brand Transformation</h5><span>Before &amp; After · Full Ecosystem</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="content" style={{ display: filter === 'all' || filter === 'content' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#111111,#2A2A2A)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-play" />
                            </svg>
                            <p>Short-form reels &amp; videos</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Reels &amp; Short-Form Content</h5><span>Content Production · Video</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="transformation" style={{ display: filter === 'all' || filter === 'transformation' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#eaf7fc,#E8E8E8)' }}>
                            <svg style={{ color: 'rgba(11,31,58,0.2)' }}>
                                <use href="#ico-person" />
                            </svg>
                            <p>Image consulting &amp; personal style</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Image &amp; Style Transformation</h5><span>Image Consulting · Visual Identity</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="media" style={{ display: filter === 'all' || filter === 'media' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#0d1f38,#1A1A1A)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-mic" />
                            </svg>
                            <p>Television &amp; news feature</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>TV &amp; News Feature</h5><span>Media Placement · Television</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="podcast" style={{ display: filter === 'all' || filter === 'podcast' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#111111,#333333)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.3)' }}>
                                <use href="#ico-mic" />
                            </svg>
                            <p>I Have The Floor Podcast</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>I Have The Floor Podcast</h5><span>Podcast Production · End-to-End</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="podcast" style={{ display: filter === 'all' || filter === 'podcast' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#1A1A1A,#333333)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-play" />
                            </svg>
                            <p>YouTube podcast production</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>YouTube Podcast Publishing</h5><span>YouTube · Podcast Production</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="podcast" style={{ display: filter === 'all' || filter === 'podcast' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#2A2A2A,#2a4e72)' }}>
                            <svg style={{ color: 'rgba(255,255,255,0.25)' }}>
                                <use href="#ico-camera" />
                            </svg>
                            <p>Multi-camera podcast set</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Multi-Camera Podcast Set</h5><span>Podcast Production · Cinematography</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="photography" style={{ display: filter === 'all' || filter === 'photography' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#E8E8E8,#eaf7fc)' }}>
                            <svg style={{ color: 'rgba(11,31,58,0.2)' }}>
                                <use href="#ico-image" />
                            </svg>
                            <p>Professional portrait series</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Professional Portrait Series</h5><span>Photography · Personal Branding</span>
                        </div>
                    </div>
                    <div className="portfolio-item" data-cat="photography" style={{ display: filter === 'all' || filter === 'photography' ? 'block' : 'none' }}>
                        <div className="pi-thumb" style={{ background: 'linear-gradient(135deg,#F0F0F0,#E8E8E8)' }}>
                            <svg style={{ color: 'rgba(11,31,58,0.18)' }}>
                                <use href="#ico-person" />
                            </svg>
                            <p>Lifestyle brand photography</p>
                        </div>
                        <div className="pi-overlay"></div>
                        <div className="pi-info">
                            <h5>Lifestyle Brand Photography</h5><span>Photography · Brand Storytelling</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURED PROJECT: I HAVE THE FLOOR */}
            <section style={{ background: 'var(--navy)', padding: 'var(--section-pad)' }}>
                <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>Featured Project</div>
                <h2 className="section-title" style={{ color: 'var(--white)', marginBottom: '48px' }}>I Have The Floor <em>Podcast</em>
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
                    <div style={{ background: 'rgba(255,255,255,.05)', border: '1px solid rgba(255,255,255,.08)', padding: '52px 44px' }}>
                        <div style={{ fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '24px' }}>
                            Project Overview
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '36px' }}>
                            <div>
                                <div style={{ fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '6px' }}>
                                    Role
                                </div>
                                <div style={{ fontSize: '15px', color: 'var(--white)', fontWeight: '400' }}>End-to-End Podcast Production
                                </div>
                            </div>
                            <div>
                                <div style={{ fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '6px' }}>
                                    Type
                                </div>
                                <div style={{ fontSize: '15px', color: 'var(--white)' }}>Podcast Production</div>
                            </div>
                        </div>
                        <div style={{ fontSize: '11px', letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: '14px' }}>
                            Services Delivered
                        </div>
                        <ul style={{ listStyle: 'none', marginBottom: '32px' }}>
                            <li style={{ fontSize: '14px', color: 'rgba(255,255,255,.65)', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>✓</span>Podcast Strategy &amp;
                                Production Planning
                            </li>
                            <li style={{ fontSize: '14px', color: 'rgba(255,255,255,.65)', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>✓</span>Recording &amp;
                                Multi-Camera Setup
                            </li>
                            <li style={{ fontSize: '14px', color: 'rgba(255,255,255,.65)', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>✓</span>Audio Editing &amp; Video
                                Editing
                            </li>
                            <li style={{ fontSize: '14px', color: 'rgba(255,255,255,.65)', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>✓</span>Content Repurposing &amp;
                                Podcast Clips
                            </li>
                            <li style={{ fontSize: '14px', color: 'rgba(255,255,255,.65)', padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.06)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>✓</span>Distribution Assets &amp;
                                Visual Branding Support
                            </li>
                        </ul>
                        <p style={{ fontSize: '14px', color: 'rgba(255,255,255,.4)', lineHeight: '1.75', marginBottom: '28px' }}>Produced
                            from concept to final delivery, supporting the podcast through the full production process and
                            creating content assets for audience growth and visibility.</p>
                        <a href="https://youtu.be/p1VfoVizdWs?si=k4Q_Da8XDI-h4Sfz" target="_blank" rel="noopener"
                            className="btn-primary" style={{ fontSize: '13px', padding: '14px 28px', display: 'inline-flex' }}>Watch on
                            YouTube →</a>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.10)', padding: '52px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                        <div>
                            <div style={{ fontSize: '10px', letterSpacing: '.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)', marginBottom: '20px' }}>
                                Why Podcast Production Matters
                            </div>
                            <h3 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(24px,3vw,40px)', fontWeight: '300', color: 'var(--white)', lineHeight: '1.3', marginBottom: '24px' }}>
                                Your audience is already <em>listening.</em> The question is whether you are there when they
                                tune in.
                            </h3>
                            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.5)', lineHeight: '1.75', marginBottom: '20px' }}>
                                Podcasts build a uniquely intimate connection with audiences. Regular listeners feel they
                                know the host personally—creating levels of trust that social media posts rarely achieve.
                            </p>
                            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,.5)', lineHeight: '1.75' }}>A professionally produced
                                podcast positions you as the go-to authority in your field—educating, inspiring, and
                                attracting the exact audience you want to serve.</p>
                        </div>
                        <div style={{ marginTop: '36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px' }}>
                            <div style={{ background: 'rgba(255,255,255,.05)', padding: '20px' }}>
                                <strong style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: '300', color: 'var(--white)', display: 'block', marginBottom: '6px' }}>60%+</strong>
                                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.35)' }}>of podcast listeners take action after
                                    hearing an episode</p>
                            </div>
                            <div style={{ background: 'rgba(255,255,255,.05)', padding: '20px' }}>
                                <strong style={{ fontFamily: 'var(--serif)', fontSize: '36px', fontWeight: '300', color: 'var(--white)', display: 'block', marginBottom: '6px' }}>4×</strong>
                                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.35)' }}>longer average content engagement vs
                                    short-form social</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="blue-line"></div>

            <section className="case-studies">
                <div className="section-eyebrow">Case Studies</div>
                <h2 className="section-title">From Challenge<br />To <em>Transformation</em></h2>
                <p className="section-lead">Real examples of how we have helped clients go from invisible to unmissable.</p>
                <div className="case-grid">
                    <div className="case-card fade-up">
                        <div className="case-num">01</div>
                        <h4>CEO Brand Transformation</h4>
                        <div className="case-row">
                            <div className="case-row-label">Challenge</div>
                            <p>A successful CEO with 15 years of industry experience was barely known outside their
                                immediate professional network. No consistent personal brand, no social presence, no media
                                features.</p>
                        </div>
                        <div className="case-row">
                            <div className="case-row-label">Strategy</div>
                            <p>Completed the Full Personal Brand Identity Programme to define positioning, messaging, and
                                visual identity. Followed immediately by a Premium Cinema content shoot.</p>
                        </div>
                        <div className="case-row">
                            <div className="case-row-label">Execution</div>
                            <p>30-day content library deployed across LinkedIn and Instagram. Platform management activated
                                on Medium Pace plan.</p>
                        </div>
                        <div className="case-result">
                            <p>✓ 2 speaking invitations within 90 days · ✓ Podcast feature secured · ✓ LinkedIn following
                                grew 400% in 6 months</p>
                        </div>
                    </div>
                    <div className="case-card fade-up">
                        <div className="case-num">02</div>
                        <h4>Coach Content &amp; Visibility Launch</h4>
                        <div className="case-row">
                            <div className="case-row-label">Challenge</div>
                            <p>A certified coach with a growing private practice had no digital presence, no content
                                strategy, and no way to attract clients beyond word of mouth.</p>
                        </div>
                        <div className="case-row">
                            <div className="case-row-label">Strategy</div>
                            <p>Brand Discovery session to define niche and positioning. Mobile content shoot with Fully
                                Edited package. Instagram and Facebook platform management on Slow Pace.</p>
                        </div>
                        <div className="case-row">
                            <div className="case-row-label">Execution</div>
                            <p>Content library launched month one. New client enquiries began arriving through Instagram
                                within the first 30 days of posting.</p>
                        </div>
                        <div className="case-result">
                            <p>✓ 3 new client sign-ups from Instagram in Month 1 · ✓ Consistent content presence for 6+
                                months · ✓ Brand confidence transformed</p>
                        </div>
                    </div>
                    <div className="case-card fade-up">
                        <div className="case-num">03</div>
                        <h4>Faith Leader Audience Growth</h4>
                        <div className="case-row">
                            <div className="case-row-label">Challenge</div>
                            <p>A respected faith leader with a strong in-person community had minimal online reach. Their
                                digital presence did not reflect the depth of their message or community impact.</p>
                        </div>
                        <div className="case-row">
                            <div className="case-row-label">Strategy</div>
                            <p>Brand positioning and messaging framework developed through PAI Consulting. Content shoot
                                produced brand story videos and lifestyle content. Newsletter setup and weekly management
                                launched.</p>
                        </div>
                        <div className="case-row">
                            <div className="case-row-label">Execution</div>
                            <p>Multi-platform content strategy deployed. Email newsletter grew to 800 subscribers in 4
                                months.</p>
                        </div>
                        <div className="case-result">
                            <p>✓ Online community grew 3× in 6 months · ✓ 800 newsletter subscribers · ✓ Invited to speak at
                                3 national events</p>
                        </div>
                    </div>
                    <div className="case-card fade-up">
                        <div className="case-num">04</div>
                        <h4>Your Story Here</h4>
                        <div className="case-row">
                            <div className="case-row-label">Your Challenge</div>
                            <p>Every great case study starts with a challenge. What is yours?</p>
                        </div>
                        <div className="case-row">
                            <div className="case-row-label">Our Strategy</div>
                            <p>We will design a clear, strategic plan tailored specifically to your goals, audience, and
                                stage of growth.</p>
                        </div>
                        <div className="case-row">
                            <div className="case-row-label">The Outcome</div>
                            <p>A transformed brand presence—visible, credible, and growing.</p>
                        </div>
                        <div className="case-result" style={{ background: 'var(--navy)' }}>
                            <p style={{ color: 'var(--white)' }}>
                                <a href="#consultation" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                                    Book a consultation →
                                </a> and let us start writing your story.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
