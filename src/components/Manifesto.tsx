import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="py-24 bg-black text-white relative border-b border-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-black to-black"></div>
      
      {/* Decorative Emojis */}
      <motion.div 
        className="absolute top-10 left-10 text-4xl opacity-20"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🤡
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-20 text-5xl opacity-20"
        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🎭
      </motion.div>
      <motion.div 
        className="absolute top-1/2 left-5 text-3xl opacity-10"
        animate={{ x: [0, 20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        🚬
      </motion.div>
      <motion.div 
        className="absolute bottom-10 left-1/4 text-4xl opacity-15"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        🐶
      </motion.div>
      <motion.div 
        className="absolute top-20 right-1/4 text-4xl opacity-15"
        animate={{ y: [0, 15, 0], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        📉
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center space-y-8"
        >
          <div className="inline-block mb-4">
            <span className="text-amber-400 font-mono text-sm tracking-[0.2em] uppercase border-b border-amber-400 pb-1">
              Manifesto
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-white/90">
            这是一个自嘲、反叙事的 Meme 项目。
          </h2>
          
          <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full my-8 opacity-80"></div>

          <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed">
            我们用讽刺解构宏大叙事，<br className="hidden md:block" />
            用自知对抗幻觉。
          </p>

          <p className="text-xl md:text-2xl font-light text-slate-300 leading-relaxed">
            我们站在旁边观察，<br className="hidden md:block" />
            而不是站在台上承诺。
          </p>

          <div className="pt-8 flex flex-col items-center gap-4">
            <p className="text-sm text-slate-500 font-mono italic">
              "We observe from the sidelines, rather than promising from the stage."
            </p>
            <div className="flex gap-4 text-2xl opacity-60">
               👀 🍿 🎪 🤷‍♂️
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
