import React, { useState } from 'react';
import Icon from './Icon';
import { tracks } from '../data/technology';

export default function TechnologyMap({ english }) {
  const language = Number(english);
  const [{ trackIndex, nodeIndex }, select] = useState({ trackIndex: 0, nodeIndex: 0 });
  const track = tracks[trackIndex];
  const node = track.nodes[nodeIndex];
  const title = (item) => Array.isArray(item.title) ? item.title[language] : item.title;
  return (
    <section id="technology" className="section technology-section" aria-labelledby="technology-title">
      <h2 id="technology-title" className="icon-label"><Icon name="network" />{english ? 'Technology map' : '技术图谱'}</h2>
      <div className="technology-card">
        <div className="track-controls" role="group" aria-label={english ? 'Technical areas' : '技术方向'}>
          {tracks.map((item, index) => (
            <button type="button" key={item.id} aria-pressed={index === trackIndex}
              onClick={() => select({ trackIndex: index, nodeIndex: 0 })}>
              <Icon name={item.icon} />{item.name[language]}
            </button>
          ))}
        </div>
        <div className="map-board">
          <div className="map-root"><Icon name={track.icon} />{track.name[language]}</div>
          <ul className="map-nodes" aria-label={english ? 'Projects and papers' : '项目与论文'}>
            {track.nodes.map((item, index) => (
              <li key={item.href}>
                <button type="button" aria-pressed={index === nodeIndex}
                  onClick={() => select({ trackIndex, nodeIndex: index })}>
                  <Icon name={item.paper ? 'paper' : 'code'} />
                  <span>{title(item)}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="map-detail" aria-live="polite">
          <p className="stack">{node.tag}</p>
          <h3>{title(node)}</h3>
          <p className="map-description">{node.detail[language]}</p>
          <a className="text-link icon-label" href={node.href}>
            {node.paper ? (english ? 'Read paper' : '阅读论文') : (english ? 'View repository' : '查看仓库')} <Icon name="link" />
          </a>
        </div>
      </div>
    </section>
  );
}
