export const BUSINESS = {
  name: "MAHADEV ENTERPRISES",
  tagline: "Powering Homes • Lighting Businesses • Trusted Electronics & Electrical Solutions",
  phone: "+91 8303364970",
  phoneHref: "tel:+918303364970",
  whatsapp: "https://wa.me/918303364970?text=Namaste!%20Mujhe%20electronics%20product%20ke%20baare%20mein%20jaankari%20chahiye.",
  address: "Tahsil Road, Mirzapur, Uttar Pradesh – 231001, India",
  shortAddress: "Tahsil Road, Mirzapur, UP – 231001",
  hours: "Mon – Sun • 9:30 AM – 9:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Tahsil+Road,+Mirzapur,+Uttar+Pradesh+231001&output=embed",
  mapDirections: "https://www.google.com/maps/search/?api=1&query=Tahsil+Road+Mirzapur+Uttar+Pradesh+231001",
};

const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

// Verified royalty-free photos (Pexels) — har photo uske naam se match karti hai
const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMG = {
  heroShowroom: u("1550009158-9ebf69173e03", 1800),
  // LED & Smart TVs — wall-mounted flat-screen TVs
  tvWall: px(5202925),
  smartTv: px(6020432),
  tvSide: px(3423817),
  // Refrigerators
  fridge: px(2343467),
  fridge2: px(6631793),
  // Washing Machines
  washing: px(8774376),
  washing2: px(15896185),
  kitchen: u("1556911220-bff31c812dba", 1200),
  electrician: u("1621905251189-08b45d6a269e", 1200),
  electricianSockets: px(23440495),
  livingLux: u("1616486338812-3dadae4b4ace", 1400),
  // LED bulbs & decorative lights
  bulbs: px(577518),
  stringLights: px(966861),
  diya: px(4078516),
  storeAisle: u("1553413077-190dd305871c", 1200),
  // Air Conditioners — wall-mounted split AC
  acUnit: px(38788452),
  acHome: px(16592625),
  // Ceiling Fans
  fanWhite: px(3935340),
  fanBrown: px(14715847),
  fanRoom: px(4030028),
  coolerRoom: px(7601104),
  // Geyser — modern bathroom with shower (hot-water theme)
  bathroom: px(7746104),
  // Wires & cables — coated electrical wires
  cables: px(4480541),
  cables2: px(2332885),
  // Switches & sockets
  switches: px(7111164),
  socket: px(3615719),
  // MCB / distribution panel with circuit breakers
  mcb: px(35573433),
  mcbWork: px(9679179),
  // Inverter & batteries
  battery: px(4374843),
  battery2: px(6473244),
  shopping: u("1441986300917-64674bd600d8", 1200),
  showroom2: u("1534452203293-494d7ddbf7e0", 1200),
  homeAppliance: u("1556911220-bff31c812dba", 1000),
};

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  badge?: string;
};

export const CATEGORIES = [
  "LED & Smart TVs",
  "Refrigerators",
  "Washing Machines",
  "Air Conditioners",
  "Fans",
  "Geysers",
  "Inverters",
  "Batteries",
  "LED Lighting",
  "Wires & Cables",
  "Switches",
  "Home Appliances",
] as const;

export const PRODUCTS: Product[] = [
  { id: "tv-1", name: "Crystal 4K Smart LED TV 43\"", category: "LED & Smart TVs", description: "4K UHD, Dolby audio, built-in OTT apps, voice remote & 2-yr panel warranty support.", image: IMG.smartTv, badge: "Bestseller" },
  { id: "tv-2", name: "Premium QLED Wall Display 55\"", category: "LED & Smart TVs", description: "QLED brilliance, 120Hz motion, cinematic colours — perfect for luxury living rooms.", image: IMG.tvWall, badge: "Premium" },
  { id: "ref-1", name: "Double-Door Frost-Free Refrigerator", category: "Refrigerators", description: "320L convertible, inverter compressor, toughened glass shelves, stabilizer-free.", image: IMG.fridge, badge: "Energy Saver" },
  { id: "ref-2", name: "Side-by-Side Smart Refrigerator", category: "Refrigerators", description: "Large family storage, digital inverter, elegant glass finish.", image: IMG.fridge2 },
  { id: "wm-1", name: "Front-Load Washing Machine 8kg", category: "Washing Machines", description: "Steam wash, 15 programs, silent inverter motor, 5-star efficiency.", image: IMG.washing, badge: "Bestseller" },
  { id: "wm-2", name: "Top-Load Smart Washer 7.5kg", category: "Washing Machines", description: "Smart sensors, hard-water program, child lock — ideal for Mirzapur homes.", image: IMG.washing2 },
  { id: "ac-1", name: "5-Star Split Inverter AC 1.5T", category: "Air Conditioners", description: "Fast cooling, copper condenser, PM filter, low-noise sleep mode.", image: IMG.acUnit, badge: "Summer Hit" },
  { id: "ac-2", name: "Window & Split AC Range", category: "Air Conditioners", description: "Voltas, Daikin, LG & Samsung range with installation support.", image: IMG.acHome },
  { id: "fan-1", name: "Designer Ceiling Fan Collection", category: "Fans", description: "Crompton, Havells, Orient & Usha — silent, high-air, decorative finishes.", image: IMG.fanWhite, badge: "New Designs" },
  { id: "fan-2", name: "BLDC Energy-Saving Fans", category: "Fans", description: "Save up to 65% power with 5-star BLDC remote fans.", image: IMG.fanBrown },
  { id: "gey-1", name: "Instant & Storage Geysers", category: "Geysers", description: "Bajaj, Havells, Crompton — 10L–25L, 5-star, rust-proof tank.", image: IMG.bathroom },
  { id: "inv-1", name: "Home Inverter + Battery Combo", category: "Inverters", description: "Luminous & Exide combos — full-home backup with fast charging.", image: IMG.battery, badge: "Power Cut Proof" },
  { id: "bat-1", name: "Tubular Inverter Batteries", category: "Batteries", description: "Long backup, low maintenance, genuine warranty billing.", image: IMG.battery2 },
  { id: "led-1", name: "LED Bulbs & Panel Lights", category: "LED Lighting", description: "9W–50W range, false-ceiling panels, COB spotlights.", image: IMG.bulbs, badge: "Wholesale Rate" },
  { id: "led-2", name: "Decorative & Festive Lighting", category: "LED Lighting", description: "Jhoomar lights, strip lights, gate & Diwali décor collection.", image: IMG.diya },
  { id: "wire-1", name: "Fire-Suraksha Wires & Cables", category: "Wires & Cables", description: "Polycab, Havells, Anchor — FR copper wires, all sizes.", image: IMG.cables },
  { id: "sw-1", name: "Modular Switches & Sockets", category: "Switches", description: "Anchor, Havells, Polycab plates — premium touch & matte finishes.", image: IMG.switches },
  { id: "ha-1", name: "Mixer, Iron, Kettle & Cooktops", category: "Home Appliances", description: "Bajaj, Usha, Philips daily-use appliances with billing & warranty.", image: IMG.homeAppliance },
  { id: "ha-2", name: "Coolers & Water Heaters", category: "Home Appliances", description: "Desert & tower coolers, high-air delivery for UP summers.", image: IMG.coolerRoom },
  { id: "mcb-1", name: "MCB, DB Box & Accessories", category: "Switches", description: "Complete safe-fitting range for new homes & shops.", image: IMG.mcb },
];

export const BRANDS = [
  "Samsung", "LG", "Sony", "Panasonic", "Whirlpool", "Voltas",
  "Daikin", "Havells", "Crompton", "Bajaj", "Usha", "Orient",
  "Luminous", "Exide", "Anchor", "Polycab",
];

export const TESTIMONIALS = [
  { name: "Ramesh Gupta", area: "Mirzapur City", rating: 5, text: "Samsung 55 inch TV liya — genuine piece, best price in Mirzapur, same-day installation. Staff bahut polite hai.", product: "Smart LED TV" },
  { name: "Priya Singh", area: "Tahsil Road", rating: 5, text: "Double-door fridge aur washing machine dono yahin se liye. Billing, warranty card sab proper. Highly trusted shop.", product: "Refrigerator + Washer" },
  { name: "Anil Kewat", area: "Vindhyachal", rating: 5, text: "Poore ghar ki wiring — Polycab wire, Anchor switches, MCB box. Rate wholesale jaisa, quality premium.", product: "Wires & Switches" },
  { name: "Sunita Devi", area: "Mirzapur", rating: 5, text: "Geyser aur cooler liya. Sardi-garmi dono ka solution ek hi dukaan par. Service ke liye phone par turant response.", product: "Geyser & Cooler" },
  { name: "Mohd. Arif", area: "Jamalpur", rating: 4, text: "Dukaan ke liye 6 fans + LED panels liye bulk me. Commercial rate diya aur delivery bhi karwai. Bahut badhiya.", product: "Bulk Commercial Order" },
  { name: "Deepak Shrivastava", area: "Chunar", rating: 5, text: "Inverter-battery combo lagwaya. Light jaane ka tension khatam. Luminous genuine battery with warranty mili.", product: "Inverter Combo" },
  { name: "Kavita Pandey", area: "Mirzapur Cantt", rating: 5, text: "Diwali lighting poori yahin se li — jhoomar, strips, gate lights. Ghar mahal lag raha hai!", product: "Decorative Lighting" },
  { name: "Suresh Yadav", area: "Marihan", rating: 5, text: "1.5 ton split AC lagwaya, copper pipe, proper vacuum fitting. Cooling ekdam chill. 10/10 service.", product: "Split AC" },
];

export const GALLERY = [
  { src: IMG.heroShowroom, label: "Premium Showroom Interior", span: "tall" },
  { src: IMG.smartTv, label: "LED TV Display Wall", span: "wide" },
  { src: IMG.fridge2, label: "Refrigerator Section", span: "" },
  { src: IMG.washing, label: "Washing Machine Display", span: "tall" },
  { src: IMG.bulbs, label: "LED Lighting Range", span: "" },
  { src: IMG.switches, label: "Switches & Accessories", span: "" },
  { src: IMG.fanWhite, label: "Ceiling Fan Collection", span: "wide" },
  { src: IMG.acHome, label: "AC Display Zone", span: "" },
  { src: IMG.battery, label: "Inverter & Battery Zone", span: "tall" },
  { src: IMG.mcb, label: "MCB & Panel Section", span: "wide" },
  { src: IMG.stringLights, label: "Decorative Lights", span: "" },
  { src: IMG.electricianSockets, label: "Expert Installation", span: "" },
];

export const SERVICES = [
  { icon: "Tv", title: "Electronics Sales", desc: "LED TVs, refrigerators, washers, ACs — all top brands with GST billing & warranty.", image: IMG.tvWall },
  { icon: "Plug", title: "Electrical Products", desc: "Wires, switches, MCBs, panels & lighting — safe, certified, genuine stock.", image: IMG.cables },
  { icon: "Home", title: "Home Appliance Supply", desc: "Complete home setup: kitchen to bedroom, handpicked for Indian homes.", image: IMG.kitchen },
  { icon: "Wrench", title: "Installation Support", desc: "AC fitting, TV wall-mount, inverter wiring — trained local technician network.", image: IMG.electrician },
  { icon: "MessagesSquare", title: "Product Consultation", desc: "Room size, budget & usage ke hisaab se sahi model choose karne me expert guidance.", image: IMG.electricianSockets },
  { icon: "Package", title: "Bulk Orders", desc: "Hotels, shops, schools & marriage halls — special commercial pricing & delivery.", image: IMG.storeAisle },
  { icon: "Store", title: "Shop & Commercial Supply", desc: "Regular supply for electricians, builders & retailers across Mirzapur.", image: IMG.shopping },
  { icon: "ShieldCheck", title: "Warranty Assistance", desc: "Brand service centre coordination — hum aapke saath claim tak khade rehte hain.", image: IMG.mcbWork },
];

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/brands", label: "Brands" },
  { href: "/testimonials", label: "Reviews" },
  { href: "/contact", label: "Contact" },
];
