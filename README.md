# مستشفى رقية العوض - One Page (Vite + React + Tailwind + Framer Motion)

### كيفية التشغيل محليًا
1. تأكد أن لديك Node.js مثبتًا (v16+).
2. فك ضغط المشروع إن لم يكن بالفعل:
   - `cd raqia-hospital`
3. ثبت الحزم:
   - `npm install`
4. شغّل الخادم المحلي:
   - `npm run dev`
5. افتح المتصفح على العنوان الظاهر في الطرفية (عادة http://localhost:5173)

### ملاحظات مهمة
- الصور الحالية هي عناصر نائب (placeholders). استبدل `svg` أو `div` بالصور الحقيقية في `src/components`.
- الخط Tajawal محمّل عبر Google Fonts في `index.html`. إن أردت توفير الخط محليًا أبلغني لأرفق الملفات.
- تصميم متوافق مع RTL ويستخدم Tailwind. يمكن تعديل الألوان والخطوط من `tailwind.config.cjs` و`src/index.css`.
