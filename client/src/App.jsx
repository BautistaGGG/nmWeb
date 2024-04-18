import Home from "./componentes/Home/Home";
import Nutricion from "./componentes/Nutricion/Nutricion";
import { Route, Routes } from "react-router-dom";

function App() {
  // Only rutas aca/*  */
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/Nutricion" element={<Nutricion />} />
    </Routes>
  );
}

export default App;
