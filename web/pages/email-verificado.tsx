import { useRouter } from "next/router"

const EmailVerified: React.FC = () => {
  const router = useRouter()

  return (
    <main className="mx-auto grid grid-cols-9 min-h-screen py-14 lg:p-20 xl:p-24">
      <aside className="col-span-9 md:col-span-5 xl:col-span-4 flex flex-col items-center justify-center md:items-start text-center md:text-left py-8 px-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-dark">E-mail verificado com sucesso!</h1>

        <p className="text-gray-600 font-medium md:text-lg flex items-center mb-8 mt-3 md:my-5">
          Agora você já pode acessar sua conta. Aproveite a plataforma!
        </p>

        <button
          onClick={() => router.push("entrar")}
          className="w-full bg-primary text-white rounded-xl py-4 px-6 font-bold hover:bg-opacity-90 transition duration-200">
          Prosseguir para página de login
        </button>
      </aside>
      
      <aside className="col-span-9 md:col-span-4 xl:col-span-5 flex items-center justify-center md:justify-start">
        <img 
          className="md:fixed bottom-0 w-80 md:w-3/5 xl:w-full max-w-xl max-h-full pt-14 lg:pt-20 xl:pt-24"
          src="/images/email-verified.svg"
          alt="E-mail verified illustration"/>
      </aside>
    </main>
  )
}

export default EmailVerified