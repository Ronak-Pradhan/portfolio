/**
 * Next.js static export (`output: 'export'`) requires every dynamic route to
 * pre-render at least one path. When there is no real content yet (no blog posts,
 * no tags), return a single placeholder param so the build succeeds. Each page
 * component detects the placeholder and renders the empty state instead.
 */
export function withExportFallback<T extends Record<string, string | string[]>>(
  params: T[],
  fallback: T
): T[] {
  if (params.length > 0) return params
  if (process.env.EXPORT === '1') return [fallback]
  return params
}

/** Placeholder slug segment used only during static export when there are no posts. */
export const PLACEHOLDER_BLOG_SLUG = ['_']

/** Placeholder page number used only during static export when there are no posts. */
export const PLACEHOLDER_PAGE = '1'

/** Placeholder tag used only during static export when there are no tags. */
export const PLACEHOLDER_TAG = '_'
