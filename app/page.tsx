import AnimatedBackground from "../components/animated-background";
import About from "../components/about";
import Certifications from "../components/certifications";
import Contact from "../components/contact";
import Experience from "../components/experience";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import BlogPreview from "../components/blog-preview";
import Projects from "../components/projects";
import Speaking from "../components/speaking";

import { sanityFetch } from "../lib/sanity/fetch";
import {
  blogPostsQuery,
  certificationsQuery,
  experiencesQuery,
  personalInfoQuery,
  projectsQuery,
  speakingQuery,
} from "../lib/sanity/queries";
import type {
  BlogPost,
  Certification,
  Experience as ExperienceData,
  PersonalInfo,
  Project,
  Speaking as SpeakingData,
} from "../lib/sanity/types";

export default async function Home() {
  const fallbackPersonalInfo = {
    name: "Portfolio",
    role: "Developer",
    intro: "Loading...",
    bio: [],
    skills: [],
  } satisfies Partial<PersonalInfo>;

  let personalInfo: PersonalInfo;
  let projects: Project[] = [];
  let experiences: ExperienceData[] = [];
  let certifications: Certification[] = [];
  let speaking: SpeakingData[] = [];
  let blogPosts: BlogPost[] = [];

  try {
    const [
      fetchedPersonalInfo,
      fetchedProjects,
      fetchedExperiences,
      fetchedCertifications,
      fetchedSpeaking,
      fetchedBlogPosts,
    ] = await Promise.all([
        sanityFetch<PersonalInfo>({ query: personalInfoQuery, tags: ["personalInfo"] }).catch(
          () => null,
        ),
        sanityFetch<Project[]>({ query: projectsQuery, tags: ["projects"] }).catch(() => []),
        sanityFetch<ExperienceData[]>({ query: experiencesQuery, tags: ["experiences"] }).catch(() => []),
        sanityFetch<Certification[]>({ query: certificationsQuery, tags: ["certifications"] }).catch(
          () => [],
        ),
        sanityFetch<SpeakingData[]>({ query: speakingQuery, tags: ["speaking"] }).catch(() => []),
        sanityFetch<BlogPost[]>({
          query: blogPostsQuery,
          params: { offset: 0, pageSize: 3 },
          tags: ["blog-posts"],
        }).catch(() => []),
      ]);

    personalInfo = (fetchedPersonalInfo ?? fallbackPersonalInfo) as PersonalInfo;

    projects = fetchedProjects ?? [];
    experiences = fetchedExperiences ?? [];
    certifications = fetchedCertifications ?? [];
    speaking = fetchedSpeaking ?? [];
    blogPosts = fetchedBlogPosts ?? [];
  } catch (error) {
    console.error("Failed to fetch data:", error);
    personalInfo = fallbackPersonalInfo as PersonalInfo;
  }

  const recentPosts = blogPosts;

  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      <div className="relative z-10">
        <section id="home" className="py-32 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Hero data={personalInfo} />
          </div>
        </section>

        <section id="about" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <About data={personalInfo} />
          </div>
        </section>

        <section id="experience" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Experience experiences={experiences} />
          </div>
        </section>

        <section id="projects" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Projects projects={projects} />
          </div>
        </section>

        <section id="certifications" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Certifications certifications={certifications} />
          </div>
        </section>

        <section id="speaking" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Speaking talks={speaking} />
          </div>
        </section>

        <section id="blog" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <BlogPreview posts={recentPosts} />
          </div>
        </section>

        <section id="contact" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <Contact />
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
