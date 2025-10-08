import { useMemo } from "react";
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
    ],
    []
  );

  return (
    <div className="hero bg-base-200 min-h-screen" id="team">
      <div className="hero-content w-full max-w-4xl flex flex-col gap-8">
        {/* Top badges row */}
        <Badge />

        {/* Conversation section; fixed height, internal scroll; static bubbles */}
        <div className="w-full flex flex-col gap-4 h-96 sm:h-[28rem] overflow-y-auto">
          {messages.map((m) => (
            <div
              key={m.id}
              className={`chat ${
                m.side === "start" ? "chat-start" : "chat-end"
              }`}
            >
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
        </div>
      </div>
    </div>
  );
}

export default Team;
