const faqs = [
  { q: "Do you offer home pickup & delivery?", a: "Yes, we provide pickup and drop service in your city." },
  { q: "Is there any warranty on repairs?", a: "Yes, we provide up to 6 months warranty depending on the service." },
  { q: "How long does a typical repair take?", a: "Most repairs are done within 24–48 hours." },
];

export default function FAQ() {
  return (
    <section className="py-16 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <details key={i} className="p-4 bg-gray-50 shadow rounded-2xl">
              <summary className="font-semibold cursor-pointer">{f.q}</summary>
              <p className="mt-2 text-gray-700">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
