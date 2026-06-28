'use client'
import { useState, useEffect } from 'react';
import CheckoutModal from '@/components/checkout-modal';
import Image from 'next/image';
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
      <div id="page-home" className="page active overflow-hidden">

        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-right">
            <div className="hero-photo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://res.cloudinary.com/dibwnfwk9/image/upload/v1782333342/Copy_of_DSC02776_bevmjc.jpg"
                alt="hero"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  zIndex: 0
                }}
              />
              <div className="hero-photo-overlay"></div>
            </div>
            <div className="hero-photo-badge">
              <p>Brand &amp; Visibility Ecosystem</p>
              <strong>Build. Tell. Grow.</strong>
            </div>
          </div>
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
          <div className='flex justify-between w-full flex-col gap-5 md:flex-row '>
            <div className='w-full  '>
              <div>
                <div className="section-eyebrow">The Visibility Gap</div>
                <h2 className="section-title">Brilliant People<br />Are Often <em>Invisible</em></h2>
              </div>
              <div className="gap-col-left fade-up ">
                <p>You have built something <strong>remarkable.</strong> You have expertise that took years to
                  develop and a story worth telling.</p>
                <p>Yet too many talented founders, coaches, and professionals are barely known beyond their
                  immediate circle—<strong>not because they lack credibility, but because they lack strategic
                    visibility.</strong></p>
                <p>Every day without a clear personal brand is a day of <strong>missed opportunities.</strong></p>
              </div>
              <div className=''>
                <a href="mailto:princocoastudios@gmail.com" className="btn-primary " style={{
                  marginBottom: '12px', marginTop: '20px',
                  display: 'inline-flex'
                }}>
                  Book A Consultation →
                </a></div>
            </div>

            <div className='w-full flex flex-col gap-6' >

              <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782490539/Copy_of_KDS-53_2_kk1drw.jpg'
                alt='visibility'
                width={100}
                height={200}
                unoptimized
                className='w-[100%] h-[350px] '
              />

              <div className=" ">
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
            </div>

          </div>

        </section>

        <div className="blue-line"></div>

        {/* ECOSYSTEM */}
        <section className="ecosystem" id="ecosystem">
          <div className='flex justify-between w-full md:flex-row flex-col gap-5 '>
            <div>
              <div className="section-eyebrow">The Solution</div>
              <h2 className="section-title">Build The Brand.<br />Tell The Story.<br /><em>Grow The Audience.</em></h2>
              <p className="section-lead">A complete Brand &amp; Visibility Ecosystem—personal branding, content production,
                platform management, podcast production, YouTube channel building, and strategic growth
                services—designed to build platforms that outlast trends.</p>
            </div>
            <Image src='https://res.cloudinary.com/dibwnfwk9/image/upload/v1782330404/Copy_of_untitled-02458_g4qeu9.jpg'
              alt='visibility'
              width={100}
              height={200}
              unoptimized
              className='md:w-[50%] w-[100%] h-[300px] md:h-[400px]'
            />

          </div>

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
          <div className='flex justify-between w-full flex-col gap-8 md:gap-20 md:flex-row ' >
            <div className='w-full'>
              <div className="section-eyebrow" style={{ color: 'rgba(255,255,255,0.5)' }}>
                More Than Social Media
              </div>

              <div className="responsive-grid" style={{

                marginBottom: '64px'
              }}>
                <div>
                  <h2 className="section-title" style={{ color: 'var(--white)' }}>
                    Content That Works<br /><em>Beyond Social Media</em>
                  </h2>
                </div>
                <div className="responsive-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2,1fr)',
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
              </div>
            </div>

            <div className='flex flex-col gap-6 md:gap-12 w-full'>
              <iframe
                width="100%"
                height="312"
                src="https://www.youtube.com/embed/SnXApPL3fQo"
                title="YouTube video player"
                style={{ border: 0, borderRadius: "12px" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />

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



          </div>
          {/* Bottom row - 3 items */}
          <div className="responsive-grid" style={{
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

