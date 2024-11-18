import trans1 from "../assets/transformaciones/1.png";
import trans2 from "../assets/transformaciones/2.png";
import trans3 from "../assets/transformaciones/3.png";
import trans4 from "../assets/transformaciones/4.png";
import trans5 from "../assets/transformaciones/5.png";
import trans6 from "../assets/transformaciones/6.png";
import trans7 from "../assets/transformaciones/7.png";

import { Carousel } from "flowbite-react";
import { useState, useEffect } from "react";

function Transformaciones() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* <!--TRANSFORMACIONES--> */}
      <section className="italic bg-black" id="TRANSFORMACIONES">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-16 text-2xl lg:text-5xl tracking-tight font-extrabold text-white dark:text-white">
              TRANSFORMACIONES
            </h2>
            <p className="bg-[#0000006e] mb-4 p-4 text-xl lg:text-2xl font-bold text-white border-2 border-[#82027D]  dark:text-black">
              Los CAMBIOS no se dan de la noche a la mañana.
              <br />
              Para <span className="text-[#82027D]">VER RESULTADOS</span>, es
              necesario confiar en el{" "}
              <span className="text-[#82027D]">PROCESO</span>.
              <br />
              Ellos lo hicieron y su EVOLUCIÓN está a la vista
            </p>
          </div>

          <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel
              slideInterval={3000}
              className="w-full"
            >
              <div className="flex h-full justify-center items-center overflow-x-auto">
                <img src={trans1} alt="Slide 1" className="w-full lg:w-2/3 xl:w-1/3" />
                <img src={trans2} alt="Slide 2" className="hidden sm:block w-full lg:w-2/3 xl:w-1/3" />
              </div>
              <div className="flex h-full justify-center items-center overflow-x-auto">
                <img src={trans3} alt="Slide 3" className="w-full lg:w-2/3 xl:w-1/3" />
                <img src={trans4} alt="Slide 4" className="hidden sm:block w-full lg:w-2/3 xl:w-1/3" />
              </div>
              <div className="flex h-full justify-center items-center overflow-x-auto">
                <img src={trans5} alt="Slide 5" className="w-full lg:w-2/3 xl:w-1/3" />
                <img src={trans6} alt="Slide 6" className="hidden sm:block w-full lg:w-2/3 xl:w-1/3" />
              </div>
              <div className="flex h-full justify-center items-center overflow-x-auto">
                <img src={trans7} alt="Slide 7" className="w-full lg:w-2/3 xl:w-1/3" />
                <img src={trans1} alt="Slide 8" className="hidden sm:block w-full lg:w-2/3 xl:w-1/3" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
      {/* <!--TRANSFORMACIONES--> */}
    </div>
  );
}

export default Transformaciones;

// import { Carousel } from "flowbite-react";
// PERDIDA DE CALIDAD DE LAS IMAGENES AL USAR ESTE FORMATO
// <div className="h-56 lg:block lg:my-0 lg:mx-auto lg:w-3/5 sm:h-64 xl:h-screen 2xl:h-96">
//   <Carousel slideInterval={2000}>
//     <img src={trans2} alt="..." />
//     <img src={trans1} alt="..." />
//     <img src={trans2} alt="..." />
//     <img src={trans1} alt="..." />
//     <img src={trans2} alt="..." />
//     <img src={trans1} alt="..." />
//   </Carousel>
// </div>