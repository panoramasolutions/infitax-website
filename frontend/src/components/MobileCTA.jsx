import { useEffect, useState } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { buildTelLink, buildWhatsAppLink } from "@/config/business";

export const MobileCTA = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const targets = ["#contact", "[data-testid=footer]"]
      .map((s) => document.querySelector(s))
      .filter(Boolean);
    if (targets.length === 0) return;

    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target, e.isIntersecting));
        setHidden(Array.from(visible.values()).some(Boolean));
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  return (
    <div
      data-testid="mobile-cta-bar"
      className={`fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-muted-sage/30 bg-ivory/95 backdrop-blur-lg transition-transform duration-500 sm:hidden ${
        hidden ? "translate-y-full" : "translate-y-0"
      }`}
    >
      <a
        data-testid="mobile-bar-call"
        href={buildTelLink()}
        className="flex items-center justify-center gap-2 border-r border-muted-sage/30 py-4 font-sans text-sm font-semibold text-midnight-ink"
      >
        <Phone size={16} /> Call
      </a>
      <a
        data-testid="mobile-bar-whatsapp"
        href={buildWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 py-4 font-sans text-sm font-semibold text-accounting-green"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
    </div>
  );
};
