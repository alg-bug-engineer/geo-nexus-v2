// pages/pedia/[slug].js
import { getAllPedia, getPediaBySlug, getPediaByCategory } from '../../lib/pediaData';
import { autoLinkContent } from '../../lib/linking'; // 1. 导入自动链接函数
import PediaLayout from '../../components/PediaLayout';
import KnowledgeGraph from '../../components/KnowledgeGraph';

export default function PediaPage({ entry, relatedEntries, categories }) {
  if (!entry) return <div>词条未找到</div>;

  return (
    <PediaLayout categories={categories}>
      <article>
        <h1>{entry.title}</h1>
        
        {/* 2. 使用 dangerouslySetInnerHTML 渲染处理后的定义 */}
        <p>
          <strong>定义:</strong> <span dangerouslySetInnerHTML={{ __html: entry.processedDefinition }} />
        </p>
        
        {/* 这里是正文内容 */}
        <p>这是关于"{entry.title}"的详细解释内容。随着您添加更多信息，这里会变得更丰富。</p>

        {/* 嵌入微型知识图谱 */}
        {relatedEntries.length > 0 && (
          <>
            <h3>知识连接图谱</h3>
            <p>下图展示了"{entry.title}"与其他核心概念的直接关联，点击节点即可跳转。</p>
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
  const allPedia = getAllPedia(); // 3. 获取所有百科词条用于链接匹配
  
  // 4. 对当前词条的定义进行处理
  const processedDefinition = autoLinkContent(entry.definition, allPedia);

  const relatedEntries = entry.relatedTerms?.map(slug => getPediaBySlug(slug)).filter(Boolean) || [];
  const categories = getPediaByCategory();

  return { 
    props: { 
      entry: {
        ...entry,
        processedDefinition, // 5. 将处理后的定义传递给页面
      }, 
      relatedEntries,
      categories 
    }, 
    revalidate: 60 
  };
}