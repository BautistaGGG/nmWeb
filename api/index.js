import app from "./src/app.js";
const PORT = process.env.port || 3000;

// SERVIDOR LEVANTADO
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
