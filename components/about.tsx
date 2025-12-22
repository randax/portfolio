import type { PersonalInfo } from "../lib/sanity/types";

interface AboutProps {
  data: PersonalInfo;
}

const badgeClassName =
  "px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20";

export default function About({ data }: AboutProps) {
  const bio = data.bio ?? [];
  const skills = data.skills ?? [];

  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">
        <span className="text-primary font-mono">01.</span> About Me
      </h2>

      <div className="mt-8 space-y-4">
        {bio.length > 0 ? (
          bio.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="leading-relaxed text-muted-foreground">No bio available.</p>
        )}
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        {skills.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.map((skill) => (
              <span key={skill} className={badgeClassName}>
                {skill}
              </span>
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground">No skills listed.</p>
        )}
      </div>
    </div>
  );
}
