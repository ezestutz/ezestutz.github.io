import Link from "next/link";
import { profile } from "@/lib/content";
import {
  IconFile,
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
  IconMail,
  IconWhatsApp,
} from "./icons";
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
                    <IconLinkedIn />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconGitHub />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={profile.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconInstagram />
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
                <IconWhatsApp />
                WhatsApp
              </a>
              <a className="btn btn--outline" href={`mailto:${profile.email}`}>
                <IconMail />
                Email me
              </a>
              <Link className="btn btn--outline" href="/cv/">
                <IconFile />
                Open CV
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
