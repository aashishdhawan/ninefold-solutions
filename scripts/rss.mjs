import { writeFileSync, mkdirSync } from 'fs'
import path from 'path'
import { slug } from 'github-slugger'
import { escape } from 'pliny/utils/htmlEscaper.js'
import siteMetadata from '../data/siteMetadata.js'
import tagData from '../app/tag-data.json' with { type: 'json' }
import { allBlogs, allTips } from '../.contentlayer/generated/index.mjs'
import { sortPosts } from 'pliny/utils/contentlayer.js'

const outputFolder = process.env.EXPORT ? 'out' : 'public'

const generateRssItem = (config, post, section = 'blog') => `
  <item>
    <guid>${config.siteUrl}/${section}/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${config.siteUrl}/${section}/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${config.email} (${config.author})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const generateRss = (config, posts, page = 'feed.xml', section = 'blog') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(config.title)}</title>
      <link>${config.siteUrl}/${section}</link>
      <description>${escape(config.description)}</description>
      <language>${config.language}</language>
      <managingEditor>${config.email} (${config.author})</managingEditor>
      <webMaster>${config.email} (${config.author})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${config.siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map((post) => generateRssItem(config, post, section)).join('')}
    </channel>
  </rss>
`

async function generateRSS(config, allBlogs, allTips, page = 'feed.xml') {
  const publishPosts = allBlogs.filter((post) => post.draft !== true)
  // RSS for blog posts
  if (publishPosts.length > 0) {
    const rss = generateRss(config, sortPosts(publishPosts))
    writeFileSync(`./${outputFolder}/${page}`, rss)
  }

  const publishTips = allTips.filter((post) => post.draft !== true)
  // RSS for tips
  if (publishTips.length > 0) {
    const tipsRss = generateRss(config, sortPosts(publishTips), 'tips/feed.xml', 'tips')
    const tipsRssPath = path.join(outputFolder, 'tips')
    mkdirSync(tipsRssPath, { recursive: true })
    writeFileSync(path.join(tipsRssPath, page), tipsRss)
  }

  const allPosts = [...allBlogs, ...allTips]
  if (allPosts.length > 0) {
    for (const tag of Object.keys(tagData)) {
      const filteredPosts = allPosts.filter((post) => post.tags.map((t) => slug(t)).includes(tag))
      const rss = generateRss(config, filteredPosts, `tags/${tag}/${page}`)
      const rssPath = path.join(outputFolder, 'tags', tag)
      mkdirSync(rssPath, { recursive: true })
      writeFileSync(path.join(rssPath, page), rss)
    }
  }
}

const rss = () => {
  generateRSS(siteMetadata, allBlogs, allTips)
  console.log('RSS feed generated...')
}
export default rss
