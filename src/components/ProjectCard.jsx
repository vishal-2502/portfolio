import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import TagList from "./TagList";

export default function ProjectCard({ project, featured = false }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className={`project-card ${featured ? "project-featured" : ""}`}>
      <div className="project-topline">
        <span className="project-number">{project.number}</span>
        <span className="project-category">{project.category}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="project-summary">{project.summary}</p>
      <TagList items={project.stack} />
      <button className="text-button project-expand" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
        {expanded ? "Hide case study" : "Explore case study"}
        {expanded ? <ChevronUp size={17} /> : <ChevronDown size={17} />}
      </button>
      {expanded && (
        <div className="case-study">
          <div>
            <h4>Problem space</h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4>Approach and considerations</h4>
            <ul>{project.approach.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <h4>Engineering perspective</h4>
            <p>{project.outcome}</p>
          </div>
        </div>
      )}
      <span className="project-corner" aria-hidden="true"><ArrowUpRight size={18} /></span>
    </article>
  );
}