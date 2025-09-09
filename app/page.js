"use client";
import Image from "next/image";
import { Wrench, Building, Home as HomeIcon, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="text-center my-12 bg-gray-100 py-16 rounded-lg shadow-2xl relative overflow-hidden"
      >
        <motion.h1
          className="text-5xl font-bold text-teal-600"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Acme Construction
        </motion.h1>
        <motion.p
          className="mt-4 text-lg text-gray-700 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Licensed, Bonded & Insured General Contractors Serving [Your City]
        </motion.p>
        <motion.a
          href="#contact"
          className="mt-6 inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded shadow hover:bg-teal-700 transition"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Request a Quote
        </motion.a>
      </section>

      {/* Services Section */}
      <section id="services" className="my-12 bg-white p-8 rounded-lg shadow-lg">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Residential Construction",
              desc: "Custom homes, renovations, and remodeling.",
              icon: <HomeIcon className="w-10 h-10 text-teal-600" />,
            },
            {
              title: "Commercial Projects",
              desc: "Office buildings, retail spaces, and warehouses.",
              icon: <Building className="w-10 h-10 text-teal-600" />,
            },
            {
              title: "Repairs & Maintenance",
              desc: "Roofing, plumbing, electrical, and general upkeep.",
              icon: <Wrench className="w-10 h-10 text-teal-600" />,
            },
          ].map((service) => (
            <motion.div
              key={service.title}
              className="p-6 border rounded-lg shadow hover:shadow-xl transition hover:-translate-y-1 bg-gray-50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects / Portfolio Section */}
      <section
        id="projects"
        className="my-12 bg-gray-50 p-8 rounded-lg shadow-lg"
      >
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Projects
        </motion.h2>
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
            <motion.div
              key={project.title}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition hover:-translate-y-1 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold text-xl text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="my-12 bg-gray-100 py-12 px-6 rounded-lg shadow-lg"
      >
        <motion.h2
          className="text-3xl font-bold mb-4 text-gray-900 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          className="text-center mb-6 text-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Call us at <strong>(555) 555-1234</strong> or fill out the form below.
        </motion.p>

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
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
            rows={5}
          />
          <button
            type="submit"
            className="bg-teal-600 text-white font-semibold px-6 py-3 rounded shadow hover:bg-teal-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Back to Top Button */}
      <div className="text-center my-8">
        <a
          href="#home"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 transition"
        >
          <ArrowUp className="w-5 h-5" /> Back to Top
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
