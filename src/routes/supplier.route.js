import { SupplierController } from "../controllers/index.js";
import express from "express";

const router = express.Router();

router.get("/:id", SupplierController.getSupplier);
router.post("/create", SupplierController.createSupplier);
router.put("/edit/:id", SupplierController.editSupplier);
router.delete("/delete/:id", SupplierController.deleteSupplier);

export default router;
