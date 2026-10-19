import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/content";
import "./cv.css";

export const metadata: Metadata = {
  title: "CV — Ezequiel Stutz Díaz",
  description: "CV — Ezequiel Stutz Díaz, Senior Frontend Software Engineer.",
};

export default function CvPage() {
  return (
    <div className="cv-page">
      <div className="toolbar">
        <Link className="btn btn--outline" href="/">
          ← Back to site
        </Link>
        <div className="toolbar__actions">
          <a
            className="btn btn--solid"
            href="/cv/Ezequiel-Stutz-Diaz-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Save PDF
          </a>
        </div>
      </div>

      <article className="sheet">
        <header className="cv-header">
          <Image
            src="/images/avatar.jpeg"
            alt={profile.name}
            width={110}
            height={110}
          />
          <div>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="summary">
              Senior Frontend Software Engineer building web and mobile products
              with React, Next.js, and React Native. Experienced on large
              collaborative teams and civic software that reaches real users.
            </p>
            <ul className="meta">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/ezestutz
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/ezestutz
                </a>
              </li>
              <li>
                <a href={profile.site} target="_blank" rel="noopener noreferrer">
                  ezestutz.github.io
                </a>
              </li>
            </ul>
          </div>
        </header>

        <div className="cv-body">
          <div>
            <section className="block">
              <h2>Experience</h2>

              <article className="job">
                <div className="job__top">
                  <h3>Senior Frontend Software Engineer — Perficient</h3>
                  <span className="job__when">Feb 2022 — Present</span>
                </div>
                <p>
                  React &amp; Next.js on Caterpillar’s Parts.Cat.Com (PCC)
                  platform, within a global team of ~300 developers.
                </p>
                <ul>
                  <li>
                    Modernize and maintain a large-scale parts-purchasing
                    experience for Caterpillar machinery.
                  </li>
                  <li>
                    Collaborate daily with teammates worldwide on complex
                    frontend delivery.
                  </li>
                </ul>
              </article>

              <article className="job">
                <div className="job__top">
                  <h3>Frontend Developer — Recursiva SRL</h3>
                  <span className="job__when">Jan 2021 — Feb 2022</span>
                </div>
                <p>
                  React web app for online payments; React Native apps for a
                  plant-genetics company group.
                </p>
                <ul>
                  <li>
                    Built and maintained production web and mobile features with
                    cross-functional teams.
                  </li>
                  <li>
                    Strengthened engineering habits through code review,
                    mentoring, and professional delivery practices.
                  </li>
                </ul>
              </article>

              <article className="job">
                <div className="job__top">
                  <h3>Internship — Municipality of Capitán Sarmiento</h3>
                  <span className="job__when">Earlier</span>
                </div>
                <p>
                  Full-stack civic software: public website, WordPress content
                  portals, helpdesk, Android companion app, and emergency
                  alerting.
                </p>
                <ul>
                  <li>
                    Launched the town’s first website (HTML, CSS, Bootstrap, JS,
                    PHP) on AWS EC2 + Apache.
                  </li>
                  <li>
                    Customized osTicket helpdesk and trained agents; shipped
                    “Atención al Vecino” (Android/Java) and “Sarmiento Seguro”
                    (React Native + React/Node monitoring).
                  </li>
                </ul>
              </article>
            </section>

            <section className="block">
              <h2>Selected projects</h2>
              <article className="job">
                <div className="job__top">
                  <h3>Empleos Cahuané</h3>
                  <span className="job__when">Personal</span>
                </div>
                <p>
                  Free local job board and buy/sell marketplace for Capitán
                  Sarmiento and the area.{" "}
                  <a
                    href="https://empleoscahuane.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    empleoscahuane.com
                  </a>
                </p>
              </article>
              <article className="job">
                <div className="job__top">
                  <h3>Parts.Cat.Com (PCC)</h3>
                  <span className="job__when">Perficient</span>
                </div>
                <p>
                  Frontend engineering on Caterpillar’s machinery-parts
                  purchasing platform.{" "}
                  <a
                    href="https://parts.cat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    parts.cat.com
                  </a>
                </p>
              </article>
              <article className="job">
                <div className="job__top">
                  <h3>Capitán Sarmiento digital services</h3>
                  <span className="job__when">Municipality</span>
                </div>
                <p>
                  Public site, WordPress info portal, resident helpdesk, Android
                  access app, and emergency alert system.{" "}
                  <a
                    href="https://capitansarmiento.gob.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    capitansarmiento.gob.ar
                  </a>
                </p>
              </article>
            </section>
          </div>

          <aside className="aside">
            <section className="aside-block">
              <h2>Skills</h2>
              <ul className="chips">
                {[
                  "React",
                  "Next.js",
                  "React Native",
                  "JavaScript",
                  "Node.js",
                  "HTML",
                  "CSS",
                  "PHP",
                  "MySQL",
                  "Jest",
                  "AI",
                  "GitHub Copilot",
                  "WordPress",
                  "Android / Java",
                  "AWS EC2",
                ].map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <section className="aside-block">
              <h2>Education</h2>
              <p>
                Continuous self-directed learning in modern frontend stacks,
                with an extracurricular focus on web development.
              </p>
            </section>

            <section className="aside-block">
              <h2>Languages</h2>
              <ul>
                <li>Spanish — Native</li>
                <li>English — Professional</li>
              </ul>
            </section>

            <section className="aside-block">
              <h2>Interests</h2>
              <p>Astronomy, technology, and science.</p>
            </section>

            <section className="aside-block">
              <h2>Certificates</h2>
              <ul>
                <li>
                  <a href="/cv/react-certificate.pdf" target="_blank">
                    React
                  </a>
                </li>
                <li>
                  <a href="/cv/react-native-certificate-1.pdf" target="_blank">
                    React Native (1)
                  </a>
                </li>
                <li>
                  <a href="/cv/react-native-certificate-2.pdf" target="_blank">
                    React Native (2)
                  </a>
                </li>
              </ul>
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
