import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>The Kingdom</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Wilkommen im Königreich!" />
        <p className="description">
          Bitte warte noch ein wenig, diese Seite wird nämlich noch entwickelt!
          <br />
          Hier entsteht das neue Hub für KingArthvr_ und sein Reich.
        </p>
      </main>

      <Footer />
    </div>
  )
}
