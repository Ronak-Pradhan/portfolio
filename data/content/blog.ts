export interface BlogEmptyStateHome {
  before: string
  projectsLink: { label: string; href: string }
  middle: string
  contactLink: { label: string; href: string }
  after: string
}

export interface BlogContent {
  pageTitle: string
  emptyState: {
    title: string
    /** Structured for the homepage empty state, which embeds Link components inline. */
    home: BlogEmptyStateHome
    /** Plain string for the /blog listing page empty state. */
    blog: string
  }
}

const blogContent: BlogContent = {
  pageTitle: 'All Posts',
  emptyState: {
    title: 'Exciting things coming soon.',
    home: {
      before:
        'Writing on LLMs, evaluation, production ML, and whatever else earns a deep dive is on the way. In the meantime, browse ',
      projectsLink: { label: 'projects', href: '/projects/' },
      middle: ' or ',
      contactLink: { label: 'get in touch', href: '/contact/' },
      after: '.',
    },
    blog: "Nothing published here yet — writing on LLMs, evaluation, production ML, and whatever else earns a deep dive will appear once it's ready. Thanks for stopping by.",
  },
}

export default blogContent
