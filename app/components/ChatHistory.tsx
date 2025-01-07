import { ScrollArea } from "@/app/components/ui/scroll-area"
import { Button } from "@/app/components/ui/button"

export function ChatHistory({ isExpanded }: { isExpanded: boolean }) {
  const recentChats = [
    { id: 1, title: "API Authentication" },
    { id: 2, title: "Rate Limits" },
    { id: 3, title: "Endpoint Usage" },
  ]

  if (!isExpanded) return null

  return (
    <div className="mb-4">
      <h3 className="mb-2 text-sm font-semibold">Recent Chats</h3>
      <ScrollArea className="h-24">
        {recentChats.map((chat) => (
          <Button key={chat.id} variant="ghost" className="w-full justify-start text-sm">
            {chat.title}
          </Button>
        ))}
      </ScrollArea>
    </div>
  )
}

