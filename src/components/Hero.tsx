import heroBg from "@/assets/hero-bg.jpeg";
import tokenIcon from "@/assets/token-icon.png";
import bnbIcon from "@/assets/icon-bnb.png";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Send, Copy, Languages } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Digital Flatland" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Language Toggle Button */}
      <div className="absolute top-4 right-4 z-20">
        <Button
          size="icon"
          variant="ghost"
          className="text-white hover:text-amber-400 hover:bg-white/10 w-12 h-12 rounded-full"
          onClick={() => setLanguage(language === "zh" ? "en" : "zh")}
          aria-label="Toggle Language"
        >
          <Languages className="w-6 h-6" />
        </Button>
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
            {t("hero.title")}
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-amber-400 mb-6 drop-shadow-lg">
            {t("hero.subtitle")}
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-xl md:text-2xl text-slate-200 font-medium">
              {t("hero.tagline")}
            </p>
            {language === "en" && (
              <p className="text-lg md:text-xl text-slate-400 italic">
                {t("hero.taglineEn")}
              </p>
            )}
          </div>

          <div className="inline-block bg-slate-800/80 backdrop-blur border border-amber-400/30 rounded-lg px-4 py-2 mb-10">
            <p className="font-mono text-amber-400 text-sm md:text-base">
              {t("hero.description")}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button size="lg" className="bg-amber-400 text-black hover:bg-amber-300 font-bold text-lg px-8 rounded-full w-full sm:w-auto h-14" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                {t("hero.buyButton")}
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-black font-bold text-lg px-8 rounded-full w-full sm:w-auto h-14 bg-transparent" asChild>
              <a href="#/culture">
                {t("hero.readStoryButton")}
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <Button size="icon" variant="ghost" className="text-white hover:text-amber-400 hover:bg-white/10 w-12 h-12 rounded-full" asChild>
              <a href="https://x.com/onehors2026" target="_blank" rel="noopener noreferrer" aria-label="X (formerly Twitter)">
                <svg viewBox="0 0 24 24" aria-hidden="true" className="w-6 h-6 fill-current">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </Button>
            {/* <Button size="icon" variant="ghost" className="text-white hover:text-amber-400 hover:bg-white/10 w-12 h-12 rounded-full" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <Send className="w-6 h-6" />
              </a>
            </Button> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
