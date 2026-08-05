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
  price: number;
  currency: "EUR";
  image: string;
  category: string;
  color: string;
};

export type HomepageData = {
  collections: StoreCollection[];
  bestSellers: StoreProduct[];
};

export const fallbackHomepageData: HomepageData = {
  collections: [
    {
      name: "Sculpted Basics",
      slug: "sculpted-basics",
      description: "Quiet silhouettes shaped by texture, touch and time.",
      image: "/images/editorial.jpg",
      eyebrow: "Collection 01",
    },
    {
      name: "Light Layers",
      slug: "light-layers",
      description: "Open stitches and natural fibers for sun-warmed days.",
      image: "/images/crochet-top.jpg",
      eyebrow: "Collection 02",
    },
    {
      name: "The Carry Edit",
      slug: "the-carry-edit",
      description: "Handmade companions for everyday rituals.",
      image: "/images/crochet-bag.jpg",
      eyebrow: "Collection 03",
    },
  ],
  bestSellers: [
    {
      name: "Nerea Crochet Vest",
      slug: "nerea-crochet-vest",
      price: 12800,
      currency: "EUR",
      image: "/images/crochet-top.jpg",
      category: "Tops",
      color: "Natural",
    },
    {
      name: "Isla Market Bag",
      slug: "isla-market-bag",
      price: 8400,
      currency: "EUR",
      image: "/images/crochet-bag.jpg",
      category: "Accessories",
      color: "Ivory",
    },
    {
      name: "Mara Open-Knit Set",
      slug: "mara-open-knit-set",
      price: 19600,
      currency: "EUR",
      image: "/images/hero.jpg",
      category: "Sets",
      color: "Oat",
    },
    {
      name: "Olea Wrap Cardigan",
      slug: "olea-wrap-cardigan",
      price: 16400,
      currency: "EUR",
      image: "/images/editorial.jpg",
      category: "Knitwear",
      color: "Ecru",
    },
  ],
};

export function formatPrice(amount: number, currency = "EUR") {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount / 100);
}
