import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const homepage = query({
  args: {},
  handler: async (ctx) => {
    const collections = await ctx.db
      .query("collections")
      .withIndex("by_featured_order", (q) => q.eq("featured", true))
      .filter((q) => q.eq(q.field("status"), "published"))
      .take(5);

    const products = await ctx.db
      .query("products")
      .withIndex("by_best_seller", (q) => q.eq("bestSeller", true))
      .filter((q) => q.eq(q.field("status"), "active"))
      .take(4);

    return {
      collections: collections.map((collection) => ({
        name: collection.name,
        slug: collection.slug,
        description: collection.description,
        image: collection.image,
        eyebrow: collection.eyebrow,
      })),
      bestSellers: products.map((product) => ({
        name: product.name,
        slug: product.slug,
        price: product.price,
        currency: product.currency,
        image: product.image,
        category: product.categoryLabel,
        color: product.color,
      })),
    };
  },
});

export const subscribeToNewsletter = mutation({
  args: {
    email: v.string(),
    firstName: v.optional(v.string()),
    source: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const email = args.email.trim().toLowerCase();
    const existing = await ctx.db
      .query("newsletterSubscribers")
      .withIndex("by_email", (q) => q.eq("email", email))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        status: "subscribed",
        consent: true,
        firstName: args.firstName?.trim() || existing.firstName,
      });
      return existing._id;
    }

    return await ctx.db.insert("newsletterSubscribers", {
      email,
      firstName: args.firstName?.trim() || undefined,
      source: args.source ?? "homepage",
      consent: true,
      status: "subscribed",
      createdAt: Date.now(),
    });
  },
});

export const submitWholesaleInquiry = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    businessName: v.string(),
    website: v.optional(v.string()),
    country: v.string(),
    storeType: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) =>
    await ctx.db.insert("wholesaleInquiries", {
      ...args,
      email: args.email.trim().toLowerCase(),
      status: "new",
      createdAt: Date.now(),
    }),
});
