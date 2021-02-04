import { useRouter } from "next/router"

const VerifyYourEmail: React.FC = () => {
  const router = useRouter()

  return (
    <main className="mx-auto grid grid-cols-9 min-h-screen py-14 lg:p-20 xl:p-24">
      <aside className="col-span-9 md:col-span-4 xl:col-span-5 flex items-center justify-center md:justify-start mb-6 md:mb-0">
        <img 
          className="w-80 md:w-full max-w-xl"
          src="/images/email-ballons.svg"
          alt="E-mail ballons illustration"/>
      </aside>

      <aside className="col-span-9 md:col-span-5 xl:col-span-4 flex flex-col items-center justify-center md:items-start text-center md:text-left py-8 px-16">
        <h1 className="text-3xl md:text-4xl font-semibold text-dark">Verifique seu e-mail!</h1>

        <span className="text-gray-600 font-medium md:text-lg flex items-center mb-8 mt-3 md:my-5">
          Para concluir, você precisa confirmar seu e-mail.
        </span>

        <button
          onClick={() => router.push("/")}
          className="w-full bg-primary text-white rounded-xl py-4 px-6 font-bold hover:bg-opacity-90 transition duration-200">
          Entendido
        </button>
      </aside>
    </main>
  )
}

export default VerifyYourEmail