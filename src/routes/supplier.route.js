import { SupplierController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", SupplierController.getIngredient);
router.post("/create", SupplierController.createIngredient);
router.put("/edit/:id", SupplierController.editIngredient);
router.delete("/delete/:id", SupplierController.deleteIngredient);

export default router;
