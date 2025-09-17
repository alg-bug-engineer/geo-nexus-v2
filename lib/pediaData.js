const pediaEntries = [
  { slug: 'generative-engine-optimization', title: '生成式引擎优化 (GEO)', definition: '一种新兴的优化策略，旨在使内容在生成式AI引擎（如Google SGE）的回答中获得最佳的呈现、引用和排名。', relatedTerms: ['search-generative-experience', 'eeat'] },
  { slug: 'search-generative-experience', title: '搜索生成体验 (SGE)', definition: 'Google推出的一种集成生成式AI的搜索功能，它能直接在搜索结果页顶部生成对用户查询的摘要性回答。', relatedTerms: ['generative-engine-optimization'] },
  { slug: 'eeat', title: 'EEAT原则', definition: 'Experience, Expertise, Authoritativeness, and Trustworthiness (经验、专业、权威、可信)，是Google评估内容质量的核心标准，在GEO时代尤为重要。', relatedTerms: ['generative-engine-optimization'] },
];
export const getAllPedia = () => pediaEntries;
export const getPediaBySlug = (slug) => pediaEntries.find((p) => p.slug === slug);