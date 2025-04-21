"use client"

import { useEffect, useState, useRef } from "react"

interface TerminalProps {
  text: string
  typingSpeed?: number
  className?: string
  showPrompt?: boolean
  onComplete?: () => void
}

export function Terminal({
  text = "",
  typingSpeed = 50,
  className = "",
  showPrompt = true,
  onComplete,
}: TerminalProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setDisplayedText("")
    setCurrentIndex(0)
  }, [text])

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)

        // Auto-scroll to bottom
        if (containerRef.current) {
          containerRef.current.scrollTop = containerRef.current.scrollHeight
        }
      }, typingSpeed)

      return () => clearTimeout(timer)
    } else if (currentIndex === text.length && onComplete) {
      onComplete()
    }
  }, [currentIndex, text, typingSpeed, onComplete])

  return (
    <div
      className={`terminal-window font-mono p-4 rounded-lg overflow-auto ${className}`}
      ref={containerRef}
    >
      <div className="terminal-header">
        <div className="terminal-button terminal-button-red"></div>
        <div className="terminal-button terminal-button-yellow"></div>
        <div className="terminal-button terminal-button-green"></div>
        <div className="terminal-title">terminal</div>
      </div>
      <div className="terminal-content whitespace-pre-wrap">
        {showPrompt && <span className="text-primary">$ </span>}
        <span>{displayedText}</span>
        <span className="terminal-cursor ml-1 inline-block w-2 h-4 bg-primary align-sub animate-pulse"></span>
      </div>
    </div>
  )
}
