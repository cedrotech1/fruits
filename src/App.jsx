import { useState } from 'react'

const fruits = [
  {
    name: 'Garden Mango',
    latin: 'Mangifera indica',
    note: 'A single fruit, sun on one cheek and a leaf still on the stem.',
    image: '/images/mango.png',
    alt: 'A ripe red and gold mango with one green leaf',
  },
  {
    name: 'Striped Watermelon',
    latin: 'Citrullus lanatus',
    note: 'Whole for the cellar, sliced for the table. Cool, red, and generous.',
    image: '/images/watermelon.png',
    alt: 'A whole striped watermelon beside a cut red slice',
  },
  {
    name: 'Gold Banana',
    latin: 'Musa',
    note: 'A full hand, yellow from crown to tip, ready for the morning board.',
    image: '/images/bananas.png',
    alt: 'A bunch of ripe yellow bananas',
  },
]

const promises = [
  {
    numeral: 'I',
    title: 'Seasonal crates',
    text: 'Fruit chosen for the week, packed as a grocer would pack it — nothing out of season, nothing forced.',
  },
  {
    numeral: 'II',
    title: 'Reserved orders',
    text: 'Households and shops will place an order before the fruit leaves the grove, so nothing waits in a warehouse.',
  },
  {
    numeral: 'III',
    title: 'A single ledger',
    text: 'One account for the house: what was ordered, what arrived, and what returns with the next harvest.',
  },
]

function Frame({ children, className = '' }) {
  return (
    <div className={`border border-line bg-paper p-2 ${className}`}>
      <div className="border border-line">{children}</div>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fruit, setFruit] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function noteFruit(next) {
    setFruit(next)
    setSent(false)
    document.getElementById('notify')?.scrollIntoView({ behavior: 'smooth' })
  }

  function submit(event) {
    event.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-cream text-ink">
      <div className="bg-moss text-cream">
        <p className="mx-auto max-w-6xl px-5 py-2 text-center text-[11px] font-medium tracking-[0.28em] uppercase">
          A new commerce house · Opening in preparation
        </p>
      </div>

      <header className="sticky top-0 z-20 border-b border-line bg-cream/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#top" className="font-display text-2xl leading-none tracking-wide text-moss">
            Oddete <span className="italic">Fruits</span>
          </a>
          <nav className="hidden items-center gap-8 text-[12px] font-medium tracking-[0.18em] uppercase text-leaf md:flex">
            <a href="#offering" className="hover:text-moss">
              The offering
            </a>
            <a href="#house" className="hover:text-moss">
              The house
            </a>
            <a href="#notify" className="border border-moss px-4 py-2 text-moss hover:bg-moss hover:text-cream">
              Request a place
            </a>
          </nav>
          <button
            type="button"
            className="border border-line px-3 py-2 text-[11px] tracking-[0.18em] uppercase md:hidden"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {menuOpen && (
          <nav className="flex flex-col gap-4 border-t border-line px-5 py-4 text-[12px] tracking-[0.18em] uppercase md:hidden">
            <a href="#offering" onClick={() => setMenuOpen(false)}>
              The offering
            </a>
            <a href="#house" onClick={() => setMenuOpen(false)}>
              The house
            </a>
            <a href="#notify" onClick={() => setMenuOpen(false)}>
              Request a place
            </a>
          </nav>
        )}
      </header>

      <main id="top">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-[12px] font-medium tracking-[0.32em] text-gold uppercase">
              Oddete Fruits
            </p>
            <h1 className="mt-4 font-display text-6xl leading-[0.88] font-medium text-moss sm:text-7xl md:text-8xl">
              Oddete
              <span className="mt-1 block italic">Fruits</span>
            </h1>
            <div className="mt-6 h-px w-24 bg-gold" />
            <p className="mt-6 max-w-md text-base leading-relaxed font-light text-ink/80">
              A forthcoming market for fruit, kept in the manner of a classic
              grocer. The platform is still being built. The first fruits are
              already chosen.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#notify"
                className="bg-moss px-6 py-3 text-[12px] font-medium tracking-[0.18em] text-cream uppercase hover:bg-leaf"
              >
                Join the opening list
              </a>
              <a
                href="#offering"
                className="text-[12px] font-medium tracking-[0.18em] text-moss uppercase underline decoration-gold underline-offset-8"
              >
                See the fruits
              </a>
            </div>
            <p className="mt-10 text-[12px] tracking-[0.16em] text-leaf uppercase">
              Commerce · Seasonal crates · Not yet open
            </p>
          </div>

          <Frame>
            <img
              src="/images/market.png"
              alt="A market table of bananas, pineapple, papaya, grapes, melon, and watermelon"
              className="aspect-[4/3] w-full object-cover"
            />
          </Frame>
        </section>

        <section className="border-y border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-8 sm:grid-cols-3">
            {[
              ['The name', 'Oddete Fruits'],
              ['The work', 'A fruit commerce platform'],
              ['The hour', 'In preparation'],
            ].map(([label, value]) => (
              <div key={label} className="text-center sm:text-left">
                <p className="text-[11px] tracking-[0.24em] text-gold uppercase">{label}</p>
                <p className="mt-1 font-display text-2xl text-moss">{value}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="offering" className="mx-auto max-w-6xl px-5 py-20">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-[12px] tracking-[0.28em] text-gold uppercase">The first offering</p>
              <h2 className="mt-2 font-display text-5xl text-moss md:text-6xl">Three fruits, named</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed font-light text-ink/75">
              These portraits will open the catalogue. Prices and baskets will
              appear when the house begins to trade.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {fruits.map((item) => (
              <article key={item.name} className="flex flex-col">
                <Frame>
                  <div className="flex aspect-square items-center justify-center bg-white p-6">
                    <img src={item.image} alt={item.alt} className="max-h-full max-w-full object-contain" />
                  </div>
                </Frame>
                <p className="mt-5 text-[11px] tracking-[0.22em] text-gold uppercase">{item.latin}</p>
                <h3 className="mt-1 font-display text-3xl text-moss">{item.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed font-light text-ink/75">{item.note}</p>
                <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <span className="text-[11px] tracking-[0.16em] text-leaf uppercase">Upon opening</span>
                  <button
                    type="button"
                    onClick={() => noteFruit(item.name)}
                    className="text-[12px] tracking-[0.14em] text-moss uppercase underline decoration-gold underline-offset-4 hover:text-gold"
                  >
                    Note interest
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="house" className="border-y border-line bg-moss text-cream">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-[12px] tracking-[0.28em] text-[#d7c4a3] uppercase">The house</p>
              <h2 className="mt-3 font-display text-5xl leading-tight md:text-6xl">
                Built as a grocer,
                <span className="italic"> kept as a platform.</span>
              </h2>
              <p className="mt-6 max-w-md text-sm leading-relaxed font-light text-cream/80">
                Oddete Fruits is the name of a commerce house still on the
                bench. Orders, crates, and delivery will live here. Until the
                doors open, this page holds the fruit and the intention.
              </p>
            </div>
            <ol className="divide-y divide-white/15 border-y border-white/15">
              {promises.map((item) => (
                <li key={item.numeral} className="grid grid-cols-[3rem_1fr] gap-4 py-6">
                  <span className="font-display text-3xl text-[#d7c4a3]">{item.numeral}</span>
                  <div>
                    <h3 className="font-display text-3xl">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed font-light text-cream/75">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-5 py-20">
          <Frame>
            <figure>
              <img
                src="/images/market.png"
                alt="An overhead study of mixed market fruit on a pale wooden table"
                className="max-h-[520px] w-full object-cover"
              />
              <figcaption className="flex flex-col gap-2 bg-paper px-5 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                <span className="font-display text-2xl text-moss italic">The market table</span>
                <span className="text-[12px] tracking-[0.16em] text-leaf uppercase">
                  A study for the Oddete Fruits catalogue
                </span>
              </figcaption>
            </figure>
          </Frame>
        </section>

        <section id="notify" className="border-t border-line bg-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-2">
            <div>
              <p className="text-[12px] tracking-[0.28em] text-gold uppercase">The opening list</p>
              <h2 className="mt-3 font-display text-5xl leading-tight text-moss md:text-6xl">
                Request a place at Oddete Fruits
              </h2>
              <p className="mt-5 max-w-md text-sm leading-relaxed font-light text-ink/75">
                Leave a name and we will write when the platform is ready to
                take an order. Nothing is charged, and nothing is shipped, until
                the house opens.
              </p>
            </div>

            {sent ? (
              <div className="flex flex-col justify-center border border-line bg-cream px-8 py-10">
                <p className="text-[12px] tracking-[0.24em] text-gold uppercase">Noted</p>
                <p className="mt-3 font-display text-4xl text-moss">
                  Thank you, {name.trim()}.
                </p>
                <p className="mt-4 text-sm leading-relaxed font-light text-ink/75">
                  {fruit
                    ? `${fruit} is marked beside your name. `
                    : 'Your name is on the opening list. '}
                  Oddete Fruits will write to {email.trim()} when the doors are ready.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="border border-line bg-cream px-6 py-8 sm:px-8">
                <label className="block text-[11px] tracking-[0.2em] text-leaf uppercase" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 w-full border-b border-line bg-transparent py-2 font-display text-2xl text-moss outline-none focus:border-gold"
                  placeholder="Your name"
                />

                <label className="mt-6 block text-[11px] tracking-[0.2em] text-leaf uppercase" htmlFor="email">
                  Post
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-2 w-full border-b border-line bg-transparent py-2 font-display text-2xl text-moss outline-none focus:border-gold"
                  placeholder="name@house.com"
                />

                <label className="mt-6 block text-[11px] tracking-[0.2em] text-leaf uppercase" htmlFor="fruit">
                  Fruit of interest
                </label>
                <select
                  id="fruit"
                  value={fruit}
                  onChange={(event) => setFruit(event.target.value)}
                  className="mt-2 w-full border-b border-line bg-transparent py-3 text-sm text-moss outline-none focus:border-gold"
                >
                  <option value="">The whole market</option>
                  {fruits.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="mt-8 w-full bg-moss py-3 text-[12px] font-medium tracking-[0.2em] text-cream uppercase hover:bg-leaf"
                >
                  Place my name
                </button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-2xl text-moss">
            Oddete <span className="italic">Fruits</span>
          </p>
          <p className="text-[12px] tracking-[0.14em] text-leaf uppercase">
            A platform in preparation · MMXXVI
          </p>
        </div>
      </footer>
    </div>
  )
}
