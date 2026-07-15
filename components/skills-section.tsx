const skillGroups = [
  {
    title: 'Languages',
    icon: '{ }',
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Technologies',
    icon: '</>',
    items: ['Node.js', 'React', 'Next.js', 'Discord.js', 'Socket.IO', 'PostgreSQL', 'Prisma', 'Git', 'REST APIs'],
  },
  {
    title: 'Discord Moderation',
    icon: '#',
    items: [
      'Large Community Moderation',
      'Rule Enforcement',
      'Conflict Resolution',
      'Appeals Handling',
      'Ticket Management',
      'Staff Supervision',
      'Community Safety',
      'Event Moderation',
      'Report Investigation',
      'User Support',
    ],
  },
  {
    title: 'Core Skills',
    icon: '~',
    items: [
      'Community Management',
      'Software Engineering',
      'Backend Development',
      'API Development',
      'Database Design',
      'Automation',
      'Problem Solving',
      'Leadership',
      'Communication',
      'Team Collaboration',
      'Performance Optimization',
      'Security Best Practices',
    ],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">Skills</p>
        <h2
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance"
        >
          Technical &amp; Professional Expertise
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-border bg-card p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-9 h-9 rounded-lg flex items-center justify-center font-mono text-sm font-bold flex-shrink-0"
                  style={{
                    background: 'oklch(0.65 0.18 195 / 15%)',
                    color: 'oklch(0.65 0.18 195)',
                  }}
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
                <h3 className="font-semibold text-foreground">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs border border-border bg-secondary text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
