import React, {useState} from 'react'
import { motion } from 'framer-motion'

export default function Booking(){
  const [form, setForm] = useState({name:'',phone:'',dept:'',date:''})
  return (
    <section id="booking" className="py-12">
      <div className="max-w-4xl mx-auto px-4 bg-gradient-to-br from-white to-white rounded-xl p-6 shadow">
        <h3 className="text-2xl font-bold text-primary mb-4">الحجز السريع</h3>
        <form className="grid gap-3 sm:grid-cols-2">
          <input className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary" placeholder="الاسم" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
          <input className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary" placeholder="رقم الهاتف" value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} />
          <select className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary" value={form.dept} onChange={e=>setForm({...form,dept:e.target.value})}>
            <option value="">اختر التخصص</option>
            <option>أمراض القلب</option>
            <option>العيون</option>
            <option>الأسنان</option>
          </select>
          <input type="date" className="p-3 rounded border focus:outline-none focus:ring-2 focus:ring-primary" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} />
          <div className="sm:col-span-2">
            <button type="button" className="px-5 py-3 bg-primary text-white rounded-lg">تأكيد الحجز</button>
            <p className="text-sm text-gray-500 mt-2">سنتواصل معك خلال دقائق لتأكيد الموعد</p>
          </div>
        </form>
      </div>
    </section>
  )
}
