import { motion } from "framer-motion";

export const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: i * 0.08 },
  }),
};

// Line-by-line masked reveal for editorial headlines.
export function MaskText({ lines, className = "", delay = 0, as: Tag = "h2" }) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={i} className="reveal-mask">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{ duration: 0.9, ease: EASE, delay: delay + i * 0.1 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Reveal({ children, className = "", delay = 0, y = 22 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

// Reusable section label without numeric indexing.
export function ChapterLabel({ label, light = false, className = "" }) {
  const color = light ? "text-muted-sage" : "text-graphite";
  return (
    <div className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] ${color} ${className}`}>
      <span className="h-px w-6 brand-gradient" />
      <span>{label}</span>
    </div>
  );
}

export function Eyebrow({ children, className = "", light = false, testId }) {
  return (
    <div
      data-testid={testId}
      className={`inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.24em] ${
        light ? "text-muted-sage" : "text-graphite"
      } ${className}`}
    >
      <span className="h-px w-8 brand-gradient" />
      {children}
    </div>
  );
}

// Animated thin rule (scaleX 0 -> 1)
export function LineRule({ className = "", light = false, gradient = false, delay = 0 }) {
  const bg = gradient
    ? "brand-gradient"
    : light
    ? "bg-muted-sage/25"
    : "bg-midnight-ink/15";
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      style={{ transformOrigin: "left" }}
      className={`h-px w-full ${bg} ${className}`}
    />
  );
}

// Oversized decorative financial watermark
export function BigMark({ children, className = "", light = false }) {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: light ? 0.06 : 0.05 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: EASE }}
      className={`watermark ${light ? "text-ivory" : "text-midnight-ink"} ${className}`}
      aria-hidden="true"
    >
      {children}
    </motion.span>
  );
}
