import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Shield, Lock, Eye, Cloud } from 'lucide-react';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-page">
            <section style={{ paddingTop: '10rem', paddingBottom: '10rem', background: 'var(--bg)', textAlign: 'center' }}>
                <div className="container">
                    <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <div className="badge">Data Integrity</div>
                        <h1 style={{ fontSize: '4.5rem', color: 'var(--moss)', marginBottom: '2.5rem' }}>Your Privacy</h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                            Your ocular health data is personal. We handle every clinical assessment and interaction with the highest standard of pharmaceutical-grade encryption.
                        </p>
                    </Motion.div>
                </div>
            </section>

            <section style={{ background: 'var(--aloe)', padding: '10rem 0' }}>
                <div className="container">
                    <div className="glass-card" style={{ maxWidth: '900px', margin: '0 auto', padding: '6rem' }}>
                        <div style={{ display: 'grid', gap: '5rem' }}>
                            {[
                                { title: "Data Protection Protocol", icon: <Lock size={28} />, content: "We use AES-256 bit encryption for all stored OSDI assessment data. No clinical information is shared with third-party pharmaceuticals without explicit patient consent." },
                                { title: "Clinical Cookies", icon: <Cloud size={28} />, content: "Our site uses cookies to remember your assessment history within a 30-day window. This allows you to track progress over multiple sessions without manual data entry." },
                                { title: "Rights of Access", icon: <Eye size={28} />, content: "You have the right to request the immediate and full deletion of any health profile or assessment history associated with your digital identifier." },
                                { title: "Partner Network Privacy", icon: <Shield size={28} />, content: "When you request a referral to our specialist network, only the necessary clinical symptoms and contact data are transmitted via our HIPAA-compliant gateway." }
                            ].map((policy, idx) => (
                                <div key={idx} style={{ display: 'flex', gap: '3rem' }}>
                                    <div style={{ color: 'var(--olive)', marginTop: '0.4rem' }}>{policy.icon}</div>
                                    <div>
                                        <h3 style={{ fontSize: '1.8rem', color: 'var(--moss)', marginBottom: '1rem' }}>{policy.title}</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8' }}>{policy.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div style={{ marginTop: '6rem', borderTop: '1px solid var(--aloe)', paddingTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem', textAlign: 'center' }}>
                            Last Updated: March 2026. For questions regarding your data, contact our clinical lead at <span style={{ color: 'var(--olive)', fontWeight: 600 }}>compliance@purevision.com</span>.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPolicy;
