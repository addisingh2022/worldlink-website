"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  { q: "Do you offer home pickup & delivery?", a: "Yes, we provide pickup and drop service in your city." },
  { q: "Is there any warranty on repairs?", a: "Yes, we provide up to 6 months warranty depending on the service." },
  { q: "How long does a typical repair take?", a: "Most repairs are done within 24–48 hours." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="p-4 bg-gray-50 shadow rounded-2xl"
            >
              <button
                className="w-full flex justify-between items-center font-semibold cursor-pointer"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {f.q}
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl font-bold"
                >
                  +
                </motion.span>
              </button>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                className="mt-2 overflow-hidden text-gray-700"
              >
                {f.a}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
