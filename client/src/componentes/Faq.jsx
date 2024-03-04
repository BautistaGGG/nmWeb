import { Accordion } from 'flowbite-react';

export default function Faq() {
  return (
    <section className="bg-[#040404]">
      <div className="flex flex-col py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="mb-8 p-4 text-white text-4xl text-center self-center font-extrabold border-2 border-violeta rounded-lg">
          PREGUNTAS FRECUENTES
        </h2>
        {/* CONTENEDOR PREGUNTAS Y RESPUESTAS */}
        <Accordion collapseAll>
          <Accordion.Panel id='panelFAQ'>
            <Accordion.Title className='text-white'>
              ¿Cómo recibo mi programa?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris">
                Todos nuestros planes tienen un coste mensual, asi como tambien
                descuentos por adquirir varios meses juntos.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className='text-white'>
              ¿Los planes se pagan mensualmente o es una única compra?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris">
                Todos nuestros planes tienen un coste mensual, asi como tambien
                descuentos por adquirir varios meses juntos.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          <Accordion.Panel>
            <Accordion.Title className='text-white'>
              ¿Puedo hacer el plan en casa?     
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris">
                Por supuesto que podes hacer el plan de entrenamiento en tu hogar
                o en espacios abiertos. Es necesario saber con que material contas
                para asi adaptar la rutina a tus necesidades asegurandonos de que
                obtengas los mismos resultados que si fueras al gimnasio.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div> 
    </section>
  );
}


// export default function Faq() {
//   return (
//     <section className="bg-[#040404]">
//       <div
//         className="flex flex-col py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"
//         id="accordion-collapse"
//         data-accordion="collapse"
//       >
//         <h2 className="mb-8 p-4 text-white text-4xl text-center self-center font-extrabold border-2 border-violeta rounded-lg">
//           PREGUNTAS FRECUENTES
//         </h2>

//         {/* CONTENEDOR PREGUNTAS Y RESPUESTAS */}

//         <h2 id="accordion-collapse-heading-1">
//           <button
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-violeta border border-t-0 border-l-0 border-r-0 border-b-2 border-gris  hover:bg-zinc-950 gap-3"
//             data-accordion-target="#accordion-collapse-body-1"
//             aria-expanded="true"
//             aria-controls="accordion-collapse-body-1"
//           >
//             <span className="text-white">¿Cómo recibo mi programa?</span>

//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0 transition-all hover:w-5 hover:h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>

//         <div
//           id="accordion-collapse-body-1"
//           className="hidden"
//           aria-labelledby="accordion-collapse-heading-1"
//         >
//           <div className="p-5">
//             <p className="mb-2 text-gris">
//               Una vez realizado el pago, nos vamos a contactar con vos vía
//               E-mail para confirmar la compra y enviarte las herramientas que
//               incluye el plan seleccionado.
//             </p>
//           </div>
//         </div>

//         {/* CONTENEDOR 2 */}

//         <h2 id="accordion-collapse-heading-2">
//           <button
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-violeta border border-t-0 border-l-0 border-r-0 border-b-2 border-gris  hover:bg-zinc-950 gap-3"
//             data-accordion-target="#accordion-collapse-body-2"
//             aria-expanded="false"
//             aria-controls="accordion-collapse-body-2"
//           >
//             <span className="text-white">
//               ¿Los planes se pagan mensualmente o es una única compra?
//             </span>
//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>

//         <div
//           id="accordion-collapse-body-2"
//           className="hidden"
//           aria-labelledby="accordion-collapse-heading-2"
//         >
//           <div className="p-5 ">
//             <p className="mb-2 text-gris">
//               Todos nuestros planes tienen un coste mensual, asi como tambien
//               descuentos por adquirir varios meses juntos.
//             </p>
//           </div>
//         </div>

//         {/* CONTENEDOR 3 */}

//         <h2 id="accordion-collapse-heading-3">
//           <button
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-violeta border border-t-0 border-l-0 border-r-0 border-b-2 border-gris  hover:bg-zinc-950 gap-3"
//             data-accordion-target="#accordion-collapse-body-3"
//             aria-expanded="false"
//             aria-controls="accordion-collapse-body-3"
//           >
//             <span className="text-white">¿Puedo hacer el plan en casa?</span>
//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>

//         <div
//           id="accordion-collapse-body-3"
//           className="hidden"
//           aria-labelledby="accordion-collapse-heading-3"
//         >
//           <div className="p-5 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 text-gris">
//               Por supuesto que podes hacer el plan de entrenamiento en tu hogar
//               o en espacios abiertos. Es necesario saber con que material contas
//               para asi adaptar la rutina a tus necesidades asegurandonos de que
//               obtengas los mismos resultados que si fueras al gimnasio.
//             </p>
//           </div>
//         </div>

//         {/* CONTENEDOR 4 */}

//         <h2 id="accordion-collapse-heading-4">
//           <button
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-violeta border border-t-0 border-l-0 border-r-0 border-b-2 border-gris  hover:bg-zinc-950 gap-3"
//             data-accordion-target="#accordion-collapse-body-4"
//             aria-expanded="true"
//             aria-controls="accordion-collapse-body-4"
//           >
//             <span className="text-white">¿Todos los meses son iguales?</span>

//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0 transition-all hover:w-5 hover:h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>

//         <div
//           id="accordion-collapse-body-4"
//           className="hidden"
//           aria-labelledby="accordion-collapse-heading-4"
//         >
//           <div className="p-5 dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 text-gris">
//               Una vez realizado el pago, nos vamos a contactar con vos vía
//               E-mail para confirmar la compra y enviarte las herramientas que
//               incluye el plan seleccionado.
//             </p>
//           </div>
//         </div>

//         {/* CONTENEDOR 5 */}

//         <h2 id="accordion-collapse-heading-5">
//           <button
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-violeta border border-t-0 border-l-0 border-r-0 border-b-2 border-gris  hover:bg-zinc-950 gap-3"
//             data-accordion-target="#accordion-collapse-body-5"
//             aria-expanded="false"
//             aria-controls="accordion-collapse-body-5"
//           >
//             <span className="text-white">
//               Soy nuevo en el gimnasio, ¿es bueno para principiantes?
//             </span>
//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>

//         <div
//           id="accordion-collapse-body-5"
//           className="hidden"
//           aria-labelledby="accordion-collapse-heading-5"
//         >
//           <div className="p-5">
//             <p className="mb-2 text-gris">
//               Todos nuestros planes tienen un coste mensual, asi como tambien
//               descuentos por adquirir varios meses juntos.
//             </p>
//           </div>
//         </div>

//         {/* CONTENEDOR 6 */}

//         <h2 id="accordion-collapse-heading-6">
//           <button
//             type="button"
//             className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-violeta border border-t-0 border-l-0 border-r-0 border-b-2 border-gris  hover:bg-zinc-950 gap-3"
//             data-accordion-target="#accordion-collapse-body-6"
//             aria-expanded="false"
//             aria-controls="accordion-collapse-body-6"
//           >
//             <span className="text-white">Reembolsos y devoluciones</span>
//             <svg
//               data-accordion-icon
//               className="w-3 h-3 rotate-180 shrink-0"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 10 6"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M9 5 5 1 1 5"
//               />
//             </svg>
//           </button>
//         </h2>

//         <div
//           id="accordion-collapse-body-6"
//           className="hidden"
//           aria-labelledby="accordion-collapse-heading-6"
//         >
//           <div className="p-5  dark:border-gray-700 dark:bg-gray-900">
//             <p className="mb-2 text-gris">
//               Por supuesto que podes hacer el plan de entrenamiento en tu hogar
//               o en espacios abiertos. Es necesario saber con que material contas
//               para asi adaptar la rutina a tus necesidades asegurandonos de que
//               obtengas los mismos resultados que si fueras al gimnasio.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
