import Icon from '@/components/Icon'
import Link from 'next/link'
import { PageHero } from '@/components/ui'
import { site, socials, handle } from '@/lib/data'
export const metadata = { title: 'Contact' }
export default function Contact() {
  return (
    <>
      <PageHero title="Contact Us" sub="We'd love to hear from you" img="tanker-haulage" tag="CONTACT" />
      <section className="cr">
        <div className="gx text-ink">
          <div className="wy rv"><i><Icon name="pin" size={34} /></i><p>{site.address}</p></div>
          <div className="wy rv d1"><i><Icon name="phone" size={34} /></i>{site.phones.map(p => <a key={p} className="block" href={`tel:${p}`}>{p}</a>)}</div>
          <div className="wy rv d2"><i><Icon name="whatsapp" size={34} /></i><a className="block" href={`https://wa.me/${site.wa}`} target="_blank" rel="noreferrer">WhatsApp: {site.waDisplay}</a></div>
          <div className="wy rv d3"><i><Icon name="mail" size={34} /></i><a className="break-all" href={`mailto:${site.email}`}>{site.email}</a></div>
        </div>
        <div className="soc big rv">{socials.map(([i, n, h]) => <a key={n} className={`s-${i}`} href={h} target="_blank" rel="noreferrer"><Icon name={i} size={20} /> {n}</a>)}</div>
        <p className="text-center opacity-70 text-sm">@{handle}</p>
        <p className="text-center mt-6 opacity-80">{site.role}: {site.md} · RC: {site.rc}</p>
        <div className="text-center mt-6"><Link className="btn" href="/get-quote">Get a Quote</Link></div>
      </section>
    </>
  )
}
