
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import { rehypeAccessibleEmojis } from 'rehype-accessible-emojis'

export const computedFields = {
    readingTime: { type: 'json', resolve: (doc) => readingTime(doc.body.raw) },
    wordCount: {
        type: 'number',
        resolve: (doc) => doc.body.raw.split(/\s+/gu).length,
    },
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
}

export const Page = defineDocumentType(() => ({
    name: 'Page',
    filePathPattern: '*.mdx',
    contentType: 'mdx',
    fields: {
        title: { type: 'string', required: true },
        publishedAt: { type: 'string', required: true },
        description: { type: 'string', required: true },
        // cover: { type: 'string', required: true },
        category: { type: 'string', required: true },
        // coverWidth: { type: 'string', required: true },
        // coverHeight: { type: 'string', required: true },
    },
    computedFields: {
        slug: computedFields.slug,
    },
}))

export default makeSource({
    contentDirPath: 'data/content',
    documentTypes: [Page],
    mdx: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        rehypeCodeTitles,
        rehypePrism,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
        rehypeAccessibleEmojis,
      ],
    },
  })