# Tensorboy

前端开发、AI 应用与计算机视觉作品集。
Frontend, applied AI, and computer vision portfolio.

[English homepage](https://lijin6.github.io/) · [中文主页](https://lijin6.github.io/?lang=zh)

## 本地开发 / Local development

使用 Node.js 22.12+，在仓库根目录运行以下命令。
Use Node.js 22.12+ and run these commands from the repository root.

~~~sh
npm ci
npm run dev
~~~

通过 Vite 输出的地址打开本地预览。默认使用英文，中文版可用 `?lang=zh` 直达，浅色主题使用蓝色，深色主题使用紫色。
Open the URL printed by Vite. English is the default. Add `?lang=zh` to open Chinese directly. The light theme uses blue accents and the dark theme uses purple.

## 组件与状态 / Components and state

- `site/src/` 包含入口、页面、组件和数据。项目与论文信息位于 `site/src/data/portfolio.js`，卡片位于 `site/src/components/`。
- `site/style.css` 通过 CSS 自定义属性定义主题配色，通过网格调整不同屏幕上的卡片布局。
- 语言状态与 URL 同步，主题偏好保存在浏览器中。切换时保留当前页面锚点。

Project cards and publication rows receive content and language as props. CSS custom properties drive both themes. The URL stores the language, and local storage remembers the theme.

## 发布 / Deploy

~~~sh
npm run build
~~~

构建生成根目录的 `index.html` 和 `portfolio/` 静态资源。提交源码和生成文件到 `main`，沿用现有 GitHub Pages 发布配置。
The build writes the root `index.html` and static assets under `portfolio/`. Commit source and build output to `main` for the existing GitHub Pages deployment.

## 配图 / Image sources

- [Fashion AI](https://github.com/lijin6/fashion-ai-system) 的分析界面与技术面板。
- [Game Hub](https://github.com/lijin6/game-hub) 的本地截图（示例数据，封面来自 Steam）。
- 裂缝检测项目使用提供的框架图，并链接到论文 [Figure 14](https://pmc.ncbi.nlm.nih.gov/articles/PMC13377178/figure/Fig14/)（CC BY 4.0）。
- 裂缝论文使用 [Figure 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13377178/figure/Fig2/)（CC BY 4.0），红树林论文使用提供的东寨港研究区图，火情论文使用 [NASA Earth Observatory](https://science.nasa.gov/earth/earth-observatory/the-perry-fire-by-day-and-night-92514/) 的佩里山火主题配图。
- 头像来自 [GitHub 个人资料](https://github.com/lijin6)。

## 学习路线图 / Learning map

`site/src/data/technology.js` 定义工程与语言、AI 与视觉两个分支，以及节点之间的关联。选择节点可以查看说明和原始链接。
