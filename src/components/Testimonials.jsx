import React from 'react'
import { motion } from 'framer-motion'

const items = [
  {name:'م. مريم', text:'خدمة ممتازة وفريق متعاون.', img:'/images/comments/comment1.jpg'},
  {name:'س. علي ', text:'السرير والنظافة كانت على أعلى مستوى.', img:'/images/comments/comment2.jpg'},
  {name:'أ. رندا', text:'أشكر الأطباء على الاهتمام.', img:'/images/comments/comment3.jpg'},
]

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-12 bg-lightgray">
      <div className="max-w-5xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-primary mb-6">ماذا يقول مرضانا؟</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t,i)=>(
            <motion.div
              key={i}
              initial={{ opacity:0, y:10 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              className="bg-white rounded-lg p-5 shadow flex flex-col items-center text-center"
            >
              {/* صورة المعلق */}
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover mb-3"
              />
              <div className="font-semibold">{t.name}</div>
              <p className="text-gray-600 mt-2">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
