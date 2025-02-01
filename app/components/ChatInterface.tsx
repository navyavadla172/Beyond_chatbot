"use client"

import { useState, type React } from "react"

interface Message {
  text: string
  sender: "user" | "bot"
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { text: input, sender: "user" }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // In a real application, you would send the message to your backend/API
      const response = await new Promise<string>((resolve) => {
        setTimeout(() => resolve(`Response to: ${input}`), 1000)
      })

      const botMessage: Message = { text: response, sender: "bot" }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error getting chatbot response:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-96 overflow-y-auto">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.sender === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-4 py-2 rounded-lg ${
                message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="text-center">
            <span className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></span>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="shadow appearance-none border rounded-l w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Type your message..."
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
        >
          Send
        </button>
      </form>
    </div>
  )
}

