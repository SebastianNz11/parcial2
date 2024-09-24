import { Router } from "express";
import {
  getControlById,
  getControles,
  deleteControl,
  postControl,
  putControl
} from "../controllers/control.controller.js";

const routes = Router();

// RUTAS PARA CONTROL
routes.get("/controles", getControles);
routes.post("/controles", postControl);
routes.put("/controles/:id", putControl);
routes.get("/controles/:id", getControlById);
routes.delete("/controles/:id", deleteControl);

export default routes;
