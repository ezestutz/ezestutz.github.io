import { experience } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section className="section" id="work">
      <div className="section__inner">
        <Reveal>
          <header className="section__head">
            <p className="section__eyebrow">Experience</p>
            <h2>Where I’ve been building</h2>
            <p className="section__intro">
              A path from municipal software and internships to large frontend
              teams shipping production apps every day.
            </p>
          </header>
        </Reveal>

        <div className="work-list">
          {experience.map((role) => (
            <Reveal key={role.title}>
              <article className="role">
                <div className="role__meta">
                  <h3>{role.title}</h3>
                  <span className="role__when">{role.when}</span>
                </div>
                <p>{role.body}</p>
                <div className="role__links">
                  {role.links.map((link) => (
                    <a
                      key={link.href}
                      className={`btn ${link.solid ? "btn--solid" : "btn--outline"}`}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
