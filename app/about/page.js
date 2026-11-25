export const metadata = {
  title: "About This Demonstration",
  description: "Learn about the fictional Acme Construction website portfolio demonstration.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-8 sm:px-8">
      <header className="my-8 rounded-2xl bg-gray-50 px-6 py-14 text-center shadow-sm sm:px-12">
        <p className="font-semibold uppercase tracking-[0.16em] text-teal-700">Portfolio demonstration</p>
        <h1 className="mt-3 text-4xl font-bold text-gray-900 sm:text-5xl">About this website</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">Acme Construction is a fictional company created to demonstrate a construction website concept. No operating business, staff, or client relationships are represented here.</p>
      </header>
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900">A sample brand and experience</h2>
        <p className="mt-4 max-w-3xl leading-7 text-gray-700">This demo brings together example service information, a project concept portfolio, and a simulated contact form. The project pages describe design ideas only; they are not records of completed construction work.</p>
        <h2 className="mt-8 text-2xl font-bold text-gray-900">What the concepts illustrate</h2>
        <p className="mt-4 max-w-3xl leading-7 text-gray-700">The sample content shows how residential outdoor living, workplace renovation, and retail buildout ideas can be presented clearly. All business details and project imagery are illustrative.</p>
      </section>
    </main>
  );
}
