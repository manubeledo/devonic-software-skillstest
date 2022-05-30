import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'


function MyApp({ Component, pageProps }: AppProps) {
  <Head>
  <meta name="viewport" content="viewport-fit=cover" />
  </Head>
  return <Component {...pageProps} />
}

export default MyApp
