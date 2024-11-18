import Navbar from "../Navbar";
import HeaderNutricion from "./HeaderNutricion";
import IntroNutricion from "./IntroNutricion";
import Servicio from "./Servicio";
import Testimonios from "./Testimonios";
// import Planes from "../Planes"
import Footer from "../Footer"

export default function Nutricion() {
  return (
    <div>
      <Navbar />
      <HeaderNutricion/>
      {/* <IntroNutricion /> */}
      <Servicio />
      <Testimonios />
      <Footer />
    </div>
  );
}
