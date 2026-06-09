import { ReactNode } from 'react'
import { formatDate } from 'pliny/utils/formatDate'
import { CoreContent } from 'pliny/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'

interface LayoutProps {
  content: CoreContent<Blog>
  children: ReactNode
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
}

export default function PostLayout({ content, next, prev, children }: LayoutProps) {
  const { path, slug, date, title } = content

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="mx-auto max-w-4xl">
        <div>
          <header>
            <div className="space-y-1 border-b border-gray-200 pb-4 text-center md:pb-5 dark:border-gray-700">
              <dl>
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div className="grid-rows-[auto_1fr] divide-y divide-gray-200 pb-4 md:pb-5 xl:divide-y-0 dark:divide-gray-700">
            <div className="divide-y divide-gray-200 xl:col-span-3 xl:row-span-2 xl:pb-0 dark:divide-gray-700">
              <div className="prose prose-compact-headings dark:prose-invert dark:prose-dark max-w-none pt-4 pb-4 text-lg font-medium tracking-tight text-black md:pt-6 md:pb-5 [&_p]:text-justify">
                {children}
              </div>
            </div>
            {siteMetadata.comments && (
              <div
                className="pt-3 pb-3 text-center text-gray-700 md:pt-4 md:pb-4 dark:text-gray-300"
                id="comment"
              >
                <Comments slug={slug} />
              </div>
            )}
            <footer>
              <div className="flex flex-col text-sm font-medium sm:flex-row sm:justify-between sm:text-base">
                {prev && prev.path && (
                  <div className="pt-2 xl:pt-4">
                    <Link
                      href={`/${prev.path}`}
                      className="text-primary-700 hover:text-primary-600 dark:hover:text-primary-600"
                      aria-label={`Previous post: ${prev.title}`}
                    >
                      &larr; {prev.title}
                    </Link>
                  </div>
                )}
                {next && next.path && (
                  <div className="pt-2 xl:pt-4">
                    <Link
                      href={`/${next.path}`}
                      className="text-primary-700 hover:text-primary-600 dark:hover:text-primary-600"
                      aria-label={`Next post: ${next.title}`}
                    >
                      {next.title} &rarr;
                    </Link>
                  </div>
                )}
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
