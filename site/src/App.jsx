import React, { useEffect, useState } from 'react';
import ProjectCard from './components/ProjectCard';
import PublicationCard from './components/PublicationCard';
import { github, scholar, projects, papers } from './data/portfolio';

function currentLanguage() {
  return new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
}

export default function App() {
  const [lang, setLang] = useState(currentLanguage);
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'light');
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
          <nav aria-label={t('页面导航', 'Page navigation')}>
            <a href="#about">{t('简介', 'About')}</a>
            <a href="#projects">{t('项目', 'Projects')}</a>
            <a href="#publications">{t('论文', 'Publications')}</a>
          </nav>
          <div className="controls">
            <button type="button" onClick={switchLanguage} lang={english ? 'zh-CN' : 'en'}>{t('English', '中文')}</button>
            <button type="button" onClick={switchTheme}>{dark ? t('浅色', 'Light') : t('深色', 'Dark')}</button>
          </div>
        </div>
      </header>
      <div className="shell layout">
        <aside className="profile" aria-label={t('个人资料', 'Profile')}>
          <div className="monogram" aria-hidden="true">T</div>
          <p className="profile-name">Tensorboy</p>
          <p className="affiliation">{t('海南师范大学 · 人工智能方向', 'Hainan Normal University · Artificial Intelligence')}</p>
          <div className="profile-links">
            <a href={github}>GitHub ↗</a>
            <a href={scholar}>Google Scholar ↗</a>
          </div>
        </aside>
        <main id="main">
          <section id="about" className="intro">
            <h1>{t('前端开发与 AI 应用', 'Frontend development & applied AI')}</h1>
            <p>{t(
              '我用 React 和 TypeScript 开发 Web 界面，也用 Python 和 FastAPI 把视觉模型接入应用。科研项目主要关注高分辨率图像检测和遥感视觉，我负责实验、代码实现和论文撰写。',
              'I build web interfaces with React and TypeScript and connect computer vision models to applications with Python and FastAPI. My research focuses on high-resolution detection and remote sensing, where I run experiments, implement code, and write manuscripts.',
            )}</p>
          </section>
          <section id="projects" className="section">
            <h2>{t('代表项目', 'Selected projects')}</h2>
            <div className="projects">{projects.map(project => <ProjectCard key={project.repo} project={project} english={english} />)}</div>
          </section>
          <section id="publications" className="section">
            <div className="section-heading">
              <h2>{t('论文与预印本', 'Publications & preprint')}</h2>
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
