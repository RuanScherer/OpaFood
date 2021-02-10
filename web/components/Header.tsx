import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiCalendar, FiHome, FiList, FiLogIn, FiSearch } from 'react-icons/fi'
import { getAuthenticationTokenData } from '../helpers/token'
import useWindowSize from '../hooks/useWindowSize'

const Header: React.FC = () => {
  const [userName, setUserName] = useState("")
  const [userPhoto, setUserPhoto] = useState("")
  const { width } = useWindowSize()

  useEffect(() => {
    const { _id, name } = getAuthenticationTokenData()
    setUserName(name)

    // call api to get profile photo
  }, [])

  return (
    <>
      <div className="fixed w-screen z-40">
        <header className="px-8 py-4 lg:py-5 bg-white border-gray-200 border shadow-md">
          <div className="mx-auto container flex justify-between items-center">
            <div className="flex space-x-12">
              <h1 className="text-2xl md:text-3xl font-bold">
                opa<span className="text-primary">Food</span>
              </h1>

              <nav className="hidden text-gray-500 md:flex items-center space-x-6">
                <a href="#" className="text-dark font-bold flex items-center">
                  Página inicial
                </a>
                <a href="#" className="flex items-center hover:opacity-70 transition">
                  Minhas reservas
                </a>
                <a href="#" className="flex items-center hover:opacity-70 transition">
                  Histórico
                </a>
              </nav>
            </div>

            <button className="hover:opacity-80 transition text-gray-300" title={userName}>
              { userPhoto
                ? <img 
                    className="rounded-full border-2 border-primary w-9 md:w-12 p-1"
                    src="https://avatars.githubusercontent.com/u/50061559?s=460&u=c852aeac2cf92ba5f8335515be54da3d5d68ffeb&v=4" 
                    alt="Profile Picture"/>
                : <Link href="/entrar">
                    <FiLogIn 
                      className="rounded-full border-2 border-gray-200 p-2 bg-gray-50"
                      size={width > 768 ? 44 : 36}/>
                  </Link>
              }
            </button>
          </div>
        </header>
      </div>

      <footer className="fixed z-40 bottom-0 bg-white px-8 py-1 w-screen flex md:hidden items-center justify-around border-gray-100 border-t">
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <FiHome
            className="mb-1 stroke-2"
            size={20}/>
          <legend className="text-xs">Início</legend>
        </a>
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <FiSearch
            className="mb-1 stroke-2"
            size={20}/>
          <legend className="text-xs">Buscar</legend>
        </a>
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <FiCalendar
            className="mb-1 stroke-2"
            size={20}/>
          <legend className="text-xs">Reservas</legend>
        </a>
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <FiList
            className="mb-1 stroke-2"
            size={20}/>
          <legend className="text-xs">Histórico</legend>
        </a>
      </footer>
    </>
  )
}

export default Header