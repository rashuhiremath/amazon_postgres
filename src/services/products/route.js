import { Router } from "express";

import usersHandler from "./handler.js";

const router = Router();

router.get("/", usersHandler.getAll);

router.post("/", usersHandler.createProduct);

router
  .route("/:id")
  .get(usersHandler.getById)
  .put(usersHandler.updateProductById)
  .delete(usersHandler.deleteProductById);

export default router;