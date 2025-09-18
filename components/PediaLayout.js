import Link from 'next/link';
import { useRouter } from 'next/router';

// 外部样式
const pediaContainerStyle = {
  display: 'flex',
  gap: '2rem',
};

const sidebarStyle = {
  width: '240px',
  flexShrink: 0,
  position: 'sticky',
  top: '100px', // 留出导航栏的高度
  height: 'calc(100vh - 120px)',
  overflowY: 'auto',
};

const contentStyle = {
  flexGrow: 1,
  minWidth: 0,
};

const categoryTitleStyle = {
    fontWeight: 'bold',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
    color: '#374151',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
};

const linkStyle = {
    display: 'block',
    padding: '0.5rem 0',
    color: '#6B7280',
    textDecoration: 'none',
    transition: 'color 0.2s',
};

const activeLinkStyle = {
    ...linkStyle,
    color: '#0070f3',
    fontWeight: '600',
};

export default function PediaLayout({ categories, children }) {
  const router = useRouter();

  return (
    <div style={pediaContainerStyle}>
      <aside style={sidebarStyle}>
        <nav>
          {Object.entries(categories).map(([category, entries]) => (
            <div key={category}>
              <h3 style={categoryTitleStyle}>{category}</h3>
              {entries.map(entry => (
                <Link 
                  href={`/pedia/${entry.slug}`} 
                  key={entry.slug} 
                  style={router.query.slug === entry.slug ? activeLinkStyle : linkStyle}
                >
                  {entry.title}
                </Link>
              ))}
            </div>
          ))}
        </nav>
      </aside>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
}