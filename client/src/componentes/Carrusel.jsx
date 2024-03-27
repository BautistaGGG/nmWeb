import logoNico from "../assets/logo_blanco_recortada.png";
import aductores_maquina from "../assets/aductores_maquina_lazy-loading.gif";
import pressFrances from "../assets/Press_frances_barra.gif";
import dorsales from "../assets/Dorsalera_agarre_cerrado.gif";

export default function Carrusel() {
  return (
    <div>
      <section
        className="text-center italic text-4xl font-extrabold"
        style={{
          background: "black",
        }}
      >
        <aside
          className="flex justify-center items-center"
          style={{
            background: "white",
          }}
        >
          <div className="bg-white"></div>
          <div className="bg-[#040404]">
            <img
              src={logoNico}
              alt="nicolásMarban Logo"
              className="px-4 h-8 lg:h-32 w-auto"
            />
          </div>
          <div className="bg-white"></div>
        </aside>
        <article className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div>
            <h2 className="text-white text-2xl">
              {" "}
              TRANSFORMA TUS{" "}
              <span className="text-[#82027D]">ENTRENAMIENTOS</span>{" "}
            </h2>
            <h2 className="text-white text-2xl">
              LLEVALOS AL{" "}
              <span className="text-[#82027D]">SIGUIENTE NIVEL</span>{" "}
            </h2>
            <br />
            {/*   <h4 className="text-white text-base">
              Perfecciona tu técnica y maximiza tus resultados con mis videos
              demostrativos en <span className="text-[#82027D]">ALTA</span>{" "}
              calidad.
            </h4> */}
          </div>
          <div className="grid grid-rows-3 lg:grid-cols-3 justify-items-center gap-4 mt-16">
            <img
              className="rounded-lg border-2 border-black"
              src={aductores_maquina}
              alt="video1"
              loading="lazy"
            />
            <img
              className="rounded-lg border-2 border-black"
              src={pressFrances}
              alt="video2"
              loading="lazy"
            />
            <img
              className="rounded-lg border-2 border-black"
              src={dorsales}
              alt="video3"
              loading="lazy"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
