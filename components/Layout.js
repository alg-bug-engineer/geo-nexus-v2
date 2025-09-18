// components/Layout.js
import Link from 'next/link';
import Head from 'next/head';

const navStyles = {
  width: '100%',
  padding: '1rem 0',
  textAlign: 'center',
  background: 'rgba(10, 15, 31, 0.8)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(60, 70, 110, 0.5)',
  position: 'sticky',
  top: 0,
  zIndex: 10,
};

const linkStyles = {
  color: '#e0e0e0',
  margin: '0 15px',
  textDecoration: 'none',
  fontSize: '18px',
  transition: 'color 0.2s, text-shadow 0.2s',
};

const footerStyles = {
    textAlign: 'center',
    padding: '2rem 1rem',
    marginTop: '4rem',
    borderTop: '1px solid rgba(60, 70, 110, 0.5)',
    color: '#a0a0a0',
    fontSize: '0.9rem',
}

export default function Layout({ children }) {
  const handleLinkHover = (e) => {
    e.target.style.color = '#fff';
    e.target.style.textShadow = '0 0 8px rgba(0, 229, 255, 0.7)';
  };
  const handleLinkLeave = (e) => {
    e.target.style.color = '#e0e0e0';
    e.target.style.textShadow = 'none';
  };

  return (
    <div>
      <Head>
        <title>GEO-Nexus</title>
        <meta name="description" content="探索下一代搜索，实践GEO" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Code&family=Jetbrains+Mono&display=swap" rel="stylesheet" />
      </Head>

      <nav style={navStyles}>
        <Link href="/" style={linkStyles} onMouseEnter={handleLinkHover} onMouseLeave={handleLinkLeave}>首页</Link>
        {/* 未来可以添加更多导航链接 */}
      </nav>

      <main>
        {children}
      </main>

      <footer style={footerStyles}>
        <p>© {new Date().getFullYear()} GEO-Nexus. All Rights Reserved.</p>
        <p>探索生成式引擎优化的前沿</p>
      </footer>
    </div>
  );
}