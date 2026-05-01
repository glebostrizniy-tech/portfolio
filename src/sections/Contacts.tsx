import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FadeInView from '@/components/FadeInView';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'glebostrizniy@bk.ru',
    href: 'mailto:glebostrizniy@bk.ru',
  },
  {
    icon: Phone,
    label: 'Телефон',
    value: '+7 (911) 285-62-52',
    href: 'tel:+79112856252',
  },
  {
    icon: MapPin,
    label: 'Локация',
    value: 'Санкт-Петербург, Россия',
    href: null,
  },
];

const languages = [
  { name: 'Русский', level: 'Родной' },
  { name: 'Английский', level: 'C1' },
  { name: 'Французский', level: 'B1' },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 lg:py-28 relative">
      {/* Background */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeInView>
            <span className="text-sm font-medium text-indigo-400 uppercase tracking-[0.15em]">
              Контакты
            </span>
          </FadeInView>
          <FadeInView delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-4 tracking-tight">
              Давайте <span className="gradient-text">поработаем</span>
            </h2>
          </FadeInView>
          <FadeInView delay={0.2}>
            <p className="text-zinc-500 text-lg mt-4">
              Открыт к новым проектам и сотрудничеству
            </p>
          </FadeInView>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            {contactInfo.map((contact, index) => (
              <FadeInView key={contact.label} delay={0.3 + index * 0.1}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                  className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] backdrop-blur-sm"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-white/[0.04] flex items-center justify-center">
                      <contact.icon className="w-5 h-5 text-zinc-500" />
                    </div>
                    <div>
                      <p className="text-zinc-600 text-xs uppercase tracking-wider">{contact.label}</p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          className="text-white font-medium hover:text-indigo-400 transition-colors"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </FadeInView>
            ))}

            {/* Languages */}
            <FadeInView delay={0.6}>
              <div className="pt-4">
                <p className="text-zinc-600 text-xs uppercase tracking-wider mb-3">Языки</p>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang.name}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] text-zinc-400 text-sm"
                    >
                      {lang.name} <span className="text-zinc-600">{lang.level}</span>
                    </span>
                  ))}
                </div>
              </div>
            </FadeInView>
          </div>

          {/* CTA Card */}
          <div className="lg:col-span-2">
            <FadeInView delay={0.4}>
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 backdrop-blur-sm flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">
                  Готов обсудить проект
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 flex-1">
                  Расскажите о задачах — предложу решение. Консультация бесплатно.
                </p>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    size="lg"
                    className="w-full gradient-bg text-white py-5 text-sm font-medium rounded-xl hover:brightness-110 transition-all"
                    asChild
                  >
                    <a
                      href="https://t.me/animecharacter"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Написать мне
                    </a>
                  </Button>
                </motion.div>

                <p className="text-center text-xs text-zinc-600 mt-4">
                  Отвечаю в течение 24 часов
                </p>
              </div>
            </FadeInView>
          </div>
        </div>
      </div>
    </section>
  );
}
