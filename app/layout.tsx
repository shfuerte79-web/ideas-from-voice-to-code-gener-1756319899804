import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Voice-to-Code Generator',
  description: '[
  {
    "title": "Voice-to-Prototype Generator",
    "one_liner": "Transform voice commands into interactive UI prototypes in real-time.",
    "why_now": "The growing interest in no-code solutions and rapid prototyping due to remote work demands.",
    "novel_mechanism": "Leveraging speech-to-text AI combined with design suggestion algorithms to create a visual layout directly from voice instructions.",
    "ai_stack": [
      "OpenAI Codex",
      "Figma API",
      "Speech Recognition",
      "NLP"
    ],
    "edge_use_cases": [
      "Designing UI/UX on-the-fly during meetings",
      "Non-developers creating prototypes for client pitches",
      "Collaborative brainstorming sessions with instant visual feedback"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Real-time voice commands",
        "Basic design elements",
        "Export prototype as a Figma file"
      ],
      "tools": [
        "React",
        "Figma API",
        "Web Speech API",
        "Node.js"
      ],
      "data_bootstrap": [
        "sample design prompts",
        "user-generated prototypes",
        "synthesized templates"
      ],
      "risk": [
        "Technical limitations on voice recognition accuracy",
        "Limited design scope with initial launch"
      ],
      "mitigation": [
        "Incorporate user feedback loops for accuracy improvements",
        "Start with common design patterns to ensure relevancy"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Live demo with user requests",
        "Before/after design examples"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "LinkedIn"
      ],
      "pricing": {
        "free": "Limited prototypes/month",
        "pro": "$10/month for unlimited prototypes",
        "business": "Custom pricing for teams"
      }
    },
    "moat": [
      "Easy onboarding for non-technical users",
      "Integration with popular design tools",
      "Community-driven design library"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 6
    },
    "total_score": 30,
    "reasoning": "It offers a clear value proposition to a niche audience currently under-served by traditional coding tools, minimizing competition."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}