import { useState } from 'react';
import { Mail, Instagram, Twitter, Facebook, Send, ChevronDown, Heart, Phone, User } from 'lucide-react';
import { FAQ_ITEMS } from '../data/faq';

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div className="soft-surface rounded-[1.5rem] overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-green-bg/30 transition-colors"
      >
        <span className="font-medium text-green-dark pr-4">{item.question}</span>
        <ChevronDown
          size={20}
          className={`text-green-mid shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-sm text-green-dark/75 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="eyebrow mb-3">Get in Touch</span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-green-dark mb-4">Contact Us</h1>
          <p className="text-green-dark/70 leading-relaxed max-w-xl mx-auto">
            Have a question about dry eye, our resources, or just need someone who understands?
            We'd love to hear from you. Narendra Kumar is the founder and primary contact for the site.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 mb-16">
          {/* Form */}
          <div className="md:col-span-3">
            {submitted ? (
              <div className="soft-surface rounded-[2rem] p-10 text-center">
                <Heart size={40} className="mx-auto mb-4" />
                <h2 className="font-display text-2xl font-bold text-green-dark mb-3">Message Received!</h2>
                <p className="text-green-dark/70 leading-relaxed">
                  Thank you for reaching out. We've received your message and will get back to you soon.
                  In the meantime, consider taking our OSDI assessment or browsing our FAQ below.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="soft-surface rounded-[2rem] p-8 space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-green-dark mb-2">Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-[1rem] border border-green-light bg-white/55 text-green-dark placeholder:text-green-dark/40 focus:outline-none focus:ring-2 focus:ring-green-mid/35 focus:border-green-mid transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-green-dark mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-[1rem] border border-green-light bg-white/55 text-green-dark placeholder:text-green-dark/40 focus:outline-none focus:ring-2 focus:ring-green-mid/35 focus:border-green-mid transition-all"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-green-dark mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-[1rem] border border-green-light bg-white/55 text-green-dark placeholder:text-green-dark/40 focus:outline-none focus:ring-2 focus:ring-green-mid/35 focus:border-green-mid transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="primary-button inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium"
                >
                  Send Message
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="deep-panel rounded-[1.6rem] p-6 text-white">
              <User size={24} className="text-green-light mb-3" />
              <h3 className="font-display font-semibold mb-2">Founder Contact</h3>
              <p className="text-green-light/80 text-sm mb-3">Reach out directly to the founder:</p>
              <p className="text-white font-medium text-base">Narendra Kumar</p>
              <a href="tel:+919919748714" className="mt-3 flex items-center gap-2 text-green-light font-medium text-sm hover:text-white transition-colors">
                <Phone size={16} />
                <span>+91 99197 48714</span>
              </a>
              <a href="mailto:hello@buybuydryeye.com" className="text-green-light font-medium text-sm hover:text-white transition-colors">
                <span className="mt-3 flex items-center gap-2">
                  <Mail size={16} />
                  <span>hello@buybuydryeye.com</span>
                </span>
              </a>
            </div>
            <div className="soft-surface rounded-[1.6rem] p-6">
              <h3 className="font-display font-semibold text-green-dark mb-4">Follow Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, label: 'Instagram', href: '#' },
                  { icon: Twitter, label: 'Twitter', href: '#' },
                  { icon: Facebook, label: 'Facebook', href: '#' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-green-bg/75 flex items-center justify-center text-green-dark hover:bg-green-mid hover:text-white transition-all"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
              <p className="text-xs text-green-dark/50 mt-4">Social links coming soon — join our community!</p>
            </div>
            <div className="soft-panel rounded-[1.6rem] p-6">
              <p className="text-sm text-green-dark/70 leading-relaxed">
                <strong className="text-green-dark">Medical emergencies:</strong> This site cannot provide
                urgent medical advice. If you have sudden vision loss, severe eye pain, or eye injury,
                contact emergency services or visit an emergency room immediately.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <div className="text-center mb-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-green-dark mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-green-dark/60 text-sm">
              Answers sourced from TFOS DEWS II, American Academy of Ophthalmology, and StatPearls clinical references.
            </p>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, idx) => (
              <FAQItem
                key={item.question}
                item={item}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
