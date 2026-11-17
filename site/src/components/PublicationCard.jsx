import React from 'react';

export default function PublicationCard({ paper, english }) {
  const index = Number(english);
  const url = 'https://doi.org/' + paper.doi;
  const preview = paper.preview;
  return (
    <article className="paper">
      <a className="paper-preview" href={preview.image} aria-label={preview.label[index]}>
        <img src={preview.image} alt={preview.label[index]} loading="lazy" />
      </a>
      <div>
        <p className="paper-meta">{paper.venue} · {paper.year} · {paper.role[index]}</p>
        <h3><a href={url} lang="en">{paper.title} <span aria-hidden="true">↗</span></a></h3>
        <p className="paper-credit">
          {preview.source ? <a href={preview.source}>{preview.label[index]}{preview.credit && ` · ${preview.credit}`}</a> : preview.label[index]}
          {preview.license && <> · <a href={preview.license}>{english ? 'License' : '许可'}</a></>}
        </p>
      </div>
    </article>
  );
}
