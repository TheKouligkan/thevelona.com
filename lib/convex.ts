import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { fallbackHomepageData, type HomepageData } from "@/lib/sample-data";

const CACHE_DURATION = 5 * 60 * 1000;
const FALLBACK_CACHE_DURATION = 60 * 1000;
const QUERY_TIMEOUT = 1_500;
let homepageCache: { data: HomepageData; expiresAt: number } | undefined;

async function withTimeout<T>(promise: Promise<T>, timeout: number): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeoutPromise = new Promise<T>((_, reject) => {
    timer = setTimeout(() => reject(new Error("Convex query timed out")), timeout);
  });

  try {
    return await Promise.race([promise, timeoutPromise]);
  } finally {
    if (timer) clearTimeout(timer);
  }
}

export async function getHomepageData(): Promise<HomepageData> {
  if (homepageCache && homepageCache.expiresAt > Date.now()) return homepageCache.data;

  const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL;

  if (!convexUrl) return fallbackHomepageData;

  try {
    const client = new ConvexHttpClient(convexUrl);
    const data = await withTimeout(client.query(api.storefront.homepage, {}), QUERY_TIMEOUT);
    if (!data.collections.length || !data.bestSellers.length) {
      homepageCache = { data: fallbackHomepageData, expiresAt: Date.now() + FALLBACK_CACHE_DURATION };
      return homepageCache.data;
    }
    homepageCache = { data: data as HomepageData, expiresAt: Date.now() + CACHE_DURATION };
    return homepageCache.data;
  } catch {
    homepageCache = { data: fallbackHomepageData, expiresAt: Date.now() + FALLBACK_CACHE_DURATION };
    return homepageCache.data;
  }
}
