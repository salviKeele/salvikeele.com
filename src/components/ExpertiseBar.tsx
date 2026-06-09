import { motion } from 'framer-motion'
import { expertise } from '../data/projects'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function ExpertiseBar() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      id="experience"
      className="border-t border-border/60 bg-surface px-6 py-14 text-ink lg:px-10 lg:py-16"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="experience-heading"
          className="mb-10 text-xs font-medium tracking-[0.25em] text-muted"
        >
          Expertise
        </h2>

        <ol className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {expertise.map((item, i) => (
            <motion.li
              key={item.number}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reducedMotion ? 0 : i * 0.08 }}
              className="border-l border-border pl-4 lg:pl-5"
            >
              <span className="text-xs font-medium tracking-widest text-accent">
                {item.number}
              </span>
              <p className="mt-2 font-display text-sm font-semibold leading-snug lg:text-base">
                {item.title}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
