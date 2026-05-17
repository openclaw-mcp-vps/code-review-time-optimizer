import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Code Review Time Optimizer',
  description: 'Optimize code review assignments for faster turnaround. Analyze team availability, expertise, and review history to suggest optimal reviewer assignments.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b333142e-6eec-48da-8351-620ba67ac810"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
