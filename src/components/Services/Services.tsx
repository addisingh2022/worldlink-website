"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Laptop Screen Repair", desc: "High-quality screen replacement & repair services.", icon: "💻" },
  { title: "Battery Replacement", desc: "Long-lasting OEM battery swaps with warranty.", icon: "🔋" },
  { title: "Data Recovery", desc: "Recover lost files, photos, and important data.", icon: "💾" },
  { title: "Motherboard Repair", desc: "Chip level repair, motherboard testing & fixing.", icon: "🛠️" },
  { title: "Keyboard Replacement", desc: "Keycaps fix, keyboard check & full replacement.", icon: "⌨️" },
  { title: "Gaming Laptop Service", desc: "Fan cleaning, thermal paste replacement & upgrades.", icon: "🎮" },
];

export default function Services() {
  return (
    <motion.section
      className="py-16 bg-white"
      id="services"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-50 shadow-md rounded-2xl hover:shadow-2xl transition-shadow text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-5xl mb-4"
                whileHover={{ y: -8, scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {s.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
