// pages/blog/[slug].js

import { getAllPosts, getPostBySlug } from '../../lib/blogData';
import { getAllPedia } from '../../lib/pediaData'; // 1. 导入百科数据
import { autoLinkContent } from '../../lib/linking'; // 2. 导入我们的新函数

export default function PostPage({ post }) {
  if (!post) return <div>文章未找到</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p style={{ color: '#6B7280', marginTop: '-1rem' }}>
        发布于: {post.date}
      </p>
      
      {/* 3. 使用 dangerouslySetInnerHTML 来渲染处理后的HTML内容 */}
      <div 
        className="post-content" 
        dangerouslySetInnerHTML={{ __html: post.processedContent }} 
      />
    </article>
  );
}

export async function getStaticPaths() {
  const allPosts = getAllPosts();
  const paths = allPosts.map((p) => ({ params: { slug: p.slug } }));
  
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const allPedia = getAllPedia(); // 4. 获取所有百科词条

  // 假设正文内容在 post.summary 或 post.fullContent 中
  // 这里我们用 post.summary 作为示例
  const originalContent = `
    <p>${post.summary}</p>
    <blockquote>这是一个关于SEO和EEAT的引用内容示例。</blockquote>
    <pre><code>
      # 这是一个代码块的示例样式
      # 非常适合用来展示Prompt指令
      npm run dev
    </code></pre>
    <p>这里是更多的正文内容，以展示阅读体验，我们再次提到 SGE 这个概念。</p>
  `;

  // 5. 调用函数处理内容
  const processedContent = autoLinkContent(originalContent, allPedia);

  return {
    props: {
      post: {
        ...post,
        processedContent, // 6. 将处理后的内容传递给页面组件
      },
    },
    revalidate: 60,
  };
}