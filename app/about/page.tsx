import Image from "next/image"

export default function About() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">关于我</h1>
      <Image
        src="/placeholder.svg?height=400&width=400"
        alt="钢琴大师"
        width={400}
        height={400}
        className="rounded-lg mb-8"
      />
      <div className="max-w-2xl text-center">
        <p className="mb-4">
          我是一位来自马来西亚斗湖的专业钢琴手，拥有超过20年的自弹自唱经验。
          从小就对音乐充满热情，我致力于不断提升自己的技艺，并将这份热爱传递给更多的人。
        </p>
        <p className="mb-4">
          在我的职业生涯中，我有幸在各种场合表演，包括音乐会、婚礼和私人活动。
          这些经历让我深刻理解到音乐的力量，以及它如何能够触动人心、传递情感。
        </p>
        <p className="mb-4">
          作为一名教师，我的理念是让学习钢琴变得有趣且富有成效。
          我相信每个人都有音乐天赋，只需要正确的指导和练习方法来激发它。
          我的课程注重实践和创新，帮助学生不仅掌握技巧，还能发展自己的音乐风格。
        </p>
        <p>
          无论您是初学者还是想要提升技能的有经验演奏者，我都期待能够与您一同探索钢琴的奇妙世界， 帮助您实现音乐梦想！
        </p>
      </div>
    </div>
  )
}

