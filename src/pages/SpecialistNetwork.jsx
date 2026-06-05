import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Search, MapPin, Star, ShieldCheck, UserCheck } from 'lucide-react';

const SpecialistNetwork = () => {
    return (
        <div className="specialists-page">
            <section style={{ paddingTop: '10rem', paddingBottom: '10rem', background: 'var(--bg)', textAlign: 'center' }}>
                <div className="container">
                    <Motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                        <div className="badge">Specialized Clinical Care</div>
                        <h1 style={{ fontSize: '4.5rem', color: 'var(--moss)', marginBottom: '2.5rem' }}>Our Expert Network</h1>
                        <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
                            We partner with the world's most innovative ophthalmologists and researchers specializing in the delicate restoration of the ocular surface.
                        </p>
                    </Motion.div>
                </div>
            </section>

            <section style={{ background: 'var(--aloe)', padding: '10rem 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
                        {[
                            { name: "Dr. Elena Moss", location: "San Francisco, CA", specialty: "Corneal Nerve Regeneration", clinics: "OSDI Protocol Certified", image: "https://images.unsplash.com/photo-1559839734-2b71f1e3b778?auto=format&fit=crop&q=80&w=400" },
                            { name: "Dr. Sarah J. Peterson", location: "New York, NY", specialty: "Hormonal Tear Dynamics", clinics: "MGD Specialist", image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400" },
                            { name: "Dr. Liam Chen", location: "London, UK", specialty: "IPL Research Lead", clinics: "Therapeutic Light Specialist", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400" },
                            { name: "Dr. Maria L. Ricci", location: "Rome, IT", specialty: "Scleral Contact Research", clinics: "ByeByeDryEye Partner", image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400" }
                        ].map((spec, idx) => (
                            <Motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card hover-lift"
                                style={{ padding: '2.5rem', display: 'flex', gap: '2.5rem', alignItems: 'center' }}
                            >
                                <div style={{ width: '120px', height: '120px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0, border: '2px solid var(--aloe)' }}>
                                    <img src={spec.image} alt={spec.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ color: 'var(--olive)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '0.5rem', textTransform: 'uppercase' }}>{spec.specialty}</div>
                                    <h3 style={{ fontSize: '1.6rem', color: 'var(--moss)', marginBottom: '0.5rem' }}>{spec.name}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.2rem' }}>
                                        <MapPin size={14} /> <span>{spec.location}</span>
                                    </div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>{spec.clinics}</p>
                                    <button className="btn-secondary" style={{ padding: '0.4rem 0', fontSize: '0.75rem' }}>View Specialist Profile</button>
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section style={{ padding: '10rem 0', background: 'var(--bg)', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3rem', color: 'var(--moss)', marginBottom: '3rem' }}>Find Local Clinical Mastery</h2>
                        <div style={{ position: 'relative' }}>
                            <div style={{ position: 'absolute', left: '2rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--cypress)' }}>
                                <Search size={20} strokeWidth={1.5} />
                            </div>
                            <input
                                type="text"
                                placeholder="Enter ZIP Code or City..."
                                style={{
                                    width: '100%',
                                    padding: '1.8rem 2rem 1.8rem 5rem',
                                    border: '1px solid var(--aloe)',
                                    background: 'var(--white)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    color: 'var(--moss)',
                                    fontFamily: 'var(--font-body)',
                                    boxShadow: 'var(--shadow-lux)'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SpecialistNetwork;
