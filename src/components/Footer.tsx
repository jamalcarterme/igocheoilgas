import Link from 'next/link'
import Image from 'next/image'
import Icon from './Icon'
import { services, site, NAV, socials, handle } from '@/lib/data'
export default function Footer() {
  return (
    <footer>
      <div className="gx">
        <div><Link href="/" className="brand ft"><Image src="/img/logo-emblem.svg" alt="Igoche Oil & Gas logo" width={200} height={215} /><span className="bn"><b>IGOCHE <em>Oil &amp; Gas</em></b><small>Nig. Ltd.</small><span className="rc">RC: 1761904</span></span></Link><p>{site.tagline}</p><p className="mt-3 opacity-80">High quality diesel with the best price. Our diesel is tested and trusted.</p></div>
        <div><h4>Services</h4>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}</div>
        <div><h4>Quick Links</h4>{NAV.map(([h, t]) => <Link key={h} href={h}>{t}</Link>)}<Link href="/get-quote">Get a Quote</Link></div>
        <div><h4>Contact</h4><p>{site.address}</p>{site.phones.map(p => <a key={p} href={`tel:${p}`}><Icon name="phone" size={16} /> {p}</a>)}<a href={`https://wa.me/${site.wa}`} target="_blank" rel="noreferrer"><Icon name="whatsapp" size={16} /> WhatsApp: {site.waDisplay}</a><a href={`mailto:${site.email}`}><Icon name="mail" size={16} /> {site.email}</a><p>{site.role}: {site.md}</p><div className="soc">{socials.map(([i, n, h]) => <a key={n} className={`s-${i}`} href={h} target="_blank" rel="noreferrer" aria-label={n} title={`${n} @${handle}`}><Icon name={i} /></a>)}</div></div>
      </div>
      <div className="cp">© {new Date().getFullYear()} Igoche Oil &amp; Gas Nig. Ltd. (RC: 1761904) All rights reserved.</div>
    </footer>
  )
}
