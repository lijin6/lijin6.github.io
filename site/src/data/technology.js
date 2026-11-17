const repo = (name) => 'https://github.com/' + name;
const doi = (id) => 'https://doi.org/' + id;

export const blog = 'https://blog.csdn.net/weixin_70043030';

export const tracks = [
  {
    id: 'frontend', icon: 'code', name: ['前端工程', 'Frontend'],
    nodes: [
      { title: 'Game Hub', tag: 'React · TypeScript', detail: ['把搜索、类型筛选、平台筛选和排序整理为一套查询状态，再用可复用组件渲染结果。', 'Search, genre and platform filters, and sorting share a query state that drives reusable result components.'], href: repo('lijin6/game-hub') },
      { title: 'Tensorboy', tag: 'React · Vite', detail: ['个人主页用数据驱动项目卡片和论文条目，语言跟随 URL，主题按照浏览器偏好切换。', 'Project and paper cards are data-driven. Language follows the URL and theme preferences are saved locally.'], href: repo('lijin6/lijin6.github.io') },
    ],
  },
  {
    id: 'applied', icon: 'layers', name: ['AI 应用', 'Applied AI'],
    nodes: [
      { title: 'Fashion AI', tag: 'React · FastAPI', detail: ['将图片上传、推理接口和属性结果串成可浏览的 Web 流程。', 'Connects image upload, a model inference API, and clothing attribute results in one web workflow.'], href: repo('lijin6/fashion-ai-system') },
      { title: 'HiResInfer-YOLO', tag: 'PyTorch · ONNX', detail: ['把高分辨率裂缝检测实验延伸到切片推理和 ONNX 部署。', 'Extends high-resolution crack detection experiments to tiled inference and ONNX deployment.'], href: repo('lijin6/HiResInfer-YOLO') },
    ],
  },
  {
    id: 'systems', icon: 'layers', name: ['后端与技术支持', 'Backend & technical support'],
    nodes: [
      { title: ['Go 简历解析', 'Go résumé parser'], tag: 'Go · PDF', detail: ['用 Go 搭建 PDF 简历解析 Web 应用，借助大模型提取不同版式中的简历信息。', 'A Go web app that uses a language model to extract information from PDF résumés with different layouts.'], href: repo('lijin6/Resume-parse') },
      { title: 'Linux-Note', tag: 'Linux · Docker · Kubernetes', detail: ['整理 Linux、Shell 和容器工具的学习与实践笔记。', 'Notes on Linux, shell scripting, and container tooling.'], href: repo('lijin6/Linux-Note') },
    ],
  },
  {
    id: 'research', icon: 'scan', name: ['视觉与遥感研究', 'Vision & remote sensing'],
    nodes: [
      { title: 'HiResDC-YOLO', tag: 'Scientific Reports', paper: true, detail: ['结合改进的 YOLOv12 和高分辨率切片推理，检测无人机图像中的细小裂缝。', 'Pairs an improved YOLOv12 model with high-resolution sliced inference for fine cracks in UAV imagery.'], href: doi('10.1038/s41598-026-52557-w') },
      { title: ['红树林变化检测', 'Mangrove change detection'], tag: 'ACM EITCE', paper: true, detail: ['用卫星影像、光谱指数和分类方法研究东寨港红树林变化。', 'Studies changes in the Dongzhai Harbour mangroves using satellite imagery, spectral indices, and classification.'], href: doi('10.1145/3711129.3711158') },
      { title: ['无人机火情检测', 'UAV fire detection'], tag: 'SSRN', paper: true, detail: ['用多尺度注意力与差分增强改进 YOLOv8，对遥感图像中的小尺度火情进行检测。', 'Enhances YOLOv8 with multi-scale attention and difference enhancement for small-scale fire detection.'], href: doi('10.2139/ssrn.5804452') },
    ],
  },
  {
    id: 'slam', icon: 'scan', name: ['SLAM', 'SLAM'],
    nodes: [
      { title: ['回环优化', 'Loop closure optimization'], tag: 'SLAM', blog: true, detail: ['做过 SLAM 回环优化方向的实践。', 'Past work on loop closure optimization in SLAM.'], href: blog },
    ],
  },
  {
    id: 'evaluation', icon: 'scan', name: ['实验与评估', 'Experimentation'],
    nodes: [
      { title: 'SpecAnomalyEval', tag: 'Python · Hyperspectral', detail: ['2025 年底至 2026 年初做高光谱异常检测。在统一数据和指标下对比多种检测器，输出检测图和指标 CSV。', 'In late 2025 and early 2026, compared hyperspectral anomaly detectors on shared datasets and metrics, with visual outputs and CSV reports.'], href: repo('lijin6/SpecAnomalyEval') },
      { title: 'anomlib_custom', tag: 'Python · Anomalib', detail: ['基于 Anomalib 的异常检测工具仓库。', 'An anomaly-detection tooling repository built on Anomalib.'], href: repo('lijin662/anomlib_custom') },
    ],
  },
];

export const additionalProjects = [
  tracks.find(track => track.id === 'evaluation').nodes[0],
  tracks.find(track => track.id === 'evaluation').nodes[1],
  tracks.find(track => track.id === 'systems').nodes[0],
];
