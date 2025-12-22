import type { PortableTextComponents } from "@portabletext/react";
import { ExternalLink } from "lucide-react";
import type { SanityImageSource } from "@sanity/image-url";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

import { getImageUrl } from "@/lib/sanity/image";

type PortableTextCodeBlock = {
  _type: "code";
  language?: string;
  code?: string;
  filename?: string;
};

function isExternalUrl(href: string) {
  return /^https?:\/\//i.test(href);
}

export const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base leading-relaxed mb-4 text-muted-foreground">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-bold mb-4 text-foreground">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg md:text-xl font-semibold mb-3 text-foreground">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-base md:text-lg font-semibold mb-3 text-foreground">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-sm md:text-base font-semibold mb-3 text-foreground">{children}</h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary/40 pl-4 my-6 text-muted-foreground italic">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="my-6 ml-6 list-disc space-y-2 text-muted-foreground">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal space-y-2 text-muted-foreground">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li className="leading-relaxed">{children}</li>,
    number: ({ children }) => <li className="leading-relaxed">{children}</li>,
  },
  marks: {
    code: ({ children }) => (
      <code className="bg-secondary/50 text-primary px-2 py-1 rounded font-mono text-sm">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const href = (value?.href ?? value?.url ?? "") as string;
      const external = isExternalUrl(href);

      return (
        <a
          href={href}
          className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer noopener" : undefined}
        >
          {children}
          {external ? <ExternalLink className="w-4 h-4" aria-hidden="true" /> : null}
        </a>
      );
    },
  },
  types: {
    code: ({ value }) => {
      const codeBlock = value as PortableTextCodeBlock;
      const code = codeBlock.code ?? "";
      const language = codeBlock.language ?? "text";
      const filename = codeBlock.filename;

      if (!code) return null;

      return (
        <div className="my-6">
          <div className="bg-secondary/50 border border-border rounded-lg overflow-hidden">
            {filename ? (
              <div className="px-4 py-2 border-b border-border font-mono text-xs text-muted-foreground">
                {filename}
              </div>
            ) : null}
            <div className="p-4 overflow-x-auto">
              <SyntaxHighlighter
                language={language}
                style={nightOwl}
                customStyle={{ margin: 0, background: "transparent" }}
              >
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      );
    },
    image: ({ value }) => {
      const src = getImageUrl(value as SanityImageSource, 1200);
      const alt = (value?.alt ?? "") as string;

      if (!src) return null;

      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className="my-8 rounded-lg shadow-2xl w-full h-auto"
          loading="lazy"
        />
      );
    },
  },
};
