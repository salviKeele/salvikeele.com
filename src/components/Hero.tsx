import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { site } from '../config/site'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <section
      className="relative overflow-hidden px-6 pb-20 pt-16 lg:px-10 lg:pb-28 lg:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 text-center lg:max-w-5xl lg:gap-14">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : 0.1 }}
          className="flex w-full justify-center"
        >
          <div className="relative">
            <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-white bg-white shadow-2xl sm:h-72 sm:w-72 lg:h-64 lg:w-64 xl:h-72 xl:w-72">
              <img
                src="/images/salvi-headshot.png?v=5"
                alt="Portrait of Salvi Grace Keele, front-end developer and designer"
                width={384}
                height={384}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full scale-[1.05] object-cover object-[50%_15%]"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.7, delay: reducedMotion ? 0 : 0.2 }}
          className="max-w-2xl"
        >
          <p className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden />
            <span className="text-sm font-medium tracking-[0.25em] text-muted sm:text-base">
              Front-end developer &amp; designer
            </span>
          </p>

          <h1
            id="hero-heading"
            className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.5rem]"
          >
            I design &amp; build digital experiences that make an impact
            <span className="text-accent" aria-hidden>
              .
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-muted lg:text-lg">
            Specializing in Drupal, WordPress, front-end architecture, and accessible
            digital experiences, I combine over 17 years of web development expertise
            with AI-enhanced workflows powered by ChatGPT, Claude, Cursor, and GitHub
            Copilot to create scalable, user-centered solutions that are both performant
            and visually compelling.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            <a
              href={site.resumePath}
              download
              className="group inline-flex items-center gap-3 bg-ink px-7 py-3.5 text-xs font-medium tracking-[0.15em] text-cream transition-opacity hover:opacity-90"
            >
              Download resume.
              <Download
                size={14}
                aria-hidden
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>
      </div>

      <a
        href="#work"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex"
        aria-label="Scroll to featured work"
      >
        <span className="text-[10px] font-medium tracking-[0.2em] text-muted">
          Scroll to explore
        </span>
        <span
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
          aria-hidden
        >
          <ArrowDown size={16} className={reducedMotion ? '' : 'animate-bounce'} />
        </span>
      </a>
    </section>
  )
}
