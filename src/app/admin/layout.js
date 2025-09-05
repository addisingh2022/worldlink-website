export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <nav className="space-y-3">
          <a href="/admin/dashboard" className="block hover:underline">
            Dashboard
          </a>
          <a href="/admin/reviews" className="block hover:underline">
            Manage Reviews
          </a>
          <a href="/admin/faq" className="block hover:underline">
            Manage FAQ
          </a>
          <a href="/admin/requests" className="block hover:underline">
            Contact Requests
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 bg-gray-50">{children}</main>
    </div>
  );
}
