import Footer from "../components/Footer"

const Home:React.FC = () => {
  return (
    <main className="mx-auto text-gray-700 grid grid-cols-7 min-h-screen bg-primary">
      <aside className="hidden md:col-span-3 md:flex justify-center items-center">
        <img className="w-7/12" src="/images/opafood.svg" alt="Logo" />
      </aside>

      <aside className="col-span-7 md:col-span-4 px-10 py-6 flex flex-col justify-center">
        <form className="flex flex-col justify-center bg-light w-full rounded-2xl p-8 shadow-xl space-y-5">
          <h1 className="text-3xl md:text-4xl font-semibold text-dark mb-6">Entrar</h1>
          <input 
            type="text" 
            name="email"
            placeholder="E-mail"
            spellCheck="false"
            className="bg-gray-200 px-5 py-3 rounded-lg text-lg w-full hover:bg-gray-300 focus:border-b focus:border-primary transition"/>
          <input 
            type="text" 
            name="password"
            placeholder="Senha"
            spellCheck="false"
            className="bg-gray-200 px-5 py-3 rounded-lg text-lg w-full hover:bg-gray-300 focus:border-b focus:border-primary transition"/>
        </form>
      </aside>
    </main>
  )
}

export default Home