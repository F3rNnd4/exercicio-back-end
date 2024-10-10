import { Router } from "express";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Rota teste que tem que funfar" });
});

export default routes;