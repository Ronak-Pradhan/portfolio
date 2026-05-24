export interface Cta {
  label: string
  href: string
}

export interface HomeContent {
  hero: {
    title: string
    subtitle: string
    ctas: {
      primary: Cta
      secondary: Cta
    }
  }
  sections: {
    projects: {
      title: string
      viewAllLabel: string
      viewAllHref: string
    }
    writing: {
      title: string
      viewAllLabel: string
      viewAllHref: string
    }
  }
}

const homeContent: HomeContent = {
  hero: {
    title: "Hi, I'm Ronak.",
    subtitle:
      'Data scientist who builds ML systems that work in production, not just in notebooks.',
    ctas: {
      primary: { label: 'See projects', href: '/projects' },
      secondary: { label: 'Get in touch', href: '/contact' },
    },
  },
  sections: {
    projects: {
      title: 'Selected projects',
      viewAllLabel: 'All projects →',
      viewAllHref: '/projects',
    },
    writing: {
      title: 'Latest writing',
      viewAllLabel: 'All posts →',
      viewAllHref: '/blog',
    },
  },
}

export default homeContent
