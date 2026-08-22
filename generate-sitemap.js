/**
 * generate-sitemap.js
 * ─────────────────────────────────────────
 * هر بار که پست جدید اضافه کردید، این اسکریپت را اجرا کنید:
 *   node generate-sitemap.js
 *
 * نصب: نیازی به نصب چیزی نیست — Node.js کافیست
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://businesswebstudio.pro';
const TODAY = new Date().toISOString().split('T')[0];

// ── صفحات ثابت ──
const staticPages = [
  { url: '/', changefreq: 'monthly', priority: '1.0', lastmod: TODAY },
  { url: '/blog.html', changefreq: 'weekly', priority: '0.8', lastmod: TODAY },
];

// ── پست‌های بلاگ را از پوشه posts/ پیدا کن ──
const postsDir = path.join(__dirname, 'posts');
const postPages = [];

if (fs.existsSync(postsDir)) {
  fs.readdirSync(postsDir)
    .filter(f => f.endsWith('.html'))
    .forEach(file => {
      // تاریخ آخرین تغییر فایل را بخوان
      const stat = fs.statSync(path.join(postsDir, file));
      const lastmod = stat.mtime.toISOString().split('T')[0];
      postPages.push({
        url: `/posts/${file}`,
        changefreq: 'monthly',
        priority: '0.7',
        lastmod
      });
    });
}

// ── ساخت XML ──
const allPages = [...staticPages, ...postPages];

const xmlItems = allPages.map(page => `
  <url>
    <loc>${BASE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlItems}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml);
console.log(`✓ sitemap.xml updated — ${allPages.length} URLs (${TODAY})`);
