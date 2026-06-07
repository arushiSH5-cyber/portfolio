import { Award, ExternalLink } from "lucide-react";

type Cert = {
  title: string;
  issuer: string;
  issued: string;
  credentialId?: string;
};

const CERTIFICATIONS: Cert[] = [
  {
    title: "QA Process Optimization: Agile & Automated Testing",
    issuer: "Coursera",
    issued: "Mar 2026",
    credentialId: "BB21MBCZIHA2",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-mono text-primary mb-2">
            07. Certifications
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Licenses &amp; certifications.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
          {CERTIFICATIONS.map((c) => (
            <div
              key={c.title}
              className="p-6 rounded-xl bg-card border border-border hover:shadow-card-hover transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="text-sm text-primary">{c.issuer}</p>
                  <p className="text-xs font-mono text-muted-foreground mt-1">
                    Issued {c.issued}
                  </p>
                  {c.credentialId && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Credential ID: {c.credentialId}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}

          <a
            href="https://www.linkedin.com/in/arushi-s-nirmal/details/certifications/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-6 rounded-xl border border-dashed border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
          >
            View all 7 on LinkedIn
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
