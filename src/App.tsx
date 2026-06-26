import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GitHubActivity from "./components/GitHubActivity";
import Leadership from "./components/Leadership";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import CampusWork from "./components/CampusWork";
import Volunteering from "./components/Volunteering";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CampusWork />
        <Leadership />
        <section id="github" className="section-padding">
          <div className="container max-w-5xl">
            <div className="max-w-3xl mb-8">
              <p className="text-sm font-mono text-primary mb-2">
                05. Open Source
              </p>
              <h2 className="text-3xl md:text-4xl font-bold">
                What I'm shipping.
              </h2>
            </div>
            <GitHubActivity username="arushiSH5-cyber" snakeRepo="profile" />
          </div>
        </section>
        <Projects />
        <Education />
        <Certifications />
        <Volunteering />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
