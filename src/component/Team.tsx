import { useEffect, useMemo, useRef, useState } from "react";
import Badge from "./Badge";

type Side = "start" | "end";

type Message = {
  id: number;
  side: Side;
  name: string;
  time: string;
  text: string;
  footer: string;
  avatar: string;
  bubbleClass?: string; // e.g. "chat-bubble-primary"
};

// Helper to compute a human-ish typing delay per message
const computeDelay = (text: string) => {
  const base = 2000; // ms
  const perChar = 35; // ms per character
  const max = 4000; // cap so long messages don't take too long
  return Math.min(max, base + text.length * perChar);
};

function Team() {
  const messages: Message[] = useMemo(
    () => [
      {
        id: 1,
        side: "start",
        name: "f-ei8ht",
        time: "12:45",
        text: "Why The Knight?",
        footer: "sent at 12:45",
        avatar: "/src/assets/team/f-ei8ht.png",
      },
      {
        id: 2,
        side: "end",
        name: "twok",
        time: "12:46",
        text: "Why Psyduck?",
        footer: "sent at 12:46",
        avatar: "/src/assets/team/twok.jpeg",
        bubbleClass: "chat-bubble-primary",
      },
      {
        id: 3,
        side: "start",
        name: "f-ei8ht",
        time: "12:47",
        text: "Forget it. Why did you rename the release to “final-final-v3” again?",
        footer: "sent at 12:47",
        avatar: "/src/assets/team/f-ei8ht.png",
      },
      {
        id: 4,
        side: "end",
        name: "twok",
        time: "12:48",
        text: "Because 'final-final-v2' didn't feel emotionally complete.",
        footer: "sent at 12:48",
        avatar: "/src/assets/team/twok.jpeg",
        bubbleClass: "chat-bubble-primary",
      },
      {
        id: 5,
        side: "start",
        name: "f-ei8ht",
        time: "12:49",
        text: "The build failed again… but it works perfectly on my machine.",
        footer: "sent at 12:49",
        avatar: "/src/assets/team/f-ei8ht.png",
      },
      {
        id: 6,
        side: "end",
        name: "twok",
        time: "12:50",
        text: "Then ship your machine to production. Problem solved.",
        footer: "sent at 12:50",
        avatar: "/src/assets/team/twok.jpeg",
        bubbleClass: "chat-bubble-primary",
      },
      {
        id: 7,
        side: "start",
        name: "f-ei8ht",
        time: "12:51",
        text: "Done. Production's down, but at least my machine's doing great.",
        footer: "sent at 12:51",
        avatar: "/src/assets/team/f-ei8ht.png",
      },
      {
        id: 8,
        side: "end",
        name: "twok",
        time: "12:52",
        text: "Also… why does our *Android* app preview show inside an iPhone mockup on the website?",
        footer: "sent at 12:52",
        avatar: "/src/assets/team/twok.jpeg",
        bubbleClass: "chat-bubble-primary",
      },
      {
        id: 9,
        side: "start",
        name: "f-ei8ht",
        time: "12:53",
        text: "Cross-platform marketing........ by the way good question.",
        footer: "sent at 12:53",
        avatar: "/src/assets/team/f-ei8ht.png",
      },
    ],
    []
  );

  const [visibleCount, setVisibleCount] = useState(0);
  const [typingSide, setTypingSide] = useState<Side | null>(null);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    // Reveal messages one-by-one with a brief typing indicator before each
    let cancelled = false;

    const scheduleNext = (index: number) => {
      if (cancelled || index >= messages.length) return;

      const next = messages[index];
      setTypingSide(next.side);

      const delay = computeDelay(next.text);
      const t = window.setTimeout(() => {
        if (cancelled) return;
        setTypingSide(null);
        setVisibleCount((c) => (c < messages.length ? c + 1 : c));
        scheduleNext(index + 1);
      }, delay);
      timers.current.push(t);
    };

    scheduleNext(0);

    return () => {
      cancelled = true;
      timers.current.forEach((t) => clearTimeout(t));
      timers.current = [];
    };
  }, [messages]);

  // Auto-scroll within the fixed-height chat container
  const containerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // keep scroll at bottom as messages/typing indicator appear
    el.scrollTop = el.scrollHeight;
  }, [visibleCount, typingSide]);

  return (
    <div className="hero bg-base-200 min-h-screen" id="team">
      <div className="hero-content w-full max-w-4xl flex flex-col gap-8">
        {/* Top badges row */}
        <Badge />

        {/* Conversation section with delayed reveal; fixed height, internal scroll */}
        <div
          ref={containerRef}
          className="w-full flex flex-col gap-4 h-96 sm:h-[28rem] overflow-y-auto"
        >
          {messages.slice(0, visibleCount).map((m) => (
            <div key={m.id} className={`chat chat-${m.side}`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img alt={`${m.name} avatar`} src={m.avatar} />
                </div>
              </div>
              <div className="chat-header">
                {m.name}
                <time className="text-xs opacity-50 ml-2">{m.time}</time>
              </div>
              <div className={`chat-bubble ${m.bubbleClass ?? ""}`.trim()}>
                {m.text}
              </div>
              <div className="chat-footer opacity-50">{m.footer}</div>
            </div>
          ))}

          {/* Typing indicator for the upcoming message */}
          {typingSide && visibleCount < messages.length && (
            <div className={`chat chat-${typingSide}`}>
              <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt={`${messages[visibleCount].name} avatar`}
                    src={messages[visibleCount].avatar}
                  />
                </div>
              </div>
              <div className="chat-header">
                {messages[visibleCount].name}
                <time className="text-xs opacity-50 ml-2">
                  {messages[visibleCount].time}
                </time>
              </div>
              <div
                className={`chat-bubble ${
                  messages[visibleCount].bubbleClass ?? ""
                }`.trim()}
              >
                <span className="loading loading-dots loading-sm" />
              </div>
              <div className="chat-footer opacity-50">typing…</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;
