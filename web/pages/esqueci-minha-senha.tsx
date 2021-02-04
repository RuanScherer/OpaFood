import { useRouter } from "next/router"
import { FormEvent, useEffect, useRef, useState } from "react"
import api from "../services/api"
import { FiInfo } from 'react-icons/fi'

const ForgotMyPassword: React.FC = () => {
  const [email, setEmail] = useState("")
  const [error, setError] = useState("")
  const buttonRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("authenticationToken")) router.back()
  }, [])

  const handleGetResetPasswordToken = async (event: FormEvent) => {
    event.preventDefault()

    if (!email) return
    
    buttonRef.current.innerHTML = "Carregando..."

    api
      .post("/customers/getPasswordResetToken", { email })
      .then(() => router.push("verifique-seu-email"))
      .catch(() => {
        setError("Erro no servidor ao processar sua solicitação.")
        buttonRef.current.innerHTML = "Enviar o link para meu e-mail"
      })
  }

  return (
    <main className="mx-auto grid grid-cols-9 min-h-screen py-14 lg:p-20 xl:p-24">
      <aside className="col-span-9 md:col-span-4 xl:col-span-5 flex items-center justify-center md:justify-start mb-6 md:mb-0">
        <img 
          className="w-80 md:w-full max-w-xl"
          src="/images/send-mail-reset.svg"
          alt="Illustration"/>
      </aside>

      <form 
        onSubmit={handleGetResetPasswordToken}
        className="col-span-9 md:col-span-5 xl:col-span-4 flex flex-col items-center justify-center md:items-start text-center md:text-left py-8 px-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-dark">Esqueceu sua senha?</h1>

        <span className="text-gray-600 font-medium md:text-lg flex items-center mt-3 md:mt-5">
          Insira seu e-mail para receber o link de redefinição.
        </span>

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
          className="bg-white my-8 px-5 py-4 rounded-lg w-full border-2 border-transparent focus:border-primary transition duration-200"/>

        { error &&
          <span className="text-error font-medium text-sm leading-5 flex items-center mb-8">
            <FiInfo size={26} className="mr-2"/>
            {error}
            <br/>
            Por favor, tente novamente.
          </span>
        }

        <button
          ref={buttonRef}
          className="w-full bg-primary text-white rounded-xl py-4 px-6 font-bold hover:bg-opacity-90 transition duration-200">
          Enviar o link para meu e-mail
        </button>
      </form>
    </main>
  )
}

export default ForgotMyPassword