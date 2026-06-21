'use client'
import { useState, useEffect } from 'react';
import CheckoutModal from '@/components/checkout-modal';

export default function Home() {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedTier, setSelectedTier] = useState<number>(2);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [checkoutAmount, setCheckoutAmount] = useState(0);
  const [checkoutPackage, setCheckoutPackage] = useState('');

  const handleCheckout = (amount: number, pkgName: string) => {
    setCheckoutAmount(amount);
    setCheckoutPackage(pkgName);
    setIsCheckoutOpen(true);
  };

  const [prodChoice, setProdChoice] = useState<'mobile' | 'cinema'>('mobile');
  const [deliveryChoice, setDeliveryChoice] = useState<'raw' | 'edited'>('raw');

  const contentShootPrices = {
    mobile: { raw: 500000, edited: 750000 },
    cinema: { raw: 1000000, edited: 1500000 }
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
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
  }, []);

  return (
    <>
      <div id="page-home" className="page active">

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-left">
            <div className="hero-eyebrow">Brand · Content · Visibility Ecosystem</div>
            <h1>Your Expertise<br />Deserves To<br />Be <em>Seen.</em></h1>
            <p className="hero-sub">Most people aren't invisible because they lack expertise. They're invisible because
              their expertise isn't being communicated strategically.</p>
            <div className="hero-ctas">
              <a href="mailto:princocoastudios@gmail.com" className="btn-primary">Book a Consultation →</a>
              <a href="#ecosystem" className="btn-outline-white">Explore Services</a>
            </div>
            <div className="hero-trust">
              <div className="hero-trust-item">Founders &amp; CEOs</div>
              <div className="hero-trust-item">Coaches &amp; Consultants</div>
              <div className="hero-trust-item">Creatives &amp; Speakers</div>
              <div className="hero-trust-item">Faith &amp; Community Leaders</div>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-photo">
              <div className="hero-photo-overlay"></div>
              <div className="hero-photo-inner">
                <svg>
                  <use href="#ico-person" />
                </svg>
                <p>Premium executive portrait — confident founder or CEO in a professional environment</p>
              </div>
            </div>
            <div className="hero-photo-badge">
              <p>Brand &amp; Visibility Ecosystem</p>
              <strong>Build. Tell. Grow.</strong>
            </div>
          </div>
        </section>

        {/* PROOF BAR */}
        <div className="proof-bar">
          <div className="proof-item">
            <div className="proof-num">50+</div>
            <div className="proof-label">Brands &amp;<br />Professionals Transformed</div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <div className="proof-num">7</div>
            <div className="proof-label">Core<br />Services</div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <div className="proof-num">30</div>
            <div className="proof-label">Days of Content<br />in One Shoot</div>
          </div>
          <div className="proof-divider"></div>
          <div className="proof-item">
            <div className="proof-num">100+</div>
            <div className="proof-label">Content Assets<br />Created</div>
          </div>
        </div>

        <div className="blue-line"></div>

        {/* VISIBILITY GAP */}
        <section className="visibility-gap" id="visibility">
          <div className="section-eyebrow">The Visibility Gap</div>
          <h2 className="section-title">Brilliant People<br />Are Often <em>Invisible</em></h2>
          <div className="gap-grid">
            <div className="gap-col-left fade-up">
              <p>You have built something <strong>remarkable.</strong> You have expertise that took years to
                develop and a story worth telling.</p>
              <p>Yet too many talented founders, coaches, and professionals are barely known beyond their
                immediate circle—<strong>not because they lack credibility, but because they lack strategic
                  visibility.</strong></p>
              <p>Every day without a clear personal brand is a day of <strong>missed opportunities.</strong></p>
            </div>
            <div className="gap-items">
              <div className="gap-item fade-up">
                <div className="gap-item-icon">01</div>
                <h4>No Clear Positioning</h4>
                <p>Without a defined brand, your audience cannot easily understand who you are, what you stand
                  for, or why they should choose you.</p>
              </div>
              <div className="gap-item fade-up">
                <div className="gap-item-icon">02</div>
                <h4>Inconsistent Content</h4>
                <p>Sporadic posting and inconsistent messaging erode trust and make it impossible to build the
                  authority your expertise deserves.</p>
              </div>
              <div className="gap-item fade-up">
                <div className="gap-item-icon">03</div>
                <h4>Underutilised Expertise</h4>
                <p>Your knowledge, experiences, and insights remain locked inside boardrooms and private
                  conversations instead of reaching the people who need them.</p>
              </div>
              <div className="gap-item fade-up">
                <div className="gap-item-icon">04</div>
                <h4>Missed Opportunities</h4>
                <p>Speaking engagements, media features, high-value partnerships, and premium clients go to the
                  leader with the stronger presence—not necessarily the better track record.</p>
              </div>
              <div className="gap-item fade-up">
                <div className="gap-item-icon">05</div>
                <h4>Weak Visual Identity</h4>
                <p>First impressions are formed in seconds. Without a premium visual brand, you are losing
                  credibility before the conversation even begins.</p>
              </div>
              <div className="gap-item fade-up">
                <div className="gap-item-icon">06</div>
                <h4>No Time to Execute</h4>
                <p>You are running a business, leading a team, and delivering results. Building your brand
                  requires expertise and bandwidth you do not have to spare alone.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* ECOSYSTEM */}
        <section className="ecosystem" id="ecosystem">
          <div className="section-eyebrow">The Solution</div>
          <h2 className="section-title">Build The Brand.<br />Tell The Story.<br /><em>Grow The Audience.</em></h2>
          <p className="section-lead">A complete Brand &amp; Visibility Ecosystem—personal branding, content production,
            platform management, podcast production, YouTube channel building, and strategic growth
            services—designed to build platforms that outlast trends.</p>
          <div className="ecosystem-cards">
            <div className="ecosystem-card fade-up">
              <div className="ec-tag">PAI Consulting</div>
              <div className="ec-partner">Service One</div>
              <h3>Personal Brand<br />Identity Consultation</h3>
              <div className="ec-divider"></div>
              <p>Define who you are, who you serve, and how you want to be known—then build the strategy,
                identity, and systems to communicate it with confidence.</p>
              <ul className="ec-features">
                <li>Brand Discovery &amp; Positioning</li>
                <li>Brand &amp; Vision Strategy</li>
                <li>Visual Brand Identity</li>
                <li>Image Consulting</li>
                <li>Content Eco-System</li>
              </ul>
              <a href="#service1" className="btn-outline">Explore Service →</a>
            </div>
            <div className="ecosystem-card fade-up">
              <div className="ec-tag">Princocoa Studios</div>
              <div className="ec-partner">Service Two</div>
              <h3>Content Production<br />& Brand Storytelling</h3>
              <div className="ec-divider"></div>
              <p>Transform your expertise into a premium content library—thought leadership videos, executive
                portraits, lifestyle imagery, and brand story films—produced in a single shoot.</p>
              <ul className="ec-features">
                <li>12 Thought Leadership Videos</li>
                <li>12 Executive Portrait Images</li>
                <li>30 Lifestyle Images & Video Clips</li>
                <li>4 Brand Story / Testimonial Videos</li>
              </ul>
              <a href="#service2" className="btn-outline">Explore Service →</a>
            </div>
            <div className="ecosystem-full ecosystem-card fade-up">
              <div className="ef-left">
                <div
                  className="ec-tag"
                  style={{ background: 'rgba(255,255,255,0.12)', color: 'var(--white)' }}
                >
                  Princocoa Studios
                </div>
                <div className="ec-partner" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Service Three
                </div>
                <h3>
                  Platform Management<br />& Community Growth
                </h3>
                <div className="ec-divider"></div>
                <p>
                  Keep your digital presence consistently active, professionally managed, and strategically
                  growing—while you focus on leading.
                </p>
                <ul className="ec-features">
                  <li>Content Scheduling & Caption Writing</li>
                  <li>Community Engagement & Audience Growth</li>
                  <li>Profile Optimisation & Reputation Monitoring</li>
                  <li>Monthly Content Planning & Reporting</li>
                </ul>
                <a href="#service3" className="btn-outline-white">Explore Service →</a>
              </div>
              <div className="ef-right">
                <div
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.25)',
                    marginBottom: '20px'
                  }}
                >
                  The Complete Ecosystem
                </div>
                <p>
                  PAI Consulting <em>defines the brand.</em> Princocoa Studios <em>creates the content.</em>
                  Platform Management <em>sustains the presence.</em> Podcast &amp; YouTube Production
                  <em>build long-form platforms.</em> Growth &amp; Visibility Services <em>expand the
                    influence.</em>
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* BEYOND SOCIAL MEDIA */}
        <section
          style={{ background: 'var(--navy)', padding: 'var(--section-pad)' }}
          id="beyond-social"
        >
          <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>
            More Than Social Media
          </div>

          <div className="responsive-grid"  style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '72px',
            alignItems: 'center',
            marginBottom: '64px'
          }}>
            <div>
              <h2 className="section-title" style={{ color: 'var(--white)' }}>
                Content That Works<br /><em>Beyond Social Media</em>
              </h2>
            </div>
            <div className="fade-up">
              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,.55)',
                lineHeight: '1.8',
                marginBottom: '16px'
              }}>
                We are not simply a social media company. We help people build platforms, tell meaningful stories, and
                create content ecosystems that support long-term growth and real influence.
              </p>
              <p style={{
                fontSize: '16px',
                color: 'rgba(255,255,255,.55)',
                lineHeight: '1.8'
              }}>
                Podcasts, YouTube channels, thought leadership series, brand films, and media assets—we produce content
                built for longevity, not just the feed.
              </p>
            </div>
          </div>

          <div className="responsive-grid"  style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            gap: '3px'
          }}>
            {/* Card 1 */}
            <div style={{
              background: 'rgba(255,255,255,.05)',
              border: '1px solid rgba(255,255,255,.08)',
              padding: '36px 28px',
              transition: 'var(--tr)'
            }} className="fade-up">
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '16px'
              }}>
                01
              </div>
              <h4 style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: '300',
                color: 'var(--white)',
                marginBottom: '10px'
              }}>
                Podcasts
              </h4>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,.45)',
                lineHeight: '1.7'
              }}>
                Full podcast production from concept to distribution—strategy, recording, editing, branding, and publishing.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{
              background: 'rgba(255,255,255,.05)',
              border: '1px solid rgba(255,255,255,.08)',
              padding: '36px 28px',
              transition: 'var(--tr)'
            }} className="fade-up">
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '16px'
              }}>
                02
              </div>
              <h4 style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: '300',
                color: 'var(--white)',
                marginBottom: '10px'
              }}>
                YouTube Channels
              </h4>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,.45)',
                lineHeight: '1.7'
              }}>
                Channel strategy, video production, editing, thumbnails, optimisation, and growth management for long-term visibility.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{
              background: 'rgba(255,255,255,.05)',
              border: '1px solid rgba(255,255,255,.08)',
              padding: '36px 28px',
              transition: 'var(--tr)'
            }} className="fade-up">
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '16px'
              }}>
                03
              </div>
              <h4 style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: '300',
                color: 'var(--white)',
                marginBottom: '10px'
              }}>
                Thought Leadership
              </h4>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,.45)',
                lineHeight: '1.7'
              }}>
                Interviews, educational content, expert series, and brand stories that position you as the authority in your field.
              </p>
            </div>

            {/* Card 4 - Note: This one had a different background */}
            <div style={{
              background: 'rgba(0,0,0,0.05)',
              border: '1px solid rgba(0,0,0,0.12)',
              padding: '36px 28px',
              transition: 'var(--tr)'
            }} className="fade-up">
              <div style={{
                fontFamily: 'var(--serif)',
                fontSize: '13px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.3)',
                marginBottom: '16px'
              }}>
                04
              </div>
              <h4 style={{
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: '300',
                color: 'var(--white)',
                marginBottom: '10px'
              }}>
                Media Assets
              </h4>
              <p style={{
                fontSize: '14px',
                color: 'rgba(255,255,255,.45)',
                lineHeight: '1.7'
              }}>
                Brand films, testimonials, reels, documentary-style content, and media kits built to grow audiences across every platform.
              </p>
            </div>
          </div>

          {/* Bottom row - 3 items */}
          <div className="responsive-grid"  style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gap: '3px',
            marginTop: '3px'
          }}>
            <div style={{
              background: 'rgba(255,255,255,.04)',
              padding: '28px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }} className="fade-up">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
                fontSize: '18px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: '0.4' }}>
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
              </div>
              <div>
                <h5 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '18px',
                  fontWeight: '300',
                  color: 'var(--white)',
                  marginBottom: '4px'
                }}>
                  Interviews &amp; Features
                </h5>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.35)' }}>
                  Press, podcast guest, and editorial interview production
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,.04)',
              padding: '28px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }} className="fade-up">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
                fontSize: '18px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: '0.4' }}>
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                </svg>
              </div>
              <div>
                <h5 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '18px',
                  fontWeight: '300',
                  color: 'var(--white)',
                  marginBottom: '4px'
                }}>
                  Brand Stories
                </h5>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.35)' }}>
                  Narrative films, founder stories, and mission-driven content
                </p>
              </div>
            </div>

            <div style={{
              background: 'rgba(255,255,255,.04)',
              padding: '28px 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }} className="fade-up">
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.18)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: '0',
                fontSize: '18px'
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ opacity: '0.4' }}>
                  <path d="M12 2l9 10-9 10L3 12z" />
                </svg>
              </div>
              <div>
                <h5 style={{
                  fontFamily: 'var(--serif)',
                  fontSize: '18px',
                  fontWeight: '300',
                  color: 'var(--white)',
                  marginBottom: '4px'
                }}>
                  Educational Content
                </h5>
                <p style={{ fontSize: '13px', color: 'rgba(255,255,255,.35)' }}>
                  Tutorial series, how-to content, and course-adjacent video production
                </p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div style={{
            marginTop: '44px',
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap'
          }}>
            <a href="#service-podcast" className="btn-primary" style={{ fontSize: '12px', padding: '12px 24px' }}>
              Explore Podcast Production →
            </a>
            <a href="#service-youtube" className="btn-outline-white" style={{ fontSize: '12px', padding: '12px 24px' }}>
              Explore YouTube Production →
            </a>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* SERVICE 1 */}
        <section className="service-1" id="service1">
          <div className="section-eyebrow">PAI Consulting — Personal Brand Identity Consultation</div>
          <div className="service-header">
            <div>
              <h2 className="section-title">Turn Your Expertise<br />Into A <em>Recognisable Brand</em></h2>
            </div>
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

          </div>

          {/* OUTCOMES */}
          <div className="s1-outcomes fade-up">
            <div className="s1-outcomes-left">
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
              <div style={{ marginTop: '16px', padding: '14px 0', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '8px'
                }}>
                  Have a Discount Code?
                </div>
                <div style={{ display: 'flex', gap: '0' }}>
                  <input
                    id="s1-discount-input"
                    type="text"
                    placeholder="Enter code"
                    style={{
                      flex: '1',
                      padding: '9px 12px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      borderRight: 'none',
                      background: 'rgba(255,255,255,0.06)',
                      color: 'var(--white)',
                      fontFamily: 'var(--sans)',
                      fontSize: '13px',
                      outline: 'none',
                      borderRadius: '4px 0 0 4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em'
                    }}
                  />
                  <button

                    style={{
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.15)',
                      color: 'var(--white)',
                      padding: '9px 16px',
                      fontFamily: 'var(--sans)',
                      fontSize: '11px',
                      fontWeight: '600',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      borderRadius: '0 4px 4px 0'
                    }}
                  >
                    Apply
                  </button>
                </div>
                <div id="s1-discount-msg" style={{ fontSize: '12px', marginTop: '6px', minHeight: '18px' }} />
              </div>
              <div className="pay-section">
                <div className="pay-section-label">Pay Securely via Paystack</div>
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
                <p className="pay-note">Discount codes applied before checkout. Powered by Paystack.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* SERVICE 2 SPLIT INTRO */}
        <div className="split-section" style={{ minHeight: '420px' }}>
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
          <div className="split-photo">
            <div className="photo-fill" style={{ background: 'linear-gradient(135deg,#E8E8E8,#F0F0F0)' }}>
              <svg style={{ color: 'rgba(11,31,58,0.3)' }}>
                <use href="#ico-camera" />
              </svg>
              <p>Behind-the-scenes of a professional content shoot — crew, lighting, brand leader on camera</p>
            </div>
            <div className="photo-caption">Behind the lens — content day</div>
          </div>
        </div>

        {/* SERVICE 2 */}
        <section className="service-2" id="service2" style={{ paddingTop: '0' }}>
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
                        src="https://www.youtube.com/embed/p1VfoVizdWs?rel=0&modestbranding=1"
                        title="Mobile Production Example"
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
                        src="https://www.youtube.com/embed/p1VfoVizdWs?rel=0&modestbranding=1&start=20"
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
                <div className="responsive-grid"  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: 'rgba(255,255,255,0.06)' }}>
                  <div style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase' }}>—</div>
                  <div style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.6)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>Mobile</div>
                  <div style={{ padding: '10px 14px', color: 'rgba(255,255,255,0.6)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>Cinema</div>
                </div>
                <div className="responsive-grid"  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.4)' }}>Camera</div>
                  <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Smartphone</div>
                  <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Cinema-grade</div>
                </div>
                <div className="responsive-grid"  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.4)' }}>Visual Style</div>
                  <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Natural, real</div>
                  <div style={{ padding: '9px 14px', color: 'rgba(255,255,255,0.7)', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>Luxury, editorial</div>
                </div>
                <div className="responsive-grid"  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
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
                <div id="s2-discount-row" style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: '8px' }}>
                    Have a Discount Code?
                  </div>
                  <div style={{ display: 'flex', gap: '0' }}>
                    <input
                      id="s2-discount-input"
                      type="text"
                      placeholder="Enter code"
                      style={{
                        flex: '1',
                        padding: '9px 12px',
                        border: '1px solid rgba(255,255,255,0.15)',
                        borderRight: 'none',
                        background: 'rgba(255,255,255,0.06)',
                        color: 'var(--white)',
                        fontFamily: 'var(--sans)',
                        fontSize: '13px',
                        outline: 'none',
                        borderRadius: '4px 0 0 4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em'
                      }}
                    />
                    <button

                      style={{
                        background: 'rgba(255,255,255,0.12)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: 'var(--white)',
                        padding: '9px 16px',
                        fontFamily: 'var(--sans)',
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        borderRadius: '0 4px 4px 0'
                      }}
                    >
                      Apply
                    </button>
                  </div>
                  <div id="s2-discount-msg" style={{ fontSize: '12px', marginTop: '6px', minHeight: '18px' }} />
                </div>
              </div>
              <div className="addon-box">
                <div>
                  <p>Optional Add-On</p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)', marginTop: '3px' }}>Script Writing Assistance + Prompts</p>
                </div>
                <strong>+&#8358;60,000</strong>
              </div>
              <div className="s2-pay-row">
                <span>Pay securely via Paystack</span>
                <button className="s2-pay-btn" >
                  Pay Now →
                </button>
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
        <section className="service-3" id="service3">
          <div className="section-eyebrow">Princocoa Studios &#8212; Service Three</div>
          <h2 className="section-title">Stay Visible While<br />You Focus On <em>What Matters</em></h2>
          <p className="section-lead">Consistency is one of the biggest challenges for busy founders, coaches, and
            professionals. We keep your digital presence active, professional, and aligned with your goals.</p>
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
          <div className="s3-platforms">
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
              <button className="s3-pay-btn" onClick={() => handleCheckout(250000, 'Platform Management - Slow Pace')}>
                Pay ₦250K/month via Paystack →
              </button>
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
              <button className="s3-pay-btn" onClick={() => handleCheckout(450000, 'Platform Management - Medium Pace')}>
                Pay ₦450K/month via Paystack →
              </button>
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
              <button className="s3-pay-btn" onClick={() => handleCheckout(550000, 'Platform Management - Fast Pace')}>
                Pay ₦550K/month via Paystack →
              </button>
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
        <section className="growth" id="growth">
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
        <section style={{ background: 'var(--white)', padding: 'var(--section-pad)' }} id="service-podcast">
          <div className="section-eyebrow">Princocoa Studios — Content Production</div>
          <div className="service-header">
            <div>
              <h2 className="section-title">Launch A Podcast<br />That <em>Builds Authority</em></h2>
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
          <div className="responsive-grid"  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3px', marginBottom: '3px' }}>
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
          <div className="responsive-grid"  style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '3px' }}>
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
                <svg width="32" height="32" style={{ color: 'rgba(255,255,255,.35)' }}>
                  <use href="#ico-mic" />
                </svg>
                <p style={{
                  fontSize: '10px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.25)',
                  textAlign: 'center',
                  maxWidth: '100px'
                }}>Podcast recording studio</p>
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
                <svg width="32" height="32" style={{ color: 'rgba(255,255,255,.35)' }}>
                  <use href="#ico-camera" />
                </svg>
                <p style={{
                  fontSize: '10px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.25)',
                  textAlign: 'center',
                  maxWidth: '100px'
                }}>Multi-camera setup</p>
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
                <svg width="32" height="32" style={{ color: 'rgba(255,255,255,.35)' }}>
                  <use href="#ico-edit" />
                </svg>
                <p style={{
                  fontSize: '10px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.25)',
                  textAlign: 'center',
                  maxWidth: '100px'
                }}>Editing &amp; post-production</p>
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
                <svg width="32" height="32" style={{ color: 'rgba(255,255,255,.35)' }}>
                  <use href="#ico-play" />
                </svg>
                <p style={{
                  fontSize: '10px',
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,.25)',
                  textAlign: 'center',
                  maxWidth: '100px'
                }}>Published &amp; distributed</p>
              </div>
            </div>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* YOUTUBE CHANNEL PRODUCTION SERVICE */}
        <section style={{ background: 'var(--navy)', padding: 'var(--section-pad)' }} id="service-youtube">
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
            <div className="responsive-grid"  style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '14px' }}>
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
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(150000, "Brand Identity - Single Session")}>Pay Now</button>
                  </div>
                </div>
                <div className="pc-row">
                  <div className="pc-row-label">4 Sessions — Focused brand development across multiple areas</div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>&#8358;450,000</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(450000, "Brand Identity - 4 Sessions")}>Pay Now</button>
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
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(650000, "Brand Identity - Full Programme")}>Pay Now</button>
                  </div>
                </div>
              </div>
              <div className="pc-section fade-up">
                <div className="pcs-title">Content Production &amp; Brand Storytelling — Princocoa Studios</div>
                <div className="pc-row">
                  <div className="pc-row-label">Mobile Production + Raw Footage Only</div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>&#8358;500,000</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(500000, "Content Production - Mobile + Raw")}>Pay Now</button>
                  </div>
                </div>
                <div className="pc-row">
                  <div className="pc-row-label">Mobile Production + Fully Edited &amp; Ready to Publish</div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>&#8358;750,000</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(750000, "Content Production - Mobile + Edited")}>Pay Now</button>
                  </div>
                </div>
                <div className="pc-row">
                  <div className="pc-row-label">Premium Cinema Production + Raw Footage Only</div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>&#8358;1,000,000</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(1000000, "Content Production - Premium Cinema + Raw")}>Pay Now</button>
                  </div>
                </div>
                <div className="pc-row">
                  <div className="pc-row-label">Premium Cinema Production + Fully Edited &amp; Ready to Publish
                  </div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>&#8358;1,500,000</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(1500000, "Content Production - Premium Cinema + Edited")}>Pay Now</button>
                  </div>
                </div>
                <div className="pc-row">
                  <div className="pc-row-label">Script Writing Assistance + Prompts (Add-On)</div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>&#8358;60,000</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(60000, "Add-On: Script Writing Assistance")}>Pay Now</button>
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
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(250000, "Platform Management - Slow Pace (1st Month)")}>Pay Now</button>
                  </div>
                </div>
                <div className="pc-row">
                  <div className="pc-row-label">Medium Pace — 4 posts per week per platform / month</div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>&#8358;450,000/mo</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(450000, "Platform Management - Medium Pace (1st Month)")}>Pay Now</button>
                  </div>
                </div>
                <div className="pc-row">
                  <div className="pc-row-label">Fast Pace — 20 posts per platform / month</div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>&#8358;550,000/mo</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(550000, "Platform Management - Fast Pace (1st Month)")}>Pay Now</button>
                  </div>
                </div>
                <div className="pc-row">
                  <div className="pc-row-label">Additional Platform Add-On (TikTok / YouTube Shorts)</div>
                  <div className="pc-row-price" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <span>+&#8358;100,000/mo</span>
                    <button className="btn-primary" style={{ padding: '6px 12px', fontSize: '11px', whiteSpace: 'nowrap' }} onClick={() => handleCheckout(100000, "Add-On: Additional Platform (1st Month)")}>Pay Now</button>
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

        <div className="blue-line"></div>

        {/* ABOUT */}
        <section className="about" id="about">
          <div className="section-eyebrow">The Partnership</div>
          <h2 className="section-title">Why<br /><em>Princocoa &#215; PAI</em></h2>
          <div className="about-grid">
            <div className="about-col fade-up">
              <div className="about-col-tag">PAI Consulting</div>
              <h3>Defines<br />The Brand</h3>
              <p>Strategic personal branding from the inside out—the thinking, framework, and clarity that
                everything else is built upon. PAI Consulting helps founders, coaches, creatives, and
                professionals define and position their brand.</p>
              <ul className="about-list">
                <li>Personal Branding</li>
                <li>Brand Positioning</li>
                <li>Visibility Strategy</li>
                <li>Thought Leadership Development</li>
                <li>Image Consulting</li>
              </ul>
            </div>
            <div className="about-col fade-up">
              <div className="about-col-tag">Princocoa Studios</div>
              <h3>Creates<br />The Content</h3>
              <p>Premium content production and visual storytelling that translates your strategy into compelling
                content across every platform.</p>
              <ul className="about-list">
                <li>Content Production</li>
                <li>Executive Photography</li>
                <li>Videography &amp; Cinematography</li>
                <li>Brand Storytelling</li>
                <li>Podcast Production</li>
                <li>YouTube Channel Production</li>
              </ul>
            </div>
            <div className="about-col fade-up">
              <div className="about-col-tag">Princocoa Studios</div>
              <h3>Maintains<br />The Presence</h3>
              <p>Consistent platform management that keeps your digital presence active and growing while you
                focus on leading.</p>
              <ul className="about-list">
                <li>Platform Management</li>
                <li>Community Engagement</li>
                <li>Audience Growth Strategy</li>
                <li>Content Scheduling</li>
                <li>Reputation Monitoring</li>
              </ul>
            </div>
            <div className="about-col center-col fade-up">
              <div className="about-col-tag" style={{ color: 'rgba(255,255,255,0.5)' }}>
                The Complete Ecosystem
              </div>
              <h3>One Direction.<br />Total Visibility.</h3>
              <p>Seven services. One strategic direction. A complete brand and visibility ecosystem for founders,
                coaches, creatives, consultants, speakers, and professionals ready to be known for the right
                reasons.</p>
              <a href="mailto:princocoastudios@gmail.com" className="btn-outline-white" style={{ marginTop: '8px' }}>
                Start Your Journey &#8594;
              </a>
            </div>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* FOR WHOM */}
        <section className="for-whom">
          <div className="section-eyebrow">Who This Is For</div>
          <h2 className="section-title">Built For<br /><em>People With Purpose</em></h2>
          <div className="fw-grid">
            <div className="fw-tag">Founders</div>
            <div className="fw-tag">CEOs</div>
            <div className="fw-tag">Entrepreneurs</div>
            <div className="fw-tag">Creatives</div>
            <div className="fw-tag">Coaches</div>
            <div className="fw-tag">Consultants</div>
            <div className="fw-tag">Speakers</div>
            <div className="fw-tag">Faith Leaders</div>
            <div className="fw-tag">Industry Experts</div>
            <div className="fw-tag">Professionals</div>
            <div className="fw-tag">Personal Brands</div>
            <div className="fw-tag">Organisations</div>
            <div className="fw-tag">Government Leaders</div>
            <div className="fw-tag">Public Figures</div>
          </div>
          <div className="fw-statement">
            <p>If you have spent years building expertise, <em>your presence should reflect the person you already
              are.</em> We help you close the gap between how good you are and how well the world knows it.
            </p>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* TESTIMONIALS */}
        <section className="testimonials">
          <div style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            marginBottom: '0'
          }}>
            <div>
              <div className="section-eyebrow">Client Voices</div>
              <h2 className="section-title" style={{ marginBottom: '0' }}>The <em>Results</em> Speak</h2>
            </div>
            <a href="/testimonial" className="btn-secondary" style={{ whiteSpace: 'nowrap' }}>
              Read All Testimonials →
            </a>
          </div>
          <div className="testimonials-grid" style={{ marginTop: '48px' }}>
            <div className="testimonial-card fade-up">
              <div className="tstar">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              </div>
              <div className="tquote">&#8220;Within three months of completing the Personal Brand Identity programme,
                I received two speaking invitations, a podcast feature, and closed my biggest consulting
                contract to date.&#8221;</div>
              <div className="tauthor">
                <div className="tauthor-avatar">AO</div>
                <div className="tauthor-info">
                  <h5>Adaeze O.</h5>
                  <p>CEO &amp; Executive Coach</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card fade-up">
              <div className="tstar">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              </div>
              <div className="tquote">&#8220;The content shoot was unlike anything I expected. In one day we produced
                more quality content than I had created in two years. My LinkedIn engagement tripled in 30
                days.&#8221;</div>
              <div className="tauthor">
                <div className="tauthor-avatar">FK</div>
                <div className="tauthor-info">
                  <h5>Femi K.</h5>
                  <p>Founder &amp; Industry Speaker</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card fade-up">
              <div className="tstar">
                <span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span><span>&#9733;</span>
              </div>
              <div className="tquote">&#8220;I came in knowing my expertise but not how to communicate it. I left with
                a complete brand system, a content library, and the confidence to show up as the person I
                already am.&#8221;</div>
              <div className="tauthor">
                <div className="tauthor-avatar">RI</div>
                <div className="tauthor-info">
                  <h5>Rita I.</h5>
                  <p>Executive Director &amp; Faith Leader</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '44px' }}>
            <a href="testimonials" className="btn-secondary">
              View All Client Testimonials →
            </a>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* FAQ */}
        <section className="faq" id="faq">
          <div className="section-eyebrow">Questions Answered</div>
          <h2 className="section-title">Everything<br />You Need To <em>Know</em></h2>
          <div className="faq-grid">
            <div className={`faq-item ${activeIndex === 0 ? 'open' : ''}`} onClick={() => toggleFAQ(0)}>
              <div className="faq-question">
                <h4>How does the process work?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>The journey begins with a discovery call where we understand your goals, current positioning,
                  and where you want to be. You then choose the services that align with your
                  needs&#8212;either starting with brand strategy, content production, or both simultaneously.
                </p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 1 ? 'open' : ''}`} onClick={() => toggleFAQ(1)}>
              <div className="faq-question">
                <h4>Which service should I start with?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>We recommend beginning with the Personal Brand Identity Consultation. A clear brand strategy,
                  defined messaging, and visual identity provide the foundation that makes your content
                  production significantly more effective and intentional.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 2 ? 'open' : ''}`} onClick={() => toggleFAQ(2)}>
              <div className="faq-question">
                <h4>Do I need scripts for the content shoot?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>You do not need pre-written scripts. Our optional Script Writing Assistance + Prompts add-on
                  (&#8358;60,000) provides structured talking points and narrative frameworks before your
                  shoot so you arrive confident and prepared.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 3 ? 'open' : ''}`} onClick={() => toggleFAQ(3)}>
              <div className="faq-question">
                <h4>Can you help with content ideas?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>Yes. Content idea development is embedded into the brand strategy process through Thought
                  Leadership Pillars and Content Ecosystem Planning. For shoot-day content, the Script Writing
                  add-on includes tailored prompts drawn from your expertise, audience, and positioning.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 4 ? 'open' : ''}`} onClick={() => toggleFAQ(4)}>
              <div className="faq-question">
                <h4>What should I wear to the shoot?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>The Image Consulting module addresses wardrobe direction specifically. You will receive
                  guidance on wardrobe choices that align with your brand positioning, on-camera presence, and
                  the environments being used.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 5 ? 'open' : ''}`} onClick={() => toggleFAQ(5)}>
              <div className="faq-question">
                <h4>Can my team attend the shoot?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>Yes. A small team presence can be arranged. We recommend keeping the environment focused on
                  shoot day to maximise output quality and your on-camera energy. Specific arrangements are
                  discussed during pre-shoot planning.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 6 ? 'open' : ''}`} onClick={() => toggleFAQ(6)}>
              <div className="faq-question">
                <h4>How long is the content shoot?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>The shoot is designed to produce 30 days of content in a single production day. The exact
                  duration depends on your package, locations, and preparation. Preparation guidance is
                  provided in advance to ensure the day runs efficiently.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 7 ? 'open' : ''}`} onClick={() => toggleFAQ(7)}>
              <div className="faq-question">
                <h4>How quickly will I receive my deliverables?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>Delivery timelines are confirmed during booking and vary by service and package. Raw footage
                  is delivered faster than fully edited packages. Brand strategy deliverables are completed
                  across your consultation sessions.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 8 ? 'open' : ''}`} onClick={() => toggleFAQ(8)}>
              <div className="faq-question">
                <h4>Can I book only one service?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>Absolutely. All services are available as standalone offerings. Many clients begin with one
                  and return for others as their visibility journey progresses.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 9 ? 'open' : ''}`} onClick={() => toggleFAQ(9)}>
              <div className="faq-question">
                <h4>Which content production package is best for me?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>If you have an in-house editor, Raw Footage is cost-effective. If you want content
                  immediately ready to publish, Fully Edited is the better investment. Premium Cinema is
                  recommended for leaders who want a distinctly cinematic visual presence.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 10 ? 'open' : ''}`} onClick={() => toggleFAQ(10)}>
              <div className="faq-question">
                <h4>Do you travel for shoots and sessions?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>Yes. Travel arrangements can be made for clients outside our base location. Travel-related
                  costs are discussed transparently during the discovery call.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 11 ? 'open' : ''}`} onClick={() => toggleFAQ(11)}>
              <div className="faq-question">
                <h4>Can I book media placement separately?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>Media placement is available as a standalone service within Growth &amp; Visibility Services.
                  Pricing is upon request as it is tailored to your goals, target media outlets, industry, and
                  timeline.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 12 ? 'open' : ''}`} onClick={() => toggleFAQ(12)}>
              <div className="faq-question">
                <h4>How does newsletter management work?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>Our newsletter management covers content planning, writing, design, scheduling, and delivery.
                  You share your insights; we handle the execution. Pricing is upon request based on
                  frequency, audience size, and requirements.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 13 ? 'open' : ''}`} onClick={() => toggleFAQ(13)}>
              <div className="faq-question">
                <h4>What happens after I book?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>After booking you will receive a welcome communication with onboarding materials, intake
                  questionnaire, and scheduling information. Brand strategy clients begin with a deep
                  discovery session. Content production clients receive a pre-shoot planning call.</p>
              </div>
            </div>
            <div className={`faq-item ${activeIndex === 14 ? 'open' : ''}`} onClick={() => toggleFAQ(14)}>
              <div className="faq-question">
                <h4>What industries do you work with?</h4>
                <div className="faq-toggle"></div>
              </div>
              <div className="faq-answer">
                <p>We work with leaders across all industries&#8212;finance, technology, healthcare, faith,
                  government, consulting, education, entertainment, real estate, and beyond. Our process is
                  designed around your unique expertise and audience.</p>
              </div>
            </div>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* LEAD MAGNET */}
        <section className="lead-magnet" id="lead-audit">
          <div className="lm-inner">
            <div className="section-eyebrow">Free Resource</div>
            <h2 className="lm-title">Not Ready Yet?<br />Get A <em>Free</em><br />Basic Page Audit</h2>
            <p className="lm-desc">Receive a complimentary review of your current digital presence with practical
              recommendations to improve your visibility, positioning, and online credibility&#8212;no commitment
              required.</p>
            <div className="lm-form-wrap" id="audit-form-wrap">
              <div className="lm-name-row">
                <input type="text" id="audit-name" placeholder="Your full name" autoComplete="name" />
                <div className="lm-submit-col" style={{ display: 'none' }}></div>
              </div>
              <div className="lm-email-row">
                <input type="email" id="audit-email" placeholder="Your email address" autoComplete="email" />
                <div className="lm-submit-col">
                  <button type="button" onClick={() => { }}>Get My Free Audit</button>
                </div>
              </div>
            </div>
            <div id="audit-success" style={{
              display: 'none',
              background: 'var(--navy)',
              color: 'var(--white)',
              padding: '20px 28px',
              borderRadius: 'var(--radius)',
              marginTop: '12px',
              maxWidth: '480px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              <strong style={{
                display: 'block',
                fontFamily: 'var(--serif)',
                fontSize: '22px',
                fontWeight: 300,
                marginBottom: '6px'
              }}>✓ You're on the list!</strong>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', lineHeight: '1.65' }}>Your free page audit
                request has been received. We'll be in touch within 48 hours with your personalised
                recommendations.</p>
            </div>
            <p className="lm-note">No spam. Just a single, actionable audit delivered to your inbox.</p>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* CONSULTATION */}
        <section className="consultation" id="consultation">
          <div className="consult-inner">
            <div className="consult-left fade-up">
              <div className="section-eyebrow">Ready To Begin?</div>
              <h2 className="section-title" style={{ marginBottom: '22px' }}>Book A<br /><em>Consultation</em></h2>
              <p>Ready to build your brand, create strategic content, or grow your digital presence? Send us an
                email to discuss your goals and receive clear recommendations on the best solution for your
                needs.</p>
              <p style={{ marginTop: '18px' }}>We work with founders, CEOs, entrepreneurs, coaches, consultants,
                speakers, creatives, faith leaders, professionals, and personal brands across all industries.
                Every engagement begins with a conversation.</p>
            </div>
            <div className="consult-right fade-up">
              <p>Send us a message</p>
              <div className="consult-email">princocoastudios@gmail.com</div>
              <a href="mailto:princocoastudios@gmail.com" className="btn-primary" style={{
                width: '100%',
                justifyContent: 'center',
                fontSize: '14px',
                padding: '16px 28px'
              }}>
                Book Consultation &#8594;
              </a>
              <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <p style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.25)',
                  textTransform: 'none',
                  letterSpacing: 'normal',
                  lineHeight: '1.7'
                }}>
                  In your message, briefly describe your current situation, your goals, and which services you
                  are interested in. We will respond within 48 hours with tailored recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="blue-line"></div>

        {/* FINAL CTA */}
        <section className="final-cta" id="contact">
          <div className="final-cta-content">
            <div className="section-eyebrow">Take The Next Step</div>
            <h2 className="section-title">Your Expertise<br />Deserves To<br />Be <em>Seen</em></h2>
            <p className="final-cta-sub">Build the brand. Tell the story. Grow the audience.</p>
            <p className="final-cta-sub2">We help people build platforms, tell meaningful stories, and create content
              ecosystems that support long-term growth and influence—through personal branding, content
              production, podcast production, YouTube channels, platform management, and strategic visibility
              services.</p>
            <a href="mailto:princocoastudios@gmail.com" className="btn-primary" style={{
              fontSize: '14px',
              padding: '18px 44px'
            }}>
              Book Your Consultation &#8594;
            </a>
          </div>
          <div className="final-cta-photo">
            <div className="fill">
              <svg style={{ color: 'rgba(255,255,255,0.6)' }}>
                <use href="#ico-person" />
              </svg>
              <p>Strong, confident executive portrait &#8212; leader in a premium environment</p>
            </div>
          </div>
        </section>
      </div>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)}
        amount={checkoutAmount}
        packageName={checkoutPackage}
      />
    </>

  );
}

