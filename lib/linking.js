// lib/linking.js

/**
 * 自动将内容中的关键词链接到对应的百科页面
 * @param {string} content - 需要处理的文章内容字符串
 * @param {Array} pediaEntries - 所有百科词条的数组，用于匹配关键词
 * @returns {string} - 处理后包含HTML链接的内容字符串
 */
export function autoLinkContent(content, pediaEntries) {
  let processedContent = content;
  const linkedKeywords = new Set(); 

  // 将所有词条的关键词提取出来，并按长度降序排序
  const allKeywords = pediaEntries.flatMap(entry =>
    // --- 核心修改在这里 ---
    // 如果 entry.keywords 不存在，则使用一个空数组[]，避免 .map() 报错
    (entry.keywords || []).map(keyword => ({
      keyword,
      slug: entry.slug,
      title: entry.title,
      // 使用 entry.content?.introduction 或 entry.definition 作为备选
      definition: entry.content?.introduction || entry.definition
    }))
  ).sort((a, b) => b.keyword.length - a.keyword.length);

  allKeywords.forEach(({ keyword, slug, title, definition }) => {
    if (linkedKeywords.has(title)) {
      return;
    }
    
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escapedKeyword})\\b(?![^<]*?>)(?![^>]*?<\\/a>)`, 'i');

    if (regex.test(processedContent)) {
      processedContent = processedContent.replace(regex, (match) => {
        return `<a href="/pedia/${slug}" title="${definition}">${match}</a>`;
      });
      linkedKeywords.add(title);
    }
  });

  return processedContent;
}