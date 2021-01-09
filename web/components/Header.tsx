import Link from "next/link"
import { useRouter } from "next/router"
import PromotionBanner from "./PromotionBanner"

const Header: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <div className="fixed w-screen z-40">
        <header className="flex justify-between items-center px-8 py-4 lg:py-3 bg-white border-gray-200 border shadow-md">
          <Link href="/">
            <svg width="80" height="43" viewBox="0 0 80 43" fill="#ea1d2c" className="hidden sm:block cursor-pointer" xmlns="http://www.w3.org/2000/svg"><path d="M0 24.258h6.09L9.498 7.472h-6.09L0 24.258zM3.947 4.836h6.087L11.016 0H4.922l-.975 4.836zM8.498 28.985h6.09l3.695-18.167h4.444l.7-3.346h-4.482l.154-.776c.286-1.431.751-3.096 3.047-3.096 1.361 0 2.665.148 3.93.68L26.77.744A13.22 13.22 0 0 0 22.381 0c-4.894 0-8.265 2.914-9.499 7.472h-2.114l-.662 3.346h2.084L8.498 28.985z"></path><path d="M27.79 24.633c7.19 0 12.18-6.569 12.18-11.927 0-3.902-3.688-5.608-7.195-5.608-7.89 0-12.183 7.063-12.183 11.927 0 3.902 3.726 5.608 7.198 5.608zM47 24.633c7.192 0 12.181-6.569 12.181-11.927 0-3.902-3.696-5.608-7.199-5.608-7.886 0-12.186 7.063-12.186 11.927 0 3.902 3.73 5.608 7.202 5.608M69.082 24.258h6.055L80 .374h-6.09l-1.451 7.097a12.51 12.51 0 0 0-2.46-.281c-5.966 0-11.391 7.588-11.391 13.011 0 2.231 1.45 4.43 3.912 4.43 3.5 0 5.921-1.712 6.932-3.317h.378l-.748 2.944zM50.322 36.91c-4.454 3.792-10.408 5.739-16.879 5.337-8.16-.502-13.816-6.82-14.954-13.227h.387c1.836 4.091 6.304 7.869 11.911 8.49 5.475.604 12.184-1.87 15.866-5.402l-4.13-3.124 12.263.036-2.639 12.983-1.825-5.093z"></path></svg>
          </Link>

          <div className="hidden lg:flex items-center px-4 py-3 bg-gray-100 rounded border-gray-200 border">
            <span className="mr-2">
              <svg width="1.6rem" height="1.6rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="#3F3E3E" fill-rule="evenodd"><path d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z" fill-rule="nonzero"></path><rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width="3" height="12" rx="1.5"></rect></g></svg>
            </span>
            <input 
              type="text"
              placeholder="Busque por item ou loja"
              name="search"
              className="bg-transparent w-96"
            />
          </div>

          <div className="flex flex-col leading-3">
            <legend className="uppercase text-gray-500 text-sm">ENTREGAR EM</legend>
            <div className="flex items-center cursor-pointer hover:opacity-70 transition">
              <span className="mr-2">
                <svg width="1.3rem" height="1.3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style></style><path className="st0" d="M22.4 9.4L12 2.1 1.6 9.4c-.3.2-.4.7-.2 1 .2.3.7.4 1 .2l.6-.4V18c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-7.8l.6.4c.3.2.8.2 1-.2.3-.3.2-.8-.2-1zM9.5 20.5V16c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v4.5h-5zm10-2.5c0 1.4-1.1 2.5-2.5 2.5h-1V16c0-2.2-1.8-4-4-4s-4 1.8-4 4v4.5H7c-1.4 0-2.5-1.1-2.5-2.5V9.2L12 3.9l7.5 5.2V18z"></path></svg>
              </span>
              <span>R. Valdemiro Dias, 60</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-5 font-light">
            <Link href="/promocoes">
              <a href="#" className="flex items-center hover:opacity-70 transition">
                <span className="mr-2">
                  <svg width="1.5rem" height="1.5rem" viewBox="0 0 24 24" fill="#3F3E3E" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M22.404 12.31a.703.703 0 0 1 0-.62l.895-1.832a2.083 2.083 0 0 0-.899-2.767l-1.8-.955a.703.703 0 0 1-.366-.503l-.352-2.007a2.084 2.084 0 0 0-2.353-1.71L15.51 2.2a.703.703 0 0 1-.591-.192L13.454.592a2.083 2.083 0 0 0-2.91 0L9.082 2.009a.704.704 0 0 1-.592.192l-2.018-.285a2.083 2.083 0 0 0-2.353 1.71l-.352 2.007a.703.703 0 0 1-.366.503l-1.8.955a2.083 2.083 0 0 0-.9 2.767l.896 1.831a.703.703 0 0 1 0 .622L.7 14.142A2.083 2.083 0 0 0 1.6 16.91l1.8.955a.703.703 0 0 1 .366.503l.352 2.008a2.082 2.082 0 0 0 2.353 1.71l2.018-.286c.218-.03.434.04.592.192l1.465 1.417a2.085 2.085 0 0 0 2.909 0l1.464-1.417a.704.704 0 0 1 .592-.192l2.018.286a2.083 2.083 0 0 0 2.353-1.71l.352-2.008a.703.703 0 0 1 .366-.503l1.8-.955a2.083 2.083 0 0 0 .9-2.767l-.896-1.831zm-.652 3.376l-1.8.955a2.078 2.078 0 0 0-1.08 1.487l-.353 2.007a.705.705 0 0 1-.796.579l-2.018-.285a2.078 2.078 0 0 0-1.748.567l-1.465 1.417a.705.705 0 0 1-.984 0l-1.465-1.417a2.076 2.076 0 0 0-1.748-.568l-2.018.286a.705.705 0 0 1-.796-.579l-.352-2.007a2.078 2.078 0 0 0-1.08-1.487l-1.8-.955a.705.705 0 0 1-.305-.936l.895-1.831a2.079 2.079 0 0 0 0-1.838l-.895-1.83a.705.705 0 0 1 .304-.937l1.8-.955a2.079 2.079 0 0 0 1.08-1.487l.353-2.007a.705.705 0 0 1 .796-.579l2.018.286a2.079 2.079 0 0 0 1.748-.568l1.465-1.417a.705.705 0 0 1 .984 0l1.465 1.417a2.078 2.078 0 0 0 1.747.568l2.019-.286c.38-.054.73.2.796.579l.352 2.007c.112.64.506 1.182 1.08 1.487l1.8.955c.34.18.473.591.305.936l-.896 1.831a2.08 2.08 0 0 0 0 1.838l.896 1.83a.705.705 0 0 1-.305.937z"></path><path d="M17.057 6.943a.692.692 0 0 0-.979 0l-9.135 9.135a.692.692 0 0 0 .979.98l9.135-9.136a.692.692 0 0 0 0-.98zM9.232 5.771a2.54 2.54 0 0 0-2.538 2.538 2.54 2.54 0 0 0 2.538 2.538 2.54 2.54 0 0 0 2.537-2.538A2.54 2.54 0 0 0 9.232 5.77zm0 3.691A1.155 1.155 0 0 1 8.078 8.31a1.155 1.155 0 0 1 2.307 0c0 .636-.517 1.153-1.153 1.153zM14.768 13.153a2.54 2.54 0 0 0-2.537 2.538 2.54 2.54 0 0 0 2.537 2.538 2.54 2.54 0 0 0 2.538-2.538 2.54 2.54 0 0 0-2.538-2.538zm0 3.692a1.155 1.155 0 0 1-1.153-1.154c0-.636.517-1.153 1.153-1.153s1.154.517 1.154 1.153-.518 1.154-1.154 1.154z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>
                </span>
                <span className="hidden xl:block">Promoções</span>
              </a>
            </Link>
            <a href="#" className="flex items-center hover:opacity-70 transition">
              <span className="mr-2">
                <svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" fill="#3F3E3E" viewBox="0 0 24 24"><path className="st0" d="M12 12.5C9 12.5 6.5 10 6.5 7S9 1.5 12 1.5 17.5 4 17.5 7 15 12.5 12 12.5zM12 3C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM17 15.5c1.4 0 2.5 1.1 2.5 2.5v2.5h-15V18c0-1.4 1.1-2.5 2.5-2.5h10m0-1.5H7c-2.2 0-4 1.8-4 4v4h18v-4c0-2.2-1.8-4-4-4z"></path></svg>
              </span>
              <span className="hidden xl:block">Perfil</span>
            </a>
            <a href="#" className="flex items-center hover:opacity-70 transition">
              <span className="mr-2">
                <svg width="1.5rem" height="1.5rem" xmlns="http://www.w3.org/2000/svg" fill="#3F3E3E" viewBox="0 0 18 23"><style>.st0{'{'}fill-rule:evenodd;clip-rule:evenodd{'}'}</style><path className="st0" d="M8.7.2c-1.1 0-2 .3-2.6.9-.6.6-1 1.4-1.2 2.2-.2.6-.3 1.1-.3 1.7H2C.9 5 0 5.9 0 7l.1 13c0 1.7 1.3 3 3 3H15c1.7 0 3-1.3 3-3V7c0-1.1-.9-2-2-2h-3.2c-.1-.6-.1-1.1-.3-1.6-.2-.8-.6-1.7-1.2-2.2-.7-.6-1.5-1-2.6-1zm2.7 6.3v2.6c0 .4.3.7.8.7.4 0 .7-.3.7-.8v-.8-1.8H16c.3 0 .5.2.5.5l-.1 13c0 .8-.7 1.5-1.5 1.5H3.1c-.8 0-1.5-.7-1.5-1.5L1.5 7c0-.3.2-.5.5-.5h2.5v2.6c0 .4.3.8.7.8.4 0 .8-.4.8-.8v-.8-1.8h5.4zM11.3 5c0-.4-.1-.8-.2-1.2-.2-.7-.4-1.2-.8-1.5-.4-.3-.8-.5-1.6-.5s-1.3.2-1.6.5c-.4.3-.6.8-.8 1.5-.1.4-.2.8-.2 1.2h5.2z"></path></svg>
              </span>
              <span className="hidden xl:block">Sacola</span>
            </a>
          </nav>
        </header>
        { (router.pathname === '/') && <PromotionBanner/> }
      </div>

      <footer className="fixed bottom-0 bg-white px-8 py-1 w-screen flex lg:hidden items-center justify-around border-gray-100 border-t">
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <span className="mb-1">
            <svg width="1.3rem" height="1.3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><style></style><path className="st0" d="M22.4 9.4L12 2.1 1.6 9.4c-.3.2-.4.7-.2 1 .2.3.7.4 1 .2l.6-.4V18c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-7.8l.6.4c.3.2.8.2 1-.2.3-.3.2-.8-.2-1zM9.5 20.5V16c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v4.5h-5zm10-2.5c0 1.4-1.1 2.5-2.5 2.5h-1V16c0-2.2-1.8-4-4-4s-4 1.8-4 4v4.5H7c-1.4 0-2.5-1.1-2.5-2.5V9.2L12 3.9l7.5 5.2V18z"></path></svg>
          </span>
          <legend className="text-xs">Início</legend>
        </a>
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <span className="mb-1">
            <svg width="1.3rem" height="1.3rem" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><g fill="#3F3E3E" fill-rule="evenodd"><path d="M22 37c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0 3c-9.941 0-18-8.059-18-18S12.059 4 22 4s18 8.059 18 18-8.059 18-18 18z" fill-rule="nonzero"></path><rect transform="rotate(-45 37.793 38.293)" x="36.293" y="32.293" width="3" height="12" rx="1.5"></rect></g></svg>
          </span>
          <legend className="text-xs">Buscar</legend>
        </a>
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <span className="mb-1">
            <svg width="1.3rem" height="1.3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 17.8l3.75 2 3.75-2L18 19V4H6v15l2.25-1.2zm7.5 1.7l3.015 1.608a.5.5 0 0 0 .735-.441V3.5a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1v17.167a.5.5 0 0 0 .735.44L8.25 19.5l3.515 1.875a.5.5 0 0 0 .47 0L15.75 19.5z" fill="#3F3E3E"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7.855 9.88c0-.458.371-.828.828-.828h6.462a.828.828 0 1 1 0 1.655H8.683a.828.828 0 0 1-.828-.828zM7.855 13.037c0-.457.371-.827.828-.827h6.462a.828.828 0 1 1 0 1.655H8.683a.828.828 0 0 1-.828-.828z" fill="#3F3E3E"></path></svg>
          </span>
          <legend className="text-xs">Pedidos</legend>
        </a>
        <a className="flex flex-col items-center hover:opacity-70 transition cursor-pointer">
          <span className="mb-1">
          <svg width="1.3rem" height="1.3rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path className="st0" d="M12 12.5C9 12.5 6.5 10 6.5 7S9 1.5 12 1.5 17.5 4 17.5 7 15 12.5 12 12.5zM12 3C9.8 3 8 4.8 8 7s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zM17 15.5c1.4 0 2.5 1.1 2.5 2.5v2.5h-15V18c0-1.4 1.1-2.5 2.5-2.5h10m0-1.5H7c-2.2 0-4 1.8-4 4v4h18v-4c0-2.2-1.8-4-4-4z"></path></svg>
          </span>
          <legend className="text-xs">Perfil</legend>
        </a>
      </footer>
    </>
  )
}

export default Header