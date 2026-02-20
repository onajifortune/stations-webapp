'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronRight, Cross } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stations = [
  { id: 1, title: 'Jesus is Condemned to Death', description: 'We contemplate Jesus standing before Pilate' },
  { id: 2, title: 'Jesus Receives His Cross', description: 'Jesus accepts the weight of the cross with love' },
  { id: 3, title: 'Jesus Falls for the First Time', description: 'Our Lord stumbles under the burden' },
  { id: 4, title: 'Jesus Meets His Sorrowful Mother', description: 'The meeting of profound love and pain' },
  { id: 5, title: 'Simon Helps Carry the Cross', description: 'We are called to shoulder the cross with Christ' },
  { id: 6, title: 'Veronica Wipes Jesus\' Face', description: 'An act of compassion in the midst of suffering' },
  { id: 7, title: 'Jesus Falls for the Second Time', description: 'Our weakness meets divine strength' },
  { id: 8, title: 'Jesus Meets the Women of Jerusalem', description: 'Jesus turns to console those who weep for Him' },
  { id: 9, title: 'Jesus Falls for the Third Time', description: 'The depths of Christ\'s sacrifice' },
  { id: 10, title: 'Jesus is Stripped of His Garments', description: 'Stripped of all worldly dignity' },
  { id: 11, title: 'Jesus is Crucified', description: 'The moment of ultimate redemption' },
  { id: 12, title: 'Jesus Dies on the Cross', description: 'The completion of the redemptive sacrifice' },
  { id: 13, title: 'Jesus is Taken Down from the Cross', description: 'Sorrow transforms into hope' },
  { id: 14, title: 'Jesus is Laid in the Sepulcher', description: 'The beginning of new life' },
]

export default function Home() {
  const [selectedStation, setSelectedStation] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Cross className="h-8 w-8 text-accent" />
              <div>
                <h1 className="text-2xl font-serif font-light tracking-wide">Stations of the Cross</h1>
                <p className="text-sm text-muted-foreground">A contemplative journey</p>
              </div>
            </div>
            <Link 
              href="/stations"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              View All Stations
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-12">
          <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            The Stations of the Cross invite us to walk with Jesus on His path to Calvary. Take time to pause at each station, reflect on His love, and discover what His sacrifice means for your life.
          </p>
        </div>

        {/* Station Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stations.map((station) => (
            <Link
              key={station.id}
              href={`/station/${station.id}`}
              className="group relative"
            >
              <div className="h-full rounded-lg border border-border/60 bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10">
                    <span className="text-sm font-semibold text-accent">{station.id}</span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground/50 transition-all group-hover:translate-x-1 group-hover:text-accent/70" />
                </div>
                
                <h2 className="font-serif text-xl font-light mb-3 text-foreground leading-snug">
                  {station.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {station.description}
                </p>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full" />
              </div>
            </Link>
          ))}
        </div>

        {/* Reflection Section */}
        <div className="mt-20 rounded-lg border border-border/60 bg-card/50 p-12 text-center backdrop-blur-sm">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Spiritual Practice</p>
          <h2 className="font-serif text-3xl font-light mb-4">Begin Your Contemplation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
            Select any station above to begin your meditation. Take as much time as you need at each station to pray, reflect, and connect with the paschal mystery of Christ's redemptive love.
          </p>
          <Button 
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Link href="/station/1">
              Begin at Station One
            </Link>
          </Button>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 mt-20 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-sm text-muted-foreground">
            May this journey deepen your faith and draw you closer to the heart of Christ.
          </p>
        </div>
      </footer>
    </div>
  )
}
