"use client";

import { Github, Mail, Camera, Heart, PawPrint, Bone, Image as ImageIcon, Sparkles, Star, MessageCircle, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [randomPhotos, setRandomPhotos] = useState<string[]>([]);

  useEffect(() => {
    // 定义可选的相册照片池
    const photoPool = [
      { id: "25.12.28-zgcpark", photos: ["DSC04448.jpg", "DSC04727.jpg", "DSC04699.jpg", "DSC04472.jpg", "DSC04595.jpg", "DSC04517.jpg", "DSC04782.jpg", "DSC04509.jpg", "DSC04582.jpg", "DSC04574.jpg", "DSC04583.jpg", "DSC04580_(2).jpg"] },
      { id: "26.1.1-home", photos: ["DSC03641.jpg", "DSC03619.jpg", "DSC03389.jpg"] },
      { id: "25.6.1-nm", photos: ["DSCF2506.JPG", "DSCF2521.JPG", "DSCF2634(1).JPG"] }
    ];

    // 打平所有照片路径
    const allPaths = photoPool.flatMap(album => 
      album.photos.map(photo => `/${album.id}/${photo}`)
    );

    // 随机抽取 4 张（不重复）
    const shuffled = [...allPaths].sort(() => 0.5 - Math.random());
    setRandomPhotos(shuffled.slice(0, 4));
  }, []);

  const defaultPhotos = [
    "/25.12.28-zgcpark/DSC04574.jpg",
    "/25.12.28-zgcpark/DSC04582.jpg",
    "/25.12.28-zgcpark/DSC04583.jpg",
    "/25.12.28-zgcpark/DSC04580_(2).jpg"
  ];

  const photos = randomPhotos.length === 4 ? randomPhotos : defaultPhotos;

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* 装饰性背景 */}
      <div className="glow top-[-100px] right-0" style={{ "--glow-color": "rgba(249, 115, 22, 0.15)" } as any} />
      <div className="glow top-[400px] left-[-100px]" style={{ "--glow-color": "rgba(234, 179, 8, 0.1)" } as any} />

      {/* Hero Section */}
      <section className="pt-16 pb-20 text-center animate-in">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-600 mb-8">
          <span className="text-xs font-bold tracking-widest uppercase">Welcome to Tudou's Digital Garden</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-tight">
          记录生活里的<br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-yellow-500">治愈时刻</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed px-4">
          你好，我是<span className="font-bold text-foreground">土豆 (Tudou)</span>。这里记录了我与达西在一起的每一个平凡却闪光的瞬间。
        </p>

        <div className="flex flex-wrap justify-center gap-4 px-4">
          <Link href="/projects" className="px-8 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-orange-500/20 flex items-center gap-2">
            看我的相册 <Camera size={20} />
          </Link>
          <Link href="/about" className="px-8 py-4 bg-muted text-foreground rounded-2xl font-bold hover:bg-border transition-colors flex items-center gap-2 border border-border">
            关于我 <PawPrint size={20} />
          </Link>
        </div>
      </section>

      {/* 图片网格 - 随机展示，优化横版布局 */}
      <section className="py-12 px-4 animate-in delay-1">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 第一排：大横图 + 小横图 */}
          <div className="md:col-span-1 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2rem] group shadow-sm border border-border">
            <Image src={photos[0]} alt="土豆" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <Heart className="text-white fill-white animate-pulse" />
            </div>
          </div>
          
          <div className="md:col-span-1 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2rem] group border border-border">
            <Image src={photos[1]} alt="土豆" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>

          {/* 第二排：小横图 + 大横图 */}
          <div className="md:col-span-1 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2rem] group border border-border">
            <Image src={photos[2]} alt="土豆" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>

          <div className="md:col-span-1 relative aspect-[4/3] md:aspect-[16/10] overflow-hidden rounded-[2rem] group border border-border">
            <Image src={photos[3]} alt="土豆" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
          </div>
        </div>
      </section>

      {/* 小档案 */}
      <section className="py-20 px-4 animate-in delay-2">
        <div className="max-w-4xl mx-auto bg-muted/50 rounded-[2.5rem] p-8 md:p-12 border border-border">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="space-y-6 flex-1">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <Bone className="text-orange-500" /> 关于这只“土豆”
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                它是家里的首席“气氛组”组长。比起昂贵的玩具，它更喜欢研究空的塑料袋和草坪上的泥坑。
              </p>
              <div className="flex gap-4">
                <div className="bg-white dark:bg-zinc-800 px-4 py-2 rounded-xl text-sm font-bold shadow-sm">活泼度: 100%</div>
                <div className="bg-white dark:bg-zinc-800 px-4 py-2 rounded-xl text-sm font-bold shadow-sm">爱吃指数: 120%</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
              {[
                { icon: <Sparkles className="text-yellow-500" />, text: "颜值担当" },
                { icon: <Star className="text-orange-500" />, text: "社交达人" },
                { icon: <MessageCircle className="text-blue-500" />, text: "专业话痨" },
                { icon: <Heart className="text-red-500" />, text: "治愈专家" }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-zinc-800 p-6 rounded-2xl flex flex-col items-center gap-2 shadow-sm border border-border">
                  {item.icon}
                  <span className="text-xs font-bold">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-20 text-center animate-in delay-3">
        <div className="max-w-lg mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">想看更多土豆的日常？</h2>
          <p className="text-muted-foreground mb-10">我们会不定期更新摄影集，欢迎随时回来。如果你也喜欢狗狗，欢迎联系我们！</p>
          <Link href="mailto:your-email@example.com" className="inline-block px-10 py-4 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-transform">
            给土豆留言
          </Link>
        </div>
      </section>
    </div>
  );
}
