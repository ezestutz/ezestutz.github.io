import Image from "next/image";
import { projects } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="section__inner">
        <Reveal>
          <header className="section__head">
            <p className="section__eyebrow">Selected work</p>
            <h2>Projects that put software in people’s hands</h2>
            <p className="section__intro">
              Much of this work started as an internship at the town hall of
              Capitán Sarmiento — civic tools for information, requests, and
              safety.
            </p>
          </header>
        </Reveal>

        <div className="projects">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="project">
                <div className="project__visual">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    width={800}
                    height={600}
                    sizes="(max-width: 900px) 100vw, 45vw"
                  />
                </div>
                <div className="project__body">
                  <h3>{project.title}</h3>
                  <ul className="project__tags">
                    {project.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {project.paragraphs.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                  <a
                    className="btn btn--solid"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.cta}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
