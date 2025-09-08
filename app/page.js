"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, Building, Home as HomeIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        className="text-center my-12 bg-gray-100 py-16 rounded-lg shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h1 className="text-5xl font-bold text-gray-900">Acme Construction</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Licensed, Bonded & Insured General Contractors Serving [Your City]
        </p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-[#1DA1F2] text-white font-semibold px-8 py-3 rounded shadow hover:bg-blue-600 transition"
        >
          Request a Quote
        </a>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="my-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Residential Construction",
              desc: "Custom homes, renovations, and remodeling.",
              icon: <HomeIcon className="w-10 h-10 text-teal-500 mb-4" />,
            },
            {
              title: "Commercial Projects",
              desc: "Office buildings, retail spaces, and warehouses.",
              icon: <Building className="w-10 h-10 text-teal-500 mb-4" />,
            },
            {
              title: "Repairs & Maintenance",
              desc: "Roofing, plumbing, electrical, and general upkeep.",
              icon: <Wrench className="w-10 h-10 text-teal-500 mb-4" />,
            },
          ].map((service, i) => (
            <motion.div
              key={service.title}
              className="p-6 border rounded-lg shadow hover:shadow-xl transition hover:-translate-y-1 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              {service.icon}
              <h3 className="font-semibold text-xl mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects / Portfolio Section */}
      <motion.section
        className="my-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
          Our Projects
        </h2>
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
          ].map((project, i) => (
            <motion.div
              key={project.title}
              className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition hover:-translate-y-1 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={project.img}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-xl text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        className="my-12 bg-gray-100 py-12 px-6 rounded-lg shadow-2xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-4 text-gray-900 text-center">
          Get in Touch
        </h2>
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
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-[#1DA1F2]"
            rows={5}
          />
          <button
            type="submit"
            className="bg-[#1DA1F2] text-white font-semibold px-6 py-3 rounded shadow hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </motion.section>

      <Footer />
    </main>
  );
}
