import Layout from '../components/Layout';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react'; // 1. 从刚安装的包里导入Analytics组件

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics /> {/* 2. 在这里添加Analytics组件 */}
    </Layout>
  );
}

export default MyApp;