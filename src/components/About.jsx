import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="bg-lightgray py-16">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">

        <motion.img
          src="/images/hospital1.jpg"
          alt="المستشفى"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full rounded-xl h-64 md:h-80 object-cover shadow-lg border-2 border-primary"
        />

        <div>
          <h3 className="text-3xl font-bold text-primary mb-4">من نحن؟</h3>
          <p className="text-gray-700 mb-6">
            مستشفى رقية العوض تقدم رعاية طبية متكاملة، تتميز بأحدث التقنيات وفريق طبي متعدد التخصصات ملتزم بالإنسانية والاحتراف.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl">🏥</div>
              <div className="mt-2 font-semibold">أحدث الأجهزة</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl">👨‍⚕️</div>
              <div className="mt-2 font-semibold">أطباء خبراء</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl">💙</div>
              <div className="mt-2 font-semibold">رعاية إنسانية</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
