import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {icon:'🫀', title:'أمراض القلب'},
  {icon:'👶', title:'النساء والولادة'},
  {icon:'🦴', title:'جراحة العظام'},
  {icon:'🦷', title:'الأسنان'},
  {icon:'👁️', title:'العيون'},
  {icon:'🚑', title:'الطوارئ'},
]

export default function Services(){
  return (
    <section id="services" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-primary mb-6">خدماتنا الطبية</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {items.map((s,i)=>(
            <motion.div
              key={i}
              whileHover={{ scale:1.03 }}
              initial={{ opacity:0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              className="bg-white rounded-lg p-5 shadow hover:shadow-lg transition"
            >
              <div className="text-4xl">{s.icon}</div>
              <div className="mt-3 font-semibold">{s.title}</div>
              <p className="text-sm text-gray-600 mt-2">شرح مختصر عن الخدمة يمكن تغييره لاحقاً.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
