import { AreaController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", AreaController.getArea);
router.post("/create", AreaController.createArea);
router.put("/edit/:id", AreaController.EditArea);
router.delete("/delete/:id", AreaController.DeleteArea);

export default router;
