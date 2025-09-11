// app/services/commercial/page.js
import Link from "next/link";

export default function CommercialServices() {
  return (
    <main className="max-w-4xl mx-auto p-8 text-gray-700">
      <h1 className="text-3xl font-bold mb-4 text-teal-600">
        Commercial Projects
      </h1>
      <p className="mb-6">
        From office spaces to retail stores, our commercial construction team
        delivers functional, modern, and safe business environments.
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
