import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

const quotes = [
  {
    zh: "他说前方一马平川，但没说是 P 图。",
    en: "They promised 'flatland'—forgot to mention it was photoshopped."
  },
  {
    zh: "我们不是反对平川，我们反对被骗。",
    en: "We don't reject 'flatland'; we reject being fooled."
  },
  {
    zh: "情绪执政的世界，只有震荡，没有平路。",
    en: "Under emotion-led governance, there's only volatility—no smooth road."
  },
  {
    zh: "Welcome to Flatland.",
    en: "Population: Believers."
  }
];

export default function Voices() {
  return (
    <section className="py-20 bg-amber-400 text-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">
          Voices | 更狠的文案 (Harder Memes)
        </h2>

        <Carousel 
          className="w-full max-w-4xl mx-auto"
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
        >
          <CarouselContent>
            {quotes.map((quote, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-black border-none shadow-2xl">
                    <CardContent className="flex flex-col items-center justify-center p-12 min-h-[300px] text-center">
                      <p className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
                        "{quote.zh}"
                      </p>
                      <p className="text-xl md:text-2xl text-slate-400 font-serif italic">
                        "{quote.en}"
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-black text-white border-none hover:bg-slate-800" />
          <CarouselNext className="bg-black text-white border-none hover:bg-slate-800" />
        </Carousel>
      </div>
    </section>
  );
}
