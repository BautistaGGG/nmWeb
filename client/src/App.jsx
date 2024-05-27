import Home from "./componentes/Home/Home";
import Nutricion from "./componentes/Nutricion/Nutricion";
// import ScrollRestoration from "./componentes/ScrollRestoration"
import { Route, Routes } from "react-router-dom";

function App() {
  // Only rutas aca/*  */
  return (
    <Routes>
      {/* <ScrollRestoration> */}
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Nutricion" element={<Nutricion />} />
      {/* </ScrollRestoration> */}
    </Routes>
  );
}

export default App;
