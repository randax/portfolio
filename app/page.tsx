import AnimatedBackground from "../components/animated-background";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <AnimatedBackground />
      <Header />

      <div className="relative z-10">
        <section id="home" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Home</h1>
            <p className="mt-4 text-muted-foreground">Hero section placeholder</p>
          </div>
        </section>

        <section id="about" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight">About</h2>
            <p className="mt-3 text-muted-foreground">About section placeholder</p>
          </div>
        </section>

        <section id="experience" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight">Experience</h2>
            <p className="mt-3 text-muted-foreground">Experience section placeholder</p>
          </div>
        </section>

        <section id="projects" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-3 text-muted-foreground">Projects section placeholder</p>
          </div>
        </section>

        <section id="certifications" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight">Certifications</h2>
            <p className="mt-3 text-muted-foreground">Certifications section placeholder</p>
          </div>
        </section>

        <section id="speaking" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight">Speaking</h2>
            <p className="mt-3 text-muted-foreground">Speaking section placeholder</p>
          </div>
        </section>

        <section id="contact" className="py-20 px-6 scroll-mt-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
            <p className="mt-3 text-muted-foreground">Contact section placeholder</p>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
