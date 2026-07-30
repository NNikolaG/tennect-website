"use client";

import Image from "next/image";
import { useState } from "react";
import type { Locale, SiteContent } from "../i18n";
import { ActionIcon } from "./ActionIcon";
import { ShowcaseDialog } from "./ShowcaseDialog";

const featureMedia = [
  {
    image: "/media/tennect-player-search.png",
    tone: "lime",
  },
  {
    image: "/media/tennect-courts-map.png",
    tone: "clay",
  },
  {
    image: "/media/tennect-match-preview.png",
    tone: "cream",
  },
] as const;

type FeatureShowcaseProps = {
  features: SiteContent["features"];
  dialogKicker: string;
  closeLabel: string;
  locale: Locale;
  openLabel: string;
  sectionLabel: string;
};

export function FeatureShowcase({
  features,
  dialogKicker,
  closeLabel,
  locale,
  openLabel,
  sectionLabel,
}: FeatureShowcaseProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedFeature =
    selectedIndex === null ? null : features[selectedIndex];
  const selectedMedia =
    selectedIndex === null ? null : featureMedia[selectedIndex];

  return (
    <>
      <section className="feature-grid" aria-label={sectionLabel}>
        {features.map((feature, index) => {
          const media = featureMedia[index];
          return (
            <article
              className={`feature-card feature-card-${media.tone}`}
              key={feature.title}
            >
              <button
                className="feature-card-open"
                type="button"
                aria-haspopup="dialog"
                aria-label={`${openLabel}: ${feature.title}`}
                data-analytics-event="select_content"
                data-analytics-content-type="feature_detail"
                data-analytics-content-id={`feature_${String(index + 1).padStart(2, "0")}`}
                data-analytics-locale={locale}
                onClick={() => setSelectedIndex(index)}
              >
                <span className="feature-card-action">
                  <ActionIcon name="details" />
                  <span>{openLabel}</span>
                </span>
              </button>
              <div className="feature-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <p className="card-eyebrow">{feature.eyebrow}</p>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
              <div className="feature-phone">
                <Image
                  src={media.image}
                  width={1260}
                  height={2736}
                  alt={feature.alt}
                />
              </div>
            </article>
          );
        })}
      </section>

      {selectedFeature && selectedMedia && selectedIndex !== null ? (
        <ShowcaseDialog
          closeLabel={closeLabel}
          copy={selectedFeature.copy}
          details={selectedFeature.details}
          image={selectedMedia.image}
          imageAlt={selectedFeature.alt}
          kicker={dialogKicker}
          number={selectedIndex + 1}
          onClose={() => setSelectedIndex(null)}
          title={selectedFeature.title}
        />
      ) : null}
    </>
  );
}
