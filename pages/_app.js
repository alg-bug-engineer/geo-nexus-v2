// pages/_app.js

import Layout from '../components/Layout';
import '../styles/globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

// 配置字体
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // 定义一个CSS变量
});

function MyApp({ Component, pageProps }) {
  return (
    // 使用 className 将字体应用到整个应用
    <div className={`${inter.variable}`}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </div>
  );
}

export default MyApp;