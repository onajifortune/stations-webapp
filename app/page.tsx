'use client'

import { useState, useEffect } from 'react'
import { ChevronRight, Cross, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'

const stations = [
  {
    id: 1,
    title: 'Jesus is Condemned to Death',
    scripture: 'Matthew 27:24-26',
    description: 'We contemplate Jesus standing before Pilate',
    reflection: 'Pontius Pilate washes his hands, declaring his innocence, while Jesus stands condemned. In this moment, we witness the collision between worldly power and divine truth. Jesus chooses silence not from weakness, but from infinite love and acceptance of His Father\'s will.',
    meditation: 'Reflect on the times you have remained silent when you could have spoken truth. How does Christ\'s silent acceptance challenge you to surrender your will to God\'s plan?',
    prayer: 'Lord Jesus, You were condemned so that I might be freed from sin. Grant me the courage to stand firm in truth, even when the world demands my silence. Help me to accept Your Father\'s will with the same perfect trust You showed.',
  },
  {
    id: 2,
    title: 'Jesus Receives His Cross',
    scripture: 'John 19:17',
    description: 'Jesus accepts the weight of the cross with love',
    reflection: 'Jesus accepts the wooden cross from His executioners, shouldering it without complaint. This act reveals the true nature of His mission—not to escape suffering, but to embrace it as an instrument of redemption. His acceptance is an invitation to all who would follow Him.',
    meditation: 'What cross has God asked you to carry? Can you see it as Jesus did—as a means of transformation and grace rather than mere burden?',
    prayer: 'Dear Jesus, You teach me that the cross is not a sign of defeat but of victory. Help me to embrace the difficulties of my life as opportunities to grow in faith and love, following Your example of redemptive acceptance.',
  },
  {
    id: 3,
    title: 'Jesus Falls for the First Time',
    scripture: 'Isaiah 53:6',
    description: 'Our Lord stumbles under the burden',
    reflection: 'Our Lord, weakened by His scourging, stumbles beneath the weight. Yet even in His fall, Christ remains focused on His purpose. His human suffering becomes a bridge between heaven and earth, uniting our weakness with His infinite strength.',
    meditation: 'We all fall. We stumble in our faith and fail to live as we should. How does Christ\'s fall comfort you in your own moments of weakness?',
    prayer: 'Jesus, in Your compassion, You fell as I fall. You know my frailty and my shame. Yet You rose again. Give me the courage to rise after each fall, trusting in Your mercy and grace.',
  },
  {
    id: 4,
    title: 'Jesus Meets His Sorrowful Mother',
    scripture: 'John 19:25-27',
    description: 'The meeting of profound love and pain',
    reflection: 'Through His anguish, Jesus sees His mother\'s grief and thinks not of His own pain but of hers. In this encounter, divine love pierces the veil of human suffering. The sword Simeon prophesied has now pierced Mary\'s heart, yet she remains faithful.',
    meditation: 'Contemplate the depths of Mary\'s faith at this moment. She watches her beloved Son suffer, yet her faith does not break. How can her example strengthen your faith in times of loss?',
    prayer: 'Holy Mother, teach me to stand with Christ in suffering, not to run away from it. And Jesus, help me to love others even in my own pain, and to see in every sorrowing heart the reflection of Your mother\'s faith.',
  },
  {
    id: 5,
    title: 'Simon Helps Carry the Cross',
    scripture: 'Matthew 27:32',
    description: 'We are called to shoulder the cross with Christ',
    reflection: 'Simon of Cyrene is pressed into service to carry the cross, perhaps begrudgingly at first. Yet in that act of service—whether willing or coerced—he becomes a disciple, chosen to share in Christ\'s redemptive work. We are all called to be Simons in our world.',
    meditation: 'When have you found Christ in moments of forced service or unexpected obligation? How can you recognize the sacred in the mundane tasks that fill your days?',
    prayer: 'Christ, make me a Simon. Give me the grace to carry the burdens of others, to lighten the crosses of my brothers and sisters, knowing that in serving them, I serve You. Help me see each opportunity to help as a privilege.',
  },
  {
    id: 6,
    title: 'Veronica Wipes Jesus\' Face',
    scripture: 'Acts 17:28',
    description: 'An act of compassion in the midst of suffering',
    reflection: 'In an act of pure compassion, Veronica reaches out to wipe the face of a suffering stranger. She risks scorn and punishment to respond to human need. Her simple gesture becomes eternal, preserved in tradition. The divine face shines through the veil of human weakness.',
    meditation: 'How often do you turn away from suffering? Veronica acted without knowing who Jesus was. What does this teach you about compassion without recognition?',
    prayer: 'Jesus, teach me to see You in every face. Grant me the courage of Veronica to reach out to those who suffer, to ease their burden even when it brings me nothing but the consciousness of having done right.',
  },
  {
    id: 7,
    title: 'Jesus Falls for the Second Time',
    scripture: 'Psalm 22:1-2',
    description: 'Our weakness meets divine strength',
    reflection: 'The weight of the world presses upon Him. Not only His own sufferings, but the sins of all humanity have become His burden. Yet with each fall, His purpose remains clear—redemption through self-emptying love. The darkness grows, but His trust in the Father never wavers.',
    meditation: 'When you face repeated failures or setbacks, where do you find strength? Can you accept that your weakness is the very place where God\'s strength is perfected?',
    prayer: 'Lord, I acknowledge my weakness. I fall repeatedly despite my best intentions. Yet You fell too, many times, bearing not just Your own burden but mine. Help me to see in each resurrection a promise of Your infinite grace.',
  },
  {
    id: 8,
    title: 'Jesus Meets the Women of Jerusalem',
    scripture: 'Luke 23:27-31',
    description: 'Jesus turns to console those who weep for Him',
    reflection: 'Women weep for Jesus as He passes, but He turns to them with a message: "Do not weep for me, but weep for yourselves and for your children." Even approaching His death, Christ remains the Good Shepherd, teaching and calling all to repentance and hope.',
    meditation: 'What prevents your compassion from being transformed into action? How can you move from pity to purpose, from sympathy to sanctification?',
    prayer: 'Jesus, teach me to weep with those who weep, but also to point them toward hope. Help me to be an instrument of consolation while remaining focused on eternal truths. Let my tears water the seeds of faith.',
  },
  {
    id: 9,
    title: 'Jesus Falls for the Third Time',
    scripture: 'Proverbs 24:16',
    description: 'The depths of Christ\'s sacrifice',
    reflection: 'The final fall is perhaps the deepest. Yet it is also the final moment of self-emptying before the ultimate fulfillment. Jesus has given Himself completely, holding nothing back. In absolute poverty of spirit, He is ready for the Cross.',
    meditation: 'What must you surrender to be completely free? What attachment to yourself or your will keeps you from total trust in God?',
    prayer: 'Dearest Jesus, You have stripped away everything that stood between You and Your Father\'s will. Help me to reach that same state of complete surrender, that my life might become an offering of love.',
  },
  {
    id: 10,
    title: 'Jesus is Stripped of His Garments',
    scripture: 'Psalm 22:18',
    description: 'Stripped of all worldly dignity',
    reflection: 'All dignity stripped away, Jesus stands naked before His executioners and His mother. The mockery of power that strips Him of His garments cannot strip Him of His identity as the Beloved Son of God. Beneath the degradation, divine love remains untouched.',
    meditation: 'When you have been humiliated or stripped of pride, did you lose your true self? What is the core of your identity that no one can take from you?',
    prayer: 'Jesus, in Your stripping lies my freedom. Release me from the illusion that my worth comes from what I possess or how others see me. Help me to know that I am loved not for what I have, but for who I am in You.',
  },
  {
    id: 11,
    title: 'Jesus is Crucified',
    scripture: 'John 19:28-30',
    description: 'The moment of ultimate redemption',
    reflection: 'The Crucifixion is the central mystery of our faith. Three hours of darkness cover the land as Jesus experiences the full weight of human sin and suffering. His body wracked with pain, His spirit fixed on His Father, Jesus drinks the cup of salvation. It is finished.',
    meditation: 'Stand beneath the Cross with the disciples. What do you feel? What is Christ saying to you through His passion and death?',
    prayer: 'My Jesus, my God, I stand before Your Cross overwhelmed. How can I comprehend such love? How can I repay what You have given? Accept my gratitude, my sorrow for my sins, my commitment to follow You in love. At Your Cross, I am remade.',
  },
  {
    id: 12,
    title: 'Jesus Dies on the Cross',
    scripture: 'Romans 6:9',
    description: 'The completion of the redemptive sacrifice',
    reflection: 'The final breath is drawn, the beloved head bows, and the work of redemption is accomplished. Death has lost its sting because Christ has tasted it and conquered it. In His dying, new life begins. The veil of the temple is torn, and the way to the Father is opened.',
    meditation: 'How does Christ\'s death give meaning to your own mortality? What is it about sacrifice and self-giving that transforms suffering into salvation?',
    prayer: 'Jesus, by Your death, You have defeated death. By Your sacrifice, You have opened the way. I thank You for Your love, manifested in the extremity of Your suffering. May I never forget that I am loved this deeply.',
  },
  {
    id: 13,
    title: 'Jesus is Taken Down from the Cross',
    scripture: 'Matthew 27:57-61',
    description: 'Sorrow transforms into hope',
    reflection: 'Joseph of Arimathea performs this final act of tenderness, cradling in his arms the body of the One who had commanded the universe. Grief mingles with love as Christ\'s broken body is prepared for burial. Yet even in death, His beauty and peace remain.',
    meditation: 'How do you care for what is broken? Can you love what has been defeated and destroyed? How does Christ\'s apparent defeat contain hidden victory?',
    prayer: 'Jesus, in Your death, I see tenderness beyond measure. Help me to handle gently the broken things of this world—broken hearts, broken dreams, broken relationships—knowing that nothing lies beyond Your redeeming love.',
  },
  {
    id: 14,
    title: 'Jesus is Laid in the Sepulcher',
    scripture: 'John 11:25-26',
    description: 'The beginning of new life',
    reflection: 'The stone is rolled into place. Darkness covers the tomb. Yet this is not an ending but a threshold. Beneath the stone lies the seed of new creation. In the depths of death lies the concealed splendor of resurrection. The pain of Friday gives birth to the joy of Sunday.',
    meditation: 'What in your life is "dead" and waiting for resurrection? Where have you felt the finality of loss, not yet able to see the promise of new life?',
    prayer: 'Jesus, from the tomb comes hope eternal. As You rose on the third day, I believe in resurrection—not just in the distant future, but in the transformation of my heart beginning here and now. Help me to die to my old self, that You might raise me up new.',
  },
]

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedStation, setExpandedStation] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme-preference', newDarkMode ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

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
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg border border-border/40 hover:border-accent/50 transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-accent" />
              ) : (
                <Moon className="h-5 w-5 text-foreground/70" />
              )}
            </button>
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

        {/* Stations List */}
        <div className="space-y-6">
          {stations.map((station) => (
            <div
              key={station.id}
              className="group relative rounded-lg border border-border/60 bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 cursor-pointer"
              onClick={() => setExpandedStation(expandedStation === station.id ? null : station.id)}
            >
              {/* Station Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent/10 flex-shrink-0">
                    <span className="text-sm font-semibold text-accent">{station.id}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="font-serif text-xl font-light mb-1 text-foreground leading-snug">
                      {station.title}
                    </h2>
                    <p className="text-sm text-accent/80 italic mb-2">{station.scripture}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {station.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 text-muted-foreground/50 transition-all group-hover:text-accent/70 flex-shrink-0 ${expandedStation === station.id ? 'rotate-90' : ''}`} />
              </div>

              {/* Expanded Content */}
              {expandedStation === station.id && (
                <div className="mt-8 pt-8 border-t border-border/40 space-y-8 animate-in fade-in duration-300">
                  {/* Reflection */}
                  <div>
                    <h3 className="font-serif text-lg font-light mb-4 text-foreground">Reflection</h3>
                    <p className="text-foreground/85 leading-relaxed">
                      {station.reflection}
                    </p>
                  </div>

                  {/* Meditation */}
                  <div>
                    <h3 className="font-serif text-lg font-light mb-4 text-foreground">Meditation</h3>
                    <p className="text-foreground/85 leading-relaxed">
                      {station.meditation}
                    </p>
                  </div>

                  {/* Prayer */}
                  <div className="rounded-lg border border-accent/30 bg-accent/5 p-6">
                    <h3 className="font-serif text-lg font-light mb-4 text-foreground">Prayer</h3>
                    <p className="text-foreground/85 leading-relaxed italic">
                      {station.prayer}
                    </p>
                  </div>
                </div>
              )}

              {/* Hover accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent to-accent/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-full" />
            </div>
          ))}
        </div>

        {/* Closing Reflection */}
        <div className="mt-20 rounded-lg border border-border/60 bg-card/50 p-12 text-center backdrop-blur-sm">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Spiritual Practice</p>
          <h2 className="font-serif text-3xl font-light mb-4">Complete Your Contemplation</h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            You have walked the full path with Jesus from condemnation to resurrection. May this journey deepen your faith and draw you closer to the heart of Christ. Return to any station whenever you need spiritual renewal.
          </p>
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
