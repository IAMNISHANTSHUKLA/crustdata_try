'use client'

import { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/card"
import { ScrollArea } from "@/app/components/ui/scroll-area"

type Message = {
  role: 'user' | 'assistant'
  content: string
}

const QA_PAIRS = [
  {
    question: "What is Crustdata?",
    answer: "Crustdata is a platform that provides APIs for accessing and analyzing various types of data, including financial and market data."
  },
  {
    question: "How do I authenticate API requests?",
    answer: "To authenticate API requests, you need to include your API key in the 'Authorization' header of your HTTP request. The format should be 'Bearer YOUR_API_KEY'."
  },
  {
    question: "What endpoints are available?",
    answer: "Crustdata offers several endpoints, including /companies for company data, /market for market data, and /financials for financial data. Please refer to our API documentation for a complete list and details on each endpoint."
  },
  {
    question: "What data formats does the API support?",
    answer: "The Crustdata API typically returns data in JSON format. This allows for easy parsing and integration with most programming languages and frameworks."
  },
  {
    question: "Are there rate limits?",
    answer: "Yes, there are rate limits in place to ensure fair usage. The exact limits depend on your subscription tier. Please check your account dashboard or contact support for specific details on your rate limits."
  }
]

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate API response
    setTimeout(() => {
      const response = getResponse(input)
      const assistantMessage: Message = { role: 'assistant', content: response }
      setMessages(prev => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1000)
  }

  const getResponse = (question: string): string => {
    for (const qa of QA_PAIRS) {
      if (question.toLowerCase().includes(qa.question.toLowerCase())) {
        return qa.answer
      }
    }
    return "I'm sorry, I don't have information about that. Please check our documentation or contact support for more details."
  }

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Chat with Crustdata Support</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[calc(100vh-300px)] pr-4">
          {messages.map((m, index) => (
            <div key={index} className={`mb-4 ${m.role === 'user' ? 'text-right' : 'text-left'}`}>
              <span className={`inline-block p-2 rounded-lg ${m.role === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                {m.content}
              </span>
            </div>
          ))}
          {isTyping && (
            <div className="text-left">
              <span className="inline-block p-2 rounded-lg bg-gray-200 text-black">
                Crustdata is typing...
              </span>
            </div>
          )}
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about Crustdata APIs..."
            className="flex-grow"
          />
          <Button type="submit" disabled={isTyping}>Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}

