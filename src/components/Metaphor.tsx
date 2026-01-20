import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import iconHorse from "@/assets/icon-horse.jpeg";
import iconFlatland from "@/assets/icon-flatland.jpeg";
import iconChuan from "@/assets/icon-chuan.jpeg";

const items = [
  {
    icon: iconHorse,
    title: "一马 (The Horse)",
    subtitle: "Capital & Speculation",
    desc: "像脱缰的野马，充满兽性与投机冲动。",
    enDesc: "Like a wild horse—unbridled capital and speculative impulse.",
    delay: 0
  },
  {
    icon: iconFlatland,
    title: "平川 (Flatland)",
    subtitle: "The Promised Future",
    desc: "白皮书里的 WAGMI，看起来很平，走起来很坑。",
    enDesc: "The 'We Are All Gonna Make It' promise in whitepapers. Looks flat, full of holes.",
    delay: 0.2
  },
  {
    icon: iconChuan,
    title: "川 (The Chuan)",
    subtitle: "Trumpian Terrain",
    desc: "地势突变。被承诺的 “一马平川”，实际被 “川” 带进了沟里。",
    enDesc: "Sudden terrain shift. The 'smooth path' is disrupted by the 'Chuan' (Trump) factor.",
    delay: 0.4
  }
];

export default function Metaphor() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center">
          <span className="text-amber-400">Metaphor</span> | 川的隐喻 (The Metaphor of Chuan)
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Decoding the Pun: In Chinese internet slang, "Chuan" (川) often refers to Donald Trump (川普). We deconstruct this idiom into three Web3 elements:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: item.delay, duration: 0.5 }}
            >
              <Card className="bg-slate-900 border-slate-800 h-full hover:border-amber-400/50 transition-colors overflow-hidden group">
                <CardContent className="p-0">
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={item.icon} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-amber-400 font-bold mb-4">{item.subtitle}</p>
                    <p className="text-slate-300 mb-2">{item.desc}</p>
                    <p className="text-slate-500 text-xs italic">{item.enDesc}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
