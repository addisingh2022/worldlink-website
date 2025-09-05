export default function ServicesPage() {
  const services = [
    {
      title: "Laptop Screen Replacement",
      desc: "Quick and affordable screen replacements for all laptop brands.",
      price: "₹3,000 onwards",
    },
    {
      title: "Battery Replacement",
      desc: "Original high-quality batteries with 6 months warranty.",
      price: "₹2,000 onwards",
    },
    {
      title: "Motherboard Repair",
      desc: "Chip-level repair with advanced tools and diagnostics.",
      price: "₹4,500 onwards",
    },
    {
      title: "Data Recovery",
      desc: "Recover lost data from dead laptops and hard drives.",
      price: "₹1,500 onwards",
    },
  ];

  return (
    <main className="py-20 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">Our Services</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4">{service.desc}</p>
            <p className="text-lg font-bold text-indigo-600">{service.price}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
