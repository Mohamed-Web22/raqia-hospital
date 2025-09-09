import React from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full bg-white/80 backdrop-blur-sm shadow-sm z-50"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          {/* الشعار */}
          <img
            src="/images/logo.jpg" // ضع اللوجو في public/images/logo.png
            alt="شعار المستشفى"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h1 className="text-primary font-bold">مستشفى رقية العوض</h1>
            <p className="text-xs text-gray-500">رعاية صحية بلمسة إنسانية</p>
          </div>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm text-primary">
          <a href="#home">الرئيسية</a>
          <a href="#about">عنّا</a>
          <a href="#services">خدماتنا</a>
          <a href="#doctors">أطباؤنا</a>
          <a href="#booking">الحجز</a>
          <a href="#blog">المقالات</a>
          <a href="#contact">تواصل معنا</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#booking"
            className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded-lg shadow"
          >
            احجز موعدك الآن
          </a>
          <button className="md:hidden p-2">☰</button>
        </div>
      </div>
    </motion.header>
  )
}
