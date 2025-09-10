import React from 'react'

export default function Footer(){
  return (
    <footer id="contact" className="bg-primary text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-4 gap-6">
        <div>
          <h5 className="font-bold">عن المستشفى</h5>
          <p className="text-sm mt-2">مستشفى رقية العوض - رعاية طبية متكاملة.</p>
        </div>
        <div>
          <h5 className="font-bold">خدمات</h5>
          <ul className="mt-2 text-sm">
            <li>قلب</li>
            <li>عيون</li>
            <li>أسنان</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">روابط</h5>
          <ul className="mt-2 text-sm">
            <li>الرئيسية</li>
            <li>حجز</li>
            <li>اتصل بنا</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold">تواصل معنا</h5>
          <p className="text-sm mt-2">العنوان: خليوة ظلط , جنوب اخر محطة</p>
          <p className="text-sm mt-1">الهاتف: 997922457</p>
        </div>
      </div>
      <div className="text-center py-4 bg-[#08324a]">© 2025 مستشفى رقية العوض – جميع الحقوق محفوظة</div>
    </footer>
  )
}

