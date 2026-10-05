import Link from 'next/link'
import { PageHero, Vcols } from '@/components/ui'
import { site } from '@/lib/data'
export const metadata = { title: 'About Us' }
export default function About() {
  return (
    <>
      <PageHero title="About Igoche Oil & Gas" sub="Our diesel is tested and trusted" img="oil-gas" tag="ABOUT US" />
      <section className="cr"><div className="split">
        <div className="rv l"><span className="tag">Our story</span><h2>A personalized approach to quality supply</h2>
          <p className="mb-4">Igoche Oil &amp; Gas Nig. Ltd. is a registered Nigerian company (RC: {site.rc}) based in Victoria Island, Lagos. We are a supplier of petroleum products, sales, marketing and general contractor, known for high quality diesel at the best price. We supply diesel to hotels, restaurants, companies, estates, residents and more.</p>
          <p className="mb-2"><b>{site.role}:</b> {site.md}</p><p className="mb-5"><b>RC Number:</b> {site.rc}</p><Link className="btn" href="/services">See services</Link></div>
        <div className="rv r"><Vcols /></div>
      </div></section>
      <section className="nv cb"><div className="gx">
        {[['🎯', 'Mission', 'Deliver tested, high quality petroleum products with a personalized approach that puts every customer first.'], ['👁️', 'Vision', 'To be a leading, trusted name in petroleum supply and general contracting in Nigeria.'], ['💎', 'Values', 'Trust, Patience, Integrity and Passion for our customer.']].map(([i, t, p], k) => <div key={t} className={`wy rv d${k}`}><i>{i}</i><h3>{t}</h3><p>{p}</p></div>)}
      </div></section>
    </>
  )
}
