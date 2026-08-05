import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { formatPrice, type StoreCollection, type StoreProduct } from "@/lib/sample-data";

export function CollectionCard({ collection, index }: { collection: StoreCollection; index: number }) {
  return (
    <article className={`collection-card collection-card-${index + 1}`}>
      <a href={`#${collection.slug}`} aria-label={`Explore ${collection.name}`}>
        <div className="collection-image-wrap">
          <Image src={collection.image} alt="" className="collection-image" fill sizes="(max-width: 760px) 100vw, 34vw" />
          <span className="collection-arrow"><ArrowUpRight aria-hidden="true" /></span>
        </div>
        <div className="collection-meta">
          <p className="eyebrow">{collection.eyebrow}</p>
          <h3>{collection.name}</h3>
          <p>{collection.description}</p>
        </div>
      </a>
    </article>
  );
}

export function ProductCard({ product }: { product: StoreProduct }) {
  return (
    <article className="product-card">
      <a href={`#${product.slug}`} aria-label={`View ${product.name}`}>
        <div className="product-image-wrap">
          <Image src={product.image} alt={`${product.name} in ${product.color}`} className="product-image" fill sizes="(max-width: 760px) 78vw, (max-width: 1050px) 50vw, 25vw" />
          <span className="product-tag">Handmade</span>
          <span className="product-view">View piece <ArrowUpRight aria-hidden="true" /></span>
        </div>
        <div className="product-meta">
          <div>
            <p className="product-category">{product.category} · {product.color}</p>
            <h3>{product.name}</h3>
          </div>
          <p className="product-price">{formatPrice(product.price, product.currency)}</p>
        </div>
      </a>
    </article>
  );
}
