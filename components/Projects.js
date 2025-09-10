import Image from "next/image";

export default function Projects() {
  const projects = [
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
  ];

  return (
    <section className="my-12" id="projects">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
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
              <h3 className="font-semibold text-xl text-gray-900 mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
