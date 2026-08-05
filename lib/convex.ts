import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { fallbackHomepageData, type HomepageData } from "@/lib/sample-data";

export async function getHomepageData(): Promise<HomepageData> {
  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!convexUrl) return fallbackHomepageData;

  try {
    const client = new ConvexHttpClient(convexUrl);
    const data = await client.query(api.storefront.homepage, {});
    if (!data.collections.length || !data.bestSellers.length) return fallbackHomepageData;
    return data as HomepageData;
  } catch {
    return fallbackHomepageData;
  }
}
