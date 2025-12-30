import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "土豆的影像馆 - 达西的摄影日记",
  description: "记录柴柴狗狗土豆成长点滴的摄影空间",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          {/* 导航栏 */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <Link href="/" className="text-xl font-bold flex items-center gap-2 text-orange-500">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs shadow-lg shadow-orange-500/20">🐾</div>
                <span>土豆的影像馆</span>
              </Link>
              <nav className="flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:text-orange-500 transition-colors">首页</Link>
                <Link href="/projects" className="text-sm font-medium hover:text-orange-500 transition-colors">相册</Link>
                <Link href="/about" className="text-sm font-medium hover:text-orange-500 transition-colors">关于</Link>
              </nav>
            </div>
          </header>

          {/* 主体内容 */}
          <main className="flex-1">
            {children}
          </main>

          {/* 页脚 */}
          <footer className="border-t py-12 bg-muted/30">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-muted-foreground italic">
                © 2025 Darcy & Tudou. Built with ❤️ and dog treats.
              </p>
              <div className="flex gap-6 text-sm font-bold text-muted-foreground uppercase tracking-widest">
                <span>Shiba Inu</span>
                <span>Photography</span>
                <span>Life</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
