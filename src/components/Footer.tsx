import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-black py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          {t("footer.title")}
        </h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          <strong className="text-white">{t("footer.text")}</strong><br/>
          {t("footer.text2")}
        </p>

        <div className="flex gap-4 justify-center items-center mb-12">
          {/* Social Icons would go here */}
        </div>

        <div className="border-t border-slate-800 pt-8 max-w-4xl mx-auto text-xs text-slate-600 space-y-4">
          <p className="font-bold text-slate-500 text-sm">{t("footer.disclaimer")}</p>
          <p className="font-mono text-xs text-slate-400 mb-2">
            {t("footer.warning")}
          </p>
          <p>
            {t("footer.disclaimer1")}
          </p>
          <p>
            {t("footer.disclaimer2")}
          </p>
          <p className="pt-8 text-slate-500">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
