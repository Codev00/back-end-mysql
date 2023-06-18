import { MaterialController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", MaterialController.getMaterial);
router.post("/create", MaterialController.createMaterial);
router.put("/edit/:id", MaterialController.editMaterial);
router.delete("/delete/:id", MaterialController.deleteMaterial);

export default router;
