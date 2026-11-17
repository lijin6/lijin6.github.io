import fashionImage from '../../media/fashion.png';
import fashionDetails from '../../media/fashion-details.png';
import gameImage from '../../media/game-hub.png';
import crackImage from '../../media/cracks.png';
import spillwayImage from '../../media/cracks-spillway.png';
import mangroveImage from '../../media/mangrove.jpg';
import fireImage from '../../media/perry-fire.jpg';

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
    name: ['HiResInfer-YOLO 高分辨率裂缝检测', 'HiResInfer-YOLO · UAV Crack Detection'],
    repo: 'HiResInfer-YOLO',
    media: {
      src: crackImage,
      alt: ['原图、标注与裂缝检测结果对比', 'Comparison of source image, annotations, and crack detection results'],
      source: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13377178/figure/Fig13/',
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
    preview: { image: crackImage, label: ['论文图 13 · 裂缝检测对比', 'Figure 13 · Crack detection comparison'], credit: 'Scientific Reports · Fig. 13 · CC BY 4.0', source: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13377178/figure/Fig13/', license: 'https://creativecommons.org/licenses/by/4.0/' },
    year: '2026', venue: 'Scientific Reports', role: ['第一作者', 'First author'],
    title: 'Precision detection of miniature dam cracks with a multi-scale enhanced YOLO framework for UAV inspection',
    doi: '10.1038/s41598-026-52557-w',
  },
  {
    preview: { image: mangroveImage, label: ['东寨港红树林 · 主题配图', 'Dongzhai Harbour mangroves · Context image'], credit: 'Philg88 / Wikimedia Commons · CC BY-SA 3.0', source: 'https://commons.wikimedia.org/wiki/File:Dongzhai_Harbour_Mangrove_Forest.jpg', license: 'https://creativecommons.org/licenses/by-sa/3.0/' },
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
