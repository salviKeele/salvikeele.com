import { useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/projects'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

function ProjectPreview({
  image,
  alt,
  url,
  title,
}: {
  image: string
  alt: string
  url?: string
  title: string
}) {
  const imageElement = (
    <img
      src={image}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`h-auto w-full rounded-[5px] drop-shadow-2xl ${url ? 'transition-opacity hover:opacity-90' : ''}`}
    />
  )

  return (
    <div className="relative mx-auto w-full max-w-xl">
      {url ? (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} (opens in a new tab)`}
          className="block"
        >
          {imageElement}
        </a>
      ) : (
        imageElement
      )}
    </div>
  )
}

export function FeaturedWork() {
  const [current, setCurrent] = useState(0)
  const reducedMotion = usePrefersReducedMotion()
  const project = projects[current]
  const total = projects.length

  const goTo = useCallback((index: number) => {
    setCurrent((index + total) % total)
  }, [total])

  const prev = () => goTo(current - 1)
  const next = () => goTo(current + 1)

  const slideTransition = reducedMotion ? { duration: 0 } : { duration: 0.4 }

  return (
    <section
      id="work"
      className="border-t border-border/60 px-6 py-20 lg:px-10 lg:py-28"
      aria-labelledby="featured-work-heading"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <h2
            id="featured-work-heading"
            className="text-xs font-medium tracking-[0.25em] text-muted"
          >
            Featured work
          </h2>
        </div>

        <div
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
          role="region"
          aria-roledescription="carousel"
          aria-label="Featured projects"
        >
          <div className="relative">
            <span
              className="outline-number pointer-events-none absolute -left-4 -top-8 font-display text-[10rem] font-bold leading-none lg:-left-8 lg:text-[14rem]"
              aria-hidden
            >
              {String(project.id).padStart(2, '0')}
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, x: 20 }}
                transition={slideTransition}
                className="relative z-10 pt-16 lg:pt-24"
                aria-live="polite"
              >
                <h3 className="font-display text-2xl font-bold leading-tight lg:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-ink/80 lg:text-base">
                  {project.description}
                </p>
                {project.url && project.ctaLabel && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex items-center gap-3 bg-ink px-6 py-3.5 text-xs font-medium tracking-[0.15em] text-cream transition-opacity hover:opacity-90"
                  >
                    {project.ctaLabel}
                    <ArrowUpRight
                      size={16}
                      aria-hidden
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                )}
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-3 py-1 text-[10px] font-medium tracking-[0.15em] text-muted"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.id}
                initial={reducedMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -20 }}
                transition={slideTransition}
              >
                <ProjectPreview
                  image={project.image}
                  alt={project.imageAlt}
                  url={project.url}
                  title={project.title}
                />
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                >
                  <ArrowLeft size={16} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next project"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-ink hover:bg-ink hover:text-cream"
                >
                  <ArrowRight size={16} aria-hidden />
                </button>
              </div>

              <div
                className="flex flex-col items-end gap-1"
                role="tablist"
                aria-label="Select project"
              >
                {projects.map((p, i) => (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={i === current}
                    aria-label={`Show project ${p.title}`}
                    onClick={() => setCurrent(i)}
                    className={`text-xs font-medium tracking-widest transition-colors ${
                      i === current ? 'text-ink' : 'text-border hover:text-muted'
                    }`}
                  >
                    {String(p.id).padStart(2, '0')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
