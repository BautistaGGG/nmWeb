/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

function Testimonios() {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
      <h2 className="mt-8 mb-2 text-4xl tracking-tight font-extrabold text-gray-900">
        Testimonios
      </h2>
      <p className="text-xl tracking-tight text-gray-500">
        Otras personas como vos te cuentan su historia, y como fue el recorrido
        en su viaje hacia su nuevo yo.
      </p>
      <div className="grid my-8 lg:my-12 lg:grid-cols-3 gap-12">
        {/* TESTIMONIO 1 */}
        <figure className="max-w-screen-md mx-auto text-center p-4 rounded-lg border border-violeta">
          {/* <svg
            className="w-10 h-10 mx-auto mb-3 text-violeta dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >

            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg> */}
          <img className="w-16 h-16 mb-3 mx-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img>
          <blockquote>
            <p className="text-base italic font-medium text-gray-900 dark:text-white">
              "Luego de haber sido intervenido quirurgicamente, conoci a
              Nicolás. En conocimiento de mis antecedentes medicos y del
              objetivo que yo pretendia me sugirió aceptar a Sol como
              nutricionista. Gracias a la contencion del equipo pude conseguir
              lo que para mi era un sueño. Baje 20 kilos en pocos meses y
              aumente mi masa muscular. Tambien logre superar el pesimo habito
              de fumar y llevo una mejor calidad de vida."
            </p>
          </blockquote>
          <hr className="my-4" />
          <figcaption className="flex items-center justify-center mt-4 space-x-3 rtl:space-x-reverse">
            {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img> */}

            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Walter Gomez
              </cite>
            </div>
          </figcaption>
        </figure>
        {/* TESTIMONIO 2 */}
        <figure className="max-w-screen-md mx-auto text-center p-4 rounded-lg border border-violeta">
          {/* <svg
            className="w-10 h-10 mx-auto mb-3 text-violeta dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg> */}
          <img className="w-16 h-16 mb-3 mx-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img>
          <blockquote>
            <p className="text-base italic font-medium text-gray-900 dark:text-white">
              "Hace 9 meses que entreno con Nico y, si tuviese que resumir en
              pocas palabras como lo describiría, diria: profesionalismo y
              vocación de servicio! Agregaría que, junto a su equipo arman un
              plan de entrenamiento muy interesante y personalizado y, además,
              siempre me senti muy cuidado, con explicaciones claras de la
              rutina y correcciones asertivas para evitar lesiones! Estoy muy
              agradecido!"
            </p>
          </blockquote>
          <hr className="my-4" />
          <figcaption className="flex items-center justify-center mt-4 space-x-3 rtl:space-x-reverse">

          {/* <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img> */}
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Mauricio Naya
              </cite>
            </div>
          </figcaption>
        </figure>
        {/* TESTIMONIO 3 */}
        <figure className="max-w-screen-md mx-auto text-center p-4 rounded-lg border border-violeta">
          {/* <svg
            className="w-10 h-10 mx-auto mb-3 text-violeta dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg> */}
          <img className="w-16 h-16 mb-3 mx-auto rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture"></img>
          <blockquote>
            <p className="text-base italic font-medium text-gray-900 dark:text-white">
              "Mi experiencia fue muy positiva. Antes de empezar mi conocimiento
              en técnicas y ejercicios era nulo, pero con Nicolás tuve rutinas
              arregladas para un mayor avance y eficaz crecimiento, noté un gran
              cambió que nunca creí ser capaz de alcanzar. Me abrió la cabeza en
              el sentido nutricional, ahora distingo lo bueno de lo no tan
              recomendable y como armar un buen plato, además de aprender a
              evitar lesiones."
            </p>
          </blockquote>
          <hr className="my-4" />
          <figcaption className="flex items-center justify-center mt-4 space-x-3 rtl:space-x-reverse">
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
              <cite className="pe-3 font-medium text-gray-900 dark:text-white">
                Ricardo Lafalce
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>

      <h2 className="my-8 text-2xl tracking-tight font-extrabold text-gray-900">
        DESCUBRE COMO TRANSFORMAR TU CUERPO Y MENTE CON NUESTROS PLANES FITNESS
      </h2>

      <div className="grid grid-cols-1 xl:grid xl:grid-cols-2 gap-8 xl:gap-10 my-12" id="planes">
        {/* <!-- Pricing Card --> */}
        <div className="h-[690px] md:h-auto bg-center bg-cover bg-no-repeat bg-planesUno bg-blend-multiply bg-rosaTarjetas mt-0 xl:mt-12 w-full md:w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
          <h3 className="mb-4 text-white text-3xl font-bold">
            PROGRAMA INICIAL 
          </h3>
          {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Programa 100% personalizado
            </p> */}
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-white text-5xl font-extrabold"></span>
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
              <span>SELECCIONA ENTRE: AUMENTO DE MASA MUSCULAR - PERDIDA DE GRASA - TONIFICACION</span>
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
              <span> PLAN DE ENTRENAMIENTO PERSONALIZADO </span>
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
              <span> EJERCICIOS GUIADOS POR VIDEO </span>
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
              <span> EJERCICIOS GUIADOS POR VIDEO </span>
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
              <span> RECETARIO </span>
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
              <span> IDEAS DE COMIDAS </span>
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
              <span> LISTA DE COMPRAS </span>
            </li>
          </ul>
        </div>

        {/* <!-- Pricing Card --> */}
        <div className="h-[690px] md:h-auto bg-center bg-cover bg-no-repeat bg-planesTres bg-blend-multiply bg-rosaTarjetas mt-0 xl:mt-12 w-full md:w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
          <h3 className="mb-4 text-white text-2xl font-bold">COACHING 1 A 1 PRO</h3>
          {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Programa 100% personalizado
            </p> */}
          <div className="flex justify-center items-baseline my-8">
            <span className="mr-2 text-white text-5xl font-extrabold"></span>
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
              <span>PLAN DE ENTRENAMIENTO PERSONALIZADO</span>
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
              <span>PLAN DE ALIMENTACION PERSONALIZADO</span>
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
              <span>EJERCICIOS GUIADOS POR VIDEO</span>
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
              <span>RECETARIO</span>
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
              <span>IDEAS DE COMIDAS</span>
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
              <span>LISTA DE COMPRAS</span>
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
              <span>GRUPO DE LA COMUNIDAD</span>
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
              <span>SEGUIMIENTO POR WHATSAPP</span>
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
              <span>VIDEOLLAMADA CADA 15 DIAS 1 A 1</span>
            </li>
          </ul>
        </div>
      </div>

      <Link to="/#planes">
        <button className="bg-[#82027D] hover:bg-[#82027da6] transition-all text-white text-center text-sm lg:text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg">
          ELEGI TU PLAN
        </button>
      </Link>
    </div>
  );
}

export default Testimonios;
