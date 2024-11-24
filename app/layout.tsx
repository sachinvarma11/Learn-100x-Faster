import '@/app/globals.css'
import { Inter } from 'next/font/google'
import MainNav from '@/components/main-nav'
import ModeToggle from '@/components/mode-toggle'
import ThemeProvider from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn 100x Faster',
  description: 'Effortlessly create personalized learning prompts tailored to any topic',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <header className="border-b">
              <div className="container flex items-center justify-between h-16">
                <MainNav />
                <ModeToggle />
              </div>
            </header>
            <main className="flex-1 container py-6">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

