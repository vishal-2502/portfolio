import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { profile } from "../data/portfolio";

const links = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Experience", "#experience"],
  ["Projects", "#projects"],
  ["Approach", "#approach"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label={`${profile.name} home`}>
          <span className="brand-mark">VC</span>
          <span className="brand-copy">{profile.name}<small>Backend Engineering</small></span>
        </a>
        <button className="menu-toggle icon-button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={() => setOpen(false)}>Let's connect <ArrowUpRight size={15} /></a>
        </div>
      </nav>
    </header>
  );
}