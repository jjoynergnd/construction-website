// app/services/page.js
import Services from "../../components/Services";

export default function ServicesPage() {
  return (
    <main>
      {/* Reuse the Services component so styling stays consistent */}
      <Services />

      {/* Extra placeholder so you can expand later */}
      <section className="max-w-4xl mx-auto p-8 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Why Choose Our Services?</h2>
        <p>
          At Acme Construction, we deliver top-quality craftsmanship, on-time
          project completion, and unmatched customer satisfaction.
        </p>
      </section>
    </main>
  );
}
