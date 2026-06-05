import { Link, useLocation } from 'react-router-dom';
import { ClipboardList } from 'lucide-react';

export default function FloatingQuizCTA() {
  const { pathname } = useLocation();
  if (pathname === '/quiz') return null;

  return (
    <Link
      to="/quiz"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full border border-green-dark/10 bg-[rgba(248,250,245,0.88)] px-5 py-3 text-sm font-medium text-green-dark shadow-[0_16px_36px_rgba(54,83,71,0.16)] backdrop-blur-xl hover:-translate-y-0.5 hover:bg-white"
    >
      <ClipboardList size={18} />
      <span className="hidden sm:inline">Take the OSDI Test</span>
      <span className="sm:hidden">OSDI Test</span>
    </Link>
  );
}
