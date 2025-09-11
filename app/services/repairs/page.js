// app/services/repairs/page.js
import Link from "next/link";

export default function RepairServices() {
  return (
    <main className="max-w-4xl mx-auto p-8 text-gray-700">
      <h1 className="text-3xl font-bold mb-4 text-teal-600">
        Repairs & Maintenance
      </h1>
      <p className="mb-6">
        Our team handles all types of repairs and ongoing maintenance to keep
        your property in excellent condition, ensuring long-term safety and
        value.
      </p>

      {/* Back Link */}
      <Link
        href="/services"
        className="inline-block px-4 py-2 bg-teal-600 text-white rounded-lg shadow hover:bg-teal-700 transition"
      >
        ← Back to Services
      </Link>
    </main>
  );
}
