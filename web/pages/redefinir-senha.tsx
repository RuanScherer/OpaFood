import { useRouter } from 'next/router'
import { FormEvent, useCallback, useRef, useState } from 'react'
import { FiInfo } from 'react-icons/fi'

const ResetPassword:React.FC = () => {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const buttonRef = useRef(null)
  const router = useRouter()

  const handleSignIn = useCallback(async (event: FormEvent, { password, confirmPassword }) => {
    event.preventDefault()

    if (password.length < 8 || password !== confirmPassword) {
      setError("A senha informada é muito curta ou as senhas não conferem.")
      return
    }

    buttonRef.current.innerHTML = "Carregando..."

    router.replace("/senha-redefinida")
  }, [])

  return (
    <main className="mx-auto grid grid-cols-9 min-h-screen bg-primary">
      <aside 
        className="hidden sm:col-span-3 md:col-span-4 xl:col-span-5 sm:block bg-cover"
        style={{ backgroundImage: "url('/images/background.svg')"}}>
      </aside>
      
      <aside className="relative col-span-9 sm:col-span-6 md:col-span-5 xl:col-span-4 bg-light py-8 px-16">
        <form 
          onSubmit={event => handleSignIn(event, { password, confirmPassword })}
          className="flex flex-col justify-center w-full h-full">
          <h1 className="text-3xl md:text-4xl font-semibold text-dark mb-2">Redefinição de senha</h1>

          <div className="space-y-2 mt-12">
            <label htmlFor="password" className="font-bold">Senha</label>
            <input 
              type="password"
              name="password"
              id="password"
              placeholder="Nova senha"
              minLength={8}
              spellCheck="false"
              value={password}
              onChange={event => setPassword(event.target.value)}
              required
              className="bg-white px-5 py-4 rounded-lg w-full border-2 border-transparent focus:border-primary transition duration-200 place"/>
          </div>

          <div className="space-y-2 mt-12">
            <label htmlFor="confirm-password" className="font-bold">Confirmar senha</label>
            <input 
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Confirme sua nova senha"
              minLength={8}
              spellCheck="false"
              value={confirmPassword}
              onChange={event => setConfirmPassword(event.target.value)}
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

          <button
            type="submit"
            ref={buttonRef}
            className="bg-primary text-white rounded-xl py-4 px-6 font-bold hover:bg-opacity-90 transition duration-200 mt-10">
            Redefinir minha senha
          </button>
        </form>
      </aside>
    </main>
  )
}

export default ResetPassword