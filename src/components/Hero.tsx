import heroBg from "@/assets/hero-bg.jpeg";
import tokenIcon from "@/assets/token-icon.png";
import bnbIcon from "@/assets/icon-bnb.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, Copy } from "lucide-react";
import { toast } from "sonner";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Digital Flatland" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-8">
            <div className="relative group cursor-pointer" onClick={() => window.open('#', '_blank')}>
              <img 
                src={tokenIcon} 
                alt="$一马平川 Token Icon" 
                className="w-32 h-32 rounded-full border-4 border-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.5)] transition-transform duration-500 group-hover:rotate-12"
              />
              <div className="absolute -bottom-2 -right-2 bg-amber-400 text-black font-bold text-xs px-2 py-1 rounded-full border-2 border-black transform group-hover:scale-110 transition-transform">
                $一马平川
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white mb-2 drop-shadow-2xl">
            一马平川
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-400 mb-6 drop-shadow-lg">
            Flatland, With a Twist
          </h2>
          
          <div className="flex justify-center mb-8">
            <div 
              className="bg-black/50 backdrop-blur border border-slate-700 rounded-full pl-3 pr-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-black/70 hover:border-amber-400/50 transition-colors group active:scale-95 duration-100"
              onClick={() => {
                navigator.clipboard.writeText("0x1M4...P1NG...CHU4N");
                toast.success("Contract address copied! (Placeholder)");
              }}
            >
              <div className="flex items-center gap-2">
                <img src={bnbIcon} alt="BSC" className="w-5 h-5 object-contain" />
                <span className="text-slate-400 font-mono text-sm">CA:</span>
              </div>
              <code className="text-amber-400 font-mono text-sm tracking-wider">0x1M4...P1NG...CHU4N</code>
              <Copy className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-slate-200 font-medium">
              被承诺的顺风顺水，实际走成了高低起伏
            </p>
            <p className="text-lg md:text-xl text-slate-400 italic">
              Promised smooth sailing; reality is bumps and cliffs.
            </p>
          </div>

          <div className="inline-block bg-slate-800/80 backdrop-blur border border-amber-400/30 rounded-lg px-4 py-2 mb-10">
            <p className="font-mono text-amber-400 text-sm md:text-base">
              一个把 “祝福” 拆穿的 meme token | A meme token that exposes the too-perfect promise.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-300 font-bold text-lg px-8 rounded-full w-full sm:w-auto h-14" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Buy $一马平川 (购买代币)
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 rounded-full w-full sm:w-auto h-14 bg-transparent" asChild>
              <a href="#/culture">
                Read the Story (阅读背后故事)
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <Button size="icon" variant="ghost" className="text-white hover:text-amber-400 hover:bg-white/10 w-12 h-12 rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </Button>
            <Button size="icon" variant="ghost" className="text-white hover:text-amber-400 hover:bg-white/10 w-12 h-12 rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Send className="w-6 h-6" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
