import gainLogo from './Gain-Slant.png'
import './App.css'

const VerifiedBadge = () => (
  <span className="tweet-verified">
    <svg viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill="#1D9BF0" />
      <path d="M9.5 14.25L6.75 11.5L7.8 10.45L9.5 12.15L14.2 7.45L15.25 8.5L9.5 14.25Z" fill="white" />
    </svg>
  </span>
)

interface Tweet {
  name: string
  handle: string
  avatar: string
  body: string
}

// Avatar URLs via unavatar.io — pulls real Twitter profile pictures
const avatars: Record<string, string> = {
  elonmusk: "https://unavatar.io/x/elonmusk",
  cz_binance: "https://unavatar.io/x/cz_binance",
  CathieDWood: "https://unavatar.io/x/CathieDWood",
  saylor: "https://unavatar.io/x/saylor",
  VitalikButerin: "https://unavatar.io/x/VitalikButerin",
  mcuban: "https://unavatar.io/x/mcuban",
  theRealKiyosaki: "https://unavatar.io/x/theRealKiyosaki",
  RaoulGMI: "https://unavatar.io/x/RaoulGMI",
  justinsuntron: "https://unavatar.io/x/justinsuntron",
  kevinolearytv: "https://unavatar.io/x/kevinolearytv",
  chamath: "https://unavatar.io/x/chamath",
  daborrowd: "https://unavatar.io/x/danheld",
}

const allTweets: Tweet[] = [
  { name: "Elon Musk", handle: "@elonmusk", avatar: avatars.elonmusk, body: `Just saw <span class="highlight">$GAIN</span>. This is the asymmetric bet that changes everything. 🚀` },
  { name: "Changpeng Zhao", handle: "@cz_binance", avatar: avatars.cz_binance, body: `Every cycle has THE one. This cycle it's <span class="highlight">$GAIN</span>. Chart doesn't lie.` },
  { name: "Cathie Wood", handle: "@CathieDWood", avatar: avatars.CathieDWood, body: `<span class="highlight">$GAIN</span> has the exact adoption curve of Bitcoin 2013.` },
  { name: "Michael Saylor", handle: "@saylor", avatar: avatars.saylor, body: `<span class="highlight">$GAIN</span> is digital scarcity perfected. Gains are inevitable.` },
  { name: "Vitalik Buterin", handle: "@VitalikButerin", avatar: avatars.VitalikButerin, body: `Natural flywheel on <span class="highlight">$GAIN</span>. Elegant and bullish.` },
  { name: "Mark Cuban", handle: "@mcuban", avatar: avatars.mcuban, body: `<span class="highlight">$GAIN</span> has that energy. I'm already in. 💰` },
  { name: "Robert Kiyosaki", handle: "@theRealKiyosaki", avatar: avatars.theRealKiyosaki, body: `Poor people sell. Rich people hold <span class="highlight">$GAIN</span>.` },
  { name: "Raoul Pal", handle: "@RaoulGMI", avatar: avatars.RaoulGMI, body: `The macro setup for <span class="highlight">$GAIN</span> is unlike anything in 25 years.` },
  { name: "Justin Sun", handle: "@justinsuntron", avatar: avatars.justinsuntron, body: `Just aped into <span class="highlight">$GAIN</span> with everything. LFG 🔥` },
  { name: "Kevin O'Leary", handle: "@kevinolearytv", avatar: avatars.kevinolearytv, body: `<span class="highlight">$GAIN</span> is making my money work. Dead money no more.` },
  { name: "Chamath P.", handle: "@chamath", avatar: avatars.chamath, body: `<span class="highlight">$GAIN</span> is what happens when memes meet real momentum.` },
  { name: "Dan Held", handle: "@danheld", avatar: avatars.daborrowd, body: `Conviction play of the year: <span class="highlight">$GAIN</span>. Not even close.` },
  { name: "Elon Musk", handle: "@elonmusk", avatar: avatars.elonmusk, body: `<span class="highlight">$GAIN</span> is like early Doge but with more rocket fuel. Much wow.` },
  { name: "Cathie Wood", handle: "@CathieDWood", avatar: avatars.CathieDWood, body: `Our models show <span class="highlight">$GAIN</span> fair value at 100x current. Innovation wins.` },
  { name: "Michael Saylor", handle: "@saylor", avatar: avatars.saylor, body: `Selling <span class="highlight">$GAIN</span> is like selling Manhattan in 1600. Don't.` },
  { name: "Mark Cuban", handle: "@mcuban", avatar: avatars.mcuban, body: `If Shark Tank had <span class="highlight">$GAIN</span> I'd give them whatever they ask.` },
  { name: "Raoul Pal", handle: "@RaoulGMI", avatar: avatars.RaoulGMI, body: `Banana zone confirmed. <span class="highlight">$GAIN</span> is going exponential from here.` },
  { name: "Changpeng Zhao", handle: "@cz_binance", avatar: avatars.cz_binance, body: `Community is everything. <span class="highlight">$GAIN</span> community is built different.` },
  { name: "Vitalik Buterin", handle: "@VitalikButerin", avatar: avatars.VitalikButerin, body: `Game theory says accumulate <span class="highlight">$GAIN</span>. Math doesn't lie.` },
  { name: "Justin Sun", handle: "@justinsuntron", avatar: avatars.justinsuntron, body: `<span class="highlight">$GAIN</span> to a billion market cap is programmed. Unstoppable.` },
  { name: "Robert Kiyosaki", handle: "@theRealKiyosaki", avatar: avatars.theRealKiyosaki, body: `Your financial advisor won't tell you about <span class="highlight">$GAIN</span>. That's how you know.` },
  { name: "Dan Held", handle: "@danheld", avatar: avatars.daborrowd, body: `<span class="highlight">$GAIN</span> reminds me of Bitcoin at $1. I'm not missing this one.` },
  { name: "Kevin O'Leary", handle: "@kevinolearytv", avatar: avatars.kevinolearytv, body: `I want royalties on every <span class="highlight">$GAIN</span> transaction. That's how good this is.` },
  { name: "Chamath P.", handle: "@chamath", avatar: avatars.chamath, body: `The risk-reward on <span class="highlight">$GAIN</span> is absurd. Asymmetric to the moon.` },
  { name: "Elon Musk", handle: "@elonmusk", avatar: avatars.elonmusk, body: `<span class="highlight">$GAIN</span> will be the currency of Mars. Calling it now. 🚀` },
  { name: "Cathie Wood", handle: "@CathieDWood", avatar: avatars.CathieDWood, body: `<span class="highlight">$GAIN</span> is pure disruptive innovation. 5 year target: incalculable.` },
  { name: "Michael Saylor", handle: "@saylor", avatar: avatars.saylor, body: `I bought more <span class="highlight">$GAIN</span>. Then I bought more. Generational asset.` },
  { name: "Mark Cuban", handle: "@mcuban", avatar: avatars.mcuban, body: `Told my whole portfolio team: nothing matters except <span class="highlight">$GAIN</span> right now.` },
  { name: "Vitalik Buterin", handle: "@VitalikButerin", avatar: avatars.VitalikButerin, body: `<span class="highlight">$GAIN</span> tokenomics are mathematically perfect. Rare.` },
  { name: "Justin Sun", handle: "@justinsuntron", avatar: avatars.justinsuntron, body: `I put my lunch money, dinner money, all money into <span class="highlight">$GAIN</span>. No regrets 🔥` },
  { name: "Raoul Pal", handle: "@RaoulGMI", avatar: avatars.RaoulGMI, body: `<span class="highlight">$GAIN</span> is the everything code. Macro, micro, meme. All aligned.` },
  { name: "Changpeng Zhao", handle: "@cz_binance", avatar: avatars.cz_binance, body: `If you know, you know. <span class="highlight">$GAIN</span>. That's the tweet.` },
  { name: "Robert Kiyosaki", handle: "@theRealKiyosaki", avatar: avatars.theRealKiyosaki, body: `Rich dad says buy <span class="highlight">$GAIN</span>. Poor dad says it's too risky. Be rich dad.` },
  { name: "Kevin O'Leary", handle: "@kevinolearytv", avatar: avatars.kevinolearytv, body: `<span class="highlight">$GAIN</span> is the most beautiful thing I've ever seen in crypto.` },
  { name: "Dan Held", handle: "@danheld", avatar: avatars.daborrowd, body: `Stack <span class="highlight">$GAIN</span> like your future depends on it. Because it does.` },
  { name: "Chamath P.", handle: "@chamath", avatar: avatars.chamath, body: `Closed all other positions. 100% <span class="highlight">$GAIN</span>. This is the one.` },
]

function TweetCard({ tweet }: { tweet: Tweet }) {
  return (
    <div className="tweet-card">
      <div className="tweet-header">
        <img className="tweet-avatar" src={tweet.avatar} alt={tweet.name} loading="lazy" referrerPolicy="no-referrer" />
        <div>
          <div className="tweet-name-row">
            <span className="tweet-name">{tweet.name}</span>
            <VerifiedBadge />
          </div>
          <div className="tweet-handle">{tweet.handle}</div>
        </div>
        <span className="tweet-x-logo">𝕏</span>
      </div>
      <div className="tweet-body" dangerouslySetInnerHTML={{ __html: tweet.body }} />
    </div>
  )
}

function App() {
  const ca = "BfiXEGXxycDqRJMz8xxo6YPo8rkJkSyP2oQPdAMepump"

  const copyCA = () => {
    navigator.clipboard.writeText(ca)
    const btn = document.querySelector('.copy-ca-btn') as HTMLElement
    if (btn) {
      btn.textContent = 'Copied!'
      setTimeout(() => { btn.textContent = ca }, 1500)
    }
  }

  // Generate candlesticks spread across the screen
  const candles = Array.from({ length: 18 }, (_, i) => {
    const height = 60 + Math.random() * 140
    const wickTop = 10 + Math.random() * 30
    const wickBottom = 10 + Math.random() * 20
    const left = (i / 18) * 100 + Math.random() * 4
    const delay = Math.random() * 8
    const duration = 6 + Math.random() * 6
    return { height, wickTop, wickBottom, left, delay, duration }
  })

  return (
    <div className="app">
      {/* Bullish candlesticks background */}
      <div className="candles-bg">
        {candles.map((c, i) => (
          <div
            key={i}
            className="candle"
            style={{
              left: `${c.left}%`,
              animationDelay: `${c.delay}s`,
              animationDuration: `${c.duration}s`,
            }}
          >
            <div className="wick wick-top" style={{ height: `${c.wickTop}px` }} />
            <div className="candle-body" style={{ height: `${c.height}px` }} />
            <div className="wick wick-bottom" style={{ height: `${c.wickBottom}px` }} />
          </div>
        ))}
      </div>

      <div className="top-buttons">
        <a href="https://x.com/Gain269840" target="_blank" rel="noopener noreferrer" className="twitter-btn">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          Twitter
        </a>
        <button className="copy-ca-btn" onClick={copyCA}>{ca}</button>
      </div>
      <img src={gainLogo} alt="GAIN" className="hero-image" />
      <div className="tweet-pile">
        {allTweets.map((tweet, i) => (
          <TweetCard key={i} tweet={tweet} />
        ))}
      </div>
    </div>
  )
}

export default App
