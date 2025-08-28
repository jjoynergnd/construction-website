import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Wrench, Building, Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6" id="home">

        {/* Hero Section */}
        <section className="text-center my-12 bg-gray-100 py-16 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-blue-600">Acme Construction</h1>
          <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
            Licensed, Bonded & Insured General Contractors Serving [Your City]
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-orange-500 text-white font-semibold px-8 py-3 rounded shadow hover:bg-orange-600 transition"
          >
            Request a Quote
          </a>
        </section>

        {/* Services Section */}
        <section id="services" className="my-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Construction",
                desc: "Custom homes, renovations, and remodeling.",
                icon: <HomeIcon className="w-10 h-10 text-orange-500 mb-4" />,
              },
              {
                title: "Commercial Projects",
                desc: "Office buildings, retail spaces, and warehouses.",
                icon: <Building className="w-10 h-10 text-orange-500 mb-4" />,
              },
              {
                title: "Repairs & Maintenance",
                desc: "Roofing, plumbing, electrical, and general upkeep.",
                icon: <Wrench className="w-10 h-10 text-orange-500 mb-4" />,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 border rounded-lg shadow hover:shadow-xl transition hover:-translate-y-1 text-center"
              >
                {service.icon}
                <h3 className="font-semibold text-xl mb-2 text-blue-600">{service.title}</h3>
                <p className="text-gray-700">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects / Portfolio Section */}
        <section id="projects" className="my-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Custom Home Build",
                desc: "Complete custom home construction from foundation to finish.",
                img: "/images/projects/project1.png",
              },
              {
                title: "Office Renovation",
                desc: "Modern office renovation including flooring and electrical upgrades.",
                img: "/images/projects/project2.png",
              },
              {
                title: "Retail Store Buildout",
                desc: "New retail space buildout with full interior design and fixtures.",
                img: "/images/projects/project3.png",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition hover:-translate-y-1"
              >
                <Image
                  src={project.img}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-xl text-blue-600 mb-2">{project.title}</h3>
                  <p className="text-gray-700">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-12 bg-gray-100 py-12 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">Get in Touch</h2>
          <p className="text-center mb-6 text-gray-700">
            Call us at <strong>(555) 555-1234</strong> or fill out the form below.
          </p>

          <form
            action="https://formspree.io/f/yourformid"
            method="POST"
            className="max-w-xl mx-auto grid gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
            <button
              type="submit"
              className="bg-orange-500 text-white font-semibold px-6 py-3 rounded shadow hover:bg-orange-600 transition"
            >
              Send Message
            </button>
          </form>
        </section>

      </main>
      <Footer />
    </>
  );
}
