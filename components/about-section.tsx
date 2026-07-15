const highlights = [
  { label: '1.5 Years', detail: 'at Rec Room Inc.' },
  { label: 'Millions', detail: 'of players served' },
  { label: '3 Domains', detail: 'Engineering, Moderation & Bots' },
  { label: '15+', detail: 'Bot features shipped' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Text */}
          <div className="flex-1">
            <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">About</p>
            <h2
              id="about-heading"
              className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance"
            >
              Builder, Moderator,{' '}
              <span className="text-gradient">Community Leader</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
              I&apos;m NullTraceDev — an experienced software engineer and Discord community expert
              who blends technical depth with a human touch. My work spans backend systems,
              automation tooling, and hands-on community moderation at scale.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">
              At Rec Room Inc., I wore multiple hats: moderating a multimillion-player community,
              engineering internal tools, triaging bugs, and collaborating across teams to ship
              meaningful improvements. The company reached a peak valuation of ~$3.5 billion before
              its closure on June 1, 2026.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              My professional goal is to leverage this cross-disciplinary experience to build
              secure, scalable, and engaging online platforms — delivering exceptional experiences
              for users and communities alike.
            </p>
          </div>

          {/* Stats grid */}
          <div className="w-full lg:w-80 grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-5 flex flex-col gap-1"
              >
                <span className="text-2xl font-bold text-gradient">{item.label}</span>
                <span className="text-xs text-muted-foreground leading-snug">{item.detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
