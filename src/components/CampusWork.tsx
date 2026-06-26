type Role = { role: string; period: string };
type Org = { org: string; roles: Role[] };

const CAMPUS_WORK: Org[] = [
  {
    org: "San José State University",
    roles: [
      { role: "Student Assistant, Lucas College of Business", period: "Feb 2026 – Present" },
    ],
  },
  {
    org: "De Anza College",
    roles: [
      { role: "Admin Assistant I, Diversity & Equity", period: "Jan 2025 – Jul 2025" },
      { role: "Admin Assistant II, Admissions & Records", period: "May 2024 – Jul 2025" },
      { role: "General Assistant, Outreach", period: "Apr 2024 – Jul 2024" },
      { role: "Instructional Assistant, IC-Journalism", period: "Apr 2024 – Jun 2024" },
      { role: "Laboratory Assistant, Environmental Studies", period: "Sep 2023 – Mar 2024" },
    ],
  },
  {
    org: "De Anza Student Government (DASG)",
    roles: [{ role: "Program Intern · Part-time", period: "Mar 2024 – Apr 2024" }],
  },
];

export default function CampusWork() {
  return (
    <section id="campus-work" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono text-primary mb-2">04. Campus Work</p>
          <h2 className="text-3xl md:text-4xl font-bold">Campus work.</h2>
          <p className="mt-4 text-muted-foreground">
            On-campus roles across SJSU and De Anza College — operations, outreach, and academic support.
          </p>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-2 top-2 bottom-2 w-px bg-border md:left-3" />
          <div className="space-y-10">
            {CAMPUS_WORK.map((item) => (
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
