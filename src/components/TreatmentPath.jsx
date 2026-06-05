import React from 'react';
import { Compass, Thermometer, Sparkle, ShieldCheck, HeartPulse, ExternalLink } from 'lucide-react';

const TreatmentStep = ({ number, title, desc, icon }) => (
    <div style={{ display: 'flex', gap: '2.5rem', marginBottom: '4rem', position: 'relative' }}>
        <div style={{
            flexShrink: 0,
            width: '44px',
            height: '44px',
            background: 'var(--aloe)',
            border: '1px solid var(--olive)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--moss)',
            fontWeight: 600,
            fontSize: '1rem',
            zIndex: 1,
            fontFamily: 'var(--font-heading)'
        }}>
            {number}
        </div>
        <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.8rem', color: 'var(--moss)' }}>
                <div style={{ color: 'var(--olive)' }}>{icon}</div>
                <h4 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>{title}</h4>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '1rem' }}>{desc}</p>
        </div>
    </div>
);

const TreatmentPath = () => {
    return (
        <div className="glass-card" style={{ padding: '4.5rem', border: '1px solid var(--aloe)' }}>
            <div className="badge" style={{ marginBottom: '2rem' }}>The Roadmap</div>
            <h3 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--moss)', fontFamily: 'var(--font-heading)' }}>The Path to Ocular Recovery</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '4.5rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
                Restoration is a clinical sequence. We guide you through the transition from acute distress to sustainable maintenance.
            </p>

            <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '22px', top: '50px', bottom: '20px', width: '1px', background: 'var(--aloe)' }}></div>

                <TreatmentStep
                    number="01"
                    title="Baseline Clinical Assessment"
                    desc="Quantify your symptoms using the OSDI protocol to establish a measurable starting point for your recovery."
                    icon={<Compass size={22} strokeWidth={1.5} />}
                />
                <TreatmentStep
                    number="02"
                    title="Ocular Surface Stabilization"
                    desc="Implementation of preservative-free hydration and clinical-grade thermal therapy to restore gland function."
                    icon={<Thermometer size={22} strokeWidth={1.5} />}
                />
                <TreatmentStep
                    number="03"
                    title="Targeted Light Therapy (IPL)"
                    desc="Addressing the root cause—vascular inflammation—using non-invasive light pulses to restart natural lipid production."
                    icon={<Sparkle size={22} strokeWidth={1.5} />}
                />
                <TreatmentStep
                    number="04"
                    title="Long-Term Metabolic Support"
                    desc="Biochemical maintenance through algal Omega-3s and an anti-inflammatory dietary protocol for systemic health."
                    icon={<HeartPulse size={22} strokeWidth={1.5} />}
                />
            </div>

            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '2rem', padding: '1.2rem' }}>
                Download Clinical Care Protocol <ExternalLink size={16} strokeWidth={1.5} />
            </button>
        </div>
    );
};

export default TreatmentPath;
