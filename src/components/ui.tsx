import Link from 'next/link'
import Image from 'next/image'
import { services, unsplash, type Service } from '@/lib/data'
export const photo = (img: string) => (unsplash[img] ? `url(https://unsplash.com/photos/${unsplash[img]}/download?force=true&w=1600), ` : '') + `url(/img/${img}.jpg)`
export const bg = (img: string) => ({ backgroundImage: photo(img) })
export function PageHero({ title, sub, img, tag = 'IGOCHE OIL & GAS' }: { title: string; sub: string; img: string; tag?: string }) {
  return (
    <div className="ph" style={bg(img)}>
      <div><span className="tag rv">{tag}</span><h1 className="rv d1">{title}</h1><p className="rv d2">{sub}</p></div>
    </div>
  )
}
export function ServiceCard({ s, base, label }: { s: Service; base: string; label: string }) {
  return (
    <div className="card">
      <div className="im"><div className="pic" role="img" aria-label={s.name} style={bg(s.slug)} /></div>
      <div className="bd"><h3>{s.icon} {s.name}</h3><p>{s.desc}</p><Link className="btn" href={`${base}/${s.slug}`}>{label}</Link></div>
    </div>
  )
}
export function CardGrid({ base, label }: { base: string; label: string }) {
  return <section className="cr"><div className="gx">{services.map(s => <ServiceCard key={s.slug} s={s} base={base} label={label} />)}</div></section>
}
export function Vcols() {
  const a = ['diesel-supply', 'tanker-haulage', 'lubricants', 'petroleum-products', 'general-contracting', 'sales-marketing'], b = [...a].reverse()
  const col = (L: string[]) => <div>{[...L, ...L].map((i, k) => <Image key={k} src={`/img/${i}.jpg`} alt="" width={400} height={300} />)}</div>
  return <div className="vc">{col(a)}{col(b)}</div>
}
export function Tiers({ s, label }: { s: Service; label: string }) {
  return (
    <div className="tiers">
      {s.tiers.map((t, i) => (
        <div key={t.name} className={`tier rv d${i} ${i === 1 ? 'pop' : ''}`}>
          <h3>{t.name}</h3>
          <div className="pr">{t.price === 'Custom' ? 'Custom quote' : `From ${t.price}`}</div>
          <ul className="ck">{t.features.map(f => <li key={f}>{f}</li>)}</ul>
          <Link className={`btn ${i === 1 ? 'b' : ''}`} href={`/get-quote/${s.slug}?pkg=${encodeURIComponent(t.name)}`}>{label}</Link>
        </div>
      ))}
    </div>
  )
}
