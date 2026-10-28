import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <a href="#home" className="footer-name">{profile.name}</a>
          <p>Building reliable systems, one engineering decision at a time.</p>
        </div>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          {profile.showEmail && <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={18} /></a>}
          <a href="#home" aria-label="Back to top"><ArrowUp size={18} /></a>
        </div>
        <small>© {new Date().getFullYear()} {profile.name}. Built with React and Vite.</small>
      </div>
    </footer>
  );
}