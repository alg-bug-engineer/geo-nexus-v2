import Link from 'next/link';
import { getAllPedia, getPediaBySlug } from '../../lib/pediaData';

export default function PediaPage({ entry, relatedEntries }) {
  if (!entry) return <div>词条未找到</div>;
  return (
    <article>
      <h1>{entry.title}</h1>
      <p><strong>定义:</strong> {entry.definition}</p>
      {relatedEntries.length > 0 && (
        <>
          <hr />
          <h3>相关术语</h3>
          <ul>
            {relatedEntries.map(related => (
              <li key={related.slug}>
                <Link href={`/pedia/${related.slug}`}>{related.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}
export async function getStaticPaths() {
  const allPedia = getAllPedia();
  return { paths: allPedia.map((p) => ({ params: { slug: p.slug } })), fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
  const entry = getPediaBySlug(params.slug);
  const relatedEntries = entry.relatedTerms?.map(slug => getPediaBySlug(slug)).filter(Boolean) || [];
  return { props: { entry, relatedEntries }, revalidate: 60 };
}