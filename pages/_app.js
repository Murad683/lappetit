import '@/styles/globals.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Poppins, Lato } from 'next/font/google'

const poppins = Poppins({ weight: ['600','700'], subsets: ['latin'], variable: '--font-heading' })
const lato    = Lato({ weight: ['400','700'], subsets: ['latin'], variable: '--font-body' })

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lappetit | Fransız kruassanları və şirniyyat qutuları Bakıda</title>
        <meta name="description" content="Təzə kruassanlar, mini sendviçlər və party box-lar. Sifariş edin – Lappetit ilə dadın fərqinə varın."/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Lappetit, Lappetit Baku, kruassan, şirniyyat qutusu, party set, breakfast Baku, kafe Baku"/>
        <link rel="icon" href="/logo.png" />
        <meta property="og:title" content="Lappetit — Fransız kruassanları və şirniyyat qutuları" />
        <meta property="og:description" content="Kruassanlar, mini sendviçlər, party setlər — Bakıda çatdırılma ilə." />
        <meta property="og:type" content="website" />
      </Head>
      <div className={`${poppins.variable} ${lato.variable} font-sans min-h-screen flex flex-col bg-cream text-coffee`} style={{fontFamily: 'var(--font-body)'}}>
        <Navbar />
        <main className="container flex-1 py-10 md:py-16">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <style jsx global>{`
        h1,h2,h3,h4 { font-family: var(--font-heading), system-ui, Arial; }
        body { font-family: var(--font-body), system-ui, Arial; }
      `}</style>
    </>
  )
}
