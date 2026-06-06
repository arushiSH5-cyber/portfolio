import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  live?: string;
  repo?: string;
  featured?: boolean;
};

const PROJECTS: Project[] = [
  {
    title: "Creatorverse",
    description:
      "A content-creator web app for adding, browsing, editing, and deleting your favorite creators — a full CRUD interface built to practice working with data and dynamic routing.",
    tags: ["JavaScript", "CSS", "HTML"],
    repo: "https://github.com/arushiSH5-cyber/creatorverse",
    featured: true,
  },
  {
    title: "Developer Portfolio",
    description:
      "This site — a responsive personal portfolio with light/dark mode, animated sections, and a live GitHub activity feed.",
    tags: ["TypeScript", "React", "Tailwind CSS", "Vite"],
    repo: "https://github.com/arushiSH5-cyber/profile",
    featured: true,
  },
];

function Card({ p }: { p: Project }) {
  return (
    <div className="group flex flex-col p-6 rounded-xl bg-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div className="h-10 w-10 rounded-lg bg-gradient-primary opacity-90 group-hover:shadow-glow-primary transition-shadow" />
        <div className="flex items-center gap-2 text-muted-foreground">
          {p.repo && (
            <a href={p.repo} aria-label="Repository" className="hover:text-foreground">
              <Github className="h-4 w-4" />
            </a>
          )}
          {p.live && (
            <a href={p.live} aria-label="Live" className="hover:text-foreground">
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
        {p.title}
      </h3>
      <p className="text-sm text-muted-foreground flex-1">{p.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {p.tags.map((t) => (
          <span
            key={t}
            className="px-2 py-1 text-xs font-mono rounded bg-secondary text-secondary-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="flex items-end justify-between mb-12 max-w-3xl">
          <div>
            <p className="text-sm font-mono text-primary mb-2">05. Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold">
              Things I've built.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <Card key={p.title} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
