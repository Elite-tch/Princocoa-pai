'use client'
import Image from "next/image";
import { useState } from "react";

export default function ServicePage() {
    const [prodChoice, setProdChoice] = useState<'mobile' | 'cinema'>('mobile');
    const [deliveryChoice, setDeliveryChoice] = useState<'raw' | 'edited'>('raw');

    const contentShootPrices = {
        mobile: { raw: 500000, edited: 750000 },
        cinema: { raw: 1000000, edited: 1500000 }
    };
    return (
        <div style={{ marginTop: '5%' }}>
            {/* SERVICE 2 SPLIT INTRO */}
            <div className="split-section" >
                <div className="split-content" style={{ background: 'var(--bg)' }}>
                    <div className="section-eyebrow">Princocoa Studios — Service Two</div>
                    <h2 className="section-title" style={{ fontSize: 'clamp(28px,3.5vw,52px)' }}>
                        Turn One Shoot Into<br /><em>30 Days of Visibility</em>
                    </h2>
                    <p style={{
                        fontSize: '16px',
                        color: 'var(--ink-60)',
                        lineHeight: '1.75',
                        maxWidth: '480px'
                    }}>
                        In one production day, we create everything you need to stay visible for 30 days—thought leadership videos,
                        portraits, lifestyle imagery, and brand films, all ready to publish.
                    </p>
                </div>
                <div className="split-photo " >
                    <video
                        src="https://res.cloudinary.com/dibwnfwk9/video/upload/v1782330554/Copy_of_DJI_20251215_100119_667_AM_video_zyshpe.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="video-fill"
                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                    />
                    <div className="photo-caption">Behind the lens — content day</div>
                </div>
            </div>

            {/* SERVICE 2 */}
            <section className="service-2" id="service2" style={{ paddingTop: '0', scrollMarginTop: '10px' }}>
                <div className="s2-grid">
                    <div className="s2-deliverables fade-up">
                        <h3>Your Content Library</h3>
                        <span className="s2-badge">30 Days of Content — Produced in One Shoot</span>
                        <div className="s2-items">
                            <div className="s2-item">
                                <div className="s2-num">12</div>
                                <div className="s2-item-text">
                                    <h5>Thought Leadership Videos</h5>
                                    <p>Short-form video positioning you as an authority</p>
                                </div>
                            </div>
                            <div className="s2-item">
                                <div className="s2-num">12</div>
                                <div className="s2-item-text">
                                    <h5>Professional Portrait Images</h5>
                                    <p>Premium still photography for press, profiles, websites, and platforms</p>
                                </div>
                            </div>
                            <div className="s2-item">
                                <div className="s2-num">30</div>
                                <div className="s2-item-text">
                                    <h5>Lifestyle Images & Video Clips</h5>
                                    <p>Authentic personal brand moments for social storytelling</p>
                                </div>
                            </div>
                            <div className="s2-item">
                                <div className="s2-num">4</div>
                                <div className="s2-item-text">
                                    <h5>Brand Story / Testimonial Videos</h5>
                                    <p>Longer-form brand narrative and social proof content to build trust</p>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            background: 'var(--blue-pale)',
                            border: '1px solid rgba(0,0,0,0.18)',
                            padding: '20px 24px',
                            borderRadius: 'var(--r)',
                            borderLeft: '3px solid var(--blue)'
                        }}>
                            <strong style={{ fontSize: '13px', color: 'var(--navy)', display: 'block', marginBottom: '6px' }}>
                                Ideal Outcome:
                            </strong>
                            <p style={{ fontSize: '14px', color: 'var(--ink-60)', lineHeight: '1.65' }}>
                                Build a professional content library that fuels your visibility, credibility, and thought leadership across multiple
                                platforms—without needing to produce content again for 30 days.
                            </p>
                        </div>

                        <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782494314/Copy_of_untitled-02147_h8whq2.jpg'
                            alt='visibility'
                            width={100}
                            height={200}
                            unoptimized
                            className='md:h-[300px]  w-[100%]'
                            style={{ marginTop: '30px' }}
                        />
                    </div>
                    <div className="s2-options fade-up">
                        <h3>Build Your Package</h3>
                        <div className="options-group">
                            <div className="og-label">Choose Production Quality</div>
                            <div className={`option-card ${prodChoice === 'mobile' ? 'selected' : ''}`} onClick={() => setProdChoice('mobile')} style={{ cursor: 'pointer' }}>
                                <div style={{ flex: '1' }}>
                                    <h5>Mobile Production</h5>
                                    <p>Smartphone cinematography — fast, flexible, social-first, authentic</p>
                                    <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        <span style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.5)',
                                            padding: '2px 8px',
                                            borderRadius: '100px'
                                        }}>Fast</span>
                                        <span style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.5)',
                                            padding: '2px 8px',
                                            borderRadius: '100px'
                                        }}>Social-first</span>
                                        <span style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.5)',
                                            padding: '2px 8px',
                                            borderRadius: '100px'
                                        }}>Authentic</span>
                                        <span style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.5)',
                                            padding: '2px 8px',
                                            borderRadius: '100px'
                                        }}>Accessible</span>
                                    </div>
                                    <div style={{
                                        marginTop: '12px',
                                        position: 'relative',
                                        paddingBottom: '42%',
                                        height: '0',
                                        overflow: 'hidden',
                                        borderRadius: '4px',
                                        background: '#1A1A1A'
                                    }}>

                                        <iframe
                                            src="https://res.cloudinary.com/dibwnfwk9/video/upload/v1782491928/chef_sia_ad__talking_head_1_ouai2i.mp4"
                                            title="Mobile Production Example"
                                            frameBorder="0"
                                            allow=" encrypted-media; picture-in-picture; accelerometer; picture-in-picture"
                                            allowFullScreen
                                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                                        />
                                    </div>
                                    <p style={{
                                        fontSize: '10px',
                                        color: 'rgba(255,255,255,0.3)',
                                        marginTop: '5px',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase'
                                    }}>Example — Mobile Production</p>
                                </div>
                                <div className="option-radio" style={{
                                    alignSelf: 'flex-start',
                                    marginTop: '4px',
                                    flexShrink: '0',
                                    marginLeft: '14px'
                                }} />
                            </div>
                            <div className={`option-card ${prodChoice === 'cinema' ? 'selected' : ''}`} onClick={() => setProdChoice('cinema')} style={{ cursor: 'pointer' }}>
                                <div style={{ flex: '1' }}>
                                    <h5>Premium Cinema Production</h5>
                                    <p>Cinema-grade camera, professional lighting &amp; full crew — luxury positioning</p>
                                    <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                                        <span style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.5)',
                                            padding: '2px 8px',
                                            borderRadius: '100px'
                                        }}>Cinematic</span>
                                        <span style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.5)',
                                            padding: '2px 8px',
                                            borderRadius: '100px'
                                        }}>Premium</span>
                                        <span style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.5)',
                                            padding: '2px 8px',
                                            borderRadius: '100px'
                                        }}>Brand films</span>
                                        <span style={{
                                            fontSize: '10px',
                                            letterSpacing: '0.1em',
                                            textTransform: 'uppercase',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.5)',
                                            padding: '2px 8px',
                                            borderRadius: '100px'
                                        }}>Full crew</span>
                                    </div>
                                    <div style={{
                                        marginTop: '12px',
                                        position: 'relative',
                                        paddingBottom: '42%',
                                        height: '0',
                                        overflow: 'hidden',
                                        borderRadius: '4px',
                                        background: '#1A1A1A'
                                    }}>
                                        <iframe
                                            src="https://www.youtube.com/embed/bBFTSRYzxVw"
                                            title="Cinema Production Example"
                                            frameBorder="0"
                                            allow="autoplay; encrypted-media; picture-in-picture"
                                            allowFullScreen
                                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                                        />
                                    </div>
                                    <p style={{
                                        fontSize: '10px',
                                        color: 'rgba(255,255,255,0.3)',
                                        marginTop: '5px',
                                        letterSpacing: '0.1em',
                                        textTransform: 'uppercase'
                                    }}>Example — Cinema Production</p>
                                </div>
                                <div className="option-radio" style={{
                                    alignSelf: 'flex-start',
                                    marginTop: '4px',
                                    flexShrink: '0',
                                    marginLeft: '14px'
                                }} />
                            </div>
                        </div>
                        {/* COMPARISON TABLE */}
                        <div style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            marginBottom: '24px',
                            overflow: 'hidden',
                            fontSize: '12px'
                        }}>
                            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.06)' }}>
                                <div style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>—</div>
                                <div style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.6)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>Mobile</div>
                                <div style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.6)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>Cinema</div>
                            </div>
                            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.4)' }}>Camera</div>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Smartphone</div>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Cinema-grade</div>
                            </div>
                            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.4)' }}>Visual Style</div>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Natural, real</div>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Luxury, editorial</div>
                            </div>
                            <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.4)' }}>Ideal For</div>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Regular content</div>
                                <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Brand launches</div>
                            </div>
                        </div>
                        <div className="options-group">
                            <div className="og-label">Choose Delivery Format</div>
                            <div className={`option-card ${deliveryChoice === 'raw' ? 'selected' : ''}`} onClick={() => setDeliveryChoice('raw')} style={{ cursor: 'pointer' }}>
                                <div>
                                    <h5>Raw Footage Only</h5>
                                    <p>Unedited files delivered for your team to edit and publish</p>
                                </div>
                                <div className="option-radio" />
                            </div>
                            <div className={`option-card ${deliveryChoice === 'edited' ? 'selected' : ''}`} onClick={() => setDeliveryChoice('edited')} style={{ cursor: 'pointer' }}>
                                <div>
                                    <h5>Fully Edited &amp; Ready to Publish</h5>
                                    <p>All content edited, captioned, titled, and platform-optimised</p>
                                </div>
                                <div className="option-radio" />
                            </div>
                        </div>
                        <div className="s2-price-display">
                            <div className="spd-label">Your Investment</div>
                            <div className="spd-price" id="price-display"><span>&#8358;</span>{contentShootPrices[prodChoice][deliveryChoice].toLocaleString()}</div>

                        </div>
                        <div className="addon-box">
                            <div>
                                <p>Optional Add-On</p>
                                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '3px' }}>Script Writing Assistance + Prompts</p>
                            </div>
                            <strong>+&#8358;60,000</strong>
                        </div>

                        <a href="mailto:princocoastudios@gmail.com" className="pricing-cta" style={{ marginTop: '12px', display: 'block' }}>
                            Book Your Content Shoot
                        </a>
                    </div>
                </div>

                <div className="s2-photos fade-up">
                    <div className="s2-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-camera" />
                            </svg>
                            <p>Professional filming</p>
                        </div>
                    </div>
                    <div className="s2-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-person" />
                            </svg>
                            <p>Executive portrait session</p>
                        </div>
                    </div>
                    <div className="s2-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-image" />
                            </svg>
                            <p>Lifestyle photography</p>
                        </div>
                    </div>
                    <div className="s2-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-mic" />
                            </svg>
                            <p>Leader speaking on camera</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="blue-line"></div>

            {/* SERVICE 3 */}
            <section className="service-3" id="service3" style={{ scrollMarginTop: '130px' }}>
                <div className='flex justify-between w-full md:flex-row flex-col gap-5 '>
                    <div>
                        <div className="section-eyebrow">Princocoa Studios &#8212; Service Three</div>
                        <h2 className="section-title">Stay Visible While<br />You Focus On <em>What Matters</em></h2>
                        <p className="section-lead">Consistency is one of the biggest challenges for busy founders, coaches, and
                            professionals. We keep your digital presence active, professional, and aligned with your goals.</p>
                    </div>

                    <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782493704/Copy_of_untitled-02164_wmnihk.jpg'
                        alt='visibility'
                        width={100}
                        height={200}
                        unoptimized
                        className='md:w-[50%]  w-[100%] h-full'
                    />
                </div>



                <div className="s3-why">
                    <div>
                        <p>Most founders, coaches, and creatives know they should be posting consistently. Most do
                            not&#8212;because <strong>running a business or building something meaningful is a full-time
                                commitment.</strong> Platform Management ensures your digital presence never reflects the
                            silence of a busy season.</p>
                        <p style={{ marginTop: '18px' }}>We handle everything&#8212;from writing captions and scheduling posts to
                            engaging your community, running reports, and optimising your profiles—so your online presence
                            keeps working even when you are fully focused elsewhere.</p>
                    </div>
                    <div>
                        <p style={{
                            fontSize: '12px',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.3)',
                            marginBottom: '14px'
                        }}>
                            What We Handle
                        </p>
                        <div className="s3-handles">
                            <span className="s3-handle-tag">Content Scheduling</span>
                            <span className="s3-handle-tag">Caption Writing</span>
                            <span className="s3-handle-tag">Community Engagement</span>
                            <span className="s3-handle-tag">Profile Optimisation</span>
                            <span className="s3-handle-tag">Audience Growth Strategy</span>
                            <span className="s3-handle-tag">Content Reporting</span>
                            <span className="s3-handle-tag">Monthly Content Planning</span>
                            <span className="s3-handle-tag">Reputation Monitoring</span>
                        </div>
                    </div>
                </div>
                <div className="s3-platforms flex flex-col justify-center items-center w-full mx-auto">
                    <div className="s3-plat-label">Choose any two core platforms</div>
                    <div className="s3-plat-row">
                        <div className="s3-plat">LinkedIn</div>
                        <div className="s3-plat">Instagram</div>
                        <div className="s3-plat">Facebook</div>
                    </div>
                    <div className="s3-plat-label" style={{ marginTop: '14px' }}>Additional platforms (+&#8358;100K per platform)
                    </div>
                    <div className="s3-plat-row">
                        <div className="s3-plat extra">TikTok</div>
                        <div className="s3-plat extra">YouTube Shorts</div>
                    </div>
                </div>
                <div className="s3-pace-grid">
                    <div className="s3-pace slow fade-up">
                        <div className="s3-pace-name">Slow Pace</div>
                        <h4>Sustainable Visibility</h4>
                        <div className="s3-pace-sub">Consistent presence with minimal content volume</div>
                        <div className="s3-pace-price"><span>&#8358;</span>250K</div>
                        <div className="s3-pace-freq">2 posts per week per platform / month</div>
                        <ul className="s3-includes">
                            <li>(4) Reels: edited + cover photos</li>
                            <li>(4) Graphic carousels, images, or videos</li>
                            <li>(8) Captions + hashtags</li>
                            <li>(8) Stories per month</li>
                            <li>&#8358;20K budget for Facebook ads</li>
                        </ul>

                    </div>
                    <div className="s3-pace medium fade-up">
                        <div className="s3-pace-badge">Recommended</div>
                        <div className="s3-pace-name">Medium Pace</div>
                        <h4>Balanced Growth</h4>
                        <div className="s3-pace-sub">Steady growth and consistent brand presence</div>
                        <div className="s3-pace-price"><span>&#8358;</span>450K</div>
                        <div className="s3-pace-freq">4 posts per week per platform / month</div>
                        <ul className="s3-includes">
                            <li>(8) Reels: edited + cover photos</li>
                            <li>(4) Graphic carousels, images, or videos</li>
                            <li>(4) Static posts</li>
                            <li>(16) Captions + hashtags</li>
                            <li>(16) Stories per month</li>
                            <li>&#8358;30K budget for Facebook ads</li>
                        </ul>

                    </div>
                    <div className="s3-pace fast fade-up">
                        <div className="s3-pace-badge">Most Visibility</div>
                        <div className="s3-pace-name">Fast Pace</div>
                        <h4>High-Frequency Growth</h4>
                        <div className="s3-pace-sub">Maximum posting frequency and engagement</div>
                        <div className="s3-pace-price"><span>&#8358;</span>550K</div>
                        <div className="s3-pace-freq">20 posts per platform / month</div>
                        <ul className="s3-includes">
                            <li>(16) Reels: edited + cover photos</li>
                            <li>(8) Graphic carousels, images, or videos</li>
                            <li>(8) Static posts</li>
                            <li>(30) Captions + hashtags</li>
                            <li>(20) Stories per month</li>
                            <li>&#8358;50K budget for Facebook ads</li>
                        </ul>

                    </div>
                </div>
                <div className="s3-bottom">
                    <div className="s3-retainer fade-up">
                        <div className="s3-ret-icon">3</div>
                        <div>
                            <h4>3-Month Minimum Retainership</h4>
                            <p>Platform growth is built through consistency. A minimum 3-month engagement gives your
                                presence the runway needed to deliver meaningful, compounding results.</p>
                        </div>
                    </div>
                    <div className="s3-addon fade-up">
                        <div>
                            <h4>Add a Platform</h4>
                            <p>Expand to TikTok or YouTube Shorts for additional reach.</p>
                        </div>
                        <div className="s3-addon-price">+&#8358;100K<br />
                            <span style={{
                                fontSize: '13px',
                                color: 'rgba(255,255,255,0.3)',
                                fontFamily: 'var(--sans)',
                                fontWeight: '300'
                            }}>per platform</span>
                        </div>
                    </div>
                </div>
                <div style={{
                    marginTop: '28px',
                    display: 'flex',
                    gap: '12px',
                    flexWrap: 'wrap'
                }}>
                    <a href="mailto:princocoastudios@gmail.com" className="btn-primary" style={{ fontSize: '12px', padding: '12px 24px' }}>
                        Book A Consultation →
                    </a>
                    <a href="#lead-audit" className="btn-outline-white" style={{ fontSize: '12px', padding: '12px 24px' }}>
                        Get A Free Page Audit
                    </a>
                </div>
            </section>

            <div className="blue-line"></div>

            {/* GROWTH */}
            <section className="growth" id="growth" style={{ scrollMarginTop: '130px' }}>
                <div className="section-eyebrow">Additional Services</div>
                <div className="growth-intro">
                    <div>
                        <h2 className="section-title">Growth &amp;<br /><em>Visibility Services</em></h2>
                    </div>
                    <div className="fade-up">
                        <p>For founders, coaches, professionals, creatives, and personal brands looking to accelerate
                            visibility, authority, and influence, additional specialised services are available to support
                            your growth journey at every stage.</p>
                        <p>These services complement your core brand and content foundation—expanding your reach, refining
                            your environment, and placing you in front of the right audiences through media, digital
                            presence, and strategic visibility initiatives.</p>
                        <div style={{
                            display: 'inline-block',
                            border: '1px solid var(--navy)',
                            padding: '9px 18px',
                            borderRadius: 'var(--r)',
                            marginTop: '6px'
                        }}>
                            <span style={{
                                fontSize: '12px',
                                letterSpacing: '0.12em',
                                textTransform: 'uppercase',
                                color: 'var(--navy)'
                            }}>All Pricing Upon Request</span>
                        </div>
                        <div className="dual-cta" style={{
                            marginTop: '24px',
                            borderTop: 'none',
                            paddingTop: '0'
                        }}>
                            <a href="mailto:princocoastudios@gmail.com" className="btn-primary" style={{ fontSize: '12px', padding: '12px 24px' }}>
                                Book A Consultation →
                            </a>
                            <a href="#lead-audit" className="btn-secondary" style={{ fontSize: '12px', padding: '12px 24px' }}>
                                Get A Free Page Audit
                            </a>
                        </div>
                    </div>
                </div>
                <div className="growth-grid">
                    <div className="growth-card fade-up">
                        <div className="gc-num">01</div>
                        <h4>Digital Presence</h4>
                        <ul>
                            <li>Personal website development</li>
                            <li>Landing pages</li>
                        </ul>
                        <div className="gc-badge">Upon Request</div>
                    </div>
                    <div className="growth-card fade-up">
                        <div className="gc-num">02</div>
                        <h4>Media Placement</h4>
                        <ul>
                            <li>Television appearance opportunities</li>
                            <li>News feature opportunities</li>
                            <li>Newspaper features</li>
                            <li>Magazine features</li>
                            <li>Podcast guest placements</li>
                            <li>Radio interviews</li>
                            <li>Online publication placements</li>
                        </ul>
                        <div className="gc-badge">Upon Request</div>
                    </div>
                    <div className="growth-card fade-up">
                        <div className="gc-num">03</div>
                        <h4>Photoshoot</h4>
                        <ul>
                            <li>Headshots</li>
                            <li>Personal branding portraits</li>
                            <li>Lifestyle imagery</li>
                        </ul>
                        <div className="gc-badge">Upon Request</div>
                    </div>
                    <div className="growth-card fade-up">
                        <div className="gc-num">04</div>
                        <h4>Office &amp; Environment Styling</h4>
                        <ul>
                            <li>Office design consultation</li>
                            <li>Home studio setup</li>
                            <li>Virtual background design</li>
                        </ul>
                        <div className="gc-badge">Upon Request</div>
                    </div>
                </div>
                <div className="growth-grid-2">
                    <div className="growth-card fade-up">
                        <div className="gc-num">05</div>
                        <h4>Stage &amp; Set Design</h4>
                        <ul>
                            <li>Speaking engagements</li>
                            <li>Podcast sets</li>
                            <li>Webinar environments</li>
                        </ul>
                        <div className="gc-badge">Upon Request</div>
                    </div>
                    <div className="growth-card fade-up">
                        <div className="gc-num">06</div>
                        <h4>Newsletter Services</h4>
                        <ul>
                            <li>Personal newsletter branding</li>
                            <li>Email ecosystem design</li>
                            <li>Weekly newsletter management</li>
                        </ul>
                        <div className="gc-badge">Upon Request</div>
                    </div>
                    <div className="growth-card fade-up">
                        <div className="gc-num">07</div>
                        <h4>Follow Alongs</h4>
                        <ul>
                            <li>Instagram &amp; Facebook Stories</li>
                            <li>Real-time event updates</li>
                            <li>Reels</li>
                            <li>Lifestyle photographs</li>
                            <li>Personal brand moments</li>
                        </ul>
                        <div className="gc-badge">Upon Request</div>
                    </div>
                </div>
                <div className="media-visual fade-up">
                    <div className="media-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-mic" />
                            </svg>
                            <p>TV interview</p>
                        </div>
                    </div>
                    <div className="media-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-play" />
                            </svg>
                            <p>Podcast appearance</p>
                        </div>
                    </div>
                    <div className="media-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-star" />
                            </svg>
                            <p>Speaking engagement</p>
                        </div>
                    </div>
                    <div className="media-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-image" />
                            </svg>
                            <p>Magazine feature</p>
                        </div>
                    </div>
                    <div className="media-photo">
                        <div className="fill">
                            <svg style={{ color: 'rgba(255,255,255,0.5)' }}>
                                <use href="#ico-edit" />
                            </svg>
                            <p>Press opportunity</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="blue-line"></div>

            {/* PODCAST PRODUCTION SERVICE */}
            <section style={{ background: 'var(--white)', padding: 'var(--section-pad)', scrollMarginTop: '130px' }} id="service-podcast">
                <div className="section-eyebrow">Princocoa Studios — Content Production</div>
                <div className="service-header">
                    <div>
                        <h2 className="section-title">Launch A Podcast<br />That <em>Builds Authority</em></h2>
                        <div className="spotify-episodes grid grid-cols-1 gap-2 md:grid-cols-1 md:gap-4">
                            <iframe
                                src="https://open.spotify.com/embed/episode/0oWM5qOBPEvC3HRLFxm43V"
                                width="100%"
                                height="152"
                                style={{ border: 0, borderRadius: "12px", overflow: "hidden" }}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                scrolling="no"
                            />

                            <iframe
                                src="https://open.spotify.com/embed/episode/3SMTZSyR39nGaskFZ5GOfQ"
                                width="100%"
                                height="152"
                                style={{ border: 0, borderRadius: "12px", overflow: "hidden" }}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                scrolling="no"
                            />

                            <iframe
                                src="https://open.spotify.com/embed/episode/0Dbl6hBn0uUEqktfx9pPsY"
                                width="100%"
                                height="152"
                                style={{ border: 0, borderRadius: "12px", overflow: "hidden" }}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                scrolling="no"
                            />

                            <iframe
                                src="https://open.spotify.com/embed/episode/3SMTZSyR39nGaskFZ5GOfQ"
                                width="100%"
                                height="152"
                                style={{ border: 0, borderRadius: "12px", overflow: "hidden" }}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                scrolling="no"
                            />
                        </div>

                    </div>
                    <div className="fade-up">
                        <p style={{
                            fontSize: '16px',
                            color: 'var(--ink-60)',
                            lineHeight: '1.75',
                            marginBottom: '18px'
                        }}>From concept to publication, we help brands, organisations, thought leaders, creators, ministries, and
                            businesses launch and maintain professional podcast experiences.</p>
                        <p style={{
                            fontSize: '16px',
                            color: 'var(--ink-60)',
                            lineHeight: '1.75'
                        }}>We handle the strategy, production, content creation, and distribution process—so you can focus entirely on sharing your message.
                            The result is a professional, consistent podcast that grows your audience, deepens your credibility, and creates content assets that work long after each episode airs.</p>
                        <div style={{
                            marginTop: '24px',
                            background: 'var(--blue-pale)',
                            borderLeft: '3px solid var(--blue)',
                            padding: '16px 20px'
                        }}>
                            <strong style={{
                                fontSize: '13px',
                                color: 'var(--navy)',
                                display: 'block',
                                marginBottom: '6px'
                            }}>Ideal Outcome</strong>
                            <p style={{
                                fontSize: '14px',
                                color: 'var(--ink-60)',
                                lineHeight: '1.65'
                            }}>A professional podcast that strengthens authority, builds audience trust, creates consistent content opportunities, and expands your visibility across audio and video platforms.</p>
                        </div>
                    </div>
                </div>

                {/* Services grid */}
                <div className="service-modules" style={{ marginBottom: '48px' }}>
                    <div className="svc-module fade-up" style={{ background: 'var(--bg)' }}>
                        <div className="sm-num">01</div>
                        <h4>Strategy &amp;<br />Branding</h4>
                        <ul className="sm-list">
                            <li>Podcast Strategy</li>
                            <li>Podcast Branding</li>
                            <li>Episode Planning</li>
                            <li>Guest Coordination Support</li>
                            <li>Cover Design</li>
                            <li>Distribution Guidance</li>
                        </ul>
                    </div>
                    <div className="svc-module fade-up" style={{ background: 'var(--bg)' }}>
                        <div className="sm-num">02</div>
                        <h4>Production &amp;<br />Recording</h4>
                        <ul className="sm-list">
                            <li>Podcast Recording</li>
                            <li>Multi-Camera Production</li>
                            <li>Audio Editing</li>
                            <li>Video Editing</li>
                            <li>Podcast Clips &amp; Reels</li>
                            <li>Episode Publishing Support</li>
                        </ul>
                    </div>
                    <div className="svc-module fade-up" style={{ background: 'var(--blue-pale)' }}>
                        <div className="sm-num">03</div>
                        <h4>Distribution &amp;<br />Growth</h4>
                        <ul className="sm-list">
                            <li>YouTube Podcast Publishing</li>
                            <li>Spotify / Apple Podcast Setup</li>
                            <li>Show Notes &amp; Descriptions</li>
                            <li>Social Clips for Platforms</li>
                            <li>Content Repurposing Strategy</li>
                            <li>Episode Analytics Support</li>
                        </ul>
                    </div>
                </div>

                {/* Who it's for + photo strip */}
                <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', marginBottom: '3px' }}>
                    <div style={{ background: 'var(--bg)', padding: '40px 36px' }}>
                        <h4 style={{
                            fontFamily: 'var(--serif)',
                            fontSize: '26px',
                            fontWeight: '300',
                            marginBottom: '20px'
                        }}>Ideal For
                        </h4>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                            <span style={{
                                fontSize: '13px',
                                border: '1px solid var(--ink-20)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>Thought Leaders</span>
                            <span style={{
                                fontSize: '13px',
                                border: '1px solid var(--ink-20)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>Coaches &amp; Consultants</span>
                            <span style={{
                                fontSize: '13px',
                                border: '1px solid var(--ink-20)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>Ministries &amp; Faith Leaders</span>
                            <span style={{
                                fontSize: '13px',
                                border: '1px solid var(--ink-20)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>Founders &amp; Entrepreneurs</span>
                            <span style={{
                                fontSize: '13px',
                                border: '1px solid var(--ink-20)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>Organisations &amp; Brands</span>
                            <span style={{
                                fontSize: '13px',
                                border: '1px solid var(--ink-20)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>Community Builders</span>
                            <span style={{
                                fontSize: '13px',
                                border: '1px solid var(--ink-20)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>Educational Platforms</span>
                            <span style={{
                                fontSize: '13px',
                                border: '1px solid var(--ink-20)',
                                color: 'var(--ink-60)',
                                padding: '7px 16px',
                                borderRadius: '100px'
                            }}>Media Personalities</span>
                        </div>
                        <div className="dual-cta">
                            <a href="mailto:princocoastudios@gmail.com" className="btn-primary" style={{ fontSize: '12px', padding: '12px 24px' }}>
                                Book A Consultation →
                            </a>
                            <a href="#lead-audit" className="btn-secondary" style={{ fontSize: '12px', padding: '12px 24px' }}>
                                Get A Free Page Audit
                            </a>
                        </div>
                    </div>
                    <div style={{ background: 'var(--navy)', padding: '40px 36px' }}>
                        <h4 style={{
                            fontFamily: 'var(--serif)',
                            fontSize: '26px',
                            fontWeight: '300',
                            color: 'var(--white)',
                            marginBottom: '10px'
                        }}>Featured Project</h4>
                        <div style={{
                            fontSize: '10px',
                            letterSpacing: '.15em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,0.5)',
                            marginBottom: '20px'
                        }}>I Have The Floor Podcast</div>
                        <div style={{
                            background: 'rgba(0,0,0,0.05)',
                            border: '1px solid rgba(0,0,0,0.12)',
                            padding: '24px',
                            marginBottom: '20px'
                        }}>
                            <div style={{
                                fontSize: '11px',
                                letterSpacing: '.12em',
                                textTransform: 'uppercase',
                                color: 'rgba(255,255,255,.35)',
                                marginBottom: '12px'
                            }}>Role: End-to-End Podcast Production</div>
                            <ul style={{ listStyle: 'none' }}>
                                <li style={{
                                    fontSize: '13px',
                                    color: 'rgba(255,255,255,.6)',
                                    padding: '5px 0',
                                    borderBottom: '1px solid rgba(255,255,255,.06)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '9px'
                                }}>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', flexShrink: '0' }}>✓</span>Podcast Strategy &amp;
                                    Production Planning
                                </li>
                                <li style={{
                                    fontSize: '13px',
                                    color: 'rgba(255,255,255,.6)',
                                    padding: '5px 0',
                                    borderBottom: '1px solid rgba(255,255,255,.06)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '9px'
                                }}>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', flexShrink: '0' }}>✓</span>Recording &amp;
                                    Multi-Camera Setup
                                </li>
                                <li style={{
                                    fontSize: '13px',
                                    color: 'rgba(255,255,255,.6)',
                                    padding: '5px 0',
                                    borderBottom: '1px solid rgba(255,255,255,.06)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '9px'
                                }}>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', flexShrink: '0' }}>✓</span>Editing &amp; Content
                                    Repurposing
                                </li>
                                <li style={{
                                    fontSize: '13px',
                                    color: 'rgba(255,255,255,.6)',
                                    padding: '5px 0',
                                    borderBottom: '1px solid rgba(255,255,255,.06)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '9px'
                                }}>
                                    <span style={{ color: 'rgba(255,255,255,0.5)', flexShrink: '0' }}>✓</span>Distribution Assets
                                    &amp; Visual Branding
                                </li>
                            </ul>
                            <p style={{
                                fontSize: '13px',
                                color: 'rgba(255,255,255,.4)',
                                lineHeight: '1.65',
                                marginTop: '14px'
                            }}>Produced from concept to final delivery—supporting the podcast through the full production process
                                and creating content assets for audience growth and visibility.</p>
                        </div>
                        <a href="https://youtu.be/p1VfoVizdWs?si=k4Q_Da8XDI-h4Sfz" target="_blank" rel="noopener"
                            className="btn-outline-white" style={{ fontSize: '12px', padding: '11px 22px', display: 'inline-flex' }}>
                            Watch on YouTube →
                        </a>
                    </div>
                </div>

                {/* Visual strip */}
                <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '3px' }}>
                    <div style={{
                        minHeight: '160px',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg,#2A2A2A,#1A1A1A)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: '0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782494314/Copy_of_untitled-02147_h8whq2.jpg'
                                alt='visibility'
                                width={100}
                                height={200}
                                unoptimized
                                className='w-[100%] h-[400px]'
                            />

                        </div>
                    </div>
                    <div style={{
                        minHeight: '160px',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg,#1E1E1E,#2A2A2A)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: '0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782330404/Copy_of_untitled-02458_g4qeu9.jpg'
                                alt='visibility'
                                width={100}
                                height={200}
                                unoptimized
                                className='w-[100%] h-[400px]'
                            />
                        </div>
                    </div>
                    <div style={{
                        minHeight: '160px',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg,#0f2035,#222222)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: '0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782493704/Copy_of_untitled-02164_wmnihk.jpg'
                                alt='visibility'
                                width={100}
                                height={200}
                                unoptimized
                                className='w-[100%] h-[400px]'
                            />
                        </div>
                    </div>
                    <div style={{
                        minHeight: '160px',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'linear-gradient(135deg,#222222,#111111)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            inset: '0',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            gap: '10px'
                        }}>
                            <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782493704/Copy_of_untitled-02164_wmnihk.jpg'
                                alt='visibility'
                                width={100}
                                height={200}
                                unoptimized
                                className='w-[100%] h-[400px]'
                            />
                        </div>
                    </div>
                </div>
            </section>

            <div className="blue-line"></div>

            {/* YOUTUBE CHANNEL PRODUCTION SERVICE */}
            <section style={{ background: 'var(--navy)', padding: 'var(--section-pad)', scrollMarginTop: '130px' }} id="service-youtube">
                <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Princocoa Studios — Content Production
                </div>
                <div className="service-header responsive-grid" style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '72px',
                    marginBottom: '72px',
                    alignItems: 'start'
                }}>
                    <div>
                        <h2 className="section-title" style={{ color: 'var(--white)' }}>
                            Build A YouTube<br />Channel That <em>Grows</em>
                        </h2>

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
                    <div className="fade-up">
                        <p style={{
                            fontSize: '16px',
                            color: 'rgba(255,255,255,.6)',
                            lineHeight: '1.75',
                            marginBottom: '18px'
                        }}>
                            We help individuals, personal brands, ministries, organisations, and businesses build high-quality
                            YouTube channels that educate, inspire, and grow communities.
                        </p>
                        <p style={{
                            fontSize: '16px',
                            color: 'rgba(255,255,255,.6)',
                            lineHeight: '1.75'
                        }}>
                            YouTube is the world's second-largest search engine and one of the most powerful long-form content platforms available.
                            A professionally managed channel builds visibility, authority, trust, and long-term audience
                            growth—compounding over time in ways that short-form social content simply cannot.
                        </p>
                        <div style={{
                            marginTop: '24px',
                            background: 'rgba(0,0,0,0.06)',
                            borderLeft: '3px solid var(--blue)',
                            padding: '16px 20px'
                        }}>
                            <strong style={{
                                fontSize: '13px',
                                color: 'rgba(255,255,255,0.55)',
                                display: 'block',
                                marginBottom: '6px'
                            }}>
                                Ideal Outcome
                            </strong>
                            <p style={{
                                fontSize: '14px',
                                color: 'rgba(255,255,255,.5)',
                                lineHeight: '1.65'
                            }}>
                                A professionally managed YouTube presence that builds visibility, authority, trust, and long-term audience
                                growth—generating search traffic, subscribers, and opportunities that continue to grow.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="service-modules" style={{ marginBottom: '48px' }}>
                    <div className="svc-module fade-up" style={{
                        background: 'rgba(255,255,255,.05)',
                        border: '1px solid rgba(255,255,255,.08)'
                    }}>
                        <div className="sm-num" style={{ color: 'rgba(255,255,255,0.4)', opacity: '1' }}>01</div>
                        <h4 style={{ color: 'var(--white)' }}>Channel Strategy<br />&amp; Positioning</h4>
                        <ul className="sm-list">
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Channel Strategy</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Channel Positioning</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Channel Branding</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Content Planning</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>YouTube Growth Strategy</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Channel Optimisation</li>
                        </ul>
                    </div>
                    <div className="svc-module fade-up" style={{
                        background: 'rgba(255,255,255,.05)',
                        border: '1px solid rgba(255,255,255,.08)'
                    }}>
                        <div className="sm-num" style={{ color: 'rgba(255,255,255,0.4)', opacity: '1' }}>02</div>
                        <h4 style={{ color: 'var(--white)' }}>Video Production<br />&amp; Editing</h4>
                        <ul className="sm-list">
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Video Production</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Editing</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Thumbnail Design</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Shorts Creation</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Content Repurposing</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Upload Management</li>
                        </ul>
                    </div>
                    <div className="svc-module fade-up" style={{
                        background: 'rgba(0,0,0,0.05)',
                        border: '1px solid rgba(0,0,0,0.12)'
                    }}>
                        <div className="sm-num" style={{ color: 'rgba(255,255,255,0.4)', opacity: '1' }}>03</div>
                        <h4 style={{ color: 'var(--white)' }}>Growth &amp;<br />Management</h4>
                        <ul className="sm-list">
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>SEO Optimisation</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Title &amp; Description Writing</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Community Engagement</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Analytics &amp; Reporting</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Playlist Management</li>
                            <li style={{ color: 'rgba(255,255,255,.55)', borderColor: 'rgba(255,255,255,.07)' }}>Cross-Platform Repurposing</li>
                        </ul>
                    </div>
                </div>

                {/* Who it's for row */}
                <div style={{
                    background: 'rgba(255,255,255,.04)',
                    border: '1px solid rgba(255,255,255,.08)',
                    padding: '36px 40px',
                    marginBottom: '3px'
                }}>
                    <h4 style={{
                        fontFamily: 'var(--serif)',
                        fontSize: '22px',
                        fontWeight: '300',
                        color: 'var(--white)',
                        marginBottom: '20px'
                    }}>
                        Ideal For Individuals &amp; Organisations Who Want Long-Form Authority
                    </h4>
                    <div className="responsive-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px' }}>
                        <div style={{ background: 'rgba(255,255,255,.04)', padding: '16px', borderLeft: '2px solid var(--blue)' }}>
                            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--white)', marginBottom: '4px' }}>Personal Brands</div>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.35)', lineHeight: '1.55' }}>
                                Build a loyal subscriber base around your expertise and personality
                            </p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,.04)', padding: '16px', borderLeft: '2px solid var(--blue)' }}>
                            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--white)', marginBottom: '4px' }}>Ministries &amp; Churches</div>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.35)', lineHeight: '1.55' }}>
                                Reach your congregation and new audiences with sermon and devotional content
                            </p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,.04)', padding: '16px', borderLeft: '2px solid var(--blue)' }}>
                            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--white)', marginBottom: '4px' }}>Educational Brands</div>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.35)', lineHeight: '1.55' }}>
                                Teach, train, and grow a community through structured YouTube content
                            </p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,.04)', padding: '16px', borderLeft: '2px solid var(--blue)' }}>
                            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--white)', marginBottom: '4px' }}>Businesses &amp; Organisations</div>
                            <p style={{ fontSize: '12px', color: 'rgba(255,255,255,.35)', lineHeight: '1.55' }}>
                                Generate search traffic, build credibility, and attract clients through long-form video
                            </p>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '28px' }}>
                    <a href="mailto:princocoastudios@gmail.com" className="btn-primary" style={{ fontSize: '12px', padding: '12px 24px' }}>
                        Book A Consultation →
                    </a>
                    <a href="#lead-audit" className="btn-outline-white" style={{ fontSize: '12px', padding: '12px 24px' }}>
                        Get A Free Page Audit
                    </a>
                </div>
            </section>

            <div className="blue-line"></div>

            {/* JOURNEY */}
            <section className="journey" id="journey">
                <div className="section-eyebrow">Your Visibility Journey</div>
                <h2 className="section-title">From Hidden<br />To <em>Unmissable</em></h2>
                <div className="journey-steps responsive-grid" style={{
                    gridTemplateColumns: 'repeat(3,1fr)',
                    gap: '36px'
                }}>
                    <div className="journey-step fade-up active">
                        <div className="js-node">
                            <div className="js-num">1</div>
                        </div>
                        <div className="js-phase">Phase One</div>
                        <h4>Build Your Brand</h4>
                        <p>Define your positioning, develop your visual identity, craft your messaging, and establish the
                            strategic foundation your visibility is built upon.</p>
                        <div className="js-service">Personal Brand Identity Consultation</div>
                    </div>
                    <div className="journey-step fade-up">
                        <div className="js-node">
                            <div className="js-num">2</div>
                        </div>
                        <div className="js-phase">Phase Two</div>
                        <h4>Create Your Content Library</h4>
                        <p>Transform your expertise into a premium content library that fuels 30 days of strategic
                            visibility across every major platform.</p>
                        <div className="js-service">Content Production &amp; Brand Storytelling</div>
                    </div>
                    <div className="journey-step fade-up">
                        <div className="js-node">
                            <div className="js-num">3</div>
                        </div>
                        <div className="js-phase">Phase Three</div>
                        <h4>Manage &amp; Grow Your Presence</h4>
                        <p>Keep your digital presence consistently active, professionally managed, and strategically growing
                            across every platform.</p>
                        <div className="js-service">Platform Management &amp; Community Growth</div>
                    </div>
                    <div className="journey-step fade-up">
                        <div className="js-node">
                            <div className="js-num">4</div>
                        </div>
                        <div className="js-phase">Phase Four</div>
                        <h4>Launch Your Podcast</h4>
                        <p>Build a professional podcast that deepens authority, creates intimate audience connection, and
                            generates long-form content that compounds over time.</p>
                        <div className="js-service">Podcast Production</div>
                    </div>
                    <div className="journey-step fade-up">
                        <div className="js-node">
                            <div className="js-num">5</div>
                        </div>
                        <div className="js-phase">Phase Five</div>
                        <h4>Build Your YouTube Channel</h4>
                        <p>Create a professionally managed YouTube presence that generates search traffic, grows
                            subscribers, and builds lasting authority through long-form video.</p>
                        <div className="js-service">YouTube Channel Production</div>
                    </div>
                    <div className="journey-step fade-up">
                        <div className="js-node">
                            <div className="js-num">6</div>
                        </div>
                        <div className="js-phase">Phase Six</div>
                        <h4>Expand Your Influence</h4>
                        <p>Leverage media placement, digital presence, newsletters, and strategic visibility to become the
                            recognised authority in your field.</p>
                        <div className="js-service">Growth &amp; Visibility Services</div>
                    </div>
                </div>
            </section>

            <div className="blue-line"></div>

            {/* PRICING */}
            <section className="pricing-compare" id="pricing">
                <div className="section-eyebrow">Investment Overview</div>
                <h2 className="section-title">Clear Pricing.<br /><em>Exceptional Value.</em></h2>
                <div className="pc-grid">
                    <div className="pc-left fade-up">
                        <h3>The Right Package<br />For Your Stage</h3>
                        <p>Every brand journey is unique. Whether you are a founder starting from scratch, a coach building
                            authority, or a professional ready for a full content production, there is a clear path forward.
                        </p>
                        <p style={{ marginTop: '18px' }}>Growth &amp; Visibility Services are bespoke and tailored to your
                            specific goals—pricing is provided upon consultation.</p>
                        <a href="mailto:princocoastudios@gmail.com" className="pricing-cta" style={{ marginTop: '32px' }}>Book a Consultation</a>
                    </div>
                    <div className="pc-right">
                        <div className="pc-section fade-up">
                            <div className="pcs-title">Personal Brand Identity Consultation — PAI Consulting</div>
                            <div className="pc-row">
                                <div className="pc-row-label">Single Session — Choose any one session based on your current
                                    needs</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;150,000</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">4 Sessions — Focused brand development across multiple areas</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;450,000</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Full Programme — 5 Sessions &nbsp;
                                    <span style={{
                                        fontSize: '10px',
                                        background: 'var(--black)',
                                        color: 'var(--white)',
                                        padding: '2px 8px',
                                        borderRadius: '2px',
                                        fontWeight: '600',
                                        letterSpacing: '0.08em',
                                        textTransform: 'uppercase'
                                    }}>Recommended</span>
                                </div>

                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;650,000</span>
                                </div>
                            </div>
                        </div>
                        <div className="pc-section fade-up">
                            <div className="pcs-title">Content Production &amp; Brand Storytelling — Princocoa Studios</div>
                            <div className="pc-row">
                                <div className="pc-row-label">Mobile Production + Raw Footage Only</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;500,000</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Mobile Production + Fully Edited &amp; Ready to Publish</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;750,000</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Premium Cinema Production + Raw Footage Only</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;1,000,000</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Premium Cinema Production + Fully Edited &amp; Ready to Publish
                                </div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;1,500,000</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Script Writing Assistance + Prompts (Add-On)</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;60,000</span>
                                </div>
                            </div>
                        </div>
                        <div className="pc-section fade-up">
                            <div className="pcs-title">Platform Management &amp; Community Growth — 3-Month Minimum Retainership
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Slow Pace — 2 posts per week per platform / month</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;250,000/mo</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Medium Pace — 4 posts per week per platform / month</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;450,000/mo</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Fast Pace — 20 posts per platform / month</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>&#8358;550,000/mo</span>
                                </div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Additional Platform Add-On (TikTok / YouTube Shorts)</div>
                                <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                                    <span>+&#8358;100,000/mo</span>
                                </div>
                            </div>
                        </div>
                        <div className="pc-section fade-up">
                            <div className="pcs-title">Growth &amp; Visibility Services</div>
                            <div className="pc-row">
                                <div className="pc-row-label">Digital Presence, Media Placement, Photoshoots &amp; More</div>
                                <div className="pc-row-price por">Pricing Upon Request</div>
                            </div>
                        </div>
                        <div className="pc-section fade-up">
                            <div className="pcs-title">Podcast Production — Princocoa Studios</div>
                            <div className="pc-row">
                                <div className="pc-row-label">Podcast Strategy &amp; Branding</div>
                                <div className="pc-row-price por">Pricing Upon Request</div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Episode Production (Recording, Editing, Publishing)</div>
                                <div className="pc-row-price por">Pricing Upon Request</div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Full Podcast Management Package</div>
                                <div className="pc-row-price por">Pricing Upon Request</div>
                            </div>
                        </div>
                        <div className="pc-section fade-up">
                            <div className="pcs-title">YouTube Channel Production — Princocoa Studios</div>
                            <div className="pc-row">
                                <div className="pc-row-label">Channel Strategy, Branding &amp; Setup</div>
                                <div className="pc-row-price por">Pricing Upon Request</div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Video Production, Editing &amp; Upload Management</div>
                                <div className="pc-row-price por">Pricing Upon Request</div>
                            </div>
                            <div className="pc-row">
                                <div className="pc-row-label">Full YouTube Channel Management Package</div>
                                <div className="pc-row-price por">Pricing Upon Request</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
