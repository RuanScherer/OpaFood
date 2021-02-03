import Link from "next/link"
import Header from "../components/Header"
import Footer from "../components/Footer"

const Home:React.FC = () => {
  return (
    <>
      <Header />
      <main className="px-8 pb-20 lg:pb-8 pt-24 text-gray-700 container mx-auto">
        <ul className="list-none hidden lg:flex items-center justify-center">
          <li className="flex flex-col items-center cursor-pointer mx-3 my-2">
            <Link href="/buscar">
              <>
                <img className="w-32 transform transition hover:scale-105" src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/Lanches-out_20.jpg"/>
                <span className="text-gray-700 font-light mt-2 transition hover:text-gray-900">Lanches</span>
              </>
            </Link>
          </li>
          <li className="flex flex-col items-center cursor-pointer mx-3 my-2">
            <Link href="/buscar">
              <>
                <img className="w-32 transform transition hover:scale-105" src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/Pizza-out_20.jpg"/>
                <span className="text-gray-700 font-light mt-2 transition hover:text-gray-900">Pizza</span>
              </>
            </Link>
          </li>
          <li className="flex flex-col items-center cursor-pointer mx-3 my-2">
            <Link href="/buscar">
              <>
                <img className="w-32 transform transition hover:scale-105" src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/Japonesa-out_20.jpg"/>
                <span className="text-gray-700 font-light mt-2 transition hover:text-gray-900">Japonesa</span>
              </>
            </Link>
          </li>
          <li className="flex flex-col items-center cursor-pointer mx-3 my-2">
            <Link href="/buscar">
              <>
                <img className="w-32 transform transition hover:scale-105" src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/Italiana-out_20.jpg"/>
                <span className="text-gray-700 font-light mt-2 transition hover:text-gray-900">Italiana</span>
              </>
            </Link>
          </li>
          <li className="flex flex-col items-center cursor-pointer mx-3 my-2">
            <Link href="/buscar">
              <>
                <img className="w-32 transform transition hover:scale-105" src="https://static-images.ifood.com.br/image/upload/t_low/discoveries/Arabe-out_20.jpg"/>
                <span className="text-gray-700 font-light mt-2 transition hover:text-gray-900">Árabe</span>
              </>
            </Link>
          </li>
        </ul>

        <section className="flex flex-col">
          <header className="flex items-center justify-between">
            <h2 className="text-xl font-medium mt-0">Famosos no iFood</h2>
            <Link href="/famosos">
              <a className="text-red-600 text-sm">Ver mais</a>
            </Link>
          </header>
          
          <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/202001210955_f9bd8444-2c84-4863-9c9a-bea9dcf96d9c.png"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Don Corleone Pizza 24h</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.2</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Pizza
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  6,8 km
                </span>
                <span className="text-sm font-light">
                  39-49 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 12,00
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/16f3846b-f124-44aa-bcf0-0b69f230ed34/201803191725_perfi.jpg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Toque e Tempero</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.5</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Brasiliera
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  6,7 km
                </span>
                <span className="text-sm font-light">
                  90-100 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 8,00
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/2a47bc8a-2864-49fe-ac33-952b55794574/202005111448_7RAu_i.jpg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Benkendorff Kaffee24h</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.6</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Cafeteria
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  5,6 km
                </span>
                <span className="text-sm font-light">
                  60-70 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 14,99
                </span>
              </div>
            </li>
          </ul>
        </section>

        <img className="w-full mt-14" src="https://static-images.ifood.com.br/image/upload/t_high/discoveries/ifood-capas-gourmet-bisnaguinha_header_app-desktop.png"/>

        <section className="flex flex-col mt-8">
          <h2 className="text-xl font-medium mt-0">Últimas lojas</h2>
          
          <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/1ede00fd-6e8c-4531-a48b-e5fbff68ae0d/201903291109_nL8s_i.jpg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Paderia e Restaurante Bublitz</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.6</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Lanches
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  12,5 km
                </span>
                <span className="text-sm font-light">
                  90-100 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 17,00
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/logo%20titas_titas_rante.png"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Tita's Restaurante</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.5</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Brasileira
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  2,8 km
                </span>
                <span className="text-sm font-light">
                  60-70 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  <span className="text-green-600">Grátis</span>
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/b02b1baa-db86-48c3-a095-8fab68df4653/202004191122_GOfD_.jpeg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Ki Sabor Doces e Salgados</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.8</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Salgados
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  7,3 km
                </span>
                <span className="text-sm font-light">
                  90-100 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 9,00
                </span>
              </div>
            </li>
          </ul>
        </section>
        
        <section className="flex flex-col mt-16">
          <h2 className="text-xl font-medium mt-0">Restaurantes e mercados</h2>
          
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
          
          <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-7">
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/202001210955_f9bd8444-2c84-4863-9c9a-bea9dcf96d9c.png"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Don Corleone Pizza 24h</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.2</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Pizza
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  6,8 km
                </span>
                <span className="text-sm font-light">
                  39-49 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 12,00
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/16f3846b-f124-44aa-bcf0-0b69f230ed34/201803191725_perfi.jpg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Toque e Tempero</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.5</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Brasiliera
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  6,7 km
                </span>
                <span className="text-sm font-light">
                  90-100 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 8,00
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/2a47bc8a-2864-49fe-ac33-952b55794574/202005111448_7RAu_i.jpg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Benkendorff Kaffee24h</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.6</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Cafeteria
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  5,6 km
                </span>
                <span className="text-sm font-light">
                  60-70 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 14,99
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/54206dd2-474d-43cb-bfd5-4785935b71a6/201903141347_logoe.jpg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Assados e Espetinhos Portugal Velha</h2>
                <span className="flex items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.7</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Lanches
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  4,9 km
                </span>
                <span className="text-sm font-light">
                  70-80 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 12,90
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/1ede00fd-6e8c-4531-a48b-e5fbff68ae0d/201903291109_nL8s_i.jpg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Paderia e Restaurante Bublitz</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.6</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Lanches
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  12,5 km
                </span>
                <span className="text-sm font-light">
                  90-100 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 17,00
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/logo%20titas_titas_rante.png"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Tita's Restaurante</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.5</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Brasileira
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  2,8 km
                </span>
                <span className="text-sm font-light">
                  60-70 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  <span className="text-green-600">Grátis</span>
                </span>
              </div>
            </li>
            <li className="cursor-pointer border border-gray-300 rounded-sm flex items-center overflow-x-hidden hover:border-gray-400 transition">
              <div className="py-3 px-4 lg:p-5 w-20 sm:w-24 md:w-28 lg:w-32">
                <img className="rounded-md" src="https://static-images.ifood.com.br/image/upload/t_thumbnail/logosgde/b02b1baa-db86-48c3-a095-8fab68df4653/202004191122_GOfD_.jpeg"/>
              </div>
              <hr className="h-4/6 w-px my-auto border border-l border-t-0 border-r-0 border-b-0 border-gray-300"/>
              <div className="flex flex-col justify-around h-full p-3 lg:p-5 max-w-full overflow-x-hidden space-y-1 lg:space-y-2">
                <h2 className="text-sm sm:text-base text-gray-800 font-medium truncate">Ki Sabor Doces e Salgados</h2>
                <span className="flex flex-wrap items-center text-sm font-light">
                  <svg width=".8rem" height=".8rem" fill="#e7a74e" viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M5.483.314l1.128 2.39a.54.54 0 0 0 .405.308l2.522.383c.442.067.618.635.299.96l-1.825 1.86a.58.58 0 0 0-.155.499l.43 2.626c.076.46-.386.811-.78.594L5.25 8.694a.518.518 0 0 0-.502 0l-2.255 1.24c-.395.217-.857-.134-.782-.594l.431-2.626a.58.58 0 0 0-.155-.499L.163 4.355c-.32-.326-.143-.893.299-.96l2.522-.383a.54.54 0 0 0 .405-.308L4.517.314a.528.528 0 0 1 .966 0z"></path></svg>
                  <span className="font-semibold yellow ml-2">4.8</span>
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  Salgados
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  7,3 km
                </span>
                <span className="text-sm font-light">
                  90-100 min
                  <span className="mx-2 text-gray-500">&#8226;</span>
                  R$ 9,00
                </span>
              </div>
            </li>
          </ul>
          <button className="mt-8 border border-gray-300 px-5 py-3 rounded-md text-red-600 text-center font-medium hover:bg-red-600 hover:border-red-600 hover:text-white transition">Ver mais restaurantes e mercados</button>
        </section>
        
        <Footer />
      </main>
    </>
  )
}

export default Home