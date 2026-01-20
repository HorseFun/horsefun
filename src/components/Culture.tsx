import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Culture() {
  const { t, language } = useLanguage();
  return (
    <section id="culture" className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="text-amber-400">Culture</span> | {t("culture.title")}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-6"
          >
            <div className="space-y-2">
              <p className="font-mono text-slate-500 text-lg">{t("culture.literal")}</p>
              <p className="text-xl text-slate-300">
                {t("culture.intro")}
                <a href="https://baike.baidu.com/item/%E4%B8%80%E9%A9%AC%E5%B9%B3%E5%B7%9D/2007831" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline mx-1">{t("culture.baidu")}</a>
                {language === "zh" ? "与" : " and "}
                <a href="https://dict.idioms.moe.edu.tw/idiomView.jsp?ID=16639&webMd=2&la=0" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline mx-1">{t("culture.education")}</a>
                {t("culture.origin")}
              </p>
              <blockquote className="border-l-4 border-amber-400 pl-4 py-2 my-4 bg-slate-800/50 italic text-2xl text-white font-serif">
                "{t("culture.quote")}"
              </blockquote>
              {language === "en" && (
                <p className="text-slate-400 text-sm italic pl-4">
                  {t("culture.quoteEn")}
                </p>
              )}
            </div>
            
            <div className="space-y-2">
              <p className="text-slate-300">
                {t("culture.meaning")}
                <strong className="text-amber-400 mx-1">{t("culture.meaningHighlight")}</strong>
                {t("culture.meaningEnd")}
              </p>
              <p className="text-slate-400 text-sm">
                {t("culture.meaningEn")}
              </p>
            </div>

            <p className="text-xl text-white font-bold pt-4">
              {t("culture.question")}
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
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{t("culture.realityTitle")}</h3>
                <p className="text-xl italic text-slate-700 font-serif mb-6">
                  "{t("culture.realityQuote")}"
                </p>
                <div className="space-y-4">
                  <p className="text-slate-800 font-medium">
                    {t("culture.realityText")}
                  </p>
                  <p className="text-slate-500 text-sm">
                    {t("culture.realityTextEn")}
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
