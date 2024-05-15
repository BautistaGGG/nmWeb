/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"

function Testimonios() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-gray-900">
            Testimonios 
        </h2>
        <p className="text-xl tracking-tight text-gray-500">
            Otras personas como vos  te cuentan su historia, y como fue el recorrido en su viaje hacia su nuevo yo.
        </p>
        <div className="grid my-8 lg:my-12 lg:grid-cols-3 gap-12">
            {/* TESTIMONIO 1 */}
            <figure className="max-w-screen-md mx-auto text-center p-4 rounded-lg border border-violeta">
                <svg className="w-10 h-10 mx-auto mb-3 text-violeta dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-xl italic font-medium text-gray-900 dark:text-white">
                        "Hace mas de un año y luego de haber sido intervenido quirurgicamente de una eventracion abdominal,
                        inicie actividad fisica en el gimnasio Zep donde conoci a mi actual entrenador Nicolas Marban, 
                        quien en conocimiento de mis antecedentes medicos y el objetivo que yo pretendia 
                        (descenso de peso y mantenimiento de masa muscular) comenzamos una rutina que debio estar acompañada
                        de una alimentacion adecuada, para lo cual segui la sugerencia de Nico (mi entrenador) en aceptar 
                        como nutricionista a Sol, ya que la forma de alimentarme no era la correcta. Asi comenzamos un camino, 
                        y gracias a la contencion de este equipo de profesionales pude rapidamente conseguir lo que para mi 
                        era solo un sueño lejano. Baje 20 kilos en pocos meses y no solo eso, aumente el porcentaje 
                        de masa muscular. Estoy muy contento, porque tambien logre superar el pesimo habito de fumar.
                        Llevo una mejor calidad de vida, estoy aprendiendo muchisimo en lo que respecta la actividad 
                        fisica y habitos alimentarios saludables. Me siento mucho mejor y estoy muy a gusto con el 
                        gimnasio donde entreno ya que hay muy buenos profesores y bueños compañeros. Tengo 54 años y la verdad 
                        me siento mucho mejor que a los 30, ya que la obecidad siempre me ha acompañado."
                    </p>
                </blockquote>
                <hr className="my-4"/>
                <figcaption className="flex items-center justify-center mt-4 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Walter Gomez</cite>
                    </div>
                </figcaption>
            </figure>
            {/* TESTIMONIO 2 */}
            <figure className="max-w-screen-md mx-auto text-center p-4 rounded-lg border border-violeta">
                <svg className="w-10 h-10 mx-auto mb-3 text-violeta dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-xl italic font-medium text-gray-900 dark:text-white">
                        "Hace 9 meses que entreno con Nico y, si tuviese que resumir en pocas palabras como lo describiría,
                        diria: profesionalismo y vocación de servicio! Agregaría que, junto a su equipo arman un plan de 
                        entrenamiento muy interesante y personalizado y, además, siempre me senti muy cuidado, con 
                        explicaciones claras de la rutina y correcciones asertivas para evitar lesiones! 
                        Estoy muy agradecido!"
                    </p>
                </blockquote>
                <hr className="my-4"/>
                <figcaption className="flex items-center justify-center mt-4 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Mauricio Naya</cite>
                    </div>
                </figcaption>
            </figure>
            {/* TESTIMONIO 3 */}
            <figure className="max-w-screen-md mx-auto text-center p-4 rounded-lg border border-violeta">
                <svg className="w-10 h-10 mx-auto mb-3 text-violeta dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                </svg>
                <blockquote>
                    <p className="text-xl italic font-medium text-gray-900 dark:text-white">
                        "Mi experiencia fue dentro de todo muy positiva. Antes de empezar mi conocimiento en técnicas y 
                        ejercicios era muy nulo, pero con Nicolás tuve rutinas ingeniosamente arregladas para un mayor 
                        avance y eficaz crecimiento, noté un gran cambió que nunca creí ser capaz de alcanzar.
                        Me abrió considerablemente la cabeza en el sentido nutricional, distingo mejor lo bueno de lo 
                        no tan recomendable y como armar un buen plato, además de aprender como evitar lesionarme 
                        mediante correcciones."
                    </p>
                </blockquote>
                <hr className="my-4"/>
                <figcaption className="flex items-center justify-center mt-4 space-x-3 rtl:space-x-reverse">
                    <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"/>
                    <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                        <cite className="pe-3 font-medium text-gray-900 dark:text-white">Ricardo Lafalce</cite>
                    </div>
                </figcaption>
            </figure>
        </div>

        <h2 className="my-8 text-2xl tracking-tight font-extrabold text-gray-900">
         DESCUBRE COMO TRANSFORMAR TU CUERPO Y MENTE CON NUESTROS PLANES FITNESS 
        </h2>

        <div className="grid grid-cols-1 xl:grid xl:grid-cols-3 gap-8 xl:gap-10 my-12">
          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesUno bg-blend-multiply bg-rosaTarjetas mt-0 xl:mt-12 w-full md:w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
            <h3 className="mb-4 text-white text-3xl font-bold">
              VOLUMEN MUSCULAR
            </h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Programa 100% personalizado
            </p> */}
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-white text-5xl font-extrabold">
                $29
              </span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left text-white">
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Mayor confianza, presencia y autoestima</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Programa FIT individualizado y completo </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Ejercicios guiados en video </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Variedad de recetas personalizadas </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Lista de compras </span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span> Seguimiento a través de WhatsApp 24/7 </span>
              </li>
            </ul>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesDos w-full md:w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
            <h3 className="mb-4 text-white text-3xl font-bold">
              ELIMINACIÓN DE GRASA Y TONIFICACIÓN
            </h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Programa 100% personalizado
            </p> */}
            <div className="flex justify-center items-baseline my-8">
              <span className="text-white mr-2 text-5xl font-extrabold">
                $99
              </span>
            </div>
            {/* <!-- List --> */}
            <ul role="list" className="mb-8 space-y-4 text-left text-white">
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Reducción de grasa corporal</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Menor flacidez muscular</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Aumento de abdominales y definición muscular</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Mayor confianza, presencia y autoestima.</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Programa FIT individualizado y completo</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Variedad de recetas personalizadas</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Lista de compras</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* <!-- Icon --> */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Seguimiento a través de WhatsApp 24/7</span>
              </li>
            </ul>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesTres bg-blend-multiply bg-rosaTarjetas mt-0 xl:mt-12 w-full md:w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
            <h3 className="mb-4 text-white text-2xl font-bold">
              COACHING 1 A 1
            </h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Programa 100% personalizado
            </p> */}
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-white text-5xl font-extrabold">
                $499
              </span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left text-white">
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Plan de entrenamiento 100% personalizado</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Llamada semanal 1 A 1</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Mayor confianza, presencia y autoestima.</span>
              </li>
              <li className="flex items-center space-x-3">
                {/* Icon */}
                <svg
                  className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Seguimiento a través de WhatsApp 24/7</span>
              </li>
            </ul>
          </div>
        </div>

        <Link to="/#planes">
            <button className="bg-[#82027D] hover:bg-[#82027da6] transition-all text-white text-center text-sm lg:text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg">
                Elegí tu plan
            </button>
        </Link>
    </div>

  )
}

export default Testimonios