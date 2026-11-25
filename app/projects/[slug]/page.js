import { notFound } from "next/navigation";
import ProjectDetail from "../../../components/ProjectDetail";
import { getProject, projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return project
    ? { title: `${project.title} Concept`, description: `${project.summary} Fictional concept project for a portfolio demonstration.` }
    : {};
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
