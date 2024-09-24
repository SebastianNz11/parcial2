import { Router } from "express";
import {
  getHorarioById,
  getHorarios,
  deleteHorario,
  postHorario,
  putHorario
} from "../controllers/horarios.controller.js";

const routes = Router();

// RUTAS PARA HORARIOS
routes.get("/horarios", getHorarios);
routes.post("/horarios", postHorario);
routes.put("/horarios/:id", putHorario);
routes.get("/horarios/:id", getHorarioById);
routes.delete("/horarios/:id", deleteHorario);

export default routes;
