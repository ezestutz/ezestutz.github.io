import { profile } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>&copy; {profile.name}.</p>
        <p>{profile.role}</p>
      </div>
    </footer>
  );
}
