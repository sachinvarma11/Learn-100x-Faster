import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="space-y-12 font-sans">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Mind Hack Prompts</h1>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl mb-4">Live in 2030, Learn a Topic 100x Times Faster Than Others</h2>
        <p className="text-lg text-muted-foreground">Effortlessly create personalized learning prompts tailored to any topic</p>
      </section>
      
      <section className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>AI Prompt Builder</CardTitle>
            <CardDescription>Generate custom AI prompts for your learning journey</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Use our interactive ChatGPT Prompt Builder to create tailored prompts for any topic you're studying.</p>
          </CardContent>
          <CardFooter>
            <Button asChild><Link href="/ai-prompt-builder">Try It Now</Link></Button>
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Topic Integration</CardTitle>
            <CardDescription>Personalize your learning experience</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Input your topic and get a tailored learning process using our advanced learning frameworks.</p>
          </CardContent>
          <CardFooter>
            <Button asChild><Link href="/topic-integration">Get Started</Link></Button>
          </CardFooter>
        </Card>
      </section>
    </div>
  )
}

