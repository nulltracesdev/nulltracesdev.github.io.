'use client'

import { useEffect, useState } from 'react'

const roles = [
  'Discord Moderator',
  'Software Engineer',
  'Discord Bot Developer',
  'Community Manager',
]

export function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const current = roles[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1))
        }, 60)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1))
        }, 35)
      } else {
        setRoleIndex((i) => (i + 1) % roles.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIndex])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(oklch(0.65 0.18 195) 1px, transparent 1px), linear-gradient(90deg, oklch(0.65 0.18 195) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
        aria-hidden="true"
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'oklch(0.65 0.18 195)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground mb-8">
          <span className="w-2 h-2 rounded-full bg-[oklch(0.65_0.18_195)] animate-pulse" aria-hidden="true" />
          Available for opportunities
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground text-balance">
          NullTraceDev
        </h1>

        <div className="h-10 md:h-12 flex items-center justify-center mb-6" aria-live="polite">
          <span className="text-xl md:text-2xl font-mono text-gradient">
            {displayed}
            <span className="animate-pulse text-foreground">|</span>
          </span>
        </div>

        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-10 text-pretty">
          Building scalable software, managing thriving communities, and crafting powerful Discord bots
          — with precision, care, and a passion for excellent user experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <a
            href="#experience"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 glow-primary"
            style={{ background: 'oklch(0.65 0.18 195)', color: 'oklch(0.10 0.005 240)' }}
          >
            View Experience
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg font-medium text-sm border border-border bg-card text-foreground hover:border-primary transition-all duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-border" />
        <span className="text-xs font-mono tracking-widest uppercase">scroll</span>
      </div>
    </section>
  )
}
