import Link from "next/link";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/services/residential">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Residential Construction</h3>
              <p className="text-gray-600">
                Custom homes, remodels, and additions designed to bring your vision to life.
              </p>
            </div>
          </Link>

          <Link href="/services/commercial">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Commercial Projects</h3>
              <p className="text-gray-600">
                Offices, retail spaces, and developments that support your business growth.
              </p>
            </div>
          </Link>

          <Link href="/services/repairs">
            <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Repairs & Maintenance</h3>
              <p className="text-gray-600">
                Reliable repair services and preventative maintenance for peace of mind.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
