import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

export default function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Learn 100x Faster
      </Link>
      <Link
        href="/ai-prompt-builder"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        AI Prompt Builder
      </Link>
      <Link
        href="/topic-integration"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Topic Integration
      </Link>
    </nav>
  )
}

