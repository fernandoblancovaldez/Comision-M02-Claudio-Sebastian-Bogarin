import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

//se crea el servidor
const app = express();

//se aplican Middlewares comunes
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// se aplica Middleware para interpretar JSON por body
app.use(express.json());

// se aplica Middleware para habilitar los formularios HTML
app.use(express.urlencoded({ extended: false }));

//se aplica Middleware personalizado  ..
app.use((req, res, next) => {
  console.log("pasé por el Middleware personalizado");
  next();
});

//se aplica Middleware para leer archivos estaticos de la carpeta "public"
app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.status(200).send("Hello from GET verb");
// });

// app.post("/", (req, res) => {
//   res.status(201).send("Hello from POST verb");
// });

// app.patch("/", (req, res) => {
//   res.status(205).send("Hello from PATCH verb");
// });

// app.put("/", (req, res) => {
//   res.status(201).send("Hello from PUT verb");
// });

// app.delete("/", (req, res) => {
//   res.status(202).send("Hello from DELETE verb");
// });

//se pone en escucha en el puerto designado
app.listen(5000);
console.log("Server on port 5000");
