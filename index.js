//Importa a nossa aplicação
const app = require("./scr/app");

//define a porta
const PORT = 3000;

//Coloca a o servidor a escutar os pedidos HTTP
app.listen(PORT, () => {
  console.log("Servidor a correr em ${PORT}");
});
