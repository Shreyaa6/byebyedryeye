import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Heart, Users, ShieldCheck, MessageCircle } from 'lucide-react';

const PatientAdvocacy = () => {
    return (
        <div className="advocacy-page">
            <section style={{ paddingTop: '10rem', paddingBottom: '10rem', background: 'var(--bg)', textAlign: 'center' }}>
                <div className="container">
                    <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <div className="badge">Patient Support</div>
                        <h1 style={{ fontSize: '4.5rem', color: 'var(--moss)', marginBottom: '2.5rem' }}>Empathetic Advocacy</h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                            You aren't just a clinical case. We provide the support and representation you need to navigate a healthcare system that often overlooks chronic ocular distress.
                        </p>
                    </Motion.div>
                </div>
            </section>

            <section style={{ background: 'var(--aloe)', padding: '10rem 0' }}>
                <div className="container">
                    <div className="luxury-grid">
                        <div style={{ gridColumn: 'span 6' }}>
                            <div className="glass-card" style={{ height: '100%', padding: '4rem' }}>
                                <Heart size={48} color="var(--olive)" style={{ marginBottom: '2rem' }} />
                                <h2 style={{ fontSize: '2.5rem', color: 'var(--moss)', marginBottom: '2rem' }}>Our Mission</h2>
                                <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    We bridge the gap between patient suffering and clinical solutions. Our advocates are trained to help you communicate your symptoms effectively to specialists, ensuring you receive the personalized care protocol you deserve.
                                </p>
                            </div>
                        </div>
                        <div style={{ gridColumn: 'span 6' }}>
                            <div style={{ display: 'grid', gap: '3rem' }}>
                                {[
                                    { title: "Symptom Documentation", icon: <ShieldCheck size={32} />, desc: "We help you build a clinical history that doctors can't ignore." },
                                    { title: "Specialist Matching", icon: <Users size={32} />, desc: "Connecting you with the top 1% of dry eye researchers." },
                                    { title: "Mental Health Support", icon: <MessageCircle size={32} />, desc: "Resources for the psychological impact of chronic pain." }
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '2rem' }}>
                                        <div style={{ color: 'var(--olive)' }}>{item.icon}</div>
                                        <div>
                                            <h4 style={{ fontSize: '1.5rem', color: 'var(--moss)', marginBottom: '0.8rem' }}>{item.title}</h4>
                                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section style={{ padding: '10rem 0', background: 'var(--bg)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', color: 'var(--moss)', marginBottom: '3rem' }}>Talk to an Advocate Today</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 4rem', color: 'var(--text-muted)', fontSize: '1.1rem' }}>
                        Schedule a private session to review your OSDI score and build your personal advocacy roadmap.
                    </p>
                    <button className="btn-primary">Request a Session</button>
                </div>
            </section>
        </div>
    );
};

export default PatientAdvocacy;
