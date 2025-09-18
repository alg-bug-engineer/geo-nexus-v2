// pages/index.js

import Link from 'next/link';
import Image from 'next/image'; // 导入Image组件
import { getAllPedia } from '../lib/pediaData';
import { getAllPosts } from '../lib/blogData';

export default function HomePage({ allPedia, allPosts }) {
  return (
    <div>
      {/* 英雄区 */}
      <div className="hero">
        <h1>GEO-Nexus</h1>
        <p>探索生成式引擎优化的前沿，连接SEO的现在与未来。</p>
      </div>

      {/* 最新实战日志 (卡片式布局) */}
      <section>
        <h2>
          <Image src="/file.svg" alt="实战日志" width={24} height={24} />
          最新实战
        </h2>
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
      </section>

      {/* 核心百科 (简洁列表布局) */}
      <section style={{ marginTop: '3rem' }}>
        <h2>
          <Image src="/globe.svg" alt="核心百科" width={24} height={24} />
          核心百科
        </h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {allPedia.map((entry) => (
            <li key={entry.slug} style={{ marginBottom: '1rem', borderBottom: '1px solid var(--card-border-color)', paddingBottom: '1rem' }}>
              <Link href={`/pedia/${entry.slug}`}>
                <strong style={{ fontSize: '1.2rem' }}>{entry.title}</strong>
              </Link>
              <p style={{ margin: '0.25rem 0 0 0', color: '#a0a0a0' }}>
                {entry.definition}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const allPedia = getAllPedia();
  const allPosts = getAllPosts();
  return {
    props: {
      allPedia,
      allPosts,
    },
    revalidate: 60,
  };
}