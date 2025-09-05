export default function DashboardPage() {
  const stats = [
    { title: "Total Reviews", value: 25 },
    { title: "FAQs", value: 12 },
    { title: "Contact Requests", value: 18 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {stats.map((s, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 text-center hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{s.title}</h2>
            <p className="text-3xl font-bold text-indigo-600 mt-2">{s.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
