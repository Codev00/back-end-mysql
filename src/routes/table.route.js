import { TableController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.post("/create", TableController.createTable);
router.get("/:id", TableController.getTable);
router.put("/edit/:id", TableController.editTable);
router.delete("/delete/:id", TableController.deleteTable);

export default router;
