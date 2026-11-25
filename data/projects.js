export const projects = [
  {
    slug: "residential-outdoor-living",
    title: "Deck & Patio Renovation",
    category: "Residential Outdoor Living",
    image: "/images/concepts/outdoor-living.png",
    alt: "Illustrative design rendering of a multi-level deck with dark railings, built-in seating, and a stone patio.",
    summary: "A multi-level outdoor living concept with expanded entertaining space, updated railings, and integrated seating.",
    overview: "This fictional concept reimagines a backyard as a connected place to gather, with distinct areas for dining, relaxing, and moving between the home and garden.",
    goals: ["Expand useful space for entertaining", "Refresh the deck railing and circulation", "Add seating that feels integrated with the outdoor setting"],
    approach: "The concept uses a series of deck levels to define gathering areas, pairs durable-looking timber tones with dark railings, and carries the layout into a simple stone patio.",
    features: ["Multi-level deck layout", "Updated dark metal railing concept", "Integrated bench seating", "Connected stone patio and garden edge"],
  },
  {
    slug: "modern-workplace-renovation",
    title: "Commercial Interiors",
    category: "Modern Workplace Renovation",
    image: "/images/concepts/workplace.png",
    alt: "Illustrative design rendering of a collaborative office with shared tables, pendant lights, plants, and a glass meeting room.",
    summary: "An office renovation concept focused on collaborative layouts, lighting, and contemporary finishes.",
    overview: "This fictional workplace concept balances shared project areas with enclosed meeting space, creating a flexible interior that feels bright and calm.",
    goals: ["Support both focused work and team collaboration", "Improve the sense of daylight across shared areas", "Bring a consistent contemporary finish palette to the interior"],
    approach: "An open arrangement of shared tables anchors the floor, while a glazed meeting room provides separation without closing off sightlines. Warm wood, greenery, and layered pendant lighting soften the space.",
    features: ["Shared collaborative tables", "Glazed meeting room", "Layered pendant lighting concept", "Warm wood finishes and planting"],
  },
  {
    slug: "retail-store-buildout",
    title: "Retail Store Buildout",
    category: "Retail Construction",
    image: "/images/concepts/retail.png",
    alt: "Illustrative design rendering of a retail interior with custom oak displays, neatly arranged merchandise, and clear aisles.",
    summary: "A retail environment concept featuring custom displays, merchandise presentation, and functional interior space.",
    overview: "This fictional retail concept organizes a welcoming shop floor around clear circulation and flexible displays, with a neutral palette designed to let merchandise take focus.",
    goals: ["Make merchandise easy to browse and discover", "Keep customer circulation clear", "Create a consistent look across display fixtures"],
    approach: "Wall shelving and central tables provide varied presentation heights, while a simple aisle plan keeps the storefront visually open and makes room for future display changes.",
    features: ["Custom oak display shelving concept", "Central presentation tables", "Clear browsing aisles", "Warm lighting and neutral finishes"],
  },
];

export function getProject(slug) {
  return projects.find((project) => project.slug === slug);
}
