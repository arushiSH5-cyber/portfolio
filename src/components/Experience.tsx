const EXPERIENCE = [
  {
    role: "Member",
    org: "Product Management Club, SJSU",
    period: "Present",
    bullets: [
      "Part of San José State University's Product Management Club, exploring how products go from idea to launch.",
      "Learning to bridge user needs, design, and engineering alongside my CS & Math coursework.",
    ],
  },
  {
    role: "Personal & Coursework Projects",
    org: "Self-directed",
    period: "Ongoing",
    bullets: [
      "Building web apps to learn by doing — a few are featured in the Projects section below.",
      "Strengthening my fundamentals in data structures, algorithms, and mathematics through SJSU coursework.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono text-primary mb-2">03. Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Experience &amp; involvement.
          </h2>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-border md:left-3" />
          <div className="space-y-10">
            {EXPERIENCE.map((item) => (
              <div key={item.role} className="relative pl-10 md:pl-12">
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary shadow-glow-primary md:left-1" />
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h3 className="text-lg font-semibold">
                    {item.role}{" "}
                    <span className="text-primary">@ {item.org}</span>
                  </h3>
                  <span className="text-sm font-mono text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-primary mt-1.5">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
