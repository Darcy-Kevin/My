import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Camera, Heart, Sparkles, Users, Quote, Music } from "lucide-react";
import Image from "next/image";

export default function WinterParkPage() {
  const tripId = "25.12.28-zgcpark";
  
  // 确保路径以单个斜杠开头，且中间没有双斜杠
  const getImgPath = (src: string) => `/${tripId}/${src}`;

  const allImages = [
    { src: "DSC04448.jpg", alt: "在落叶中奔跑" },
    { src: "DSC04727.jpg", alt: "麦麦的特写" },
    { src: "DSC04699.jpg", alt: "麦麦回眸" },
    { src: "DSC04472.jpg", alt: "冬日暖阳下" },
    { src: "DSC04595.jpg", alt: "追逐游戏" },
    { src: "DSC04517.jpg", alt: "并排坐着" },
    { src: "DSC04782.jpg", alt: "森林探险" },
    { src: "DSC04509.jpg", alt: "冬日瞬间" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      {/* 氛围装饰 - 漂浮的背景光晕 */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="glow top-[20%] right-[-10%] opacity-30 scale-150" style={{ "--glow-color": "rgba(249, 115, 22, 0.2)" } as any} />
        <div className="glow bottom-[10%] left-[-5%] opacity-20 scale-125" style={{ "--glow-color": "rgba(59, 130, 246, 0.15)" } as any} />
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6 space-y-32">
        {/* 1. 顶部 Hero：极简主义与大留白 */}
        <section className="relative animate-in">
          <Link 
            href="/projects" 
            className="group inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-12 transition-all hover:-translate-x-1"
          >
            <ArrowLeft size={18} /> <span className="text-sm font-medium tracking-tight">Gallery</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-orange-600 shadow-sm border-orange-100/50">
                <Music size={14} className="animate-spin-slow" />
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Winter Symphony</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                冬日公园<br/>
                <span className="text-orange-500">游记</span>
              </h1>
              <div className="flex items-center gap-6 pt-4 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                <span className="flex items-center gap-2"><Calendar size={14} /> 2025.12</span>
                <span className="w-1 h-1 bg-muted-foreground/30 rounded-full" />
                <span className="flex items-center gap-2"><MapPin size={14} /> 北京 · 中关村公园</span>
              </div>
            </div>
            <div className="lg:pb-4">
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light italic">
                “阳光在落叶上写诗，<br className="hidden md:block"/>
                她们在森林里奔跑，把冬天变成了暖橙色。”
              </p>
            </div>
          </div>
        </section>

        {/* 2. 土豆版块：视差偏移与高级边框 */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7 relative group float-animation">
            <div className="absolute -inset-4 bg-orange-500/5 rounded-[3rem] blur-2xl group-hover:bg-orange-500/10 transition-colors" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-zinc-900">
              <Image src={getImgPath("DSC04582.jpg")} alt="土豆" fill className="object-cover object-[30%_center] hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
          <div className="md:col-span-5 space-y-8 animate-in delay-1">
            <div className="w-12 h-1 hidden md:block bg-orange-500/30" />
            <h2 className="text-4xl font-bold tracking-tight">落叶堆里的<br/>小探险家</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              十二月的中关村公园，厚厚的落叶层成了土豆最天然的捉迷藏乐园。她总是兴奋地一头扎进金黄的叶丛里，只露出一截摇摆的小尾巴。对她来说，每一片落叶下都可能藏着冬天的秘密。
            </p>
            <div className="pt-4">
               <div className="glass-card p-6 rounded-2xl flex items-start gap-4 shadow-sm">
                 <Quote className="text-orange-500/40" size={32} />
                 <p className="text-sm font-medium italic text-muted-foreground">“只要有风掠过树梢，她就能在里面听见快乐的声音。”</p>
               </div>
            </div>
          </div>
        </section>

        {/* 3. 麦麦版块：镜像布局与柔和色彩 */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 order-2 md:order-1 text-right space-y-8 flex flex-col items-end animate-in delay-2">
            <div className="w-12 h-1 hidden md:block bg-pink-500/30" />
            <h2 className="text-4xl font-bold tracking-tight">灵魂伴侣<br/>麦麦</h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-light">
              麦麦是她从小一起长大的死党。她们共享过无数根树枝，也见证过彼此每一个狼狈又可爱的瞬间。麦麦的眼神里总带着一种温婉的灵动，仿佛是这个季节里最温柔的一束光。
            </p>
            <div className="flex gap-3">
              <span className="px-4 py-1.5 rounded-full bg-pink-50 text-pink-600 dark:bg-pink-900/20 text-[10px] font-black uppercase tracking-widest">Bestie</span>
              <span className="px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/20 text-[10px] font-black uppercase tracking-widest">Sisterhood</span>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 relative group float-animation-reverse">
            <div className="absolute -inset-4 bg-pink-500/5 rounded-[3rem] blur-2xl group-hover:bg-pink-500/10 transition-colors" />
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white dark:border-zinc-900">
              <Image src={getImgPath("DSC04779.jpg")} alt="麦麦" fill className="object-cover object-[15%_center] hover:scale-105 transition-transform duration-1000" />
            </div>
          </div>
        </section>

        {/* 4. 双人合照：极简宽幅展示 */}
        <section className="space-y-12 animate-in delay-3">
          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl group border-4 border-white/50 dark:border-zinc-800">
            <Image src={getImgPath("DSC04460.jpg")} alt="土豆与麦麦" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-12">
              <div className="flex items-center gap-4 text-white/80 mb-2">
                <Users size={20} />
                <span className="text-xs font-bold tracking-[0.3em] uppercase">Partners in Crime</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-black text-white">1 + 1 &gt; 2 的快乐</h3>
            </div>
          </div>
        </section>

        {/* 5. 画廊网格：Bento Grid 风格 */}
        <section className="space-y-16 animate-in delay-4">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">更多瞬间</h2>
            <p className="text-muted-foreground font-light tracking-wide italic">碎片化的美好，定格在相纸边缘</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {allImages.map((img, i) => (
              <div key={i} className="group relative aspect-square overflow-hidden rounded-[2rem] border-4 border-white dark:border-zinc-900 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <Image src={getImgPath(img.src)} alt={img.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="text-white text-[10px] font-bold uppercase tracking-widest text-center">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 底部 CTA：留白与简约 */}
        <footer className="py-24 text-center space-y-12 border-t border-muted/30">
          <div className="space-y-4">
            <p className="text-xs font-black uppercase tracking-[0.5em] text-orange-500">Keep Exploring</p>
            <h2 className="text-4xl font-bold tracking-tight">故事还在继续</h2>
          </div>
          <Link 
            href="/projects"
            className="group inline-flex items-center gap-4 px-12 py-5 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-all shadow-2xl"
          >
            返回相册合集 <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </footer>
      </div>
    </div>
  );
}

const ChevronRight = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
