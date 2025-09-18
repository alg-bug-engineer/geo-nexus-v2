// lib/linking.js

/**
 * 自动将内容中的关键词链接到对应的百科页面
 * @param {string} content - 需要处理的文章内容字符串
 * @param {Array} pediaEntries - 所有百科词条的数组，用于匹配关键词
 * @returns {string} - 处理后包含HTML链接的内容字符串
 */
export function autoLinkContent(content, pediaEntries) {
  let processedContent = content;
  const linkedKeywords = new Set(); // 确保每个关键词（及其别名）只链接一次

  // 将所有词条的关键词提取出来，并按长度降序排序
  const allKeywords = pediaEntries.flatMap(entry =>
    entry.keywords.map(keyword => ({
      keyword,
      slug: entry.slug,
      title: entry.title,
      definition: entry.definition
    }))
  ).sort((a, b) => b.keyword.length - a.keyword.length);

  allKeywords.forEach(({ keyword, slug, title, definition }) => {
    // 如果这个关键词所属的词条已经被链接过了，就跳过
    if (linkedKeywords.has(title)) {
      return;
    }
    
    // 创建一个安全的、能转义特殊字符的正则表达式
    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`\\b(${escapedKeyword})\\b(?![^<]*?>)(?![^>]*?<\\/a>)`, 'i');

    if (regex.test(processedContent)) {
      // 只替换第一个匹配项
      processedContent = processedContent.replace(regex, (match) => {
        return `<a href="/pedia/${slug}" title="${definition}">${match}</a>`;
      });
      // 将词条的 "主标题" 加入Set，表示该词条（包括其所有别名）已经处理完毕
      linkedKeywords.add(title);
    }
  });

  return processedContent;
}