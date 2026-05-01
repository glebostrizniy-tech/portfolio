import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">
              Глеб<span className="gradient-text">.</span>
            </span>
            <span className="text-zinc-700">|</span>
            <span className="text-sm text-zinc-600">
              Digital-менеджер
            </span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()}
          </p>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Наверх
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
