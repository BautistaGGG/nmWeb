import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { mercadoPagoKey } from "../../utils/mercadoKey";
import { Button, Modal } from 'flowbite-react';

function Planes() {
  const [paymentMp, setPaymentMp] = useState(null);
  const [price, setPrice] = useState(null);
  const [title, setTitle] = useState("");

  // MODAL mercadoPago
  const [openModal, setOpenModal] = useState(false);

  initMercadoPago(mercadoPagoKey, {
    locale: "es-AR",
  }); // Aca va la key de la cuenta a donde queres recibir los pagos

  useEffect(() => {
    console.log(title, price);
  },[price])

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
      // si sale todo bien el server nos devuelve un ID de mercado pago.
      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

    // funcion que inicia la ejecucion
    const handlePayment = async (number) => {
      setPrice(number)
      const id = await payment(); // guardamos el id que nos devuelve el backend
      if (id) {
        setPaymentMp(id);
        // Seteamos el id en el hook use state
      } else {
        console.log("error");
      }

  };

  const handleTitle = async (title) => {
    setTitle(title)
  }

  return (
    <div>
      <div
        id="planes"
        className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
      >
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="my-8 py-4 text-[2.8rem] italic font-extrabold text-black dark:text-white">
            PLANES, OPCIONES Y BENEFICIOS
          </h2>
        </div>

        <div className="lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10">
          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesUno bg-blend-multiply bg-rosaTarjetas mt-12 w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
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

            {/* Se dispara el pago  */}
            
            <Button 
              className="bg-[#82027D] hover:bg-[#82027da6] transition-all text-white hover:text-slate-300 text-center text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white  dark:focus:ring-primary-900"
              onClick={ () => { price === 29 && setOpenModal(true), handlePayment(29)} }
            >
              {price === 29 ? "COMENCEMOS!" : "¿LISTO PARA EL CAMBIO?"}
            </Button>

              <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>¿LISTO PARA EL CAMBIO?</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                  {paymentMp && <Wallet initialization={{ preferenceId: paymentMp }} />}
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
          <div className="bg-center bg-cover bg-no-repeat bg-planesDos w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
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
            <button
            onClick={() => {
              handlePayment(99)
              handleTitle("Masa muscular")}
            }
              className="bg-transparent hover:bg-[#82027D] transition-all text-white hover:text-slate-300 text-center text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white  dark:focus:ring-primary-900"
            >
              {price === 99 ? "COMENCEMOS!" : "¿LISTO PARA EL CAMBIO?" }
            </button>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesTres bg-blend-multiply bg-rosaTarjetas mt-12 w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
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
            <button
              className="bg-transparent hover:bg-[#82027D] transition-all text-white hover:text-slate-300 text-center text-lg font-medium mb-0 mx-auto mt-auto px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white  dark:focus:ring-primary-900"
            >
              {price === 499 ? "COMENCEMOS!" : "¿LISTO PARA EL CAMBIO?" }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planes;
