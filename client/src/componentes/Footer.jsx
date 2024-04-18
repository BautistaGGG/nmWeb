import iconoIG from "../assets/logo_ig.png";
import iconoTiktok from "../assets/logo_tiktok.png";
import iconoYoutube from "../assets/logo_youtube.png";

function Footer() {
  return (
    <div>
      {/*   <section className="bg-[#040404] dark:bg-gray-900" id="newsletter">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md sm:text-center">
            <h2 className="mb-4 text-3xl text-center tracking-tight font-extrabold text-white sm:text-4xl dark:text-white">
              Suscríbete a nuestro newsletter
            </h2>
            <p className="mx-auto mb-8 text-center max-w-2xl font-light text-gray-500 md:mb-12 sm:text-x1 dark:text-gray-400">
              Súmate a nuestro newsletter semanal de fitness y recibí rutinas de
              ejercicios, consejos de alimentación saludables y ofertas en los
              distintos planes que ofrecemos. <br /> ¡Transforma tu vida,
              suscríbete ahora 🏋!
            </p>

            <form action="#">
              <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="relative w-full">
                  <label
                    htmlFor="email"
                    className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Email address
                  </label>
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                    </svg>
                  </div>
                  <input
                    className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg sm:rounded-none sm:rounded-l-lg focus:ring-[#82027D] focus:border-[#82027D]"
                    placeholder="Ingresa tu correo electrónico"
                    type="email"
                    id="email"
                    required=""
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-[#82027D] hover:bg-[#040404] py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border border-[#82027D] cursor-pointer bg-primary-700 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Suscribirse
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      <footer
        className="bg-gradient-to-t from-[#82027D] to-[#040404]  shadow sm:flex sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-00 antialiased"
        id="contacto"
      >
        <p className="mb-4 text-sm text-center text-white dark:text-gray-400 sm:mb-0">
          &copy; 2024 Nicolas Marban
        </p>
        <p className="my-6 mx-auto text-center lg:mb-4 mb-4 text-sm text-white sm:mb-2 ">
          Creada por Lautaro Gayoso - Bautista Gonzalez
        </p>

        <div className="flex justify-center items-center space-x-5">
          <a href="https://www.instagram.com/nicomarban/">
            <img className="w-4 h-4" src={iconoIG} alt="not found" />
          </a>

          <a href="https://www.tiktok.com/@nicomarbantrainner?_t=8iGddg95crm&_r=1">
            <img className="w-4 h-4" src={iconoTiktok} alt="not found" />
          </a>

          <a href="https://www.youtube.com/@NicoMarban">
            <img className="w-4 h-4" src={iconoYoutube} alt="not found" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
