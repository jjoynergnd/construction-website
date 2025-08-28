"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Wrench, Building, Home as HomeIcon } from "lucide-react";

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    // Let Formspree handle actual submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000); // hide message after 5 seconds
  };

  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6" id="home">

        {/* Hero Section */}
        <section className="text-center my-12 bg-secondary py-16 rounded-lg shadow-lg">
          <h1 className="text-5xl font-bold text-primary">Acme Construction</h1>
          <p className="mt-4 text-lg text-textPrimary max-w-xl mx-auto">
            Licensed, Bonded & Insured General Contractors Serving [Your City]
          </p>
          <a
            href="#contact"
            className="mt-6 inline-block bg-primary text-white font-semibold px-8 py-3 rounded shadow hover:opacity-90 transition"
          >
            Request a Quote
          </a>
        </section>

        {/* Services Section */}
        <section id="services" className="my-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-textPrimary">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Residential Construction",
                desc: "Custom homes, renovations, and remodeling.",
                icon: <HomeIcon className="w-10 h-10 text-primary mb-4" />,
              },
              {
                title: "Commercial Projects",
                desc: "Office buildings, retail spaces, and warehouses.",
                icon: <Building className="w-10 h-10 text-primary mb-4" />,
              },
              {
                title: "Repairs & Maintenance",
                desc: "Roofing, plumbing, electrical, and general upkeep.",
                icon: <Wrench className="w-10 h-10 text-primary mb-4" />,
              },
            ].map((service) => (
              <div
                key={service.title}
                className="p-6 border rounded-lg shadow hover:shadow-xl transition hover:-translate-y-1 text-center"
              >
                {service.icon}
                <h3 className="font-semibold text-xl mb-2 text-primary">{service.title}</h3>
                <p className="text-textPrimary">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects / Portfolio Section */}
        <section id="projects" className="my-12">
          <h2 className="text-3xl font-bold mb-8 text-center text-textPrimary">Our Projects</h2>
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
                  <h3 className="font-semibold text-xl text-primary mb-2">{project.title}</h3>
                  <p className="text-textPrimary">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="my-12 bg-secondary py-12 px-6 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-textPrimary text-center">Get in Touch</h2>
          <p className="text-center mb-6 text-textPrimary">
            Call us at <strong>(555) 555-1234</strong> or fill out the form below.
          </p>

          <form
            action="https://formspree.io/f/yourformid"
            method="POST"
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto grid gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              className="p-3 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
              rows={5}
            />
            <button
              type="submit"
              className="bg-primary text-white font-semibold px-6 py-3 rounded shadow hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>

          {/* Success message */}
          {submitted && (
            <div className="mt-4 text-center text-white bg-primary px-4 py-2 rounded">
              Thank you! Your message has been sent.
            </div>
          )}
        </section>

      </main>
      <Footer />
    </>
  );
}
