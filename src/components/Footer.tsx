import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { site } from '../config/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Footer() {
  const reducedMotion = usePrefersReducedMotion()
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="border-t border-border/60 px-6 py-24 lg:px-10 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : undefined }}
        >
          <h2
            id="contact-heading"
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Let&apos;s build something great
            <span className="text-accent" aria-hidden>
              .
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted lg:text-base">
            Have a project in mind or just want to say hello? I&apos;d love to
            hear from you.
          </p>

          <nav className="mt-12 flex flex-wrap items-center justify-center" aria-label="Contact links">
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex items-center gap-3 bg-ink px-8 py-4 text-xs font-medium tracking-[0.15em] text-cream transition-opacity hover:opacity-90"
            >
              <Mail size={16} aria-hidden />
              {site.email}
            </a>
          </nav>
        </motion.div>

        <div className="mt-24 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted sm:flex-row">
          <small>&copy; {year} {site.name}. All rights reserved.</small>
          <address className="not-italic tracking-[0.15em]">{site.location}</address>
        </div>
      </div>
    </footer>
  )
}
