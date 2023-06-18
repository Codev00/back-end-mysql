import { IngredientController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", IngredientController.getIngredient);
router.post("/create", IngredientController.createIngredient);
router.put("/edit/:id", IngredientController.editIngredient);
router.delete("/delete/:id", IngredientController.deleteIngredient);

export default router;
