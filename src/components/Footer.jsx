import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import logo from '../assets/lo.png';

export default function Footer() {
  return (
    <footer className="w-full bg-[linear-gradient(180deg,#365347_0%,#426253_100%)] text-white shadow-[0_-8px_24px_rgba(36,58,49,0.12)]">
      <div className="w-full px-6 py-12 md:px-10 md:py-14">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logo}
                  alt="BuyBuy Dry Eye logo"
                  className="h-8 w-auto max-w-[4.75rem] object-contain"
                />
                <span className="font-display font-semibold text-2xl tracking-tight">BuyBuy Dry Eye</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed text-white/82 mb-5">
                Minimal, evidence-based guidance for people living with dry eye.
              </p>
              <div className="flex items-center gap-3">
                {[
                  { icon: Facebook, label: 'Facebook' },
                  { icon: Twitter, label: 'Twitter' },
                  { icon: Instagram, label: 'Instagram' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/85 hover:bg-white/18 hover:text-white"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
                Contact Us
              </h4>
              <div className="space-y-3 text-sm text-white/82">
                <p className="font-medium text-white">Narendra Kumar</p>
                <a href="mailto:hello@buybuydryeye.com" className="flex items-center gap-2 hover:text-white">
                  <Mail size={15} />
                  <span>hello@buybuydryeye.com</span>
                </a>
                <a href="tel:+919919748714" className="flex items-center gap-2 hover:text-white">
                  <Phone size={15} />
                  <span>+91 99197 48714</span>
                </a>
              </div>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                {[
                  { label: 'Home', path: '/' },
                  { label: 'Quiz', path: '/quiz' },
                  { label: 'Products', path: '/products' },
                  { label: 'About', path: '/about' },
                  { label: 'Contact', path: '/contact' },
                ].map((item) => (
                  <Link key={item.path} to={item.path} className="text-xs uppercase tracking-[0.16em] text-white/65 hover:text-white">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/90">
                Subscribe
              </h4>
              <p className="max-w-xs text-sm leading-relaxed text-white/82 mb-5">
                Enter your email to get gentle updates, helpful resources, and new dry eye support content.
              </p>
              <div className="flex items-center rounded-xl border border-white/18 bg-white/10 px-4 py-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent text-sm text-white placeholder:text-white/55 focus:outline-none"
                />
                <Mail size={17} className="text-white/80" />
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/14 pt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-xs leading-relaxed text-white/60">
              Medical disclaimer: This website shares educational information only and is not a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-xs text-white/58">
              © {new Date().getFullYear()} BuyBuy Dry Eye. All rights reserved.
            </p>
          </div>
          </div>
      </div>
    </footer>
  );
}
