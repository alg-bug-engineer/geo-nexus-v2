// lib/toolsData.js

const tools = [
  {
    slug: 'chatgpt-plus',
    title: 'ChatGPT Plus (GPT-4)',
    summary: '地表最强的AI内容生成与创意启发工具，GEO实践的必备基础。',
    category: 'AI内容生成',
    url: 'https://chat.openai.com/',
    detailedSummary: '深度评测ChatGPT Plus (基于GPT-4)在生成式引擎优化(GEO)中的核心应用。从内容策略、Prompt工程到代码生成，探索它如何成为GEO专家的瑞士军刀。',
    takeaway: 'ChatGPT Plus不仅是内容写作工具，更是GEO策略的灵感源泉和执行效率的倍增器。善用自定义指令(Custom Instructions)是发挥其最大潜力的关键。',
    contentHtml: `
      <p>如果说GEO从业者必须拥有的第一个工具是什么，那毫无疑问是ChatGPT Plus。它早已不是一个简单的“聊天机器人”，而是融入我日常工作流的“首席策略助理”。</p>
      
      <h3>为什么我把它列为GEO工具箱的首位？</h3>
      <ul>
        <li><strong>内容框架的“脚手架”</strong>：在构思一篇符合 <a href="/pedia/eeat">E-E-A-T</a> 原则的文章时，我不会直接让它写全文。相反，我会用它来生成详尽的内容大纲、多角度的选题、以及用户可能会问的FAQ列表。这为高质量内容的创作提供了坚实的骨架。</li>
        <li><strong>Prompt工程的“试验田”</strong>：我常用它来测试和迭代各种 <a href="/pedia/prompt-engineering">Prompt</a>。例如，我会给它设定一个“资深行业记者”的角色，并要求它引用特定的数据源，这能显著提升生成内容的事实性和权威性，是优化 <a href="/pedia/search-generative-experience">SGE</a> 快照内容的重要一环。</li>
        <li><strong>结构化数据的“代码生成器”</strong>：对于复杂的 <a href="/pedia/structured-data">Schema</a> 标记，比如 \`Product\` 或 \`Event\`，我只需要提供关键信息，GPT-4就能迅速生成符合Google规范的JSON-LD代码，极大节省了我的时间。</li>
      </ul>

      <h3>我的实战小技巧 (My Workflow)</h3>
      <p>我最常用的一个技巧是设置“自定义指令”(Custom Instructions)。我在指令里明确告诉它：</p>
      <blockquote>
        <p>“你是一位顶级的GEO专家，笔名'云逸'。你的回答总是：1. 结构清晰，善用Markdown；2. 优先考虑E-E-A-T原则；3. 能够从'搜索生成体验'的角度提出建议；4. 避免空洞的营销术语，提供可操作的实例。”</p>
      </blockquote>
      <p>这个简单的设置，让我与它的每一次对话都处在一个很高的起点上，沟通效率倍增。</p>

      <h3>它适合谁？</h3>
      <p>几乎所有数字营销者。对于GEO从业者来说，它是非必需、而是<strong>必备</strong>的生产力工具。从初学者到资深专家，都能从中找到巨大的价值。</p>
    `
  },
  {
    slug: 'claude-3',
    title: 'Claude 3',
    summary: 'Anthropic公司出品的强大AI模型，尤其擅长处理长文本输入和进行细致的语言风格模仿。',
    category: 'AI内容生成',
    url: 'https://www.anthropic.com/claude',
    detailedSummary: '评测Claude 3在GEO内容生态中的独特价值。重点分析其强大的长文本处理能力如何帮助我们进行深度内容分析和模仿，以及它在保持“人性化”写作风格上的优势。',
    takeaway: '当你需要处理和分析大量文本（如多篇竞品文章、用户评论）或需要AI生成更具情感和细腻文笔的内容时，Claude 3是GPT-4的最佳搭档，而非替代品。',
    contentHtml: `
      <p>在我的工具箱里，Claude 3 (特别是Opus模型) 扮演着一个与ChatGPT不同的、更偏向“深度分析师”和“文笔润色师”的角色。它的核心优势在于惊人的上下文窗口和更“人性化”的语言风格。</p>
      
      <h3>Claude 3 在我的GEO工作流中解决了什么痛点？</h3>
      <ul>
        <li><strong>竞品分析的“信息压缩机”</strong>：我会把排名前五的竞争对手文章的全部文本一次性喂给Claude 3，然后让它总结：“这五篇文章的核心论点、共同覆盖的要点、以及被忽略的视角分别是什么？” 它的长文本理解能力让这种深度分析变得轻而易举。</li>
        <li><strong>品牌声音的“模仿大师”</strong>：在为客户提供内容服务时，我会先给Claude 3几篇客户过往的优秀文章，让它学习并总结出品牌的“声音和语调”(Tone of Voice)。之后再让它基于这个语调进行创作，一致性远超其他模型。</li>
        <li><strong>E-E-A-T中“经验”信号的放大器</strong>：我发现Claude 3在描述个人感受和经历时，语言更自然、更少AI味。我会先自己写下核心的体验和感受（草稿），然后让Claude 3帮我扩展和润色成更具可读性的故事性段落。</li>
      </ul>

      <h3>我的实战小技巧 (My Workflow)</h3>
      <p>一个绝佳的应用场景是“用户评论情感分析”。我会从电商网站、G2或Capterra上抓取一个产品的大量用户评论，丢给Claude 3，然后提出指令：</p>
      <blockquote>
        <p>“你是一名产品市场分析师。请阅读以上所有用户评论，并为我总结：1. 用户最常赞扬的三个产品优点是什么？2. 用户抱怨最多的三个缺点是什么？3. 用户的语言中，有哪些值得我们用在营销文案里的生动比喻或描述？请直接引用。”</p>
      </blockquote>
      <p>这个方法能帮我快速找到最能引发用户共鸣的内容切入点。</p>

      <h3>它适合谁？</h3>
      <p>需要进行深度文本分析、注重品牌内容风格一致性、以及追求更自然人性化文笔的内容创作者和策略师。</p>
    `
  },
  {
    slug: 'surfer-seo',
    title: 'Surfer SEO',
    summary: '结合传统SEO指标与AI的内容优化平台，善于分析SERP并给出写作建议。',
    category: 'SGE分析',
    url: 'https://surferseo.com/',
    detailedSummary: 'Surfer SEO如何在GEO时代继续发挥价值？本文将探讨如何利用其SERP分析功能来理解传统排名因素，并结合其内容编辑器来为SGE优化内容结构。',
    takeaway: 'Surfer SEO是连接传统SEO和GEO的桥梁。用它来打好“语义覆盖”和“内容结构”的基础，再用你自己的GEO洞察去进行升维打击。',
    contentHtml: `
      <p>Surfer SEO是一款老牌的内容优化工具，在GEO时代，我依然在使用它，但用法已经发生了根本性的改变。</p>
      
      <h3>我不再用它做什么？</h3>
      <p>我几乎不再执着于它的“内容分数”(Content Score)。在SGE时代，机械地堆砌关键词和LSI词汇，试图把分数从70提到90，已经意义不大。AI的理解能力远超简单的词频统计。</p>

      <h3>我依然用它做什么？</h3>
      <ul>
        <li><strong>SERP结构化分析</strong>：它的SERP分析器能快速告诉我，当前排名前十的页面平均字数是多少、标题中包含哪些核心词、以及它们都部署了哪些Schema类型。这个“宏观视角”能帮我快速建立对一个主题竞争格局的认知。</li>
        <li><strong>内容结构参考</strong>：它的“大纲”(Outline)功能非常实用。它能聚合所有竞品文章的H1, H2, H3标题，让我一目了然地看到一个“好”内容应该包含哪些逻辑模块，这对我规划文章结构很有启发。</li>
        <li><strong>内部链接机会挖掘</strong>：它的“Audit”功能可以分析现有文章，并根据相关性建议可以添加的内部链接。这对于构建<a href="/pedia/topical-authority">主题权威性</a>非常有帮助。</li>
      </ul>

      <h3>我的实战小技巧 (My Workflow)</h3>
      <p>我会将Surfer SEO和ChatGPT结合使用。首先，我用Surfer的大纲功能生成一个聚合了所有竞品标题的初步大纲。然后，我会把这个大纲扔给GPT-4，并下达指令：</p>
      <blockquote>
        <p>“这是一个关于[主题]的初步大纲，它总结了当前排名靠前的内容。请基于这个大纲，为我创造一个全新的、更具'信息增益'的视角。思考一下，我们可以从哪个被忽略的角度切入？或者，我们可以加入哪些第一手经验来让内容与众不同？”</p>
      </blockquote>
      <p>这样，我既利用了Surfer的数据分析能力，又利用了AI的创造力，实现了1+1>2的效果。</p>

      <h3>它适合谁？</h3>
      <p>数据驱动的内容团队，以及希望将传统SEO实践平滑过渡到GEO时代的SEO从业者。</p>
    `
  },
  {
    slug: 'perplexity-ai',
    title: 'Perplexity AI',
    summary: '一个对话式答案引擎，它会直接给出整合信息源的答案。研究它的答案构成，对GEO非常有启发。',
    category: 'SGE分析',
    url: 'https://www.perplexity.ai/',
    detailedSummary: 'Perplexity AI不仅是一个工具，更是我们理解未来搜索形态的一面镜子。本文分析其答案构成、信源引用机制，为我们的GEO策略提供宝贵参考。',
    takeaway: '将Perplexity作为模拟SGE的“沙盒”。定期用你的核心关键词在上面搜索，分析它引用了哪些信源、如何组织答案，能帮你提前洞察优化方向。',
    contentHtml: `
      <p>我每天都会打开Perplexity，它的重要性不在于“使用”它来创作，而在于“研究”它。在我看来，Perplexity是目前最接近Google SGE最终形态的公开产品之一。</p>
      
      <h3>为什么Perplexity对GEO从业者如此重要？</h3>
      <ul>
        <li><strong>信源引用分析</strong>：Perplexity的每一个回答都会明确列出信息来源，并编号标注。这为我们提供了一个绝佳的分析对象：它更倾向于引用哪些类型的网站？是新闻、博客、还是论坛？这些被引用的页面在内容格式上有什么共同点？</li>
        <li><strong>答案组织逻辑</strong>：观察Perplexity如何将多个来源的信息整合、提炼成一段流畅的摘要。这能给我们极大的启发，去思考如何组织我们自己的内容，使其“摘要友好”，更容易被AI采纳和重组。</li>
        <li><strong>发现内容差距 (Content Gap)</strong>：当你用一个问题去问Perplexity，如果它给出的答案不尽如人意，或者引用的来源质量不高，这恰恰就是你的机会！说明这个主题下高质量、结构清晰的内容还很稀缺。</li>
      </ul>

      <h3>我的实战小技巧 (My Workflow)</h3>
      <p>每周我会固定做一次“Perplexity-SGE模拟分析”。我会选定3-5个核心业务关键词，在Perplexity Pro（可以选择搜索模型）和Google SGE中同时搜索。然后我会对比：</p>
      <blockquote>
        <ol>
          <li>两者引用的来源重合度有多高？</li>
          <li>答案的结构和侧重点有何不同？</li>
          <li>我的网站或竞争对手的网站出现在了哪里？为什么？</li>
        </ol>
      </blockquote>
      <p>这个简单的流程，常常能带给我比任何关键词工具都有价值的洞察。</p>

      <h3>它适合谁？</h3>
      <p>所有希望提前布局SGE的SEO和内容策略师。它是一个免费的、高质量的“SGE模拟器”，能帮助你跳出传统SEO的“关键词排名”思维，转向“答案影响力”思维。</p>
    `
  },
  {
    slug: 'midjourney',
    title: 'Midjourney',
    summary: '顶级的AI图片生成工具，为您的文章一键生成高质量、风格独特的配图。',
    category: '多模态内容',
    url: 'https://www.midjourney.com/',
    detailedSummary: '在GEO时代，高质量的原创图片是建立内容差异化和“信息增益”的关键。本文分享我如何使用Midjourney为博客文章生成风格统一且富有想象力的配图。',
    takeaway: 'Midjourney的核心价值在于创造“不存在”的视觉概念图。用它来将抽象的GEO或SEO概念可视化，能极大提升内容的吸引力和独特性。',
    contentHtml: `
      <p>图库里的图片千篇一律，而且很容易与别人“撞衫”。Midjourney则彻底解决了我对文章配图的“原创性焦虑”。在<a href="/pedia/multimodal-search">多模态搜索</a>日益重要的今天，原创、高质量的图片是内容差异化的重要一环。</p>
      
      <h3>Midjourney如何为我的内容增值？</h3>
      <ul>
        <li><strong>概念可视化</strong>：如何向读者解释“语义SEO”或“知识图谱”？文字总是苍白的。我可以用Midjourney生成一张富有科技感的、数据节点相互连接的抽象图片，这比任何语言都更直观。</li>
        <li><strong>统一视觉风格</strong>：我可以为我的网站设定一个统一的视觉风格（例如，“--style raw --stylize 250”），确保所有AI生成的图片调性一致，这有助于建立专业的品牌形象。</li>
        <li><strong>提升信息增益</strong>：一张独特的、为内容量身定制的图片，本身就是一种“信息增益”。它向搜索引擎表明，这不是一篇东拼西凑的文章，而是经过精心制作的原创内容。</li>
      </ul>

      <h3>我的实战小-技巧 (My Workflow)</h3>
      <p>我的Prompt通常遵循一个简单的公式：<strong>[场景/概念] + [风格] + [技术参数]</strong>。</p>
      <blockquote>
        <p>例如，为“知识图谱”这篇文章配图，我的Prompt可能是：“A vast, interconnected web of glowing nodes and data streams, representing a knowledge graph, in a futuristic and minimalist style, cinematic lighting, --ar 16:9 --style raw”</p>
      </blockquote>
      <p>我会先生成4张备选，然后选择最满意的一张进行“Vary (Subtle)”微调，直到获得完美的效果。记住，好的图片同样需要“迭代”。</p>

      <h3>它适合谁？</h3>
      <p>对内容视觉质量有高要求的内容创作者、博主和品牌营销人员。学习它需要一点点投入，但回报是内容质量的指数级提升。</p>
    `
  },
  {
    slug: 'elevenlabs',
    title: 'ElevenLabs',
    summary: '领先的AI语音生成和克隆工具，可以将您的文章轻松转换为高质量的音频版本。',
    category: '多模态内容',
    url: 'https://elevenlabs.io/',
    detailedSummary: '将文本内容转化为音频是触达用户的另一种重要方式。本文介绍我如何使用ElevenLabs，以极低的成本为我的核心文章创建高质量的音频版本，实现内容的“一鱼多吃”。',
    takeaway: '不要把文章只当成“看”的内容。通过ElevenLabs将其转化为“听”的内容，可以满足用户在通勤、健身等场景下的消费需求，有效延长内容的生命周期。',
    contentHtml: `
      <p>很多读者向我反映，他们很想阅读我的深度文章，但很难抽出大块的整块时间。ElevenLabs让我能以极低的成本，满足他们“听文章”的需求。</p>
      
      <h3>为什么我认为音频化是GEO的加分项？</h3>
      <ul>
        <li><strong>增加用户停留时间</strong>：在页面上嵌入一个音频播放器，用户可以边听边看，或者在后台播放。这能显著增加页面的平均停留时间，是一个积极的SEO信号。</li>
        <li><strong>满足多场景需求</strong>：用户可以在开车、做饭、健身时收听你的内容，这极大地扩展了你内容的消费场景。</li>
        <li><strong>内容分发新渠道</strong>：你可以将生成的音频上传到Spotify, Apple Podcasts等播客平台，为你带来全新的流量来源。</li>
      </ul>

      <h3>我的实战小技巧 (My Workflow)</h3>
      <p>我不会直接把整篇文章丢进去生成。我会先对文章进行“音频化”改造：</p>
      <blockquote>
        <ol>
          <li><strong>简化长句</strong>：将一些复杂的书面长句，改成更适合口语表达的短句。</li>
          <li><strong>增加过渡词</strong>：在段落之间加上一些“接下来，我们来谈谈...”、“然而...”这样的过渡词，让听感更流畅。</li>
          <li><strong>选择合适的声音</strong>：ElevenLabs提供了丰富的预设声音。我会选择一个听起来沉稳、专业的声音，以符合我网站的调性。</li>
        </ol>
      </blockquote>
      <p>完成这些准备后，再进行生成，效果会好很多。</p>

      <h3>它适合谁？</h3>
      <p>希望最大化内容价值、覆盖更多用户场景的深度内容创作者，尤其是个人博主和小型内容团队。</p>
    `
  },
  {
    slug: 'ahrefs',
    title: 'Ahrefs',
    summary: '行业领先的传统SEO分析工具，其关键词研究和外链分析功能，在GEO时代依然不可或缺。',
    category: '传统SEO',
    url: 'https://ahrefs.com/',
    detailedSummary: 'Ahrefs这样的传统SEO工具在GEO时代过时了吗？完全没有。本文将分享我如何继续利用Ahrefs的关键词浏览器和外链分析功能，为我的GEO策略提供数据支撑。',
    takeaway: 'GEO也需要数据驱动。Ahrefs提供了关于“用户在搜索什么”和“谁在链接到权威内容”的最可靠数据，这些是制定任何内容策略的基石。',
    contentHtml: `
      <p>虽然我们一直在谈论GEO，但这并不意味着传统SEO工具就失去了价值。恰恰相反，像Ahrefs这样的工具提供了我们制定策略所必需的“地基”——数据。</p>
      
      <h3>在GEO工作流中，我如何使用Ahrefs？</h3>
      <ul>
        <li><strong>关键词研究（意图导向）</strong>：我使用Keywords Explorer，但关注点不再是“搜索量”和“难度”。我更关注“Also talk about”和“Also rank for”报告，它们能揭示一个核心主题下的“语义相关”子主题，这对我构建主题集群至关重要。</li>
        <li><strong>外链分析（权威性判断）</strong>：当我分析一个主题时，我会用Site Explorer查看排名靠前的竞品的外链情况。重点不是要复制他们的外链，而是要理解：“什么样的内容，能够吸引到高质量的链接？” 这能帮我判断一个主题的E-E-A-T天花板在哪里。</li>
        <li><strong>内容差距分析</strong>：我常用Ahrefs的Content Gap工具，输入几个竞争对手的域名，然后输入我的域名，它能快速告诉我：“有哪些关键词是他们都有排名，而我没有的？” 这仍然是发现内容机会最快的方法之一。</li>
      </ul>

      <h3>我的实战小技巧 (My Workflow)</h3>
      <p>我喜欢用Ahrefs的“Top Pages”报告来寻找“GEO改造”的机会。我会查看我的网站中流量最高但可能已经过时的老文章，然后思考：</p>
      <blockquote>
        <p>“这篇文章能否通过加入新的视角、第一手经验、结构化数据和多模态内容，来重新优化，使其不仅在传统搜索中排名更高，还有机会进入SGE的AI快照？”</p>
      </blockquote>
      <p>这种“旧文翻新”的策略，往往比写一篇全新的文章ROI更高。</p>

      <h3>它适合谁？</h3>
      <p>所有严肃的SEO和GEO从业者。它的价格不菲，但如果你依赖搜索流量开展业务，那么Ahrefs提供的数据洞察是无可替代的。</p>
    `
  },
  {
    slug: 'screaming-frog',
    title: 'Screaming Frog SEO Spider',
    summary: '强大的桌面端网站爬虫工具，用于进行全面的技术SEO审计，例如查找坏链、分析结构化数据等。',
    category: '传统SEO',
    url: 'https://www.screamingfrog.co.uk/seo-spider/',
    detailedSummary: '技术健康度是GEO的基础。本文将介绍我如何使用Screaming Frog进行定期的网站体检，重点关注结构化数据验证、内链分析和孤岛页面发现。',
    takeaway: '一个对爬虫不友好的网站，同样也对AI不友好。定期用Screaming Frog爬取一遍你的网站，是确保你的内容能被AI顺利发现、解析和理解的最基本保障。',
    contentHtml: `
      <p>如果说Ahrefs是我们的“外部侦察兵”，那么Screaming Frog就是我们的“内部审计师”。无论搜索算法如何变化，一个技术上无懈可击的网站永远是基础。</p>
      
      <h3>Screaming Frog在我的GEO工作流中不可或缺的三个功能：</h3>
      <ul>
        <li><strong>结构化数据验证</strong>：这是我最常用的功能。在“Structured Data”标签下，我可以一览全站所有页面的Schema部署情况，并快速发现哪些页面存在验证错误或缺失。在GEO时代，错误的Schema比没有Schema更糟糕。</li>
        <li><strong>内链可视化分析</strong>：通过它的“Force-Directed Graph”，我可以直观地看到网站的内链结构，哪些是核心枢纽页面，哪些是无人问津的“孤岛页面”(Orphan Pages)。这对于优化主题集群的链接结构非常有帮助。</li>
        <li><strong>自定义提取 (Custom Extraction)</strong>：这是一个高级但极其强大的功能。我可以用XPath或CSS Selector来提取页面上的任意元素。例如，我可以配置它来提取所有文章页的作者名和发布日期，然后导出成表格，快速审计全站内容的E-E-A-T信号是否一致。</li>
      </ul>

      <h3>我的实战小技巧 (My Workflow)</h3>
      <p>每月初，我会进行一次全站爬取，并重点检查以下问题：</p>
      <blockquote>
        <ul>
          <li>是否有404错误页面？</li>
          <li>是否有重要的页面被noindex了？</li>
          <li>所有图片是否都有alt文本？</li>
          <li>结构化数据是否存在解析错误？</li>
          <li>是否存在没有获得任何内部链接的“孤岛页面”？</li>
        </ul>
      </blockquote>
      <p>这个月度体检清单，能确保我的网站始终保持在技术上的最佳状态。</p>

      <h3>它适合谁？</h3>
      <p>技术SEO、网站管理员以及所有对网站技术健康度有要求的GEO从业者。免费版可以爬取500个URL，对于小型博客来说已经足够。</p>
    `
  }
];

export const getAllTools = () => tools;

export const getToolBySlug = (slug) => tools.find((p) => p.slug === slug);