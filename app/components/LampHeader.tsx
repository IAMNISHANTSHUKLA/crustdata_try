import { cn } from "@/lib/utils"
import { LampEffect } from "./LampEffect"

interface LampHeaderProps {
  title: string
  description?: string
  className?: string
}

export function LampHeader({ title, description, className }: LampHeaderProps) {
  return (
    <LampEffect className={cn("py-20", className)}>
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-xl text-center text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </LampEffect>
  )
}

