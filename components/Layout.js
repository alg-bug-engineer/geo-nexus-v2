import Link from 'next/link';
import Head from 'next/head';

const navStyles = {
  background: '#333',
  padding: '1rem',
  textAlign: 'center',
};

const linkStyles = {
  color: 'white',
  margin: '0 15px',
  textDecoration: 'none',
  fontSize: '18px',
};

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>GEO-Nexus</title>
        <meta name="description" content="探索下一代搜索，实践GEO" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav style={navStyles}>
        <Link href="/" style={linkStyles}>首页</Link>
        {/* 未来可以添加更多导航链接 */}
      </nav>

      <main>
        {children}
      </main>
    </div>
  );
}