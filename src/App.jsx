import React from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Braces, Boxes, CheckCircle2,
  Cloud, Code2, Database, Github, Linkedin, Mail, Phone, Network, Server, ShieldCheck,
  Terminal, Workflow, Zap
} from "lucide-react";
import Navbar from "./components/Navbar";
import SectionHeading from "./components/SectionHeading";
import TagList from "./components/TagList";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";
import { profile, skills, experience, projects, principles, learning } from "./data/portfolio";

const featuredProjects = projects.filter((project) => project.featured);
const otherProjects = projects.filter((project) => !project.featured);

function ContactLink({ href, icon: Icon, label, external = false }) {
  return (
    <a className="contact-link" href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <span className="contact-icon"><Icon size={18} /></span>
      <span>{label}</span>
      <ArrowUpRight className="contact-arrow" size={17} />
    </a>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero section-pad" id="home">
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="availability"><span className="status-dot" /> Backend engineering · {profile.location}</div>
              <p className="eyebrow">Hello, I'm {profile.name}</p>
              <h1>Backend engineering with <span>systems thinking.</span></h1>
              <p className="hero-description">{profile.intro}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
                <a className="button button-secondary" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
              </div>
              <div className="hero-facts">
                <div><strong>{profile.experience}</strong><span>Backend development</span></div>
                <div><strong>API → Systems</strong><span>Engineering focus</span></div>
                <div><strong>Node.js / TS</strong><span>Primary stack</span></div>
              </div>
            </div>
            <div className="hero-visual" aria-label="Abstract backend architecture illustration">
              <div className="visual-glow" />
              <div className="architecture-window">
                <div className="window-top"><span /><span /><span /><small>system.map</small></div>
                <div className="architecture-canvas">
                  <div className="arch-node arch-client"><Code2 size={17} /><span>API client</span></div>
                  <div className="arch-line line-one" />
                  <div className="arch-node arch-api"><Server size={18} /><span>API layer</span></div>
                  <div className="arch-line line-two" />
                  <div className="arch-node arch-service"><Workflow size={18} /><span>Services</span></div>
                  <div className="arch-branches">
                    <div className="arch-node arch-db"><Database size={18} /><span>Data</span></div>
                    <div className="arch-node arch-cloud"><Cloud size={18} /><span>External APIs</span></div>
                  </div>
                  <div className="arch-caption"><span className="status-dot" /> Clear contracts. Observable behaviour.</div>
                </div>
              </div>
              <div className="floating-chip chip-top"><Network size={15} /> Distributed systems</div>
              <div className="floating-chip chip-bottom"><Zap size={15} /> Performance-minded</div>
            </div>
          </div>
          <a className="scroll-cue" href="#about"><span>Scroll to explore</span><ArrowDown size={15} /></a>
        </section>

        <section className="section-pad about-section" id="about">
          <div className="container">
            <SectionHeading eyebrow="01 / About" title="Beyond the endpoint." description="I care about what happens before, during, and after an API request." />
            <div className="about-grid">
              <div className="about-main">
                <p className="about-lead">I’m a backend developer interested in the engineering decisions that make systems dependable.</p>
                <p>My work has involved travel technology, supplier integrations, backend APIs, search infrastructure, caching, and database-backed workflows. These problems have pushed me to think about service boundaries, data contracts, query behaviour, external dependency failures, and maintainability—not only the happy path.</p>
                <p>I’m continuing to deepen my skills in distributed systems, system design, cloud architecture, security, and production reliability. My goal is to grow into an engineer who can reason about complete backend systems and explain the trade-offs behind their design.</p>
              </div>
              <div className="about-aside">
                <div className="aside-icon"><Braces size={22} /></div>
                <p className="eyebrow">Engineering principle</p>
                <blockquote>“Good backend engineering is the balance between correctness, reliability, performance, and maintainability.”</blockquote>
                <span className="aside-rule" />
                <p className="muted">A practical mindset shaped by integration-heavy backend work.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad skills-section" id="skills">
          <div className="container">
            <SectionHeading eyebrow="02 / Technical toolkit" title="Tools I work with." description="A practical overview of my current stack. Experience depth varies by technology." />
            <div className="skills-grid">
              {skills.map((skill, i) => (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-card-top"><span className="skill-index">0{i + 1}</span><ArrowUpRight size={17} /></div>
                  <h3>{skill.title}</h3>
                  <p>{skill.note}</p>
                  <TagList items={skill.items} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad experience-section" id="experience">
          <div className="container">
            <SectionHeading eyebrow="03 / Experience" title="Learning through real systems." description="My professional experience across backend applications and integration-heavy travel technology." />
            <div className="timeline">
              {experience.map((job, index) => (
                <article className="timeline-item" key={job.company}>
                  <div className="timeline-marker"><span>{index === 0 ? "01" : "02"}</span></div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <div><h3>{job.role}</h3><p className="company">{job.company}</p></div>
                      <span className="period">{job.period}</span>
                    </div>
                    <p className="job-summary">{job.summary}</p>
                    <ul className="check-list">{job.bullets.map((bullet) => <li key={bullet}><CheckCircle2 size={16} /> <span>{bullet}</span></li>)}</ul>
                    <TagList items={job.tags} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad projects-section" id="projects">
          <div className="container">
            <SectionHeading eyebrow="04 / Selected work" title="Problems, patterns, and trade-offs." description="Case studies based on the backend systems and project areas I've worked with. Expand a card to explore the problem and engineering approach." />
            <div className="projects-grid">
              {featuredProjects.map((project) => <ProjectCard key={project.number} project={project} featured />)}
            </div>
            <div className="more-projects-heading"><span>More project areas</span><span className="thin-line" /></div>
            <div className="projects-grid projects-grid-secondary">
              {otherProjects.map((project) => <ProjectCard key={project.number} project={project} />)}
            </div>
            <p className="project-disclaimer">Project descriptions are intentionally written without confidential implementation details or unverified performance claims. Some sections describe engineering considerations rather than asserting that every listed pattern is deployed in production.</p>
          </div>
        </section>

        <section className="section-pad approach-section" id="approach">
          <div className="container">
            <SectionHeading eyebrow="05 / Engineering approach" title="How I think about backend systems." description="The principles I use to evaluate implementation and architecture choices." />
            <div className="principles-grid">
              {principles.map((principle, index) => {
                const icons = [Boxes, ShieldCheck, Zap, Database, Network, CheckCircle2];
                const Icon = icons[index];
                return <article className="principle-card" key={principle.title}>
                  <span className="principle-icon"><Icon size={20} /></span>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </article>;
              })}
            </div>
            <div className="learning-panel">
              <div className="learning-intro">
                <span className="learning-symbol"><Terminal size={21} /></span>
                <p className="eyebrow">Continuous development</p>
                <h3>What I'm strengthening next.</h3>
                <p>My focus is on connecting foundational knowledge to practical implementation, tests, and measurable outcomes.</p>
              </div>
              <ul className="learning-list">
                {learning.map((item) => <li key={item}><ArrowRight size={16} />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section className="section-pad contact-section" id="contact">
          <div className="container contact-container">
            <div className="contact-copy">
              <p className="eyebrow">06 / Contact</p>
              <h2>Let's talk about <span>backend engineering.</span></h2>
              <p>I'm interested in backend platforms, API integrations, distributed systems, and technically challenging problems where reliability and maintainability matter.</p>
              <div className="contact-location"><span className="status-dot" /> {profile.location}</div>
            </div>
            <div className="contact-card">
              {profile.showEmail && <ContactLink href={`mailto:${profile.email}`} icon={Mail} label={profile.email} />}
              {profile.phone && <ContactLink href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} icon={Phone} label={profile.phone} />}
              <ContactLink href={profile.github} icon={Github} label="GitHub profile" external />
              <ContactLink href={profile.linkedin} icon={Linkedin} label="LinkedIn profile" external />
              {profile.resume && <ContactLink href={profile.resume} icon={ArrowDown} label="Download resume" />}
              <p className="contact-placeholder-note">Replace the sample contact links with your own details before publishing.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}