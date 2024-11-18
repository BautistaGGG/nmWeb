import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";
import { mercadoPagoKey } from "../../utils/mercadoKey";
import { Button, Modal } from "flowbite-react";

function Planes() {
  const [paymentMp, setPaymentMp] = useState(null);
  const [price, setPrice] = useState(null);
  const [title, setTitle] = useState("");
  const [showPriceButtons, setShowPriceButtons] = useState(false);

  // MODAL mercadoPago
  const [openModal, setOpenModal] = useState(false);

  initMercadoPago(mercadoPagoKey, {
    locale: "es-AR",
  }); // Aca va la key de la cuenta a donde queres recibir los pagos

  const payment = async () => {
    try {
      // mandamos los datos de la card al back
      const response = await axios.post(
        "http://localhost:3000/mercadopago_payment",
        {
          title: title, // valor a mapear
          quantity: 1, // siempre va a ser 1
          price: price, // valor a mapear
        }
      );

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  // funcion que inicia la ejecucion
  const handlePayment = async (number) => {
    setPrice(number);
    const id = await payment(); // guardamos el id que nos devuelve el backend
    if (id) {
      setPaymentMp(id);
      console.log(number);
    } else {
      console.log("error");
    }
  };

  const handleTitle = async (title) => {
    setTitle(title);
  };

  return (
    <div>
      <div
        id="planes"
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
      >
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="my-8 py-4 text-2xl md:text-3xl lg:text-[2.8rem] italic font-extrabold text-black dark:text-white">
            PLANES, OPCIONES Y BENEFICIOS
          </h2>
        </div>

        <div className="grid grid-cols-1 xl:grid xl:grid-cols-2 gap-8 xl:gap-10">
          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesUno bg-blend-multiply bg-rosaTarjetas mt-0 xl:mt-12 w-full md:w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
            <h3 className="mb-10 text-white text-2xl md:text-3xl font-bold">
              PROGRAMA INICIAL
            </h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Programa 100% personalizado
            </p> */}
            {/* <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-white text-[28px] lg:text-2xl font-extrabold">
                $12.000 MENSUAL <br /> $30.000 TRIMESTRAL
              </span>
            </div> */}
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
                <span>
                  {" "}
                  SELECCIONA ENTRE: AUMENTO DE MASA MUSCULAR - PERDIDA DE GRASA
                  - TONIFICACION{" "}
                </span>
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
                <span>PLAN DE ENTRENAMIENTO PERSONALIZADO </span>
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
                <span> PLAN DE ALIMENTACION PERSONALIZADO </span>
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

            {/* Se dispara el pago  */}

            <div className="flex flex-col items-center mt-[9em]">
              {!showPriceButtons ? (
                <button
                  className="bg-[#82027D] hover:bg-[#82027da6] transition-all text-white text-center text-sm lg:text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white dark:focus:ring-primary-900"
                  onClick={() => {
                    setShowPriceButtons(true);
                    handlePayment(1);
                  }}
                >
                  ¿LISTO PARA EL CAMBIO?
                </button>
              ) : (
                <div className="flex space-x-4">
                  <button
                    className="bg-[#82027D] hover:bg-[#82027da6] transition-all text-white text-center text-sm lg:text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white dark:focus:ring-primary-900"
                    onClick={() => {
                      setOpenModal(true);
                      handlePayment(12000);
                      handleTitle("Eliminación de grasa y tonificación");
                    }}
                  >
                    MENSUAL
                  </button>
                  <button
                    className="bg-[#82027D] hover:bg-[#82027da6] transition-all text-white text-center text-sm lg:text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white dark:focus:ring-primary-900"
                    onClick={() => {
                      setOpenModal(true);
                      handlePayment(30000);
                      handleTitle("Plan premium de tonificación");
                    }}
                  >
                    TRIMESTRAL
                  </button>
                </div>
              )}
            </div>

            <Modal
              dismissible
              show={openModal}
              onClose={() => setOpenModal(false)}
            >
              <Modal.Header>PLAN: {title}</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  {paymentMp && (
                    <Wallet initialization={{ preferenceId: paymentMp }} />
                  )}
                </div>
              </Modal.Body>

              <Modal.Footer>
                <Button color="gray" onClick={() => setOpenModal(false)}>
                  Cerrar
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Toma el id y crea el boton de pago  */}
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesTres bg-blend-multiply bg-rosaTarjetas mt-0 xl:mt-12 w-full md:w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
            <h3 className="mb-10 text-white text-2xl md:text-3xl font-bold">
              COACHING 1 A 1 PRO
            </h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Programa 100% personalizado
            </p> */}
            {/* <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-white text-[28px] lg:text-2xl font-extrabold">
                $90.000 MENSUAL
              </span>
            </div> */}

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
                <span> PLAN DE ENTRENAMIENTO PERSONALIZADO </span>
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
                <span> PLAN DE ALIMENTACION PERSONALIZADO </span>
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
                <span> EJERCICIOS GUIADOS POR VIDEO </span>
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
                <span> RECETARIO </span>
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
                <span> IDEAS DE COMIDAS </span>
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
                <span> LISTA DE COMPRAS </span>
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
                <span>VIDEOLLAMADA CADA 15 DIAS 1 A 1 </span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-28">
              <button
                className="bg-[#82027D] hover:bg-[#82027da6] transition-all text-white text-center text-sm lg:text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white dark:focus:ring-primary-900"
                onClick={() => {
                  setOpenModal(true);
                  handlePayment(23000);
                  handleTitle("Eliminación de grasa y tonificación");
                }}
              >
                MENSUAL PREMIUM
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planes;
