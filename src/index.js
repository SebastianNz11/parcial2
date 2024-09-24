import express from "express";
import { sequelize } from "./database/database.js";
import routesCatedraticos from "./routes/catedraticos.routes.js";
import routesControl from './routes/control.routes.js'
import routesHorario from './routes/horarios.routes.js'
import "./models/catedraticos.model.js";
import "./models/horarios.model.js";
import "./models/control.model.js";
import "./models/logs.model.js";
import "./models/relaciones.model.js";
import "dotenv/config";


const app = express();
app.use(express.json());
app.use(routesCatedraticos);
app.use(routesControl);
app.use(routesHorario);


const PORT = process.env.PORT || 4001;

const main = () => {
  app.listen(PORT, async () => {
    try {
      await sequelize.sync();
      console.log("Conexion exitosa.");
      console.log("Escuchando en el puerto " + PORT);
    } catch (error) {
      console.error("No se pudo conectar a la base de datos:", error);
    }
  });
};

main();
