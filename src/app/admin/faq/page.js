"use client";
import { useState } from "react";

export default function FAQPage() {
  const [faqs, setFaqs] = useState([
    { id: 1, q: "How long does repair take?", a: "Usually 1-2 days." },
    { id: 2, q: "Do you provide warranty?", a: "Yes, 6 months warranty." },
  ]);

  const removeFaq = (id) => {
    setFaqs(faqs.filter((f) => f.id !== id));
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage FAQs</h1>
      <div className="space-y-4">
        {faqs.map((f) => (
          <div
            key={f.id}
            className="bg-white shadow rounded-lg p-4 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{f.q}</p>
              <p className="text-gray-600">{f.a}</p>
            </div>
            <button
              onClick={() => removeFaq(f.id)}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
