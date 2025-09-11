// app/services/residential/page.js
import Link from "next/link";

export default function ResidentialServices() {
  return (
    <main className="max-w-4xl mx-auto p-8 text-gray-700">
      <h1 className="text-3xl font-bold mb-4 text-teal-600">
        Residential Construction
      </h1>
      <p className="mb-6">
        We specialize in building and renovating homes that stand the test of
        time. From foundation to finish, our team ensures quality and
        craftsmanship in every detail.
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
