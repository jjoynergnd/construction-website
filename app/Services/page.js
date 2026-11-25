import Services from "../../components/Services";

export const metadata = {
  title: "Illustrative Services",
  description: "Example service categories for the fictional Acme Construction portfolio demonstration.",
};

export default function ServicesPage() {
  return (
    <main>
      <Services />
      <section className="mx-auto max-w-4xl px-6 pb-12 text-gray-700">
        <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">These service descriptions are illustrative examples for a fictional company. They do not advertise services from an operating contractor.</p>
      </section>
    </main>
  );
}
