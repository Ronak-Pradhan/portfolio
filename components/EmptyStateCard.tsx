import { ReactNode } from 'react'

interface EmptyStateCardProps {
  title: string
  children: ReactNode
}

/**
 * Dashed-border empty-state card used on the homepage and /blog listing.
 * Only handles presentation — copy comes from data/content/blog.ts.
 */
export default function EmptyStateCard({ title, children }: EmptyStateCardProps) {
  return (
    <div className="rounded-lg border border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center dark:border-gray-700 dark:bg-gray-900/40">
      <p className="text-lg font-medium text-gray-900 dark:text-gray-100">{title}</p>
      <div className="mx-auto mt-2 max-w-md text-base leading-relaxed text-gray-600 dark:text-gray-400">
        {children}
      </div>
    </div>
  )
}
