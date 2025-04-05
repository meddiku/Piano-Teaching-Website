"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    // Here you would typically send the form data to your backend
    console.log("Form submitted", Object.fromEntries(formData))
    // Add logic to show a success message to the user
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">联系我们</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            姓名
          </label>
          <Input type="text" id="name" name="name" required className="w-full" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            电子邮箱
          </label>
          <Input type="email" id="email" name="email" required className="w-full" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            留言
          </label>
          <Textarea id="message" name="message" rows={4} required className="w-full" />
        </div>
        <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 transition duration-300">
          发送消息
        </Button>
      </form>
    </div>
  )
}

