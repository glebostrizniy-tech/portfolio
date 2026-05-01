import { motion } from 'framer-motion';
import { ArrowDown, Mail, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const handleScrollToCases = () => {
    document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/3 -left-40 w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[140px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-1/4 -right-40 w-[700px] h-[700px] rounded-full bg-purple-600/15 blur-[140px]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a0a0f_100%)]" />
      </div>

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.08] mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm text-zinc-400 tracking-wide">
            Digital-менеджер / SMM / Аналитика
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
        >
          Digital-менеджер, который{' '}
          <span className="gradient-text">растит метрики</span>, а не просто
          ведёт соцсети
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          6+ лет превращаю данные в рост аудитории и вовлечённость
        </motion.p>

        {/* Key value prop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 mb-10"
        >
          <div className="w-1 h-1 rounded-full bg-indigo-400" />
          <span className="text-zinc-300 text-sm sm:text-base">
            Веду проекты под ключ: от контента до рекламы и аналитики
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="gradient-bg text-white px-8 py-6 text-base font-medium rounded-xl hover:brightness-110 hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-indigo-500/20"
            asChild
          >
            <a
              href="https://t.me/animecharacter"
              target="_blank"
              rel="noreferrer"
            >
              <Mail className="mr-2 h-5 w-5" />
              Связаться со мной
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={handleScrollToCases}
            className="bg-transparent border border-white/10 text-white px-8 py-6 text-base font-medium rounded-xl hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300"
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Смотреть кейсы
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-zinc-600"
          >
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
