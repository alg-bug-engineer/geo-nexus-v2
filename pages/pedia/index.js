// pages/pedia/index.js
import PediaLayout from '../../components/PediaLayout';
import { getPediaByCategory } from '../../lib/pediaData';

export default function PediaIndexPage({ categories }) {
  return (
    <PediaLayout categories={categories}>
      <article>
        <h1>欢迎来到GEO百科</h1>
        <p>在这里，您将系统化地理解生成式引擎优化的所有核心概念。</p>
        <blockquote>
          请从左侧的目录中选择一个词条开始探索。每一个词条页面都包含一个可视化的微型知识图谱，帮助您理解概念之间的关联。
        </blockquote>
      </article>
    </PediaLayout>
  );
}

export async function getStaticProps() {
  const categories = getPediaByCategory();
  return {
    props: {
      categories,
    },
    revalidate: 60 * 60,
  };
}