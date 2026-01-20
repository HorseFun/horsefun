import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function Ethos() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="text-amber-400">Ethos</span> | Web3 避难所 (The Sanctuary)
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Our Creed */}
          <Card className="bg-slate-900 border-slate-800 h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white text-center">
                我们的信仰 (Our Creed)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-green-500/20 p-2 rounded-full h-fit">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">去中心化 (Decentralized)</h4>
                    <p className="text-slate-400">没有总统，只有合约。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-green-500/20 p-2 rounded-full h-fit">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Code is Law</h4>
                    <p className="text-slate-400">算法不撒谎，不像政客。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-green-500/20 p-2 rounded-full h-fit">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">共识即梗 (Consensus as Meme)</h4>
                    <p className="text-slate-400">幽默是我们唯一的武器。</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* No False Promises */}
          <Card className="bg-slate-100 border-2 border-slate-900 h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-900 text-center">
                拒绝画饼 (No False Promises)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="bg-red-500/10 p-2 rounded-full h-fit">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">No Roadmap</h4>
                    <p className="text-slate-600">路是走出来的，不是画出来的。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-red-500/10 p-2 rounded-full h-fit">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">No Saving the World</h4>
                    <p className="text-slate-600">我们只负责搞笑，不负责救世。</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="bg-red-500/10 p-2 rounded-full h-fit">
                    <X className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Just Meme</h4>
                    <p className="text-slate-600">别太当真，除了你的私钥。</p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
