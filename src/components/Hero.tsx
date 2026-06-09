import { useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, UserCircle } from "lucide-react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="container relative z-10 py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
        <div className="max-w-2xl flex-1">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground mb-6 animate-fade-in">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            Open to internships
          </p>

          <h1
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05] animate-fade-in"
            style={{ animationDelay: "0.1s", animationFillMode: "both" }}
          >
            Hi, I'm <span className="text-gradient">Arushi Nirmal</span>.
            <br />
            I build with code &amp; math.
          </h1>

          <p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "both" }}
          >
            Computer Science &amp; Mathematics student at San José State
            University, active across several SJSU organizations. I love turning
            ideas into software and digging into the math behind it. Currently
            open to internship opportunities.
          </p>

          <div
            className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "both" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-medium hover:shadow-glow-primary transition-shadow"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-border bg-background hover:bg-secondary transition-colors font-medium"
            >
              Get in touch
            </a>

            <div className="flex items-center gap-1 ml-2">
              {[
                { Icon: Github, href: "https://github.com/arushiSH5-cyber", label: "GitHub" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/arushi-s-nirmal/", label: "LinkedIn" },
                { Icon: Mail, href: "mailto:arushinirmal5@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex-shrink-0 animate-fade-in"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden border-2 border-primary/30 shadow-glow-primary bg-secondary">
            {!imgError ? (
              <img
                src="/profile.jpg"
                alt="Arushi Nirmal"
                className="h-full w-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="h-full w-full flex flex-col items-center justify-center text-muted-foreground text-xs text-center p-4">
                <UserCircle className="h-20 w-20 mb-2 opacity-20" />
                <span>Add profile.jpg<br />to /public folder</span>
              </div>
            )}
          </div>
        </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
