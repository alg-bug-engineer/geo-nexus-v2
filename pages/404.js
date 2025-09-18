import Link from 'next/link';

export default function Custom404() {
  return (
    <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
      <h1>404 - 页面未找到</h1>
      <p style={{ margin: '1rem 0 2rem 0' }}>抱歉，您要查找的页面不存在。</p>
      <Link href="/" style={{
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        background: '#0070f3',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
      }}>
        返回首页
      </Link>
    </div>
  );
}