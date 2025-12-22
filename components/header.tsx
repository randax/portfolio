"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Speaking", id: "speaking" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

function getLinkClassName(isActive: boolean) {
  return [
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    isActive ? "text-primary" : "text-muted-foreground hover:text-primary",
  ].join(" ");
}

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const isBlogRoute = pathname === "/blog" || pathname.startsWith("/blog/");
  const isBlogActive = isBlogRoute || activeSection === "blog";

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length === 0) return;

        visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        setActiveSection(visible[0].target.id);
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    for (const section of sections) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#home"
            className="font-mono font-bold text-xl text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Go to Home"
          >
            oyr
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <span key={item.id}>
                {item.id === "blog" ? (
                  <Link href="/blog" className={getLinkClassName(isBlogActive)}>
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={`#${item.id}`}
                    className={getLinkClassName(!isBlogRoute && activeSection === item.id)}
                  >
                    {item.label}
                  </a>
                )}
              </span>
            ))}
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-border bg-background/40 p-2 text-foreground transition-colors hover:bg-secondary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div
        className={[
          "fixed inset-0 bg-background z-40 md:hidden transition-transform duration-300",
          isMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none",
        ].join(" ")}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="h-full w-full px-6 py-24" onClick={(e) => e.stopPropagation()}>
          <nav className="flex flex-col items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <span key={item.id} className="text-2xl">
                {item.id === "blog" ? (
                  <Link
                    href="/blog"
                    className={getLinkClassName(isBlogActive)}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={`#${item.id}`}
                    className={getLinkClassName(!isBlogRoute && activeSection === item.id)}
                    tabIndex={isMenuOpen ? 0 : -1}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
