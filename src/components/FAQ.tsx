import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Q: 为什么叫一马平川？(Why this name?)",
    a: "A: 这是一个关于 “承诺 vs 现实” 的双关梗。平川象征美好的愿景，但 “川” 字在中文里暗示了不确定性。",
    enA: "A: It's a pun on \"Promise vs. Reality\". Flatland symbolizes the vision, but \"Chuan\" (Trump) implies chaos."
  },
  {
    q: "Q: 这是政治项目吗？(Is this political?)",
    a: "A: 不是。我们是 Meme，只负责吃瓜和讽刺，不站队。",
    enA: "A: No. We are a Meme token. We observe and satirize; we don't take sides."
  },
  {
    q: "Q: 路线图在哪？(Where is the Roadmap?)",
    a: "A: 在你的想象里。现实中只有波动。",
    enA: "A: In your imagination. Reality only offers volatility."
  },
  {
    q: "Q: 外国人看不懂怎么办？(Language barrier?)",
    a: "A: 告诉他们 \"Chuan\" = Trump。其他的交给图表。",
    enA: "A: Just tell them \"Chuan\" = Trump. The charts will do the rest."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="text-amber-400">FAQ</span> | 这也要问？(Seriously?)
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-slate-800 rounded-lg px-4 bg-slate-800/30">
              <AccordionTrigger className="text-lg font-bold text-white hover:text-amber-400 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-300 space-y-2 pt-2 pb-4">
                <p>{faq.a}</p>
                <p className="text-slate-500 italic">{faq.enA}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
