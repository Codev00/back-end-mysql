import express from "express";
import { BillController } from "../controllers/index.js";

const router = express.Router();

router.post("/create", BillController.createBill);
router.get("/:id", BillController.getBill);
router.put("/edit/:id", BillController.updateBill);
router.delete("/delete/:id", BillController.deleteBill);

export default router;
