'use client'

import { useState } from 'react'

const projects = [
  {
    id: 'insulin-pump',
    label: 'Hardware',
    title: 'INSULIN PUMP',
    tagline: 'Open-source wearable insulin delivery system built from scratch',
    description:
      'A fully homemade insulin pump designed and built from the ground up — custom PCB, 3D-printed mechanical actuator, and embedded firmware. The device uses a PIC24F microcontroller, a DRV8210 brushed motor driver, and multiple TPS61220 boost converters to manage independent power rails for the motor, RTC, and display backlight. FRAM provides non-volatile data storage and an OLED display surfaces real-time delivery status.',
    highlights: [
      'Custom multi-rail PCB — motor, RTC, and backlight power domains',
      'PIC24FJ256GB406 microcontroller with full peripheral integration',
      'DRV8210PDSGR motor driver with current sensing feedback loop',
      'FRAM (FM25V02A-DG) for reliable non-volatile data logging',
      '3D-printed orange PLA enclosure with N20 gear motor actuator',
      'Reverse polarity protection and LiPo battery management',
    ],
    tags: ['Embedded C', 'PCB Design', 'KiCad', '3D Printing', 'PIC24F', 'Power Electronics'],
    media: [
      {
        type: 'image' as const,
        src: '/projects/pump-schema.png',
        alt: 'Full PCB schematic for the homemade insulin pump',
        caption: 'PCB Schematic — power management, MCU, motor driver, and peripheral wiring',
      },
      {
        type: 'image' as const,
        src: '/projects/actuator.jpeg',
        alt: '3D-printed orange actuator housing with N20 gear motor',
        caption: '3D-printed actuator — N20 micro gear motor driving the syringe mechanism',
      },
      {
        type: 'video' as const,
        src: '/projects/actuator-demo.mp4',
        alt: 'Video of the pump actuator running',
        caption: 'Actuator demo — motor driving the syringe plunger at speed',
      },
      {
        type: 'video' as const,
        src: '/projects/full-assembly-test.mp4',
        alt: 'Second video demo of the insulin pump mechanism',
        caption: 'Full assembly test — complete pump mechanism in operation',
      },
    ],
  },
]

export function ProjectsSection() {
  const [activeMedia, setActiveMedia] = useState<Record<string, number>>({})

  function getActiveIndex(projectId: string, count: number) {
    return (activeMedia[projectId] ?? 0) % count
  }

  function setIndex(projectId: string, index: number) {
    setActiveMedia((prev) => ({ ...prev, [projectId]: index }))
  }

  return (
    <section id="projects" className="py-24 px-6" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        <p className="font-mono text-sm text-primary mb-3 tracking-widest uppercase">
          Personal Projects
        </p>
        <h2
          id="projects-heading"
          className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance"
        >
          Things I&apos;ve Built
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mb-16 text-pretty">
          Beyond software, I build real hardware. These are hands-on projects where I&apos;ve designed
          circuits, written firmware, and fabricated physical enclosures.
        </p>

        <div className="flex flex-col gap-20">
          {projects.map((project) => {
            const activeIdx = getActiveIndex(project.id, project.media.length)
            const activeItem = project.media[activeIdx]

            return (
              <article
                key={project.id}
                className="grid lg:grid-cols-2 gap-10 items-start"
                aria-label={project.title}
              >
                {/* Media panel */}
                <div className="flex flex-col gap-3">
                  {/* Main viewer */}
                  <div
                    className="relative rounded-xl overflow-hidden border border-border bg-card aspect-video"
                    style={{ background: 'oklch(0.11 0.005 240)' }}
                  >
                    {activeItem.type === 'video' ? (
                      <video
                        key={activeItem.src}
                        src={activeItem.src}
                        controls
                        playsInline
                        className="w-full h-full object-contain"
                        aria-label={activeItem.alt}
                      />
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={activeItem.src}
                        alt={activeItem.alt}
                        className="w-full h-full object-contain"
                      />
                    )}
                  </div>

                  {/* Caption */}
                  <p className="text-xs text-muted-foreground font-mono px-1">
                    {activeItem.caption}
                  </p>

                  {/* Thumbnail strip */}
                  <div className="flex gap-2 mt-1 overflow-x-auto pb-1" role="tablist" aria-label="Media gallery">
                    {project.media.map((item, i) => (
                      <button
                        key={i}
                        role="tab"
                        aria-selected={i === activeIdx}
                        aria-label={item.alt}
                        onClick={() => setIndex(project.id, i)}
                        className={`relative rounded-lg overflow-hidden border-2 transition-all duration-150 flex-shrink-0 w-20 h-14 ${
                          i === activeIdx
                            ? 'border-primary'
                            : 'border-border hover:border-primary/40'
                        }`}
                        style={{ background: 'oklch(0.11 0.005 240)' }}
                      >
                        {item.type === 'video' ? (
                          <div className="w-full h-full flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6 text-muted-foreground"
                              aria-hidden="true"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={item.src}
                            alt=""
                            className="w-full h-full object-cover"
                            aria-hidden="true"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Info panel */}
                <div className="flex flex-col gap-5">
                  <div>
                    <span
                      className="inline-block font-mono text-xs px-2.5 py-1 rounded-full mb-3"
                      style={{
                        background: 'oklch(0.65 0.18 195 / 12%)',
                        color: 'oklch(0.65 0.18 195)',
                        border: '1px solid oklch(0.65 0.18 195 / 25%)',
                      }}
                    >
                      {project.label}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-1 text-balance">
                      {project.title}
                    </h3>
                    <p className="text-primary font-mono text-sm">{project.tagline}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                    {project.description}
                  </p>

                  <div>
                    <p className="text-xs font-semibold text-foreground uppercase tracking-widest mb-3">
                      Key Features
                    </p>
                    <ul className="flex flex-col gap-2" role="list">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ background: 'oklch(0.65 0.18 195)' }}
                            aria-hidden="true"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs px-2.5 py-1 rounded-md"
                        style={{
                          background: 'oklch(0.18 0.006 240)',
                          color: 'oklch(0.70 0.010 240)',
                          border: '1px solid oklch(1 0 0 / 8%)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
