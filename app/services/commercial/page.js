import Link from "next/link";

export const metadata = { title: "Commercial Interiors Example" };

export default function CommercialServices() {
  return <main className="mx-auto max-w-4xl px-6 py-12 text-gray-700"><h1 className="mb-4 text-3xl font-bold text-teal-700">Commercial Interiors</h1><p className="mb-6 leading-7">Example scope for this fictional website: office and retail interior concepts focused on functional layouts and contemporary finishes. No commercial construction work is represented.</p><Link href="/services" className="inline-block rounded-lg bg-teal-700 px-4 py-2 text-white hover:bg-teal-800 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-500">← Back to Services</Link></main>;
}
