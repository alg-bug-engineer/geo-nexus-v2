// pages/about.js
import Image from 'next/image';
import Head from 'next/head';

// 导入结构化数据组件 (可选，但强烈推荐)
const AuthorSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "云逸",
    "alternateName": "芝士AI吃鱼",
    "url": "http://www.geo-nexus.cn/", // 替换成你的网站关于页面的完整URL
    "image": "/avatar.png", // 替换成你的头像的完整URL
    "sameAs": [
      "https://github.com/alg-bug-engineer",
      // "https://www.linkedin.com/in/your-linkedin-profile/", // 替换成你的LinkedIn链接
      // "https://twitter.com/your-twitter-handle" // 替换成你的Twitter链接
    ],
    "jobTitle": "SEO & GEO 策略师",
    "worksFor": {
      "@type": "Organization",
      "name": "GEO-Nexus" // 你的品牌或公司名
    },
    "description": "云逸是一位在SEO和前沿GEO（生成式引擎优化）领域拥有超过十年实战经验的专家。他专注于探索AI如何重塑搜索生态，并致力于分享能带来实际业务增长的创新策略。",
    "knowsAbout": ["SEO", "Generative Engine Optimization", "GEO", "AI in Marketing", "Content Strategy", "SGE", "Search Engine Optimization", "Digital Marketing"]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};


export default function AboutPage() {
  return (
    <>
      {/* --- SEO & GEO 优化点 1: 添加详细的 Head 信息 --- */}
      <Head>
        <title>关于我 - 云逸 (芝士AI吃鱼) | SEO & GEO 专家</title>
        <meta name="description" content="了解云逸（芝士AI吃鱼），一位在SEO和GEO（生成式引擎优化）领域的探索者、实践者与分享者。探索我的专业背景、项目经验以及创建GEO-Nexus的初衷。" />
        <meta name="author" content="云逸, 芝士AI吃鱼" />
        <link rel="canonical" href="https://www.your-website.com/about" /> {/* 替换成你的网站关于页面的完整URL */}
      </Head>
      
      {/* --- SEO & GEO 优化点 2: 注入 Schema 结构化数据 --- */}
      <AuthorSchema />

      <article>
        <div className="hero" style={{ padding: '3rem 1rem', textAlign: 'center' }}>
          {/* --- SEO & GEO 优化点 3: 标题更具身份标识 --- */}
          <h1>关于云逸：一位SEO & GEO领域的探索者</h1>
          <p style={{ fontSize: '1.2rem', color: '#555' }}>从搜索引擎优化 (SEO) 到生成式引擎优化 (GEO)，我始终走在算法演进的前沿。</p>
        </div>

        <div style={{ textAlign: 'center', margin: '3rem 0' }}>
          {/* 确保图片有描述性、准确的 alt 文本 */}
          <Image src="/avatar.png" alt="云逸 (芝士AI吃鱼) - SEO与GEO策略师" width={150} height={150} style={{ borderRadius: '50%' }} priority />
          <h2 style={{ marginTop: '1rem' }}>云逸 (芝士AI吃鱼)</h2>
          <p style={{ color: '#777' }}>GEO-Nexus 创始人 | AI驱动的搜索策略师</p>
        </div>

        <section style={{ maxWidth: '800px', margin: '0 auto', padding: '0 1rem' }}>
          {/* --- SEO & GEO 优化点 4: 内容实体化、故事化，展示专业经验 (Experience) 和专长 (Expertise) --- */}
          <h3>我的故事：从代码到算法的跨界之旅</h3>
          <p>
            我的职业生涯始于代码的世界，作为一名前端工程师，我痴迷于创造流畅的用户体验。然而，我很快意识到，再优秀的产品，如果不能被用户发现，价值便无从谈起。这份好奇心引领我踏入了 <strong>SEO (搜索引擎优化)</strong> 的大门。
          </p>
          <p>
            在过去的十年里，我从关键词研究、技术性SEO优化，到内容策略和链接建设，一步步深入搜索引擎的核心。我曾帮助一家电商初创公司在6个月内将自然流量提升了300%，也曾为一家大型内容平台解决了复杂的国际化SEO难题。这些经历让我深刻理解了搜索的本质——连接用户意图与高质量信息。
          </p>
          <p>
            当 <strong>生成式AI</strong> 的浪潮涌来，我敏锐地意识到搜索的下一个纪元已经开启。这不再仅仅是关于“排名”，更是关于如何在AI驱动的对话式、生成式结果中，让品牌的声音被听到、被理解、被推荐。于是，我将我的热情与经验全部投入到了 <strong>GEO (生成式引擎优化)</strong> 这一全新领域，致力于探索和实践在SGE（搜索生成体验）时代下，品牌内容如何脱颖而出。
          </p>
          
          {/* --- SEO & GEO 优化点 5: 明确价值观和使命，建立权威性 (Authoritativeness) --- */}
          <h3>创建GEO-Nexus的初衷：连接未来搜索的节点</h3>
          <p>
            我创建 GEO-Nexus 的目的非常明确：
          </p>
          <ul>
            <li><strong>分享前沿洞察：</strong> 记录并分享我在 GEO 领域的最新研究、实验数据和实战策略，帮助同行者拨开AI时代的迷雾。</li>
            <li><strong>构建知识体系：</strong> 系统性地梳理从传统 SEO 到现代 GEO 的知识脉络，为希望转型的营销人员和企业主提供清晰的路线图。</li>
            <li><strong>连接行业伙伴：</strong> 我相信，最好的学习方式是交流与碰撞。GEO-Nexus 是一个开放的平台，我希望能在这里连接更多对AI和搜索充满热情的伙伴，共同定义未来。</li>
          </ul>
          
          {/* --- SEO & GEO 优化点 6: 提供明确的联系方式和社交证明，增强信任度 (Trustworthiness) --- */}
          <h3>与我连接</h3>
          <p>探索永无止境，我乐于与你交流关于 SEO、GEO、AI 或任何与数字营销相关的话题。你可以在以下平台找到我：</p>
          <ul>
            <li><strong>GitHub:</strong> <a href="https://github.com/alg-bug-engineer" target="_blank" rel="noopener noreferrer">alg-bug-engineer</a> (在这里你可以看到我的一些技术探索项目)</li>
            {/* <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/your-linkedin-profile/" target="_blank" rel="noopener noreferrer">云逸 on LinkedIn</a> (欢迎在这里与我进行更正式的职业交流)</li>
            <li><strong>Twitter / X:</strong> <a href="https://twitter.com/your-twitter-handle" target="_blank" rel="noopener noreferrer">@your_handle</a> (关注我，获取每日的GEO碎片化思考)</li> */}
            <li><strong>Email:</strong> <a href="mailto:646184101@qq.com">646184101@qq.com</a> (如有合作或深度交流需求，欢迎邮件联系)</li>
          </ul>
        </section>
      </article>
    </>
  );
}