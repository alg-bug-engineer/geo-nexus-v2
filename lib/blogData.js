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
    }
];

export const getAllPosts = () => blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date)); // 按日期降序排序

export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);