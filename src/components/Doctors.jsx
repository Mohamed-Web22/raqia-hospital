import React from "react";
import { motion } from "framer-motion";
import doctor1 from "../assets/doctors/doctor1.png";
import doctor2 from "../assets/doctors/doctor2.png";
import doctor3 from "../assets/doctors/doctor1.png";
import doctor4 from "../assets/doctors/doctor4.png";

const doctors = [
  { name: "د. أحمد علي", spec: "أمراض الباطنة", img: doctor1 },
  { name: "د. سارة محمد", spec: "طب الأطفال", img: doctor2 },
  { name: "د. علي محمد", spec: "جراحة", img: doctor3 },
  { name: "د. حسن عبد الله", spec: "طب الأسنان", img: doctor4 },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-16 bg-gradient-to-b from-lightgray to-white">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-primary mb-8 text-center">فريقنا الطبي</h3>
        <div className="flex gap-6 overflow-x-auto py-2">
          {doctors.map((d, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8, scale: 1.03 }}
              className="min-w-[260px] bg-white rounded-xl p-5 shadow-lg flex-shrink-0 transition"
            >
              <img
                src={d.img}
                alt={d.name}
                className="w-full h-44 object-cover rounded-md mb-4 border-2 border-primary"
              />
              <div className="font-semibold text-lg">{d.name}</div>
              <div className="text-gray-500 text-sm">{d.spec}</div>
              <a
                href="#booking"
                className="mt-3 inline-block text-primary text-sm hover:underline"
              >
                احجز مع الدكتور
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
