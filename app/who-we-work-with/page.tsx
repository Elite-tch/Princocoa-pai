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
                <div className="section-eyebrow">Who We Work With</div>
                <h1>Built For<br /><em>People With Purpose</em></h1>
                <p>We work with founders, creatives, consultants, coaches, speakers, faith leaders, and professionals across
                    every industry who are ready to build the brand their expertise deserves.</p>
            </div>
            <section className="wwwith-intro">
                <div className="section-eyebrow">Our Clients</div>
                <h2 className="section-title">Your Story Matters.<br /><em>Let Us Tell It.</em></h2>
                <p className="section-lead">No matter your industry, background, or stage of growth—if you have something
                    valuable to offer the world, we are here to help you communicate it with clarity and confidence.</p>
                <div className="audience-grid">
                    <div className="audience-card fade-up">
                        <div className="aud-icon">01</div>
                        <h4>Founders &amp; CEOs</h4>
                        <p className="aud-challenge">You have built a business from the ground up, but your personal visibility
                            does not yet reflect the scale of what you have created. Potential partners, investors, and
                            media do not yet know your name.</p>
                        <p className="aud-challenge">We help you build a personal brand that positions you as the face and
                            thought leader behind your organisation.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Brand Consultation</span>
                            <span className="aud-tag">Content Production</span>
                            <span className="aud-tag">Media Placement</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">02</div>
                        <h4>Entrepreneurs</h4>
                        <p className="aud-challenge">You are building something new, but you struggle to communicate your value
                            clearly and attractively. You know what you do, but articulating it in a way that attracts the
                            right audience is the challenge.</p>
                        <p className="aud-challenge">We help you define your positioning, create content, and build a digital
                            presence that grows alongside your business.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Brand Strategy</span>
                            <span className="aud-tag">Content Shoot</span>
                            <span className="aud-tag">Platform Management</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">03</div>
                        <h4>Coaches &amp; Speakers</h4>
                        <p className="aud-challenge">Your credibility is built in rooms and conversations—but your online
                            presence does not yet reflect the depth of your expertise. You need a brand that attracts
                            bookings, clients, and speaking invitations without constant hustle.</p>
                        <p className="aud-challenge">We build the brand, the content library, and the managed digital presence
                            that brings opportunities to you.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Personal Branding</span>
                            <span className="aud-tag">Thought Leadership Videos</span>
                            <span className="aud-tag">Stage Design</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">04</div>
                        <h4>Consultants</h4>
                        <p className="aud-challenge">You are an expert in your field, but your personal brand is not generating
                            the premium client pipeline your work deserves. You are competing on referrals alone when your
                            visibility should be doing the work for you.</p>
                        <p className="aud-challenge">We position you as the go-to authority in your space through strategic
                            personal branding and consistent content.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Authority Positioning</span>
                            <span className="aud-tag">Content Strategy</span>
                            <span className="aud-tag">Media Features</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">05</div>
                        <h4>Creatives</h4>
                        <p className="aud-challenge">Your work is exceptional, but your personal brand is not keeping pace with
                            your talent. You need a brand and content presence that attracts premium clients,
                            collaborations, and opportunities beyond your current circle.</p>
                        <p className="aud-challenge">We tell your creative story in a way that attracts the clients and
                            collaborators you deserve.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Brand Identity</span>
                            <span className="aud-tag">Portfolio Shoot</span>
                            <span className="aud-tag">Social Management</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">06</div>
                        <h4>Faith Leaders</h4>
                        <p className="aud-challenge">You have a message, a calling, and a community—but your digital presence is
                            not yet reaching the people your work is designed to serve. Your voice deserves a bigger
                            platform.</p>
                        <p className="aud-challenge">We help faith leaders build a credible, inspiring, and consistent digital
                            presence that extends their reach and influence.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Brand Strategy</span>
                            <span className="aud-tag">Content Production</span>
                            <span className="aud-tag">Newsletter</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">07</div>
                        <h4>Organisations &amp; Non-Profits</h4>
                        <p className="aud-challenge">Your organisation does impactful work, but your brand and communications do
                            not yet communicate that impact clearly to donors, partners, or the public. Your mission
                            deserves better storytelling.</p>
                        <p className="aud-challenge">We help organisations communicate their mission, impact, and value through
                            strategic brand and content work.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Brand Identity</span>
                            <span className="aud-tag">Impact Storytelling</span>
                            <span className="aud-tag">Digital Presence</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">08</div>
                        <h4>Industry Experts &amp; Personal Brands</h4>
                        <p className="aud-challenge">You have built expertise over years—but the world outside your immediate
                            network does not yet know what you know. You need a clear, compelling brand that communicates
                            your authority at scale.</p>
                        <p className="aud-challenge">We transform your knowledge into a visible, credible, and monetisable
                            personal brand.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Thought Leadership</span>
                            <span className="aud-tag">Content Library</span>
                            <span className="aud-tag">Media Placement</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">09</div>
                        <h4>Businesses &amp; Brands</h4>
                        <p className="aud-challenge">Your business has grown, but your brand communication has not kept pace.
                            Your visual identity, messaging, and online presence feel inconsistent or outdated compared to
                            the quality of your actual offering.</p>
                        <p className="aud-challenge">We help businesses of all sizes align their brand, create premium content,
                            and build a consistent digital presence that reflects their true standard.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Brand Identity</span>
                            <span className="aud-tag">Content Production</span>
                            <span className="aud-tag">Platform Management</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">10</div>
                        <h4>Podcast Hosts</h4>
                        <p className="aud-challenge">You have a message worth sharing but lack the production quality,
                            consistency, or distribution strategy to grow your podcast into the platform it deserves to be.</p>
                        <p className="aud-challenge">We handle end-to-end podcast production—from strategy and recording to
                            editing, distribution, and content repurposing—so you focus entirely on your message.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Podcast Production</span>
                            <span className="aud-tag">Audio &amp; Video Editing</span>
                            <span className="aud-tag">Distribution</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">11</div>
                        <h4>YouTube Creators</h4>
                        <p className="aud-challenge">You have valuable content to share but need professional production,
                            consistent uploads, optimisation, and channel management to grow a serious YouTube presence.</p>
                        <p className="aud-challenge">We manage the full YouTube production pipeline—strategy, filming, editing,
                            thumbnails, optimisation, and uploads—so your channel grows while you create.</p>
                        <div className="aud-services">
                            <span className="aud-tag">YouTube Production</span>
                            <span className="aud-tag">Editing &amp; Thumbnails</span>
                            <span className="aud-tag">Channel Growth</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">12</div>
                        <h4>Ministries &amp; Churches</h4>
                        <p className="aud-challenge">Your message reaches those in the room—but your digital presence is not yet
                            extending your ministry beyond your physical walls to the people who need it most.</p>
                        <p className="aud-challenge">We help ministries build professional digital platforms—YouTube channels,
                            podcasts, brand identity, and social presence—that expand reach and deepen community impact.</p>
                        <div className="aud-services">
                            <span className="aud-tag">YouTube Channel</span>
                            <span className="aud-tag">Podcast Production</span>
                            <span className="aud-tag">Brand Identity</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">13</div>
                        <h4>Community Builders</h4>
                        <p className="aud-challenge">You are building something meaningful around a shared mission, cause, or
                            interest—but your digital presence does not yet reflect the depth of what your community
                            represents.</p>
                        <p className="aud-challenge">We help community builders communicate their vision, attract the right
                            members, and build a digital presence that strengthens the community at every touchpoint.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Brand Strategy</span>
                            <span className="aud-tag">Content Production</span>
                            <span className="aud-tag">Platform Management</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">14</div>
                        <h4>Educational Brands</h4>
                        <p className="aud-challenge">You create educational content—courses, workshops, tutorials, or training
                            programmes—but your digital presence and content quality do not yet reflect the transformation
                            your work creates.</p>
                        <p className="aud-challenge">We build educational brands with premium production values, clear
                            positioning, and multi-platform content strategies that attract students and build lasting
                            authority.</p>
                        <div className="aud-services">
                            <span className="aud-tag">YouTube Channel</span>
                            <span className="aud-tag">Content Production</span>
                            <span className="aud-tag">Brand Identity</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up">
                        <div className="aud-icon">15</div>
                        <h4>Media Personalities</h4>
                        <p className="aud-challenge">You have a public profile and audience, but your personal brand, digital
                            presence, and content ecosystem are not yet fully reflecting your influence or creating the
                            opportunities your reach deserves.</p>
                        <p className="aud-challenge">We help media personalities build strategic personal brands and content
                            platforms that turn existing visibility into lasting authority and business impact.</p>
                        <div className="aud-services">
                            <span className="aud-tag">Personal Brand Strategy</span>
                            <span className="aud-tag">Content Production</span>
                            <span className="aud-tag">Media Placement</span>
                        </div>
                    </div>
                    <div className="audience-card fade-up" style={{ background: 'var(--navy)' }}>
                        <div className="aud-icon">—</div>
                        <h4 style={{ color: 'var(--white)' }}>Not Sure Where You Fit?</h4>
                        <p className="aud-challenge" style={{ color: 'rgba(255,255,255,0.55)' }}>Every person's journey is unique. Book
                            a consultation and let us identify the right services, the right strategy, and the right
                            starting point for your specific goals.</p>
                        <a href="/consultation" className="btn-outline-white" style={{ marginTop: '16px', display: 'inline-flex' }}>
                            Book A Consultation →
                        </a>
                    </div>
                </div>
            </section>
        </div>



    )

}