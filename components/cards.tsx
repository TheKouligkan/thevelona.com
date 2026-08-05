import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { formatPrice, type StoreCollection, type StoreProduct } from "@/lib/sample-data";

export function CollectionCard({ collection, index = 0 }: { collection: StoreCollection; index?: number }) {
  return (
    <article className={`collection-card collection-card-${(index % 3) + 1}`}>
      <Link href={`/collections/${collection.slug}`} aria-label={`Explore ${collection.name}`}>
        <div className="collection-image-wrap">
          <Image src={collection.image} alt={`${collection.name} collection by VELONA`} className="collection-image" fill sizes="(max-width: 760px) 88vw, 33vw" />
          <span className="collection-index" aria-hidden="true">0{index + 1}</span>
          <span className="collection-arrow"><ArrowUpRight aria-hidden="true" /></span>
        </div>
        <div className="collection-meta">
          <p className="eyebrow">{collection.eyebrow}</p>
          <h3>{collection.name}</h3>
          <p>{collection.description}</p>
        </div>
      </Link>
    </article>
  );
}

export function ProductCard({ product }: { product: StoreProduct }) {
  return (
    <article className="product-card">
      <Link href={`/collections/${product.category.toLowerCase()}`} aria-label={`View ${product.name}`}>
        <div className="product-image-wrap">
          <Image src={product.image} alt={`${product.name} in ${product.color}`} className="product-image" fill sizes="(max-width: 760px) 78vw, (max-width: 1050px) 45vw, 25vw" />
          <span className="product-tag">{product.note ?? "Handmade"}</span>
          <span className="product-view">Discover <ArrowUpRight aria-hidden="true" /></span>
        </div>
        <div className="product-meta">
          <div>
            <p className="product-category"><span>{product.category}</span><i aria-hidden="true" /><span>{product.color}</span></p>
            <h3>{product.name}</h3>
          </div>
          <p className="product-price">{formatPrice(product.price, product.currency)}</p>
        </div>
      </Link>
    </article>
  );
}
