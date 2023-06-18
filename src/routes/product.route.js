import { ProductController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", ProductController.getProduct);
router.post("/create", ProductController.createProduct);
router.put("/edit/:id", ProductController.editProduct);
router.delete("/delete/:id", ProductController.deleteProduct);

export default router;
