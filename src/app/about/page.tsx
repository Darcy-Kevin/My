import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto py-12">
      <Link 
        href="/" 
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8 transition-colors"
      >
        <ArrowLeft size={20} /> 返回首页
      </Link>
      
      <h1 className="text-4xl font-bold mb-6">关于达西 & 土豆</h1>
      
      <div className="prose prose-slate dark:prose-invert">
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          你好！我是达西 (Darcy)，一名摄影爱好者。而这里的绝对主角，是我的好伙伴 —— 土豆 (Tudou)。
        </p>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          土豆是一只充满活力的柴犬，它在 2024 年来到了我的生活。从那以后，我的相机里就装满了它的影子。
        </p>
        <h2 className="text-2xl font-bold mt-12 mb-4">土豆的日常</h2>
        <ul className="grid grid-cols-2 gap-4 list-none p-0">
          <li className="bg-muted p-4 rounded-xl font-medium">草坪狂奔者</li>
          <li className="bg-muted p-4 rounded-xl font-medium">睡姿挑战专家</li>
          <li className="bg-muted p-4 rounded-xl font-medium">肉干收割机</li>
          <li className="bg-muted p-4 rounded-xl font-medium">表情包高产户</li>
        </ul>
      </div>
    </div>
  );
}

