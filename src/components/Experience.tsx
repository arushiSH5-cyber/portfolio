type Role = { role: string; period: string };
type Org = { org: string; roles: Role[] };

const EXPERIENCE: Org[] = [
  {
    org: "Thought GPS",
    roles: [{ role: "Product Management Intern", period: "Jun 2026 – Present" }],
  },
  {
    org: "Product Management Club, SJSU",
    roles: [{ role: "Outreach Coordinator", period: "Jun 2026 – Present" }],
  },
  {
    org: "IISE SJSU Chapter 806",
    roles: [{ role: "Events Coordinator", period: "May 2026 – Present" }],
  },
  {
    org: "Braven",
    roles: [{ role: "Outreach Officer", period: "May 2026 – Present" }],
  },
  {
    org: "SJSU Science Extravaganza",
    roles: [{ role: "Outreach Officer", period: "May 2026 – Present" }],
  },
  {
    org: "San José State University",
    roles: [
      { role: "Research Assistant", period: "May 2026 – Present" },
      {
        role: "Student Assistant, Lucas College of Business",
        period: "Feb 2026 – Present",
      },
    ],
  },
  {
    org: "Student Union, Inc. of SJSU",
    roles: [
      {
        role: "Student Supervisor, Provident Union Event Center",
        period: "Oct 2025 – Present",
      },
    ],
  },
  {
    org: "SJSU Sikh Student Association",
    roles: [{ role: "Outreach Officer", period: "Aug 2025 – Dec 2025" }],
  },
  {
    org: "Hacker Dojo",
    roles: [{ role: "Product Intern — Braven project", period: "Jun 2025 – Aug 2025" }],
  },
  {
    org: "De Anza College",
    roles: [
      { role: "Admin Assistant I, Diversity & Equity", period: "Jan 2025 – Jul 2025" },
      {
        role: "Admin Assistant II, Admissions & Records",
        period: "May 2024 – Jul 2025",
      },
      { role: "General Assistant, Outreach", period: "Apr 2024 – Jul 2024" },
      { role: "Instructional Assistant, IC-Journalism", period: "Apr 2024 – Jun 2024" },
      {
        role: "Laboratory Assistant, Environmental Studies",
        period: "Sep 2023 – Mar 2024",
      },
    ],
  },
  {
    org: "De Anza Student Government (DASG)",
    roles: [{ role: "Program Intern · Part-time", period: "Mar 2024 – Apr 2024" }],
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
          <p className="mt-4 text-muted-foreground">
            A mix of product, research, and outreach roles across SJSU, De Anza,
            and the Bay Area.
          </p>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-border md:left-3" />
          <div className="space-y-10">
            {EXPERIENCE.map((item) => (
              <div key={item.org} className="relative pl-10 md:pl-12">
                <span className="absolute left-0 top-1.5 h-4 w-4 rounded-full bg-primary shadow-glow-primary md:left-1" />
                <h3 className="text-lg font-semibold">{item.org}</h3>
                <div className="mt-2 space-y-2">
                  {item.roles.map((r, i) => (
                    <div
                      key={i}
                      className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5"
                    >
                      <span className="text-primary">{r.role}</span>
                      <span className="text-sm font-mono text-muted-foreground">
                        {r.period}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
