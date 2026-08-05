"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { LazyVideo } from "@/components/lazy-video";

const worldPosts = [
  { kind: "image", src: "/velona/blue-bag.jpg", alt: "VELONA blue crochet shoulder bag at a neighbourhood market", label: "Street style / Bags" },
  { kind: "video", src: "/velona/jacket-motion.mp4", poster: "/velona/jacket-detail.jpg", alt: "VELONA crochet jacket moving in the city", label: "In motion / Jacket" },
  { kind: "image", src: "/velona/fringe-bag.jpg", alt: "Floral VELONA fringe bag styled with black", label: "Signature / Fringe" },
  { kind: "image", src: "/velona/craft-squares.jpg", alt: "Ivory and cocoa crochet squares in the VELONA studio", label: "At the table / Making" },
  { kind: "video", src: "/velona/clutch-motion.mp4", poster: "/velona/clutch-emerald.jpg", alt: "Emerald VELONA clutch turning in morning light", label: "In motion / Clutch" },
  { kind: "image", src: "/velona/bag-cocoa.jpg", alt: "Cocoa crochet bag styled with denim and a trench coat", label: "Out and about / Bags" },
  { kind: "image", src: "/velona/jacket-brown.jpg", alt: "Brown and ivory VELONA crochet jacket worn outdoors", label: "Our girls / Jacket" },
  { kind: "video", src: "/velona/swim-motion.mp4", poster: "/velona/swim-detail.jpg", alt: "Colourful VELONA crochet swimwear details", label: "Summer notes / Swim" },
  { kind: "image", src: "/velona/clutch-ivory.jpg", alt: "Ivory handmade VELONA clutch", label: "Made slowly / Clutch" },
  { kind: "image", src: "/velona/beach-tote.jpg", alt: "Ivory VELONA crochet tote carried over sunlit rocks by the sea", label: "By the sea / Bags" },
] as const;

export function InstagramReel() {
  const reelRef = useRef<HTMLDivElement>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);

  useEffect(() => {
    const reel = reelRef.current;
    if (!reel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setIsNearViewport(true);
        observer.disconnect();
      },
      { rootMargin: "600px" },
    );

    observer.observe(reel);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="world-reel" aria-label="A moving edit from VELONA on Instagram" ref={reelRef}>
      <div className={`world-track ${isNearViewport ? "is-running" : ""}`}>
        {[0, ...(isNearViewport ? [1] : [])].map((setIndex) => (
          <div className="world-set" key={setIndex} aria-hidden={setIndex === 1}>
            {worldPosts.map((post, index) => (
              <a
                className="world-card"
                href="https://www.instagram.com/velona_crochet/"
                target="_blank"
                rel="noreferrer"
                key={`${setIndex}-${post.src}`}
                tabIndex={setIndex === 1 ? -1 : undefined}
                aria-label={`${post.label} on VELONA Instagram`}
              >
                <span className="world-media">
                  {post.kind === "image" ? (
                    <Image src={post.src} alt={setIndex === 0 ? post.alt : ""} fill sizes="(max-width: 760px) 58vw, 20vw" fetchPriority="low" />
                  ) : (
                    <LazyVideo src={post.src} poster={post.poster} label={setIndex === 0 ? post.alt : undefined} />
                  )}
                  <span className="world-post-mark" aria-hidden="true">{post.kind === "video" ? "Reel" : "Post"}</span>
                </span>
                <span className="world-caption"><small>{String(index + 1).padStart(2, "0")}</small>{post.label}</span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
