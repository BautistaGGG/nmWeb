import {Navbar} from 'flowbite-react';
import logoNavbar from "../assets/logo_blanco_recortada.png"
import { Fade } from 'react-awesome-reveal';

export default function navbar() {
  return (
    <Navbar fluid className='z-50 bg-[#040404] fixed w-full shadow-md shadow-[#00000087] border-gray-200 scroll'>
      <Fade cascade triggerOnce>
        <Navbar.Brand href="#">
          <img src={logoNavbar} className="h-8 md:h-20 w-auto transition-transform hover:scale-110 duration-200" alt="Nicolás Marban Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <a href="#" className='text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic'>
            HOME
          </a>
          <a href="#" className='text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic'>
            SERVICIOS
          </a>
            {/* <a href="#" className='text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic'>
              NUTRICION
            </a> */}
          <a href="#contacto" className='text-white hover:text-violeta text-right lg:text-center text-lg font-bold italic'>
            CONTACTO
          </a>
        </Navbar.Collapse>
      </Fade>
    </Navbar>
  );
}