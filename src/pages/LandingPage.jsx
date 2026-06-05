import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, Flame, Cloud, AlertTriangle, Circle, Droplet, Eye, Frown, ScanSearch, Monitor, Snowflake, Apple, Glasses, ClipboardList, FlaskConical, BookOpen, Handshake, Leaf, Venus, User, Globe, Heart } from 'lucide-react';

const SYMPTOMS = [
  { icon: Flame, text: 'Stinging, burning, or pressure in the eyes' },
  { icon: Cloud, text: 'Blurred vision, especially when reading' },
  { icon: AlertTriangle, text: 'Scratchy or gritty feeling — like something is in your eye' },
  { icon: Circle, text: 'Redness or irritation, especially in wind or smoke' },
  { icon: Droplet, text: 'Paradoxically, excessive tearing' },
  { icon: Eye, text: 'Difficulty wearing contact lenses' },
];

const CAUSES = [
  { title: 'Evaporative Dry Eye', desc: 'The most common subtype — caused by meibomian gland dysfunction (MGD) where oil glands in the eyelids don\'t produce enough quality oil, leading to rapid tear evaporation.' },
  { title: 'Aqueous-Deficiency Dry Eye', desc: 'Reduced tear production, often linked to autoimmune conditions like Sjögren syndrome, rheumatoid arthritis, diabetes, or thyroid disease.' },
  { title: 'Mixed Dry Eye', desc: 'Many patients have elements of both evaporative and aqueous-deficiency dry eye occurring simultaneously.' },
];

const STATS = [
  { value: '5–50%', label: 'Worldwide prevalence (varies by diagnostic criteria)', source: 'StatPearls, 2024' },
  { value: '10–20%', label: 'Of adults over 40 report severe symptoms or seek treatment', source: 'PMC Epidemiology Review, 2024' },
  { value: '12–22%', label: 'Prevalence in women (hormonal factors)', source: 'StatPearls, 2024' },
  { value: '~70%', label: 'Prevalence in visual display terminal users', source: 'StatPearls, 2024' },
];

const TRIGGERS = [
  { icon: Monitor, title: 'Screen Time', desc: 'Blink rate drops from ~15–20/min to 5–7/min during focused screen work, reducing tear film renewal. Prevalence in screen users can reach 70%.' },
  { icon: Snowflake, title: 'Air Conditioning', desc: 'Low humidity environments accelerate tear evaporation. Air-conditioned spaces are a documented OSDI environmental trigger.' },
  { icon: Apple, title: 'Diet & Hydration', desc: 'Omega-3 deficiency and dehydration affect tear film quality. Anti-inflammatory diets may support ocular surface health.' },
  { icon: Glasses, title: 'Contact Lenses', desc: 'Contact lens wear disrupts the tear film and is a recognized risk factor, especially with extended wear schedules.' },
];

const DIET_TIPS = [
  { food: 'Fatty Fish', examples: 'Salmon, mackerel, sardines', benefit: 'Rich in EPA & DHA omega-3s that support tear film stability' },
  { food: 'Walnuts & Flaxseed', examples: 'Chia seeds, hemp seeds', benefit: 'Plant-based ALA omega-3 for anti-inflammatory support' },
  { food: 'Leafy Greens', examples: 'Spinach, kale, collards', benefit: 'Lutein and zeaxanthin support overall eye health' },
  { food: 'Hydration', examples: '8+ glasses of water daily', benefit: 'Adequate systemic hydration supports aqueous tear production' },
  { food: 'Colorful Vegetables', examples: 'Bell peppers, carrots, sweet potato', benefit: 'Antioxidants reduce ocular surface inflammation' },
  { food: 'Limit', examples: 'Processed foods, excess caffeine, alcohol', benefit: 'Can worsen dehydration and inflammatory dry eye symptoms' },
];

const HELP_ITEMS = [
  { icon: ClipboardList, title: 'OSDI Self-Assessment', desc: 'Take the clinically validated 12-question Ocular Surface Disease Index to understand your symptom severity.' },
  { icon: FlaskConical, title: 'Product Guidance', desc: 'Browse evidence-informed product categories — from artificial tears to warm compresses — with no sales pressure.' },
  { icon: BookOpen, title: 'Trusted Information', desc: 'Content grounded in TFOS DEWS II guidelines, AAO recommendations, and peer-reviewed research.' },
  { icon: Handshake, title: 'Empathetic Support', desc: 'We validate your experience and always encourage professional consultation for persistent symptoms.' },
];

function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {badge && (
        <span className="eyebrow mb-3">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-4">{title}</h2>
      {subtitle && <p className="text-green-dark/70 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow mb-6">
                <Leaf size={14} /> Your trusted dry eye companion
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-green-dark leading-tight mb-6">
                You're Not Alone.{' '}
                <span className="text-green-mid">Dry Eyes Are More Common Than You Think.</span>
              </h1>
              <p className="text-green-dark/75 text-lg leading-relaxed mb-4">
                If your eyes burn, feel gritty, or blur when you read — your symptoms are real,
                and you're far from alone. Dry eye affects millions worldwide, yet it's often
                dismissed or misdiagnosed.
              </p>
              <p className="text-green-dark/60 leading-relaxed mb-8">
                We hear you. ByeByeDryEye is here to help you understand what's happening,
                assess your symptoms, and find practical paths to relief — always alongside
                professional eye care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/quiz"
                  className="primary-button inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium"
                >
                  Take the OSDI Quiz
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="#what-is-dry-eye"
                  className="secondary-button inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium"
                >
                  Learn More
                  <ChevronDown size={18} />
                </a>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://i.pinimg.com/1200x/eb/45/97/eb45971fb783b4ef76810fa937eb239d.jpg"
                alt="Person finding relief from dry eye symptoms"
                className="soft-surface rounded-[2rem] w-full object-cover"
              />
              <div className="soft-surface absolute -bottom-4 -left-4 rounded-[1.5rem] p-4 max-w-[200px]">
                <p className="text-2xl font-display font-bold text-green-dark">5–50%</p>
                <p className="text-xs text-green-dark/60 leading-snug">Global prevalence of dry eye disease</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Dry Eye */}
      <section id="what-is-dry-eye" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Understanding Dry Eye"
            title="What is Dry Eye Syndrome?"
            subtitle="Dry eye is a multifactorial disease of the tears and ocular surface — not simply 'dryness.' It involves tear film instability, inflammation, and symptoms that can significantly affect daily life."
          />

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="font-display text-xl font-semibold text-green-dark mb-6 flex items-center gap-2">
                <Frown size={28} className="inline-block" /> Common Symptoms
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {SYMPTOMS.map((s) => (
                  <div key={s.text} className="soft-panel flex items-start gap-3 rounded-[1.25rem] p-4">
                    <s.icon size={20} className="shrink-0 mt-0.5" />
                    <p className="text-sm text-green-dark/80 leading-snug">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-green-dark mb-6 flex items-center gap-2">
                <ScanSearch size={28} className="inline-block" /> Types & Causes
              </h3>
              <div className="space-y-4">
                {CAUSES.map((c) => (
                  <div key={c.title} className="soft-surface rounded-[1.4rem] p-5">
                    <h4 className="font-semibold text-green-dark mb-2">{c.title}</h4>
                    <p className="text-sm text-green-dark/70 leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="deep-panel rounded-[2rem] p-8 md:p-10 text-white">
            <p className="text-green-light/90 text-sm italic mb-2">TFOS DEWS II Definition (2017)</p>
            <blockquote className="text-lg md:text-xl leading-relaxed font-light">
              "Dry eye is a multifactorial disease of the tears and ocular surface that results in
              symptoms of discomfort, visual disturbance, and tear film instability with potential
              damage to the ocular surface. It is accompanied by increased osmolarity of the tear
              film and inflammation of the ocular surface."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Who is Affected */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="By the Numbers"
            title="Who Is Affected?"
            subtitle="Dry eye doesn't discriminate — but certain groups face higher risk. These statistics come from population-based studies and clinical epidemiology reviews."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat) => (
              <div key={stat.label} className="soft-surface rounded-[1.6rem] p-6 text-center">
                <p className="font-display text-3xl md:text-4xl font-bold text-green-mid mb-3">{stat.value}</p>
                <p className="text-sm text-green-dark/80 leading-snug mb-3">{stat.label}</p>
                <p className="text-xs text-green-dark/40 italic">{stat.source}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { icon: Venus, title: 'Women & Menopause', text: 'Female gender is a significant risk factor. Hormonal changes after menopause reduce tear production and affect meibomian gland function.' },
              { icon: User, title: 'Aging Population', text: 'Tear production naturally decreases with age. Symptoms become more common and severe over time, especially after age 40.' },
              { icon: Globe, title: 'Geographic & Ethnic Variation', text: 'Prevalence varies by region and ethnicity. Asian populations show higher rates of MGD; Black and Asian individuals may have higher prevalence than White populations in some studies.' },
            ].map((item) => (
              <div key={item.title} className="soft-surface rounded-[1.6rem] p-6">
                <item.icon size={32} className="mb-3 block" />
                <h3 className="font-display font-semibold text-green-dark mb-2">{item.title}</h3>
                <p className="text-sm text-green-dark/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Misdiagnosis */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://i.pinimg.com/736x/d5/e1/db/d5e1dbe5925080f0ae9468ff8ec8cf45.jpg"
              alt="Understanding dry eye symptoms"
              className="soft-surface rounded-[2rem] w-full"
            />
            <div>
              <span className="eyebrow mb-3">
                Why It Gets Missed
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-6">
                Why Dry Eye Is Often Misdiagnosed
              </h2>
              <div className="space-y-4 text-green-dark/75 leading-relaxed">
                <p>
                  Many patients spend years being told their symptoms are "just allergies," eye strain,
                  or a normal part of aging. The reality is more complex.
                </p>
                <ul className="space-y-3">
                  {[
                    'Signs and symptoms often don\'t match — clinical tests may show disease while patients feel fine, or vice versa',
                    'Meibomian gland dysfunction (MGD) — the leading cause of evaporative dry eye — requires specialized evaluation to detect',
                    'Symptoms overlap with allergic conjunctivitis, blepharitis, and digital eye strain',
                    'Many primary care providers lack specialized dry eye diagnostic tools',
                    'Patients may not report symptoms because they\'ve normalized chronic discomfort',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-mid mt-2.5 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="soft-panel text-sm font-medium text-green-dark rounded-[1.25rem] p-4">
                  <Heart size={16} className="inline-block mr-1" /> Your symptoms are valid. If over-the-counter drops aren't helping after 2–4 weeks,
                  please see an eye care professional for a comprehensive evaluation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Triggers */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Daily Life"
            title="Lifestyle Triggers You Should Know"
            subtitle="Modern life creates perfect conditions for dry eye. Understanding your triggers is the first step toward managing them."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRIGGERS.map((t) => (
              <div key={t.title} className="soft-surface rounded-[1.6rem] p-6 hover:-translate-y-1">
                <t.icon size={36} className="mb-4 block" />
                <h3 className="font-display font-semibold text-green-dark mb-2">{t.title}</h3>
                <p className="text-sm text-green-dark/70 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diet Tips */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Nutrition & Hydration"
            title="Diet Tips for Dry Eye Relief"
            subtitle="While diet alone won't cure dry eye, nutritional support can complement medical treatment — especially omega-3 fatty acids, which clinical studies link to improved tear film stability."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DIET_TIPS.map((tip) => (
              <div key={tip.food} className="soft-surface rounded-[1.5rem] p-5">
                <h3 className="font-display font-semibold text-green-dark mb-1">{tip.food}</h3>
                <p className="text-xs text-green-mid mb-3">{tip.examples}</p>
                <p className="text-sm text-green-dark/70">{tip.benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="Our Approach"
            title="How We Help"
            subtitle="We're not a store — we're a health companion. Here's what we offer to support your dry eye journey."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HELP_ITEMS.map((item) => (
              <div key={item.title} className="soft-surface rounded-[1.6rem] p-6 text-center">
                <item.icon size={36} className="mb-4 block" />
                <h3 className="font-display font-semibold text-green-dark mb-2">{item.title}</h3>
                <p className="text-sm text-green-dark/70 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="deep-panel rounded-[2.25rem] px-6 py-10 md:px-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Understand Your Symptoms?
            </h2>
            <p className="text-green-light/90 mb-8 leading-relaxed max-w-2xl mx-auto">
              The OSDI (Ocular Surface Disease Index) is a clinically validated 12-question
              assessment used worldwide by eye care professionals. It takes about 5 minutes
              and can help you communicate your symptoms more effectively to your doctor.
            </p>
            <Link
              to="/quiz"
              className="secondary-button inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
            >
              Start the OSDI Quiz
              <ArrowRight size={20} />
            </Link>
            <p className="mt-6 text-green-light/50 text-xs">
              This is not a medical diagnosis. Please consult an eye care professional.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
