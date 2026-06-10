import { motion } from 'framer-motion'
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
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-12">
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
      </div>
    </section>
  )
}
