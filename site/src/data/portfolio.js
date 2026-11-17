import weedHome from '../../media/weed-home.jpg';
import weedInfo from '../../media/weed-info.jpg';
import architectureImage from '../../media/hires-architecture.png';
import fashionImage from '../../media/fashion.png';
import fashionDetails from '../../media/fashion-details.png';
import gameImage from '../../media/game-hub.png';
import crackImage from '../../media/hires-workflow.png';
import studyAreaImage from '../../media/dongzhai-study-area.png';
import fireImage from '../../media/perry-fire.jpg';
import spillwayImage from '../../media/cracks-spillway.png';

export const github = 'https://github.com/lijin6';
export const scholar = 'https://scholar.google.com/citations?user=vxZJk_MAAAAJ&hl=en';

export const projects = [
  {
    name: ['Fashion AI 服饰属性分析系统', 'Fashion AI · Clothing Attribute Analysis'],
    repo: 'fashion-ai-system',
    media: { src: fashionImage, alt: ['Fashion AI 上传与分析界面', 'Fashion AI upload and analysis interface'] },
    extra: { src: fashionDetails, label: ['查看技术面板', 'Technical dashboard'] },
    stack: 'React / TypeScript / Tailwind CSS / FastAPI',
    detail: [
      '实现拖拽上传、分析状态反馈和移动端布局，对接 FastAPI 推理接口展示服饰属性，支持登录注册。',
      'Built drag-and-drop uploads, inference feedback, and responsive layouts. Connected the interface to a FastAPI service for clothing attribute predictions and authentication.',
    ],
  },
  {
    name: ['Game Hub 游戏目录', 'Game Hub · Game Discovery'],
    repo: 'game-hub',
    media: { src: gameImage, alt: ['Game Hub 游戏目录', 'Game Hub game catalog'], caption: ['本地运行截图 · 示例数据', 'Local build · Sample data'] },
    stack: 'React / TypeScript / Vite / Chakra UI',
    detail: [
      '以 Mosh Hamedani 的 React 课程项目为练习题，从头实现搜索、分类与平台筛选、排序和响应式布局。',
      'A self-directed rebuild of the GameHub project from the React course by Mosh Hamedani, with search, filters, sorting, and responsive layouts.',
    ],
  },
  {
    name: ['WeedDetect 安卓杂草识别', 'WeedDetect · Android Weed Detection'],
    repo: 'weeddetectionapp',
    media: { src: weedHome, alt: ['WeedDetect 安卓应用首页', 'WeedDetect Android home screen'],
      companion: { src: weedInfo, alt: ['WeedDetect 杂草百科', 'WeedDetect weed guide'] },
      caption: ['Android 应用界面', 'Android app screens'] },
    stack: 'Android / CameraX / YOLO / TensorFlow Lite',
    detail: [
      '将 YOLO 模型转成 TensorFlow Lite 部署到安卓端，支持拍照、相册和本地视频识别，并使用 CameraX 实现实时相机检测。',
      'Deployed a YOLO model to Android using TensorFlow Lite. The app supports photo, gallery, and local video inputs, plus live detection with CameraX.',
    ],
  },
  {
    name: ['HiResInfer-YOLO 高分辨率裂缝检测', 'HiResInfer-YOLO · UAV Crack Detection'],
    repo: 'HiResInfer-YOLO',
    media: {
      src: crackImage,
      alt: ['HiResDC-YOLO 无人机坝体裂缝检测框架', 'HiResDC-YOLO workflow for UAV dam crack detection'],
      caption: ['HiResDC-YOLO 检测框架', 'HiResDC-YOLO workflow'],
    },
    extra: { src: spillwayImage, label: ['查看溢洪道检测对比', 'Spillway detection comparison'], source: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13377178/figure/Fig14/' },
    stack: 'PyTorch / YOLOv12 / ONNX',
    detail: [
      '负责无人机裂缝检测实验、模型代码实现和论文撰写，完成 ONNX 导出与推理部署。',
      'Ran UAV crack detection experiments, implemented model code, contributed to manuscript writing, and exported the model to ONNX for inference deployment.',
    ],
  },
];

export const papers = [
  {
    preview: { image: architectureImage, label: ['HiResDC-YOLO 原始架构图', 'HiResDC-YOLO architecture'], credit: 'Scientific Reports · Fig. 2 · CC BY 4.0', source: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13377178/figure/Fig2/', license: 'https://creativecommons.org/licenses/by/4.0/' },
    year: '2026', venue: 'Scientific Reports', role: ['第一作者', 'First author'],
    title: 'Precision detection of miniature dam cracks with a multi-scale enhanced YOLO framework for UAV inspection',
    doi: '10.1038/s41598-026-52557-w',
  },
  {
    preview: { image: studyAreaImage, label: ['东寨港研究区与卫星影像', 'Dongzhai Harbour study area and satellite imagery'], source: 'https://doi.org/10.1145/3711129.3711158' },
    year: '2024', venue: 'ACM EITCE', role: ['第四作者', 'Fourth author'],
    title: 'Research on the Detection Methods for Changes in the Mangroves of Dongzhaigang, Hainan from 2019 to 2023',
    doi: '10.1145/3711129.3711158',
  },
  {
    preview: { image: fireImage, label: ['佩里山火遥感影像 · 主题配图', 'Perry Fire satellite image · Context image'], credit: 'Joshua Stevens / NASA Earth Observatory · USGS Landsat data', source: 'https://science.nasa.gov/earth/earth-observatory/the-perry-fire-by-day-and-night-92514/' },
    year: '2025', venue: 'SSRN', role: ['第二作者 · 预印本', 'Second author · Preprint'],
    title: 'Small-Scale Fire Detection for Drone-Based Remote Sensing Applications Using an Enhanced Deep Learning Framework',
    doi: '10.2139/ssrn.5804452',
  },
];
