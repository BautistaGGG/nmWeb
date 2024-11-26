import Navbar from "../Navbar";
import HeaderNutricion from "./HeaderNutricion";
import IntroNutricion from "./IntroNutricion";
import Servicio from "./Servicio";
import Testimonios from "./Testimonios";
// import Planes from "../Planes"
import Footer from "../Footer"
import CountdownTimer from "../CountdownTimer";

export default function Nutricion() {
  return (
    <div>
      <Navbar />
      <HeaderNutricion/>
     {/* Establecer un descuento que termina el 31 de diciembre de 2024 a las 23:59 */}
     <CountdownTimer targetDate={new Date('2024-12-31T23:59:59')}/>
      {/* <IntroNutricion /> */}
      <Servicio />
      <Testimonios />
      <Footer />
    </div>
  );
}
