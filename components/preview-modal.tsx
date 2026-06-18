'use client';

import { useRef } from 'react';
import Image from 'next/image';

interface PreviewModalProps {
  src: string;
  label?: string;
  width?: number;
  height?: number;
}

export function PreviewModal({
  src,
  label = 'Ver exemplo',
  width = 800,
  height = 480,
}: PreviewModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const open = () => dialogRef.current?.showModal();
  const close = () => dialogRef.current?.close();

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) close();
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        className="preview-modal-trigger"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        {label}
      </button>

      <dialog
        ref={dialogRef}
        onClick={handleBackdropClick}
        className="preview-modal-dialog"
      >
        <div className="preview-modal-content">
          <button
            type="button"
            onClick={close}
            aria-label="Fechar"
            className="preview-modal-close"
          >
            ×
          </button>
          <Image
            src={src}
            alt="Preview da tela gerada pelo poui-specialist"
            width={width}
            height={height}
            className="preview-modal-image"
            unoptimized
          />
        </div>
      </dialog>

      <style>{`
        .preview-modal-trigger {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 10px;
          padding: 6px 14px;
          border-radius: 6px;
          border: 1px solid var(--color-fd-border, #353535);
          background: transparent;
          color: var(--color-fd-muted-foreground, #888);
          font-size: 13px;
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
        }
        .preview-modal-trigger:hover {
          background: var(--color-fd-accent, #252525);
          color: var(--color-fd-foreground, #e0e0e0);
        }
        .preview-modal-dialog {
          border: 1px solid #2a2a2a;
          border-radius: 10px;
          background: #1a1a1a;
          padding: 0;
          max-width: 90vw;
          max-height: 90vh;
          overflow: hidden;
        }
        .preview-modal-dialog::backdrop {
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(3px);
        }
        .preview-modal-dialog[open] {
          animation: preview-modal-in 0.15s ease;
        }
        @keyframes preview-modal-in {
          from { opacity: 0; transform: scale(0.97); }
          to   { opacity: 1; transform: scale(1); }
        }
        .preview-modal-content {
          position: relative;
        }
        .preview-modal-close {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: rgba(0, 0, 0, 0.55);
          color: #fff;
          font-size: 18px;
          line-height: 1;
          cursor: pointer;
          transition: background 0.15s;
        }
        .preview-modal-close:hover {
          background: rgba(0, 0, 0, 0.8);
        }
        .preview-modal-image {
          display: block;
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </>
  );
}
