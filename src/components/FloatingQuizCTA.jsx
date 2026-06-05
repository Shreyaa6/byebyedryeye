import { Link, useLocation } from 'react-router-dom';
import { ClipboardList, MessageCircle } from 'lucide-react';

export default function FloatingQuizCTA() {
  const { pathname } = useLocation();
  if (pathname === '/quiz') return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="https://wa.link/976wao"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full border border-[#1f9d58]/20 bg-[#25D366] px-5 py-3 text-sm font-medium text-white shadow-[0_16px_36px_rgba(37,211,102,0.24)] hover:-translate-y-0.5 hover:bg-[#1ebe5d]"
      >
        <MessageCircle size={18} />
        <span className="hidden sm:inline">WhatsApp Us</span>
        <span className="sm:hidden">WhatsApp</span>
      </a>

      <Link
        to="/quiz"
        className="flex items-center gap-2 rounded-full border border-green-dark/10 bg-[rgba(248,250,245,0.88)] px-5 py-3 text-sm font-medium text-green-dark shadow-[0_16px_36px_rgba(54,83,71,0.16)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white"
      >
        <ClipboardList size={18} />
        <span className="hidden sm:inline">Take the OSDI Test</span>
        <span className="sm:hidden">OSDI Test</span>
      </Link>
    </div>
  );
}
