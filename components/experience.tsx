import type { Experience } from "../lib/sanity/types";

const cardClassName =
  "bg-secondary/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300";
const badgeClassName =
  "px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20";

export default function Experience({ experiences }: { experiences: Experience[] }) {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">
        <span className="text-primary font-mono">02.</span> Experience
      </h2>

      <div className="mt-8 space-y-8">
        {experiences.length === 0 ? (
          <p className="text-muted-foreground">No experience data available</p>
        ) : (
          experiences.map((exp) => (
            <article key={`${exp.company}-${exp.role}`} className={cardClassName}>
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <div className="mt-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="text-primary">{exp.role}</span>
                <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
              </div>

              <p className="mt-3 leading-relaxed text-muted-foreground">{exp.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {exp.skills.map((skill) => (
                  <span key={`${exp.company}-${skill}`} className={badgeClassName}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
