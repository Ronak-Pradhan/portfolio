export interface ContactCard {
  label: string
  /** Display value shown in the card body (not the URL itself — URL comes from siteMetadata). */
  display: string
  hint: string
}

export interface ContactContent {
  pageTitle: string
  intro: string
  email: ContactCard
  linkedin: ContactCard
}

const contactContent: ContactContent = {
  pageTitle: 'Contact',
  intro: 'The fastest way to reach me. I read everything.',
  email: {
    label: 'Email',
    display: '', // intentionally empty — component uses siteMetadata.email at runtime
    hint: 'Best for anything substantive.',
  },
  linkedin: {
    label: 'LinkedIn',
    display: 'ronak-pradhan',
    hint: 'Best for intros and quick messages.',
  },
}

export default contactContent
