import Link from 'next/link';
import { getAllPedia } from '../lib/pediaData';
import { getAllPosts } from '../lib/blogData';

export default function HomePage({ allPedia, allPosts }) {
  return (
    <div>
      <header style={{ textAlign: 'center', margin: '2rem 0' }}>
        <h1>欢迎来到 GEO-Nexus v2</h1>
        <p>探索下一代搜索，与我一同实践GEO。</p>
      </header>
      <section>
        <h2>GEO 百科</h2>
        <ul>
          {allPedia.map(entry => (
            <li key={entry.slug}>
              <Link href={`/pedia/${entry.slug}`}><strong>{entry.title}</strong></Link>
              <p style={{ margin: '5px 0 0 0' }}>{entry.definition}</p>
            </li>
          ))}
        </ul>
      </section>
      <hr />
      <section>
        <h2>实战日志</h2>
        <ul>
          {allPosts.map(post => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}><strong>{post.title}</strong></Link>
              <p style={{ margin: '5px 0 0 0' }}>{post.summary}</p>
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
  return { props: { allPedia, allPosts }, revalidate: 60 };
}