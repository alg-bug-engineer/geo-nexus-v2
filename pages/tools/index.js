// pages/tools/index.js
import Link from 'next/link';
import { getAllTools } from '../../lib/toolsData';

export default function ToolsIndexPage({ allTools }) {
  return (
    <div>
      <div className="hero" style={{ padding: '3rem 1rem' }}>
        <h1>GEO 工具箱</h1>
        <p>工欲善其事，必先利其器。这里是我精选的GEO/SEO效率工具。</p>
      </div>
      <div className="card-grid">
        {allTools.map((tool) => (
          <Link href={`/tools/${tool.slug}`} key={tool.slug} legacyBehavior>
            <a className="card">
              <h3>{tool.title}</h3>
              <p>{tool.summary}</p>
              <span style={{ fontSize: '0.8rem', color: '#a0a0a0' }}>{tool.category}</span>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const allTools = getAllTools();
  return {
    props: {
      allTools,
    },
    revalidate: 60 * 60, // 工具列表不需要频繁更新，可以设置为1小时
  };
}