import '../styles/globals.css'
import Navbar from '../Components/Navbar'
import Navbar2 from '../Components/Navbar2'
import Head from 'next/head'
import Footer from '../Components/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Head>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
  <Navbar/>
  
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}

export default MyApp
