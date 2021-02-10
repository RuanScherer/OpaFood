import Link from "next/link"

export interface RestaurantData {
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

export default RestaurantCard