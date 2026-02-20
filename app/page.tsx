'use client'

import { useState, useEffect } from 'react'
import { Cross, Moon, Sun } from 'lucide-react'

const stations = [
  {
    number: 1,
    title: 'JESUS IS CONDEMNED TO DEATH',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'JOHN 19:12-16',
    scripture: 'Pilate sought to release him, but the Jews cried out, "if you release this man, you are not Caesar\'s friend; everyone who make himself a king sets himself against Caesar." When Pilate heard these words, he brought Jesus out and said to the Jews "Here is your king!" They cried out away with him, away with him, crucify him!" Pilate said to them, "shall I crucify your king?" The chief priests answered, "We have no king but Caesar!" Then he handed him over to them to be crucified.',
    christSpeaks: 'In Pilate\'s hands, my friend, I see my father\'s will it is true that Pilate is unjust but he is the lawful governor and he has power over me; and so the son of God obeys a son of man if I will bow to Pilate\'s rule, because this is my Father\'s will can you refuse obedience to those whom I have placed over you?',
    manResponds: 'Lord Jesus, obedience cost you your life for me, it costs an act of will – no more and yet, how hard it is for me to bend remove the blinders from my eyes that I may see that it is you whom I obey in all who govern me Lord it is you',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'Through her heart his sorrow sharing, all his bitter anguish bearing now at length the sword had passed.',
  },
  {
    number: 2,
    title: 'JESUS RECEIVES HIS CROSS',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'JOHN 19:17',
    scripture: 'Jesus went out, bearing his own cross, to the place called the place of a skull, which in Aramaic is called Golgotha.',
    christSpeaks: 'I embrace the wood that will carry me to your salvation. This cross is not a burden imposed but a gift I offer. In every weight you bear, know that I walk with you, transforming suffering into love.',
    manResponds: 'Dear Jesus, You teach me that the cross is not a sign of defeat but of victory. Help me to embrace the difficulties of my life as opportunities to grow in faith and love, following Your example of redemptive acceptance.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'O cross, O instrument of grace, you bear the Savior to His place.',
  },
  {
    number: 3,
    title: 'JESUS FALLS FOR THE FIRST TIME',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'ISAIAH 53:6',
    scripture: 'All we like sheep have gone astray; we have turned every one to his own way; and the Lord has laid on him the iniquity of us all.',
    christSpeaks: 'In this fall, I bear the weight of all humanity\'s sin. I stumble not from weakness in spirit, but from the crushing burden of love\'s redemptive work. Yet I rise again, ever faithful to my Father\'s will.',
    manResponds: 'Jesus, in Your compassion, You fell as I fall. You know my frailty and my shame. Yet You rose again. Give me the courage to rise after each fall, trusting in Your mercy and grace.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'In ev\'ry fall a lesson lies, a chance to seek the Father\'s eyes.',
  },
  {
    number: 4,
    title: 'JESUS MEETS HIS SORROWFUL MOTHER',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'JOHN 19:25-27',
    scripture: 'So the soldiers did this. But standing by the cross of Jesus were his mother and his mother\'s sister, Mary the wife of Clopas, and Mary Magdalene. When Jesus saw his mother and the disciple whom he loved standing nearby, he said to his mother, "Woman, behold, your son!" Then he said to the disciple, "Behold, your mother!" And from that hour the disciple took her to his own home.',
    christSpeaks: 'Mother, behold your son. Even in my agony, I think of you, and in thinking of you, I provide for you. Love transcends the cross; it is the cross that reveals the depth of love.',
    manResponds: 'Holy Mother, teach me to stand with Christ in suffering, not to run away from it. And Jesus, help me to love others even in my own pain, and to see in every sorrowing heart the reflection of Your mother\'s faith.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'At the cross her station keeping, Mary stood in sorrow weeping.',
  },
  {
    number: 5,
    title: 'SIMON HELPS CARRY THE CROSS',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'MATTHEW 27:32',
    scripture: 'As they were going out, they found a man of Cyrene, Simon by name. They compelled this man to carry his cross.',
    christSpeaks: 'Simon, in your reluctant service, I find perfect love. You do not choose to help, yet in helping, you become my disciple. How often do I ask more of you than you wish to give, transforming you through the very act of surrender?',
    manResponds: 'Christ, make me a Simon. Give me the grace to carry the burdens of others, to lighten the crosses of my brothers and sisters, knowing that in serving them, I serve You. Help me see each opportunity to help as a privilege.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'For whom and why do we bear our cross? In service, we find our glory.',
  },
  {
    number: 6,
    title: 'VERONICA WIPES JESUS\' FACE',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'ACTS 17:28',
    scripture: 'In him we live and move and have our being; as even some of your own poets have said, "For we are indeed his offspring."',
    christSpeaks: 'Veronica, your gesture reveals the heart of true compassion. You see not a criminal but a human in pain, and in that seeing, you become an instrument of mercy. Your love does not ask first who deserves it.',
    manResponds: 'Jesus, teach me to see You in every face. Grant me the courage of Veronica to reach out to those who suffer, to ease their burden even when it brings me nothing but the consciousness of having done right.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'A holy face upon cloth impressed remains forever blessed.',
  },
  {
    number: 7,
    title: 'JESUS FALLS FOR THE SECOND TIME',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'PSALM 22:1-2',
    scripture: 'My God, my God, why have you forsaken me? Why are you so far from saving me, from the words of my groaning? O my God, I cry by day, but you do not answer; and by night, but I find no rest.',
    christSpeaks: 'Deeper still I fall, yet my trust remains unshaken. The weight of all sin presses upon me, yet I know my Father has not abandoned me. In darkness, faith becomes perfect.',
    manResponds: 'Lord, I acknowledge my weakness. I fall repeatedly despite my best intentions. Yet You fell too, many times, bearing not just Your own burden but mine. Help me to see in each resurrection a promise of Your infinite grace.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'When strength has gone and hope grows dim, still call upon His Holy Name.',
  },
  {
    number: 8,
    title: 'JESUS MEETS THE WOMEN OF JERUSALEM',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'LUKE 23:27-31',
    scripture: 'And there followed him a great multitude of the people and of women who were mourning and lamenting for him. But Jesus turning to them said, "Daughters of Jerusalem, do not weep for me, but weep for yourselves and for your children."',
    christSpeaks: 'Do not waste your tears on me, for my suffering has meaning and purpose. Rather, weep for the blindness that resists redemption, for the hardness of heart that refuses love. Your tears matter; direct them toward salvation.',
    manResponds: 'Jesus, teach me to weep with those who weep, but also to point them toward hope. Help me to be an instrument of consolation while remaining focused on eternal truths. Let my tears water the seeds of faith.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'For us and for our salvation He hung upon the tree.',
  },
  {
    number: 9,
    title: 'JESUS FALLS FOR THE THIRD TIME',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'PROVERBS 24:16',
    scripture: 'For the righteous falls seven times and rises again, but the wicked stumble in times of calamity.',
    christSpeaks: 'This final fall is my final surrender. I have given all; I have held nothing back. In absolute poverty of spirit, stripped of all worldly power, I am ready. My weakness becomes the vessel of infinite strength.',
    manResponds: 'Dearest Jesus, You have stripped away everything that stood between You and Your Father\'s will. Help me to reach that same state of complete surrender, that my life might become an offering of love.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'All is surrendered, all is laid at the foot of Calvary\'s tree.',
  },
  {
    number: 10,
    title: 'JESUS IS STRIPPED OF HIS GARMENTS',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'PSALM 22:18',
    scripture: 'They divide my garments among them, and for my clothing they cast lots.',
    christSpeaks: 'Stripped bare before the world, I stand in utter poverty. Yet this nakedness is not shame but ultimate truth. What I am cannot be stripped away. My identity as the Beloved of the Father remains untouched by cruelty.',
    manResponds: 'Jesus, in Your stripping lies my freedom. Release me from the illusion that my worth comes from what I possess or how others see me. Help me to know that I am loved not for what I have, but for who I am in You.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'Naked He hangs upon the tree, naked so that we are free.',
  },
  {
    number: 11,
    title: 'JESUS IS CRUCIFIED',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'JOHN 19:28-30',
    scripture: 'After this, Jesus, knowing that all was now finished, said (to fulfill the scripture), "I thirst." A jar full of sour wine stood there, so they put a sponge full of the sour wine on a hyssop branch and held it to his mouth. When Jesus had received the sour wine, he said, "It is finished," and he bowed his head and gave up his spirit.',
    christSpeaks: 'I am raised high that all might see. My arms extended in love, I embrace all of humanity. I drink the cup of suffering to its dregs, that you might drink of salvation. It is finished. The work is complete.',
    manResponds: 'My Jesus, my God, I stand before Your Cross overwhelmed. How can I comprehend such love? How can I repay what You have given? Accept my gratitude, my sorrow for my sins, my commitment to follow You in love. At Your Cross, I am remade.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'O Christ, upon the cruel tree you hung and bled for you and me.',
  },
  {
    number: 12,
    title: 'JESUS DIES ON THE CROSS',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'ROMANS 6:9',
    scripture: 'We know that Christ, being raised from the dead, will never die again. Death no longer has dominion over him.',
    christSpeaks: 'The final breath is drawn, yet it is not ending but completion. I have tasted death so that you need never fear it. My death becomes your life, my weakness becomes your strength.',
    manResponds: 'Jesus, by Your death, You have defeated death. By Your sacrifice, You have opened the way. I thank You for Your love, manifested in the extremity of Your suffering. May I never forget that I am loved this deeply.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'O death, where is your sting? Where is your victory? Christ has conquered you.',
  },
  {
    number: 13,
    title: 'JESUS IS TAKEN DOWN FROM THE CROSS',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'MATTHEW 27:57-61',
    scripture: 'When it was evening, there came a rich man from Arimathea, named Joseph, who also was a disciple of Jesus. He went to Pilate and asked for the body of Jesus. Then Pilate ordered it to be given to him. And Joseph took the body and wrapped it in a clean linen shroud, and laid it in his own new tomb.',
    christSpeaks: 'Joseph receives my body with tenderness. In this final care, I am honored not as a king but as a beloved son. Every sorrow is held with love. Every broken thing matters.',
    manResponds: 'Jesus, in Your death, I see tenderness beyond measure. Help me to handle gently the broken things of this world—broken hearts, broken dreams, broken relationships—knowing that nothing lies beyond Your redeeming love.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'In the tomb so dark and deep, watch does Joseph keep.',
  },
  {
    number: 14,
    title: 'JESUS IS LAID IN THE SEPULCHER',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'JOHN 11:25-26',
    scripture: 'Jesus said to her, "I am the resurrection and the life. Whoever believes in me, though he die, yet shall he live, and everyone who lives and believes in me shall never die."',
    christSpeaks: 'The stone is rolled into place. Darkness covers the tomb. Yet beneath the stone lies the seed of new creation. Rest with me in the tomb, for in the depths of death lies the hope of resurrection.',
    manResponds: 'Jesus, from the tomb comes hope eternal. As You rose on the third day, I believe in resurrection—not just in the distant future, but in the transformation of my heart beginning here and now. Help me to die to my old self, that You might raise me up new.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'Life for the world, you suffered and died, death now devours the death that defied.',
  },
]

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [expandedStation, setExpandedStation] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme-preference')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDarkMode = savedTheme === 'dark' || (savedTheme === null && prefersDark)
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }
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
        <div className="mx-auto max-w-4xl px-6 py-8">
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
      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-16 text-center">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The Stations of the Cross invite us to walk with Jesus on His path to Calvary. Take time to pause at each station, reflect on His love, and discover what His sacrifice means for your life. Click each station to explore.
          </p>
        </div>

        {/* Stations */}
        <div className="space-y-8">
          {stations.map((station) => (
            <div
              key={station.number}
              className="group rounded-lg border border-border/60 bg-card p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 cursor-pointer overflow-hidden"
              onClick={() => setExpandedStation(expandedStation === station.number ? null : station.number)}
            >
              {/* Station Header */}
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="mb-2">
                    <span className="inline-block text-xs font-semibold tracking-widest text-accent/70 uppercase">
                      Station {station.number}
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-light leading-snug mb-4 text-balance">
                    {station.title}
                  </h2>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-fit">V.</span>
                      <span className="text-foreground/75">{station.versicle}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-fit">R.</span>
                      <span className="text-foreground/75">{station.response}</span>
                    </div>
                  </div>
                </div>
                <div className={`flex-shrink-0 text-muted-foreground/50 group-hover:text-accent/70 transition-all duration-300 ${expandedStation === station.number ? 'rotate-90' : ''}`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedStation === station.number && (
                <div className="mt-8 pt-8 border-t border-border/40 space-y-8 animate-in fade-in duration-300">
                  {/* Reading */}
                  <div>
                    <h3 className="font-serif text-sm font-semibold tracking-widest text-accent/80 uppercase mb-3">
                      {station.reading}
                    </h3>
                    <p className="font-serif text-foreground/85 leading-relaxed text-base italic">
                      {station.scripture}
                    </p>
                  </div>

                  {/* Christ Speaks */}
                  <div className="bg-accent/5 border border-accent/30 rounded-lg p-6">
                    <h3 className="font-serif text-sm font-semibold tracking-widest text-accent/80 uppercase mb-4">
                      CHRIST SPEAKS
                    </h3>
                    <p className="text-foreground/85 leading-relaxed">
                      {station.christSpeaks}
                    </p>
                  </div>

                  {/* Man Responds */}
                  <div>
                    <h3 className="font-serif text-sm font-semibold tracking-widest text-accent/80 uppercase mb-4">
                      MAN RESPONDS
                    </h3>
                    <p className="text-foreground/85 leading-relaxed italic">
                      {station.manResponds}
                    </p>
                  </div>

                  {/* Final Versicle and Response */}
                  <div className="pt-6 border-t border-border/40 space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-fit">V:</span>
                      <span className="text-foreground/75">{station.finalVersicle}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="font-semibold min-w-fit">R:</span>
                      <span className="text-foreground/75">{station.finalResponse}</span>
                    </div>
                  </div>

                  {/* Hymn */}
                  <div>
                    <h3 className="font-serif text-sm font-semibold tracking-widest text-accent/80 uppercase mb-3">
                      Hymn
                    </h3>
                    <p className="text-foreground/85 leading-relaxed italic">
                      {station.hymn}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing */}
        <div className="mt-20 rounded-lg border border-border/60 bg-card/50 p-12 text-center backdrop-blur-sm">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Completion</p>
          <h2 className="font-serif text-3xl font-light mb-6">May you walk this journey with Christ</h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            You have walked the full path with Jesus from condemnation to resurrection. May this journey deepen your faith and draw you closer to the heart of Christ. Return to any station whenever you need spiritual renewal.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/50 mt-20 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-sm text-muted-foreground">
            May this journey deepen your faith and draw you closer to the heart of Christ.
          </p>
        </div>
      </footer>
    </div>
  )
}
