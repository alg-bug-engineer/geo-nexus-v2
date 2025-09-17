// pages/blog/[slug].js

import { getAllPosts, getPostBySlug } from '../../lib/blogData';

export default function PostPage({ post }) {
  if (!post) return <div>文章未找到</div>;

  return (
    <article>
      <h1>{post.title}</h1>
      <p style={{ color: '#6B7280', marginTop: '-1rem' }}>
        发布于: {post.date}
      </p>
      
      {/* 文章正文内容 */}
      <div className="post-content">
        <p>{post.summary}</p>
        <blockquote>这是一个引用内容的示例样式。</blockquote>
        <pre><code>
          # 这是一个代码块的示例样式
          # 非常适合用来展示Prompt指令
          npm run dev
        </code></pre>
        <p>这里是更多的正文内容，以展示阅读体验...</p>
      </div>
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

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
}