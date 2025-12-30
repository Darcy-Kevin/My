import Link from "next/link";
import { ArrowLeft, Camera, Calendar, MapPin, Heart } from "lucide-react";
import fs from "fs";
import path from "path";

export default function ProjectsPage() {
  const getPhotoCount = (id: string) => {
    try {
      const dirPath = path.join(process.cwd(), "public", id);
      if (fs.existsSync(dirPath)) {
        const files = fs.readdirSync(dirPath);
        return files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file)).length;
      }
    } catch (error) {
      console.error(`Error reading directory ${id}:`, error);
    }
    return 0;
  };

  const albums = [
    {
      id: "25.12.28-zgcpark",
      name: "冬日公园游记",
      description: "冬天的公园铺满了厚厚的落叶，土豆最喜欢的活动就是一头扎进叶子堆里“寻宝”。虽然鼻尖冻得通红，但她跑起来依然像个动力十足的小火球。",
      info: ["2025.12", "北京 · 中关村公园"],
      photos: getPhotoCount("25.12.28-zgcpark"),
      active: true,
    },
    {
      id: "grass-running",
      name: "草坪上的疯跑",
      description: "周末在公园草坪上的日常，抓拍到了很多她跑起来像小飞象的瞬间。",
      info: ["2024.10", "朝阳公园"],
      photos: 0,
      active: false,
    },
    {
      id: "winter-snow",
      name: "冬日初雪",
      description: "今年的第一场雪，土豆在雪地里变成了一个移动的小雪球。",
      info: ["2024.12", "自家院子"],
      photos: 0,
      active: false,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <Link 
        href="/" 
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> 返回首页
      </Link>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">相册合集</h1>
        <p className="text-muted-foreground text-lg">定格土豆生命中每一个闪光的瞬间。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {albums.map((album, i) => (
          <div key={i} className="group border rounded-3xl p-8 hover:border-orange-500/50 transition-all bg-card shadow-sm hover:shadow-md">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors flex items-center gap-2">
              <Camera size={24} /> {album.name}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {album.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar size={14} /> {album.info[0]}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {album.info[1]}</span>
              <span className="flex items-center gap-1"><Heart size={14} /> {album.active ? album.photos : '--'} 张照片</span>
            </div>
            <Link 
              href={album.active ? `/projects/${album.id}` : '#'} 
              className={`inline-flex items-center px-6 py-2 rounded-full text-sm font-medium transition-all ${
                album.active 
                  ? "bg-muted hover:bg-orange-500 hover:text-white" 
                  : "bg-muted/50 text-muted-foreground cursor-not-allowed"
              }`}
            >
              {album.active ? "浏览相册" : "即将上线"}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
