import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BookOpen, Users } from 'lucide-react';

const TEAM = [
  { name: 'Narendra Kumar', role: 'Founder & Patient Advocate', initial: 'NK', bio: 'Built BuyBuy Dry Eye to make dry eye support feel clear, calm, and accessible for people trying to understand their symptoms and next steps.' },
  { name: 'James Okonkwo', role: 'Health Content Editor', initial: 'JO', bio: 'Medical writer specializing in ophthalmology patient education. Ensures all content aligns with TFOS DEWS II and AAO guidelines.' },
  { name: 'Sarah Chen', role: 'Community Lead', initial: 'SC', bio: 'Connects dry eye sufferers with resources, support groups, and evidence-based information across our community channels.' },
];

const TRUST_SIGNALS = [
  { icon: BookOpen, title: 'Evidence-Based Information', desc: 'All content is grounded in peer-reviewed research, TFOS DEWS II guidelines, and recommendations from the American Academy of Ophthalmology.' },
  { icon: Shield, title: 'No Sponsored Content', desc: 'We don\'t accept payment from product manufacturers. Our product recommendations are based on clinical evidence and community feedback — not advertising deals.' },
  { icon: Users, title: 'Community-First', desc: 'Built by and for dry eye sufferers. Every page is written with empathy for the frustration, fatigue, and isolation that chronic eye discomfort can bring.' },
];

export default function AboutPage() {
  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-14">
          <span className="eyebrow mb-3">Our Story</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
            Why BuyBuy Dry Eye Exists
          </h1>
        </div>

        {/* Story */}
        <div className="soft-surface rounded-[2rem] p-8 md:p-10 mb-12">
          <div className="max-w-none space-y-5 text-green-dark/80 leading-relaxed">
            <p>
              I remember sitting in my ophthalmologist's office for the third time, being told my
              eyes were "fine" while they burned every single day. The artificial tears from the
              pharmacy helped for twenty minutes — then the grittiness returned. I started wondering
              if I was imagining it.
            </p>
            <p>
              I wasn't imagining it. Dry eye disease affects an estimated 10–20% of adults over 40,
              and prevalence among screen workers can reach 70%. Yet it's routinely underdiagnosed,
              undertreated, and dismissed. The gap between what patients experience and what the
              healthcare system addresses is enormous.
            </p>
            <p>
              <strong className="text-green-dark">BuyBuy Dry Eye</strong> was born from that frustration —
              and from the relief I finally found once I understood my condition, took a validated
              assessment like the OSDI, and worked with a specialist who took my symptoms seriously.
            </p>
            <p>
              This site is my way of paying it forward. We provide evidence-based information,
              a free OSDI self-assessment, and curated product guidance — all with zero sales
              pressure and zero sponsored content.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="deep-panel rounded-[2rem] p-8 md:p-10 text-white mb-12">
          <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-green-light/90 leading-relaxed text-lg">
            To help dry eye sufferers find answers, validate their experience, and discover
            practical paths to relief — always in partnership with professional eye care,
            never as a replacement for it.
          </p>
          <p className="mt-4 text-green-light/60 text-sm">
            We do not sell products directly. We are an informational health companion, not an ecommerce store.
          </p>
        </div>

        {/* Trust Signals */}
        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {TRUST_SIGNALS.map((item) => (
            <div key={item.title} className="soft-surface rounded-[1.6rem] p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-green-bg/80 flex items-center justify-center mx-auto mb-4">
                <item.icon size={22} className="text-green-dark" />
              </div>
              <h3 className="font-display font-semibold text-green-dark mb-2">{item.title}</h3>
              <p className="text-sm text-green-dark/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-green-dark text-center mb-8">Meet the Team</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="soft-surface rounded-[1.6rem] p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-dark to-green-mid text-white font-display font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-[0_12px_26px_rgba(54,83,71,0.18)]">
                  {member.initial}
                </div>
                <h3 className="font-display font-semibold text-green-dark">{member.name}</h3>
                <p className="text-xs text-green-mid font-medium mb-3">{member.role}</p>
                <p className="text-sm text-green-dark/70 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/quiz"
            className="primary-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
          >
            Take the Free OSDI Assessment
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
