import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Willkommen im Königreich! Bitte warte noch ein paar Wochen, diese Seite wird nämlich noch entwickelt!
        </p>
      </main>

      <Footer />
    </div>
  )
}
