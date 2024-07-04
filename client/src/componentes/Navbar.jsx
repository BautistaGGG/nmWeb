import { Navbar } from "flowbite-react";
import logoNavbar from "../assets/logo_blanco_recortada.png";
import { Link } from "react-router-dom";
// import { Fade } from 'react-awesome-reveal';

export default function navbar() {
  return (
    <Navbar
      fluid
      className="z-50 bg-[#040404] fixed w-full shadow-md shadow-[#00000087] border-gray-200 scroll-smooth"
    >
      <Navbar.Brand href="/">
        <img
          src={logoNavbar}
          className="h-8 md:h-16 w-auto transition-transform hover:scale-110 duration-200"
          alt="Nicolás Marban Logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle />
      {/* <Fade cascade triggerOnce> */}
      <Navbar.Collapse>
        <a
          href="#"
          className="text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic pr-2 md:pr-0"
        >
          HOME
        </a>

        <Link
          to="/Nutricion"
          className="text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic pr-2 md:pr-0"
        >
          NUTRICIÓN
        </Link>
        <a
          href="https://linktr.ee/nicomarbantrainner"
          className="text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic pr-2 md:pr-0"
        >
          CONTACTO
        </a>
      </Navbar.Collapse>
      {/* </Fade> */}
    </Navbar>
  );
}
