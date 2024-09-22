import express from "express";
import { sequelize } from "./database/database.js";
import "dotenv/config";
const app = express();
const PORT = process.env.PORT || 4001;

const main = () => {
  app.listen(PORT, async () => {
    try {
      await sequelize.authenticate();
      console.log("Conexion exitosa.");
      console.log("Escuchando en el puerto " + PORT);
    } catch (error) {
      console.error("No se pudo conectar a la base de datos:", error);
    }
  });
};

main();
