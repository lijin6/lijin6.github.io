import React from 'react';
import { github } from '../data/portfolio';

export default function ProjectCard({ project, english }) {
  const index = Number(english);
  const repo = github + '/' + project.repo;
  return (
    <article className="project">
      <figure className="project-preview">
        <a href={project.media.src}><img src={project.media.src} alt={project.media.alt[index]} loading="lazy" /></a>
        {project.media.caption && <figcaption>{project.media.caption[index]}</figcaption>}
        {project.media.source && <figcaption>
          <a href={project.media.source}>Scientific Reports · Fig. 13</a>
          {' · '}<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
        </figcaption>}
      </figure>
      <div className="project-body">
        <p className="stack">{project.stack}</p>
        <h3><a href={repo}>{project.name[index]}</a></h3>
        <p>{project.detail[index]}</p>
        <div className="project-links">
          <a className="text-link" href={repo} aria-label={project.name[index] + ' · GitHub'}>GitHub ↗</a>
          {project.extra && <a className="text-link" href={project.extra.src}>{project.extra.label[index]} ↗</a>}
          {project.extra?.source && <a className="text-link" href={project.extra.source}>Fig. 14 · CC BY 4.0</a>}
        </div>
      </div>
    </article>
  );
}
