import Navbar from "../Navbar";
import Header from "../Header";
import Intro from "../Intro";
import Transformaciones from "../Transformaciones";
import MuestraApp from "../MuestraApp";
import Planes from "../Planes";
import Faq from "../Faq";
// import Footer from "../Footer";

export default function Home() {
  // Renderizando todos los componentes de la landing en un solo lugar.
  return (
    <div>
      <Navbar />
      <Header />
      <Intro />
      <Transformaciones />
      <MuestraApp />
      <Planes />
      <Faq />
      {/* <Footer/> */}
    </div>
  );
}
