import React, { useLayoutEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { connections, tracks } from '../data/technology';

const nodes = tracks.flatMap(track => track.nodes);
const edges = [
  ...tracks.flatMap(track => [['root', track.id], ...track.nodes.map(node => [track.id, node.id])]),
  ...connections,
];
const linkLabels = {
  paper: ['阅读论文', 'Read paper'],
  blog: ['技术博客', 'Technical blog'],
  reference: ['查看波段资料', 'Band reference'],
};
const linkLabel = (kind, english) => (linkLabels[kind] ?? ['查看仓库', 'View repository'])[Number(english)];
const nodeTitle = (node, language) => Array.isArray(node.title) ? node.title[language] : node.title;

export default function TechnologyMap({ english }) {
  const language = Number(english);
  const [selected, setSelected] = useState('cv');
  const [expanded, setExpanded] = useState(() => !matchMedia("(max-width: 740px)").matches);
  const [geometry, setGeometry] = useState({ width: 1, height: 1, points: {} });
  const board = useRef(null);
  const node = nodes.find(item => item.id === selected);
  const selectedTrack = tracks.find(track => track.nodes.includes(node));
  const neighbors = new Set(connections.flatMap(([from, to]) => {
    if (from === selected) return [to];
    if (to === selected) return [from];
    return [];
  }));

  useLayoutEffect(() => {
    const container = board.current;
    if (!expanded || !container) return;
    const elements = [...container.querySelectorAll('[data-graph-point]')];
    function measure() {
      const bounds = container.getBoundingClientRect();
      const points = Object.fromEntries(elements.map(element => {
        const box = element.getBoundingClientRect();
        return [element.dataset.graphPoint, [box.left + box.width / 2 - bounds.left, box.top + box.height / 2 - bounds.top]];
      }));
      setGeometry({ width: bounds.width, height: bounds.height, points });
    }
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    container.querySelectorAll('.map-group, .graph-node').forEach(element => observer.observe(element));
    measure();
    return () => observer.disconnect();
  }, [english, expanded]);

  return (
    <section id="technology" className="section technology-section" aria-labelledby="technology-title">
      <div className="section-heading graph-heading">
        <h2 id="technology-title" className="icon-label"><Icon name="network" />{english ? 'Learning map' : '学习路线图'}</h2>
        <button type="button" className="icon-label" aria-expanded={expanded} aria-controls="learning-map-content" onClick={() => setExpanded(value => !value)}>
          <Icon name={expanded ? 'collapse' : 'expand'} />
          {expanded ? (english ? 'Collapse' : '收起') : (english ? 'Expand' : '展开')}
        </button>
      </div>
      <p className="graph-summary">{english ? 'I research computer vision and deploy models to the web and mobile devices.' : '我研究计算机视觉，并将模型部署到 Web 和移动端。'}</p>
      <div className="technology-card">
        <div className="map-detail" aria-live="polite">
          <p className="stack">{node.id === 'cv' ? (english ? 'First author · Scientific Reports' : '第一作者 · Scientific Reports') : node.tag}</p>
          <h3>{nodeTitle(node, language)}</h3>
          <p className="map-description">{node.detail[language]}</p>
          <div className="map-detail-links">
            {node.href && <a className="map-action map-action-primary icon-label" href={node.href}>
              {linkLabel(node.kind, english)} <Icon name="link" />
            </a>}
            {node.code && <a className="map-action map-action-secondary icon-label" href={node.code}>
              <Icon name="github" />{english ? 'View code' : '查看项目代码'}
            </a>}
          </div>
        </div>
        <div id="learning-map-content" hidden={!expanded}>
          <div className="map-board" ref={board}>
            <svg className="graph-edges" viewBox={`0 0 ${geometry.width} ${geometry.height}`} aria-hidden="true">
              {edges.map(([from, to]) => {
                const a = geometry.points[from];
                const b = geometry.points[to];
                if (!a || !b) return null;
                const active = from === selected || to === selected || (from === 'root' && to === selectedTrack.id);
                const thematic = connections.some(([start, end]) => start === from && end === to);
                const key = from + '/' + to;
                if (thematic) {
                  const separation = Math.abs(a[0] - b[0]);
                  const curve = Math.min(36, 14 + separation / 10);
                  return <path key={key} className={active ? 'edge-related edge-active' : 'edge-related'}
                    d={`M ${a[0]} ${a[1]} C ${a[0]} ${a[1] + curve}, ${b[0]} ${b[1] + curve}, ${b[0]} ${b[1]}`} />;
                }
                return <line key={key} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className={active ? 'edge-active' : undefined} />;
              })}
            </svg>
            <div className="map-root"><span className="root-dot" data-graph-point="root" />Tensorboy</div>
            <div className="map-groups">
              {tracks.map(track => (
                <section className="map-group" data-active={track.id === selectedTrack.id} key={track.id} aria-labelledby={`map-${track.id}`}>
                  <h3 id={`map-${track.id}`}><span className="root-dot" data-graph-point={track.id} />{track.name[language]}</h3>
                  <ul className="map-nodes">
                    {track.nodes.map(item => (
                      <li key={item.id}>
                        <button className="graph-node" data-related={neighbors.has(item.id)} type="button" aria-pressed={selected === item.id} onClick={() => setSelected(item.id)}>
                          <span className="node-dot" data-graph-point={item.id} />
                          <span className="node-label">{nodeTitle(item, language)}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
          <div className="graph-legend">
            <span><i aria-hidden="true" />{english ? 'Area' : '所属方向'}</span>
            <span><i className="legend-related" aria-hidden="true" />{english ? 'Technology link' : '技术关联'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
