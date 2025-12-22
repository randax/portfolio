import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { getImageUrl } from "../lib/sanity/image";
import type { Certification } from "../lib/sanity/types";

const cardClassName =
  "bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300";
const linkClassName =
  "text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Certifications({ certifications }: { certifications: Certification[] }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">
        <span className="text-primary font-mono">04.</span> Certifications
      </h2>

      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.length === 0 ? (
          <p className="text-muted-foreground">No certifications available.</p>
        ) : (
          certifications.map((cert) => (
            <article key={cert.name} className={cardClassName}>
              {cert.badge ? (
                <Image
                  src={getImageUrl(cert.badge, 96, 96)}
                  alt={`${cert.name} badge`}
                  width={96}
                  height={96}
                  className="w-24 h-24 rounded-lg object-contain mx-auto mb-4 bg-secondary/30"
                  sizes="96px"
                />
              ) : (
                <div
                  className="w-24 h-24 rounded-lg bg-secondary/30 mx-auto mb-4"
                  aria-hidden="true"
                />
              )}

              <h3 className="text-lg font-semibold text-center">{cert.name}</h3>
              <p className="text-sm text-muted-foreground text-center">{cert.issuer}</p>
              <p className="text-xs text-muted-foreground font-mono text-center mt-2">{cert.date}</p>

              {cert.link ? (
                <div className="mt-4 flex justify-center">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </a>
                </div>
              ) : null}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
