import { Code2, Sigma, Lightbulb } from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "Computer Science",
    body: "Building software end to end — from data structures and algorithms to clean, usable interfaces.",
  },
  {
    icon: Sigma,
    title: "Mathematics",
    body: "The analytical backbone of how I think — logic, proofs, and the reasoning behind the code.",
  },
  {
    icon: Lightbulb,
    title: "Product Mindset",
    body: "Active in SJSU's Product Management Club, connecting user needs with what actually gets built.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <div className="max-w-3xl">
          <p className="text-sm font-mono text-primary mb-2">01. About</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            A quick intro.
          </h2>
          <div className="text-muted-foreground space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              I'm Arushi — a Computer Science &amp; Mathematics student at San
              José State University, based in the San José Bay Area. I like
              building things that are genuinely useful and understanding the
              ideas that make them work.
            </p>
            <p>
              Outside of class I'm a member of SJSU's Product Management Club,
              and I build side projects to learn by doing. I'm currently looking
              for internship opportunities where I can keep growing as an
              engineer.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all"
            >
              <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
