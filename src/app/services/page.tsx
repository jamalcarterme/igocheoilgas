import { PageHero, CardGrid } from '@/components/ui'
export const metadata = { title: 'Our Services' }
export default function Page() {
  return (<><PageHero title="Our Services" sub="Everything Igoche Oil & Gas can do for you" img="tanker-haulage" /><CardGrid base="/services" label="View service →" /></>)
}
