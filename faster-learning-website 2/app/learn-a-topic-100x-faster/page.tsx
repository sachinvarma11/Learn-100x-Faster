'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function LearnATopic100xFaster() {
  const [topic, setTopic] = useState('')
  const [promptType, setPromptType] = useState('simplify')
  const [generatedPrompt, setGeneratedPrompt] = useState('')

  const generatePrompt = () => {
    if (!topic) return ''

    const prompts = {
      simplify: `Explain ${topic} in simple terms, as if you're teaching a beginner. Break down complex concepts and use analogies where appropriate to accelerate understanding.`,
      deepDive: `Provide an in-depth explanation of ${topic}, covering its key principles, historical context, and current applications. Include any relevant theories or models, and explain how this knowledge can be rapidly assimilated.`,
      studyPlan: `Create a comprehensive study plan for mastering ${topic} 100x faster than traditional methods. Include key areas to focus on, recommended resources, and a suggested timeline. Also, provide a short quiz to test understanding of the main concepts and reinforce rapid learning.`,
      compare: `Compare and contrast ${topic} with a related concept or theory. Highlight the similarities, differences, and how they interact or influence each other. Explain how understanding these relationships can accelerate learning in both areas.`,
      realWorld: `Explain how ${topic} is applied in real-world scenarios. Provide specific examples from industry, research, or everyday life where this concept is crucial. Describe how quickly understanding these applications can lead to mastery of the topic.`,
      critique: `Present a critical analysis of ${topic}. Discuss its strengths, limitations, and any controversies or debates surrounding it in the field. Explain how this critical perspective can lead to a deeper and faster understanding of the subject.`
    }

    return prompts[promptType as keyof typeof prompts] || ''
  }

  useEffect(() => {
    setGeneratedPrompt(generatePrompt())
  }, [topic, promptType])

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tighter text-center">Learn a Topic 100x Faster</CardTitle>
        <CardDescription className="text-center">Generate custom AI prompts to supercharge your learning of {topic || 'any topic'}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="topic">Enter your topic</Label>
          <Input
            type="text"
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g., Quantum Computing"
          />
        </div>
        <div className="space-y-2">
          <Label>Select learning acceleration strategy</Label>
          <RadioGroup value={promptType} onValueChange={setPromptType}>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries({
                simplify: 'Rapid Simplification',
                deepDive: 'Accelerated Deep Dive',
                studyPlan: '100x Faster Study Plan',
                compare: 'Rapid Comparison',
                realWorld: 'Quick Real-world Application',
                critique: 'Accelerated Critical Analysis'
              }).map(([value, label]) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem value={value} id={value} />
                  <Label htmlFor={value}>{label}</Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-4">
          <div className="w-full space-y-2">
            <Label htmlFor="generated-prompt">Generated Prompt for 100x Faster Learning:</Label>
            <Textarea
              id="generated-prompt"
              value={generatedPrompt}
              readOnly
              className="h-32"
            />
          </div>
          <div>
            <Button 
              className="w-full" 
              onClick={() => {
                navigator.clipboard.writeText(generatedPrompt)
                alert('Prompt copied to clipboard!')
              }}
            >
              Copy Prompt
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

