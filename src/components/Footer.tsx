export default function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          看清脚下的路
        </h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          <strong className="text-white">一马平川是他们给你的叙事，上下颠簸是你走过的路。</strong><br/>
          保持清醒，保持幽默。在疯王的世界里，做一个笑对海啸的冲浪者。
        </p>

        <div className="flex gap-4 justify-center items-center mb-12">
          {/* Social Icons would go here */}
        </div>

        <div className="border-t border-slate-800 pt-8 max-w-4xl mx-auto text-xs text-slate-600 space-y-4">
          <p className="font-bold text-slate-500 text-sm">Disclaimer / 免责声明：</p>
          <p className="font-mono text-xs text-slate-400 mb-2">
            WARNING: Reading this may cause side effects including but not limited to: sudden realization of absurdity, uncontrollable laughter, or the urge to buy $一马平川.
          </p>
          <p>
            $一马平川 is a meme token for entertainment purposes only. It is not an investment vehicle and promises no returns. We are not affiliated with any political figures.
          </p>
          <p>
            本项目仅供娱乐，非投资建议，不承诺任何回报。不仅不附属任何政治人物，甚至可能被他们拉黑。请对自己的钱包负责。
          </p>
          <p className="pt-8 text-slate-500">
            © 2025 One Horse Flat Plain ($一马平川). All rights reserved (or not, it's a meme).
          </p>
        </div>
      </div>
    </footer>
  );
}
