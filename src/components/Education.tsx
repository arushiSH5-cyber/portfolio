import { GraduationCap } from "lucide-react";

const EDUCATION = [
  {
    school: "San José State University",
    degree: "B.S. in Computer Science, Linguistics & Mathematics",
    period: "Undergraduate",
    detail:
      "Triple focus in computer science, linguistics, and mathematics at SJSU in the Bay Area — bridging language, logic, and systems thinking.",
  },
];

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono text-primary mb-2">07. Education</p>
          <h2 className="text-3xl md:text-4xl font-bold">Where I studied.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {EDUCATION.map((e) => (
            <div
              key={e.degree}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{e.degree}</h3>
                  <p className="text-sm text-primary">{e.school}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    {e.period}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">
                    {e.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
