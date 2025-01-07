'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"
import { Button } from "@/app/components/ui/button"
import { ScrollArea } from "@/app/components/ui/scroll-area"
import { Input } from "@/app/components/ui/input"
import { Home, MessageSquare, Book, User, Command, Settings, MessageCircle, Video, Bell, Download, Search, Tag, HelpCircle } from 'lucide-react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChatHistory } from "./ChatHistory"
import { UserAccount } from "./UserAccount"

export function Sidebar() {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleSidebar = () => setIsExpanded(!isExpanded)

  const sidebarItems = [
    { href: "/", icon: Home, label: "Home" },
    { href: "/chat", icon: MessageSquare, label: "Chat Support" },
    { href: "/docs", icon: Book, label: "API Documentation" },
    { href: "/account", icon: User, label: "Account" },
    { href: "/commands", icon: Command, label: "Shortcut Commands" },
    { href: "/settings", icon: Settings, label: "Chatbot Settings" },
    { href: "/feedback", icon: MessageCircle, label: "Feedback and Support" },
    { href: "/tutorials", icon: Video, label: "Tutorials and Videos" },
    { href: "/notifications", icon: Bell, label: "Notifications" },
    { href: "/resources", icon: Download, label: "Downloadable Resources" },
    { href: "/categories", icon: Tag, label: "Categories" },
    { href: "/help", icon: HelpCircle, label: "Help/Guided Tour" },
  ]

  return (
    <div className={cn(
      "flex flex-col h-screen bg-slate-900 text-slate-50 transition-all duration-300",
      isExpanded ? "w-64" : "w-16"
    )}>
      <div className="p-4 flex justify-between items-center">
        <h2 className={cn("font-semibold transition-opacity", isExpanded ? "opacity-100" : "opacity-0")}>
          Crustdata Support
        </h2>
        <Button variant="ghost" size="icon" onClick={toggleSidebar}>
          {isExpanded ? "←" : "→"}
        </Button>
      </div>
      <div className="px-4 mb-4">
        <Input 
          type="search" 
          placeholder="Search..." 
          className={cn("bg-slate-800 border-slate-700", isExpanded ? "" : "w-0 p-0 border-0")}
        />
      </div>
      <ScrollArea className="flex-grow">
        <div className="space-y-2 px-4">
          {sidebarItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-slate-800",
                !isExpanded && "px-2"
              )}
            >
              <Link href={item.href}>
                <item.icon className={cn("h-5 w-5", isExpanded && "mr-2")} />
                {isExpanded && <span>{item.label}</span>}
              </Link>
            </Button>
          ))}
        </div>
      </ScrollArea>
      <div className="p-4">
        <ChatHistory isExpanded={isExpanded} />
        <UserAccount isExpanded={isExpanded} />
      </div>
    </div>
  )
}

