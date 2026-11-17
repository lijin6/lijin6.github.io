# Tensorboy

前端开发、AI 应用与计算机视觉作品集。
Frontend, applied AI, and computer vision portfolio.

[中文主页](https://lijin6.github.io/) · [English homepage](https://lijin6.github.io/?lang=en)

## 本地开发 / Local development

使用 Node.js 22.12+，在仓库根目录运行以下命令。
Use Node.js 22.12+ and run these commands from the repository root.

~~~sh
npm ci
npm run dev
~~~

通过 Vite 输出的地址打开本地预览。英文版可用 `?lang=en` 直达，浅色主题使用蓝色，深色主题使用紫色。
Open the URL printed by Vite. Add `?lang=en` to open English directly. The light theme uses blue accents and the dark theme uses purple.

## 组件与状态 / Components and state

- `site/main.jsx` 用同一份项目和论文数据渲染两个语言版本，项目卡片和论文条目各自接收数据与当前语言。
- `site/style.css` 通过 CSS 自定义属性定义主题配色，通过网格调整不同屏幕上的卡片布局。
- 语言状态与 URL 同步，主题偏好保存在浏览器中。切换时保留当前页面锚点。

Project cards and publication rows receive content and language as props. CSS custom properties drive both themes. The URL stores the language, and local storage remembers the theme.

## 发布 / Deploy

~~~sh
npm run build
~~~

构建生成根目录的 `index.html` 和 `portfolio/` 静态资源。提交源码和生成文件到 `main`，沿用现有 GitHub Pages 发布配置。
The build writes the root `index.html` and static assets under `portfolio/`. Commit source and build output to `main` for the existing GitHub Pages deployment.

项目配图来自 Fashion AI 仓库和裂缝检测论文图 13。
Project visuals come from the [Fashion AI repository](https://github.com/lijin6/fashion-ai-system/blob/main/map/main_ui.png) and [Scientific Reports, Figure 13](https://pmc.ncbi.nlm.nih.gov/articles/PMC13377178/figure/Fig13/) ([CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)).
