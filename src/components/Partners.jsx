import React from 'react'
import { motion } from 'framer-motion'

const partners = ['شريك 1','شريك 2','شريك 3']

export default function Partners(){
  return (
    <section id="partners" className="py-8 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h4 className="text-lg font-semibold text-center text-primary mb-4">شركاء التأمين</h4>
        <div className="flex gap-6 items-center justify-center">
          {partners.map((p,i)=>(
            <motion.div key={i} initial={{ opacity:0 }} whileInView={{ opacity:1 }} className="p-4 bg-gray-50 rounded shadow-sm">{p}</motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
