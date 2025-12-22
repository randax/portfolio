import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const contactData = {
  heading: "Let’s build something reliable.",
  description:
    "If you’d like to collaborate on platform engineering, cloud infrastructure, or reliability work, I’m always happy to chat.",
  email: "hello@oyr.dev",
} satisfies {
  heading: string;
  description: string;
  email: string;
};

const socialLinks = {
  github: "https://github.com/oyr",
  linkedin: "https://www.linkedin.com/in/oyr",
  twitter: "https://x.com/oyr",
} as const;

const iconLinkClassName =
  "text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Contact() {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-semibold tracking-tight">
        <span className="text-primary font-mono">07.</span> Get In Touch
      </h2>

      <h3 className="text-3xl md:text-4xl font-bold mb-6 mt-8">{contactData.heading}</h3>
      <p className="text-lg text-muted-foreground leading-relaxed mb-8">{contactData.description}</p>

      <a
        href={`mailto:${contactData.email}`}
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <Mail className="w-5 h-5" />
        Email Me
      </a>

      <div className="mt-10 flex items-center justify-center gap-6">
        <a
          href={socialLinks.github}
          aria-label="GitHub Profile"
          target="_blank"
          rel="noopener noreferrer"
          className={iconLinkClassName}
        >
          <Github className="w-5 h-5" />
        </a>
        <a
          href={socialLinks.linkedin}
          aria-label="LinkedIn Profile"
          target="_blank"
          rel="noopener noreferrer"
          className={iconLinkClassName}
        >
          <Linkedin className="w-5 h-5" />
        </a>
        <a
          href={socialLinks.twitter}
          aria-label="X Profile"
          target="_blank"
          rel="noopener noreferrer"
          className={iconLinkClassName}
        >
          <Twitter className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
