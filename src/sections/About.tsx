import { motion } from 'framer-motion';
import { TrendingUp, Target, BarChart3 } from 'lucide-react';
import FadeInView from '@/components/FadeInView';

const principles = [
  {
    icon: Target,
    title: 'Стратегия',
    description: 'Каждое действие подчинено цели. Нет контента ради контента.',
  },
  {
    icon: BarChart3,
    title: 'Аналитика',
    description: 'Решения на основе данных, а не интуиции.',
  },
  {
    icon: TrendingUp,
    title: 'Рост',
    description: 'Фокус на метриках, которые влияют на бизнес.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInView>
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-[0.15em]">
              Обо мне
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Аналитика + креатив = <span className="gradient-text">результат</span>
            </h2>
          </FadeInView>
        </div>

        {/* Main content */}
        <FadeInView delay={0.2}>
          <div className="p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm mb-12">
            <p className="text-lg text-zinc-300 leading-relaxed mb-4">
              6+ лет в digital. Не верю в «посты ради постов» — верю в системы, 
              которые растут из данных.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Работаю под ключ: от стратегии и контента до рекламы и аналитики. 
              Знаю SQL и DataLens — могу не только собрать данные, но и извлечь 
              из них инсайты для роста.
            </p>
          </div>
        </FadeInView>

        {/* Principles */}
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((principle, index) => (
            <FadeInView key={principle.title} delay={0.3 + index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl gradient-bg flex items-center justify-center">
                  <principle.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">{principle.title}</h3>
                <p className="text-zinc-500 text-sm">{principle.description}</p>
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
