// lib/pediaData.js

const pediaEntries = [
  // --- 核心概念 (Core Concepts) ---
  {
    slug: 'generative-engine-optimization',
    title: '生成式引擎优化 (GEO)',
    definition: '一种新兴的优化策略，旨在使内容在生成式AI引擎的回答中获得最佳呈现，是面向SGE时代的核心方法论。',
    relatedTerms: ['search-generative-experience', 'eeat', 'answer-engine-optimization', 'semantic-seo'],
    category: '核心概念',
    keywords: ['生成式引擎优化', 'GEO', 'Generative Engine Optimization'],
    content: {
      introduction: '生成式引擎优化（GEO）是一套全面的策略和实践，其核心目标是确保您的内容、品牌或服务能够被生成式AI（如Google的SGE）理解、采纳，并最终在AI生成的摘要性回答中占据显著位置。它超越了传统的SEO，从关注“排名”转向关注“在答案中的影响力”。',
      sections: [
        {
          title: 'GEO的核心原则',
          points: [
            '<strong>E-E-A-T优先</strong>：内容必须展现出超高的经验、专业、权威和可信度，这是AI信任的基础。',
            '<strong>语义与结构化</strong>：通过语义SEO和详尽的结构化数据（Schema）让机器准确理解内容的核心主题、实体关系和关键信息。',
            '<strong>事实与归因</strong>：提供清晰、可验证的事实，并链接到权威信源，方便AI进行事实核查和归因。',
            '<strong>多模态内容整合</strong>：结合高质量的文本、图片、图表甚至视频，提供全面、易于理解的答案。',
            '<strong>满足深层意图</strong>：不仅回答用户“是什么”，更要预测并满足他们“为什么”、“怎么办”的深层搜索意图。'
          ],
          media: {
            type: 'image',
            src: '/images/geo-principles-diagram.png', // 建议您为此创建一个图表
            alt: '生成式引擎优化的五个核心原则图示',
            caption: '图1：GEO策略的核心是围绕E-E-A-T、语义、事实、多模态和用户意图展开。'
          }
        },
        {
          title: 'GEO与传统SEO的区别',
          points: [
            '<strong>目标不同</strong>：传统SEO追求在“十大蓝链”中获得高排名；GEO追求成为AI生成答案的核心信息来源。',
            '<strong>流量逻辑不同</strong>：传统SEO的流量来自用户的直接点击；GEO的价值体现在品牌曝光、答案引用和“零点击”场景下的影响力。',
            '<strong>技术重点不同</strong>：GEO更加强调结构化数据、知识图谱构建和内容的多模态优化。',
          ]
        },
      ],
      faq: [
          {
            question: 'GEO会完全取代SEO吗？',
            answer: '不会。GEO是SEO的演进和扩展。传统SEO的技术基础（如网站可访问性、页面速度、关键词研究）依然至关重要，它们是GEO成功的基础。GEO是在此之上，增加了对生成式AI优化的一层新策略。'
          },
          {
            question: '作为初学者，我应该从哪里开始学习GEO？',
            answer: '建议从三个方面入手：1. 深入理解并实践E-E-A-T原则，提升内容质量。2. 学习并为您的网站部署核心的结构化数据（如Article, Person, FAQPage Schema）。3. 练习使用AI工具（如ChatGPT, Perplexity）来研究AI如何组织和呈现答案，从中寻找优化机会。'
          }
      ]
    }
  },
  {
    slug: 'search-generative-experience',
    title: '搜索生成体验 (SGE)',
    definition: 'Google推出的一种集成生成式AI的搜索功能，能直接在搜索结果顶部生成摘要性回答，也称为“AI快照”。',
    relatedTerms: ['generative-engine-optimization', 'zero-click-searches', 'multimodal-search'],
    category: '核心概念',
    keywords: ['搜索生成体验', 'SGE', 'Search Generative Experience', 'AI快照'],
    content: {
      introduction: '搜索生成体验（SGE）是Google对传统搜索的重大革新。它利用大型语言模型（LLM）理解用户查询的复杂意图，并实时生成一个包含关键信息、链接和多媒体内容的综合性回答，直接展示在搜索结果页的顶部，旨在为用户提供更直接、更高效的信息获取路径。',
      sections: [
        {
          title: 'SGE回答的主要构成',
          points: [
            '<strong>AI生成的摘要</strong>：这是SGE的核心，是一段总结性的文字，直接回答用户的问题。',
            '<strong>引用来源（快照卡片）</strong>：在摘要旁边或下方，通常会以卡片形式展示3-5个信息来源网站的链接、标题和缩略图。成为这些来源之一是GEO的核心目标。',
            '<strong>追问建议（Conversational Mode）</strong>：SGE会提供相关的追问问题，引导用户进行更深层次的对话式探索。',
            '<strong>多模态元素</strong>：根据查询内容，SGE的回答中可能会嵌入图片、视频、购物链接或地图等。'
          ],
           media: {
            type: 'image',
            src: '/images/sge-layout-example.png', // 建议您为此创建一个SGE界面截图或示意图
            alt: 'Google SGE搜索结果页面布局示例',
            caption: '图2：典型的SGE界面，顶部是AI生成的快照，右侧是引用的来源网站卡片。'
          }
        }
      ],
      faq: [
        {
          question: 'SGE是否会影响网站的点击率？',
          answer: '会的。因为SGE直接提供了答案，可能会导致一部分用户不再需要点击进入网站，从而增加了“零点击搜索”的比例。但同时，成为SGE的引用来源能带来极高的品牌曝光和权威性认证，这是一种新的价值体现。'
        },
        {
          question: '所有搜索都会触发SGE吗？',
          answer: '目前不会。SGE更倾向于在信息类查询（如何做、是什么）、复杂问题或需要综合多个来源才能回答的查询中被触发。对于导航类（如搜索“Facebook登录”）或许多本地查询，传统搜索结果仍然是主流。'
        }
      ]
    }
  },
  {
    slug: 'eeat',
    title: 'EEAT原则',
    definition: '经验（Experience）、专业（Expertise）、权威（Authoritativeness）、可信（Trustworthiness），是Google评估内容质量的核心标准。',
    relatedTerms: ['generative-engine-optimization', 'semantic-seo'],
    category: '核心概念',
    keywords: ['EEAT', 'E-E-A-T', 'Experience', 'Expertise', 'Authoritativeness', 'Trustworthiness', '经验', '专业', '权威', '可信'],
     content: {
      introduction: 'E-E-A-T是Google搜索质量评估指南中的黄金准则，尤其在YMYL（Your Money Your Life）领域至关重要。它不仅是传统SEO的基石，在GEO时代，它更是决定AI是否愿意信任并引用你内容的前提。其中，“经验（Experience）”是最新加入的元素，强调了第一手实践经验的重要性。',
      sections: [
        {
          title: '如何向搜索引擎展示E-E-A-T',
          points: [
            '<strong>经验 (Experience)</strong>：在内容中分享真实案例、个人经历、实验过程或使用产品的真实感受。例如，一篇评测文章如果包含作者亲自拍摄的产品使用照片，就比纯粹的参数罗列更有经验价值。',
            '<strong>专业 (Expertise)</strong>：内容应由该领域的专家撰写。通过详尽的作者介绍页面、展示作者的资质证书、行业演讲经历等方式来证明其专业性。',
            '<strong>权威 (Authoritativeness)</strong>：网站或作者是否被业内其他权威来源引用、推荐或提及。高质量的外部链接和品牌提及是权威性的重要信号。',
            '<strong>可信 (Trustworthiness)</strong>：网站需要提供清晰的联系方式、关于我们页面、隐私政策等。网站使用HTTPS加密、获得用户正面评价等也是可信度的体现。'
          ]
        }
      ],
      faq: [
        {
          question: '对于GEO来说，E-E-A-T哪个字母最重要？',
          answer: '它们同等重要，但“可信（Trustworthiness）”是基础。一个无法被信任的网站，即使内容再专业，AI模型也倾向于规避引用，以防传播错误信息。而“经验（Experience）”则是新机会点，AI难以凭空“创造”真实经验，这使得包含真实体验的内容在SGE中极具价值。'
        }
      ]
    }
  },
  {
    slug: 'answer-engine-optimization',
    title: '答案引擎优化 (AEO)',
    definition: 'AEO是GEO的前身和子集，专注于让内容成为搜索引擎精选摘要（Featured Snippets）或知识图谱的直接答案来源。',
    relatedTerms: ['generative-engine-optimization', 'structured-data', 'zero-click-searches'],
    category: '核心概念',
    keywords: ['答案引擎优化', 'AEO', 'Answer Engine Optimization'],
    content: {
      introduction: '在SGE出现之前，搜索引擎就已经在尝试直接提供答案，最典型的形式就是“精选摘要”（位于搜索结果顶部的答案框）。答案引擎优化（AEO）就是一套旨在赢得这些“零号位”的策略。AEO的许多核心思想，如结构化内容、直接回答问题等，都为后来的GEO奠定了基础。',
      sections: [
        {
          title: '核心AEO实践方法',
          points: [
            '<strong>问答式内容创作</strong>：使用明确的问句作为标题或小标题（例如，“如何更换汽车轮胎？”），并在紧随其后的段落中提供简洁、直接的答案。',
            '<strong>利用列表和表格</strong>：对于步骤、清单或数据对比类的内容，使用HTML的有序列表（`<ol>`）、无序列表（`<ul>`）和表格（`<table>`）进行格式化，非常容易被抓取为精选摘要。',
            '<strong>部署FAQPage Schema</strong>：通过结构化数据明确告诉搜索引擎页面上包含了一系列问答内容。'
          ]
        },
        {
            title: 'AEO与GEO的联系',
            points: [
                '<strong>共同的基础</strong>：AEO和GEO都强调直接回答用户问题和内容结构化的重要性。',
                '<strong>演进关系</strong>：可以将GEO视为AEO在生成式AI时代的“升级版”。AEO的目标是赢得一个固定的“答案框”，而GEO的目标是影响一个动态生成的、更复杂的“AI快照”。'
            ]
        }
      ],
      faq: [
        {
          question: '现在做AEO还有用吗？',
          answer: '非常有价值。首先，精选摘要等传统答案形式并未完全消失。其次，为AEO所做的优化（如清晰的内容结构、直接的问答形式）同样完全适用于GEO，是优化SGE表现的绝佳起点。'
        }
      ]
    }
  },
  {
    slug: 'zero-click-searches',
    title: '零点击搜索',
    definition: '指用户在搜索引擎结果页（SERP）上直接获得答案，而无需点击任何链接进入网站。',
    relatedTerms: ['search-generative-experience', 'answer-engine-optimization'],
    category: '核心概念',
    keywords: ['零点击搜索', 'Zero-Click Searches', 'No-Click Searches'],
    content: {
        introduction: '零点击搜索是搜索引擎演变为“答案引擎”的直接结果。当SERP通过精选摘要、知识面板、天气预报或SGE的AI快照直接满足了用户的搜索意图后，用户便不再有动力点击进入任何网站。这一趋势对传统的流量获取模式构成了巨大挑战。',
        sections: [
            {
                title: '导致零点击搜索的主要SERP特性',
                points: [
                    '<strong>精选摘要 (Featured Snippets)</strong>：直接展示答案的文本、列表或表格。',
                    '<strong>知识面板 (Knowledge Panels)</strong>：展示关于实体（人物、地点、公司）的结构化信息。',
                    '<strong>SGE AI快照</strong>：提供全面的生成式摘要回答。',
                    '<strong>即时工具</strong>：如计算器、单位转换器、翻译工具等。'
                ]
            },
            {
                title: 'GEO时代如何应对零点击搜索',
                points: [
                    '<strong>改变目标</strong>：将目标从“获取点击”转变为“在SERP上获得品牌和信息的曝光”。',
                    '<strong>成为信源</strong>：优化内容，使其成为SGE快照的引用来源，即使没有点击，也能在用户心中建立权威性。',
                    '<strong>优化“可点击”意图</strong>：专注于那些AI难以完全回答、需要用户深入探索的复杂主题，或者需要用户进行购买、下载等操作的商业意图查询。'
                ]
            }
        ],
        faq: [
            {
                question: '零点击搜索意味着SEO已死吗？',
                answer: '并非如此。它只是意味着SEO/GEO的目标和衡量标准需要演变。我们不能再仅仅以网站流量作为唯一的成功指标。在SERP上的品牌曝光、信息被引用、用户通过品牌词再次搜索等，都成为了新的衡量维度。'
            }
        ]
    }
  },

  // --- 技术实践 (Technical Practices) ---
  {
    slug: 'prompt-engineering',
    title: '提示工程 (Prompt)',
    definition: '设计和优化输入给AI模型的指令（Prompt），以获得高质量、高相关性输出，是与AI协作内容创作的核心技能。',
    relatedTerms: ['generative-engine-optimization', 'eeat'],
    category: '技术实践',
    keywords: ['提示工程', 'Prompt Engineering', 'Prompt'],
    content: {
        introduction: '提示工程（Prompt Engineering）是一门艺术与科学的结合。它不仅仅是向AI提问，而是通过设计结构化、包含上下文、明确指令和角色的提示词，来引导AI生成更精准、更深入、更符合特定风格和要求的内容。在GEO实践中，高质量的Prompt是规模化产出符合E-E-A-T标准内容的基础。',
        sections: [
            {
                title: '一个优秀Prompt的构成要素 (R.O.C.S.模型)',
                points: [
                    '<strong>角色 (Role)</strong>：为AI设定一个专家角色。例如，“你是一位资深的SEO分析师”。',
                    '<strong>目标 (Objective)</strong>：明确指出你希望AI完成的具体任务。例如，“请为‘GEO’这个主题撰写一篇详细的博客文章”。',
                    '<strong>上下文 (Context)</strong>：提供必要的背景信息。例如，“这篇文章的目标读者是对SEO有一定了解但对GEO感到陌生的营销人员”。',
                    '<strong>结构/格式 (Structure/Format)</strong>：指定输出的格式。例如，“请使用Markdown格式，包含一个主标题、三个H2副标题，并在结尾处提供一个FAQ部分”。'
                ],
                 media: {
                    type: 'image',
                    src: '/images/prompt-structure.png', // 建议您为此创建一个示意图
                    alt: '一个结构化的Prompt包含角色、目标、上下文和格式要求',
                    caption: '图3：结构化的Prompt能显著提升AI生成内容的质量。'
                }
            }
        ],
        faq: [
            {
                question: 'Prompt越长越好吗？',
                answer: '不一定。Prompt的质量比长度更重要。“精确”和“清晰”是关键。一个简短但指令明确的Prompt，通常比一个冗长但逻辑混乱的Prompt效果更好。关键是提供完成任务所需的所有关键信息。'
            }
        ]
    }
  },
  {
    slug: 'structured-data',
    title: '结构化数据 (Schema)',
    definition: '使用一种标准化的格式（如Schema.org）来标记您网页上的信息，以帮助搜索引擎更好地理解您的内容，是技术SEO和GEO的基石。',
    relatedTerms: ['answer-engine-optimization', 'semantic-seo', 'eeat'],
    category: '技术实践',
    keywords: ['结构化数据', 'Schema', 'Structured Data', 'Schema.org', 'JSON-LD'],
    content: {
        introduction: '结构化数据（通常指Schema.org标记）是一种“代码语言”，你可以用它来更清晰地向搜索引擎解释你页面上的内容是什么。例如，你可以标记出“这篇文章的作者是张三”、“这个产品的价格是99元”、“这个活动的举办日期是10月1日”。对于AI来说，这些明确的标签是理解和提取信息的“高速公路”。',
        sections: [
            {
                title: '对GEO至关重要的Schema类型',
                points: [
                    '<strong>Article/BlogPosting</strong>：标记文章的标题、作者、发布日期、修改日期等，是内容网站的基础。',
                    '<strong>Person/Organization</strong>：用于标记作者或组织的身份信息，是建立E-E-A-T信号的关键。',
                    '<strong>FAQPage</strong>：标记问答内容，极易被SGE和精选摘要采纳。',
                    '<strong>HowTo</strong>：标记步骤指南类内容。',
                    '<strong>Product</strong>：标记产品信息，对于电商网站至关重要。'
                ]
            },
            {
                title: '实现方法',
                points: [
                    '<strong>JSON-LD</strong>：这是Google推荐的首选格式。它是一段插入到HTML页面 `<head>` 或 `<body>` 部分的JavaScript代码块，与页面可见内容分离，易于管理和部署。',
                ]
            }
        ],
        faq: [
            {
                question: '添加结构化数据能保证我出现在SGE中吗？',
                answer: '不能保证，但能极大地增加概率。结构化数据是“敲门砖”，它让AI更容易理解你的内容。但AI最终是否引用，还取决于你的内容质量、E-E-A-T信号以及与其他信源的对比。没有结构化数据，AI可能根本不会“考虑”你的内容。'
            }
        ]
    }
  },
  {
    slug: 'semantic-seo',
    title: '语义SEO',
    definition: '超越关键词匹配，专注于内容的主题、意图和上下文，让搜索引擎从“字符串匹配”进化到“概念理解”。',
    relatedTerms: ['eeat', 'structured-data', 'generative-engine-optimization'],
    category: '核心概念',
    keywords: ['语义SEO', 'Semantic SEO'],
     content: {
        introduction: '语义SEO的核心思想是：创作内容时不再孤立地思考单个关键词，而是围绕一个“主题”或“实体”，全面地回答与该主题相关的一系列问题。搜索引擎通过理解词语之间的关系（例如，“苹果”既可以是一种水果，也可以是一个公司），来更准确地判断你的内容是否能满足用户的真实意图。',
        sections: [
            {
                title: '语义SEO的核心实践',
                points: [
                    '<strong>主题集群（Topic Clusters）</strong>：建立一个核心“支柱页面”（Pillar Page）来全面介绍一个主题，然后创建多个“集群页面”（Cluster Pages）来深入探讨该主题下的各个子话题，并通过内部链接将它们紧密连接。',
                    '<strong>实体导向（Entity-Oriented）</strong>：识别内容中的核心“实体”（如人物、地点、产品），并在内容中提供关于这些实体的清晰、准确信息，最好能与知识图谱（如Google Knowledge Graph）中的实体对应起来。',
                    '<strong>意图覆盖（Intent Coverage）</strong>：分析一个主题背后的多种搜索意图（信息类、导航类、商业类、交易类），并确保你的内容能覆盖其中一种或多种意图。'
                ]
            }
        ],
        faq: [
            {
                question: '语义SEO和GEO是什么关系？',
                answer: '语义SEO是GEO的技术和思想基础。因为生成式AI本身就是一个强大的语义理解引擎，你必须先通过语义SEO的实践，让你的内容能够被机器深度理解，才有可能在GEO的战场上取得成功。'
            }
        ]
    }
  },
  {
    slug: 'multimodal-search',
    title: '多模态搜索',
    definition: '指搜索引擎能够理解和处理多种类型的信息（文本、图片、视频、音频），并将其融合在搜索结果中。',
    relatedTerms: ['search-generative-experience'],
    category: '技术实践',
    keywords: ['多模态搜索', 'Multimodal Search', 'Google Lens'],
    content: {
        introduction: '多模态搜索意味着搜索的边界正在被打破。用户不再仅仅通过输入文字来搜索，他们可以用手机摄像头拍摄一张图片进行搜索（如Google Lens），或者未来可能用一段语音来提问。搜索引擎也同样在进化，它不仅能读懂文章，还能“看懂”图片的内容，“听懂”视频的讲解。',
        sections: [
            {
                title: 'GEO中的多模态优化策略',
                points: [
                    '<strong>图片SEO</strong>：为所有图片提供描述性、包含关键词的文件名和`alt`文本。使用如`.webp`等现代图片格式以优化加载速度。',
                    '<strong>视频SEO</strong>：将视频上传到YouTube等平台，并优化标题、描述和标签。在你的网站上嵌入视频，并提供文字记录或摘要。',
                    '<strong>内容整合</strong>：在同一篇文章中，自然地结合使用文本、高质量图片、信息图表和嵌入视频，为用户提供最丰富、最易于消费的内容体验。'
                ]
            }
        ],
        faq: [
            {
                question: '为什么多模态内容对SGE很重要？',
                answer: '因为SGE本身就是一个多模态的输出。它生成的AI快照经常会主动嵌入图片和视频来丰富答案。如果你的网站能够提供这些高质量的多模态素材，并且这些素材与文本内容高度相关，那么你的内容（包括图片和视频）被SGE选中并展示的几率就会大大增加。'
            }
        ]
    }
  }
];

export const getAllPedia = () => pediaEntries;

export const getPediaBySlug = (slug) => pediaEntries.find((p) => p.slug === slug);

export const getPediaByCategory = () => {
    const categories = {};
    pediaEntries.forEach(entry => {
        if (!categories[entry.category]) {
            categories[entry.category] = [];
        }
        categories[entry.category].push(entry);
    });
    return categories;
};