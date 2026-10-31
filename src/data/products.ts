export const categories = [
  "Traditional Sweets",
  "Ghee Specials",
  "Premium Sweets",
  "Festival Specials",
  "Home Foods",
  "Hot Snacks",
] as const;

export type Category = (typeof categories)[number];
export type Product = {
  name: string;
  category: Category;
  price: number;
  unit: "kg" | "pc";
  packs: readonly string[];
  image?: string;
};

// Names, categories, prices and pack sizes transcribed from the public catalogue on 31 October 2026.
const rows: { category: Category; items: [string, number][] }[] = [
  { category: "Traditional Sweets", items: [
    ["Sanna Boondi Laddu", 240], ["Laavu Boondi Laddu", 240], ["Madata Kaja", 240],
    ["Kakinada Kaja", 320], ["Mysore Pak", 240], ["Badhusha", 240],
    ["Chitti Kaja", 240], ["Soan Papidi Pieces", 240], ["Jangri", 260], ["Chandrakala", 240],
  ] },
  { category: "Ghee Specials", items: [
    ["White Kalakand", 400], ["Roast Kalakand", 480], ["Double Kalakand", 400],
    ["Ajmir Kalakand", 400], ["Badam Kalakand", 480], ["Carrot Kalakand", 400],
    ["Pala Koava Balls", 480], ["Pala Kova", 480], ["Loose Kalakand", 480],
    ["Ghee Mysore Pak", 480], ["Milk Mysore Pak", 480], ["Kaju Patisa (Ghee)", 360],
    ["Malai Laddu", 400], ["Ice Cream Barfi (Badam)", 400],
  ] },
  { category: "Premium Sweets", items: [
    ["Ice Cream Burfi (Vanilla)", 400], ["Dry Fruit Laddoo", 480], ["Dry Fruit Burfi", 480],
    ["Dry Fruit Halwa", 400], ["Kaju Burfi", 1000], ["Kaju Pakam", 1000],
    ["Thokkudu Laddu", 360], ["Besan Laddoo", 360], ["Halwa", 360], ["Motichur Laddu", 320],
  ] },
  { category: "Home Foods", items: [
    ["Bellam Gavvalu", 280], ["Bellam Vennaundalu", 280], ["Panchadara Kommulu", 240],
    ["Sweet Samosa", 240], ["Sweet Chakrapanalu", 240], ["Gorumitailu", 280],
    ["Panasa Thonalu", 280], ["Bobbatlu", 240], ["Bobbatlu Premium", 480],
    ["Ariselu Plain", 240], ["Ariselu Nuvvulu", 280], ["Kobbari Burelu", 240],
    ["Ariselu Ghee Plain", 700], ["Ariselu Ghee Nuvvulu", 750], ["Kajji Kayalu", 300],
  ] },
  { category: "Hot Snacks", items: [
    ["Karam Boondhi", 240], ["Boondhi Mixture", 240], ["Boondhi Mixture Special", 280],
    ["White Chegodi", 240], ["Pappu Chegodi", 280], ["Nuvvula Chegodi", 280],
    ["Chakrapanalu", 240], ["Vamu Pusa", 240], ["Chakralu (Janthikalu)", 240],
    ["Ribbon Chekkalu", 240], ["Murukulu", 240], ["Dalmudi", 240],
    ["Sanna Karampusa", 240], ["Ragi Vamupusa", 240], ["Ragi Murukulu", 240],
    ["Bicknoor Boondi", 240], ["Bicknoor Mixture", 280], ["Saggu Biyyam Murukulu", 240],
    ["Pendulum Sticks", 320], ["Kaju Fry (Ghee)", 1200], ["Chinna Chekkalu (Bombay Chips)", 280],
  ] },
  { category: "Festival Specials", items: [
    ["Gulab Jamun", 400], ["Rasagulla", 480], ["Kovapuri", 25],
    ["Pootha Rekulu", 600], ["Sweet Boondhi", 300],
  ] },
];

const matchedImages: Record<string, string> = {
  "Sanna Boondi Laddu": "/images/laddu.png",
  "Motichur Laddu": "/images/reference-motichur.webp",
  "Laavu Boondi Laddu": "/images/laddu.png",
  "Madata Kaja": "/images/kaja.png",
  "Kakinada Kaja": "/images/kaja.png",
  "Chitti Kaja": "/images/kaja.png",
  "Mysore Pak": "/images/mysore-pak.png",
  "Ghee Mysore Pak": "/images/mysore-pak.png",
  "Milk Mysore Pak": "/images/mysore-pak.png",
  "Kaju Burfi": "/images/kaju-katli.png",
  "Gulab Jamun": "/images/gulab-jamun.png",
};

export const products: Product[] = rows.flatMap(({ category, items }) =>
  items.map(([name, price]) => ({
    name,
    category,
    price,
    unit: name === "Kovapuri" ? "pc" : "kg",
    packs: name === "Kovapuri" ? ["Per piece"] : ["250g", "500g", "1kg"],
    image: matchedImages[name],
  })),
);

export const featured = ["Kaju Burfi", "Motichur Laddu", "Mysore Pak", "Gulab Jamun"]
  .map((name) => products.find((product) => product.name === name)!);
