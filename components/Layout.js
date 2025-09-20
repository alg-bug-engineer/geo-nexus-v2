import Link from 'next/link';
import Head from 'next/head';

// --- Styles defined outside component for performance ---
const headerStyles = {
    width: '100%',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid #E5E7EB',
    position: 'sticky',
    top: 0,
    zIndex: 10,
};

const navStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '1rem',
    gap: '30px',
};

const linkStyles = {
    color: '#374151',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.2s',
};

// --- 样式优化：为页脚链接创建一个独立的样式对象 ---
const footerLinkStyles = {
    color: '#9CA3AF', // 使用页脚次要文字颜色
    textDecoration: 'none',
    fontSize: '0.9rem',
    transition: 'color 0.2s',
};


const footerStyles = {
    textAlign: 'center',
    padding: '2rem 1rem',
    marginTop: '4rem',
    borderTop: '1px solid #E5E7EB',
    color: '#9CA3AF',
    fontSize: '0.9rem',
}

function NavLink({ href, children }) {
  return (
    <Link href={href} style={linkStyles} 
        onMouseEnter={(e) => e.target.style.color = '#0070f3'} 
        onMouseLeave={(e) => e.target.style.color = '#374151'}>
      {children}
    </Link>
  );
}

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>GEO-Nexus</title>
        <meta name="description" content="探索下一代搜索，实践GEO" />
        <link rel="icon" href="/favicon.ico" />
        {/* Font links can be removed if using next/font */}
      </Head>

      <header style={headerStyles}>
        <nav style={navStyles}>
            <NavLink href="/">首页</NavLink>
            <NavLink href="/pedia">GEO百科</NavLink>
            <NavLink href="/blog">实战日志</NavLink>
            <NavLink href="/tools">工具箱</NavLink>
            <NavLink href="/about">关于我</NavLink>
        </nav>
      </header>

      <main>
        {children}
      </main>

      {/* --- 这是修改后的页脚部分 --- */}
      <footer style={footerStyles}>
        <p>© {new Date().getFullYear()} GEO-Nexus. All Rights Reserved.</p>
        <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1.5rem' }}>
          <Link 
            href="/about" 
            style={footerLinkStyles}
            onMouseEnter={(e) => e.target.style.color = '#374151'}
            onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
          >
            关于我
          </Link>
          {/* 使用 a 标签来创建 mailto 链接 */}
          <a 
            href="mailto:646184101@qq.com" 
            style={footerLinkStyles}
            onMouseEnter={(e) => e.target.style.color = '#374151'}
            onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
          >
            联系方式
          </a>
          <Link 
            href="/privacy-policy" 
            style={footerLinkStyles}
            onMouseEnter={(e) => e.target.style.color = '#374151'}
            onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}
          >
            隐私政策
          </Link>
        </div>
      </footer>
    </div>
  );
}