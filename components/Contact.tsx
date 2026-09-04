import Link from "next/link";
import { profile } from "@/lib/content";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="section__inner">
        <Reveal>
          <div className="contact-panel">
            <div>
              <p className="section__eyebrow">Contact</p>
              <h2>Let’s talk</h2>
              <p>
                Open to conversations about frontend work, product teams, and
                interesting problems. Reach out by WhatsApp, email, or find me
                online.
              </p>
              <ul className="socials">
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-actions">
              <a
                className="btn btn--solid"
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
              <a className="btn btn--outline" href={`mailto:${profile.email}`}>
                Email me
              </a>
              <Link className="btn btn--outline" href="/cv/">
                Open CV
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
