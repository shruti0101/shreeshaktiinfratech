export const categories = [
  { id: "bar-processing-machines", name: "Bar Processing Machines" },
  { id: "cutting-tools", name: "Cutting Tools" },
  { id: "welding", name: "Welding Machines" },
];

export const products = [
  {
    id: 1,
    slug: "automatic-bar-bender",
    name: "Automatic Bar Bender ",
    category: "bar-processing-machines",
    model: "RB-600",
    image: {
      src: "/products/automaticbarmachine.png",
      alt: "Automatic Bar Bender",
    },
    images: [
      {
        src: "/products/rebar-bender/1.jpg",
        alt: "Rebar Bender 500 side view",
      },
      {
        src: "/products/rebar-bender/2.jpg",
        alt: "Rebar Bender 500 bending operation",
      },
      {
        src: "/products/rebar-bender/3.jpg",
        alt: "Rebar Bender 500 in construction site",
      },
    ],
description: [
  { type: "h2", text: "Overview" },
  { type: "p", text: "Durable cutting saw for industrial use. Designed for heavy-duty projects with <strong>long-lasting build</strong> Durable cutting saw for industrial use. Designed for heavy-duty projects with.Durable cutting saw for industrial use. Designed for heavy-duty projects with" },
  
  { type: "h2", text: "Features" },
  { type: "ul", items: [
      "High precision: Ensures accurate cuts",
      "Long-lasting build: Industrial-grade materials"
    ] }
],
    specs: [
      { label: "Bar Dimensions", value: "8mm to 32mm" },
      { label: "Model Name/Number", value: "SSI GW 42" },
      { label: "Max Bending Radius", value: "32MM" },
      { label: "Power Source", value: "Electric" },
      { label: "Max Bending Angle", value: "32" },
      { label: "Motor Speed", value: "2800" },
      { label: "Machine Weight", value: "270 KG" },
      { label: "TMT Bar Steel Dia.", value: "5 hp" },
      { label: "Gear Oil", value: "90 no." },
       { label: "Voltage", value: "440 volt" },
    ],
    metaTitle: "Rebar Bender 500 - High-Quality Construction Equipment",
    metaDescription:
      "Buy Rebar Bender 500 for efficient and precise rebar bending in construction projects. Durable, reliable, and best price available.",
  },

  {
    id: 2,
    slug: "automatic-bar-bending-machine",
    name: "Automatic Bar Bending Machine",
    category: "bar-processing-machines",
    model: "SSI GW 42",
    size: "32mm,40mm",
    image: {
      src: "/products/automaticbarmachine.png",
      alt: "Automatic Bar Bending Machine front view",
    },
    images: [
      {
        src: "/products/automaticmachine2.png",
        alt: "Automatic Bar Bending Machine side view",
      },
      {
        src: "/products/automaticmachine3.png",
        alt: "Automatic Bar Bending Machine blade close-up",
      },
      {
        src: "/products/automaticmachine1.png",
        alt: "Automatic Bar Bending Machine blade close-up",
      },
    ],
description: [
  { type: "h2", text: "Overview" },
  { type: "p", text: "Durable cutting saw for industrial use. Designed for heavy-duty projects with <strong>long-lasting build</strong> Durable cutting saw for industrial use. Designed for heavy-duty projects with.Durable cutting saw for industrial use. Designed for heavy-duty projects with" },
  
  { type: "h2", text: "Features" },
  { type: "ul", items: [
      "High precision: Ensures accurate cuts",
      "Long-lasting build: Industrial-grade materials"
    ] }
],

    specs: [
          { label: "Bar Dimensions", value: "8mm to 32mm" },
      { label: "Model Name/Number", value: "SSI GW 42" },
      { label: "Max Bending Radius", value: "32MM" },
      { label: "Power Source", value: "Electric" },
      { label: "Max Bending Angle", value: "32" },
      { label: "Motor Speed", value: "2800" },
      { label: "Machine Weight", value: "270 KG" },
      { label: "TMT Bar Steel Dia.", value: "5 hp" },
      { label: "Gear Oil", value: "90 no." },
       { label: "Voltage", value: "440 volt" },
    ],
    metaTitle: "Cutting Saw 300 - Durable Industrial Cutting Tool",
    metaDescription:
      "Order Cutting Saw 300 for precise and durable cutting operations. Perfect for industrial and heavy-duty projects.",
  },

  
  {
    id: 3,
    slug: "rebar-bender-700",
    name: "Rebar Bender 700",
    category: "bar-machines", // same as Rebar Bender 500
    model: "RB-700",
    image: {
      src: "/products/rebar-bender700/main.jpg",
      alt: "Rebar Bender 700",
    },
    images: [],
   description: [
  { type: "h2", text: "Overview" },
  { type: "p", text: "Durable cutting saw for industrial use. Designed for heavy-duty projects with <strong>long-lasting build</strong> Durable cutting saw for industrial use. Designed for heavy-duty projects with.Durable cutting saw for industrial use. Designed for heavy-duty projects with" },
  
  { type: "h2", text: "Features" },
  { type: "ul", items: [
      "High precision: Ensures accurate cuts",
      "Long-lasting build: Industrial-grade materials"
    ] }
],
    specs: [{ label: "Power", value: "7.5 HP" }],
    metaTitle: "Rebar Bender 700",
    metaDescription: "Heavy-duty rebar bending machine.",
  },
];
