import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Camera, Heart, Sparkles, Wind, Compass, Map, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function GrasslandPage() {
  const tripId = "25.6.1-nm";
  const getImgPath = (src: string) => `/${tripId}/${src}`;

  // 整理照片池 - 包括 JPG 和处理后的图片展示
  const mainShowcase = [
    { src: "DSCF2506.JPG", alt: "初见草原", gridSpan: "md:col-span-2 md:row-span-2" },
    { src: "DSCF2521.JPG", alt: "无尽的绿意", gridSpan: "md:col-span-1 md:row-span-1" },
    { src: "DSCF2634(1).JPG", alt: "落日余晖", gridSpan: "md:col-span-1 md:row-span-1" },
  ];

  const galleryImages = [
    { src: "IMG_0273.jpg", alt: "草原剪影" },
    { src: "IMG_0264.jpg", alt: "远方的云" },
    { src: "IMG_0261.jpg", alt: "漫步" },
    { src: "IMG_0224.jpg", alt: "旷野小径" },
    { src: "DSCF2521.JPG", alt: "无尽的绿意" },
    { src: "IMG_0173.jpg", alt: "风的足迹" },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#fdfdfb]">
      {/* 自然气息装饰 */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="glow top-[-10%] right-[-10%] opacity-20 scale-150" style={{ "--glow-color": "rgba(34, 197, 94, 0.1)" } as any} />
        <div className="glow bottom-[-10%] left-[-10%] opacity-20 scale-150" style={{ "--glow-color": "rgba(59, 130, 246, 0.1)" } as any} />
      </div>

      <div className="max-w-7xl mx-auto py-12 px-6">
        {/* 1. 顶部导航 */}
        <nav className="flex justify-between items-center mb-24">
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-50 transition-colors">
              <ArrowLeft size={18} />
            </div>
            <span className="text-sm font-bold tracking-widest uppercase">Travelogue</span>
          </Link>
          <div className="flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-stone-400">
            <span>Inner Mongolia</span>
            <span className="w-1 h-1 bg-stone-300 rounded-full" />
            <span>Summer 2025</span>
          </div>
        </nav>

        {/* 2. Hero Section */}
        <header className="flex flex-col lg:flex-row gap-12 items-start mb-32">
          <div className="flex-1 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-green-600 font-bold tracking-widest uppercase text-[10px]">
                <Compass size={14} />
                <span>Northward Bound</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-tight text-stone-900">
                呼和浩特<br/>
                <span className="text-green-600">草原之夏</span>
              </h1>
            </div>
            <div className="flex flex-wrap gap-12 text-stone-800">
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Date</p>
                <p className="font-serif italic text-xl italic">June 2025</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Location</p>
                <p className="font-serif italic text-xl text-stone-600">Hohhot Grasslands</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Milestone</p>
                <p className="font-serif italic text-xl text-orange-500 underline decoration-orange-200 decoration-4 underline-offset-8">Tudou's First Trip</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 lg:pt-20">
            <p className="text-xl md:text-2xl text-stone-500 leading-relaxed font-light italic border-l-4 border-green-100 pl-8">
              “那是土豆第一次离开家，去拥抱外面的世界。<br/>
              第一次长途跋涉，第一次住进陌生的酒店，<br/>
              也是第一次，在无际的草原上尽情奔跑。”
            </p>
          </div>
        </header>

        {/* 3. 精选大图展示 */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {mainShowcase.map((img, i) => (
            <div 
              key={i} 
              className={`relative overflow-hidden rounded-[2rem] group ${img.gridSpan} border-[8px] border-white shadow-xl hover:shadow-2xl transition-all duration-700 min-h-[400px] md:min-h-[500px]`}
            >
              <Image 
                src={getImgPath(img.src)} 
                alt={img.alt} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                <span className="text-white font-bold tracking-widest uppercase text-sm">{img.alt}</span>
              </div>
            </div>
          ))}
        </section>

        {/* 4. 更多瞬间 - 网格展示（包含 HEIC 文件） */}
        <section className="space-y-16 mb-32">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-px h-12 bg-green-200" />
            <h2 className="text-4xl font-bold tracking-tight text-stone-900">旷野片段</h2>
            <p className="text-stone-500 font-light tracking-wide italic">被镜头定格的草原碎片</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((img, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                <Image 
                  src={getImgPath(img.src)} 
                  alt={img.alt} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <span className="text-white text-[10px] font-bold uppercase tracking-[0.2em] border border-white/40 px-3 py-1 backdrop-blur-sm">
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 情感叙事板块 */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center mb-32">
          <div className="lg:col-span-6 relative min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl group">
            <Image src={getImgPath("IMG_0199.jpg")} alt="夏日清晨" fill className="object-cover group-hover:scale-105 transition-transform duration-[3s]" />
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-[3rem]" />
          </div>
          <div className="lg:col-span-6 space-y-10">
            <div className="w-20 h-px bg-green-500/30" />
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">去有风的地方，<br/>看没见过的世界</h2>
              <p className="text-lg md:text-xl text-stone-500 leading-relaxed font-light">
                呼和浩特的夏天，风里带着泥土和青草的味道。这是土豆“狗生”中第一次真正意义上的冒险。在此之前，它的世界是家附近的公园和熟悉的街道；而在这里，世界变成了没有边际的绿。
              </p>
              <p className="text-lg text-stone-500 leading-relaxed font-light">
                第一次住进酒店时，它紧紧贴着我的腿，警惕地打量着每一条陌生的走廊。但当第二天车门在草原中央打开的那一刻，所有的局促都消失了。它疯狂地在大地这块巨大的绿色地毯上撒欢，那是它第一次发现，原来世界可以这么大，大到跑一整天也看不到尽头。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              <div className="space-y-4 p-8 rounded-3xl bg-green-50/50 border border-green-100/50 transition-colors hover:bg-green-50">
                <Wind className="text-green-600" size={24} />
                <h3 className="font-bold text-stone-800">关于勇敢的第一次</h3>
                <p className="text-sm text-stone-500 leading-relaxed italic">“从酒店走廊的胆怯到草原上的狂奔，它学会了如何探索陌生。”</p>
              </div>
              <div className="space-y-4 p-8 rounded-3xl bg-blue-50/50 border border-blue-100/50 transition-colors hover:bg-blue-50">
                <Map className="text-blue-600" size={24} />
                <h3 className="font-bold text-stone-800">旷野的洗礼</h3>
                <p className="text-sm text-stone-500 leading-relaxed italic">“在无垠的辽阔面前，生命变得纯粹，只剩下奔跑与呼吸。”</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 底部 CTA */}
        <footer className="py-32 text-center border-t border-stone-100">
          <div className="max-w-2xl mx-auto space-y-12">
            <div className="space-y-4">
              <Sparkles className="mx-auto text-yellow-500" size={32} />
              <h2 className="text-5xl font-black tracking-tight text-stone-900 uppercase">Endless Summer</h2>
              <p className="text-stone-400 font-medium tracking-widest uppercase text-xs">Stories are still unfolding</p>
            </div>
            <Link 
              href="/projects"
              className="group inline-flex items-center gap-4 px-12 py-5 bg-stone-900 text-white rounded-full font-bold hover:bg-green-600 hover:scale-105 transition-all shadow-2xl"
            >
              返回相册合集 <Compass size={20} className="group-hover:rotate-45 transition-transform" />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
