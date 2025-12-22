import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

import { getImageUrl } from "../lib/sanity/image";
import type { Project } from "../lib/sanity/types";

const cardClassName =
  "bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300";
const badgeClassName =
  "px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20";
const linkClassName =
  "text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Projects({ projects }: { projects: Project[] }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">
        <span className="text-primary font-mono">03.</span> Projects
      </h2>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {projects.length === 0 ? (
          <p className="text-muted-foreground">No projects available.</p>
        ) : (
          projects.map((project) => (
            <article key={project.title} className={cardClassName}>
              {project.image ? (
                <Image
                  src={getImageUrl(project.image, 600, 400)}
                  alt={`${project.title} image`}
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg object-cover mb-4 bg-secondary/30"
                  sizes="(min-width: 768px) 600px, 100vw"
                />
              ) : null}

              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span key={`${project.title}-${t}`} className={badgeClassName}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-4">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                ) : null}
                {project.external ? (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClassName}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                ) : null}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
