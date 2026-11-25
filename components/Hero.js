export default function Hero() {
  return (
    <section className="text-center my-12 bg-gray-100 py-16 rounded-lg shadow-lg">
      <h1 className="text-5xl font-bold text-teal-600">Acme Construction</h1>
      <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
        A fictional construction company website concept for portfolio demonstration.
      </p>
      <a
        href="#projects"
        className="mt-6 inline-block bg-teal-600 text-white font-semibold px-8 py-3 rounded shadow hover:bg-teal-700 transition"
      >
        Explore Project Concepts
      </a>
    </section>
  );
}
