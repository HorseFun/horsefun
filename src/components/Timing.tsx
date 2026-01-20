import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Timing() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-950 to-slate-900 border-b border-slate-800 relative overflow-hidden">
      {/* Abstract decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="text-red-500">Timing</span> | 天时 (Cosmic Timing)
        </h2>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/40 border-red-900/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-8 md:p-12 text-center">
              <Badge className="bg-red-600 hover:bg-red-700 text-white mb-6 px-4 py-1 text-base uppercase tracking-widest border-none">
                2026: Year of the Fire Horse
              </Badge>
              
              <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                丙午马年 × 川普归来<br/>
                <span className="text-amber-500 text-2xl md:text-4xl mt-2 block font-serif">
                  "It's Destiny, Baby!"
                </span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-red-400">🔥 东方玄学 (Eastern Mysticism)</h4>
                  <p className="text-slate-300">
                    2026 年是农历丙午年，五行属火，生肖为马。
                    <strong>火马 (Fire Horse)</strong> 象征着奔腾、能量与不可预测的爆发力。
                    还有什么比在马年发一个 “一马平川” 更吉利的事吗？
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-amber-400">🦅 西方现实 (Western Reality)</h4>
                  <p className="text-slate-300">
                    川普 (Trump) 的标志性红领带与 “火” 属性不谋而合。
                    当 “川” 普遇上 “马” 年，这是一场 <strong>Double Energy</strong> 的宇宙级对撞。
                  </p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-xl font-bold text-white italic">
                  "一马当先，平定川普时代的波动。"
                </p>
                <p className="text-slate-500 mt-2">
                  "Take the lead with the Horse, and ride through the Trumpian waves."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
