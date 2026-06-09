import { HeartHandshake } from "lucide-react";

type Vol = { role: string; org: string };

const VOLUNTEERING: Vol[] = [
  {
    role: "Student Volunteer",
    org: "American Statistical Association — San Francisco Bay Area Chapter",
  },
  {
    role: "Student Volunteer",
    org: "Career Technical Education, De Anza College",
  },
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="section-padding">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono text-primary mb-2">09. Volunteering</p>
          <h2 className="text-3xl md:text-4xl font-bold">Giving back.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {VOLUNTEERING.map((v) => (
            <div
              key={v.org}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <HeartHandshake className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{v.role}</h3>
                  <p className="text-sm text-primary">{v.org}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
