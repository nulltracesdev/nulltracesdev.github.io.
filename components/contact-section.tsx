const specialties = [
  'Discord Moderation',
  'Software Engineering',
  'Discord Bot Development',
  'Community Management',
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6" aria-labelledby="contact-heading">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Contact</p>
          <h2
            id="contact-heading"
            className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
          >
            Let&apos;s Work Together
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 text-pretty">
            Whether you need an experienced moderator, a custom Discord bot, or a backend engineer,
            I&apos;m open to hearing about your project. Reach out on Discord and let&apos;s talk.
          </p>

          {/* Contact card */}
          <div className="rounded-2xl border border-border bg-card p-8 mb-8">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 font-mono text-2xl font-bold"
              style={{
                background: 'oklch(0.65 0.18 195 / 15%)',
                color: 'oklch(0.65 0.18 195)',
              }}
              aria-hidden="true"
            >
              NT
            </div>

            <p className="text-lg font-semibold text-foreground mb-1">NullTraceDev</p>
            <p className="text-sm text-muted-foreground mb-6">Discord: NullTraceDev</p>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {specialties.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs border border-border bg-secondary text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>

            <div
              className="rounded-lg border px-6 py-4 font-mono text-sm text-foreground"
              style={{ borderColor: 'oklch(0.65 0.18 195 / 30%)', background: 'oklch(0.65 0.18 195 / 5%)' }}
            >
              <span className="text-primary select-none">$ </span>
              discord.gg/NullTraceDev
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            The best way to reach me is directly on Discord. I typically respond within 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}
