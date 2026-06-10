export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  imageAlt: string
  url?: string
  ctaLabel?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Prince Edward County Vineyard Navigator',
    description:
      'An interactive map-based application helping visitors explore wineries across Prince Edward County with accessible, mobile-first design.',
    tags: ['REACT', 'GOOGLE MAPS API', 'VITE', 'ACCESSIBILITY'],
    image: '/images/projects/county-vineyards.png?v=3',
    imageAlt: 'County Vineyards website shown on a laptop, featuring winery search and map discovery',
    url: 'https://countyvineyards.ca',
    ctaLabel: 'Visit County Vineyards',
  },
  {
    id: 2,
    title: 'Drupal 7 to Drupal 9 Migration',
    description:
      'Led a large-scale migration of multiple websites from Drupal 7 to Drupal 9 — modernizing architecture, design, and platform performance, security, and scalability.',
    tags: ['DRUPAL', 'MIGRATION', 'TWIG', 'WCAG 2.1'],
    image: '/images/projects/drupal-migration.png?v=3',
    imageAlt: 'Drupal migration landing page shown on a laptop with Drupal 7 to 9 upgrade messaging',
  },
  {
    id: 3,
    title: 'University of Toronto Scarborough Admissions',
    description:
      'Admissions and student recruitment experience for UTSC — helping prospective students explore programs, campus life, and how to apply through an accessible, engaging site.',
    tags: ['DRUPAL', 'UX DESIGN', 'ACCESSIBILITY', 'HIGHER ED'],
    image: '/images/projects/admissions.png?v=3',
    imageAlt: 'University of Toronto Scarborough admissions website shown on a laptop',
    url: 'https://www.utsc.utoronto.ca/admissions/',
    ctaLabel: 'Visit UTSC Admissions',
  },
]

export const expertise = [
  { number: '01', title: 'Drupal and WordPress development' },
  { number: '02', title: 'Front-End Engineering' },
  { number: '03', title: 'UI/UX Design' },
  { number: '04', title: 'Accessibility & Compliance' },
  { number: '05', title: 'Performance Optimization' },
  { number: '06', title: 'SEO & Analytics' },
]

export const stats = [
  { value: '17+', label: 'Web design and development experience' },
  { value: '80+', label: 'Drupal site migrations' },
  { value: '10+', label: 'Designed and developed custom themes' },
  { value: '2', label: 'Conference Presentations' },
]
