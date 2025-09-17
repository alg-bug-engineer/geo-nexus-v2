import { getAllPosts, getPostBySlug } from '../../lib/blogData';

export default function PostPage({ post }) {
  if (!post) return <div>文章未找到</div>;
  return (
    <article>
      <h1>{post.title}</h1>
      <p><time>{post.date}</time></p>
      <p>{post.summary}</p>
    </article>
  );
}
export async function getStaticPaths() {
  const allPosts = getAllPosts();
  return { paths: allPosts.map((p) => ({ params: { slug: p.slug } })), fallback: 'blocking' };
}
export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  return { props: { post }, revalidate: 60 };
}