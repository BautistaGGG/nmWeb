import { Fade } from "react-awesome-reveal";

function Header() {
  return (
    <section className="bg-center bg-cover bg-no-repeat bg-nicoPortada bg-blend-multiply bg-gray-500">
      <Fade direction="left" triggerOnce>
        <div className="px-6 py-24 lg:pt-64 lg:pb-12 mx-auto max-w-screen-xl text-center">
          <h1 className="italic my-8 lg:mt-0 lg:mb-4 text-2xl lg:text-[2.75rem] xl:text-6xl font-extrabold tracking-tight leading-none text-white">
            ¡DESBLOQUEA TU MAS ALTO POTENCIAL!
          </h1>
          <p className="bg-[#0000006e] border-2 border-[#82027D] text-[12px] lg:text-xl font-bold text-gray-300 lg:leading-8 my-8 lg:mx-28 sm:px-16 lg:px-48">
            TE AYUDO A MEJORAR TUS HABITOS, MENTALIDAD, AUTOESTIMA, CONFIANZA Y LOGRAR EL CUERPO DE TUS SUEÑOS.
          </p>

          <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:justify-center">
            <a
              href="#planes"
              className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#82027D] hover:bg-transparent hover:border hover:border-[#82027D] focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Ver planes
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
            <a href="#info" className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-[#82027D] hover:bg-[#82027D] hover:border-[#82027D] focus:ring-4 focus:ring-gray-400">
              Leer más
            </a>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Header;
