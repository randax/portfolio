import { Calendar, FileText, MapPin, Mic2, Video } from "lucide-react";

import type { Speaking } from "../lib/sanity/types";

const cardClassName =
  "bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300";
const linkClassName =
  "text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Speaking({ talks }: { talks: Speaking[] }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">
        <span className="text-primary font-mono">05.</span> Speaking
      </h2>

      <div className="mt-8 space-y-6">
        {talks.length === 0 ? (
          <p className="text-muted-foreground">No speaking engagements available.</p>
        ) : (
          talks.map((talk) => (
            <article key={talk.title} className={cardClassName}>
              <h3 className="text-xl font-semibold">{talk.title}</h3>

              <div className="flex items-center gap-2 text-primary mt-2">
                <Mic2 className="w-4 h-4" />
                <span className="font-medium">{talk.event}</span>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mt-2">
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {talk.location}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {talk.date}
                </span>
              </div>

              <p className="mt-3 leading-relaxed text-muted-foreground">{talk.description}</p>

              {talk.videoLink || talk.slidesLink ? (
                <div className="mt-4 flex flex-wrap gap-4">
                  {talk.videoLink ? (
                    <a
                      href={talk.videoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClassName}
                    >
                      <Video className="w-4 h-4" />
                      Video
                    </a>
                  ) : null}
                  {talk.slidesLink ? (
                    <a
                      href={talk.slidesLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={linkClassName}
                    >
                      <FileText className="w-4 h-4" />
                      Slides
                    </a>
                  ) : null}
                </div>
              ) : null}
            </article>
          ))
        )}
      </div>
    </div>
  );
}
