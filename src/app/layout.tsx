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
      <body>
        <div className="flex flex-col min-h-screen">
          {/* 导航栏 */}
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
              <Link href="/" className="text-xl font-bold flex items-center gap-2 text-orange-500">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs">🐾</div>
                土豆的影像馆
              </Link>
              <nav className="flex items-center gap-6">
                <Link href="/" className="text-sm font-medium hover:text-orange-500">首页</Link>
                <Link href="/about" className="text-sm font-medium hover:text-orange-500">关于土豆</Link>
                <Link href="/projects" className="text-sm font-medium hover:text-orange-500">相册合集</Link>
              </nav>
            </div>
          </header>

          {/* 主体内容 */}
          <main className="flex-1 container mx-auto px-4 py-8">
            {children}
          </main>

          {/* 页脚 */}
          <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4">
              <p className="text-sm text-gray-500">
                © 2025 Darcy & 土豆. Built with ❤️ for dogs.
              </p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span>Made by Darcy</span>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

