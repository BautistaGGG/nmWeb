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

export default function Home() {
  // Renderizando todos los componentes de la landing en un solo lugar.
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Transformaciones />
      <MuestraApp />
      <Carrusel />
      <AttentionSeeker effect="pulse">
        <Planes />
      </AttentionSeeker>
      <Faq />
      <Footer />
    </div>
  );
}
