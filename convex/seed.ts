import { mutation } from "./_generated/server";

const collectionSeed = [
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
];

const productSeed = [
  ["Nerea Crochet Vest", "nerea-crochet-vest", 12800, "/images/crochet-top.jpg", "Tops", "Natural"],
  ["Isla Market Bag", "isla-market-bag", 8400, "/images/crochet-bag.jpg", "Accessories", "Ivory"],
  ["Mara Open-Knit Set", "mara-open-knit-set", 19600, "/images/hero.jpg", "Sets", "Oat"],
  ["Olea Wrap Cardigan", "olea-wrap-cardigan", 16400, "/images/editorial.jpg", "Knitwear", "Ecru"],
] as const;

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("collections").first();
    if (existing) return { seeded: false, reason: "Catalogue data already exists." };

    const categoryId = await ctx.db.insert("categories", {
      name: "Ready to wear",
      slug: "ready-to-wear",
      description: "Hand-crocheted wardrobe pieces and accessories.",
      order: 1,
      isActive: true,
    });

    const collectionIds = [];
    for (const [index, collection] of collectionSeed.entries()) {
      collectionIds.push(
        await ctx.db.insert("collections", {
          ...collection,
          featured: true,
          status: "published",
          order: index + 1,
          publishedAt: Date.now(),
        }),
      );
    }

    for (const [name, slug, price, image, categoryLabel, color] of productSeed) {
      await ctx.db.insert("products", {
        name,
        slug,
        description: "A considered VELONA piece, crocheted by hand in small quantities.",
        price,
        currency: "EUR",
        image,
        images: [image],
        categoryId,
        collectionIds: [collectionIds[0]],
        categoryLabel,
        color,
        materials: ["Organic cotton"],
        featured: true,
        bestSeller: true,
        wholesaleEligible: true,
        status: "active",
        createdAt: Date.now(),
      });
    }

    return { seeded: true, collections: collectionSeed.length, products: productSeed.length };
  },
});
