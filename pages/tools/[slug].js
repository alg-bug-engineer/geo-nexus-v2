// pages/tools/[slug].js
import { getAllTools, getToolBySlug } from '../../lib/toolsData';
import Head from 'next/head';
import Link from 'next/link';

export default function ToolPage({ tool }) {
  if (!tool) return <div>工具未找到</div>;

  return (
    <>
      <Head>
        <title>{tool.title} | GEO工具箱深度评测</title>
        <meta name="description" content={tool.detailedSummary} />
      </Head>
      <article>
        <h1>{tool.title}</h1>
        <p style={{ color: '#6B7280', marginTop: '-1rem' }}>
          <strong>分类:</strong> {tool.category}
        </p>
        
        {/* 使用 dangerouslySetInnerHTML 来渲染我们精心编写的HTML内容 */}
        <div 
          className="post-content" 
          dangerouslySetInnerHTML={{ __html: tool.contentHtml }} 
        />

        <div style={{ marginTop: '3rem', padding: '1.5rem', background: '#F9FAFB', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
            <h3>核心总结</h3>
            <p>{tool.takeaway}</p>
            <a href={tool.url} target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                borderRadius: '8px',
                background: '#0070f3',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 'bold',
                marginTop: '1rem'
            }}>
              访问 {tool.title} 官网
            </a>
        </div>
      </article>
    </>
  );
}

export async function getStaticPaths() {
  const allTools = getAllTools();
  const paths = allTools.map((t) => ({ params: { slug: t.slug } }));
  
  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const tool = getToolBySlug(params.slug);

  return {
    props: {
      tool,
    },
    revalidate: 60 * 60 * 24, // 工具页面内容相对固定，可以一天更新一次
  };
}