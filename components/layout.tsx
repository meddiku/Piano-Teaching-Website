"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import { Facebook, Youtube, Calendar, Phone, Mail } from "lucide-react"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter()
  const [language, setLanguage] = React.useState("zh")

  const toggleLanguage = () => {
    setLanguage(language === "zh" ? "en" : "zh")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white shadow-md">
        <div className="relative w-full h-[600px] flex flex-col items-center justify-center bg-gray-900">
          <Image
            src="/images/piano-hands.jpg"
            alt="Professional Piano Teaching"
            fill
            sizes="100vw"
            className="object-cover absolute inset-0 w-full h-full opacity-80"
            priority
          />
          <div className="z-10 text-center space-y-6 px-4">
            <h1 className="text-6xl font-bold text-white drop-shadow-lg">
              钢琴大师
            </h1>
            <p className="text-xl text-white max-w-2xl text-center drop-shadow-lg">
              马来西亚斗湖的专业钢琴手，拥有超过20年的自弹自唱经验。
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors">
              预约免费试课
            </button>
          </div>
        </div>
        <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">钢琴大师</span>
          </Link>
          <div className="flex items-center space-x-6">
            <Link href="/" className={`${router.pathname === "/" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600 transition-colors`}>
              首页
            </Link>
            <Link href="/courses" className={`${router.pathname === "/courses" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600 transition-colors`}>
              课程
            </Link>
            <Link href="/about" className={`${router.pathname === "/about" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600 transition-colors`}>
              关于我
            </Link>
            <Link href="/contact" className={`${router.pathname === "/contact" ? "text-blue-600" : "text-gray-600"} hover:text-blue-600 transition-colors`}>
              联系
            </Link>
            <button onClick={toggleLanguage} className="text-gray-600 hover:text-blue-600 transition-colors">
              {language === "zh" ? "EN" : "中文"}
            </button>
          </div>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">联系方式</h3>
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone size={20} />
                <span>+60 123456789</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail size={20} />
                <span>contact@pianomasters.com</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">关注我们</h3>
              <div className="flex space-x-4">
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                  <Youtube size={24} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">快速链接</h3>
              <div className="flex flex-col space-y-2">
                <Link href="/courses" className="text-gray-600 hover:text-blue-600 transition-colors">课程安排</Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">预约课程</Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600">
            <p>&copy; 2025 钢琴大师. 版权所有.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

