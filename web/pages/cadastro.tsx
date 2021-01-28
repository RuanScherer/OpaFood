import Link from 'next/link'
import { FormEvent, useCallback, useState } from 'react'
import { FiChevronLeft } from 'react-icons/fi'

const Cadastro:React.FC = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleRegister = useCallback(async (event: FormEvent, { name, email, password, confirmPassword }) => {
    event.preventDefault()

    if (!name || !email || !password || !confirmPassword) return

    if (password.length < 8) return

    if (password !== confirmPassword) return

    // do something here
  }, [])

  return (
    <main className="mx-auto text-gray-700 grid grid-cols-9 min-h-screen bg-primary">
      <aside className="col-span-9 md:col-span-4 bg-white py-8 px-16">
        <form className="flex flex-col justify-center w-full h-full space-y-12">
          <Link href="/">
            <a className="flex items-center font-bold mb-4 hover:-translate-x-1 transition transform duration-200">
              <FiChevronLeft size={30} className="mr-2"/>
              Voltar
            </a>
          </Link>
          <h1 className="text-3xl md:text-4xl font-semibold text-dark mb-2">Realize seu cadastro</h1>

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="name" className="font-bold">Nome</label>
              <input 
                type="text" 
                name="name"
                id="name"
                placeholder="Insira o nome completo"
                spellCheck="false"
                autoComplete="off"
                value={name}
                onChange={event => setName(event.target.value)}
                required
                className="bg-gray-50 px-5 py-4 rounded-lg w-full hover:bg-gray-100 focus:border-b focus:border-primary transition duration-200 place"/>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-bold">E-mail</label>
              <input 
                type="email" 
                name="email"
                id="email"
                placeholder="exemplo@dominio.com"
                spellCheck="false"
                autoComplete="off"
                value={email}
                onChange={event => setEmail(event.target.value)}
                required
                className="bg-gray-50 px-5 py-4 rounded-lg w-full hover:bg-gray-100 focus:border-b focus:border-primary transition duration-200 place"/>
            </div>
          </fieldset>

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label htmlFor="password" className="font-bold">Senha</label>
              <input 
                type="text"
                name="password"
                id="password"
                placeholder="Mínimo 8 caracteres"
                minLength={8}
                spellCheck="false"
                value={password}
                onChange={event => setPassword(event.target.value)}
                required
                className="bg-gray-50 px-5 py-4 rounded-lg w-full hover:bg-gray-100 focus:border-b focus:border-primary transition duration-200 place"/>
            </div>

            <div className="space-y-2">
              <label htmlFor="confirm-password" className="font-bold">Confirmar senha</label>
              <input 
                type="text"
                name="confirm-password"
                id="confirm-password"
                placeholder="Confirme sua senha"
                minLength={8}
                spellCheck="false"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
                required
                className="bg-gray-50 px-5 py-4 rounded-lg w-full hover:bg-gray-100 focus:border-b focus:border-primary transition duration-200 place"/>
            </div>
          </fieldset>

          <button
            type="submit"
            onClick={event => handleRegister(event, { name, email, password, confirmPassword })}
            className="bg-primary text-white rounded-xl py-4 px-6 font-bold hover:bg-opacity-90 transition duration-200">
            Crie sua conta no OpaFood
          </button>
        </form>
      </aside>

      <aside className="hidden md:col-span-5 md:flex justify-center items-center bg-cover" style={{ backgroundImage: "url('/images/background.svg')"}}>
        
      </aside>
    </main>
  )
}

export default Cadastro