import Image from "next/image";
import Link from "next/link";

export default function ProjectDetail({ project }) {
  return (
    <main className="mx-auto max-w-5xl px-5 py-10 sm:px-8">
      <Link href="/projects" className="font-semibold text-teal-700 hover:text-teal-900 focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600">← All project concepts</Link>
      <header className="my-8">
        <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-sm font-semibold text-teal-800">Illustrative concept project</span>
        <p className="mt-5 font-medium text-teal-700">{project.category}</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-gray-600">{project.summary}</p>
      </header>
      <figure className="overflow-hidden rounded-2xl bg-gray-100">
        <Image src={project.image} alt={project.alt} width={1536} height={1024} priority className="h-auto max-h-[34rem] w-full object-cover" sizes="(max-width: 1024px) 100vw, 1024px" />
        <figcaption className="px-4 py-3 text-sm text-gray-600">AI-generated illustrative design rendering for this fictional portfolio concept.</figcaption>
      </figure>
      <div className="my-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-2xl font-bold text-gray-900">Overview</h2>
            <p className="mt-3 leading-7 text-gray-700">{project.overview}</p>
          </section>
          <section className="mt-8" aria-labelledby="approach-heading">
            <h2 id="approach-heading" className="text-2xl font-bold text-gray-900">Concept approach</h2>
            <p className="mt-3 leading-7 text-gray-700">{project.approach}</p>
          </section>
        </div>
        <aside className="space-y-8 rounded-xl bg-gray-50 p-6">
          <section aria-labelledby="goals-heading">
            <h2 id="goals-heading" className="text-xl font-bold text-gray-900">Project goals</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">{project.goals.map((goal) => <li key={goal}>{goal}</li>)}</ul>
          </section>
          <section aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-xl font-bold text-gray-900">Illustrative features</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-gray-700">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </section>
        </aside>
      </div>
      <p className="border-t border-gray-200 pt-5 text-sm leading-6 text-gray-600">This is a fictional design concept created for a portfolio demonstration. It does not represent a real client, location, or completed project.</p>
    </main>
  );
}
