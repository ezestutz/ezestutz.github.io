import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { Work } from "@/components/Work";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#work">
        Skip to content
      </a>
      <SiteNav />
      <main>
        <Hero />
        <Work />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
