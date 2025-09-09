/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A3D62',      // أزرق طبي هادئ
        secondary: '#1ABC9C',    // أخضر صحي
        accent: '#F4A261',       // لون دافئ للعناصر المهمة
        lightgray: '#F9FAFB',    // خلفيات فاتحة
        darkgray: '#64748B',     // نصوص ثانوية
      },
      fontFamily: {
        sans: ['Tajawal', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
