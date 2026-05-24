import siteMetadata from '@/data/siteMetadata'
import { contactContent } from '@/data/content'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: contactContent.pageTitle })

export default function ContactPage() {
  const { intro, email, linkedin } = contactContent

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          {contactContent.pageTitle}
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">{intro}</p>
      </div>
      <div className="grid gap-4 pt-8 sm:grid-cols-2">
        <a
          href={`mailto:${siteMetadata.email}`}
          className="group rounded-lg border border-gray-200 p-6 transition hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
        >
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{email.label}</div>
          <div className="group-hover:text-primary-500 dark:group-hover:text-primary-400 mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {siteMetadata.email}
          </div>
          <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">{email.hint}</div>
        </a>
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-lg border border-gray-200 p-6 transition hover:border-gray-300 dark:border-gray-800 dark:hover:border-gray-700"
        >
          <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {linkedin.label}
          </div>
          <div className="group-hover:text-primary-500 dark:group-hover:text-primary-400 mt-1 text-lg font-semibold text-gray-900 dark:text-gray-100">
            {linkedin.display}
          </div>
          <div className="mt-3 text-sm text-gray-500 dark:text-gray-400">{linkedin.hint}</div>
        </a>
      </div>
    </div>
  )
}
