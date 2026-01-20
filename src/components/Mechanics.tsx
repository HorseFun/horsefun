import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    title: "平川指数",
    enTitle: "Flatland Index",
    desc: "越 “平”，越风险。",
    enDesc: "\"The smoother the story, the higher the risk.\"",
    color: "bg-emerald-50 text-emerald-900 border-emerald-200"
  },
  {
    title: "川式波动",
    enTitle: "Trump Volatility",
    desc: "涨得快，回得更快。",
    enDesc: "\"Fast up, faster down. Governed by emotion.\"",
    color: "bg-purple-50 text-purple-900 border-purple-200"
  },
  {
    title: "塌陷时刻",
    enTitle: "Collapse Moment",
    desc: "每条平路都藏着悬崖。",
    enDesc: "\"Every flat road hides a cliff.\"",
    color: "bg-rose-50 text-rose-900 border-rose-200"
  }
];

export default function Mechanics() {
  return (
    <section className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">
          <span className="text-amber-400">Mechanics</span> | Meme 机制 (The Mechanics)
        </h2>
        <p className="text-center text-slate-400 mb-12">
          Understanding the "One Horse" Metrics:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((m, i) => (
            <Card key={i} className={`h-full border-2 ${m.color} transition-transform hover:-translate-y-2`}>
              <CardContent className="p-8 text-center flex flex-col justify-center h-full">
                <h3 className="text-3xl font-black mb-1">{m.title}</h3>
                <p className="font-mono text-sm uppercase opacity-70 mb-6 tracking-widest">{m.enTitle}</p>
                <p className="text-lg font-bold mb-2">{m.desc}</p>
                <p className="text-sm italic opacity-80">{m.enDesc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
