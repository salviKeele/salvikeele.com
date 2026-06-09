export const site = {
  name: 'Salvi Keele',
  title: 'Salvi Keele — Front-End Developer & Designer',
  description:
    'Front-end developer and designer specializing in Drupal, accessible design systems, and high-performance web experiences in Prince Edward County, Ontario.',
  url: 'https://salvikeele.ca',
  locale: 'en_CA',
  email: 'hello@salvikeele.ca',
  location: 'Prince Edward County, ON',
  resumePath: '/resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/salvikeele',
    github: 'https://github.com/salvikeele',
  },
} as const

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
] as const
