"use client";

import Image from "next/image";
import { type MouseEvent, useEffect, useId, useRef } from "react";

type ShowcaseDialogProps = {
  closeLabel: string;
  copy: string;
  details: readonly string[];
  image: string;
  imageAlt: string;
  kicker: string;
  number: number;
  onClose: () => void;
  title: string;
};

export function ShowcaseDialog({
  closeLabel,
  copy,
  details,
  image,
  imageAlt,
  kicker,
  number,
  onClose,
  title,
}: ShowcaseDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  function closeDialog() {
    dialogRef.current?.close();
  }

  function handleBackdropClick(event: MouseEvent<HTMLDialogElement>) {
    if (event.target === event.currentTarget) closeDialog();
  }

  return (
    <dialog
      className="showcase-dialog"
      ref={dialogRef}
      aria-labelledby={titleId}
      onClick={handleBackdropClick}
      onClose={onClose}
    >
      <div className="showcase-dialog-panel">
        <button
          className="showcase-dialog-close"
          type="button"
          aria-label={closeLabel}
          onClick={closeDialog}
        >
          <span aria-hidden="true">×</span>
        </button>
        <div className="showcase-dialog-copy">
          <p className="section-kicker">
            {kicker} · {String(number).padStart(2, "0")}
          </p>
          <h2 id={titleId}>{title}</h2>
          <p>{copy}</p>
          <ul>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
        <div className="showcase-dialog-phone">
          <Image
            src={image}
            width={1260}
            height={2736}
            alt={imageAlt}
          />
        </div>
      </div>
    </dialog>
  );
}
