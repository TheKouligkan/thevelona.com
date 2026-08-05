export type StoreCollection = {
  name: string;
  slug: string;
  description: string;
  image: string;
  eyebrow: string;
};

export type StoreProduct = {
  name: string;
  slug: string;
  price?: number;
  currency: "EUR";
  image: string;
  category: string;
  color: string;
  note?: string;
};

export type HomepageData = {
  collections: StoreCollection[];
  bestSellers: StoreProduct[];
};

export const collections: StoreCollection[] = [
  {
    name: "Clutch",
    slug: "clutch",
    description: "Soft structure, tactile stitches and colour made to be held close.",
    image: "/velona/clutch-ivory.jpg",
    eyebrow: "Signature 01",
  },
  {
    name: "Fringe",
    slug: "fringe",
    description: "Statement shoulder bags with movement, pattern and a little drama.",
    image: "/velona/fringe-bag.jpg",
    eyebrow: "Signature 02",
  },
  {
    name: "Jacket",
    slug: "jacket",
    description: "One-of-a-kind layers where granny squares become modern outerwear.",
    image: "/velona/jacket-brown.jpg",
    eyebrow: "Signature 03",
  },
  {
    name: "Bags",
    slug: "bags",
    description: "Everyday crochet companions, from mini handles to beach-ready totes.",
    image: "/velona/blue-bag.jpg",
    eyebrow: "Collection 04",
  },
  {
    name: "Swimwear",
    slug: "swimwear",
    description: "Sun-soaked crochet separates made for expressive summer days.",
    image: "/velona/swimwear-white.jpg",
    eyebrow: "Collection 05",
  },
];

export const products: StoreProduct[] = [
  { name: "The Ivory Clutch", slug: "ivory-clutch", image: "/velona/clutch-ivory.jpg", category: "Clutch", color: "Ivory", currency: "EUR", note: "Handmade" },
  { name: "Botanical Fringe Bag", slug: "botanical-fringe", image: "/velona/fringe-bag.jpg", category: "Fringe", color: "Floral", currency: "EUR", note: "Limited edition" },
  { name: "Granny Jacket No. 01", slug: "granny-jacket-black", image: "/velona/hero-jacket.jpg", category: "Jacket", color: "Black / Ivory", currency: "EUR", note: "One of a kind" },
  { name: "The Blue Shoulder Bag", slug: "blue-shoulder-bag", image: "/velona/blue-bag.jpg", category: "Bags", color: "Cobalt", currency: "EUR", note: "Handmade" },
  { name: "Summer Crochet Set", slug: "summer-crochet-set", image: "/velona/swimwear-white.jpg", category: "Swimwear", color: "White", currency: "EUR", note: "Summer drop" },
  { name: "The Beach Tote", slug: "beach-tote", image: "/velona/beach-tote.jpg", category: "Bags", color: "Stone", currency: "EUR", note: "Everyday carry" },
  { name: "Granny Jacket No. 02", slug: "granny-jacket-olive", image: "/velona/jacket-olive.jpg", category: "Jacket", color: "Olive / Blush", currency: "EUR", note: "One of a kind" },
  { name: "Cocoa Granny Jacket", slug: "cocoa-granny-jacket", image: "/velona/jacket-brown.jpg", category: "Jacket", color: "Cocoa / Cream", currency: "EUR", note: "One of a kind" },
];

export const fallbackHomepageData: HomepageData = {
  collections,
  bestSellers: products.slice(0, 4),
};

export function formatPrice(amount?: number, currency = "EUR") {
  if (amount === undefined) return "Made to order";
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount / 100);
}

export function getCollection(slug: string) {
  return collections.find((collection) => collection.slug === slug);
}

export function getProductsForCollection(slug: string) {
  return products.filter((product) => product.category.toLowerCase() === slug || (slug === "bags" && product.category === "Bags"));
}
