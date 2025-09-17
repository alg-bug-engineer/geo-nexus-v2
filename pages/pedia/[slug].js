// pages/pedia/[slug].js

import Link from 'next/link';
import { getAllPedia, getPediaBySlug } from '../../lib/pediaData';

export default function PediaPage({ entry, relatedEntries }) {
  if (!entry) return <div>词条未找到</div>;

  return (
    <article>
      <h1>{entry.title}</h1>
      <p>
        <strong>定义:</strong> {entry.definition}
      </p>

      {/* 如果有更多正文内容，会在这里展开 */}

      {relatedEntries.length > 0 && (
        <div style={{ marginTop: '3rem' }}>
          <hr />
          <h3>相关术语</h3>
          <div className="card-grid">
            {relatedEntries.map((related) => (
              <Link href={`/pedia/${related.slug}`} key={related.slug} legacyBehavior>
                <a className="card">
                  <h4>{related.title}</h4>
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

export async function getStaticPaths() {
  const allPedia = getAllPedia();
  const paths = allPedia.map((p) => ({ params: { slug: p.slug } }));

  return {
    paths,
    fallback: 'blocking',
  };
}

export async function getStaticProps({ params }) {
  const entry = getPediaBySlug(params.slug);
  const relatedEntries =
    entry.relatedTerms
      ?.map((slug) => getPediaBySlug(slug))
      .filter(Boolean) || [];

  return { props: { entry, relatedEntries }, revalidate: 60 };
}