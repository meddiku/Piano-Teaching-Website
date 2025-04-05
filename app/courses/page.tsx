import { Button } from "@/components/ui/button"

const courses = [
  {
    id: 1,
    title: "初级钢琴自弹自唱",
    description: "适合初学者的基础课程，学习钢琴基础和简单的自弹自唱技巧。",
    price: 10,
    level: "初级",
    preview: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "中级即兴演奏",
    description: "进阶课程，学习更复杂的和弦进行和即兴创作技巧。",
    price: 15,
    level: "中级",
    preview: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "高级钢琴表演艺术",
    description: "专业级课程，深入学习舞台表演和高级自弹自唱技巧。",
    price: 20,
    level: "进阶",
    preview: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
]

export default function Courses() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">我们的课程</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={course.preview}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-600 font-semibold">{course.price} 马币/月</span>
                <span className="bg-gray-200 px-2 py-1 rounded-full text-sm">{course.level}</span>
              </div>
              <Button className="w-full mt-4 bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
                订阅课程
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

