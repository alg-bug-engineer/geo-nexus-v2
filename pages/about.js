// pages/about.js
import Image from 'next/image';

export default function AboutPage() {
  return (
    <article>
      <div className="hero" style={{ padding: '3rem 1rem' }}>
        <h1>关于我</h1>
        <p>GEO领域的探索者、实践者与分享者。</p>
      </div>

      <div style={{ textAlign: 'center', margin: '2rem 0' }}>
        {/* 在 public 文件夹中放一张你的头像图片，命名为 avatar.png */}
        {/* <Image src="/avatar.png" alt="作者头像" width={150} height={150} style={{ borderRadius: '50%' }} /> */}
        <h2>[你的名字或昵称]</h2>
      </div>

      <section>
        <h3>我的故事</h3>
        <p>这里是你的专业背景介绍。你可以写写你是如何进入SEO领域，又为何对GEO如此充满热情。分享一些你的理念、成功的项目经验或失败的教训，让内容更真实、更有说服力。</p>
        
        <h3>创建GEO-Nexus的初衷</h3>
        <p>在这里，你可以阐述创建这个网站的目标。是记录个人成长？是分享前沿知识？还是希望能连接更多志同道合的伙伴？</p>
        
        <h3>联系我</h3>
        <p>欢迎通过以下方式与我交流：</p>
        <ul>
          <li><strong>GitHub:</strong> <a href="https://github.com/alg-bug-engineer" target="_blank" rel="noopener noreferrer">alg-bug-engineer</a></li>
          {/* 在这里添加你的其他社交链接，例如 LinkedIn, Twitter 等 */}
        </ul>
      </section>
    </article>
  );
}