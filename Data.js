export const categories = [
  { id: "bar-machines", name: "Bar Machines" },
  { id: "cutting-tools", name: "Cutting Tools" },
  { id: "welding", name: "Welding Machines" },
];

export const products = [
  {
    id: 1,
    slug: "rebar-bender-500",
    name: "Rebar Bender 500",
    category: "bar-machines",
    model: "RB-600",
    image: {
      src: "/products/aboutimg.webp",
      alt: "Rebar Bender 500 machine front view",
    },
    images: [
      { src: "/products/rebar-bender/1.jpg", alt: "Rebar Bender 500 side view" },
      { src: "/products/rebar-bender/2.jpg", alt: "Rebar Bender 500 bending operation" },
      { src: "/products/rebar-bender/3.jpg", alt: "Rebar Bender 500 in construction site" },
    ],
    description: "High-quality rebar bending machine for construction projects.",
    specs: [
      { label: "Power", value: "5 HP" },
      { label: "Bending Capacity", value: "32mm" },
      { label: "Weight", value: "320kg" },
      { label: "Voltage", value: "415V" },
    ],
    metaTitle: "Rebar Bender 500 - High-Quality Construction Equipment",
    metaDescription:
      "Buy Rebar Bender 500 for efficient and precise rebar bending in construction projects. Durable, reliable, and best price available.",
  },
  {
    id: 2,
    slug: "cutting-saw-300",
    name: "Cutting Saw 300",
    category: "cutting-tools",
    model: "CS-300",
    image: {
      src: "/products/cutting-saw/main.jpg",
      alt: "Cutting Saw 300 front view",
    },
    images: [
      { src: "/products/cutting-saw/1.jpg", alt: "Cutting Saw 300 side view" },
      { src: "/products/cutting-saw/2.jpg", alt: "Cutting Saw 300 blade close-up" },
    ],
    description: "Durable cutting saw for industrial use.",
    specs: [
      { label: "Blade Size", value: "300mm" },
      { label: "Power", value: "3 HP" },
      { label: "Voltage", value: "220V" },
    ],
    metaTitle: "Cutting Saw 300 - Durable Industrial Cutting Tool",
    metaDescription:
      "Order Cutting Saw 300 for precise and durable cutting operations. Perfect for industrial and heavy-duty projects.",
  },
  // ... more products
];
