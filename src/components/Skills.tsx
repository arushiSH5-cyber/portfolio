import TechStack from "./TechStack";

const SKILL_GROUPS: Record<string, string[]> = {
  "AI & Machine Learning": ["Python", "PyTorch", "TensorFlow", "scikit-learn", "LangChain", "RAG", "Prompt Engineering", "NLP"],
  "Fintech & Data": ["SQL", "Pandas", "PostgreSQL", "REST APIs", "Financial Modeling", "Data Analysis", "Excel / Sheets"],
  "Product Management": ["Agile / Scrum", "Jira", "Figma", "User Research", "Roadmapping", "PRD Writing", "A/B Testing"],
  "Engineering": ["Java", "C++", "JavaScript", "TypeScript", "React", "Node.js", "Git & GitHub"],
};

const MARQUEE_ROW = Object.values(SKILL_GROUPS).flat();

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono text-primary mb-2">02. Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold">Tech I reach for.</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {Object.entries(SKILL_GROUPS).map(([group, items]) => (
              <div
                key={group}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="font-semibold mb-4 text-primary">{group}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {items.map((s) => (
                    <li key={s} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="lg:col-span-1">
            <TechStack />
          </div>
        </div>

        <div
          className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
          style={{ ["--duration" as string]: "30s", ["--gap" as string]: "2rem" }}
        >
          <div className="flex gap-8 animate-marquee whitespace-nowrap">
            {[...MARQUEE_ROW, ...MARQUEE_ROW].map((s, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-mono text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
