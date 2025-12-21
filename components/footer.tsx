import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {year} oyr. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a
            href="https://github.com/oyr"
            aria-label="GitHub Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/oyr"
            aria-label="LinkedIn Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/oyr"
            aria-label="X Profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <Twitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
