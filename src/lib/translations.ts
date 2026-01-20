export type TranslationKey = string;

export interface Translations {
  [key: string]: string | Translations;
}

export const translations: Record<"zh" | "en", Translations> = {
  zh: {
    // Hero
    hero: {
      title: "一马平川",
      subtitle: "Flatland, With a Twist",
      tagline: "被承诺的顺风顺水，实际走成了高低起伏",
      taglineEn: "Promised smooth sailing; reality is bumps and cliffs.",
      description: "一个把 「祝福」 拆穿的 meme token | A meme token that exposes the too-perfect promise.",
      buyButton: "Buy $一马平川 (购买代币)",
      readStoryButton: "Read the Story (阅读背后故事)",
    },
    // Manifesto
    manifesto: {
      title: "这是一个自嘲、反叙事的 Meme 项目。",
      line1: "我们用讽刺解构宏大叙事，",
      line2: "用自知对抗幻觉。",
      line3: "我们站在旁边观察，",
      line4: "而不是站在台上承诺。",
      quote: "We observe from the sidelines, rather than promising from the stage.",
    },
    // Culture
    culture: {
      title: "Culture | 成语典故 × 反转",
      literal: "[yī mǎ píng chuān] Literal Meaning: One Horse Flat Plain",
      intro: "在中文语境里，这是一句顶级的吉祥话。据",
      baidu: "百度百科",
      education: "教育部成语典",
      origin: "记载，它源自宋代苏轼的《游径山》：",
      quote: "众峰来自天目山，势若骏马奔平川。",
      quoteEn: "(Peaks from Tianmu Mountain, galloping like a steed across the flat plain.)",
      meaning: "原意形容地势平坦宽广，后被引申为仕途或人生",
      meaningHighlight: "「前途浩荡，无往不利」",
      meaningEnd: "。每个人都爱听这句话，尤其是投资者。",
      meaningEn: "Originating from the Song Dynasty poet Su Shi, it describes a vast, flat terrain where a horse can gallop freely. Figuratively, it implies a life or career with \"bright prospects and no obstacles.\"",
      question: "然而，我们不禁要问：如果这条 「平川」 是被人为画出来的呢？",
      realityTitle: "Reality Check",
      realityQuote: "What if the 'flat land' is just a marketing pitch?",
      realityText: "当 「平川」 遇到 「川普」(Trump)，祝福往往变成了一种充满黑色幽默的生存挑战。",
      realityTextEn: "When \"Flat Plain\" meets \"Trump\" (whose Chinese nickname contains the character 'Chuan'), the blessing becomes a survival challenge.",
    },
    // Metaphor
    metaphor: {
      horse: {
        title: "一马 (The Horse)",
        subtitle: "Capital & Speculation",
        desc: "像脱缰的野马，充满兽性与投机冲动。",
        enDesc: "Like a wild horse—unbridled capital and speculative impulse.",
      },
      flatland: {
        title: "平川 (Flatland)",
        subtitle: "The Promised Future",
        desc: "白皮书里的 WAGMI，看起来很平，走起来很坑。",
        enDesc: "The 'We Are All Gonna Make It' promise in whitepapers. Looks flat, full of holes.",
      },
      chuan: {
        title: "川 (The Chuan)",
        subtitle: "Trumpian Terrain",
        desc: "地势突变。被承诺的 「一马平川」，实际被 「川」 带进了沟里。",
        enDesc: "Sudden terrain shift. The 'smooth path' is disrupted by the 'Chuan' (Trump) factor.",
      },
    },
    // Timing
    timing: {
      title: "Timing | 天时 (Cosmic Timing)",
      badge: "2026: Year of the Fire Horse",
      mainTitle: "丙午马年 × 川普归来",
      mainSubtitle: "\"It's Destiny, Baby!\"",
      eastern: {
        title: "🔥 东方玄学 (Eastern Mysticism)",
        text: "2026 年是农历丙午年，五行属火，生肖为马。",
        highlight: "火马 (Fire Horse)",
        text2: " 象征着奔腾、能量与不可预测的爆发力。还有什么比在马年发一个 「一马平川」 更吉利的事吗？",
      },
      western: {
        title: "🦅 西方现实 (Western Reality)",
        text: "川普 (Trump) 的标志性红领带与 「火」 属性不谋而合。当 「川」 普遇上 「马」 年，这是一场",
        highlight: " Double Energy",
        text2: " 的宇宙级对撞。",
      },
      closing: "\"一马当先，平定川普时代的波动。\"",
      closingEn: "\"Take the lead with the Horse, and ride through the Trumpian waves.\"",
    },
    // FAQ
    faq: {
      title: "FAQ",
      q1: "Q: 为什么叫一马平川？(Why this name?)",
      a1: "A: 这是一个关于 「承诺 vs 现实」 的双关梗。平川象征美好的愿景，但 「川」 字在中文里暗示了不确定性。",
      a1En: "A: It's a pun on \"Promise vs. Reality\". Flatland symbolizes the vision, but \"Chuan\" (Trump) implies chaos.",
      q2: "Q: 这是政治项目吗？(Is this political?)",
      a2: "A: 不是。我们是 Meme，只负责吃瓜和讽刺，不站队。",
      a2En: "A: No. We are a Meme token. We observe and satirize; we don't take sides.",
      q3: "Q: 路线图在哪？(Where is the Roadmap?)",
      a3: "A: 在你的想象里。现实中只有波动。",
      a3En: "A: In your imagination. Reality only offers volatility.",
      q4: "Q: 外国人看不懂怎么办？(Language barrier?)",
      a4: "A: 告诉他们 \"Chuan\" = Trump。其他的交给图表。",
      a4En: "A: Just tell them \"Chuan\" = Trump. The charts will do the rest.",
    },
    // Footer
    footer: {
      title: "看清脚下的路",
      text: "一马平川是他们给你的叙事，上下颠簸是你走过的路。",
      text2: "保持清醒，保持幽默。在疯王的世界里，做一个笑对海啸的冲浪者。",
      disclaimer: "Disclaimer / 免责声明：",
      warning: "WARNING: Reading this may cause side effects including but not limited to: sudden realization of absurdity, uncontrollable laughter, or the urge to buy $一马平川.",
      disclaimer1: "$一马平川 is a meme token for entertainment purposes only. It is not an investment vehicle and promises no returns. We are not affiliated with any political figures.",
      disclaimer2: "本项目仅供娱乐，非投资建议，不承诺任何回报。不仅不附属任何政治人物，甚至可能被他们拉黑。请对自己的钱包负责。",
      copyright: "© 2026 One Horse Flat Plain ($一马平川). All rights reserved (or not, it's a meme).",
    },
  },
  en: {
    // Hero - English version with explanation
    hero: {
      title: "一马平川",
      subtitle: "Flatland, With a Twist",
      tagline: "Promised smooth sailing; reality is bumps and cliffs",
      taglineEn: "The 'flat plain' was a Photoshop job.",
      description: "A meme token that exposes the too-perfect promise. '一马平川' (yī mǎ píng chuān) is a Chinese idiom meaning 'smooth sailing ahead'—but the character '川' (chuān) is a pun on Trump's Chinese nickname '川普' (Chuān Pǔ).",
      buyButton: "Buy $一马平川",
      readStoryButton: "Read the Story",
    },
    // Manifesto
    manifesto: {
      title: "This is a self-mocking, anti-narrative Meme project.",
      line1: "We deconstruct grand narratives with satire,",
      line2: "and fight illusions with self-awareness.",
      line3: "We observe from the sidelines,",
      line4: "rather than promising from the stage.",
      quote: "We observe from the sidelines, rather than promising from the stage.",
    },
    // Culture - English version with detailed explanation
    culture: {
      title: "Culture | The Idiom × The Twist",
      literal: "[yī mǎ píng chuān] Literal Meaning: One Horse Flat Plain",
      intro: "In Chinese culture, this is a top-tier blessing phrase. According to",
      baidu: "Baidu Baike",
      education: "the Ministry of Education's Idiom Dictionary",
      origin: ", it originates from Su Shi's poem from the Song Dynasty:",
      quote: "众峰来自天目山，势若骏马奔平川。",
      quoteEn: "(Peaks from Tianmu Mountain, galloping like a steed across the flat plain.)",
      meaning: "Originally describing vast, flat terrain, it later came to mean a career or life with",
      meaningHighlight: "\"bright prospects and no obstacles.\"",
      meaningEnd: " Everyone loves hearing this, especially investors.",
      meaningEn: "The idiom promises smooth sailing—but here's the twist: the character '川' (chuān) in '平川' (flat plain) is a pun on Trump's Chinese nickname '川普' (Chuān Pǔ, meaning 'Trump'). So when you're promised a 'flat plain,' you're actually getting Trumpian volatility.",
      question: "But what if this 'flat plain' was just a marketing pitch?",
      realityTitle: "Reality Check",
      realityQuote: "When 'Flat Plain' meets 'Trump' (川普), the blessing becomes a survival challenge.",
      realityText: "The character '川' (chuān) appears in both the idiom '平川' (flat plain) and Trump's Chinese name '川普' (Chuān Pǔ). This pun exposes how promises of smooth sailing often collide with Trumpian chaos.",
      realityTextEn: "The meme plays on this linguistic coincidence: the 'flat' promise contains the very character that represents Trump—making the blessing ironic.",
    },
    // Metaphor
    metaphor: {
      horse: {
        title: "一马 (The Horse)",
        subtitle: "Capital & Speculation",
        desc: "Like a wild horse—unbridled capital and speculative impulse.",
        enDesc: "Uncontrolled market forces and FOMO-driven investment.",
      },
      flatland: {
        title: "平川 (Flatland)",
        subtitle: "The Promised Future",
        desc: "The 'We Are All Gonna Make It' promise in whitepapers. Looks flat, full of holes.",
        enDesc: "The smooth road promised in every crypto project—until you hit the potholes.",
      },
      chuan: {
        title: "川 (The Chuan)",
        subtitle: "Trumpian Terrain",
        desc: "Sudden terrain shift. The 'smooth path' is disrupted by the 'Chuan' (Trump) factor.",
        enDesc: "The character '川' (chuān) is a pun on Trump's Chinese nickname '川普' (Chuān Pǔ). When the 'flat plain' (平川) meets Trump (川普), volatility ensues.",
      },
    },
    // Timing
    timing: {
      title: "Timing | Cosmic Timing",
      badge: "2026: Year of the Fire Horse",
      mainTitle: "Fire Horse Year × Trump's Return",
      mainSubtitle: "\"It's Destiny, Baby!\"",
      eastern: {
        title: "🔥 Eastern Mysticism",
        text: "2026 is the Year of the Fire Horse in the Chinese zodiac. The",
        highlight: " Fire Horse",
        text2: " symbolizes energy, unpredictability, and explosive power. What better time to launch a 'One Horse Flat Plain' meme?",
      },
      western: {
        title: "🦅 Western Reality",
        text: "Trump's signature red tie matches the 'fire' element. When 'Chuan' (Trump) meets the 'Horse' year, it's a",
        highlight: " Double Energy",
        text2: " cosmic collision.",
      },
      closing: "\"Take the lead with the Horse, and ride through the Trumpian waves.\"",
      closingEn: "\"One horse leads, navigating the volatility of the Trump era.\"",
    },
    // FAQ - English with detailed explanation
    faq: {
      title: "FAQ",
      q1: "Q: Why is it called '一马平川'?",
      a1: "A: '一马平川' (yī mǎ píng chuān) is a Chinese idiom meaning 'smooth sailing ahead' or 'a bright future with no obstacles.' The twist: the character '川' (chuān) in '平川' (flat plain) is a pun on Trump's Chinese nickname '川普' (Chuān Pǔ). So the 'flat plain' promise contains Trump's name—making it ironic.",
      a1En: "A: It's a linguistic pun that exposes how promises of smooth sailing often collide with Trumpian volatility.",
      q2: "Q: Is this a political project?",
      a2: "A: No. We're a Meme token. We observe and satirize; we don't take sides.",
      a2En: "A: We're here for the memes, not the politics.",
      q3: "Q: Where's the roadmap?",
      a3: "A: In your imagination. Reality only offers volatility.",
      a3En: "A: The only constant is change—and memes.",
      q4: "Q: How do I explain this to non-Chinese speakers?",
      a4: "A: Tell them '一马平川' means 'smooth sailing,' but the character '川' is a pun on Trump's Chinese name '川普' (Chuān Pǔ). The charts will do the rest.",
      a4En: "A: It's a meme about promises vs. reality, with a Trumpian twist.",
    },
    // Footer
    footer: {
      title: "See the Road Beneath Your Feet",
      text: "'一马平川' is the narrative they give you; the bumps and cliffs are the road you actually walk.",
      text2: "Stay awake, stay humorous. In the mad king's world, be a surfer who laughs at tsunamis.",
      disclaimer: "Disclaimer:",
      warning: "WARNING: Reading this may cause side effects including but not limited to: sudden realization of absurdity, uncontrollable laughter, or the urge to buy $一马平川.",
      disclaimer1: "$一马平川 is a meme token for entertainment purposes only. It is not an investment vehicle and promises no returns. We are not affiliated with any political figures.",
      disclaimer2: "This project is for entertainment only, not investment advice, and promises no returns. We are not affiliated with any political figures—we might even get blocked by them. Please be responsible for your own wallet.",
      copyright: "© 2026 One Horse Flat Plain ($一马平川). All rights reserved (or not, it's a meme).",
    },
  },
};

// Helper function to get nested translation
export function getTranslation(
  lang: "zh" | "en",
  key: string
): string {
  const keys = key.split(".");
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === "string" ? value : key;
}
