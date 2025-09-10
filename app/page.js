import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <Hero />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
