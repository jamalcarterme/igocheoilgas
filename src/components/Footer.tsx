import Link from 'next/link'
import Image from 'next/image'
import { services, site, NAV, socials, handle } from '@/lib/data'
export default function Footer() {
  return (
    <footer>
      <div className="gx">
        <div><Link href="/" className="brand ft"><Image src="/img/logo-emblem.svg" alt="Igoche Oil & Gas logo" width={200} height={215} /><span className="bn"><b>IGOCHE <em>Oil &amp; Gas</em></b><small>Nig. Ltd.</small><span className="rc">RC: 1761904</span></span></Link><p>{site.tagline}</p><p className="mt-3 opacity-80">High quality diesel with the best price. Our diesel is tested and trusted.</p></div>
        <div><h4>Services</h4>{services.map(s => <Link key={s.slug} href={`/services/${s.slug}`}>{s.name}</Link>)}</div>
        <div><h4>Quick Links</h4>{NAV.map(([h, t]) => <Link key={h} href={h}>{t}</Link>)}<Link href="/get-quote">Get a Quote</Link></div>
        <div><h4>Contact</h4><p>{site.address}</p>{site.phones.map(p => <a key={p} href={`tel:${p}`}>📞 {p}</a>)}<a href={`https://wa.me/${site.wa}`} target="_blank" rel="noreferrer">💬 WhatsApp: {site.waDisplay}</a><a href={`mailto:${site.email}`}>✉️ {site.email}</a><p>{site.role}: {site.md}</p><div className="soc">{socials.map(([i, n, h]) => <a key={n} href={h} target="_blank" rel="noreferrer" aria-label={n} title={`${n} @${handle}`}>{i}</a>)}</div></div>
      </div>
      <div className="cp">© {new Date().getFullYear()} Igoche Oil &amp; Gas Nig. Ltd. (RC: 1761904) All rights reserved.</div>
    </footer>
  )
}
