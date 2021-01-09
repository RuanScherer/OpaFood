import Head from "next/head"
import "tailwindcss/tailwind.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/global.css"
import Header from "../components/Header"
import { useRouter } from "next/router"

interface AppProps {
  Component: React.FC
  pageProps: any
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>IFood - Delivery de Comida</title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" type="image/svg" href="/favicon.svg"/>
      </Head>
      <Header />
      <div className={router.pathname === "/" ? 'pt-40' : 'pt-28'}></div>
      <Component {...pageProps} />
    </>
  )
}

export default App