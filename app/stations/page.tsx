'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Cross } from 'lucide-react'
import { Input } from '@/components/ui/input'

const stations = [
  { id: 1, title: 'Jesus is Condemned to Death', theme: 'Judgment' },
  { id: 2, title: 'Jesus Receives His Cross', theme: 'Acceptance' },
  { id: 3, title: 'Jesus Falls for the First Time', theme: 'Weakness' },
  { id: 4, title: 'Jesus Meets His Sorrowful Mother', theme: 'Compassion' },
  { id: 5, title: 'Simon Helps Carry the Cross', theme: 'Service' },
  { id: 6, title: 'Veronica Wipes Jesus\' Face', theme: 'Kindness' },
  { id: 7, title: 'Jesus Falls for the Second Time', theme: 'Perseverance' },
  { id: 8, title: 'Jesus Meets the Women of Jerusalem', theme: 'Hope' },
  { id: 9, title: 'Jesus Falls for the Third Time', theme: 'Surrender' },
  { id: 10, title: 'Jesus is Stripped of His Garments', theme: 'Humility' },
  { id: 11, title: 'Jesus is Crucified', theme: 'Love' },
  { id: 12, title: 'Jesus Dies on the Cross', theme: 'Redemption' },
  { id: 13, title: 'Jesus is Taken Down from the Cross', theme: 'Mourning' },
  { id: 14, title: 'Jesus is Laid in the Sepulcher', theme: 'Resurrection' },
]

export default function StationsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredStations = stations.filter(station =>
    station.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    station.theme.toLowerCase().includes(searchQuery.toLowerCase()) ||
    station.id.toString().includes(searchQuery)
  )

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center gap-3 mb-6">
            <Cross className="h-8 w-8 text-accent" />
            <h1 className="text-2xl font-serif font-light tracking-wide">All Stations</h1>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search by station number, title, or theme..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-card border-border/60"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        {filteredStations.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground mb-2">No stations found matching your search.</p>
            <button
              onClick={() => setSearchQuery('')}
              className="text-sm text-accent hover:text-accent/80 transition-colors underline"
            >
              Clear search
            </button>
          </div>
        ) : (
          <>
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  Showing {filteredStations.length} of {stations.length} stations
                </p>
              </div>
              <Link href="/" className="text-sm text-accent hover:text-accent/80 transition-colors">
                ← Back to Home
              </Link>
            </div>

            {/* Grid View */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {filteredStations.map((station) => (
                <Link
                  key={station.id}
                  href={`/station/${station.id}`}
                  className="group"
                >
                  <div className="h-full rounded-lg border border-border/60 bg-card p-6 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 flex flex-col">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-accent/10">
                          <span className="text-xs font-semibold text-accent">{station.id}</span>
                        </div>
                        <span className="text-xs uppercase tracking-widest text-muted-foreground bg-muted rounded-full px-3 py-1">
                          {station.theme}
                        </span>
                      </div>
                    </div>
                    
                    <h2 className="font-serif text-lg font-light mb-2 text-foreground group-hover:text-accent transition-colors leading-snug flex-grow">
                      {station.title}
                    </h2>

                    <div className="pt-4 border-t border-border/30">
                      <p className="text-xs text-muted-foreground">
                        Click to meditate on this station →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Timeline View */}
            <div className="mt-16 pt-12 border-t border-border/40">
              <h2 className="text-xl font-serif font-light mb-8">Journey Through All Stations</h2>
              <div className="space-y-4">
                {filteredStations.map((station, index) => (
                  <Link
                    key={station.id}
                    href={`/station/${station.id}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <span className="text-sm font-semibold text-accent">{station.id}</span>
                    </div>
                    <div className="flex-grow min-w-0">
                      <p className="font-serif text-foreground group-hover:text-accent transition-colors">
                        {station.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Theme: {station.theme}
                      </p>
                    </div>
                    <div className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                      Begin →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
