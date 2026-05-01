import { motion } from 'framer-motion';
import {
  TrendingUp,
  Users,
  Video,
  Target,
  BarChart3,
  Megaphone,
  ArrowUpRight,
  ArrowUp,
  Zap,
  Share2,
} from 'lucide-react';
import FadeInView from '@/components/FadeInView';
import AnimatedCounter from '@/components/AnimatedCounter';

type KruzenshternMetric =
  | { label: string; arrowsOnly: true }
  | { label: string; from: string; to: number; suffix: string; growth: string };

function isKruzenshternArrowsMetric(m: KruzenshternMetric): m is Extract<
  KruzenshternMetric,
  { arrowsOnly: true }
> {
  return 'arrowsOnly' in m && m.arrowsOnly;
}

// КЕЙС 1: Крузенштерн бар
const kruzenshternCase = {
  name: 'Крузенштерн бар',
  role: 'SMM-менеджер',
  description:
    'Полный цикл продвижения бара: от стратегии до аналитики. Комплексный подход дал устойчивый рост всех ключевых метрик.',
  metrics: [
    { label: 'Просмотры', from: '1.2K', to: 2600, suffix: '', growth: '+109%' },
    { label: 'Новая аудитория', from: '48%', to: 58, suffix: '%', growth: '+10 п.п.' },
  ] satisfies KruzenshternMetric[],
  tasks: [
    { icon: Share2, text: 'Ведение соцсетей' },
    { icon: Target, text: 'Контент-стратегия' },
    { icon: Video, text: 'Сценарии и монтаж Reels' },
    { icon: Megaphone, text: 'Таргетированная реклама' },
    { icon: BarChart3, text: 'Яндекс.Витрина и Директ' },
    { icon: Users, text: 'Коммуникация с аудиторией' },
  ],
  accent: 'from-amber-500 to-orange-500',
};

// КЕЙС 2: Instagram проекты
const instagramCase = {
  name: 'Instagram-проекты',
  role: 'Digital-стратег',
  description:
    'Создание и развитие аккаунтов с нуля. Работа с алгоритмами, выход в рекомендации, визуальная упаковка.',
  metrics: [
    { label: 'Суммарная аудитория', from: '', to: 100000, suffix: '+', growth: 'выращено' },
    { label: 'Быстрый рост', from: '0', to: 50000, suffix: '', growth: 'за несколько месяцев' },
  ],
  highlights: [
    'Работа с алгоритмами',
    'Контент-стратегия',
    'Выход в рекомендации',
    'Визуальная упаковка',
  ],
  accent: 'from-pink-500 to-rose-500',
};

// КЕЙС 3: Концептуальный (ресторан)
const restaurantCase = {
  name: 'Ресторан (концепт)',
  role: 'Стратегия роста',
  description:
    'Пример подхода к запуску ресторана в digital. Полный цикл: от positioning до воронки продаж.',
  strategy: [
    {
      title: 'Контент-стратегия',
      items: ['Behind the scenes', 'Истории блюд', 'Персонал'],
    },
    {
      title: 'Рубрики Reels',
      items: ['Процесс приготовления', 'Обзоры', 'Лайфхаки'],
    },
    {
      title: 'Воронка продаж',
      items: ['Awareness → Interest', 'Consideration → Booking', 'Retention'],
    },
  ],
  hypotheses: [
    'Видео процесса готовки +30% к saves',
    'Stories с шефом +25% к ответам',
    'Гео-таргетинг в 3км +40% к броням',
  ],
  accent: 'from-emerald-500 to-teal-500',
};

export default function Cases() {
  return (
    <section id="cases" className="py-28 lg:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-indigo-600/8 rounded-full blur-[180px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple-600/8 rounded-full blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <FadeInView>
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-[0.15em]">
              Кейсы
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Результаты, которые <span className="gradient-text">можно измерить</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-zinc-500 text-lg mt-4 max-w-2xl mx-auto">
              Реальные проекты с конкретными метриками роста
            </p>
          </FadeInView>
        </div>

        {/* КЕЙС 1: Крузенштерн — ФУЛЛ ВИД */}
        <FadeInView delay={0.2}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="mb-8 p-8 lg:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm overflow-hidden relative group"
          >
            {/* Accent line */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${kruzenshternCase.accent}`} />

            <div className="grid lg:grid-cols-2 gap-10">
              {/* Left: Info */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${kruzenshternCase.accent} text-white`}>
                    {kruzenshternCase.role}
                  </span>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                  {kruzenshternCase.name}
                </h3>
                <p className="text-zinc-400 leading-relaxed mb-8">
                  {kruzenshternCase.description}
                </p>

                {/* Tasks */}
                <div>
                  <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
                    Задачи
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {kruzenshternCase.tasks.map((task, i) => (
                      <div key={i} className="flex items-center gap-3 text-zinc-300 text-sm">
                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center">
                          <task.icon className="w-4 h-4 text-zinc-500" />
                        </div>
                        {task.text}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right: Metrics */}
              <div className="lg:border-l lg:border-white/[0.06] lg:pl-10">
                <p className="text-xs text-zinc-600 uppercase tracking-wider mb-6">
                  Результаты
                </p>
                <div className="space-y-6">
                  {kruzenshternCase.metrics.map((metric, i) => {
                    if (isKruzenshternArrowsMetric(metric)) {
                      return (
                        <div
                          key={i}
                          className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-zinc-500 text-sm">{metric.label}</span>
                          </div>
                          <div
                            className="flex items-center gap-1 text-emerald-400"
                            aria-hidden
                          >
                            <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
                            <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
                            <ArrowUp className="w-5 h-5" strokeWidth={2.5} />
                          </div>
                        </div>
                      );
                    }
                    return (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.04]"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-zinc-500 text-sm">{metric.label}</span>
                          <span className="text-emerald-400 text-sm font-medium">
                            {metric.growth}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-3">
                          {metric.from && (
                            <span className="text-zinc-600 text-lg">{metric.from}</span>
                          )}
                          <span className="text-zinc-500">→</span>
                          <span className="text-3xl font-bold gradient-text">
                            <AnimatedCounter end={metric.to} suffix={metric.suffix} />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Key insight */}
                <div className="mt-6 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10">
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      Рост достигнут за счёт связки:{' '}
                      <span className="text-zinc-300">стратегия + контент + аналитика</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </FadeInView>

        {/* КЕЙС 2 & 3 — Грид */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Instagram проекты */}
          <FadeInView delay={0.3}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="h-full p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm overflow-hidden relative"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${instagramCase.accent}`} />

              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${instagramCase.accent} text-white`}>
                  {instagramCase.role}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {instagramCase.name}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {instagramCase.description}
              </p>

              {/* Metrics */}
              <div className="space-y-4 mb-8">
                {instagramCase.metrics.map((metric, i) => (
                  <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                    <div>
                      <p className="text-zinc-500 text-sm">{metric.label}</p>
                      <p className="text-zinc-400 text-xs mt-0.5">{metric.growth}</p>
                    </div>
                    <div className="text-2xl font-bold gradient-text">
                      <AnimatedCounter end={metric.to} suffix={metric.suffix} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-2">
                {instagramCase.highlights.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-white/[0.03] text-zinc-400 text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </FadeInView>

          {/* Концептуальный кейс */}
          <FadeInView delay={0.4}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4 }}
              className="h-full p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm overflow-hidden relative"
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${restaurantCase.accent}`} />

              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${restaurantCase.accent} text-white`}>
                  {restaurantCase.role}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] bg-white/[0.05] text-zinc-500 uppercase tracking-wider">
                  Концепт
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {restaurantCase.name}
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6">
                {restaurantCase.description}
              </p>

              {/* Strategy blocks */}
              <div className="space-y-4 mb-6">
                {restaurantCase.strategy.map((block, i) => (
                  <div key={i}>
                    <p className="text-zinc-600 text-xs uppercase tracking-wider mb-2">
                      {block.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {block.items.map((item, j) => (
                        <span key={j} className="px-2.5 py-1 rounded-md bg-white/[0.03] text-zinc-400 text-xs">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Hypotheses */}
              <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                <p className="text-zinc-600 text-xs uppercase tracking-wider mb-3">
                  Гипотезы роста
                </p>
                <div className="space-y-2">
                  {restaurantCase.hypotheses.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-zinc-400 text-sm">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-500/60" />
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </FadeInView>
        </div>

        {/* Bottom CTA */}
        <FadeInView delay={0.5}>
          <div className="mt-16 text-center">
            <p className="text-zinc-500 mb-6">
              Хотите такие же результаты для вашего проекта?
            </p>
            <motion.a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contacts')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-bg text-white font-medium hover:brightness-110 transition-all"
            >
              Обсудить проект
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
