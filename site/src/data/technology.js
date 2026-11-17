const repo = (name) => 'https://github.com/' + name;
const doi = (id) => 'https://doi.org/' + id;
export const blog = 'https://blog.csdn.net/weixin_70043030';

const parser = { id: 'go', title: 'Go', projectTitle: ['Go 简历解析', 'Go résumé parser'], tag: 'Go · PDF',
  detail: ['用 Go 搭建 PDF 简历解析 Web 应用，借助大模型提取不同版式中的简历信息。', 'Built a Go web app that uses a language model to extract information from PDF résumés.'], href: repo('lijin6/Resume-parse') };
const hyperspectral = { id: 'hyperspectral', title: ['高光谱异常检测', 'Hyperspectral AD'], projectTitle: 'SpecAnomalyEval', tag: 'Python · SpecAnomalyEval',
  detail: ['2025 年底至 2026 年初对比多种高光谱异常检测器，统一输出检测图与评价指标。', 'Compared hyperspectral anomaly detectors in late 2025 and early 2026 and generated visual outputs and metric reports.'], href: repo('lijin6/SpecAnomalyEval') };
const anomalib = { id: 'anomalib', title: 'Anomalib', projectTitle: 'anomlib_custom', tag: 'Python · Anomalib',
  detail: ['基于 Anomalib 整理异常检测实验工具与训练脚本。', 'Anomaly-detection experiment tooling and training scripts built on Anomalib.'], href: repo('lijin662/anomlib_custom') };

export const additionalProjects = [hyperspectral, anomalib, parser];

export const tracks = [
  {
    id: 'engineering', icon: 'code', name: ['工程与语言', 'Engineering & languages'],
    nodes: [
      { id: 'python', title: 'Python', tag: 'Python · FastAPI', detail: ['用于推理接口、模型实验和批量评估。', 'Used for inference APIs, model experiments, and batch evaluation.'], href: repo('lijin6/fashion-ai-system') },
      parser,
      { id: 'rust', title: 'Rust', tag: 'Rust', detail: ['语言学习方向，关注所有权和类型系统。', 'A language learning track focused on ownership and the type system.'] },
      { id: 'react', title: 'React / TS', tag: 'React · TypeScript · Vite', detail: ['用 Game Hub 练习搜索、筛选、排序和响应式组件。', 'Built Game Hub to practice search, filtering, sorting, and responsive components.'], href: repo('lijin6/game-hub') },
      { id: 'fastapi', title: 'FastAPI', tag: 'Python · REST API', detail: ['为 Fashion AI 提供推理接口并与前端联调。', 'Built and integrated the inference API for Fashion AI.'], href: repo('lijin6/fashion-ai-system') },
      { id: 'linux', title: 'Linux', tag: 'Linux · Docker · Kubernetes', detail: ['整理 Linux、Shell 和容器工具的技术支持与运维实践笔记。', 'Notes on Linux, shell scripting, and container tooling.'], href: repo('lijin6/Linux-Note') },
    ],
  },
  {
    id: 'vision', icon: 'scan', name: ['AI 与视觉', 'AI & vision'],
    nodes: [
      { id: 'pytorch', title: 'PyTorch', tag: '深度学习 / Deep learning', detail: ['用 PyTorch 和 YOLO 实现裂缝检测实验，并导出 ONNX 进行推理部署。', 'Used PyTorch and YOLO for crack detection experiments and ONNX export.'], href: repo('lijin6/HiResInfer-YOLO') },
      { id: 'tensorflow', title: 'TensorFlow', tag: 'TensorFlow · Keras', detail: ['Fashion AI 用 TensorFlow 和 Keras 运行服饰属性识别模型。', 'Fashion AI uses TensorFlow and Keras for clothing attribute recognition.'], href: repo('lijin6/fashion-ai-system') },
      { id: 'cv', title: ['计算机视觉', 'Computer vision'], tag: 'YOLOv12 · ONNX', detail: ['在 HiResDC-YOLO 研究中，结合多尺度特征和切片推理检测无人机图像里的细小裂缝。', 'HiResDC-YOLO combines multi-scale features and tiled inference to detect fine cracks in UAV imagery.'], href: doi('10.1038/s41598-026-52557-w'), kind: 'paper' },
      { id: 'remote', title: ['遥感', 'Remote sensing'], tag: 'ACM EITCE · SSRN', detail: ['做过东寨港红树林变化分析，也参与无人机遥感小尺度火情检测。', 'Worked on mangrove change analysis and small-scale fire detection in UAV imagery.'], href: doi('10.1145/3711129.3711158'), kind: 'paper' },
      { id: 'multimodal', title: ['多模态', 'Multimodal'], tag: 'CLIP · Vision-language', detail: ['用 CLIP 训练仓库探索图像与文本表征。', 'Exploring image and text representations through CLIP training experiments.'], href: repo('lijin6/Clip_train') },
      { id: 'fashion', title: 'Fashion AI', tag: 'React · FastAPI · TensorFlow', detail: ['把图片上传、模型推理和服饰属性结果串成完整的交互流程。', 'Connects image uploads, model inference, and clothing attribute results.'], href: repo('lijin6/fashion-ai-system') },
      hyperspectral,
      anomalib,
      { id: 'weed', title: 'WeedDetect', tag: 'Android · CameraX · TensorFlow Lite', detail: ['把 YOLO 杂草识别模型部署到安卓端，支持本地影像分析和实时相机检测。', 'Runs a YOLO weed detection model on Android for local media and live camera input.'], href: repo('lijin6/weeddetectionapp') },
      { id: 'slam', title: 'SLAM', tag: 'Loop closure', detail: ['做过 SLAM 回环优化方向的实践。', 'Past work on loop closure optimization in SLAM.'], href: blog, kind: 'blog' },
    ],
  },
];

export const connections = [
  ['python', 'pytorch'], ['python', 'hyperspectral'],
  ['react', 'fashion'], ['fastapi', 'fashion'],
  ['tensorflow', 'fashion'], ['pytorch', 'cv'],
  ['remote', 'hyperspectral'], ['tensorflow', 'weed'], ['cv', 'weed'],
];
