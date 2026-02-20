'use client'

import { useState, useEffect } from 'react'
import { Cross, Moon, Sun, ChevronDown } from 'lucide-react'

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
    christSpeaks: 'Do not weep for me alone. Your tears are precious, but look beyond this moment. See the greater truth: that in my suffering, all suffering finds meaning and redemption.',
    manResponds: 'Jesus, teach me to weep with those who weep, yet never to despair. Help me understand that suffering, when united with Yours, becomes a path to grace. Transform my tears into prayers of trust.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'Weep not for sorrow\'s fleeting pain, but for the love that breaks the chain.',
  },
  {
    number: 9,
    title: 'JESUS FALLS FOR THE THIRD TIME',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'PHILIPPIANS 2:5-8',
    scripture: 'Have this mind among yourselves, which is yours in Christ Jesus, who, though he was in the form of God, did not count equality with God a thing to be grasped, but emptied himself, taking the form of a servant, being born in the likeness of men.',
    christSpeaks: 'I fall a final time, stripped of all strength save trust in my Father. This is the depth of my love for you: to surrender completely, to become nothing so you might become everything in me.',
    manResponds: 'Lord Jesus, You showed me that emptiness, when surrendered to God, is fullness. Help me to die to self, to let go of pride and attachment, that I might rise in Your resurrection and live in Your love.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'Three times fallen, three times risen, grace renewed at each decision.',
  },
  {
    number: 10,
    title: 'JESUS IS STRIPPED OF HIS GARMENTS',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'PSALM 22:18',
    scripture: 'They divide my garments among them, and for my clothing they cast lots.',
    christSpeaks: 'Stripped of all dignity, I stand naked before my executioners. Yet in this nakedness, I am most truly myself—vulnerable love, exposed compassion, the heart of God laid bare for humanity.',
    manResponds: 'Jesus, help me to release my pride and self-image. Teach me that true strength lies in vulnerability, that love is not diminished but magnified when we stand defenseless before one another and before God.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'Stripped bare of all but love\'s pure flame, Your naked heart speaks Your name.',
  },
  {
    number: 11,
    title: 'JESUS IS CRUCIFIED',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'JOHN 19:18',
    scripture: 'There they crucified him, and with him two others, one on either side, and Jesus between them.',
    christSpeaks: 'Nailed to this wood, I am lifted up. In this moment of ultimate rejection, I embrace all of humanity. Every pain finds home in my heart. Every loneliness is met with my presence. This is love made manifest.',
    manResponds: 'Crucified Jesus, I contemplate the depths of Your love. Help me to understand that You did not come to explain suffering but to transform it. In Your agony, all human agony finds redemption and hope.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'O Lord, upon the cross they hung, and by that death the world was won.',
  },
  {
    number: 12,
    title: 'JESUS DIES ON THE CROSS',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'JOHN 19:28-30',
    scripture: 'When Jesus had received the sour wine, he said, "It is finished," and he bowed his head and gave up his spirit.',
    christSpeaks: 'My work is complete. The infinite love that upheld creation now enters the gates of death to transform them. I die so you might live. I descend into darkness so you might walk always in light.',
    manResponds: 'Jesus, as I contemplate Your death, I recognize my own need to let go, to surrender my will completely to the Father\'s. Grant me the faith to trust that in death with You, I shall rise in glory.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'It is finished—love\'s great work is done. The salvation of the world is won.',
  },
  {
    number: 13,
    title: 'JESUS IS TAKEN DOWN FROM THE CROSS',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'JOHN 19:38-40',
    scripture: 'After these things Joseph of Arimathea, who was a disciple of Jesus, but secretly for fear of the Jews, asked Pilate that he might take away the body of Jesus, and Pilate gave him permission. So he came and took away his body.',
    christSpeaks: 'Even in death, I am held with love. Gently, reverently, hands that believe in me lay me to rest. And you too shall know this tenderness, this compassion that honors even the broken and the fallen.',
    manResponds: 'Jesus, as Your body was treated with love and respect in death, teach me to see the dignity in all people, to handle the fragile and suffering with reverence, knowing You dwell within them.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'Gently laid within the tomb, death is now Your dwelling room.',
  },
  {
    number: 14,
    title: 'JESUS IS LAID IN THE TOMB',
    versicle: 'We adore you, O Christ, and we Praise you.',
    response: 'Because by your holy cross you have redeemed the world',
    reading: 'MATTHEW 27:59-66',
    scripture: 'And Joseph took the body and wrapped it in a clean linen shroud and laid it in his own new tomb, which he had hewn in the rock; and he rolled a great stone to the entrance of the tomb.',
    christSpeaks: 'In this tomb, I rest as all must rest. But know this—death has no power over me. I enter this darkness that you might never walk there alone. In three days, you shall see the light of resurrection.',
    manResponds: 'Jesus, in the silence of the tomb, I place my trust. You have walked the way of suffering and death before me. Help me to live each day with the hope of resurrection, knowing that Your love transforms all endings into new beginnings.',
    finalVersicle: 'Have mercy on us O Lord',
    finalResponse: 'Have mercy on us',
    hymn: 'The stone is rolled, the Lord lies still, yet life shall rise to claim His will.',
  },
]

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const [expandedStations, setExpandedStations] = useState<number[]>([])

  useEffect(() => {
    const saved = localStorage.getItem('darkMode')
    if (saved) setDarkMode(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleStation = (number: number) => {
    setExpandedStations(prev =>
      prev.includes(number)
        ? prev.filter(n => n !== number)
        : [...prev, number]
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Cross className="h-6 w-6 text-accent" />
            <h1 className="text-xl font-serif font-light tracking-wide">Stations of the Cross</h1>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg hover:bg-secondary/10 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        {/* Introduction */}
        <section className="mb-20 pb-12 border-b border-border/40">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-accent mb-6">Introduction</h2>
              <p className="text-center text-muted-foreground mb-4">In the name of the Father, and of the Son and of the Holy Spirit. Amen.</p>
            </div>

            <div className="bg-card/50 rounded-lg p-8 border border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Christ Speaks</h3>
              <p className="font-serif text-lg leading-relaxed text-foreground">
                These fourteen steps you are about to walk, you do not take alone. I am with you, we are truly one. And therefore my way of the cross, two thousand years ago and your own "way" now are also one. Yet there is a difference; my life was incomplete until crowned it with my death. Your fourteen steps will not be complete until you crown them with your life.
              </p>
            </div>

            <div className="bg-card/50 rounded-lg p-8 border border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Man Responds</h3>
              <p className="font-serif text-lg leading-relaxed text-foreground">
                My Lord Jesus Christ, you walked this road of suffering even to your death. You did this for me. and yet I have so often failed to love of you by my sins. Now I want to love you with all my heart and to turn away from everything that offends you. Pardon me my God. Allow me to follow you on this journey. You went out to die for love of me. give me the courage and the faith to be able to die with love of you whenever the right time comes. I want to live and die always united to you, Amen.
              </p>
            </div>

            <div className="border-l-2 border-accent/50 pl-6">
              <p className="font-serif italic text-foreground">
                At the Cross her station keeping,<br />
                stood the mournful mother weeping<br />
                close to Jesus to the last.
              </p>
            </div>
          </div>
        </section>

        {/* Stations */}
        <section className="mb-20 space-y-4">
          {stations.map((station) => (
            <div
              key={station.number}
              className="border border-border/40 rounded-lg overflow-hidden hover:border-border/80 transition-colors"
            >
              <button
                onClick={() => toggleStation(station.number)}
                className="w-full px-6 py-6 bg-card/50 hover:bg-card transition-colors flex items-center justify-between gap-4"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-sm font-semibold text-accent">Station {station.number}</span>
                    <h3 className="text-lg font-serif font-light">{station.title}</h3>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    expandedStations.includes(station.number) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {expandedStations.includes(station.number) && (
                <div className="px-6 py-8 bg-background border-t border-border/40 space-y-6">
                  {/* Opening Versicle and Response */}
                  <div className="space-y-2">
                    <p className="text-sm"><span className="font-semibold">V.</span> {station.versicle}</p>
                    <p className="text-sm"><span className="font-semibold">R.</span> {station.response}</p>
                  </div>

                  {/* Reading */}
                  <div className="space-y-3 bg-card/30 rounded-lg p-4 border border-border/40">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Reading: {station.reading}</h4>
                    <p className="font-serif leading-relaxed text-foreground">{station.scripture}</p>
                  </div>

                  {/* Christ Speaks */}
                  <div className="space-y-3 bg-card/30 rounded-lg p-4 border border-border/40">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Christ Speaks</h4>
                    <p className="font-serif leading-relaxed text-foreground">{station.christSpeaks}</p>
                  </div>

                  {/* Man Responds */}
                  <div className="space-y-3 bg-card/30 rounded-lg p-4 border border-border/40">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-accent">Man Responds</h4>
                    <p className="font-serif leading-relaxed text-foreground">{station.manResponds}</p>
                  </div>

                  {/* Closing Versicle and Response */}
                  <div className="space-y-2 border-t border-border/40 pt-4">
                    <p className="text-sm"><span className="font-semibold">V.</span> {station.finalVersicle}</p>
                    <p className="text-sm"><span className="font-semibold">R.</span> {station.finalResponse}</p>
                  </div>

                  {/* Hymn */}
                  <div className="border-l-2 border-accent/50 pl-4">
                    <p className="font-serif italic text-sm text-foreground">{station.hymn}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Conclusion */}
        <section className="pt-12 border-t border-border/40">
          <div className="space-y-8">
            <h2 className="text-sm uppercase tracking-widest text-accent text-center mb-8">Conclusion</h2>

            <div className="bg-card/50 rounded-lg p-8 border border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Christ Speaks</h3>
              <p className="font-serif text-lg leading-relaxed text-foreground">
                You remember what I told you at the beginning? When you joined me on the way of my cross. I said:- "My life was incomplete until I crowned it with my death your fourteen steps will not be complete until you crown them with your life" Accept each moment that comes to you with faith and trust. All that happens to you has my mark on it, seek me not in far-away places. I am very close to you, your home, your working place, on the streets, the markets, at the playgrounds these are altars where you offer love and I am there with you I want you to live your life. So now! Take up your cross and follow me.
              </p>
            </div>

            <div className="bg-card/50 rounded-lg p-8 border border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">Prayer before a Crucifix</h3>
              <p className="font-serif text-lg leading-relaxed text-foreground mb-6">
                "O good and gentle Jesus, before thy face I humbly kneel and with the greatest fervor of spirit I beg and beseech of thee to implant firmly into my heart lively sentiments of faith, hope and charity; contrition for my sins and firm purpose of amendment.
              </p>
              <p className="font-serif text-lg leading-relaxed text-foreground">
                Meanwhile, I meditate on thy five most precious wounds, having ever before my eyes the words of David, the prophet, concerning thee, my Jesus: 'they have pierced my hands and my feet, they have numbered all my bones."
              </p>
            </div>

            <div className="space-y-4 border-l-2 border-accent/50 pl-6">
              <div className="space-y-2">
                <p className="text-sm"><span className="font-semibold">V.</span> Parce Domine,</p>
                <p className="text-sm"><span className="font-semibold">R.</span> Parce populo tuo</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm italic">Pie Jesu Domine;</p>
                <p className="text-sm italic">Ne in aeternum irascaris nobis</p>
                <p className="text-sm italic">Dona eis requiem sempiternam.</p>
              </div>
            </div>

            <div className="bg-card/50 rounded-lg p-8 border border-border/40">
              <h3 className="text-sm uppercase tracking-widest text-accent mb-4">The Blessing</h3>
              <p className="font-serif text-lg leading-relaxed text-foreground">
                May our Lord Jesus Christ, who was scourged for our sake, who carried his cross, and who was crucified for our sake, bless us in the name of the Father, and of the Son, and of the Holy Spirit Amen.
              </p>
            </div>

            <div className="text-center pt-8">
              <p className="text-center text-muted-foreground">Amen.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
