import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  categories: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.optional(v.string()),
    image: v.optional(v.string()),
    order: v.number(),
    isActive: v.boolean(),
  })
    .index("by_slug", ["slug"])
    .index("by_order", ["order"]),

  collections: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    eyebrow: v.string(),
    image: v.string(),
    featured: v.boolean(),
    status: v.union(v.literal("draft"), v.literal("published")),
    order: v.number(),
    publishedAt: v.optional(v.number()),
  })
    .index("by_slug", ["slug"])
    .index("by_featured_order", ["featured", "order"]),

  products: defineTable({
    name: v.string(),
    slug: v.string(),
    description: v.string(),
    price: v.optional(v.number()),
    compareAtPrice: v.optional(v.number()),
    currency: v.string(),
    image: v.string(),
    images: v.array(v.string()),
    categoryId: v.optional(v.id("categories")),
    collectionIds: v.array(v.id("collections")),
    categoryLabel: v.string(),
    color: v.string(),
    materials: v.array(v.string()),
    featured: v.boolean(),
    bestSeller: v.boolean(),
    wholesaleEligible: v.boolean(),
    status: v.union(v.literal("draft"), v.literal("active"), v.literal("archived")),
    createdAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_status", ["status"])
    .index("by_best_seller", ["bestSeller", "status"]),

  newsletterSubscribers: defineTable({
    email: v.string(),
    firstName: v.optional(v.string()),
    source: v.string(),
    consent: v.boolean(),
    status: v.union(v.literal("subscribed"), v.literal("unsubscribed")),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  wholesaleInquiries: defineTable({
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    businessName: v.string(),
    website: v.optional(v.string()),
    country: v.string(),
    storeType: v.optional(v.string()),
    message: v.string(),
    status: v.union(
      v.literal("new"),
      v.literal("reviewing"),
      v.literal("approved"),
      v.literal("declined"),
    ),
    createdAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_status", ["status"]),
});
