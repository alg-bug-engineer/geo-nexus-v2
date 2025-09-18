// lib/pediaData.js

const pediaEntries = [
  // --- 核心概念 (Core Concepts) ---
  {
    slug: 'generative-engine-optimization',
    title: '生成式引擎优化 (GEO)',
    definition: '一种新兴的优化策略，旨在使内容在生成式AI引擎的回答中获得最佳呈现，为了提升 SGE。',
    relatedTerms: ['search-generative-experience', 'eeat', 'answer-engine-optimization'],
    category: '核心概念',
    keywords: ['生成式引擎优化', 'GEO'] // 新增关键词
  },
  {
    slug: 'search-generative-experience',
    title: '搜索生成体验 (SGE)',
    definition: 'Google推出的一种集成生成式AI的搜索功能，能直接生成摘要性回答。',
    relatedTerms: ['generative-engine-optimization', 'zero-click-searches'],
    category: '核心概念',
    keywords: ['搜索生成体验', 'SGE'] // 新增关键词
  },
  {
    slug: 'eeat',
    title: 'EEAT原则',
    definition: '经验、专业、权威、可信，是Google评估内容质量的核心标准。',
    relatedTerms: ['generative-engine-optimization', 'semantic-seo'],
    category: '核心概念',
    keywords: ['EEAT', 'E-E-A-T'] // 新增关键词
  },
  {
    slug: 'answer-engine-optimization',
    title: '答案引擎优化 (AEO)',
    definition: 'AEO是GEO的前身和子集，专注于让内容成为搜索引擎精选摘要的直接答案来源。',
    relatedTerms: ['generative-engine-optimization', 'structured-data'],
    category: '核心概念',
    keywords: ['答案引擎优化', 'AEO'] // 新增关键词
  },
  {
    slug: 'zero-click-searches',
    title: '零点击搜索',
    definition: '指用户在搜索引擎结果页（SERP）上直接获得答案，而无需点击任何链接进入网站。',
    relatedTerms: ['search-generative-experience', 'answer-engine-optimization'],
    category: '核心概念',
    keywords: ['零点击搜索'] // 新增关键词
  },

  // --- 技术实践 (Technical Practices) ---
  {
    slug: 'prompt-engineering',
    title: '提示工程 (Prompt)',
    definition: '设计和优化输入给AI模型的指令（Prompt），以获得高质量、高相关性输出。',
    relatedTerms: ['generative-engine-optimization'],
    category: '技术实践',
    keywords: ['提示工程', 'Prompt Engineering', 'Prompt'] // 新增关键词
  },
  {
    slug: 'structured-data',
    title: '结构化数据 (Schema)',
    definition: '使用一种标准化的格式（如Schema.org）来标记您网页上的信息，以帮助搜索引擎更好地理解您的内容。',
    relatedTerms: ['answer-engine-optimization', 'semantic-seo'],
    category: '技术实践',
    keywords: ['结构化数据', 'Schema'] // 新增关键词
  },
  {
    slug: 'semantic-seo',
    title: '语义SEO',
    definition: '超越关键词匹配，专注于内容的主题、意图和上下文，让搜索引擎理解内容“是什么”。',
    relatedTerms: ['eeat', 'structured-data'],
    category: '核心概念',
    keywords: ['语义SEO', 'Semantic SEO'] // 新增关键词
  },
  {
    slug: 'multimodal-search',
    title: '多模态搜索',
    definition: '指搜索引擎能够理解和处理多种类型的信息（文本、图片、视频、音频）。',
    relatedTerms: ['search-generative-experience'],
    category: '技术实践',
    keywords: ['多模态搜索'] // 新增关键词
  }
];

export const getAllPedia = () => pediaEntries;

export const getPediaBySlug = (slug) => pediaEntries.find((p) => p.slug === slug);

export const getPediaByCategory = () => {
    const categories = {};
    pediaEntries.forEach(entry => {
        if (!categories[entry.category]) {
            categories[entry.category] = [];
        }
        categories[entry.category].push(entry);
    });
    return categories;
};