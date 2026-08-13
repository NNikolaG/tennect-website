"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  type MouseEvent,
  type TouchEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

type WalkthroughSlide = {
  alt: string;
  details: readonly string[];
  image: string;
  options?: readonly string[];
  title: string;
};

type Walkthrough = {
  slides: readonly WalkthroughSlide[];
};

type ShowcaseDialogProps = {
  closeLabel: string;
  copy: string;
  details: readonly string[];
  image: string;
  imageAlt: string;
  kicker: string;
  nextSlideLabel?: string;
  number: number;
  onClose: () => void;
  previousSlideLabel?: string;
  slideLabel?: string;
  slideOfLabel?: string;
  title: string;
  walkthrough?: Walkthrough;
};

const swipeThreshold = 45;

export function ShowcaseDialog({
  closeLabel,
  copy,
  details,
  image,
  imageAlt,
  kicker,
  nextSlideLabel = "",
  number,
  onClose,
  previousSlideLabel = "",
  slideLabel = "",
  slideOfLabel = "",
  title,
  walkthrough,
}: ShowcaseDialogProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const titleId = useId();
  const slideCount = 1 + (walkthrough?.slides.length ?? 0);
  const walkthroughSlide = walkthrough?.slides[activeSlide - 1];
  const activeContent = walkthroughSlide
    ? {
        alt: walkthroughSlide.alt,
        copy: null,
        details: walkthroughSlide.details,
        height: 2622,
        image: walkthroughSlide.image,
        options: walkthroughSlide.options,
        title: walkthroughSlide.title,
        width: 1206,
      }
    : {
        alt: imageAlt,
        copy,
        details,
        height: 2736,
        image,
        options: null,
        title,
        width: 1260,
      };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function selectSlide(index: number) {
    setActiveSlide(Math.max(0, Math.min(index, slideCount - 1)));
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeDialog();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (!walkthrough) return;
    if (event.key === "ArrowLeft") selectSlide(activeSlide - 1);
    if (event.key === "ArrowRight") selectSlide(activeSlide + 1);
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartX.current === null || !walkthrough) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const distance = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(distance) < swipeThreshold) return;
    selectSlide(activeSlide + (distance < 0 ? 1 : -1));
  }

  return (
    <dialog
      className={`showcase-dialog${walkthrough ? " showcase-dialog-with-walkthrough" : ""}`}
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={handleBackdropClick}
      onClose={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        className="showcase-dialog-panel"
        onTouchEnd={handleTouchEnd}
        onTouchStart={handleTouchStart}
      >
        <button
          className="showcase-dialog-close"
          type="button"
          aria-label={closeLabel}
          onClick={closeDialog}
        >
          <span aria-hidden="true">×</span>
        </button>

        {walkthrough ? (
          <nav className="showcase-dialog-slider-nav" aria-label={title}>
            <button
              type="button"
              aria-label={previousSlideLabel}
              disabled={activeSlide === 0}
              onClick={() => selectSlide(activeSlide - 1)}
            >
              <span aria-hidden="true">←</span>
            </button>
            <span
              aria-live="polite"
              aria-label={`${slideLabel} ${activeSlide + 1} ${slideOfLabel} ${slideCount}`}
            >
              {activeSlide + 1} / {slideCount}
            </span>
            <button
              type="button"
              aria-label={nextSlideLabel}
              disabled={activeSlide === slideCount - 1}
              onClick={() => selectSlide(activeSlide + 1)}
            >
              <span aria-hidden="true">→</span>
            </button>
          </nav>
        ) : null}

        <div className="showcase-dialog-slide" key={activeSlide}>
          <div className="showcase-dialog-copy">
            <p className="section-kicker">
              {kicker} · {String(number).padStart(2, "0")}
            </p>
            <h2
              className={walkthroughSlide ? "showcase-dialog-walkthrough-title" : undefined}
              id={titleId}
            >
              {activeContent.title}
            </h2>
            {activeContent.copy ? <p>{activeContent.copy}</p> : null}
            {activeContent.options ? (
              <div className="showcase-dialog-options" role="list">
                {activeContent.options.map((option) => (
                  <span key={option} role="listitem">
                    {option}
                  </span>
                ))}
              </div>
            ) : null}
            <ul>
              {activeContent.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
          <div className="showcase-dialog-phone">
            <Image
              src={activeContent.image}
              width={activeContent.width}
              height={activeContent.height}
              alt={activeContent.alt}
              priority={activeSlide > 0}
            />
          </div>
        </div>
      </div>
    </dialog>
  );
}
