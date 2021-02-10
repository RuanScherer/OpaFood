import Header from "../components/Header"
import { FiSearch } from "react-icons/fi"
import Slider from "../components/Slider"
import RestaurantCard, { RestaurantData } from "../components/RestaurantCard"
import { FormEvent, useState } from "react"
import { useRouter } from "next/router"

const Home:React.FC = () => {
  const [search, setSearch] = useState("")
  const router = useRouter()
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

  const handleSearch = (event: FormEvent) => {
    event.preventDefault()

    if (!search) return

    router.push("/resultados-busca?search=" + search)
  }

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
                <form
                  onSubmit={handleSearch}
                  className="flex items-center rounded-full shadow border-2 border-gray-50 focus-within:border-primary transition">
                  <input
                    type="text"
                    value={search}
                    onChange={event => setSearch(event.target.value)}
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