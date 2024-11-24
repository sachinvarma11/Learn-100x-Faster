"use client"

import * as React from "react"
import { ThemeProvider as NextThemes } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export default function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemes {...props}>{children}</NextThemes>
}

