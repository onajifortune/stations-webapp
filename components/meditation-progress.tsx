'use client'

import { useEffect, useState } from 'react'

interface MeditationProgressProps {
  stationId: number
  onProgressUpdate?: (completed: number) => void
}

export function MeditationProgress({ stationId, onProgressUpdate }: MeditationProgressProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`station_${stationId}_progress`)
    if (savedProgress) {
      setProgress(parseInt(savedProgress))
    }
  }, [stationId])

  const handleProgressUpdate = (newProgress: number) => {
    const validated = Math.min(100, Math.max(0, newProgress))
    setProgress(validated)
    localStorage.setItem(`station_${stationId}_progress`, validated.toString())
    onProgressUpdate?.(validated)
  }

  const handleComplete = () => {
    handleProgressUpdate(100)
  }

  const handleReset = () => {
    handleProgressUpdate(0)
    localStorage.removeItem(`station_${stationId}_progress`)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-40 bg-card border border-border/60 rounded-lg p-4 shadow-lg max-w-sm">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Meditation Progress</p>
          <p className="font-serif text-lg">{progress}% Complete</p>
        </div>
        <button
          onClick={() => setIsVisible(false)}
          className="text-muted-foreground hover:text-foreground transition-colors text-sm"
        >
          ✕
        </button>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-muted rounded-full overflow-hidden mb-4">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent/80 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={() => handleProgressUpdate(Math.min(100, progress + 25))}
          disabled={progress >= 100}
          className="flex-1 text-xs px-3 py-2 rounded border border-border/60 hover:bg-muted/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Add Time
        </button>
        <button
          onClick={handleComplete}
          disabled={progress >= 100}
          className="flex-1 text-xs px-3 py-2 rounded bg-accent/20 border border-accent/40 hover:bg-accent/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Done
        </button>
        {progress > 0 && (
          <button
            onClick={handleReset}
            className="flex-1 text-xs px-3 py-2 rounded border border-border/60 hover:bg-muted/50 transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  )
}
