'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export default function AIPromptBuilder() {
  const [topic, setTopic] = useState('')
  const [promptType, setPromptType] = useState('simplify')
  const [generatedPrompt, setGeneratedPrompt] = useState('')

  const generatePrompt = () => {
    let prompt = ''
    switch (promptType) {
      case 'simplify':
        prompt = `Explain ${topic} in simple terms, as if you're teaching a beginner. Break down complex concepts and use analogies where appropriate.`
        break
      case 'deepDive':
        prompt = `Provide an in-depth explanation of ${topic}, covering its key principles, historical context, and current applications. Include any relevant theories or models.`
        break
      case 'studyPlan':
        prompt = `Create a comprehensive study plan for ${topic}. Include key areas to focus on, recommended resources, and a suggested timeline. Also, provide a short quiz to test understanding of the main concepts.`
        break
      case 'compare':
        prompt = `Compare and contrast ${topic} with a related concept or theory. Highlight the similarities, differences, and how they interact or influence each other.`
        break
      case 'realWorld':
        prompt = `Explain how ${topic} is applied in real-world scenarios. Provide specific examples from industry, research, or everyday life where this concept is crucial.`
        break
      case 'critique':
        prompt = `Present a critical analysis of ${topic}. Discuss its strengths, limitations, and any controversies or debates surrounding it in the field.`
        break
    }
    setGeneratedPrompt(prompt)
  }

  useEffect(() => {
    if (topic) {
      generatePrompt()
    }
  }, [topic, promptType])

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Interactive ChatGPT Prompt Builder</CardTitle>
        <CardDescription>Generate custom AI prompts to enhance your learning of {topic || 'any topic'}</CardDescription>
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
          <Label>Select prompt type</Label>
          <RadioGroup value={promptType} onValueChange={setPromptType}>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="simplify" id="simplify" />
                <Label htmlFor="simplify">Simplify Concept</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="deepDive" id="deepDive" />
                <Label htmlFor="deepDive">Deep Dive</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="studyPlan" id="studyPlan" />
                <Label htmlFor="studyPlan">Create Study Plan</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compare" id="compare" />
                <Label htmlFor="compare">Compare & Contrast</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="realWorld" id="realWorld" />
                <Label htmlFor="realWorld">Real-world Application</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="critique" id="critique" />
                <Label htmlFor="critique">Critical Analysis</Label>
              </div>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-start space-y-4">
        <div className="w-full space-y-2">
          <Label htmlFor="generated-prompt">Generated Prompt:</Label>
          <Textarea
            id="generated-prompt"
            value={generatedPrompt}
            readOnly
            className="h-32"
          />
        </div>
        <Button className="w-full" onClick={() => navigator.clipboard.writeText(generatedPrompt)}>
          Copy Prompt
        </Button>
      </CardFooter>
    </Card>
  )
}

