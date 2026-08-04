import Image from "next/image";
import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section" id="about">
      <div className="section__inner about">
        <Reveal className="about__portrait">
          <Image
            src="/images/avatar.jpeg"
            alt={`Portrait of ${profile.name}`}
            width={640}
            height={800}
            sizes="(max-width: 900px) 100vw, 40vw"
          />
        </Reveal>
        <Reveal className="about__copy">
          <p className="section__eyebrow">About</p>
          <h2>Curious builder.</h2>
          {profile.about.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
          <ul className="skills" aria-label="Skills">
            {profile.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
