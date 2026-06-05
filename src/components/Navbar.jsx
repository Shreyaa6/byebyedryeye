import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/lo.png';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'OSDI Quiz', path: '/quiz' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-green-dark/8 bg-[rgba(248,250,245,0.74)] backdrop-blur-xl shadow-[0_12px_30px_rgba(39,65,54,0.06)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img
              src={logo}
              alt="ByeByeDryEye logo"
              className="h-8 w-auto max-w-[4.75rem] object-contain transition-transform group-hover:scale-[1.02]"
            />
            <span className="font-display font-semibold text-lg tracking-tight text-green-dark">
              ByeByeDryEye
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-green-dark/8 bg-white/50 p-1.5 shadow-[0_10px_24px_rgba(54,83,71,0.05)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === link.path
                    ? 'bg-green-dark text-white shadow-[0_8px_18px_rgba(54,83,71,0.18)]'
                    : 'text-green-dark/68 hover:bg-green-bg/80 hover:text-green-dark'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden p-2 rounded-full border border-green-dark/10 bg-white/60 text-green-dark hover:bg-green-bg/90"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-green-dark/8 bg-[rgba(248,250,245,0.9)] px-4 py-4 space-y-1 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setOpen(false)}
              className={`block px-4 py-3 rounded-2xl text-sm font-medium transition-colors ${
                pathname === link.path
                  ? 'bg-green-dark text-white shadow-[0_10px_24px_rgba(54,83,71,0.18)]'
                  : 'text-green-dark/70 hover:bg-green-bg/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
