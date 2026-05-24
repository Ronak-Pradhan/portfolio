import Link from '@/components/Link'
import Tag from '@/components/Tag'
import EmptyStateCard from '@/components/EmptyStateCard'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import { homeContent, blogContent } from '@/data/content'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 3
const MAX_PROJECTS = 3

export default function Home({ posts }) {
  const { hero, sections } = homeContent
  const { emptyState } = blogContent

  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        {/* Hero */}
        <div className="space-y-4 pt-6 pb-10 md:space-y-6 md:pt-10 md:pb-16">
          <h1 className="text-4xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
            {hero.title}
          </h1>
          <p className="max-w-2xl text-lg leading-7 text-gray-600 md:text-xl dark:text-gray-400">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href={hero.ctas.primary.href}
              className="bg-primary-500 hover:bg-primary-600 inline-flex items-center rounded-md px-4 py-2 text-sm font-medium text-white transition"
            >
              {hero.ctas.primary.label}
            </Link>
            <Link
              href={hero.ctas.secondary.href}
              className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-50 dark:border-gray-700 dark:text-gray-100 dark:hover:bg-gray-800"
            >
              {hero.ctas.secondary.label}
            </Link>
          </div>
        </div>

        {/* Featured projects */}
        {projectsData.length > 0 && (
          <div className="space-y-5 pt-10 pb-8 md:space-y-6">
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
                {sections.projects.title}
              </h2>
              <Link
                href={sections.projects.viewAllHref}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base leading-6 font-medium"
                aria-label="All projects"
              >
                {sections.projects.viewAllLabel}
              </Link>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectsData.slice(0, MAX_PROJECTS).map((p) => (
                <li
                  key={p.title}
                  className="rounded-lg border border-gray-200 p-5 transition hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    {p.href ? (
                      <Link
                        href={p.href}
                        className="hover:text-primary-500 dark:hover:text-primary-400"
                      >
                        {p.title}
                      </Link>
                    ) : (
                      p.title
                    )}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {p.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Latest writing */}
        <div className="space-y-2 pt-10 pb-8 md:space-y-5">
          <h2 className="text-2xl leading-9 font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-gray-100">
            {sections.writing.title}
          </h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && (
            <li className="py-10">
              <EmptyStateCard title={emptyState.title}>
                <p>
                  {emptyState.home.before}
                  <Link
                    href={emptyState.home.projectsLink.href}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                  >
                    {emptyState.home.projectsLink.label}
                  </Link>
                  {emptyState.home.middle}
                  <Link
                    href={emptyState.home.contactLink.href}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-medium"
                  >
                    {emptyState.home.contactLink.label}
                  </Link>
                  {emptyState.home.after}
                </p>
              </EmptyStateCard>
            </li>
          )}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-8">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-4 xl:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl leading-7 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href={sections.writing.viewAllHref}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            {sections.writing.viewAllLabel}
          </Link>
        </div>
      )}
    </>
  )
}
