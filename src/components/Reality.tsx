import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const term1Items = [
  {
    title: "不确定性 (Uncertainty)",
    desc: "从突然叫停联邦援助到解雇 FBI 局长科米，不确定性是唯一的确定性。",
    enDesc: "From firing FBI Director Comey to sudden policy shifts, uncertainty was the only certainty.",
    source: "Miller Center",
    link: "https://millercenter.org/president/trump/domestic-affairs",
    color: "bg-red-500/10 text-red-500 border-red-500/20"
  },
  {
    title: "社会撕裂 (Social Division)",
    desc: "夏洛茨维尔事件中的 “双方都有好人” 言论，加剧了社会割裂。",
    enDesc: "The 'very fine people on both sides' comment regarding Charlottesville deepened social divides.",
    source: "Miller Center",
    link: "https://millercenter.org/president/trump/domestic-affairs",
    color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
  },
  {
    title: "零容忍政策 (Zero Tolerance)",
    desc: "2018 年实施的边境政策导致数千儿童与父母分离，引发全球人道主义关注。",
    enDesc: "The 2018 border policy resulted in thousands of children being separated from their parents.",
    source: "Miller Center",
    link: "https://millercenter.org/president/trump/domestic-affairs",
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20"
  },
  {
    title: "退出群聊 (Paris Withdrawal)",
    desc: "宣布退出旨在应对全球气候变化的《巴黎协定》，放松对化石能源的监管。",
    enDesc: "Withdrew the U.S. from the Paris Agreement and rolled back fossil fuel regulations.",
    source: "Miller Center",
    link: "https://millercenter.org/president/trump/domestic-affairs",
    color: "bg-green-500/10 text-green-500 border-green-500/20"
  }
];

const term2Items = [
  {
    title: "入侵委内瑞拉 (Venezuela Invasion)",
    desc: "引用《外敌法案》入侵委内瑞拉，被指“总统绑架外国领导人”。",
    enDesc: "Invoked the Alien Enemies Act to invade Venezuela, described as 'presidential kidnapping'.",
    source: "Al Jazeera / Reuters",
    link: "https://www.aljazeera.com/news/2026/1/9/europe-should-prepare-for-greenlands-annexation-and-end-of-nato-experts",
    color: "bg-red-600/10 text-red-600 border-red-600/20"
  },
  {
    title: "吞并格陵兰 (Greenland Annexation)",
    desc: "再次提出购买格陵兰岛，甚至威胁对欧洲盟友加征关税。",
    enDesc: "Renewed push to buy Greenland, threatening tariffs on European allies if refused.",
    source: "BBC / Politico",
    link: "https://www.bbc.com/news/articles/cwyg1jg8xkmo",
    color: "bg-cyan-600/10 text-cyan-600 border-cyan-600/20"
  },
  {
    title: "第51州：加拿大 (Canada 51st State)",
    desc: "称加拿大为“第51个州”，威胁其如果不支付巨额防务费就被吞并。",
    enDesc: "Referred to Canada as the '51st state' and threatened annexation over defense payments.",
    source: "BBC / Al Jazeera",
    link: "https://www.bbc.com/news/articles/crmlvym2e3eo",
    color: "bg-red-500/10 text-red-500 border-red-500/20"
  },
  {
    title: "暂停援助 (Aid Halt)",
    desc: "全面暂停联邦拨款与贷款，直至重新评估。法院虽叫停，但意图已现。",
    enDesc: "A comprehensive pause on federal grants and loans pending review (temporarily blocked by courts).",
    source: "BBC / NAFSA",
    link: "https://www.bbc.com/news/articles/ced961egp65o",
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
  },
  {
    title: "再次退群 (Paris Again)",
    desc: "签署行政令，再次启动退出《巴黎协定》程序。复读机行为？",
    enDesc: "Signed executive order to withdraw from the Paris Agreement (again). Deja vu?",
    source: "BBC",
    link: "https://www.bbc.com/news/articles/ced961egp65o",
    color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20"
  },
  {
    title: "教育部关停倒计时 (End of Dept. Ed)",
    desc: "签署行政令指示逐步关闭教育部，并将 Title VI 等项目移交国务院。",
    enDesc: "Executive Order directs the Secretary of Education to facilitate the closure of the Department.",
    source: "NAFSA / Federal Register",
    link: "https://www.nafsa.org/executive-and-regulatory-actions-trump2admin",
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20"
  },
  {
    title: "DEI 团灭 (End of DEI)",
    desc: "下令终止联邦政府内的所有 DEI (多元、公平、包容) 项目与办公室。",
    enDesc: "Executive Order ending all federal Diversity, Equity, and Inclusion programs and offices.",
    source: "Federal Register",
    link: "https://www.federalregister.gov/presidential-documents/executive-orders/donald-trump/2025",
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
  },
  {
    title: "出生公民权挑战 (Birthright Citizenship)",
    desc: "试图通过行政令终结非公民子女的出生公民权，挑战宪法第 14 修正案。",
    enDesc: "Attempting to end birthright citizenship for children of non-citizens via executive order.",
    source: "NAFSA",
    link: "https://www.nafsa.org/executive-and-regulatory-actions-trump2admin",
    color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
  },
  {
    title: "公务员大清洗 (Schedule F)",
    desc: "重新引入 Schedule F，使数万名职业公务员失去工作保障，更易被解雇。",
    enDesc: "Reintroducing Schedule F to strip job protections from career civil servants.",
    source: "Federal Register",
    link: "https://www.federalregister.gov/presidential-documents/executive-orders/donald-trump/2025",
    color: "bg-slate-500/10 text-slate-500 border-slate-500/20"
  },
  {
    title: "黄金签证 (The Gold Card)",
    desc: "设立 '黄金卡' 项目，富豪捐赠巨款可插队获得移民签证。",
    enDesc: "Proposed 'Gold Card' for wealthy donors to fast-track immigration processing.",
    source: "NAFSA",
    link: "https://www.nafsa.org/executive-and-regulatory-actions-trump2admin",
    color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
  },
  {
    title: "TikTok 缓刑 (TikTok Delay)",
    desc: "签署行政令推迟 TikTok 禁令的执行。反转再反转。",
    enDesc: "Executive order extending the enforcement delay for the TikTok ban.",
    source: "Federal Register",
    link: "https://www.federalregister.gov/presidential-documents/executive-orders/donald-trump/2025",
    color: "bg-pink-500/10 text-pink-500 border-pink-500/20"
  }
];

function ControversyCard({ item }: { item: any }) {
  return (
    <Card className={`border ${item.color} bg-transparent h-full transition-all hover:bg-slate-800/50`}>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl font-bold flex items-center justify-between leading-snug">
          <span>{item.title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-slate-300 text-sm md:text-base">{item.desc}</p>
        <p className="text-slate-500 text-xs md:text-sm italic">{item.enDesc}</p>
        <div className="pt-4 border-t border-slate-800/50 mt-auto">
          <a 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1 w-fit"
          >
            Source: {item.source} ↗
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Reality() {
  return (
    <section className="py-20 bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          <span className="text-amber-400">Reality</span> | 争议与吃瓜追踪 (Controversy Tracker)
        </h2>

        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <Badge variant="outline" className="text-slate-400 border-slate-700 px-3 py-1 text-sm">2017–2021</Badge>
            <h3 className="text-2xl font-bold text-white">
              The First Term: 情绪先行，政策如翻书 (Emotion over Policy)
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {term1Items.map((item, i) => <ControversyCard key={i} item={item} />)}
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-8">
            <Badge variant="outline" className="text-amber-400 border-amber-400 px-3 py-1 text-sm bg-amber-400/10">LIVE UPDATE</Badge>
            <h3 className="text-2xl font-bold text-white">
              The Second Term (2025–Now): 吃瓜进行时 (Live Updates)
            </h3>
          </div>
          <p className="text-slate-400 mb-6 italic text-sm">
            * 以下内容汇总自 BBC、Federal Register 及 NAFSA 等公开信源，仅供参考。政策变动快过 Meme 传播速度。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {term2Items.map((item, i) => <ControversyCard key={i} item={item} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
