import { useState } from "react";
import { motion } from "framer-motion";

type TechItem = {
  name: string;
  icon: string;
  color: string;
  orbit: 1 | 2 | 3;
  angle: number;
};

const techStack: TechItem[] = [
  { name: "Python", icon: "🐍", color: "#3776AB", orbit: 1, angle: 0 },
  { name: "Java", icon: "☕", color: "#E76F00", orbit: 1, angle: 90 },
  { name: "JavaScript", icon: "📜", color: "#F7DF1E", orbit: 1, angle: 180 },
  { name: "C++", icon: "💠", color: "#00599C", orbit: 1, angle: 270 },

  { name: "React", icon: "⚛️", color: "#61DAFB", orbit: 2, angle: 30 },
  { name: "HTML", icon: "🌐", color: "#E34F26", orbit: 2, angle: 100 },
  { name: "CSS", icon: "🎨", color: "#1572B6", orbit: 2, angle: 170 },
  { name: "Node.js", icon: "🟢", color: "#339933", orbit: 2, angle: 240 },
  { name: "SQL", icon: "🗄️", color: "#4169E1", orbit: 2, angle: 310 },

  { name: "Git", icon: "🔀", color: "#F05032", orbit: 3, angle: 15 },
  { name: "GitHub", icon: "🐙", color: "#6e7681", orbit: 3, angle: 75 },
  { name: "Tailwind", icon: "💨", color: "#06B6D4", orbit: 3, angle: 135 },
  { name: "NumPy", icon: "🔢", color: "#013243", orbit: 3, angle: 195 },
  { name: "Statistics", icon: "📊", color: "#F46800", orbit: 3, angle: 255 },
  { name: "VS Code", icon: "🧩", color: "#007ACC", orbit: 3, angle: 315 },
];

const orbitRadii = [60, 100, 140] as const;
const orbitDurations = [20, 30, 40] as const;

export default function TechStack() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.2 }}
      className="p-6 h-full rounded-xl bg-card border border-border"
    >
      <div className="text-center mb-4">
        <h3 className="text-xl font-semibold text-foreground">Tech Stack</h3>
        <p className="text-sm text-muted-foreground">Hover to explore</p>
      </div>

      <div className="relative mx-auto flex h-[320px] w-full max-w-[320px] items-center justify-center">
        {orbitRadii.map((radius, idx) => (
          <div
            key={idx}
            className="absolute rounded-full border border-border/40"
            style={{ width: radius * 2, height: radius * 2 }}
          />
        ))}

        <motion.div
          className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary/50 bg-background"
          animate={{
            boxShadow: hoveredTech
              ? "0 0 30px hsla(252, 84%, 67%, 0.45)"
              : "0 0 20px hsla(252, 84%, 67%, 0.25)",
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-2xl">💻</span>
        </motion.div>

        {[1, 2, 3].map((orbitNum) => {
          const radius = orbitRadii[orbitNum - 1];
          const duration = orbitDurations[orbitNum - 1];
          const techsInOrbit = techStack.filter((t) => t.orbit === orbitNum);

          return (
            <motion.div
              key={orbitNum}
              className="absolute"
              style={{ width: radius * 2, height: radius * 2 }}
              animate={{ rotate: 360 }}
              transition={{ duration, repeat: Infinity, ease: "linear" }}
            >
              {techsInOrbit.map((tech) => {
                const angleRad = (tech.angle * Math.PI) / 180;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;
                const isHovered = hoveredTech === tech.name;

                return (
                  <motion.div
                    key={tech.name}
                    className="absolute z-20"
                    style={{
                      left: `calc(50% + ${x}px - 16px)`,
                      top: `calc(50% + ${y}px - 16px)`,
                    }}
                    animate={{ rotate: -360 }}
                    transition={{ duration, repeat: Infinity, ease: "linear" }}
                    whileHover={{ scale: 1.2 }}
                    onHoverStart={() => setHoveredTech(tech.name)}
                    onHoverEnd={() => setHoveredTech(null)}
                  >
                    <div
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border transition-all duration-300"
                      style={{
                        backgroundColor: isHovered
                          ? `${tech.color}20`
                          : "hsl(var(--card))",
                        borderColor: isHovered
                          ? tech.color
                          : "hsl(var(--border))",
                        boxShadow: isHovered
                          ? `0 0 15px ${tech.color}66`
                          : "none",
                      }}
                    >
                      <span className="text-sm">{tech.icon}</span>
                    </div>

                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded border border-border bg-background px-2 py-1 text-xs text-foreground shadow-md"
                      >
                        {tech.name}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
