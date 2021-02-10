import Link from "next/link"
import { useEffect } from "react"
import { FiChevronLeft } from "react-icons/fi"
import RestaurantCard, { RestaurantData } from "../components/RestaurantCard"
import { getQueryParam } from "../helpers/url"

const SearchResults: React.FC = () => {
  let search = decodeURI(getQueryParam("search")) as string
  search = search !== 'undefined' ? search : ""
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

  useEffect(() => {
    // call api here
  }, [search])

  return (
    <main className="py-20 text-gray-700">
      <div className="flex flex-col space-y-8 px-4 container mx-auto text-dark">
        <Link href="/">
          <a className="flex items-center font-bold mb-4 hover:-translate-x-1 transition transform duration-200 fit-content">
            <FiChevronLeft size={30} className="mr-2"/>
            Voltar
          </a>
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold">
          Resultados encontrados por <span className="text-primary">{search}</span>
        </h1>

        <span className="text-lg">Restaurantes ({restaurants.length})</span>
      </div>

      <hr className="mt-4 mb-10 md:mb-14 border-gray-300"/>

      { search // TODO: add search results from api to condition
        ? <ul className="list-none grid grid-cols-2 gap-y-8 md:gap-x-16 md:gap-y-12 px-4 container mx-auto">
            { restaurants.map((itemData: RestaurantData, index: number) => <RestaurantCard {...itemData} key={index}/>) }
          </ul>
        : <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 px-4 container mx-auto">
            <aside className="m-auto w-9/12 text-center md:text-left">
              <h2 className="text-2xl font-bold text-dark">Ops...</h2>
              <p className="text-gray-600 md:text-lg mt-6">
                Não foi possível encontrar nenhum resultado para sua busca. Por favor, tente novamente.
              </p>
            </aside>
            <img 
              src="/images/empty.svg"
              alt="No results found illustration"
              className="w-9/12 m-auto"/>
          </div>
      }
    </main>
  )
}

export default SearchResults