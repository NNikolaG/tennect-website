"use client";

import Image from "next/image";
import { useState } from "react";
import type { SiteContent } from "../i18n";
import { ShowcaseDialog } from "./ShowcaseDialog";

const galleryMedia = [
  "/media/tennect-availability.png",
  "/media/tennect-upcoming-matches.png",
  "/media/tennect-court-search.png",
  "/media/tennect-ranking.png",
  "/media/tennect-tennis-news.png",
] as const;

type GalleryShowcaseProps = {
  closeLabel: string;
  gallery: SiteContent["gallery"];
};

export function GalleryShowcase({
  closeLabel,
  gallery,
}: GalleryShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedItem =
    selectedIndex === null ? null : gallery.items[selectedIndex];
  const selectedImage =
    selectedIndex === null ? null : galleryMedia[selectedIndex];

  return (
    <section className="app-gallery" id="inside-the-app">
      <div className="gallery-heading">
        <div>
          <p className="section-kicker">{gallery.kicker}</p>
          <h2>{gallery.title}</h2>
        </div>
        <p>{gallery.swipe}</p>
      </div>
      <div className="gallery-track">
        {gallery.items.map((item, index) => (
          <figure className="gallery-item" key={item.label}>
            <button
              className="gallery-item-open"
              type="button"
              aria-haspopup="dialog"
              aria-label={`${item.action}: ${item.label}`}
              onClick={() => setSelectedIndex(index)}
            />
            <span>{String(index + 1).padStart(2, "0")}</span>
            <div className="gallery-phone">
              <Image
                src={galleryMedia[index]}
                width={1260}
                height={2736}
                alt={item.alt}
              />
            </div>
            <figcaption>{item.label}</figcaption>
          </figure>
        ))}
      </div>

      {selectedItem && selectedImage && selectedIndex !== null ? (
        <ShowcaseDialog
          closeLabel={closeLabel}
          copy={selectedItem.copy}
          details={selectedItem.details}
          image={selectedImage}
          imageAlt={selectedItem.alt}
          kicker={gallery.kicker}
          number={selectedIndex + 1}
          onClose={() => setSelectedIndex(null)}
          title={selectedItem.label}
        />
      ) : null}
    </section>
  );
}
