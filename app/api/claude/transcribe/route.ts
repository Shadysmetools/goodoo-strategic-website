import { NextRequest, NextResponse } from 'next/server'

const CLAUDE_API_KEY = process.env.CLAUDE_API_KEY
const CLAUDE_API_URL = 'https://api.anthropic.com/v1/messages'

interface TranscriptionRequest {
  audioUrl?: string
  audioData?: string // base64 encoded audio
  meetingTitle: string
  meetingDescription?: string
}

interface TranscriptEntry {
  timestamp: string
  text: string
}

interface TranscriptionResponse {
  transcript: TranscriptEntry[]
  summary: string
  keyPoints: string[]
  actionItems: string[]
}

export async function POST(request: NextRequest) {
  try {
    if (!CLAUDE_API_KEY) {
      return NextResponse.json({ error: 'Claude API key not configured' }, { status: 500 })
    }

    const body: TranscriptionRequest = await request.json()
    
    if (!body.audioUrl && !body.audioData) {
      return NextResponse.json({ error: 'Audio data or URL required' }, { status: 400 })
    }

    // For now, we'll simulate the transcription process
    // In a real implementation, you would:
    // 1. Upload audio to a service like AssemblyAI or use Claude's audio capabilities
    // 2. Get the raw transcription
    // 3. Use Claude to format it with timestamps and generate summary

    // Simulated transcription with timestamps
    const simulatedTranscript: TranscriptEntry[] = [
      { timestamp: "00:00:00", text: "Meeting started. Welcome everyone." },
      { timestamp: "00:00:15", text: "Let's begin with the quarterly review." },
      { timestamp: "00:01:30", text: "Revenue has increased by 15% this quarter." },
      { timestamp: "00:02:45", text: "We need to focus on customer retention." },
      { timestamp: "00:04:20", text: "Action item: Review pricing strategy by next week." },
      { timestamp: "00:05:10", text: "Any questions from the team?" },
      { timestamp: "00:06:30", text: "Meeting adjourned." }
    ]

    // Generate summary using Claude API
    const summaryPrompt = `
    Based on this meeting transcript, please provide:
    1. A concise summary (2-3 sentences)
    2. Key points discussed (bullet points)
    3. Action items identified (bullet points)

    Meeting Title: ${body.meetingTitle}
    Meeting Description: ${body.meetingDescription || 'No description provided'}
    
    Transcript:
    ${simulatedTranscript.map(entry => `[${entry.timestamp}] ${entry.text}`).join('\n')}
    `

    const claudeResponse = await fetch(CLAUDE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': CLAUDE_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 1000,
        messages: [
          {
            role: 'user',
            content: summaryPrompt
          }
        ]
      })
    })

    let summary = "Meeting summary will be generated here."
    let keyPoints = ["Key points will be extracted here."]
    let actionItems = ["Action items will be identified here."]

    if (claudeResponse.ok) {
      const claudeData = await claudeResponse.json()
      const content = claudeData.content[0]?.text || ""
      
      // Parse the response to extract summary, key points, and action items
      // This is a simplified parser - you might want to make it more robust
      const lines = content.split('\n')
      let currentSection = ''
      
      for (const line of lines) {
        if (line.toLowerCase().includes('summary')) {
          currentSection = 'summary'
        } else if (line.toLowerCase().includes('key points')) {
          currentSection = 'keyPoints'
        } else if (line.toLowerCase().includes('action items')) {
          currentSection = 'actionItems'
        } else if (line.trim() && currentSection === 'summary') {
          summary = line.trim()
        } else if (line.trim().startsWith('-') || line.trim().startsWith('•')) {
          const item = line.trim().replace(/^[-•]\s*/, '')
          if (currentSection === 'keyPoints') {
            keyPoints.push(item)
          } else if (currentSection === 'actionItems') {
            actionItems.push(item)
          }
        }
      }
    } else {
      console.error('Claude API error:', await claudeResponse.text())
    }

    const response: TranscriptionResponse = {
      transcript: simulatedTranscript,
      summary,
      keyPoints: keyPoints.filter(point => point !== "Key points will be extracted here."),
      actionItems: actionItems.filter(item => item !== "Action items will be identified here.")
    }

    return NextResponse.json(response)

  } catch (error) {
    console.error('Transcription error:', error)
    return NextResponse.json({ error: 'Transcription failed' }, { status: 500 })
  }
} 