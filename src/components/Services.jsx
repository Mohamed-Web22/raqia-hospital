import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: '🫀',
    title: 'أمراض القلب',
    desc: 'نقدم أحدث تقنيات التشخيص والعلاج لضمان صحة قلبك وحمايتك من أمراض القلب.'
  },
  {
    icon: '👶',
    title: 'النساء والولادة',
    desc: 'رعاية متكاملة للأم والطفل بأحدث الأجهزة الطبية وفريق متخصص لضمان سلامتك.'
  },
  {
    icon: '🦴',
    title: 'جراحة العظام',
    desc: 'فريقنا المتخصص يقدم أحدث الحلول الجراحية وغير الجراحية لعلاج إصابات العظام والمفاصل.'
  },
  {
    icon: '🦷',
    title: 'الأسنان',
    desc: 'نوفر رعاية شاملة للأسنان باستخدام أحدث التقنيات للحفاظ على ابتسامتك الصحية.'
  },
  {
    icon: '👁️',
    title: 'العيون',
    desc: 'تشخيص دقيق وعلاج متطور لمشاكل العيون باستخدام أحدث تقنيات الليزر والفحوصات.'
  },
  {
    icon: '🚑',
    title: 'الطوارئ',
    desc: 'قسم طوارئ متطور يعمل على مدار الساعة لتقديم أسرع وأدق تدخل طبي في الحالات الحرجة.'
  },
]

export default function Services() {
  return (
    <section id="services" className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-primary mb-6">
          خدماتنا الطبية
        </h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 text-center"
            >
              <div className="text-5xl mb-3">{s.icon}</div>
              <div className="text-lg font-semibold text-gray-800">{s.title}</div>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
