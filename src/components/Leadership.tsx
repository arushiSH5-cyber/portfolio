import { Users } from "lucide-react";

type LeadershipItem = { org: string; role: string; period: string };

const LEADERSHIP: LeadershipItem[] = [
  { org: "Product Management Association, SJSU", role: "Outreach Coordinator", period: "Jun 2026 – Present" },
  { org: "IISE SJSU Chapter 806", role: "Events Coordinator", period: "May 2026 – Present" },
  { org: "Braven", role: "Outreach Officer", period: "May 2026 – Present" },
  { org: "SJSU Science Extravaganza", role: "Outreach Officer", period: "May 2026 – Present" },
  { org: "SJSU Sikh Student Association", role: "Outreach Officer", period: "Aug 2025 – Dec 2025" },
  { org: "Bioinformatics Club", role: "Treasurer", period: "Jun 2026 – Present" },
  { org: "NETS", role: "General Officer", period: "Jun 2026 – Present" },
  { org: "Girls Who Code", role: "Marketing", period: "Jun 2026 – Present" },
  { org: "Indian Student Organisation", role: "Chief Coordinator, Events", period: "Jun 2026 – Present" },
];

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono text-primary mb-2">04. Leadership</p>
          <h2 className="text-3xl md:text-4xl font-bold">Campus involvement.</h2>
          <p className="mt-4 text-muted-foreground">
            Student organizations and community outreach leadership at SJSU and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {LEADERSHIP.map((item) => (
            <div
              key={item.org}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                  <Users className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold leading-snug">{item.org}</h3>
                  <p className="text-sm text-primary mt-0.5">{item.role}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">{item.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
