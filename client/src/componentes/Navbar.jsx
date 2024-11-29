import { Navbar } from "flowbite-react";
import logoNavbar from "../assets/logo_blanco_recortada.png";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

export default function navbar() {
  // const [timeLeft, setTimeLeft] = useState(45 * 60); // 45 minutos en segundos

  // useEffect(() => {
  //   if (timeLeft <= 0) return; // Cuando el temporizador llegue a 0, detener

  //   const timer = setInterval(() => {
  //     setTimeLeft(timeLeft - 1);
  //   }, 1000);

  //   // Limpiar el intervalo cuando el componente se desmonte
  //   return () => clearInterval(timer);
  // }, [timeLeft]);

  // // Formatear el tiempo restante en mm:ss
  // const formatTime = (seconds) => {
  //   const minutes = Math.floor(seconds / 60);
  //   const remainingSeconds = seconds % 60;
  //   return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  // };
  return (
    <>
    {/* <div className="bg-violeta text-white text-center font-bold p-2 fixed w-full z-[150]">
      <a href="#planes" className="text-black"> HACE CLICK </a> para TOMAR ACCION - Últimos cupos disponibles: {formatTime(timeLeft)} 
    </div> */}

    <Navbar fluid className="z-50 bg-[#040404] fixed w-full shadow-md shadow-[#00000087] border-gray-200 scroll-smooth">
      <Navbar.Brand href="/">
        <img src={logoNavbar} className="h-8 md:h-16 w-auto transition-transform hover:scale-110 duration-200" alt="Nicolás Marban Logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle />
      {/* <Fade cascade triggerOnce> */}
      <Navbar.Collapse>
        <a href="/" className="text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic pr-2 md:pr-0">
          HOME
        </a>

        <Link to="/Nutricion" className="text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic pr-2 md:pr-0">
          NUTRICIÓN
        </Link>
        <a href="https://linktr.ee/nicomarbantrainner" className="text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic pr-2 md:pr-0">
          CONTACTO
        </a>
      </Navbar.Collapse>
      {/* </Fade> */}
    </Navbar>
    </>
  );
}
