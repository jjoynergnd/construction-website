import { Wrench, Building, Home as HomeIcon } from "lucide-react";

export default function Services() {
  const services = [
    { icon: <HomeIcon size={32} className="text-teal-600" />, title: "Residential Construction", desc: "Custom homes, renovations, and remodeling." },
    { icon: <Building size={32} className="text-teal-600" />, title: "Commercial Projects", desc: "Office buildings, retail spaces, and warehouses." },
    { icon: <Wrench size={32} className="text-teal-600" />, title: "Repairs & Maintenance", desc: "Roofing, plumbing, electrical, and general upkeep." },
  ];

  return (
    <section className="my-12" id="services">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="p-6 border rounded-lg shadow hover:shadow-xl transition hover:-translate-y-1"
          >
            <div className="mb-3">{service.icon}</div>
            <h3 className="font-semibold text-xl mb-2 text-gray-900">{service.title}</h3>
            <p className="text-gray-700">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
