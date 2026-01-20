import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function FAQ() {
  const { t, language } = useLanguage();
  
  const faqs = [
    {
      q: t("faq.q1"),
      a: t("faq.a1"),
      enA: t("faq.a1En")
    },
    {
      q: t("faq.q2"),
      a: t("faq.a2"),
      enA: t("faq.a2En")
    },
    {
      q: t("faq.q3"),
      a: t("faq.a3"),
      enA: t("faq.a3En")
    },
    {
      q: t("faq.q4"),
      a: t("faq.a4"),
      enA: t("faq.a4En")
    }
  ];
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
                <p>{language === "zh" ? faq.a : faq.enA}</p>
                {language === "zh" && <p className="text-slate-500 italic">{faq.enA}</p>}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
