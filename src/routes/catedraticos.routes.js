import { Router } from "express";
import {
  getCatedraticoById,
  getCatedraticos,
  deleteCatedratico,
  postCatedratico,
  putCatedratico
} from "../controllers/catedraricos.controller";

const routes = Router();

//RUTAS PARA CLIENTES
routes.get("/catedraticos", getCatedraticos);
routes.post("/catedraticos", postCatedratico);
routes.put("/catedraticos/:id",putCatedratico);
routes.get("/catedraticos/:id", getCatedraticoById);
routes.delete("/catedraticos/:id",deleteCatedratico);

export default routes;
