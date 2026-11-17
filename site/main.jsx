import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import fashionImage from './media/fashion.png';
import crackImage from './media/cracks.png';

const github = 'https://github.com/lijin6';
const scholar = 'https://scholar.google.com/citations?user=vxZJk_MAAAAJ&hl=en';
const projects = [
  {
    name: ['Fashion AI 服饰属性分析系统', 'Fashion AI · Clothing Attribute Analysis'],
    repo: 'fashion-ai-system',
    media: { src: fashionImage, alt: ['Fashion AI 上传与分析界面', 'Fashion AI upload and analysis interface'] },
    stack: 'React / TypeScript / Tailwind CSS / FastAPI',
    detail: [
      '实现拖拽上传、分析状态反馈和移动端布局，对接 FastAPI 推理接口展示服饰属性，支持登录注册。',
      'Built drag-and-drop uploads, inference feedback, and responsive layouts. Connected the interface to a FastAPI service for clothing attribute predictions and authentication.',
    ],
  },
  {
    name: ['Game Hub 游戏目录', 'Game Hub · Game Discovery'],
    repo: 'game-hub',
    stack: 'React / TypeScript / Vite / Chakra UI',
    detail: [
      '实现关键词搜索、类型和平台筛选及排序，统一管理查询状态，针对不同屏幕调整布局。',
      'Implemented search, genre and platform filters, and sorting with shared query state and a responsive layout.',
    ],
  },
  {
    name: ['HiResInfer-YOLO 高分辨率裂缝检测', 'HiResInfer-YOLO · UAV Crack Detection'],
    repo: 'HiResInfer-YOLO',
    media: {
      src: crackImage,
      alt: ['原图、标注与裂缝检测结果对比', 'Comparison of source image, annotations, and crack detection results'],
      source: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13377178/figure/Fig13/',
    },
    stack: 'PyTorch / YOLOv12 / ONNX',
    detail: [
      '负责无人机裂缝检测实验、模型代码实现和论文撰写，完成 ONNX 导出与推理部署。',
      'Ran UAV crack detection experiments, implemented model code, contributed to manuscript writing, and exported the model to ONNX for inference deployment.',
    ],
  },
];

const papers = [
  {
    year: '2026', venue: 'Scientific Reports', role: ['第一作者', 'First author'],
    title: 'Precision detection of miniature dam cracks with a multi-scale enhanced YOLO framework for UAV inspection',
    doi: '10.1038/s41598-026-52557-w',
  },
  {
    year: '2024', venue: 'ACM EITCE', role: ['第四作者', 'Fourth author'],
    title: 'Research on the Detection Methods for Changes in the Mangroves of Dongzhaigang, Hainan from 2019 to 2023',
    doi: '10.1145/3711129.3711158',
  },
  {
    year: '2025', venue: 'SSRN', role: ['第二作者 · 预印本', 'Second author · Preprint'],
    title: 'Small-Scale Fire Detection for Drone-Based Remote Sensing Applications Using an Enhanced Deep Learning Framework',
    doi: '10.2139/ssrn.5804452',
  },
];

function currentLanguage() {
  return new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'zh';
}

function Project({ project, english }) {
  const index = Number(english);
  return (
    <article className={project.media ? "project" : "project project-wide"}>
      {project.media && (
        <figure>
          <a href={project.media.src}><img src={project.media.src} alt={project.media.alt[index]} loading="lazy" /></a>
          {project.media.source && <figcaption>
            <a href={project.media.source}>Scientific Reports (2026), Fig. 13</a>
            {' · '}<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>
          </figcaption>}
        </figure>
      )}
      <div className="project-body">
      <p className="stack">{project.stack}</p>
      <h3><a href={github + '/' + project.repo}>{project.name[index]}</a></h3>
      <p>{project.detail[index]}</p>
      <a className="text-link" href={github + '/' + project.repo} aria-label={project.name[index] + ' · GitHub'}>
        GitHub <span aria-hidden="true">↗</span>
      </a>
      </div>
    </article>
  );
}

function Publication({ paper, english }) {
  return (
    <article className="paper">
      <span className="year">{paper.year}</span>
      <div>
        <p className="paper-meta">{paper.venue} <span>·</span> {paper.role[Number(english)]}</p>
        <h3><a href={'https://doi.org/' + paper.doi} lang="en">{paper.title} <span aria-hidden="true">↗</span></a></h3>
      </div>
    </article>
  );
}

function App() {
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
            <div className="projects">{[projects[0], projects[2], projects[1]].map(project => <Project key={project.repo} project={project} english={english} />)}</div>
          </section>
          <section id="publications" className="section">
            <div className="section-heading">
              <h2>{t('论文与预印本', 'Publications & preprint')}</h2>
              <a className="text-link" href={scholar}>Google Scholar ↗</a>
            </div>
            <div className="papers">{papers.map(paper => <Publication key={paper.doi} paper={paper} english={english} />)}</div>
          </section>
        </main>
      </div>
      <footer className="shell">© Tensorboy</footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
