import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="pt-24 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
            معكم في رعاية صحتكم بأحدث التقنيات الطبية
          </h2>
          <p className="mt-4 text-gray-200">
            مستشفى رقية العوض – نؤمن بأن الصحة تبدأ من الرعاية المتميزة.
          </p>
          <div className="mt-6 flex gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg shadow-lg"
            >
              احجز موعد الآن
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#services"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg"
            >
              تعرّف على خدماتنا
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-white">
            <img
              src="/images/hospital.jpg"
              alt="مستشفى رقية العوض"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
