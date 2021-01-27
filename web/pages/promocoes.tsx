import Footer from "../components/Footer"
import Header from "../components/Header"

const Home:React.FC = () => {
  return (
    <>
      <Header/>
      <main className="px-8 pb-20 lg:pb-8 pt-28 text-gray-700 container mx-auto">
        <img className="w-full rounded-md" src="https://static-images.ifood.com.br/image/upload/t_high/discoveries/ifood-capas-novas-promo-perto_header.jpg"/>
        
        <section className="flex flex-col mt-8">
          <h2 className="text-2xl font-semibold mt-0">Promoções para você</h2>
          <h3 className="text-gray-600 mt-0 leading-5">Pra sua fome de desconto</h3>
          
          <div className="flex items-center flex-wrap mt-5">
            <button className="bg-gray-100 md:bg-white border border-gray-300 mr-3 mb-3 px-3 py-2 md:px-6 md:py-2 text-sm md:text-base text-gray-500 rounded-full hover:bg-gray-50 transition">Entrega</button>
            <button className="bg-gray-100 md:bg-white border border-gray-300 mr-3 mb-3 px-3 py-2 md:px-6 md:py-2 text-sm md:text-base text-gray-500 rounded-full hover:bg-gray-50 transition">Cozinhas</button>
            <button className="bg-gray-100 md:bg-white border border-gray-300 mr-3 mb-3 px-3 py-2 md:px-6 md:py-2 text-sm md:text-base text-gray-500 rounded-full hover:bg-gray-50 transition">Pagamento</button>
            <button className="bg-gray-100 md:bg-white border border-gray-300 mr-3 mb-3 px-3 py-2 md:px-6 md:py-2 text-sm md:text-base text-gray-500 rounded-full hover:bg-gray-50 transition">Distância</button>
            <button className="bg-gray-100 md:bg-white border border-gray-300 mr-3 mb-3 px-3 py-2 md:px-6 md:py-2 text-sm md:text-base text-gray-500 rounded-full hover:bg-gray-50 transition">Super-restaurantes</button>
            <button className="bg-gray-100 md:bg-white border border-gray-300 mr-3 mb-3 px-3 py-2 md:px-6 md:py-2 text-sm md:text-base text-gray-500 rounded-full hover:bg-gray-50 transition">
              Ordenar
              <svg width="10" height="5" className="inline-block ml-2" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M.186.274A.762.762 0 0 1 1.273.19L9 6.931 16.727.19a.762.762 0 0 1 1.087.085c.277.33.24.825-.083 1.108L9 9 .27 1.382A.795.795 0 0 1 .185.274z" fill="rgba(107, 114, 128)"></path></svg>
            </button>
          </div>
          
          <ul className="list-none grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-7">
            <li className="cursor-pointer border border-gray-300 rounded-sm hover:border-gray-400 transition p-5">
              <header className="overflow-hidden flex items-center">
                <img className="w-14 rounded-full mr-4" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/2a47bc8a-2864-49fe-ac33-952b55794574/202005111448_7RAu_i.jpg"/>
                <h2 className="text-lg text-gray-800 font-medium leading-6">Benkendorff Kaffee24h</h2>
              </header>
              <p className=" text-gray-500 leading-5 text-sm mt-3">Na compra de um pedaço de bolo você ganha outro!</p>
              <span className="text-green-500 font-medium mt-8 pt-2 border-t-2 border-dashed border-gray-300 block">R$ 8,90</span>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm hover:border-gray-400 transition p-5">
              <header className="overflow-hidden flex items-center">
                <img className="w-14 rounded-full mr-4" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/e547cc5c-fe0f-4042-bbc3-e2f723dd66bc/201909211636_WhhZ_i.png"/>
                <h2 className="text-lg text-gray-800 font-medium leading-6">Mafia Burguer</h2>
              </header>
              <p className=" text-gray-500 leading-5 text-sm mt-3">2 mafia italiana + 250gr batata + 200gr onion + Guaraná 1,5l</p>
              <span className="text-green-500 font-medium mt-8 pt-2 border-t-2 border-dashed border-gray-300 block">A partir de R$ 79,01</span>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm hover:border-gray-400 transition p-5">
              <header className="overflow-hidden flex items-center">
                <img className="w-14 rounded-full mr-4" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/sem%20titulo_megabatata.png"/>
                <h2 className="text-lg text-gray-800 font-medium leading-6">Mega Batata</h2>
              </header>
              <p className=" text-gray-500 leading-5 text-sm mt-3">Deliciosa batata de salmão preparada com alho poró.</p>
              <span className="text-green-500 font-medium mt-8 pt-2 border-t-2 border-dashed border-gray-300 block">R$ 31,00</span>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm hover:border-gray-400 transition p-5">
              <header className="overflow-hidden flex items-center">
                <img className="w-14 rounded-full mr-4" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/11a31e75-848e-448c-9e9b-28baf379b201/202101071817_QoZI_i.jpg"/>
                <h2 className="text-lg text-gray-800 font-medium leading-6">Subway Bairro Velha</h2>
              </header>
              <p className=" text-gray-500 leading-5 text-sm mt-3">15cm frango teriaky e cheddar + refri 350ml.</p>
              <span className="text-green-500 font-medium mt-8 pt-2 border-t-2 border-dashed border-gray-300 block">R$ 25,99</span>
            </li>
          </ul>
        </section>
        
        <Footer />
      </main>
    </>
  )
}

export default Home