// pages/_app.js

import Layout from '../components/Layout';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

// 配置字体，subsets指定加载的字符集
const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    // 使用 className 将字体应用到整个应用
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </div>
  );
}

export default MyApp;