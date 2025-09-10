// app/about/page.js
import Hero from "../../components/Hero";      // Reuse Hero section if desired
import Footer from "../../components/Footer";  // Consistent footer
import Navbar from "../../components/Navbar";  // Sticky navigation

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      {/* Navbar at top of every page */}
      <Navbar />

      {/* A hero section just for About page (optional to reuse or customize) */}
      <section className="text-center my-12 bg-gray-50 py-16 rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-[#1DA1F2]">About Us</h1>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Learn more about Acme Construction — who we are, our values, and
          why clients trust us for their biggest projects.
        </p>
      </section>

      {/* About content section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          With decades of experience in residential and commercial
          construction, Acme Construction has built a reputation for
          delivering projects on time and on budget. Our team is made up of
          skilled professionals dedicated to quality craftsmanship and
          customer satisfaction.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is simple: to turn your vision into reality while
          providing a seamless, stress-free construction experience.
        </p>
      </section>

      {/* Footer at bottom of page */}
      <Footer />
    </main>
  );
}
