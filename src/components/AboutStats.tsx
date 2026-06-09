import { motion } from 'framer-motion'
import { ArrowUpRight, Quote } from 'lucide-react'
import { stats } from '../data/projects'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function AboutStats() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="about"
      className="border-t border-border/60 px-6 py-20 lg:px-10 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_1.2fr_1fr] lg:gap-12">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: reducedMotion ? 0 : undefined }}
        >
          <p className="text-xs font-medium tracking-[0.25em] text-muted">About me</p>
          <h2
            id="about-heading"
            className="mt-6 font-display text-2xl font-bold leading-tight lg:text-3xl"
          >
            I turn complex problems into simple, beautiful digital solutions
            <span className="text-accent" aria-hidden>
              .
            </span>
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-muted lg:text-base">
            With over 17 years in web development, I bridge the gap between design
            and development — building accessible, scalable solutions for University
            of Toronto.
          </p>
          <a
            href="#about"
            className="group mt-8 inline-flex items-center gap-2 border border-ink px-6 py-3 text-xs font-medium tracking-[0.15em] transition-colors hover:bg-ink hover:text-cream"
          >
            More about me
            <ArrowUpRight
              size={14}
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reducedMotion ? 0 : 0.1 }}
          className="grid grid-cols-2 gap-px bg-border"
          aria-label="Career highlights"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col justify-center bg-cream p-6 lg:p-8"
            >
              <span className="font-display text-4xl font-bold lg:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-xs leading-relaxed text-muted lg:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.aside
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: reducedMotion ? 0 : 0.2 }}
          className="flex flex-col justify-center"
          aria-labelledby="recognition-heading"
        >
          <h3
            id="recognition-heading"
            className="text-xs font-medium tracking-[0.2em] text-muted"
          >
            Recognized for sharing knowledge
          </h3>
          <Quote
            size={28}
            className="mt-6 scale-x-[-1] text-accent"
            strokeWidth={1.5}
            aria-hidden
          />
          <blockquote className="mt-4 text-sm leading-relaxed text-muted lg:text-base">
            <p>
              &ldquo;Salvi has presented at Drupal conferences on design system
              architecture and accessibility best practices, helping teams build
              better web experiences.&rdquo;
            </p>
          </blockquote>
          <a
            href="#experience"
            className="group mt-6 inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] text-ink transition-colors hover:text-accent"
          >
            View presentations
            <ArrowUpRight
              size={14}
              aria-hidden
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.aside>
      </div>
    </section>
  )
}
