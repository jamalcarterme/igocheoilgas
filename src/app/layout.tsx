import './globals.css'
import type { Metadata, Viewport } from 'next'
import Image from 'next/image'
import { Poppins, Playfair_Display } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Effects from '@/components/Effects'
import { site } from '@/lib/data'
const body = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--f-body' })
const head = Playfair_Display({ subsets: ['latin'], weight: ['600', '800'], style: ['normal', 'italic'], variable: '--f-head' })
export const metadata: Metadata = {
  title: { default: 'Igoche Oil & Gas Nig. Ltd. | High Quality Diesel, Victoria Island Lagos', template: '%s | Igoche Oil & Gas' },
  description: 'Igoche Oil & Gas Nig. Ltd. (RC 1761904): supplier of petroleum products, high quality tested diesel, lubricants, tanker delivery, sales, marketing and general contracting in Lagos.',
}
export const viewport: Viewport = { width: 'device-width', initialScale: 1 }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${head.variable}`}>
      <body>
        <div id="pre"><Image src="/img/logo-emblem.svg" alt="" width={200} height={215} priority /><i /></div>
        <Header />
        <main>{children}</main>
        <Footer />
        <a id="wa" href={`https://wa.me/${site.wa}`} target="_blank" rel="noreferrer">💬 Chat with us</a>
        <Effects />
      </body>
    </html>
  )
}
