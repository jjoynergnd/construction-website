import Hero from "../components/Hero";
import Services from "../components/Services";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <Hero />
      <p className="mx-auto max-w-3xl rounded-lg border border-amber-200 bg-amber-50 px-5 py-4 text-center text-sm leading-6 text-amber-950"><strong>Portfolio Demonstration</strong> — Acme Construction is a fictional company. Projects and business information are illustrative.</p>
      <Services />
      <Projects featured />
      <ContactForm compact />
    </main>
  );
}
