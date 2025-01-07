import { NextResponse } from 'next/server'

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

export async function POST(req: Request) {
  const { messages } = await req.json()
  const lastMessage = messages[messages.length - 1]

  let response = "I'm sorry, I don't have information about that. Please check our documentation or contact support for more details."

  for (const qa of QA_PAIRS) {
    if (lastMessage.content.toLowerCase().includes(qa.question.toLowerCase())) {
      response = qa.answer
      break
    }
  }

  return NextResponse.json({
    role: 'assistant',
    content: response,
  })
}

