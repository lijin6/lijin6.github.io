import React, { useEffect, useState } from 'react';
import avatar from '../media/github-avatar.png';
import Icon from './components/Icon';
import TechnologyMap from './components/TechnologyMap';
import ProjectCard from './components/ProjectCard';
import PublicationCard from './components/PublicationCard';
import { github, scholar, projects, papers } from './data/portfolio';
import { blog } from './data/technology';

function currentLanguage() {
  return new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
}

export default function App() {
  const [lang, setLang] = useState(currentLanguage);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
  const [section, setSection] = useState(() => location.hash || '#about');
  const english = lang === 'en';
  const dark = theme === 'dark';
  const t = (zh, en) => english ? en : zh;

  useEffect(() => {
    document.documentElement.lang = english ? 'en' : 'zh-CN';
    document.title = t('Tensorboy · 个人主页', 'Tensorboy · Portfolio');
  }, [english]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const syncSection = () => setSection(location.hash || '#about');
    addEventListener('hashchange', syncSection);
    return () => removeEventListener('hashchange', syncSection);
  }, []);

  const navigation = [
    ['#about', 'person', t('简介', 'About')],
    ['#projects', 'code', t('项目', 'Projects')],
    ['#publications', 'paper', t('论文', 'Publications')],
    ['#technology', 'network', t('图谱', 'Map')],
  ];

  function switchLanguage() {
    const url = new URL(location.href);
    if (english) url.searchParams.delete('lang');
    else url.searchParams.set('lang', 'en');
    history.replaceState(null, '', url);
    setLang(currentLanguage());
  }

  function switchTheme() {
    const next = dark ? 'light' : 'dark';
    try { localStorage.setItem('theme', next); } catch {}
    setTheme(next);
  }

  return (
    <>
      <a className="skip" href="#main">{t('跳到正文', 'Skip to content')}</a>
      <header className="top">
        <div className="shell navigation">
          <a className="brand" href={english ? '/?lang=en' : '/'}>Tensorboy</a>
          <nav className="section-nav" aria-label={t('页面导航', 'Page navigation')}>
            {navigation.map(([href, icon, label]) => (
              <a key={href} className="icon-label" href={href} aria-current={section === href ? 'location' : undefined}>
                <Icon name={icon} />{label}
              </a>
            ))}
          </nav>
          <div className="controls">
            <button type="button" className="icon-label" onClick={switchLanguage} lang={english ? 'zh-CN' : 'en'}><Icon name="globe" />{t('English', '中文')}</button>
            <button type="button" className="icon-label" onClick={switchTheme}><Icon name={dark ? "sun" : "moon"} />{dark ? t('浅色', 'Light') : t('深色', 'Dark')}</button>
          </div>
        </div>
      </header>
      <div className="shell layout">
        <aside className="profile" aria-label={t('个人资料', 'Profile')}>
          <a className="profile-photo" href={github} aria-label={t("Tensorboy 的 GitHub", "Tensorboy on GitHub")}><img src={avatar} alt="" width="88" height="88" /></a>
          <p className="profile-name">Tensorboy</p>
          <p className="affiliation">{t('海南师范大学 · 人工智能方向', 'Hainan Normal University · Artificial Intelligence')}</p>
          <section id="about" className="intro">
            <h1>{t('前端开发与 AI 应用', 'Frontend development & applied AI')}</h1>
            <p>{t(
              '我用 React 和 TypeScript 开发 Web 界面，也用 Python 和 FastAPI 把视觉模型接入应用。我有后端开发和技术支持实习经历。目前聚焦计算机视觉，做过遥感图像分析和 SLAM 回环优化。科研项目中主要负责实验、代码实现和论文撰写。',
              'I build web interfaces with React and TypeScript and connect computer vision models to applications with Python and FastAPI. I have interned in backend development and technical support. My current focus is computer vision. I have worked on remote sensing imagery and SLAM loop closure optimization. In research projects, I run experiments, implement code, and write manuscripts.',
            )}</p>
          </section>
          <div className="profile-links">
            <a href={github}>GitHub ↗</a>
            <a href={scholar}>Google Scholar ↗</a>
            <a href={blog}>CSDN ↗</a>
          </div>
        </aside>
        <main id="main">
          <section id="projects" className="section">
            <h2 className="icon-label"><Icon name="code" />{t('代表项目', 'Selected projects')}</h2>
            <div className="projects">{projects.map(project => <ProjectCard key={project.repo} project={project} english={english} />)}</div>
          </section>
          <TechnologyMap english={english} />
          <section id="publications" className="section">
            <div className="section-heading">
              <h2 className="icon-label"><Icon name="paper" />{t('论文与预印本', 'Publications & preprint')}</h2>
              <a className="text-link" href={scholar}>Google Scholar ↗</a>
            </div>
            <div className="papers">{papers.map(paper => <PublicationCard key={paper.doi} paper={paper} english={english} />)}</div>
          </section>
        </main>
      </div>
      <footer className="shell">© Tensorboy</footer>
    </>
  );
}
