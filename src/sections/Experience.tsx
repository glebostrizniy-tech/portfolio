import { motion } from 'framer-motion';
import { Calendar, MapPin, Globe, Briefcase, Users } from 'lucide-react';
import FadeInView from '@/components/FadeInView';

type ExperienceItem = {
  company: string;
  companyUrl?: string;
  role: string;
  period?: string;
  location?: string;
  context?: string;
  description: string[];
  icon?: React.ComponentType<{ className?: string }>;
};

const experiences: ExperienceItem[] = [
  {
    company: 'Олдента',
    companyUrl: 'https://oldenta.com',
    role: 'Администратор сайта',
    period: '2025 — 2026',
    location: 'Санкт-Петербург',
    description: [
      'Поддержка и обновление сайта клиники',
      'Редизайн блоков и улучшение UX',
      'Работа с Яндекс.Бизнес',
      'Обновление контента и актуализация информации',
    ],
    icon: Globe,
  },
  {
    company: 'Крузенштерн бар',
    companyUrl: 'https://www.instagram.com/kruzenbar',
    role: 'SMM-менеджер',
    period: '2024 — 2025',
    description: [
      'Ведение соцсетей',
      'Контент-стратегия',
      'Сценарии и монтаж Reels',
      'Таргетированная реклама',
      'Яндекс.Витрина и Директ',
      'Коммуникация с аудиторией',
    ],
    icon: Briefcase,
  },
  {
    company: 'Частный клиент',
    role: 'SEO-специалист',
    period: 'Октябрь 2025 — Январь 2026',
    context: 'Автомобильный бизнес: автозапчасти, шины, транспорт и автокомпоненты (розница/опт/производство)',
    description: [
      'Разработка SEO-статей для популярного сайта автомобилистов',
      'Технический и семантический анализ текста',
      'Контроль и исправление ошибок, редакция',
      'Анализ рынка и конкурентов',
      'Ведение отчетности',
    ],
    icon: Globe,
  },
  {
    company: 'Компания под NDA',
    role: 'Retention-менеджер',
    period: '2021 — 2022',
    context:
      'Удалённо • клиентский сервис • продвижение и консультации проектных решений (ПО) для предпринимателей (Латинская Америка, Мексика)',
    description: [
      'Презентация и продвижение готовых проектных решений потенциальным клиентам',
      'Проработка «замороженных» лидов из активной базы: сценарии касаний, скрипт-рассылка',
      'Outbound-коммуникация: звонки/почта/мессенджеры, сбор потребностей и динамики фокус‑групп',
      'Курирование кейсов в процессе: сопровождение, ответы на вопросы, удержание в диалоге',
      'Сбор обратной связи и оценок качества сервиса/услуг, передача инсайтов в работу',
    ],
    icon: Users,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInView>
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-[0.15em]">
              Опыт работы
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Где я <span className="gradient-text">работаю</span>
            </h2>
          </FadeInView>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon ?? Globe;
            return (
              <FadeInView key={`${exp.company}-${exp.role}`} delay={0.2 + index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
                >
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.companyUrl ? (
                            <a
                              href={exp.companyUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="hover:text-indigo-300 transition-colors"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </h3>
                        <p className="text-indigo-400 font-medium">{exp.role}</p>
                        {exp.context && (
                          <p className="text-zinc-500 text-sm mt-2 leading-relaxed">
                            {exp.context}
                          </p>
                        )}
                      </div>
                    </div>
                    {(exp.period || exp.location) && (
                      <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
                        {exp.period && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03]">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        )}
                        {exp.location && (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03]">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Tasks */}
                  <div className="border-t border-white/[0.04] pt-6">
                    <p className="text-xs text-zinc-600 uppercase tracking-wider mb-4">
                      Задачи
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm">
                          <span className="w-1 h-1 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeInView>
            );
          })}
        </div>

        {/* Additional context */}
        <FadeInView delay={0.55}>
          <div className="mt-8 text-center">
            <p className="text-zinc-500 text-sm">
              Основной фокус — freelance проекты в SMM и digital-стратегии
            </p>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
