import Link from "next/link"
import { FiEye, FiEyeOff } from "react-icons/fi"
import Footer from "../components/Footer"

const Home: React.FC = () => {
  return (
    <main className="mx-auto text-gray-700 grid grid-cols-7 min-h-screen bg-primary">
      <aside className="hidden md:col-span-4 md:flex justify-center items-center">
        <img className="w-7/12" src="/images/opafood.svg" alt="Logo" />
      </aside>

      <aside className="col-span-7 md:col-span-3 flex flex-col justify-center">
        <form className="flex flex-col justify-center bg-light w-50 py-8 px-16 shadow-xl space-y-10 h-full">
          <h1 className="text-3xl md:text-4xl font-semibold text-dark mb-6">Entrar</h1>
          <div className="space-y-2">
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              name="email"
              placeholder="E-mail"
              spellCheck="false"
              className="bg-gray-200 px-5 py-3 rounded-lg text-lg h-20 w-full hover:bg-gray-300 focus:border-b focus:border-primary transition" />
          </div>
          <div className="space-y-2">
            <label htmlFor="senha">Senha</label>
            <div>
              <input
                id="senha"
                type="text"
                name="password"
                placeholder="Senha"
                spellCheck="false"
                className="bg-gray-200 px-5 py-3 rounded-lg text-lg h-20 w-full hover:bg-gray-300 focus:border-b focus:border-primary transition relative" />
                <FiEyeOff size = {30} className = "absolute top-50"/>
            </div>
          </div>

          <Link href='/'>
            <a className="text-right">Esqueci a senha porra</a>
          </Link>

          <button className=" bg-primary rounded-lg w-full py-5 text-light">Conectar-se ao OpaFood</button>

          <label className="text-center">Não possui conta?
          <Link href='/cadastro'>
              <a className="text-primary ">Cadastre-se</a>
            </Link>
          </label>
        </form>
      </aside>
    </main>
  )
}

export default Home