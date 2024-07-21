import logoNico2 from "../assets/logo_blanco_recortada.png";
import nicoIntro_1 from "../assets/Nico_intro_1.jpg";
import nicoIntro_2 from "../assets/Nico_intro_2.jpg";
import nicoIntro_3 from "../assets/Nico_intro_3.jpg";
import nicoIntro_4 from "../assets/Nico_intro_4.jpg";
import nicoIntro_5 from "../assets/Nico_intro_5.jpg";
import nicoIntro_6 from "../assets/Nico_intro_6.jpg";
/* import nicoHistoria from "../assets/Nico_historia.jpg"; */
import nicoTransformacion_1 from "../assets/Nico_transformacion_1.1.jpeg";
import nicoTransformacion_2 from "../assets/Nico_transformacion_2.1.jpeg";
import videoNico from "../assets/Nico_web.mp4";
import { Fade, Zoom } from "react-awesome-reveal";
import { useState, useEffect } from "react";

function Intro() {
  const images1 = [nicoIntro_1, nicoIntro_3, nicoIntro_5];
  const images2 = [nicoIntro_2, nicoIntro_4, nicoIntro_6];

  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrentImage1((currentImage1) => (currentImage1 + 1) % images1.length);
    }, 7000);

    const timer2 = setInterval(() => {
      setCurrentImage2((currentImage2) => (currentImage2 + 1) % images1.length);
    }, 7000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, [images1.length, images2.length]);

  return (
    <>
      {/* TEXTO TRANSFORMACIÓN E IMÁGENESx2 */}
      <section className="bg-[#040404] dark:bg-gray-900" id="info">
        <article className="gap-16 items-start py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <aside className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="text-left text-[1.65rem] lg:text-4xl m-0 lg:mb-4  tracking-tight font-extrabold text-white dark:text-white"> Nuevos{" "}
              <span className="text-center lg:text-right italic"> {" "}HABITOS{" "} </span> {" "} <span className="inline text-[#82027D] ml-1"> + </span>
            </h2>

            <h2 className="text-left text-[1.65rem] lg:text-4xl m-0 lg:mb-4  tracking-tight font-extrabold text-white dark:text-white"> Nueva{" "}
              <span className="text-center lg:text-right italic">{" "}MENTALIDAD{" "}</span>{" "} <span className="inline text-[#82027D] ml-1"> + </span>
            </h2>

            <h2 className="text-left text-[1.65rem] lg:text-4xl m-0 lg:mb-4  tracking-tight font-extrabold text-white dark:text-white">
              Nuevo{" "} <span className="text-center lg:text-right italic"> FISICO </span>{" "} <span className="inline text-[#82027D] ml-1"> = </span>
            </h2>

            <h2 className="mb-4 text-left italic text-2xl xl:text-4xl tracking-tight font-extrabold text-[#FF3399] lg:text-[#82027D] dark:text-white"> TRANSFORMACIÓN </h2>
            
            <p className="mb-4 text-white">
              Tu viaje hacia una versión más fuerte y saludable de vos mismo
              COMIENZA ACÁ. Vas a descubrir el poder de desafiar tus límites y
              superar tus metas. Imaginate despertar cada mañana sintiéndote más
              enérgico, más fuerte y más vibrante. Mi plan de entrenamiento no
              es solo una rutina, es un compromiso con vos mismo para alcanzar
              el cuerpo de tus sueños.
            </p>
          </aside>

          <div className="grid grid-cols-2 gap-4">
            <Fade direction="right" triggerOnce>
              <img loading="lazy" className="lg:m-0 w-full rounded-lg" src={images1[currentImage1]} alt="error"/>
              <img loading="lazy" className="mt-4 w-full lg:mt-10 rounded-lg" src={images2[currentImage2]} alt="error"/>
            </Fade>
          </div>
        </article>
      </section>
      {/* TEXTO TRANSFORMACIÓN E IMÁGENESx2 */}

      {/* LÍNEA DIVISORIA CON LOGO NICO */}
      <aside className="flex justify-center items-center">
        <div className="bg-white"></div>
        <div className="bg-[#040404]">
          <img src={logoNico2} alt="nicolásMarban Logo" className="px-4 h-8 lg:h-32 w-auto"/>
        </div>
        <div className="bg-white"></div>
      </aside>
      {/* LÍNEA DIVISORIA CON LOGO NICO */}

      {/* MI HISTORIA */}
      <section className="bg-[#040404] dark:bg-gray-900" id="info">
        <article className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:items-start lg:py-16 lg:px-6">
          <Zoom triggerOnce>
            <video loading="lazy" loop autoPlay muted className="w-4/5  mx-auto lg:m-0 rounded-lg">
              <source src={videoNico} type="video/mp4" />
            </video>
          </Zoom>

          <div className="mt-8 lg:mt-0 flex flex-col font-light text-white sm:text-lg">
            <h2 className="self-center mb-4 text-4xl text-center font-extrabold text-white p-3 border border-white rounded-md dark:text-white tracking-tight">
              MI HISTORIA
            </h2>

            <p className="my-4 text-white"> <span className="font-bold">¡HOLA!</span>, Soy{" "} <span className="font-bold">Nicolás Marbán</span> 👋🏻</p>

            <p>
              Hace muchos años atrás no llevaba una vida saludable, no me
              alimentaba bien, no entrenaba lo suficiente, no me sentía bien
              conmigo mismo, tenía el autoestima por el piso, me sentía incómodo
              con mi cuerpo, me daba vergüenza mostrarme en ropa de baño, pero
              un día llego el momento de cambiar.
            </p>
            <p>
              Me enfoque en CRECER, tanto en lo personal, como en lo
              profesional, pero saben cómo se logra? Incorporando HÁBITOS y
              CONSTANCIA, trabajo duro, yo les aseguro que se puede. Hoy, varios
              años después, acompañado de un equipo de trabajo, me dedico cada
              día en poder ayudar a personas a cambiar su vida.
            </p>
            <p>
              Es muy satisfactorio ver cómo se pueden superar, cómo crece su
              autoestima, cómo incorporan hábitos, y por sobre todas las cosas,
              mejorar su salud y calidad de vida. Les cuento esto para que vean
              que se puede, esta es una parte de mi pequeña historia, y no tengo
              dudas que con mi equipo podemos ayudarte para que puedas superarte
              día a día.
            </p>
            <span className="my-4 text-white font-bold">¡ENTRENA CONMIGO!</span>
          </div>
        </article>
      </section>
      {/* MI HISTORIA */}

      {/* TRANSFORMACION NICO*/}
      <section className="bg-white text-center italic text-4xl font-extrabold">
        <article className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <h2 className="text-black text-3xl lg:text-[2.8rem]"> {" "} YO lo logré{" "} </h2>
          <h2 className="text-black text-3xl lg:text-[2.8rem]"> ahora <br className="lg:hidden" />{" "} <span className="text-[#82027D] text-3xl">¡TE TOCA A VOS!</span>{" "} </h2>

          <div className="grid grid-cols-2 gap-4 mt-16">
            <Fade direction="left" triggerOnce className="w-full lg:w-3/4 lg:justify-self-end">
              <img className="rounded-lg" src={nicoTransformacion_1} alt="office content 1"/>
            </Fade>

            <Fade direction="right" triggerOnce className="w-full lg:w-3/4 lg:justify-self-start">
              <img className="rounded-lg" src={nicoTransformacion_2} alt="office content 2"/>
            </Fade>
          </div>
        </article>
      </section>
      {/* TRANSFORMACION NICO */}
    </>
  );
}

export default Intro;
