import Chat from '../components/Chat'
import { LampHeader } from '../components/LampHeader'

export default function ChatPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <LampHeader 
        title="Crustdata API Support Chat"
        description="Get instant answers to your questions about our APIs"
      />
      <div className="container mx-auto p-4">
        <Chat />
      </div>
    </div>
  )
}

