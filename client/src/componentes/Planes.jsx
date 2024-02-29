import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { useState } from "react";

function Planes() {
  const [paymentMp, setPaymentMp] = useState(null);

  initMercadoPago("TEST-bd7260b2-1998-4a2d-a95d-567ecdc82e75", {
    locale: "es-AR",
  }); // Aca va la key de la cuenta a donde queres recibir los pagos

  const payment = async () => {
    try {
      // mandamos los datos de la card al back
      const response = await axios.post(
        "http://localhost:3000/mercadopago_payment",
        {
          title: "Plan X", // valor a mapear
          quantity: 1, // siempre va a ser 1
          price: 100, // valor a mapear
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
  const handlePayment = async () => {
    const id = await payment(); // guardamos el id que nos devuelve el backend
    if (id) {
      setPaymentMp(id); // Seteamos el id en el hook use state
    } else {
      console.log("error");
    }
  };

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
          <div className="bg-center bg-cover bg-no-repeat bg-planesUno bg-blend-multiply bg-zinc-400 mt-12 w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
            <h3 className="mb-4 text-white text-3xl font-bold">
              AUMENTO MASA MUSCULAR
            </h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best option for personal use & for your next project.
            </p> */}
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-white text-5xl font-extrabold">
                $29
              </span>
              {/* <span className="text-gray-500 dark:text-gray-400">/mes</span> */}
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
                <span>Individual configuration</span>
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
                <span>No setup, or hidden fees</span>
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
                <span>
                  Team size: <span className="font-semibold">1 developer</span>
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
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">6 months</span>
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
                <span>
                  Free updates: <span className="font-semibold">6 months</span>
                </span>
              </li>
            </ul>
            {/* Se dispara el pago  */}
            <button
              onClick={handlePayment}
              className="bg-transparent hover:bg-[#82027D] transition-all text-white hover:text-slate-300 text-center text-lg font-medium px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white  dark:focus:ring-primary-900"
            >
              COMENZAR
            </button>
            {/* Toma el id y crea el boton de pago  */}
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesDos w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
            <h3 className="mb-4 text-white text-3xl font-bold">
              ELIMINACIÓN DE GRASA Y TONIFICACIÓN
            </h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users, extended & premium support.
            </p> */}
            <div className="flex justify-center items-baseline my-8">
              <span className="text-white mr-2 text-5xl font-extrabold">
                $99
              </span>
              {/* <span className="text-gray-500 dark:text-gray-400">/mes</span> */}
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
                <span>Individual configuration</span>
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
                <span>No setup, or hidden fees</span>
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
                <span>
                  Team size:{" "}
                  <span className="font-semibold">10 developers</span>
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
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">24 months</span>
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
                <span>
                  Free updates: <span className="font-semibold">24 months</span>
                </span>
              </li>
            </ul>
            <button
              onClick={handlePayment}
              className="bg-transparent hover:bg-[#82027D] transition-all text-white hover:text-slate-300 text-center text-lg font-medium px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white  dark:focus:ring-primary-900"
            >
              COMENZAR
            </button>
          </div>

          {/* <!-- Pricing Card --> */}
          <div className="bg-center bg-cover bg-no-repeat bg-planesTres mt-12 w-[384px] flex flex-col p-6 mx-auto max-w-lg text-center rounded-lg border-2 border-black shadow-xl shadow-[#2d2d2d]">
            <h3 className="mb-4 text-white text-2xl font-bold">PREMIUM</h3>
            {/* <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best for large scale uses and extended redistribution rights.
            </p> */}
            <div className="flex justify-center items-baseline my-8">
              <span className="mr-2 text-white text-5xl font-extrabold">
                $499
              </span>
              {/* <span className="text-gray-500 dark:text-gray-400">/mes</span> */}
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
                <span>Individual configuration</span>
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
                <span>No setup, or hidden fees</span>
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
                <span>
                  Team size:{" "}
                  <span className="font-semibold">100+ developers</span>
                </span>
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
                <span>
                  Premium support:{" "}
                  <span className="font-semibold">36 months</span>
                </span>
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
                <span>
                  Free updates: <span className="font-semibold">36 months</span>
                </span>
              </li>
            </ul>
            <button
              onClick={handlePayment}
              className="bg-transparent hover:bg-[#82027D] transition-all text-white hover:text-slate-300 text-center text-lg font-medium px-5 py-2.5 border-2 border-[#82027D] focus:ring-4 focus:ring-primary-200 rounded-lg dark:text-white  dark:focus:ring-primary-900"
            >
              COMENZAR
            </button>
          </div>
        </div>
      </div>
      {paymentMp && <Wallet initialization={{ preferenceId: paymentMp }} />}
    </div>
  );
}

export default Planes;
