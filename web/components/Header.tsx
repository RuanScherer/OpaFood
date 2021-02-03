import { FiClipboard, FiHome, FiSearch, FiUser } from 'react-icons/fi'

const Header: React.FC = () => {
  return (
    <>
      <div className="fixed w-screen z-40">
        <header className="px-8 py-4 lg:py-3 bg-white border-gray-200 border shadow-md">
          <div className="mx-auto container flex justify-between items-center">
            <div className="flex space-x-12">
              <h1 className="text-2xl font-bold">
                opa<span className="text-primary">Food</span>
              </h1>

              <nav className="hidden text-sm text-gray-500 lg:flex items-center space-x-6">
                <a href="#" className="text-dark flex items-center">
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

            <button className="hover:opacity-80 transition">
              <img 
                className="rounded-full border-2 border-primary w-12 p-1"
                src="https://avatars.githubusercontent.com/u/50061559?s=460&u=c852aeac2cf92ba5f8335515be54da3d5d68ffeb&v=4" 
                alt="Profile Picture"/>
            </button>
          </div>
        </header>
      </div>

      <footer className="fixed bottom-0 bg-white px-8 py-1 w-screen flex lg:hidden items-center justify-around border-gray-100 border-t">
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