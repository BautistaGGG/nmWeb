import introNutri from "../../assets/intro_nutri.svg"

function IntroNutricion() {
  return (
    <section className="bg-white">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6 pt-[115px] lg:pt-[160px]">
          <img 
            src={introNutri}
            className="w-full rounded-lg" 
            alt="dashboard image"
          />

          <div className="mt-4 md:mt-0">
            <p className="inline text-gray-900 border my-4 border-b-violeta border-x-white border-t-white">
              Transforma tu salud con nuestro             
            </p>
            <h2 className="my-4 text-4xl tracking-tight font-extrabold text-gray-900">
                Plan personalizado de Nutrición
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
              Bajo nuestro acompañamiento vas a poder lograr una salud optima, junto con nuestra nutricionista certificada logramos el combo perfecto para que alcances tus metas de una forma integral. 
            </p>
            <a href="#" className="inline-flex items-center text-white bg-violeta hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Comencemos
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </a>
          </div>
        </div>
      </section>
  )
}

export default IntroNutricion