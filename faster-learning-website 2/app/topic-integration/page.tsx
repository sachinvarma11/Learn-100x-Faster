'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function TopicIntegration() {
  const [topic, setTopic] = useState('')

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Dynamic Topic Integration</CardTitle>
          <CardDescription>Tailor your learning process to your specific topic of interest</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="topic">Enter your topic</Label>
            <Input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Machine Learning"
            />
          </div>
        </CardContent>
      </Card>

      {topic && (
        <Tabs defaultValue="chunking">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="chunking">Chunking</TabsTrigger>
            <TabsTrigger value="spaced-repetition">Spaced Repetition</TabsTrigger>
            <TabsTrigger value="active-recall">Active Recall</TabsTrigger>
          </TabsList>
          <TabsContent value="chunking">
            <Card>
              <CardHeader>
                <CardTitle>Chunking for {topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Break down {topic} into smaller, manageable subtopics:</p>
                <ol className="list-decimal list-inside mt-2 space-y-2">
                  <li>Identify 3-5 main concepts within {topic}</li>
                  <li>For each main concept, list 2-3 key points</li>
                  <li>Create a hierarchical structure of this information</li>
                  <li>Study each chunk individually, then review connections</li>
                </ol>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/frameworks/chunking?topic=${encodeURIComponent(topic)}`}>
                    Start Chunking {topic}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="spaced-repetition">
            <Card>
              <CardHeader>
                <CardTitle>Spaced Repetition for {topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Optimize your review schedule for {topic}:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Day 1: Initial learning session</li>
                  <li>Day 2: First review</li>
                  <li>Day 4: Second review</li>
                  <li>Day 7: Third review</li>
                  <li>Day 14: Fourth review</li>
                  <li>Day 30: Fifth review</li>
                </ul>
                <p className="mt-4">Adjust intervals based on your recall success.</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/spaced-repetition?topic=${encodeURIComponent(topic)}`}>
                    Create Review Schedule for {topic}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="active-recall">
            <Card>
              <CardHeader>
                <CardTitle>Active Recall for {topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Enhance your learning of {topic} with these active recall strategies:</p>
                <ul className="list-disc list-inside mt-2 space-y-2">
                  <li>Create flashcards for key terms and concepts</li>
                  <li>Write practice questions and quiz yourself regularly</li>
                  <li>Summarize main points without referring to notes</li>
                  <li>Teach the concept to someone else or explain it out loud</li>
                  <li>Draw concept maps from memory</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/ai-prompt-builder?topic=${encodeURIComponent(topic)}`}>
                    Generate AI Prompts for {topic}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
}

