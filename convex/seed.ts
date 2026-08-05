import { mutation } from "./_generated/server";

const collectionSeed = [
  ["Clutch", "clutch", "Soft structure, tactile stitches and colour made to be held close.", "/velona/clutch-ivory.jpg", "Signature 01"],
  ["Fringe", "fringe", "Statement shoulder bags with movement, pattern and a little drama.", "/velona/fringe-bag.jpg", "Signature 02"],
  ["Jacket", "jacket", "One-of-a-kind layers where granny squares become modern outerwear.", "/velona/jacket-brown.jpg", "Signature 03"],
  ["Bags", "bags", "Everyday crochet companions, from mini handles to beach-ready totes.", "/velona/blue-bag.jpg", "Collection 04"],
  ["Swimwear", "swimwear", "Sun-soaked crochet separates made for expressive summer days.", "/velona/swimwear-white.jpg", "Collection 05"],
] as const;

const productSeed = [
  ["The Ivory Clutch", "ivory-clutch", "/velona/clutch-ivory.jpg", "Clutch", "Ivory"],
  ["Botanical Fringe Bag", "botanical-fringe", "/velona/fringe-bag.jpg", "Fringe", "Floral"],
  ["Granny Jacket No. 01", "granny-jacket-black", "/velona/hero-jacket.jpg", "Jacket", "Black / Ivory"],
  ["The Blue Shoulder Bag", "blue-shoulder-bag", "/velona/blue-bag.jpg", "Bags", "Cobalt"],
] as const;

export const seed = mutation({
  args: {},
  handler: async (ctx) => {
    const existing = await ctx.db.query("collections").first();
    if (existing) return { seeded: false, reason: "Catalogue data already exists." };

    const categoryIds = new Map<string, Awaited<ReturnType<typeof ctx.db.insert>>>();
    for (const [index, label] of ["Clutch", "Fringe", "Jacket", "Bags", "Swimwear"].entries()) {
      categoryIds.set(label, await ctx.db.insert("categories", { name: label, slug: label.toLowerCase(), description: `Handmade VELONA ${label.toLowerCase()}.`, order: index + 1, isActive: true }));
    }

    const collectionIds = new Map<string, Awaited<ReturnType<typeof ctx.db.insert>>>();
    for (const [index, [name, slug, description, image, eyebrow]] of collectionSeed.entries()) {
      collectionIds.set(name, await ctx.db.insert("collections", { name, slug, description, image, eyebrow, featured: true, status: "published", order: index + 1, publishedAt: Date.now() }));
    }

    for (const [name, slug, image, categoryLabel, color] of productSeed) {
      const collectionId = collectionIds.get(categoryLabel);
      await ctx.db.insert("products", {
        name, slug, description: "A distinctive VELONA piece made by hand in small quantities.", currency: "EUR", image, images: [image],
        categoryId: categoryIds.get(categoryLabel), collectionIds: collectionId ? [collectionId] : [], categoryLabel, color,
        materials: ["Textile yarn"], featured: true, bestSeller: true, wholesaleEligible: true, status: "active", createdAt: Date.now(),
      });
    }
    return { seeded: true, collections: collectionSeed.length, products: productSeed.length };
  },
});
