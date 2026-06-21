'use client'
import { useEffect, useState } from 'react';

type FormData = {
    fname: string;
    lname: string;
    email: string;
    service: string;
    message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

export default function Page() {
    const [formData, setFormData] = useState<FormData>({
        fname: '', lname: '', email: '', service: '', message: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [submitted, setSubmitted] = useState(false);
    const [touched, setTouched] = useState<Partial<Record<keyof FormData, boolean>>>({});

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.fade-up').forEach((el, i) => {
            (el as HTMLElement).style.transitionDelay = (i % 4) * 0.07 + 's';
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const validate = (data: FormData): FormErrors => {
        const errs: FormErrors = {};
        if (!data.fname.trim()) errs.fname = 'First name is required.';
        if (!data.lname.trim()) errs.lname = 'Last name is required.';
        if (!data.email.trim()) {
            errs.email = 'Email address is required.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
            errs.email = 'Please enter a valid email address.';
        }
        if (!data.service) errs.service = 'Please select a service.';
        if (!data.message.trim()) {
            errs.message = 'Please tell us about your goals.';
        } else if (data.message.trim().length < 20) {
            errs.message = 'Please provide at least 20 characters.';
        }
        return errs;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        const updated = { ...formData, [name]: value };
        setFormData(updated);
        if (touched[name as keyof FormData]) {
            setErrors(validate(updated));
        }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name } = e.target;
        setTouched(prev => ({ ...prev, [name]: true }));
        setErrors(validate(formData));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
        setTouched(allTouched);
        const errs = validate(formData);
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            // Build mailto link with form data
            const subject = encodeURIComponent(`Consultation Enquiry — ${formData.service || 'General'}`);
            const body = encodeURIComponent(
                `Name: ${formData.fname} ${formData.lname}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
            );
            window.location.href = `mailto:princocoastudios@gmail.com?subject=${subject}&body=${body}`;
            setSubmitted(true);
        }
    };

    const fieldStyle = (field: keyof FormData): React.CSSProperties => ({
        outline: touched[field] && errors[field] ? '2px solid #e55a5a' : undefined,
    });

    const errorMsg = (field: keyof FormData) =>
        touched[field] && errors[field] ? (
            <div style={{ color: '#e55a5a', fontSize: '12px', marginTop: '4px', letterSpacing: '0.02em' }}>
                {errors[field]}
            </div>
        ) : null;

    return (
        <div id="page-contact" className="page active">
            <div className="page-hero">
                <div className="section-eyebrow">Get In Touch</div>
                <h1>Let's Build<br />Something <em>Together</em></h1>
                <p>Ready to build your brand, create strategic content, or grow your digital presence? We would love to hear
                    from you.</p>
            </div>

            <section className="contact-page">
                <div className="contact-grid">
                    <div className="contact-info fade-up">
                        <h3>How Can We Help?</h3>
                        <p>Whether you are ready to book a consultation, want to ask about a specific service, or are simply
                            exploring your options—reach out. Every great collaboration starts with a conversation.</p>
                        <div className="contact-method">
                            <div className="cm-icon">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <div className="cm-label">Email</div>
                                <div className="cm-value">
                                    <a href="mailto:princocoastudios@gmail.com">princocoastudios@gmail.com</a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-method">
                            <div className="cm-icon">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <div className="cm-label">Location</div>
                                <div className="cm-value">Nigeria — available for remote and in-person engagements</div>
                            </div>
                        </div>
                        <div className="contact-method">
                            <div className="cm-icon">
                                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 6v6l4 2" />
                                </svg>
                            </div>
                            <div>
                                <div className="cm-label">Response Time</div>
                                <div className="cm-value">Within 48 hours</div>
                            </div>
                        </div>
                        <div style={{ marginTop: '32px', padding: '24px', background: 'var(--blue-pale)', borderLeft: '3px solid var(--blue)', borderRadius: 'var(--radius)' }}>
                            <div style={{ fontSize: '13px', fontWeight: '500', color: 'var(--navy)', marginBottom: '8px' }}>Not ready to book?</div>
                            <p style={{ fontSize: '14px', color: 'var(--ink-60)', lineHeight: '1.65', marginBottom: '16px' }}>Request a free
                                basic page audit and receive practical recommendations to improve your current digital
                                presence—no commitment required.</p>
                            <a href="/#lead-audit" className="btn-secondary" style={{ fontSize: '12px', padding: '10px 20px' }}>
                                Get My Free Audit
                            </a>
                        </div>
                    </div>
                    <div className="contact-form-box fade-up">
                        {submitted ? (
                            <div id="contact-success" style={{ display: 'block' }}>
                                <h5>✓ Message received!</h5>
                                <p>Thank you for reaching out. We will review your message and respond within 48 hours with
                                    tailored recommendations for your situation.</p>
                            </div>
                        ) : (
                            <form id="contact-form" onSubmit={handleSubmit} noValidate>
                                <div className="cf-grid2">
                                    <div className="cf-row">
                                        <label>First Name</label>
                                        <input
                                            type="text"
                                            name="fname"
                                            placeholder="First name"
                                            value={formData.fname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={fieldStyle('fname')}
                                        />
                                        {errorMsg('fname')}
                                    </div>
                                    <div className="cf-row">
                                        <label>Last Name</label>
                                        <input
                                            type="text"
                                            name="lname"
                                            placeholder="Last name"
                                            value={formData.lname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            style={fieldStyle('lname')}
                                        />
                                        {errorMsg('lname')}
                                    </div>
                                </div>
                                <div className="cf-row">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={fieldStyle('email')}
                                    />
                                    {errorMsg('email')}
                                </div>
                                <div className="cf-row">
                                    <label>What Are You Interested In?</label>
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={fieldStyle('service')}
                                    >
                                        <option value="">Select a service...</option>
                                        <option>Personal Brand Identity Consultation</option>
                                        <option>Content Production &amp; Brand Storytelling</option>
                                        <option>Platform Management &amp; Community Growth</option>
                                        <option>Growth &amp; Visibility Services</option>
                                        <option>Multiple Services / Full Ecosystem</option>
                                        <option>General Enquiry</option>
                                    </select>
                                    {errorMsg('service')}
                                </div>
                                <div className="cf-row">
                                    <label>Tell Us About Your Goals</label>
                                    <textarea
                                        name="message"
                                        placeholder="Briefly describe where you are now and what you are hoping to achieve..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        style={fieldStyle('message')}
                                    />
                                    {errorMsg('message')}
                                </div>
                                <button type="submit" className="cf-submit">Send Message →</button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}