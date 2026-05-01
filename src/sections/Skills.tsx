import {
  Megaphone,
  BarChart3,
  Target,
  Database,
  Users,
  LineChart,
  Video,
  Share2,
  Filter,
  Search,
  Globe,
  FileSpreadsheet,
  KeyRound,
  Code,
} from 'lucide-react';
import FadeInView from '@/components/FadeInView';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'SMM',
    icon: Megaphone,
    skills: [
      { name: 'Контент-стратегия', icon: Target },
      { name: 'Community management', icon: Users },
      { name: 'Работа с блогерами', icon: Share2 },
      { name: 'Видео / Reels', icon: Video },
    ],
  },
  {
    title: 'Аналитика',
    icon: BarChart3,
    skills: [
      { name: 'SQL', icon: Database },
      { name: 'DataLens', icon: LineChart },
      { name: 'Анализ аудитории', icon: Users },
      { name: 'A/B тестирование', icon: Filter },
    ],
  },
  {
    title: 'Реклама',
    icon: Target,
    skills: [
      { name: 'Таргет VK', icon: Share2 },
      { name: 'Яндекс.Директ', icon: Search },
      { name: 'Яндекс.Витрина', icon: Search },
      { name: 'Ретаргетинг', icon: Target },
    ],
  },
  {
    title: 'SEO',
    icon: Globe,
    skills: [
      { name: 'Яндекс.Wordstat', icon: Search },
      { name: 'Google Sheets', icon: FileSpreadsheet },
      { name: 'Key Collector', icon: KeyRound },
      { name: 'HTML / CSS', icon: Code },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-28 relative">
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/8 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInView>
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-[0.15em]">
              Навыки
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Инструменты <span className="gradient-text">роста</span>
            </h2>
          </FadeInView>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <FadeInView key={category.title} delay={0.2 + categoryIndex * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="h-full p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/[0.04]">
                  <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 text-zinc-400 group"
                    >
                      <skill.icon className="w-4 h-4 text-zinc-600 group-hover:text-indigo-400 transition-colors" />
                      <span className="text-sm group-hover:text-zinc-300 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </FadeInView>
          ))}
        </div>

        {/* Additional */}
        <FadeInView delay={0.5}>
          <div className="mt-10 text-center">
            <p className="text-zinc-600 text-sm">
              Дополнительно: Python (базовый), Google Analytics, Яндекс.Метрика, Figma
            </p>
          </div>
        </FadeInView>

        <FadeInView delay={0.6}>
          <div className="mt-4 flex justify-center">
            <a
              href="https://yandex.ru/adv/expert/certificates?certId=308185&lastname=%D0%9E%D1%81%D1%82%D1%80%D0%B8%D0%B6%D0%BD%D1%8B%D0%B9"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.02] border border-white/[0.06] text-sm text-zinc-400 hover:text-white hover:border-white/[0.12] transition-colors"
            >
              Сертификат Яндекс.Директа
              <span className="text-zinc-600">—</span>
              <span className="text-indigo-400">проверить</span>
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
