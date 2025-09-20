// pages/pedia/[slug].js
import { getAllPedia, getPediaBySlug, getPediaByCategory } from '../../lib/pediaData';
import { autoLinkContent } from '../../lib/linking';
import PediaLayout from '../../components/PediaLayout';
import KnowledgeGraph from '../../components/KnowledgeGraph';
import Head from 'next/head'; // 导入Head组件用于SEO

// 新增一个组件用于渲染FAQ，这对于SEO非常好
const FaqSection = ({ faq }) => (
  <section>
    <h3>常见问题 (FAQ)</h3>
    {faq.map((item, index) => (
      <div key={index}>
        <h4>{item.question}</h4>
        <p>{item.answer}</p>
      </div>
    ))}
  </section>
);

export default function PediaPage({ entry, relatedEntries, categories }) {
  if (!entry) return <div>词条未找到</div>;

  return (
    <PediaLayout categories={categories}>
      {/* 动态设置页面标题和描述，对SEO至关重要 */}
      <Head>
        <title>{entry.title} - GEO百科</title>
        <meta name="description" content={entry.definition} />
      </Head>
      <article>
        <h1>{entry.title}</h1>
        
        <p>
          <strong>定义:</strong> <span dangerouslySetInnerHTML={{ __html: entry.processedDefinition }} />
        </p>

        {/* --- 开始渲染新增的详细内容 --- */}
        {entry.content && (
          <>
            <p>{entry.content.introduction}</p>
            {entry.content.sections.map((section, index) => (
              <section key={index}>
                <h3>{section.title}</h3>
                <ul>
                  {section.points.map((point, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                  ))}
                </ul>
              </section>
            ))}
            
            {/* 渲染FAQ区域 */}
            {entry.content.faq && entry.content.faq.length > 0 && (
              <FaqSection faq={entry.content.faq} />
            )}
          </>
        )}
        {/* --- 详细内容渲染结束 --- */}

        {relatedEntries.length > 0 && (
          <>
            <h3>知识连接图谱</h3>
            <p>下图展示了&quot;{entry.title}&quot;与其他核心概念的直接关联，点击节点即可跳转。</p>
            <KnowledgeGraph centerNode={entry} relatedNodes={relatedEntries} />
          </>
        )}
      </article>
    </PediaLayout>
  );
}

export async function getStaticPaths() {
  const allPedia = getAllPedia();
  return { paths: allPedia.map((p) => ({ params: { slug: p.slug } })), fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const entry = getPediaBySlug(params.slug);
  const allPedia = getAllPedia(); 
  
  const processedDefinition = autoLinkContent(entry.definition, allPedia);

  const relatedEntries = entry.relatedTerms?.map(slug => getPediaBySlug(slug)).filter(Boolean) || [];
  const categories = getPediaByCategory();

  return { 
    props: { 
      entry: {
        ...entry,
        processedDefinition,
      }, 
      relatedEntries,
      categories 
    }, 
    revalidate: 60 * 60, // 1小时重新生成一次页面
  };
}