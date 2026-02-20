'use client'

import { useState } from 'react'
import { BookOpen, Save, Trash2 } from 'lucide-react'

interface ReflectionJournalProps {
  stationId: number
}

export function ReflectionJournal({ stationId }: ReflectionJournalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [content, setContent] = useState('')
  const [savedEntries, setSavedEntries] = useState<string[]>([])
  const [isSaved, setIsSaved] = useState(false)

  const handleSave = () => {
    if (content.trim()) {
      const timestamp = new Date().toLocaleString()
      const entry = `[${timestamp}] ${content}`
      setSavedEntries([...savedEntries, entry])
      setContent('')
      setIsSaved(true)
      setTimeout(() => setIsSaved(false), 2000)
      
      // Save to localStorage
      const saved = JSON.parse(localStorage.getItem(`station_${stationId}_reflections`) || '[]')
      saved.push(entry)
      localStorage.setItem(`station_${stationId}_reflections`, JSON.stringify(saved))
    }
  }

  const handleDelete = (index: number) => {
    const newEntries = savedEntries.filter((_, i) => i !== index)
    setSavedEntries(newEntries)
    localStorage.setItem(`station_${stationId}_reflections`, JSON.stringify(newEntries))
  }

  // Load saved entries on mount
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(`station_${stationId}_reflections`) || '[]')
    setSavedEntries(saved)
  }, [stationId])

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border/60 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10 text-sm font-medium"
      >
        <BookOpen className="h-4 w-4 text-accent" />
        Reflection Journal
      </button>

      {/* Journal Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-card rounded-lg border border-border/60 shadow-xl">
            {/* Header */}
            <div className="border-b border-border/40 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-accent" />
                <h2 className="font-serif text-lg">Reflection Journal - Station {stationId}</h2>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {/* New Entry Form */}
              <div className="mb-8 pb-8 border-b border-border/40">
                <label className="block text-sm font-medium mb-3">Write Your Reflection</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="What is God speaking to your heart through this station? How does this moment of Jesus's passion relate to your own journey?"
                  className="w-full px-4 py-3 bg-muted rounded-lg border border-border/60 focus:border-accent/50 focus:outline-none resize-none text-sm leading-relaxed"
                  rows={4}
                />
                <div className="flex gap-2 mt-3">
                  <button
                    onClick={handleSave}
                    className="flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/40 hover:bg-accent/30 transition-colors rounded-lg text-sm font-medium"
                  >
                    <Save className="h-4 w-4" />
                    Save Entry
                  </button>
                  {isSaved && (
                    <div className="flex items-center text-accent text-sm">
                      ✓ Saved
                    </div>
                  )}
                </div>
              </div>

              {/* Saved Entries */}
              {savedEntries.length > 0 && (
                <div>
                  <h3 className="font-medium mb-4 text-sm">Your Reflections ({savedEntries.length})</h3>
                  <div className="space-y-4">
                    {savedEntries.map((entry, index) => (
                      <div key={index} className="p-4 bg-muted/40 rounded-lg border border-border/30">
                        <div className="flex items-start justify-between gap-3">
                          <p className="text-sm leading-relaxed text-foreground/85 flex-1">
                            {entry}
                          </p>
                          <button
                            onClick={() => handleDelete(index)}
                            className="text-muted-foreground hover:text-destructive transition-colors flex-shrink-0 mt-1"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {savedEntries.length === 0 && (
                <p className="text-center text-muted-foreground text-sm py-4">
                  No reflections yet. Begin by writing your thoughts above.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
