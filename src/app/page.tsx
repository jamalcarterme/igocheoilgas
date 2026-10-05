import Link from 'next/link'
import Image from 'next/image'
import { services, site } from '@/lib/data'
import { ServiceCard, Vcols, bg } from '@/components/ui'
import Slider from '@/components/Slider'
import Typewriter from '@/components/Typewriter'
const values = ['Trust', 'Patience', 'Integrity', 'Passion for our customer']
export default function Home() {
  return (
    <>
      <section className="hero">
        <video autoPlay muted loop playsInline preload="auto" poster="/img/oil-gas.jpg"><source src="/video/hero.mp4" type="video/mp4" /></video>
        <div className="ov" />
        <div className="in">
          <span className="tag rv" style={{ color: 'var(--gold)' }}>IGOCHE OIL &amp; GAS NIG. LTD. · RC {site.rc}</span>
          <Typewriter words={services.map(s => s.name)} />
          <p className="s rv d2">High quality diesel with the best price. Our diesel is tested and trusted.</p>
          <div className="rv d3"><Link className="btn" href="/get-quote">Get a Free Quote</Link><Link className="btn o" href="/services">Our Services</Link></div>
        </div>
        <Image className="hshape hex" src="/img/diesel-supply.jpg" alt="" width={260} height={300} />
      </section>
      <div className="stats">
        {[['6', 'Core Services'], ['100%', 'Tested Diesel'], ['V.I.', 'Lagos Based'], ['1st', 'Customer Priority']].map(([b, t], i) => <div key={t} className={`hx rv d${i}`}><b>{b}</b>{t}</div>)}
      </div>
      <div className="mq"><div>{[...values, ...values, ...values, ...values].map((v, i) => <span key={i}>◆ {v}</span>)}</div></div>
      <section className="cr">
        <div className="text-center"><span className="tag rv">What we do</span><h2 className="rv d1">Pick a service</h2><p className="lead rv d2">Tap any service to see details, packages and request a quote.</p></div>
        <Slider>{services.map(s => <ServiceCard key={s.slug} s={s} base="/services" label="Learn more →" />)}</Slider>
      </section>
      <section className="dk cl">
        <div className="split">
          <div className="rv l"><span className="tag">About us</span><h2>Fuel you can trust.</h2><p className="mb-5 opacity-85">Igoche Oil &amp; Gas Nig. Ltd. is a Victoria Island, Lagos based supplier of petroleum products, sales, marketing and general contractor, led by Managing Director {site.md}. We deliver tested and trusted diesel with a personalized approach.</p><Link className="btn" href="/about">Read our story</Link></div>
          <div className="rv r"><Vcols /></div>
        </div>
      </section>
      <section className="cr">
        <div className="split">
          <div className="rv l"><span className="tag">See us in action</span><h2>Meet the Igoche team</h2><p className="mb-5 opacity-85">Watch a short video about Igoche Oil &amp; Gas: tested and trusted diesel, delivered with a personalized approach, in Victoria Island and across Lagos.</p><Link className="btn" href="/get-quote">Request a Quote</Link> <Link className="btn b" href="/contact">Talk to us</Link></div>
          <div className="rv r"><div className="vid"><video controls playsInline preload="metadata" poster="/img/intro-poster.jpg"><source src="/video/intro.mp4" type="video/mp4" /></video></div></div>
        </div>
      </section>
      <div className="tri-d" />
      <section className="bgi" style={bg('equipment')}>
        <div className="text-center">
          <span className="tag rv">Packages &amp; Pricing</span><h2 className="rv d1 text-white">Simple packages for every need</h2><p className="lead rv d2">Choose your service to view its packages.</p>
          <div className="chips rv d3">{services.map(s => <Link key={s.slug} className="chip" href={`/packages/${s.slug}`}>{s.icon} {s.name}</Link>)}</div>
        </div>
      </section>
      <section className="nv cb">
        <div className="text-center"><span className="tag rv">Why choose us</span><h2 className="rv d1">Built on trust</h2></div>
        <div className="gx mt-8">{[['🏆', 'Tested Quality'], ['💰', 'Best Price'], ['🤝', 'Integrity'], ['🚚', 'Reliable Delivery']].map(([i, t], k) => <div key={t} className={`wy rv d${k}`}><i>{i}</i><h3>{t}</h3></div>)}</div>
      </section>
      <section className="cr">
        <div className="gx ct">{[['Managing Director', site.md], ['Call us', site.phone], ['Visit us', 'Victoria Island, Lagos']].map(([a, b], k) => <div key={a} className={`rv d${k}`}><small>{a}</small><b>{b}</b></div>)}</div>
        <div className="band rv mt-8" style={bg('oil-gas')}><h2>Ready to place an order?</h2><p className="lead">Tell us what you need, we reply fast.</p><Link className="btn" href="/get-quote">Get a Free Quote</Link> <Link className="btn b" href="/contact">Contact Us</Link></div>
      </section>
    </>
  )
}
