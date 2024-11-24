import './globals.css'
import { Poppins } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle"
import { MainNav } from "@/components/main-nav"

const poppins = Poppins({ 
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Mind Hack Prompts',
  description: 'Live in 2030, Learn a Topic 100x Times Faster Than Others',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans min-h-screen bg-gradient-to-b from-background to-secondary`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center">
                <MainNav />
                <div className="ml-auto flex items-center space-x-4">
                  <ModeToggle />
                </div>
              </div>
            </header>
            <main className="flex-1">
              <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
            <footer className="border-t bg-muted/50">
              <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-sm">
                <p>&copy; 2023 Mind Hack Prompts. All rights reserved.</p>
                <p className="mt-2">Built with ❤️ by Sachin Varma</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

