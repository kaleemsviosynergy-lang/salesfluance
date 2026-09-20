"use client";

import * as React from "react";
import { Check, Link2, Share2 } from "lucide-react";

interface ShareArticleProps {
  url: string;
  title: string;
}

const buttonClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 transition-colors hover:border-cyan-400/40 hover:bg-cyan-50/20 hover:text-slate-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2";

const primaryButtonClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-4 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2";

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 shrink-0">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function copyWithSelectionFallback(text: string): boolean {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  textarea.setSelectionRange(0, text.length);

  let succeeded = false;
  try {
    succeeded = document.execCommand("copy");
  } catch {
    succeeded = false;
  }

  document.body.removeChild(textarea);
  return succeeded;
}

export default function ShareArticle({ url, title }: ShareArticleProps) {
  const [canNativeShare, setCanNativeShare] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    setCanNativeShare(typeof navigator !== "undefined" && typeof navigator.share === "function");

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const linkedInHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const xHref = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
  const whatsAppHref = `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`;

  async function handleNativeShare() {
    try {
      await navigator.share({ title, url });
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
    }
  }

  async function handleCopy() {
    let succeeded = false;

    if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(url);
        succeeded = true;
      } catch {
        succeeded = false;
      }
    }

    if (!succeeded) {
      succeeded = copyWithSelectionFallback(url);
    }

    if (!succeeded) return;

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section aria-labelledby="share-article-heading" className="px-6 pb-16 lg:px-8 lg:pb-20">
      <div className="mx-auto max-w-2xl border-t border-slate-200 pt-8">
        <h2
          id="share-article-heading"
          className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500"
        >
          Share this article
        </h2>

        <div className="mt-5 flex flex-wrap gap-3">
          {canNativeShare && (
            <button
              type="button"
              onClick={handleNativeShare}
              aria-label="Share this article using your device's share menu"
              className={primaryButtonClasses}
            >
              <Share2 aria-hidden="true" className="h-4 w-4 shrink-0" />
              Share
            </button>
          )}

          <a
            href={linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on LinkedIn (opens in a new tab)"
            className={buttonClasses}
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href={xHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on X (opens in a new tab)"
            className={buttonClasses}
          >
            <XIcon />X
          </a>

          <a
            href={whatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Share on WhatsApp (opens in a new tab)"
            className={buttonClasses}
          >
            <WhatsAppIcon />
            WhatsApp
          </a>

          <button
            type="button"
            onClick={handleCopy}
            aria-label="Copy link to this article"
            className={buttonClasses}
          >
            {copied ? (
              <Check aria-hidden="true" className="h-4 w-4 shrink-0 text-cyan-600" />
            ) : (
              <Link2 aria-hidden="true" className="h-4 w-4 shrink-0" />
            )}
            {copied ? "Copied" : "Copy link"}
          </button>
        </div>

        <span role="status" aria-live="polite" className="sr-only">
          {copied ? "Link copied to clipboard" : ""}
        </span>
      </div>
    </section>
  );
}
