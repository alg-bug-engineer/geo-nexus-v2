// pages/index.js
import Link from 'next/link';
import Image from 'next/image';
import { getAllPedia } from '../lib/pediaData';
import { getAllPosts } from '../lib/blogData';

export default function HomePage({ allPedia, allPosts }) {
  return (
    <div>
      <div className="hero">
        <h1>GEO-Nexus</h1>
        <p>探索生成式引擎优化的前沿，连接SEO的现在与未来。</p>
      </div>

      <section>
        <h2>最新实战</h2>
        <div className="card-grid">
          {allPosts.map((post) => (
            <Link href={`/blog/${post.slug}`} key={post.slug} className="card">
              <h3>{post.title}</h3>
              <p>{post.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <h2>核心百科</h2>
        <div className="card-grid">
          {allPedia.map((entry) => (
             <Link href={`/pedia/${entry.slug}`} key={entry.slug} className="card">
                <h3>{entry.title}</h3>
                <p>{entry.definition}</p>
            </Link>
          ))}
        </div>
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