import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormEvent, useCallback, useRef, useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import api from '../services/api'

const SignIn:React.FC = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const buttonRef = useRef(null)
  const router = useRouter()

  const handleSignIn = useCallback(async (event: FormEvent, { email, password }) => {
    event.preventDefault()

    if ((!email || !password) || password.length < 8) {
      setError("Os dados informados são inválidos.")
      return
    }

    buttonRef.current.innerHTML = "Carregando..."

    api
      .post("/customers/authenticate", { email, password })
      .then(response => {
        localStorage.setItem("authenticationToken", response.data.token)
        router.replace("/")
      })
      .catch(() => {
        setError("Erro no servidor ao efetuar login.")
        buttonRef.current.innerHTML = "Crie sua conta no OpaFood"
      })
  }, [])

  return (
    <main className="mx-auto grid grid-cols-9 min-h-screen bg-primary">
      <aside 
        className="hidden sm:col-span-3 md:col-span-4 xl:col-span-5 sm:block bg-cover"
        style={{ backgroundImage: "url('/images/background.svg')"}}>
      </aside>
      
      <aside className="relative col-span-9 sm:col-span-6 md:col-span-5 xl:col-span-4 bg-light py-8 px-16">
        <form 
          onSubmit={event => handleSignIn(event, { email, password })}
          className="flex flex-col justify-center w-full h-full">
          <h1 className="text-3xl md:text-4xl font-semibold text-dark mb-2">Log In</h1>

          <div className="space-y-2 mt-12">
            <label htmlFor="email" className="font-bold">E-mail</label>
            <input 
              type="email" 
              name="email"
              id="email"
              placeholder="Exemplo@dominio.com"
              spellCheck="false"
              autoComplete="off"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
              className="bg-white px-5 py-4 rounded-lg w-full border-2 border-transparent focus:border-primary transition duration-200 place"/>
          </div>

          <div className="space-y-2 mt-12">
            <label htmlFor="password" className="font-bold">Senha</label>
            <input 
              type="password"
              name="password"
              id="password"
              placeholder="Sua senha secreta"
              minLength={8}
              spellCheck="false"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
              className="bg-white px-5 py-4 rounded-lg w-full border-2 border-transparent focus:border-primary transition duration-200 place"/>
          </div>

          { error &&
            <span className="text-error font-medium text-sm leading-5 flex items-center mt-12">
              <FiInfo size={26} className="mr-2"/>
              {error}
              <br/>
              Por favor, tente novamente.
            </span>
          }

          <Link href="/esqueci-minha-senha">
            <a className="ml-auto my-8">
              Esqueci minha senha
            </a>
          </Link>

          <button
            type="submit"
            ref={buttonRef}
            className="bg-primary text-white rounded-xl py-4 px-6 font-bold hover:bg-opacity-90 transition duration-200">
            Conectar-se no OpaFood
          </button>

          <a className="mx-auto mt-10">
            Não possui conta?
            <Link href="/cadastro">
              <strong className="cursor-pointer text-primary">
                {' '}Cadastre-se
              </strong>
            </Link>
          </a>
        </form>
      </aside>
    </main>
  )
}

export default SignIn