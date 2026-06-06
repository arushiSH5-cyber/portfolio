import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

type ContributionLevel = 0 | 1 | 2 | 3 | 4;

type Day = { date: string; count: number; level: ContributionLevel };

type ContributionData = {
  total: number;
  weeks: Day[][];
};

type Props = {
  username: string;
  snakeRepo?: string;
};

const HEATMAP_COLORS: Record<ContributionLevel, string> = {
  0: "hsl(var(--secondary))",
  1: "rgba(34, 197, 94, 0.30)",
  2: "rgba(34, 197, 94, 0.55)",
  3: "rgba(34, 197, 94, 0.80)",
  4: "rgba(34, 197, 94, 1.00)",
};

function emptyContributions(): ContributionData {
  const weeks: Day[][] = [];
  for (let w = 0; w < 53; w++) {
    const week: Day[] = [];
    for (let d = 0; d < 7; d++) {
      week.push({ date: "", count: 0, level: 0 });
    }
    weeks.push(week);
  }
  return { total: 0, weeks };
}

function bucketIntoWeeks(
  flat: Array<{ date: string; count: number; level: number }>
): Day[][] {
  if (!flat.length) return emptyContributions().weeks;
  const weeks: Day[][] = [];
  let current: Day[] = [];
  for (const d of flat) {
    const dayOfWeek = new Date(d.date).getDay();
    if (dayOfWeek === 0 && current.length) {
      while (current.length < 7) current.push({ date: "", count: 0, level: 0 });
      weeks.push(current);
      current = [];
    }
    current.push({
      date: d.date,
      count: d.count,
      level: Math.max(0, Math.min(4, d.level)) as ContributionLevel,
    });
  }
  if (current.length) {
    while (current.length < 7) current.push({ date: "", count: 0, level: 0 });
    weeks.push(current);
  }
  return weeks;
}

export default function GitHubActivity({
  username,
  snakeRepo = "my_portfolio",
}: Props) {
  const [data, setData] = useState<ContributionData>(emptyContributions);
  const [snakeStatus, setSnakeStatus] = useState<"loading" | "loaded" | "error">(
    "loading"
  );
  const imgRef = useRef<HTMLImageElement | null>(null);

  const snakeSrc = `https://raw.githubusercontent.com/${username}/${snakeRepo}/output/github-contribution-grid-snake-dark.svg`;
  const profileUrl = `https://github.com/${username}`;

  useEffect(() => {
    let cancelled = false;
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`
    )
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((json) => {
        if (cancelled) return;
        const total =
          typeof json?.total === "object"
            ? Object.values(json.total).reduce(
                (a: number, b) => a + (typeof b === "number" ? b : 0),
                0
              )
            : Number(json?.total) || 0;
        const weeks = bucketIntoWeeks(json?.contributions ?? []);
        setData({ total, weeks });
      })
      .catch(() => {
        /* keep empty fallback */
      });
    return () => {
      cancelled = true;
    };
  }, [username]);

  useEffect(() => {
    const img = imgRef.current;
    if (!img) {
      setSnakeStatus("loading");
      return;
    }
    if (img.complete) {
      setSnakeStatus(img.naturalWidth > 0 ? "loaded" : "error");
    } else {
      setSnakeStatus("loading");
    }
  }, [snakeSrc]);

  const showSnake = snakeStatus === "loaded";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="p-6 rounded-xl bg-card border border-border"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <Github className="h-5 w-5 text-foreground" />
          <span className="text-lg font-semibold text-foreground">
            GitHub Activity
          </span>
          <span className="px-2 py-0.5 text-xs font-medium rounded bg-success/20 text-success">
            ↗ {data.total}
          </span>
        </div>
        <a
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium border border-border rounded-md hover:bg-secondary transition-colors text-foreground"
        >
          View Profile
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <p className="mb-4 text-sm text-muted-foreground">
        {data.total} contributions in the last year
      </p>

      <div className="overflow-hidden" style={{ aspectRatio: "880 / 150" }}>
        <img
          ref={imgRef}
          key={snakeSrc}
          src={snakeSrc}
          alt={`${data.total} GitHub contributions in the last year, animated by a snake`}
          className="w-full h-auto block"
          loading="eager"
          decoding="async"
          onLoad={() => setSnakeStatus("loaded")}
          onError={() => setSnakeStatus("error")}
          style={{
            opacity: showSnake ? 1 : 0,
            transition: "opacity 200ms ease-out",
          }}
        />
      </div>

      {!showSnake && (
        <div className="overflow-x-auto">
          <div className="flex gap-[3px] pb-2">
            {data.weeks.map((week, weekIndex) => (
              <div key={weekIndex} className="flex flex-col gap-[3px]">
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="h-[10px] w-[10px] rounded-sm"
                    style={{ backgroundColor: HEATMAP_COLORS[day.level] }}
                    title={
                      day.date
                        ? `${day.count} contribution${
                            day.count === 1 ? "" : "s"
                          } on ${day.date}`
                        : undefined
                    }
                  />
                ))}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            <span className="text-xs text-muted-foreground">Less</span>
            <div className="flex gap-1">
              {([0, 1, 2, 3, 4] as ContributionLevel[]).map((level) => (
                <div
                  key={level}
                  className="h-[10px] w-[10px] rounded-sm"
                  style={{ backgroundColor: HEATMAP_COLORS[level] }}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">More</span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
