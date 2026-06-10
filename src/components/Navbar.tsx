import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../config/site'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-cream/90 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
        aria-label="Primary"
      >
        <a
          href="#main-content"
          className="font-display text-xl font-bold tracking-tight"
          onClick={closeMenu}
        >
          Salvi Grace Keele<span className="text-accent">.</span>
          <span className="sr-only">, home</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-xs font-medium tracking-[0.2em] text-ink uppercase transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-border"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={18} aria-hidden /> : <Menu size={18} aria-hidden />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          id="mobile-nav"
          className="border-t border-border/60 bg-cream px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block text-sm font-medium tracking-[0.15em] text-ink uppercase"
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium tracking-[0.15em] text-ink uppercase"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
