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

export type ProductMedia = {
  src: string;
  alt: string;
  kind?: "image" | "video";
  poster?: string;
  position?: string;
  silentLoop?: boolean;
};

export type ProductDetail = StoreProduct & {
  categorySlug: string;
  description: string;
  story: string;
  media: ProductMedia[];
  materials: string[];
  features: string[];
  fit: string;
  care: string[];
  availability: string;
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

export const products: ProductDetail[] = [
  {
    name: "The Ivory Clutch",
    slug: "ivory-clutch",
    image: "/velona/clutch-ivory.jpg",
    category: "Clutch",
    categorySlug: "clutch",
    color: "Ivory",
    currency: "EUR",
    note: "Handmade",
    description: "A softly structured hand-crocheted clutch in warm ivory, shaped to sit naturally in the hand.",
    story: "Quiet in colour and rich in texture, the Ivory Clutch lets the handwork do the talking. Its gathered form is built stitch by stitch, giving every piece its own subtle character.",
    media: [
      { src: "/velona/stitch-closeup.jpg", alt: "Close view of the dense hand-crocheted stitch", position: "center" },
      { src: "/velona/making-tools.jpg", alt: "VELONA crochet tools and handmade pieces at the making table" },
    ],
    materials: ["Soft textile yarn", "Hand-finished structure"],
    features: ["Gathered sculptural silhouette", "Dense tactile stitch", "Made individually by hand"],
    fit: "One size. Final measurements can vary slightly because every clutch is shaped by hand.",
    care: ["Spot clean where possible", "Hand wash gently in cool water", "Reshape and dry flat"],
    availability: "Made to order. Colour and making time are confirmed personally before your order.",
  },
  {
    name: "Botanical Fringe Bag",
    slug: "botanical-fringe",
    image: "/velona/fringe-bag.jpg",
    category: "Fringe",
    categorySlug: "fringe",
    color: "Floral",
    currency: "EUR",
    note: "Limited edition",
    description: "A floral shoulder bag finished with long blush fringe—a statement piece designed to move with you.",
    story: "Botanical pattern, a softly curved shoulder line and dramatic fringe meet in one of VELONA’s most expressive signatures. Each textile placement is considered individually, so no two bags read in exactly the same way.",
    media: [
      { src: "/velona/fringe-display.jpg", alt: "VELONA fringe bags displayed together in the studio", position: "center 52%" },
      { src: "/velona/fringe-bag.jpg", alt: "Close crop of the Botanical Fringe Bag and its long blush fringe", position: "center 72%" },
    ],
    materials: ["Patterned upholstery textile", "Soft interior textile", "Long fringe trim"],
    features: ["Curved shoulder silhouette", "Individually placed botanical pattern", "Hand-finished fringe"],
    fit: "One size, designed to sit close under the shoulder. Final measurements are confirmed with your inquiry.",
    care: ["Store flat with the fringe combed straight", "Spot clean only", "Avoid catching the fringe on jewellery"],
    availability: "Made in very limited quantities according to textile availability.",
  },
  {
    name: "Granny Jacket No. 01",
    slug: "granny-jacket-black",
    image: "/velona/hero-jacket.jpg",
    category: "Jacket",
    categorySlug: "jacket",
    color: "Black / Ivory",
    currency: "EUR",
    note: "One of a kind",
    description: "An expressive black-and-ivory granny-square jacket with soft dimensional accents and a relaxed silhouette.",
    story: "This is the VELONA jacket at its boldest: traditional square construction rebalanced through graphic contrast, generous sleeves and playful texture. Every panel is arranged by eye before the jacket is joined by hand.",
    media: [
      { src: "/velona/jacket-detail.jpg", alt: "Close view of a VELONA granny-square jacket and its handmade joins" },
      { src: "/velona/jacket-motion.mp4", alt: "A VELONA crochet jacket moving in the city", kind: "video", poster: "/velona/jacket-detail.jpg", silentLoop: true },
    ],
    materials: ["Mixed crochet yarns", "Dimensional soft-touch yarn accents"],
    features: ["Hand-arranged granny-square panels", "Relaxed open front", "Generous statement sleeves"],
    fit: "Designed for a relaxed fit. Your measurements and preferred proportions are discussed before making.",
    care: ["Store folded rather than hung", "Hand wash gently in cool water", "Reshape and dry completely flat"],
    availability: "One of a kind in its exact colour arrangement. Similar commissions begin with a conversation.",
  },
  {
    name: "The Blue Shoulder Bag",
    slug: "blue-shoulder-bag",
    image: "/velona/blue-bag.jpg",
    category: "Bags",
    categorySlug: "bags",
    color: "Cobalt",
    currency: "EUR",
    note: "Handmade",
    description: "A generous cobalt shoulder bag made from substantial textile yarn for colour, texture and everyday ease.",
    story: "The Blue Shoulder Bag turns a useful everyday shape into a confident colour statement. Its dense stitches create structure while the broad strap is shaped for a comfortable, relaxed carry.",
    media: [
      { src: "/velona/stitch-closeup.jpg", alt: "Close view of VELONA’s substantial textile-yarn stitch" },
      { src: "/velona/collection-display.jpg", alt: "A selection of VELONA handmade bags displayed together" },
    ],
    materials: ["Substantial textile yarn", "Hand-crocheted strap and body"],
    features: ["Generous everyday capacity", "Broad integrated shoulder strap", "Dense structured stitch"],
    fit: "One size. As a handmade piece, final dimensions may vary slightly.",
    care: ["Avoid overfilling to preserve the shape", "Spot clean or hand wash cool", "Dry flat and store folded"],
    availability: "Made to order in small colour runs. Ask about the cobalt yarn currently available.",
  },
  {
    name: "Summer Crochet Set",
    slug: "summer-crochet-set",
    image: "/velona/swimwear-white.jpg",
    category: "Swimwear",
    categorySlug: "swimwear",
    color: "White",
    currency: "EUR",
    note: "Summer drop",
    description: "A hand-crocheted white two-piece set with delicate ties, made for expressive days in the sun.",
    story: "The Summer Set brings VELONA’s handwork into a lighter rhythm. Every cup, edge and tie is shaped individually, allowing the proportions to be adapted through a personal sizing conversation.",
    media: [
      { src: "/velona/swim-detail.jpg", alt: "VELONA crochet summer pieces presented at a pop-up" },
      { src: "/velona/swim-motion.mp4", alt: "Colourful VELONA crochet swimwear in motion", kind: "video", poster: "/velona/swim-detail.jpg" },
    ],
    materials: ["Crochet yarn selected for the piece", "Hand-finished ties and edges"],
    features: ["Two-piece design", "Adjustable tie details", "Made to your measurements"],
    fit: "Made to measure. We confirm coverage, proportions and tie length before the piece is started.",
    care: ["Rinse promptly after salt water or chlorine", "Hand wash gently in cool water", "Dry flat away from direct heat"],
    availability: "Seasonal and made to order. Current yarn options are shared when you inquire.",
  },
  {
    name: "The Beach Tote",
    slug: "beach-tote",
    image: "/velona/beach-tote.jpg",
    category: "Bags",
    categorySlug: "bags",
    color: "Stone",
    currency: "EUR",
    note: "Everyday carry",
    description: "A roomy stone-toned crochet tote with an easy shoulder shape, made for long summer days and everyday carrying.",
    story: "Designed around usefulness, the Beach Tote pairs a generous body with the unmistakable texture of hand crochet. The neutral colour lets its stitch and silhouette move easily from the coast to the city.",
    media: [
      { src: "/velona/collection-display.jpg", alt: "Handmade VELONA bags arranged at a collection presentation" },
      { src: "/velona/stitch-closeup.jpg", alt: "Close detail of the textile-yarn crochet stitch" },
    ],
    materials: ["Substantial textile yarn", "Hand-crocheted body and handles"],
    features: ["Roomy open silhouette", "Comfortable shoulder handles", "Neutral everyday colour"],
    fit: "One size with natural flexibility. Final measurements can vary slightly from piece to piece.",
    care: ["Shake out sand before storing", "Hand wash gently in cool water", "Reshape and dry flat"],
    availability: "Made in small batches. Ask about the next stone-toned release.",
  },
  {
    name: "Granny Jacket No. 02",
    slug: "granny-jacket-olive",
    image: "/velona/jacket-olive.jpg",
    category: "Jacket",
    categorySlug: "jacket",
    color: "Olive / Blush",
    currency: "EUR",
    note: "One of a kind",
    description: "A relaxed olive granny-square jacket softened with blush and cream—a wearable landscape of colour and texture.",
    story: "Nature leads the palette here. Olive grounds the composition while blush and cream bring lightness to each square. The finished jacket feels collected rather than repeated, with every panel carrying a slightly different rhythm.",
    media: [
      { src: "/velona/craft-squares.jpg", alt: "Hand-crocheted squares waiting to be assembled into a VELONA jacket" },
      { src: "/velona/jacket-motion.mp4", alt: "A handmade VELONA jacket moving outdoors", kind: "video", poster: "/velona/jacket-olive.jpg", silentLoop: true },
    ],
    materials: ["Mixed crochet yarns", "Soft textured accent yarn"],
    features: ["Individual granny-square composition", "Relaxed open silhouette", "Nature-led colour story"],
    fit: "Relaxed fit, adapted to your preferred body and sleeve length before making.",
    care: ["Store folded", "Hand wash gently in cool water", "Press out water without wringing and dry flat"],
    availability: "The exact arrangement is one of a kind. Related olive commissions depend on yarn availability.",
  },
  {
    name: "Cocoa Granny Jacket",
    slug: "cocoa-granny-jacket",
    image: "/velona/jacket-brown.jpg",
    category: "Jacket",
    categorySlug: "jacket",
    color: "Cocoa / Cream",
    currency: "EUR",
    note: "One of a kind",
    description: "A cocoa-and-cream crochet jacket with flower-like squares, tactile edges and an easy oversized attitude.",
    story: "Warm, familiar colours give this jacket its grounded mood. Cream motifs sit against cocoa panels while fuzzy accents soften the geometry—a modern layer built from a deeply traditional language.",
    media: [
      { src: "/velona/jacket-detail.jpg", alt: "Detailed view of the hand-crocheted panels and edging" },
      { src: "/velona/craft-squares.jpg", alt: "Cocoa and cream crochet squares being prepared by hand" },
    ],
    materials: ["Mixed crochet yarns", "Dimensional accent yarn"],
    features: ["Flower-inspired square motifs", "Softly textured edging", "Relaxed statement shape"],
    fit: "Designed oversized. Body, sleeve and overall length are discussed before a related commission.",
    care: ["Store folded to protect the shape", "Hand wash gently in cool water", "Reshape and dry flat"],
    availability: "One of a kind. Similar cocoa colour stories may be commissioned when materials allow.",
  },
  {
    name: "Emerald Soft Clutch",
    slug: "emerald-soft-clutch",
    image: "/velona/clutch-emerald.jpg",
    category: "Clutch",
    categorySlug: "clutch",
    color: "Emerald",
    currency: "EUR",
    note: "New season",
    description: "A compact emerald clutch with a soft gathered silhouette and deeply tactile hand-crocheted surface.",
    story: "Rich emerald makes the small silhouette feel immediate and expressive. The dense stitch gives the piece body while the soft construction keeps it relaxed enough to carry from day into evening.",
    media: [
      { src: "/velona/clutch-motion.mp4", alt: "The Emerald Soft Clutch turning in natural light", kind: "video", poster: "/velona/clutch-emerald.jpg" },
      { src: "/velona/collection-display.jpg", alt: "Small VELONA clutches shown across a wider colour edit" },
    ],
    materials: ["Soft textile yarn", "Hand-finished structure"],
    features: ["Compact gathered shape", "Dense soft-touch stitch", "Handmade in an expressive colour"],
    fit: "One size. Final measurements can vary subtly with the hand-shaped construction.",
    care: ["Spot clean where possible", "Hand wash gently in cool water", "Reshape and dry flat"],
    availability: "Made to order while the emerald yarn is available.",
  },
  {
    name: "Cocoa Everyday Tote",
    slug: "cocoa-everyday-tote",
    image: "/velona/bag-cocoa.jpg",
    category: "Bags",
    categorySlug: "bags",
    color: "Cocoa",
    currency: "EUR",
    note: "One of a kind",
    description: "A soft cocoa crochet tote with an understated shape made to settle naturally into everyday styling.",
    story: "Cocoa brings warmth to a simple, useful silhouette. This tote is intentionally quiet from a distance and full of handworked character up close—the kind of piece that becomes more personal through use.",
    media: [
      { src: "/velona/collection-display.jpg", alt: "A table of VELONA bags and clutches in natural colours" },
      { src: "/velona/stitch-closeup.jpg", alt: "Close view of the substantial hand-crocheted construction" },
    ],
    materials: ["Soft textile yarn", "Hand-crocheted body and strap"],
    features: ["Easy everyday silhouette", "Soft cocoa colour", "Individually made by hand"],
    fit: "One size. The handmade body relaxes naturally with use and may vary slightly in measurement.",
    care: ["Avoid overfilling", "Spot clean or hand wash cool", "Reshape and dry flat"],
    availability: "One of a kind in this exact form. Ask about a related cocoa commission.",
  },
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
  return products.filter((product) => product.categorySlug === slug);
}

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: ProductDetail, limit = 3) {
  const sameCollection = products.filter((item) => item.slug !== product.slug && item.categorySlug === product.categorySlug);
  const otherPieces = products.filter((item) => item.slug !== product.slug && item.categorySlug !== product.categorySlug);
  return [...sameCollection, ...otherPieces].slice(0, limit);
}
