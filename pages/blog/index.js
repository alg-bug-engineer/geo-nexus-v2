// pages/blog/index.js
import Link from 'next/link';
import { getAllPosts } from '../../lib/blogData';

export default function BlogIndexPage({ allPosts }) {
  return (
    <div>
      <div className="hero" style={{ padding: '3rem 1rem' }}>
        <h1>实战日志</h1>
        <p>我在GEO领域的最新案例、思考与实验记录。</p>
      </div>
      <div className="card-grid">
        {allPosts.map((post) => (
          <Link href={`/blog/${post.slug}`} key={post.slug} legacyBehavior>
            <a className="card">
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      allPosts,
    },
    revalidate: 60 * 10, // 博客列表可以更新频繁一些，比如10分钟
  };
}