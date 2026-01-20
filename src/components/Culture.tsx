import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Culture() {
  return (
    <section id="culture" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="text-amber-400">Culture</span> | 成语典故 × 反转
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6"
          >
            <div className="space-y-2">
              <p className="font-mono text-slate-500 text-lg">[yī mǎ píng chuān] Literal Meaning: One Horse Flat Plain</p>
              <p className="text-xl text-slate-300">
                在中文语境里，这是一句顶级的吉祥话。据
                <a href="https://baike.baidu.com/item/%E4%B8%80%E9%A9%AC%E5%B9%B3%E5%B7%9D/2007831" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline mx-1">百度百科</a>
                与
                <a href="https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=16639&webMd=2&la=0" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline mx-1">教育部成语典</a>
                记载，它源自宋代苏轼的《游径山》：
              </p>
              <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-slate-800/50 italic text-2xl text-white font-serif">
                “众峰来自天目山，势若骏马奔平川。”
              </blockquote>
            </div>
            
            <div className="space-y-2">
              <p className="text-slate-300">
                原意形容地势平坦宽广，后被引申为仕途或人生
                <strong className="text-amber-400 mx-1">“前途浩荡，无往不利”</strong>。
                每个人都爱听这句话，尤其是投资者。
              </p>
              <p className="text-slate-400 text-sm">
                Originating from the Song Dynasty poet Su Shi, it describes a vast, flat terrain where a horse can gallop freely. Figuratively, it implies a life or career with "bright prospects and no obstacles."
              </p>
            </div>

            <p className="text-xl text-white font-bold pt-4">
              然而，我们不禁要问：如果这条 “平川” 是被人为画出来的呢？
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <Card className="bg-amber-50 border-amber-200 h-full">
              <CardContent className="p-8 flex flex-col justify-center h-full">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Reality Check</h3>
                <p className="text-xl italic text-slate-700 font-serif mb-6">
                  "What if the 'flat land' is just a marketing pitch?"
                </p>
                <div className="space-y-4">
                  <p className="text-slate-800 font-medium">
                    当 “平川” 遇到 “川普”(Trump)，祝福往往变成了一种充满黑色幽默的生存挑战。
                  </p>
                  <p className="text-slate-500 text-sm">
                    When "Flat Plain" meets "Trump" (whose Chinese nickname contains the character 'Chuan'), the blessing becomes a survival challenge.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
