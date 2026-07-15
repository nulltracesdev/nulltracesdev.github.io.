const botFeatures = [
  {
    title: 'Moderation Systems',
    description: 'Automated rule enforcement, warn/mute/ban workflows, and case management with full audit logs.',
  },
  {
    title: 'Ticket Systems',
    description: 'Dynamic support ticket creation, routing, escalation, and transcript archiving.',
  },
  {
    title: 'Verification Systems',
    description: 'Role-gated entry flows with CAPTCHA, reaction, and button-based verification methods.',
  },
  {
    title: 'Economy Systems',
    description: 'Virtual currency, leveling, rewards, leaderboards, and shop integrations.',
  },
  {
    title: 'Auto Moderation',
    description: 'Spam detection, word filters, raid protection, and configurable threshold rules.',
  },
  {
    title: 'Custom APIs & Database',
    description: 'RESTful API backends with PostgreSQL/Prisma persistence for stateful bot features.',
  },
  {
    title: 'Logging',
    description: 'Comprehensive event logging for message edits, deletions, joins, leaves, and moderation actions.',
  },
  {
    title: 'Slash Commands',
    description: 'Full Discord interaction API support with well-structured slash command handlers and autocomplete.',
  },
  {
    title: 'Welcome & Utility',
    description: 'Welcome messages, role assignment, permission systems, and quality-of-life utility commands.',
  },
]

export function BotsSection() {
  return (
    <section id="bots" className="py-24 px-6 bg-card/30" aria-labelledby="bots-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">
          Discord Bot Development
        </p>
        <h2
          id="bots-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
        >
          Custom Bots, Built Right
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-12 text-pretty">
          I design and develop fully custom Discord bots using TypeScript and Discord.js — built for
          reliability, performance, and real community needs. Every feature is purpose-built, not
          copy-pasted.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {botFeatures.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-5 hover:border-primary/50 transition-colors duration-200"
              style={{ ['--tw-border-opacity' as string]: '1' }}
            >
              <div
                className="w-2 h-2 rounded-full mb-4 group-hover:scale-125 transition-transform duration-200"
                style={{ background: 'oklch(0.65 0.18 195)' }}
                aria-hidden="true"
              />
              <h3 className="font-semibold text-foreground mb-2 text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div
          className="mt-10 rounded-xl border p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
          style={{ borderColor: 'oklch(0.65 0.18 195 / 30%)', background: 'oklch(0.65 0.18 195 / 5%)' }}
        >
          <div className="flex-1">
            <p className="font-semibold text-foreground mb-1">Need a custom Discord bot?</p>
            <p className="text-sm text-muted-foreground">
              Reach out on Discord and let&apos;s discuss what I can build for your community.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm whitespace-nowrap transition-all duration-200"
            style={{ background: 'oklch(0.65 0.18 195)', color: 'oklch(0.10 0.005 240)' }}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
