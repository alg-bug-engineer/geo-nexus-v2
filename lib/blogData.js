const blogPosts = [
    {
        slug: 'sge-ranking-factors-2025',
        title: '深度解析：2025年影响Google SGE排名的5大核心因素',
        summary: 'SGE的排名逻辑与传统蓝链有何不同？本文将深入分析视角、来源多样性、EEAT信号等关键因素，助你抢占AI快照先机。',
        date: '2025-09-15',
    },
    {
        slug: 'prompt-for-eeat-content',
        title: '如何撰写“超级Prompt”，让AI写出符合EEAT标准的深度文章',
        summary: '告别泛泛而谈的AI内容！本文提供一个结构化的Prompt模板，通过角色扮演、指定信息源和输出格式，引导AI生成更具深度和可信度的内容。',
        date: '2025-09-12',
    },
    {
        slug: 'auto-linking-case-study',
        title: '实战案例：我是如何用脚本实现站内知识点自动链接的',
        summary: '手动添加内链费时费力？本文记录了我是如何构建一个简单的自动链接函数，来增强网站的主题集群效应和用户体验。',
        date: '2025-09-10',
    },
    {
        slug: 'from-seo-to-geo',
        title: '从SEO到GEO：一个传统优化师的转型心路历程',
        summary: 'AI浪潮来袭，SEOer该何去何从？本文分享我从焦虑到拥抱变革的思考，以及我认为GEO从业者必须具备的新技能。',
        date: '2025-09-08',
    },
    {
        slug: 'visual-content-for-sge',
        title: 'SGE时代的视觉内容策略：为什么一张图表胜过千言万语？',
        summary: 'AI快照越来越多地直接嵌入图片和视频。我将分享3个实用的多模态内容优化技巧，让你的视觉素材成为SGE的宠儿，而不仅仅是文章的点缀。',
        date: '2025-09-18',
    },
    {
        slug: 'building-topical-authority-for-geo',
        title: '主题权威性(Topical Authority)是如何在GEO中被重新定义的？',
        summary: '过去我们谈论主题权威性，想的是关键词覆盖和内链。现在，我们需要考虑知识图谱、实体关系和多模态内容。本文探讨新时代下构建主题权威性的三大支柱。',
        date: '2025-09-20',
    },
    {
        slug: 'zero-click-search-is-not-the-enemy',
        title: '别再恐惧“零点击搜索”：把它变成你的品牌展示位',
        summary: '流量焦虑是每个SEO的日常。但我认为，在GEO时代，我们应该转变思路，将SGE快照中的品牌曝光和信源引用，视为一种新的、更有价值的“流量”。',
        date: '2025-09-22',
    },
    {
        slug: 'schema-beyond-basics',
        title: '超越基础：这3种“冷门”Schema标记可能在GEO中发挥奇效',
        summary: '除了常见的Article和FAQ，`FactCheck`、`HowTo`和`Person` Schema的深度应用，可能是让你的内容在SGE中建立独特信任信号的关键。分享我的部署经验。',
        date: '2025-09-25',
    },
    {
        slug: 'geo-kpi-metrics',
        title: '告别排名焦虑：衡量GEO成功的5个新KPI指标',
        summary: '还在每天盯着关键词排名吗？GEO的效果需要新的衡量标准。本文分享我正在使用的5个指标，包括“快照引用率”、“品牌词搜索量增幅”等，帮你更科学地评估GEO成效。',
        date: '2025-09-28',
    },
    {
        slug: 'future-of-digital-identity-for-eeat',
        title: '数字身份与E-E-A-T：为什么你的“关于我”页面是GEO的金矿？',
        summary: '在AI眼中，你是谁？你的数字身份（作者简介、社交链接、行业贡献）正成为最重要的信任信号。我将拆解如何打造一个能被AI理解和信任的作者品牌。',
        date: '2025-10-02',
    }
];

export const getAllPosts = () => blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)); // 按日期降序排序

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);