// lib/toolsData.js

const tools = [
  {
    slug: 'chatgpt-plus',
    title: 'ChatGPT Plus',
    summary: '地表最强的AI内容生成与创意启发工具，GEO实践的必备基础。',
    category: 'AI内容生成',
  },
  {
    slug: 'claude-3',
    title: 'Claude 3',
    summary: 'Anthropic公司出品的强大AI模型，尤其擅长处理长文本输入和进行细致的语言风格模仿。',
    category: 'AI内容生成',
  },
  {
    slug: 'surfer-seo',
    title: 'Surfer SEO',
    summary: '结合传统SEO指标与AI的内容优化平台，善于分析SERP并给出写作建议。',
    category: 'SGE分析',
  },
  {
    slug: 'perplexity-ai',
    title: 'Perplexity AI',
    summary: '一个对话式答案引擎，它会直接给出整合信息源的答案。研究它的答案构成，对GEO非常有启发。',
    category: 'SGE分析',
  },
  {
    slug: 'midjourney',
    title: 'Midjourney',
    summary: '顶级的AI图片生成工具，为您的文章一键生成高质量、风格独特的配图。',
    category: '多模态内容',
  },
  {
    slug: 'elevenlabs',
    title: 'ElevenLabs',
    summary: '领先的AI语音生成和克隆工具，可以将您的文章轻松转换为高质量的音频版本。',
    category: '多模态内容',
  },
  {
    slug: 'ahrefs',
    title: 'Ahrefs',
    summary: '行业领先的传统SEO分析工具，其关键词研究和外链分析功能，在GEO时代依然不可或缺。',
    category: '传统SEO',
  },
  {
    slug: 'screaming-frog',
    title: 'Screaming Frog',
    summary: '强大的桌面端网站爬虫工具，用于进行全面的技术SEO审计，例如查找坏链、分析结构化数据等。',
    category: '传统SEO',
  },
];

export const getAllTools = () => tools;

export const getToolBySlug = (slug) => tools.find((p) => p.slug === slug);