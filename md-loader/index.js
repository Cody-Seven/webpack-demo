const marked = require('marked');

module.exports  = (source) => {
    // 2.方案：将 markdown 转换为 html 字符串
    const html = marked(source);
    // 1 方案：const code = JSON.stringify(html);
    return html;
}
