const Footer: React.FC = () => {
  return (
    <footer className="hidden lg:block">
      <hr className="mt-14 mb-10"/>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <section>
          <h3 className="mb-6 font-medium">iFood</h3>
          <ul className="list-none block text-gray-500 space-y-6 tracking-tight">
            <li className="hover:text-gray-600 transition">
              <a href="#">Site Institucional</a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">Fale Conosco</a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">Carreiras</a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">iFood Colômbia</a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">SinDelantal</a>
            </li>
          </ul>
        </section>
        
        <section>
          <h3 className="mb-6 font-medium">Descubra</h3>
          <ul className="list-none block text-gray-500 space-y-6 tracking-tight">
            <li className="hover:text-gray-600 transition">
              <a href="#">Cadastre seu Restaurante ou Mercado</a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">iFood Shop</a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">iFood Empresas</a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">Blog iFood Empresas</a>
            </li>
          </ul>
        </section>

        <section>
          <h3 className="mb-6 font-medium">Social</h3>
          <ul className="flex flex-wrap items-center text-gray-500 space-x-8">
            <li className="hover:text-gray-600 transition">
              <a href="#">
                <svg width="1.8rem" height="1.8rem" viewBox="0 0 48 48" fill="#717171" xmlns="http://www.w3.org/2000/svg"><path d="M27.629 47V23.997h6.509L35 16.07h-7.371l.011-3.967c0-2.067.201-3.175 3.245-3.175h4.069V1h-6.51c-7.818 0-10.57 3.845-10.57 10.312v4.76H13v7.926h4.874V47h9.755z"></path></svg>
              </a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">
              <svg width="1.8rem" height="1.8rem" viewBox="0 0 48 48" fill="#717171" xmlns="http://www.w3.org/2000/svg"><path d="M22.821 14.375l.102 1.686-1.698-.206c-6.18-.792-11.58-3.477-16.165-7.987L2.82 5.63l-.58 1.653c-1.222 3.683-.441 7.574 2.106 10.19 1.358 1.446 1.053 1.652-1.29.792-.816-.276-1.529-.482-1.597-.379-.237.241.578 3.374 1.223 4.613.883 1.721 2.683 3.408 4.652 4.407L9 27.697l-1.97.035c-1.901 0-1.969.034-1.765.757.679 2.238 3.362 4.613 6.35 5.646l2.106.723-1.834 1.102c-2.717 1.583-5.909 2.478-9.101 2.547-1.528.035-2.785.172-2.785.275 0 .345 4.143 2.273 6.554 3.03 7.234 2.238 15.826 1.274 22.278-2.548 4.585-2.72 9.17-8.124 11.309-13.357 1.154-2.788 2.31-7.883 2.31-10.328 0-1.583.101-1.79 2.003-3.683 1.12-1.102 2.173-2.307 2.377-2.65.34-.655.306-.655-1.426-.07-2.887 1.033-3.294.895-1.868-.654 1.053-1.101 2.31-3.098 2.31-3.683 0-.104-.51.069-1.088.378-.61.345-1.97.861-2.988 1.17l-1.834.586-1.664-1.136c-.917-.62-2.207-1.308-2.887-1.515-1.732-.482-4.38-.413-5.943.138-4.245 1.55-6.928 5.542-6.622 9.915z"></path></svg>
              </a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">
              <svg width="1.8rem" height="1.8rem" viewBox="0 0 48 48" fill="#717171" xmlns="http://www.w3.org/2000/svg"><path d="M47 12.4A6 6 0 0 0 42.8 8C39 7 24 7 24 7S9 7 5.2 8A6 6 0 0 0 1 12.4c-1 3.8-1 11.8-1 11.8s0 8 1 12a6 6 0 0 0 4.2 4.3c3.8 1 18.8 1 18.8 1s15 0 18.8-1A6 6 0 0 0 47 36c1-3.8 1-11.9 1-11.9s0-8-1-11.8z"></path><path className="icon-youtube-play" fill="#fff" d="M19.5 32.5v-15l12 7.5-12 7.5z"></path></svg>
              </a>
            </li>
            <li className="hover:text-gray-600 transition">
              <a href="#">
              <svg width="1.8rem" height="1.8rem" viewBox="0 0 48 48" fill="#717171" xmlns="http://www.w3.org/2000/svg"><path d="M34.03 0H12.97C5.818 0 0 5.819 0 12.97v21.06C0 41.18 5.818 47 12.97 47h21.06C41.18 47 47 41.18 47 34.03V12.97C47 5.82 41.18 0 34.03 0zm8.8 34.03c0 4.852-3.948 8.8-8.8 8.8H12.97c-4.852 0-8.8-3.948-8.8-8.8V12.97c0-4.852 3.948-8.8 8.8-8.8h21.06c4.852 0 8.8 3.948 8.8 8.8v21.06z"></path><path d="M23.5 11.39c-6.678 0-12.11 5.433-12.11 12.11 0 6.678 5.432 12.11 12.11 12.11 6.678 0 12.11-5.432 12.11-12.11 0-6.677-5.432-12.11-12.11-12.11zm0 20.05c-4.378 0-7.94-3.562-7.94-7.94s3.561-7.94 7.94-7.94c4.378 0 7.94 3.562 7.94 7.94s-3.562 7.94-7.94 7.94zM36.118 7.854a3.07 3.07 0 0 0-2.16.895 3.073 3.073 0 0 0-.898 2.163c0 .804.328 1.593.898 2.163a3.081 3.081 0 0 0 2.16.895c.807 0 1.593-.328 2.163-.895.57-.57.895-1.36.895-2.163 0-.806-.325-1.596-.895-2.163a3.071 3.071 0 0 0-2.163-.895z"></path></svg>
              </a>
            </li>
          </ul>
        </section>
      </section>

      <hr className="my-10"/>

      <section className="flex items-center justify-between">
        <svg width="3rem" height="3rem" viewBox="0 0 49 43" fill="#ea1d2c" xmlns="http://www.w3.org/2000/svg"><path d="M11.34 21.34c8.49 0 14.37-7.71 14.37-14 0-4.58-4.35-6.59-8.49-6.59-9.3 0-14.37 8.3-14.37 14 0 4.59 4.4 6.6 8.5 6.6zm22.66 0c8.49 0 14.37-7.71 14.37-14 0-4.58-4.36-6.59-8.49-6.59-9.3 0-14.37 8.3-14.37 14 0 4.59 4.4 6.6 8.5 6.6m3.91 14.41c-5.25 4.45-12.27 6.74-19.9 6.26A19.2 19.2 0 0 1 .36 26.5h.46a17.83 17.83 0 0 0 14.05 9.97c6.46.71 14.37-2.2 18.71-6.34l-4.87-3.67 14.47.04-3.11 15.25-2.16-5.98z"></path></svg>

        <ul className="list-none flex items-center text-gray-500 space-x-4 tracking-tight">
          <li className="hover:text-gray-600 transition">
            <a href="#">Termos e condições de uso</a>
          </li>
          <li className="hover:text-gray-600 transition">
            <a href="#">Código de conduta</a>
          </li>
          <li className="hover:text-gray-600 transition">
            <a href="#">Privacidade</a>
          </li>
          <li className="hover:text-gray-600 transition">
            <a href="#">Dicas de segurança</a>
          </li>
        </ul>
      </section>
    </footer>
  )
}

export default Footer