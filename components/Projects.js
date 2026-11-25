import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Projects({ featured = false }) {
  const visibleProjects = featured ? projects.slice(0, 3) : projects;

  return (
    <section className="my-12" id="projects" aria-labelledby="projects-heading">
      <div className="mb-8 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-teal-700">Illustrative concepts</p>
        <h2 id="projects-heading" className="text-3xl font-bold text-gray-900">Project concepts</h2>
        <p className="mx-auto mt-3 max-w-2xl text-gray-600">These fictional examples show how a project portfolio could be presented. They are not completed Acme projects.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {visibleProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
            aria-label={`${project.title}, ${project.category} concept. View project details`}
          >
            <div className="relative h-56 overflow-hidden">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition duration-300 group-hover:scale-105" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-teal-900">Concept project</span>
            </div>
            <div className="p-5">
              <p className="text-sm font-medium text-teal-700">{project.category}</p>
              <h3 className="mt-1 text-xl font-semibold text-gray-900">{project.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">{project.summary}</p>
              <span className="mt-4 inline-flex items-center gap-2 font-semibold text-teal-700">Explore concept <span aria-hidden="true">→</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
