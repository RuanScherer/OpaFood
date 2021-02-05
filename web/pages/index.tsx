import Header from "../components/Header"
import { FiChevronLeft, FiChevronRight, FiSearch } from "react-icons/fi"
import Link from "next/link"

const Home:React.FC = () => {
  return (
    <>
      <Header />
      <div className="pb-20 lg:pb-8 pt-24 text-gray-700 container mx-auto">
        <main className="w-full p-8 mt-20 mb-28 border rounded-2xl border-gray-200 bg-white hidden md:grid grid-cols-2 gap-6">
          <aside className="flex justify-center items-center p-6">
            <div className="flex flex-col space-y-6 w-full lg:w-10/12">
              <h1 className="font-bold text-4xl text-dark">Faça uma pesquisa por restaurantes...</h1>
              <p className="text-lg leading-6 text-gray-600">Aproveite e busque pelos melhores restaurantes da região.</p>
              <form className="flex items-center rounded-full shadow border-2 border-gray-50 focus-within:border-primary transition">
                <input
                  type="text"
                  placeholder="Pesquise por restaurantes..."
                  className="text-lg w-full py-4 pl-5 pr-2 rounded-full"/>
                <button
                  type="submit"
                  className="bg-primary rounded-full p-3 mr-2 hover:bg-opacity-80 transition">
                  <FiSearch size={22} color="#FFF"/>
                </button>
              </form>
            </div>
          </aside>
          <aside className="flex items-center">
            <img 
              className="w-full"
              src="/images/chef.svg"
              alt="Restaurant Chef Illustration"/>
          </aside>
        </main>

        <section className="my-28">
          <header className="flex items-center justify-between mb-14">
            <h2 className="font-bold text-3xl text-dark">Restaurantes populares...</h2>
            <nav className="flex items-center space-x-5">
              <button className="bg-primary p-2 rounded-xl hover:bg-opacity-80 transition">
                <FiChevronLeft size={26} color="#FFF"/>
              </button>
              <button className="bg-primary p-2 rounded-xl hover:bg-opacity-80 transition">
                <FiChevronRight size={26} color="#FFF"/>
              </button>
            </nav>
          </header>

          <ul className="list-none grid grid-cols-2 gap-x-16 gap-y-12">
            <li className="bg-white border border-gray-200 rounded-xl p-8 grid grid-cols-12 gap-6">
              <img
                src="https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png"
                alt="Restaurant Logo"
                className="rounded-xl col-span-3 w-full my-auto"/>
              
              <div className="col-span-9 flex flex-col justify-between space-y-4">
                <h3 className="font-bold text-2xl text-dark">Mc Donald's</h3>
                <p>Somos um dos maiores restaurantes especializados em fast-food. Estamos sempre de portas abertas!</p>
                
                <footer className="flex items-center justify-between">
                  <strong className="text-success text-sm">Aberto agora</strong>
                  <Link href="/">
                    <a className="bg-primary text-white text-sm font-bold px-4 py-3 rounded-md hover:bg-opacity-80 transition">
                      Saiba mais
                    </a>
                  </Link>
                </footer>
              </div>
            </li>

            <li className="bg-white border border-gray-200 rounded-xl p-8 grid grid-cols-12 gap-6">
              <img
                src="https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png"
                alt="Restaurant Logo"
                className="rounded-xl col-span-3 w-full my-auto"/>
              
              <div className="col-span-9 flex flex-col justify-between space-y-4">
                <h3 className="font-bold text-xl text-dark">Mc Donald's</h3>
                <p>Somos um dos maiores restaurantes especializados em fast-food. Estamos sempre de portas abertas!</p>
                
                <footer className="flex items-center justify-between">
                  <strong className="text-success text-sm">Aberto agora</strong>
                  <Link href="/">
                    <a className="bg-primary text-white text-sm font-bold px-4 py-3 rounded-md hover:bg-opacity-80 transition">
                      Saiba mais
                    </a>
                  </Link>
                </footer>
              </div>
            </li>

            <li className="bg-white border border-gray-200 rounded-xl p-8 grid grid-cols-12 gap-6">
              <img
                src="https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png"
                alt="Restaurant Logo"
                className="rounded-xl col-span-3 w-full my-auto"/>
              
              <div className="col-span-9 flex flex-col justify-between space-y-4">
                <h3 className="font-bold text-xl text-dark">Mc Donald's</h3>
                <p>Somos um dos maiores restaurantes especializados em fast-food. Estamos sempre de portas abertas!</p>
                
                <footer className="flex items-center justify-between">
                  <strong className="text-success text-sm">Aberto agora</strong>
                  <Link href="/">
                    <a className="bg-primary text-white text-sm font-bold px-4 py-3 rounded-md hover:bg-opacity-80 transition">
                      Saiba mais
                    </a>
                  </Link>
                </footer>
              </div>
            </li>

            <li className="bg-white border border-gray-200 rounded-xl p-8 grid grid-cols-12 gap-6">
              <img
                src="https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png"
                alt="Restaurant Logo"
                className="rounded-xl col-span-3 w-full my-auto"/>
              
              <div className="col-span-9 flex flex-col justify-between space-y-4">
                <h3 className="font-bold text-xl text-dark">Mc Donald's</h3>
                <p>Somos um dos maiores restaurantes especializados em fast-food. Estamos sempre de portas abertas!</p>
                
                <footer className="flex items-center justify-between">
                  <strong className="text-success text-sm">Aberto agora</strong>
                  <Link href="/">
                    <a className="bg-primary text-white text-sm font-bold px-4 py-3 rounded-md hover:bg-opacity-80 transition">
                      Saiba mais
                    </a>
                  </Link>
                </footer>
              </div>
            </li>
          </ul>
        </section>
      </div>
    </>
  )
}

export default Home