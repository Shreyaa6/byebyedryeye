import { Link } from 'react-router-dom';
import { ArrowRight, Shield, BookOpen, Users } from 'lucide-react';

const TEAM = [
  { name: 'Narendra Kumar', role: 'Founder & Patient Advocate', initial: 'NK', bio: 'Built ByeByeDryEye to make dry eye support feel clear, calm, and accessible for people trying to understand their symptoms and next steps.' },
];

const TRUST_SIGNALS = [
  { icon: BookOpen, title: 'Evidence-Based Information', desc: 'All content is grounded in peer-reviewed research, TFOS DEWS II guidelines, and recommendations from the American Academy of Ophthalmology.' },
  { icon: Shield, title: 'No Sponsored Content', desc: 'We don\'t accept payment from product manufacturers. Our product recommendations are based on clinical evidence and community feedback — not advertising deals.' },
  { icon: Users, title: 'Community-First', desc: 'Built by and for dry eye sufferers. Every page is written with empathy for the frustration, fatigue, and isolation that chronic eye discomfort can bring.' },
];

export default function AboutPage() {
  return (
    <div>
      <section className="section-band-light py-10 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="eyebrow mb-3">Our Story</span>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
              Why ByeByeDryEye Exists
            </h1>
          </div>
        </div>
      </section>

      <section className="section-band-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="soft-surface rounded-[2rem] p-8 md:p-10">
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
                <strong className="text-green-dark">ByeByeDryEye</strong> was born from that frustration —
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
        </div>
      </section>

      <section className="section-band-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="deep-panel rounded-[2rem] p-8 md:p-10 text-white">
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
        </div>
      </section>

      <section className="section-band-dark py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
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
        </div>
      </section>

      <section className="section-band-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-bold text-green-dark text-center mb-8">Meet the Team</h2>
          <div className="max-w-sm mx-auto">
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
      </section>

      <section className="section-band-dark py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/quiz"
            className="primary-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
          >
            Take the Free OSDI Assessment
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
