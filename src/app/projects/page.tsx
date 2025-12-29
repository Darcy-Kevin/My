import Link from "next/link";
import { ArrowLeft, Camera, Calendar, MapPin, Heart } from "lucide-react";

export default function ProjectsPage() {
  const albums = [
    {
      name: "夏日海滩游记",
      description: "2024年夏天，土豆第一次见到大海，虽然有点怕浪花，但玩沙子玩得不亦乐乎。",
      info: ["2024.08", "青岛"],
      photos: 12,
    },
    {
      name: "草坪上的疯跑",
      description: "周末在公园草坪上的日常，抓拍到了很多它跑起来像小飞象的瞬间。",
      info: ["2024.10", "朝阳公园"],
      photos: 24,
    },
    {
      name: "冬日初雪",
      description: "今年的第一场雪，土豆在雪地里变成了一个移动的小雪球。",
      info: ["2024.12", "自家院子"],
      photos: 8,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12">
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
          <div key={i} className="group border rounded-3xl p-8 hover:border-orange-500/50 transition-all bg-card">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-orange-500 transition-colors flex items-center gap-2">
              <Camera size={24} /> {album.name}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {album.description}
            </p>
            <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar size={14} /> {album.info[0]}</span>
              <span className="flex items-center gap-1"><MapPin size={14} /> {album.info[1]}</span>
              <span className="flex items-center gap-1"><Heart size={14} /> {album.photos} 张照片</span>
            </div>
            <Link 
              href="#" 
              className="inline-flex items-center px-6 py-2 bg-muted rounded-full text-sm font-medium hover:bg-orange-500 hover:text-white transition-all"
            >
              浏览相册
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

