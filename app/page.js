export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center my-12">
        <h1 className="text-4xl font-bold">Acme Construction</h1>
        <p className="mt-4 text-lg">
          Licensed, Bonded & Insured General Contractors Serving [Your City]
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
        >
          Request a Quote
        </a>
      </section>

      {/* Services Section */}
      <section className="my-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Residential Construction</h3>
            <p>Custom homes, renovations, and remodeling.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Commercial Projects</h3>
            <p>Office buildings, retail spaces, and warehouses.</p>
          </div>
          <div className="p-4 border rounded shadow">
            <h3 className="font-semibold text-xl mb-2">Repairs & Maintenance</h3>
            <p>Roofing, plumbing, electrical, and general upkeep.</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="my-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
        <p>Call us at <strong>(555) 555-1234</strong> or fill out the form below.</p>
      </section>
    </main>
  );
}
