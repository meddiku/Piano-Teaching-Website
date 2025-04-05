import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6">欢迎来到钢琴大师</h1>
      <Image
        src="/placeholder.svg?height=300&width=300"
        alt="钢琴大师"
        width={300}
        height={300}
        className="rounded-full mb-6"
      />
      <p className="text-xl mb-6 text-center max-w-2xl">
        来自马来西亚斗湖的专业钢琴手，拥有超过20年的自弹自唱经验。
        我们提供独特的在线钢琴课程，专注于自弹自唱技巧和即兴演奏。
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">自弹自唱技巧</h2>
          <p>学习如何同时弹奏钢琴和演唱，提升您的音乐表现力。</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">即兴演奏</h2>
          <p>掌握即兴创作的艺术，让您的音乐更具创意和个性。</p>
        </div>
      </div>
      <Link href="/courses">
        <Button className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg hover:bg-blue-700 transition duration-300">
          浏览课程
        </Button>
      </Link>
    </div>
  )
}

