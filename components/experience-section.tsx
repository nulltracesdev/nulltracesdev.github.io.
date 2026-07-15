const responsibilities = [
  'Moderated a large online gaming community while enforcing community guidelines and maintaining a safe environment.',
  'Investigated reports, handled moderation cases, and resolved player disputes.',
  'Worked alongside moderators, developers, and support teams to improve community operations.',
  'Assisted with software engineering tasks, internal tools, automation, and workflow improvements.',
  'Identified bugs, documented technical issues, and provided feedback to improve the platform.',
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 bg-card/30" aria-labelledby="experience-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Experience</p>
        <h2
          id="experience-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance"
        >
          Professional History
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px ml-3 md:ml-4"
            style={{ background: 'linear-gradient(to bottom, oklch(0.65 0.18 195), transparent)' }}
            aria-hidden="true"
          />

          <article className="pl-10 md:pl-12 relative">
            {/* Timeline dot */}
            <div
              className="absolute left-0 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center"
              style={{
                borderColor: 'oklch(0.65 0.18 195)',
                background: 'oklch(0.10 0.005 240)',
              }}
              aria-hidden="true"
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: 'oklch(0.65 0.18 195)' }}
              />
            </div>

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Community Moderator &amp; Software Engineer
                </h3>
                <p className="text-primary font-medium mt-0.5">Rec Room Inc.</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border border-border bg-card text-muted-foreground">
                  1.5 Years
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-mono border border-destructive/40 bg-destructive/10 text-destructive">
                  Closed Jun 2026
                </span>
              </div>
            </div>

            {/* Company blurb */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 text-pretty max-w-2xl">
              Rec Room Inc. was a social gaming platform that reached an estimated private valuation
              of approximately{' '}
              <span className="text-foreground font-medium">$3.5 billion</span> at its peak and
              served millions of players worldwide before its permanent closure.
            </p>

            {/* Responsibilities */}
            <ul className="space-y-3" role="list">
              {responsibilities.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: 'oklch(0.65 0.18 195)' }}
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
