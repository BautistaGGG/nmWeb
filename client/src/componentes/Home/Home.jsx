import Navbar from "../Navbar";
import Header from "../Header";
import Intro from "../Intro";
import Transformaciones from "../Transformaciones";
import MuestraApp from "../MuestraApp";
import Planes from "../Planes";
import Faq from "../Faq";
import Carrusel from "../Carrusel";
import Footer from "../Footer";
import { AttentionSeeker } from "react-awesome-reveal";
import CountdownTimer from "../CountdownTimer";

export default function Home() {
  // Renderizando todos los componentes de la landing en un solo lugar.
  return (
    <div>
      <Navbar /> 
      <Header />
      {/* Establecer un descuento que termina el 31 de diciembre de 2024 a las 23:59 */}
      <CountdownTimer targetDate={new Date('2024-12-31T23:59:59')}/>
      <Intro />
      <Transformaciones />
      <MuestraApp />
      <Carrusel />
      <AttentionSeeker effect="pulse" triggerOnce>
        <Planes />
      </AttentionSeeker>
      <Faq />
      <Footer />
    </div>
  );
}
