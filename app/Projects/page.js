// app/projects/page.js
import Projects from "../../components/Projects";

export default function ProjectsPage() {
  return (
    <main>
      {/* Reuse the Projects component */}
      <Projects />

      {/* Extra placeholder for expansion */}
      <section className="max-w-4xl mx-auto p-8 text-gray-700">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <p>
          Browse some of our most successful construction and renovation
          projects. Each project demonstrates our commitment to detail and
          quality.
        </p>
      </section>
    </main>
  );
}
