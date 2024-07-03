// import { Fade } from "react-awesome-reveal";
import habitos_uno from "../../assets/nutricion/Nico_water.jpg";
import habitos_dos from "../../assets/nutricion/fruta.jpeg";
import habitos_tres from "../../assets/nutricion/nico4.jpg";
import habitos_cuatro from "../../assets/habitos_cuatro.svg";

function Servicio() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 text-center">
            ¿Qué tenemos para vos?
          </h2>
        </div>

        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {/* CARD 1 */}
          <div className="bg-[#040404] rounded-lg p-8">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl text-violeta font-bold">
              ¡Chau a las dietas aburridas!
            </h3>
            <p className="text-gray-500">
              ¿Cansado de las comidas repetitivas? Nosotros te ofrecemos
              nutrición rica y equilibrada. Olvida las dietas monótonas y
              disfruta de recetas variadas, con nuestros planes personalizados
              cada comida será una experiencia placentera y saludable.
            </p>
          </div>
          {/* CARD 2 */}
          <div className="bg-[#040404] rounded-lg p-8">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="white"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl text-violeta font-bold dark:text-white">
              Recibí cada semana tu lista de compras.
            </h3>
            <p className="text-gray-500">
              Olvídate de las dudas en el supermercado y asegúrate de tener todo
              lo que necesitas para tus recetas nutritivas. Organiza tu cocina y
              ahorra tiempo con nuestras listas de compras semanales!
            </p>
          </div>
          {/* CARD 3 */}
          <div className="border border-violeta rounded-lg p-8">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="black"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl text-violeta font-bold dark:text-white">
              Rutina y nutrición 100% personalizado
            </h3>
            <p className="text-gray-500">
              Saca tu mejor versión con nuestros planes de rutina y nutrición
              completamente personalizados. Nos enfocamos en tus objetivos,
              gustos y estilo de vida para crear un programa único que se adapte
              a vos. Ya sea que busques perder peso, ganar masa muscular o
              simplemente llevar una vida más saludable, nuestros expertos
              diseñarán un plan hecho a tu medida.
            </p>
          </div>
          {/* CARD 4 */}
          <div className="border border-violeta rounded-lg p-8">
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <svg
                className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                fill="black"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <h3 className="mb-2 text-xl text-violeta font-bold dark:text-white">
              ¡Aprende con nosotros!
            </h3>
            <p className="text-gray-500">
              Ofrecemos recursos educativos para que aprendas sobre nutrición,
              ejercicio y bienestar. Con nuestros artículos, videos y talleres
              interactivos, adquirirás el conocimiento necesario para tomar
              decisiones informadas y mantenerte motivado. ¡Sumáte a nuestra
              comunidad y transforma tu vida a través del aprendizaje!
            </p>
          </div>
        </div>
      </div>
      {/* Elegí tu dieta */}
      <div className="px-4 py-8 mx-auto text-center md:max-w-screen-lg lg:max-w-screen-xl lg:px-6">
        {/* Mejorá tus hábitos con nosotros */}
        <h2 className="my-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Mejorá tus hábitos con nosotros
        </h2>

        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          {/* CARD 1 */}
          <div>
            <div className="mb-4 rounded-full bg-primary-100">
              <img className="h-" src={habitos_uno} alt="" />
            </div>
            <h3 className="mb-2 text-xl text-gray-900 font-bold dark:text-white">
              Los beneficios de las hidratación para la perdida de peso
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Descubre como mantenerse hidratado puede ayudar a tu objetivo de
              perdida de peso y mejorar la salud en general.
            </p>
          </div>
          {/* CARD 2 */}
          <div>
            <div className="mb-4 rounded-full bg-primary-100">
              <img src={habitos_dos} alt="" />
            </div>
            <h3 className="mb-2 text-xl text-gray-900 font-bold">
              Cultiva una relación sana con la comida
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Learn how practicing mindful eating can help you develop a
              healthier relationship with food and improve your overall
              well-being
            </p>
          </div>
          {/* CARD 3 */}
          <div>
            <div className="mb-4 rounded-full bg-primary-100">
              <img src={habitos_tres} alt="" />
            </div>
            <h3 className="mb-2 text-xl text-gray-900 font-bold">
              Carbohidratos, proteínas y grasas
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Comprende cada uno de los macronutrientes y su rol en la dieta
              para maximizar tu salud y el control de tu peso.
            </p>
          </div>
          {/* CARD 4 */}
          <div>
            <div className="mb-4 rounded-full bg-primary-100">
              <img src={habitos_cuatro} alt="" />
            </div>
            <h3 className="mb-2 text-xl text-gray-900 font-bold">
              Opciones rápidas y nutritivas
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Explore a variety of convenient and healthy snack ideas to keep
              you fueled throughout the day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Servicio;
