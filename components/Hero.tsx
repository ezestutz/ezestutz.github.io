import Image from "next/image";
import Link from "next/link";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" aria-label="Introduction" id="top">
      <div className="hero__media" aria-hidden="true">
        <Image
          src="/images/about.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div className="hero__shade" />
      </div>
      <div className="hero__content">
        <p className="hero__label">{profile.role}</p>
        <h1>{profile.name}</h1>
        <p className="hero__lead">{profile.lead}</p>
        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            See my work
          </a>
          <Link className="btn btn--ghost" href="/cv/">
            View CV
          </Link>
        </div>
      </div>
    </section>
  );
}
