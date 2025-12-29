import { Github, Mail, ExternalLink, Camera, Heart, PawPrint, Bone, Image as ImageIcon, Calendar, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full">
      {/* 背景装饰 */}
      <div className="glow top-[-100px] right-[-100px] !bg-orange-500/10" />
      <div className="glow bottom-[-100px] left-[-100px] !bg-yellow-500/10" />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center pt-20 pb-16 text-center">
        <div className="animate-in opacity-0">
          <span className="px-3 py-1 text-xs font-medium tracking-widest uppercase rounded-full bg-orange-500/10 text-orange-600 mb-6 inline-block">
            Welcome to Tudou's World
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/50">
            达西 & <span className="text-orange-500">土豆</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mx-auto mb-10 leading-relaxed">
            你好，我是达西 (Darcy)。这里是记录我的好伙伴 —— 柴柴“土豆”成长点滴的数字空间。
            我负责按快门，它负责卖萌。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/projects" 
              className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-all flex items-center gap-2"
            >
              看更多美照 <Camera size={18} />
            </Link>
            <Link 
              href="mailto:your-email@example.com" 
              className="px-8 py-3 border rounded-full font-medium hover:bg-muted transition-all flex items-center gap-2"
            >
              勾搭土豆 <PawPrint size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 照片展示 */}
      <section className="py-12 animate-in opacity-0 delay-1">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "DSC04574.jpg",
            "DSC04580_(2).jpg",
            "DSC04582.jpg",
            "DSC04583.jpg"
          ].map((imgName, i) => (
            <div key={i} className="group aspect-square relative overflow-hidden rounded-2xl border bg-muted shadow-sm hover:shadow-xl transition-all duration-300">
              <img 
                src={`/${imgName}`} 
                alt={`土豆的萌照 ${i + 1}`}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Heart className="text-white fill-white animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 土豆的小档案 */}
      <section className="py-20 animate-in opacity-0 delay-2">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-2">
          <Bone className="text-orange-500" /> 土豆的小档案
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Sparkles className="text-yellow-500" />, title: "颜值担当", desc: "拥有迷人的大屁股和治愈系笑容，是方圆五里的小明星。" },
            { icon: <Bone className="text-orange-500" />, title: "资深吃货", desc: "对肉类有敏锐的嗅觉，能精准分辨真空包装撕开的声音。" },
            { icon: <PawPrint className="text-brown-500" />, title: "社交达人", desc: "不管是哈士奇还是吉娃娃，见面先打个招呼是基本礼仪。" },
            { icon: <Camera className="text-blue-500" />, title: "专业模特", desc: "只要有零食，各种高难度 Pose 都不在话下。"}
          ].map((skill, i) => (
            <div key={i} className="group p-6 rounded-2xl border bg-card/50 backdrop-blur-sm hover:border-orange-500/50 transition-all">
              <div className="mb-4 group-hover:scale-110 transition-transform">{skill.icon}</div>
              <h3 className="font-bold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 摄影合集 */}
      <section className="py-20 animate-in opacity-0 delay-3">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
              <ImageIcon className="text-orange-500" /> 瞬间记录
            </h2>
            <p className="text-muted-foreground">那些被相机定格的快乐时光</p>
          </div>
          <Link href="/projects" className="text-orange-500 hover:underline text-sm font-medium">查看全部</Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "夏日海滩游记", type: "Travel Log", tech: ["2024.08", "青岛"], color: "from-blue-500/20" },
            { name: "草坪上的疯跑", type: "Daily Life", tech: ["2024.10", "公园"], color: "from-green-500/20" }
          ].map((project, i) => (
            <div key={i} className={`group relative overflow-hidden rounded-3xl border bg-gradient-to-br ${project.color} to-transparent p-1 transition-all hover:shadow-2xl`}>
              <div className="relative bg-background rounded-[22px] p-8 h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} /> {project.type}
                  </span>
                  <Heart size={20} className="text-muted-foreground hover:text-red-500 cursor-pointer transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-orange-500 transition-colors">{project.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 text-[10px] font-medium bg-muted rounded-full uppercase tracking-wider">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 底部 CTA */}
      <section className="py-20 mb-20 animate-in opacity-0 delay-4">
        <div className="p-12 rounded-[2rem] bg-orange-500 text-white text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">想看更多土豆的日常吗？</h2>
            <p className="text-orange-100 mb-10 max-w-[500px] mx-auto text-lg">
              我们会定期更新摄影合集，欢迎随时回来看看这个小家伙。
            </p>
            <Link 
              href="mailto:your-email@example.com"
              className="px-10 py-4 bg-white text-orange-500 rounded-full font-bold hover:scale-105 transition-transform inline-block"
            >
              给土豆留言
            </Link>
          </div>
          {/* 装饰性背景 */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300/20 rounded-full -ml-20 -mb-20 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
}
