const blogPosts = [
    { slug: 'my-first-geo-case-study', title: '我的第一个GEO实战案例', summary: '本文记录了我是如何通过优化一篇文章，使其成功进入Google SGE快照的过程...', date: '2025-09-15' },
    { slug: 'top-5-geo-tools', title: '2025年你必须知道的5款GEO工具', summary: '工欲善其事，必先利其器。这里是我精选的5款能够极大提升GEO效率的工具。', date: '2025-09-10' }
];
export const getAllPosts = () => blogPosts;
export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);