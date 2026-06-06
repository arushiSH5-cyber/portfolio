import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 mt-10">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()} Arushi Nirmal. Built with React + Tailwind.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/arushiSH5-cyber" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground transition-colors">
            <Github className="h-4 w-4" />
          </a>
          <a href="https://www.linkedin.com/in/arushi-s-nirmal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:arushinirmal5@gmail.com" aria-label="Email" className="hover:text-foreground transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
