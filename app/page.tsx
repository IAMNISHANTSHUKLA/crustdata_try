import Link from 'next/link'
import { Button } from "@/app/components/ui/button"
import { LampEffect } from './components/LampEffect'

export default function Home() {
  return (
    <LampEffect className="min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen p-24 relative z-10">
        <div className="absolute inset-0 w-full max-w-4xl mx-auto h-72 bg-blue-500/20 blur-[120px] rounded-full" />
        <div className="relative">
          <h1 className="text-6xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
            Welcome to Crustdata API Support
          </h1>
          <p className="text-xl mb-8 text-center text-slate-300 max-w-2xl mx-auto">
            Get instant answers to your questions about Crustdata APIs. Our AI-powered support bot is here to help you 24/7.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/chat">Start Chatting</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/docs">View Documentation</Link>
            </Button>
          </div>
        </div>
      </div>
    </LampEffect>
  )
}

