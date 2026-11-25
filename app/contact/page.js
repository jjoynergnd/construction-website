import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact",
  description: "Try the simulated contact form on the fictional Acme Construction portfolio demonstration.",
};

export default function ContactPage() {
  return <main className="px-5"><ContactForm /></main>;
}
