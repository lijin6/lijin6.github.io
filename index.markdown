---
layout: default
---

<!-- 暗黑玻璃导航 -->
<div class="glass-nav dark">
  <a href="#about">关于我</a>
  <a href="#projects">项目经历</a>
  <a href="#research">研究方向</a>
  <a href="#tools">工具收藏</a>
  <a href="https://blog.csdn.net/weixin_70043030" target="_blank" rel="noopener noreferrer">博客</a>
</div>

<section id="about">
  <h2 class="section-title">🙋‍♂️ 关于我</h2>
  <div class="tech-card dark-card">
    <p><b>{{ site.description }}</b></p>
    <p>
      一名持续学习中的 AI 应用开发者。  
      日常使用 <b>Python / Java / Go</b> 做后端服务开发，  
      同时也热爱 <b>React</b> 与前端工程实践。
    </p>
    <p>
      喜欢研究 RAG、Agent 工作流，以及如何把 AI 真正落地到业务和移动端应用中。  
      记录学习过程，也分享实践心得。
    </p>
    <div class="social-links">
      <a class="blog-link"
        href="https://blog.csdn.net/weixin_70043030"
        target="_blank"
        rel="noopener noreferrer">
        ✍ 技术博客 · CSDN →
      </a>
    </div>
  </div>
</section>

<section id="projects">
  <h2 class="section-title">🚀 项目实践</h2>
  <div class="card-grid">

    <!-- FaceExtension -->
    <div class="tech-card dark-card">
      <h3>FaceExtension</h3>
      <div class="tags">
        <span class="tag">React</span>
        <span class="tag">AI CV</span>
      </div>
      <p>
        一个基于浏览器的人脸识别插件实践项目。  
        探索前端侧推理优化与实时特征比对，
        研究 Web 端 AI 推理性能瓶颈。
      </p>
      <a class="repo-link"
         href="https://github.com/lijin6/FaceExtension"
         target="_blank"
         rel="noopener noreferrer">
        GitHub · FaceExtension →
      </a>
    </div>

    <!-- HiResInfer-YOLO -->
    <div class="tech-card dark-card">
      <h3>HiResInfer-YOLO</h3>
      <div class="tags">
        <span class="tag">PyTorch</span>
        <span class="tag">模型优化</span>
      </div>
      <p>
        高分辨率图像目标检测实验项目。  
        优化推理流程，改进推理效率与输出质量。
      </p>
      <a class="repo-link"
         href="https://github.com/lijin6/HiResInfer-YOLO"
         target="_blank"
         rel="noopener noreferrer">
        GitHub · HiResInfer-YOLO →
      </a>
    </div>

    <!-- WeedDetectionApp -->
    <div class="tech-card dark-card">
      <h3>WeedDetectionApp</h3>
      <div class="tags">
        <span class="tag">Android</span>
        <span class="tag">TFLite</span>
      </div>
      <p>
        边缘侧 AI 应用尝试。  
        将视觉模型集成至移动端，
        探索离线轻量化推理方案。
      </p>
      <a class="repo-link"
         href="https://github.com/lijin6/WeedDetectionApp"
         target="_blank"
         rel="noopener noreferrer">
        GitHub · WeedDetectionApp →
      </a>
    </div>

    <!-- Game-Hub -->
    <div class="tech-card dark-card">
      <h3>Game-Hub</h3>
      <div class="tags">
        <span class="tag">React</span>
        <span class="tag">TypeScript</span>
      </div>
      <p>
        前端工程实践项目。  
        专注组件结构设计与交互体验优化。
      </p>
      <a class="repo-link"
         href="https://github.com/lijin6/Game-Hub"
         target="_blank"
         rel="noopener noreferrer">
        GitHub · Game-Hub →
      </a>
    </div>

  </div>
</section>

<section id="research">
  <h2 class="section-title">🔬 研究与学习方向</h2>
  <div class="card-grid">

    <div class="tech-card dark-card">
      <h4>AI 应用 & RAG</h4>
      <p>
        学习 RAG 系统搭建与优化，  
        关注 Agent 工作流设计，探索 ReACT 与 Plan-Execute 模式。
      </p>
    </div>

    <div class="tech-card dark-card">
      <h4>前端工程</h4>
      <p>
        深入理解 React 生态与工程化实践，  
        研究组件架构、性能优化与现代 UI 设计。
      </p>
    </div>

    <div class="tech-card dark-card">
      <h4>安卓应用开发</h4>
      <p>
        探索 Android 原生开发与 AI 模型集成，  
        关注移动端推理与边缘计算实践。
      </p>
    </div>

    <div class="tech-card dark-card">
      <h4>后端与微服务</h4>
      <p>
        使用 Python / Go 构建轻量级服务，  
        关注 API 设计、系统稳定性与高可用架构。
      </p>
    </div>

  </div>
</section>

<section id="tools">
  <h2 class="section-title">🛠️ 工具收藏</h2>
  <div class="card-grid">

    <div class="tech-card dark-card">
      <h4>Networking</h4>
      <div class="tags">
        <span class="tag">frp（内网穿透）</span>
        <span class="tag">Clash（规则代理）</span>
      </div>
      <p>用于跨网络调试与服务联调。</p>
    </div>

    <div class="tech-card dark-card">
      <h4>System & DevOps</h4>
      <div class="tags">
        <span class="tag">Kali Linux（安全学习）</span>
        <span class="tag">Docker（环境管理）</span>
      </div>
      <p>帮助构建稳定、安全的开发环境。</p>
    </div>

  </div>
</section>
