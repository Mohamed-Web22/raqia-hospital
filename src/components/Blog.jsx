import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'كيف تحافظ على صحة قلبك؟',
    excerpt: 'نص مختصر عن العادات الصحية للقلب.',
    img: '/images/blog/heart.jpg' // ضع الصورة في public/images/blog/heart.jpg
  },
  {
    title: '5 نصائح لحماية عينيك من الإجهاد',
    excerpt: 'طرق بسيطة لحماية العين أثناء العمل.',
    img: '/images/blog/eye.jpg' // ضع الصورة في public/images/blog/eye.jpg
  },
  {
    title: 'التغذية السليمة للأطفال',
    excerpt: 'مبادئ غذائية مهمة لنمو صحي.',
    img: '/images/blog/kids.jpg' // ضع الصورة في public/images/blog/kids.jpg
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-primary mb-6">آخر المقالات الطبية</h3>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity:0, y:10 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
            >
              {/* صورة المقال */}
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col flex-1">
                <h4 className="font-semibold">{p.title}</h4>
                <p className="text-gray-600 mt-2 text-sm flex-1">{p.excerpt}</p>
                <a className="text-primary mt-3 inline-block text-sm" href="#!">اقرأ المزيد</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
