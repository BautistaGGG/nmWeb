import { Accordion } from "flowbite-react";

export default function Faq() {
  return (
    <section className="bg-[#040404]">
      <div className="flex flex-col py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <h2 className="mb-8 p-4 text-white text-[1.2rem] lg:text-4xl text-center self-center font-extrabold border-2 border-violeta rounded-lg">
          PREGUNTAS FRECUENTES
        </h2>
        {/* CONTENEDOR PREGUNTAS Y RESPUESTAS */}
        <Accordion collapseAll className="border-none">
          {/* PREGUNTA 1 */}
          <Accordion.Panel className="">
            <Accordion.Title className="text-white">
              ¿Cómo recibo mi programa de entrenamiento?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Una vez completados tus datos y realizado el pago de la
                subscripción, dentro de las proximas 48 horas vas a recibir via
                e-mail tu plan de entrenamiento.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUNTA 2 */}
          <Accordion.Panel>
            <Accordion.Title className="text-white">
              ¿Son planes basados en subscripción?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Nuestros planes basados en subscripción. Esta diseñado de esta
                forma para que puedas continuar con tu progreso, ya que la
                constancía y el seguimiento son muy importantes.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUNTA 3 */}
          <Accordion.Panel>
            <Accordion.Title className="text-white">
              ¿Puedo hacer el plan en casa?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Por supuesto que podes hacer el plan de entrenamiento en tu
                hogar o en espacios abiertos. Es necesario saber con que
                material contas para asi adaptar la rutina a tus necesidades
                asegurandonos de que obtengas los mismos resultados que si
                fueras al gimnasio.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUNTA 4 */}
          <Accordion.Panel id="panelFAQ">
            <Accordion.Title className="text-white">
              ¿Todos los meses son iguales?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Todos los meses vas a recibir un ajuste a tu plan, esto
                significa que se actualiza constantemente con entrenamientos y
                comidas diseñadas solo para vos según el programa y objetivos
                que elijas, además de contar mi apoyo en todo momento.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUNTA 5 */}
          <Accordion.Panel>
            <Accordion.Title className="text-white">
              Soy nuevo en el gimnasio, ¿es bueno para principiantes?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Los entrenamientos estan diseñados para adaptarse a vos y tus
                objetivos. No hay problema si sos principante, vas a tener una
                rutina 100% personalizada.
              </p>
            </Accordion.Content>
          </Accordion.Panel>

          {/* PREGUNTA 6 */}
          <Accordion.Panel>
            <Accordion.Title className="text-white">
              Reembolsos y devoluciones
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gris text-sm lg:text-base">
                Estamos seguros de que lo que ofrecemos son planes de calidad y
                que funcionan al 100% por lo cual no hacemos reembolsos ni
                devoluciones.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </section>
  );
}
