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
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </Head>
      
      <Component {...pageProps} />
    </>
  )
}

export default App