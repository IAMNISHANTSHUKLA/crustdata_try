'use client'

import { cn } from "@/lib/utils"
import { useEffect, useRef } from "react"

interface LampEffectProps {
  children: React.ReactNode
  className?: string
}

export function LampEffect({ children, className }: LampEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    const glow = glowRef.current
    if (!container || !glow) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Update glow position
      glow.style.background = `
        radial-gradient(
          600px circle at ${x}px ${y}px,
          rgba(29, 78, 216, 0.15),
          transparent 80%
        )
      `
    }

    container.addEventListener('mousemove', handleMouseMove)
    return () => container.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className={cn("relative overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full">
        <div
          ref={glowRef}
          className="h-full w-full bg-[radial-gradient(600px_circle_at_var(--mouse-x,50%)_var(--mouse-y,50%),rgba(29,78,216,0.15),transparent_80%)]"
        />
      </div>
      <div className="relative z-20 bg-gradient-to-b from-black to-slate-900/0">
        {children}
      </div>
    </div>
  )
}

