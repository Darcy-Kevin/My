import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Home, Quote, Heart, Sparkles, Moon, Coffee, PawPrint } from "lucide-react";
import Image from "next/image";

export default function HomeGalleryPage() {
  const tripId = "26.1.1-home";
  const getImgPath = (src: string) => `/${tripId}/${src}`;

  const allImages = [
    { src: "DSC03641.jpg", alt: "晚安时光", gridSpan: "md:col-span-2 md:row-span-2" },
    { src: "DSC03619.jpg", alt: "麦麦与土豆", gridSpan: "md:col-span-1 md:row-span-1" },
    { src: "DSC03389.jpg", alt: "分享时刻", gridSpan: "md:col-span-1 md:row-span-1" },
  ];

  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#433e37] selection:bg-orange-100">
      {/* 柔和的背景纹理 */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/p6.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* 返回按钮 */}
        <Link 
          href="/projects" 
          className="group inline-flex items-center gap-3 text-sm font-medium hover:text-orange-600 transition-colors mb-20"
        >
          <div className="w-8 h-8 rounded-full border border-current flex items-center justify-center group-hover:-translate-x-1 transition-transform">
            <ArrowLeft size={14} />
          </div>
          <span className="tracking-widest uppercase">Back to Collection</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* 左侧：内容叙事 */}
          <div className="lg:col-span-5 space-y-16">
            <header className="space-y-8">
              <div className="flex items-center gap-4 text-orange-600/60">
                <Moon size={20} className="animate-pulse" />
                <span className="text-xs font-bold tracking-[0.4em] uppercase">Special Guest</span>
              </div>
              
              <h1 className="text-7xl md:text-8xl font-serif italic tracking-tighter leading-[0.8] text-[#2d2a26]">
                Night <span className="text-orange-500/90">Hosting</span><br/>
                <span className="text-4xl md:text-5xl font-sans not-italic font-light tracking-normal text-muted-foreground block mt-4">新年的温暖小聚</span>
              </h1>

              <div className="flex flex-wrap gap-8 py-8 border-y border-stone-200">
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Time</p>
                  <p className="text-sm font-medium">New Year's Eve Night</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Guest</p>
                  <p className="text-sm font-medium">Mai Mai (麦麦)</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">Vibe</p>
                  <div className="flex gap-2">
                    <PawPrint size={14} className="text-stone-400" />
                    <span className="text-sm font-medium italic">Shared Love</span>
                  </div>
                </div>
              </div>
            </header>

            <article className="space-y-8">
              <p className="text-xl leading-relaxed font-serif text-stone-600 italic">
                “这个元旦，因为麦麦爸妈回老家，麦麦成了我们家的特别房客。本以为土豆会不习惯，没想到却见证了最温柔的分享。”
              </p>
              <div className="h-px w-20 bg-stone-300" />
              <p className="text-lg leading-relaxed text-stone-500">
                平时面对其他狗会护食的土豆，在麦麦哥哥面前却变得格外慷慨。不管是心爱的零食还是最喜欢的玩具，她都毫无保留地推到麦麦面前。
              </p>
            </article>

            {/* 装饰性元素 */}
            <div className="hidden lg:block pt-12">
              <div className="relative w-40 h-40 border border-stone-200 rounded-full flex items-center justify-center p-8 text-center group">
                <div className="absolute inset-0 border border-stone-200 rounded-full scale-90 group-hover:scale-100 transition-transform duration-700" />
                <p className="text-[10px] leading-tight uppercase tracking-widest text-stone-400 font-bold">
                  True<br/>Friendship<br/>Shared
                </p>
              </div>
            </div>
          </div>

          {/* 右侧：瀑布流网格展示 */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-[300px]">
              {allImages.map((img, i) => (
                <div 
                  key={i} 
                  className={`relative overflow-hidden rounded-sm group ${img.gridSpan}`}
                >
                  <div className="absolute inset-0 bg-stone-200 animate-pulse -z-10" />
                  <Image 
                    src={getImgPath(img.src)} 
                    alt={img.alt} 
                    fill 
                    className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                  />
                  {/* 悬浮标签 */}
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
                    <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-sm">
                      <p className="text-[10px] font-bold tracking-widest uppercase text-stone-800">{img.alt}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* 空白格作为设计平衡 */}
              <div className="hidden md:flex items-center justify-center border border-stone-200 rounded-sm p-12 text-stone-300">
                <Heart size={40} strokeWidth={1} />
              </div>
            </div>

            {/* 补充文案块 */}
            <div className="mt-12 p-10 bg-white shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.05)] rounded-sm space-y-6">
               <div className="flex items-center gap-2 text-orange-500">
                 <Sparkles size={16} />
                 <span className="text-[10px] font-bold tracking-[0.3em] uppercase">Friendship</span>
               </div>
               <h3 className="text-2xl font-serif italic text-stone-800">
                 不止是分享，更是信任
               </h3>
               <p className="text-stone-500 leading-relaxed italic">
                 “原来所有的‘护食’和‘倔强’，在真正的朋友面前都会消解。土豆和麦麦在客厅里嬉闹的身影，是这个冬夜最暖的画面。”
               </p>
            </div>
          </div>
        </div>

        {/* 底部导航 */}
        <footer className="mt-40 py-20 border-t border-stone-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-2 text-center md:text-left">
              <p className="text-[10px] font-black uppercase tracking-[0.5em] text-stone-400">Next Entry</p>
              <h2 className="text-3xl font-serif italic">More Warm Moments</h2>
            </div>
            <Link 
              href="/projects"
              className="group flex flex-col items-center gap-4 transition-all"
            >
              <div className="w-16 h-16 rounded-full border border-stone-300 flex items-center justify-center group-hover:bg-[#2d2a26] group-hover:text-white transition-all duration-500">
                <ArrowLeft size={24} className="rotate-180" />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase">Collection</span>
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}


