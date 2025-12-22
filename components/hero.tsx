"use client";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

import { getImageUrl } from "../lib/sanity/image";
import type { PersonalInfo } from "../lib/sanity/types";

interface HeroProps {
  data: PersonalInfo;
}

const iconLinkClassName =
  "text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export default function Hero({ data }: HeroProps) {
  const name = data.name ?? "Portfolio";
  const role = data.role ?? "Developer";
  const intro = data.intro ?? "";
  const profileImageUrl = data.profileImage ? getImageUrl(data.profileImage, 256, 256) : null;

  const social = data.social;
  const hasSocial = Boolean(social?.github || social?.linkedin || social?.twitter || social?.email);

  return (
    <div className="grid gap-10 md:grid-cols-[auto,1fr] md:items-center">
      <div className="group relative w-48 h-48 md:w-64 md:h-64 rounded-2xl ring-2 ring-border overflow-hidden bg-secondary/30 mx-auto md:mx-0">
        {profileImageUrl ? (
          <Image
            src={profileImageUrl}
            alt={`${name} profile photo`}
            fill
            sizes="(min-width: 768px) 256px, 192px"
            className="object-cover grayscale transition-[filter] duration-300 group-hover:grayscale-0"
            priority
          />
        ) : (
          <div className="w-full h-full bg-secondary/30" aria-hidden="true" />
        )}
      </div>

      <div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">{name}</h1>
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground">{role}</p>
        {intro ? <p className="mt-6 text-lg leading-relaxed max-w-2xl">{intro}</p> : null}

        {hasSocial ? (
          <div className="mt-8 flex items-center gap-6">
            {social?.github ? (
              <a
                href={social.github}
                aria-label="GitHub Profile"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClassName}
              >
                <Github className="w-5 h-5" />
              </a>
            ) : null}
            {social?.linkedin ? (
              <a
                href={social.linkedin}
                aria-label="LinkedIn Profile"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClassName}
              >
                <Linkedin className="w-5 h-5" />
              </a>
            ) : null}
            {social?.twitter ? (
              <a
                href={social.twitter}
                aria-label="X Profile"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLinkClassName}
              >
                <Twitter className="w-5 h-5" />
              </a>
            ) : null}
            {social?.email ? (
              <a href={social.email} aria-label="Email" className={iconLinkClassName}>
                <Mail className="w-5 h-5" />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  );
}
