import { Accordion } from 'flowbite-react';

export default function Faq() {
  return (
    <section className="bg-[#040404]">
      <div className="flex flex-col py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="mb-8 p-4 text-white text-[1.2rem] lg:text-4xl text-center self-center font-extrabold border-2 border-violeta rounded-lg">
          PREGUNTAS FRECUENTES
        </h2>
        {/* CONTENEDOR PREGUNTAS Y RESPUESTAS */}
        <Accordion collapseAll className='border-none'>
          {/* PREGUNTA 1 */}
          <Accordion.Panel className=''>
            <Accordion.Title className='text-white'>
              ¿Cómo recibo mi programa?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Todos nuestros planes tienen un coste mensual, asi como tambien
                descuentos por adquirir varios meses juntos.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUNTA 2 */}
          <Accordion.Panel>
            <Accordion.Title className='text-white'>
              ¿Los planes se pagan mensualmente o es una única compra?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Todos nuestros planes tienen un coste mensual, asi como tambien
                descuentos por adquirir varios meses juntos.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUTNA 3 */}
          <Accordion.Panel>
            <Accordion.Title className='text-white'>
              ¿Puedo hacer el plan en casa?     
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Por supuesto que podes hacer el plan de entrenamiento en tu hogar
                o en espacios abiertos. Es necesario saber con que material contas
                para asi adaptar la rutina a tus necesidades asegurandonos de que
                obtengas los mismos resultados que si fueras al gimnasio.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUNTA 4 */}
          <Accordion.Panel id='panelFAQ'>
            <Accordion.Title className='text-white'>
            ¿Todos los meses son iguales?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Todos nuestros planes tienen un coste mensual, asi como tambien
                descuentos por adquirir varios meses juntos.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUNTA 5 */}
          <Accordion.Panel>
            <Accordion.Title className='text-white'>
            Soy nuevo en el gimnasio, ¿es bueno para principiantes?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Todos nuestros planes tienen un coste mensual, asi como tambien
                descuentos por adquirir varios meses juntos.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUTNA 6 */}
          <Accordion.Panel>
            <Accordion.Title className='text-white'>
            Reembolsos y devoluciones    
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
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
