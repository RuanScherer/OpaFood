import Header from "../components/Header"
import { FiSearch } from "react-icons/fi"
import Link from "next/link"
import Slider from "../components/Slider"

interface RestaurantData {
  name: string
  photo: string
  description: string
}

const RestaurantCard: React.FC<RestaurantData> = ({ name, photo, description }) => {
  return (
    <li className="bg-white border border-gray-200 rounded-xl p-8 grid grid-cols-12 gap-6 col-span-2 md:col-span-1" key={name}>
      <img
        src={photo}
        alt="Restaurant Logo"
        className="rounded-xl col-span-3 w-full my-auto"/>
      
      <div className="col-span-9 flex flex-col justify-between space-y-4">
        <h3 className="font-bold text-xl md:text-2xl text-dark">{name}</h3>
        <p>{description}</p>
        
        <footer className="flex items-center justify-between">
          <strong className="text-success text-sm">Aberto agora</strong>
          <Link href="/">
            <a className="bg-primary text-white text-sm font-bold px-3 py-2 md:px-4 md:py-3 rounded-md hover:bg-opacity-80 transition">
              Saiba mais
            </a>
          </Link>
        </footer>
      </div>
    </li>
  )
}

const Home:React.FC = () => {
  const restaurants = [
    {
      name: "Mc Donald's",
      photo: "https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png",
      description: "Somos o Mc Donald's!",
    },
    {
      name: "Burger King",
      photo: "https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png",
      description: "Somos o BK!",
    },
    {
      name: "Bob's",
      photo: "https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png",
      description: "Somos o Bob's!",
    },
    {
      name: "Subway",
      photo: "https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png",
      description: "Somos o Subway!",
    },
    {
      name: "Giraffas",
      photo: "https://d25dk4h1q4vl9b.cloudfront.net/bundles/front/media/images/header/mcdonalds-logo.png",
      description: "Somos Giraffas!",
    }
  ]

  return (
    <>
      <Header />
      <div className="px-4">
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

          <section className="my-14 md:my-28">
            <Slider<RestaurantData>
              title="Restaurantes populares..."
              data={restaurants}
              itemComponent={RestaurantCard}
            />
          </section>
        </div>
      </div>
    </>
  )
}

export default Home