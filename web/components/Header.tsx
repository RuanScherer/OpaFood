import { useEffect, useState } from 'react'
import { FiClipboard, FiHome, FiLogIn, FiSearch, FiUser } from 'react-icons/fi'
import { getAuthenticationTokenData } from '../helpers/token'

const Header: React.FC = () => {
  const [userName, setUserName] = useState("")
  const [userPhoto, setUserPhoto] = useState("")

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
              <h1 className="text-3xl font-bold">
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
                  Escanear QR Code
                </a>
              </nav>
            </div>

            <button className="hover:opacity-80 transition text-gray-300" title={userName}>
              { userPhoto
                ? <img 
                    className="rounded-full border-2 border-primary w-12 p-1"
                    src="https://avatars.githubusercontent.com/u/50061559?s=460&u=c852aeac2cf92ba5f8335515be54da3d5d68ffeb&v=4" 
                    alt="Profile Picture"/>
                : <FiLogIn 
                    className="rounded-full border-2 border-gray-200 p-2 bg-gray-50"
                    size={44}/>
              }
            </button>
          </div>
        </header>
      </div>

      <footer className="fixed bottom-0 bg-white px-8 py-1 w-screen flex md:hidden items-center justify-around border-gray-100 border-t">
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
          <FiClipboard
            className="mb-1 stroke-2"
            size={20}/>
          <legend className="text-xs">Reservas</legend>
        </a>
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <FiUser
            className="mb-1 stroke-2"
            size={20}/>
          <legend className="text-xs">Perfil</legend>
        </a>
      </footer>
    </>
  )
}

export default Header