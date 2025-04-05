import type React from "react"
import Link from "next/link"
import { Facebook, Youtube } from "lucide-react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-white shadow-md">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-gray-800">
                钢琴大师
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-gray-600 hover:text-blue-600">
                  首页
                </Link>
                <Link href="/courses" className="text-gray-600 hover:text-blue-600">
                  课程
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  关于我
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  联系
                </Link>
                {/* Language toggle button can be added here */}
              </div>
            </nav>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
          <footer className="bg-gray-100">
            <div className="container mx-auto px-4 py-6 flex justify-between items-center">
              <p className="text-gray-600">&copy; 2025 钢琴大师. 版权所有.</p>
              <div className="flex space-x-4">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-red-600"
                >
                  <Youtube size={24} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
      generator: 'v0.dev'
    };
