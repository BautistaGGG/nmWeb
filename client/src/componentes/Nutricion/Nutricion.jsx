import Navbar from "../Navbar";
import IntroNutricion from "./IntroNutricion";
import Servicio from "./Servicio";
import Testimonios from "./Testimonios";
// import Planes from "../Planes"
import Footer from "../Footer"

export default function Nutricion() {
  return (
    <div>
      <Navbar />
      <IntroNutricion />
      <Servicio />
      <Testimonios />
      <Footer />
    </div>
  );
}
